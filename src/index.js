import { queryElements } from '@cocreate/utils'

const attribute = 'actions'
const actions = {}

/**
 * name: string
 * callback: function
 * endEvent: string
 **/
function init(data) {
    if (!Array.isArray(data))
        data = [data]
    for (let { name, callback, endEvent } of data) {
        if (!Array.isArray(name))
            name = [name]
        for (let i = 0; i < name.length; i++) {
            if (actions[name[i]])
                continue;

            actions[name[i]] = {
                name: name[i],
                callback,
                endEvent: endEvent || name[i]
            }

        }
    }
}

function initActions() {
    document.addEventListener('click', function (event) {
        let element = event.target;
        if (!element.getAttribute(attribute))
            element = event.target.closest(`[${attribute}]`);

        if (!element) return;
        if (element.tagName === 'form') {
            const pattern = /^(https?:\/\/)?([\w.-]+)\.([a-z]{2,})(:\d{1,5})?(\/.*)?$/i;
            if (pattern.test(url))
                return form.submit()
        }

        event.preventDefault();

        let actions = (element.getAttribute(attribute) || "").replace(/\s/g, '').split(',');
        if (actions.length == 0) return;

        let index = 0;
        let stagedActions = [];
        for (let action of actions) {
            let [name, params] = action.split('(')
            if (params)
                params = params.substring(0, (params.length - 1))

            stagedActions.push({ name, params })
        }

        runAction(stagedActions, index, element);
    })
}

function runAction(actions, index, element) {
    if (index >= actions.length) {
        if (index == actions.length) {
            runSubmit(element)
            runLink(element);
        }
        return;
    }

    const currentAction = actions[index];
    if (!currentAction) return

    const actionName = currentAction.name
    const action = actions[actionName];

    if (action) {
        document.addEventListener(action.endEvent, function () {
            runNextAction(actions, index, element);
        }, { once: true });

        if (action.callback)
            action.callback.call(null, { element, ...currentAction });
        else
            runNextAction(actions, index, element);

    } else {
        let status = runSpecialAction(actions, index, element, actionName, currentAction.params);
        if (status === "next") {
            runNextAction(actions, index, element);
        }
    }
}

function runSpecialAction(actions, index, element, actionName, params) {
    if (!params) return "next";

    switch (actionName) {
        case 'event':
            console.log("Waiting Event....");
            document.addEventListener(params, () => {
                console.log('Event Action (Received event from other section) ====== ' + params);
                runNextAction(actions, index, element);
            }, { once: true })
            break;
        case 'timeout':
            let delayTime = parseInt(params);
            if (delayTime > 0) {
                setTimeout(function () {
                    console.log("Timeout ======= " + params)
                    runNextAction(actions, index, element);
                }, parseInt(params));
            }
            break;
        case 'action':
            let elements = queryElements({ element, selector: params, type: 'selector' });
            for (let i = 0; i < elements.length; i++) {
                elements[i].click();
            }
            break;
        case 'submit':
            let form = closest('form');
            if (form)
                form.click();
            break;
        default:
            return "next";
    }
}

function runNextAction(actions, index, element) {
    runAction(actions, index += 1, element);
}

function runSubmit(element) {
    let button = element.closest('[type="submit"]');
    if (!button)
        button = element.querySelector('[type="submit"]');
    if (button) {
        let form = element.closest('form')
        if (form && form.action) {
            const pattern = /^(https?:\/\/)?([\w.-]+)\.([a-z]{2,})(:\d{1,5})?(\/.*)?$/i;
            if (pattern.test(form.action))
                form.submit()
        }
    }
}

function runLink(element) {
    let link = element.closest('[href], [target], [pass_to]');
    if (!link)
        link = element.querySelector('[href], [target], [pass_to]');
    if (link)
        run(link);
}

function run(link) {
    if (typeof CoCreate.link !== 'undefined') {
        CoCreate.link.runLink(link)
    } else if (link.hasAttribute('href')) {
        window.location.href = link.getAttribute('href');
    }
}


initActions();

export default { init };
