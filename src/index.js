import { queryDocumentSelectorAll } from '@cocreate/utils'

const CoCreateAction = {
    attribute: 'actions',
    actions: {},

    /**
     * name: string
     * callback: function
     * endEvent: string
     **/
    init: function(name, callback, endEvent) {
        if (this.actions[name])
            return;

        this.actions[name] = {
            name,
            callback,
            endEvent: endEvent || name
        }


        for (let __key in this.actions) {
            if (__key != name && this.actions[__key]['endEvent'] === endEvent)
                return;
        }
    },

    initActions: function() {
        const self = this;
        document.addEventListener('click', function(event) {
            let btn = event.target;
            if (!btn.getAttribute('actions'))
                btn = event.target.closest('[actions]');

            if (!btn) return;
            event.preventDefault();

            let actions = (btn.getAttribute(self.attribute) || "").replace(/\s/g, '').split(',');
            if (actions.length == 0) return;

            let index = 0;
            let stagedActions = [];
            for (let action of actions) {
                let [name, param] = action.split('(')
                if (param)
                    param = param.substring(0, (param.length - 1))

                stagedActions.push({name, param})        
            }

            self.__runAction(stagedActions, index, btn);
        })
    },

    __runAction: function(actions, index, btn) {

        if (index >= actions.length) {

            if (index == actions.length) {
                this.__runLink(btn);
            }
            return;
        }

        const currentAction = actions[index];
        if (!currentAction) return
        const actionName = currentAction.name
        const action = this.actions[actionName];

        if (action) {
            const self = this
            document.addEventListener(action.endEvent, function() {
                self.__runNextAction(actions, index, btn);
            }, { once: true });

            if (action.callback)
                action.callback.call(null, btn, currentAction.param);
            else
                this.__runNextAction(actions, index, btn);            

        }
        else {
            let status = this.__runSpecialAction(actions, index, btn, actionName, currentAction.param);
            if (status === "next") {
                this.__runNextAction(actions, index, btn);
            }
        }
    },

    __runSpecialAction: function(actions, index, btn, actionName, param) {
        if (!param) return "next";

        const self = this;
        switch (actionName) {
            case 'event':
                console.log("Waiting Event....");
                document.addEventListener(param, () => {
                    console.log('Event Action (Received event from other section) ====== ' + param);
                    self.__runNextAction(actions, index, btn);
                }, { once: true })
                break;
            case 'timeout':
                let delayTime = parseInt(param);
                if (delayTime > 0) {
                    setTimeout(function() {
                        console.log("Timeout ======= " + param)
                        self.__runNextAction(actions, index, btn);
                    }, parseInt(param));
                }
                break;
            case 'action':
                let btns = queryDocumentSelectorAll(param);
                for (let btn of btns) {
                    btn.click();
                }
                break;
            default:
                return "next";
        }
    },

    __runNextAction: function(actions, index, btn) {
        this.__runAction(actions, index += 1, btn);
    },

    __runLink: function(element) {
        let link = element.closest('[href], [target], [pass_to]');
        if (!link) {
            let link = element.querySelector('[href], [target], [pass_to]');
            if (!link) return;
            this.__run(link);
        }
        this.__run(link);
    },

    __run: function(link) {
        if (typeof CoCreate.link !== 'undefined') {
            CoCreate.link.runLink(link)
        }
        else if (link.hasAttribute('href')) {
            window.location.href = link.getAttribute('href');
        }
    },
}


CoCreateAction.initActions();

export default CoCreateAction;
