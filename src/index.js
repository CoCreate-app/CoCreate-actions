import Observer from "@cocreate/observer";
import { queryElements } from "@cocreate/utils";
import uuid from "@cocreate/uuid";

const attribute = "actions";
const actions = {};

/**
 * name: string
 * callback: function
 * endEvent: string
 **/
function init(data) {
	if (!Array.isArray(data)) data = [data];
	for (let { name, callback, endEvent } of data) {
		if (!Array.isArray(name)) name = [name];
		for (let i = 0; i < name.length; i++) {
			if (actions[name[i]]) continue;

			actions[name[i]] = {
				name: name[i],
				callback,
				endEvent: endEvent || name[i]
			};
		}
	}
}

function initActions(elements) {
	if (!elements) {
		elements = document.querySelectorAll("[actions]");
	} else if (
		!(elements instanceof HTMLCollection) &&
		!(elements instanceof NodeList) &&
		!Array.isArray(elements)
	) {
		elements = [elements];
	}

	// Add click event listeners to elements
	for (let i = 0; i < elements.length; i++) {
		initEvent(elements[i]);
	}
}

function initEvent(element) {
	element.addEventListener("click", eventFunction);
}

function eventFunction(event) {
	let target = event.target;

	if (!target.getAttribute(attribute)) {
		target = event.target.closest(`[${attribute}]`);
	}

	if (!target) return;

	if (target.tagName.toLowerCase() === "form") {
		const pattern =
			/^(https?:\/\/)?([\w.-]+)\.([a-z]{2,})(:\d{1,5})?(\/.*)?$/i;
		if (pattern.test(target.action)) return target.submit();
	}

	event.preventDefault();

	let actions = (target.getAttribute(attribute) || "").split(/\s*,\s*/);
	if (actions.length === 0) return;

	let index = 0;
	let stagedActions = [];
	for (let action of actions) {
		let [name, params] = action.split("(");
		if (params) params = params.substring(0, params.length - 1);

		stagedActions.push({ name, params });
	}

	runAction(stagedActions, index, target);
}

function runAction(stagedActions, index, element) {
	if (index >= stagedActions.length) {
		if (index == stagedActions.length) {
			runSubmit(element);
			runLink(element);
		}
		return;
	}

	const currentAction = stagedActions[index];
	if (!currentAction) return;

	let actionName = currentAction.name;
	if (actionName.includes(".")) {
		let name = actionName.split(".")[0];
		currentAction.method = actionName.substring(name.length + 1);
		currentAction.name = actionName = name;
		currentAction.endEvent = uuid.generate(6);
	}

	const action = actions[actionName];

	if (action) {
		element.addEventListener(
			currentAction.endEvent || action.endEvent,
			function () {
				runNextAction(stagedActions, index, element);
			},
			{ once: true }
		);

		if (action.callback) {
			const form = element.closest("form");
			action.callback.call(null, { element, form, ...currentAction });
		} else runNextAction(stagedActions, index, element);
	} else {
		let status = runSpecialAction(
			stagedActions,
			index,
			element,
			actionName,
			currentAction.params
		);
		if (status === "next") {
			runNextAction(stagedActions, index, element);
		}
	}
}

function runSpecialAction(actions, index, element, actionName, params) {
	if (!params && actionName !== "submit") return "next";
	let elements,
		status = "next";
	switch (actionName) {
		case "event":
			console.log("Waiting Event....");
			status = "";
			element.addEventListener(
				params,
				() => {
					console.log(
						"Event Action (Received event from other section) ====== " +
							params
					);
					runNextAction(actions, index, element);
				},
				{ once: true }
			);
			break;
		case "timeout":
			status = "";

			let delayTime = parseInt(params);
			if (delayTime > 0) {
				setTimeout(function () {
					console.log("Timeout ======= " + params);
					runNextAction(actions, index, element);
				}, parseInt(params));
			}
			break;
		case "action":
			elements = queryElements({
				element,
				selector: params,
				type: "selector"
			});
			for (let i = 0; i < elements.length; i++) {
				elements[i].click();
			}
			break;
		case "read":
		case "save":
		case "renderValue":
			elements = queryElements({
				element,
				selector: params,
				type: "selector"
			});
			for (let i = 0; i < elements.length; i++) {
				if (elements[i][actionName]) elements[i][actionName]();
			}
			break;
		case "submit":
			status = "";

			let form = element.closest("form");
			if (form) {
				// Attach a listener for the custom "submitted" event
				element.addEventListener(
					"submitted",
					(event) => {
						runNextAction(actions, index, element);
					},
					{ once: true } // Ensures the event is only handled once
				);

				// Create a custom submit event with additional details
				const submitEvent = new CustomEvent("submit", {
					bubbles: true,
					cancelable: true,
					detail: {
						element, // Add details about the triggering element
						form // Add a reference to the form
					}
				});

				// Dispatch the custom submit event
				if (form.dispatchEvent(submitEvent)) {
					form.submit(); // Proceed with form submission if the event isn't canceled
				}
			}
			break;
		default:
			elements = queryElements({
				element,
				selector: params,
				type: "selector"
			});
			for (let i = 0; i < elements.length; i++) {
				if (elements[i][actionName]) elements[i][actionName]();
			}
	}

	return status;
}

function runNextAction(actions, index, element) {
	runAction(actions, (index += 1), element);
}

function runSubmit(element) {
	let button = element.closest('[type="submit"]');
	if (!button) button = element.querySelector('[type="submit"]');
	if (button) {
		let form = element.closest("form");
		if (form && form.action) {
			const pattern =
				/^(https?:\/\/)?([\w.-]+)\.([a-z]{2,})(:\d{1,5})?(\/.*)?$/i;
			if (pattern.test(form.action)) form.submit();
		}
	}
}

function runLink(element) {
	let link = element.closest("[href], [target], [state_to]");
	if (!link) link = element.querySelector("[href], [target], [state_to]");
	if (link) run(link);
}

function run(link) {
	if (typeof CoCreate.link !== "undefined") {
		CoCreate.link.open(link);
	} else if (link.hasAttribute("href")) {
		let href = link.getAttribute("href") || "";
		// Normalize both URLs to compare paths in a uniform way
		const currentPath = new URL(location.href).pathname.replace(
			"/index.html",
			"/"
		);
		const targetPath = new URL(href, location.href).pathname.replace(
			"/index.html",
			"/"
		);

		if (currentPath !== targetPath) {
			location.href = href;
		}
	}
}

Observer.init({
	name: "actions",
	types: ["addedNodes"],
	selector: "[actions]",
	callback(mutation) {
		initActions(mutation.target);
	}
});

initActions();

export default { init };
