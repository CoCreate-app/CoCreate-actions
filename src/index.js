// -testing1
const CoCreateAction = {
  attribute: 'actions',
  actions: {},
  selectedStage: [],
  stageIndex: 0,
  selectedElement: null,
  completedEventName: 'completedEvent',
  
  init: function({action, callback, endEvent}) {
    this.registerEvent(action, callback, null, endEvent);
  },
  
  /**
   * key: string
   * runFunc: function
   * instance: object
   * endEvent: string
   **/
  registerEvent: function(key, runFunc, instance, endEvent) {
    if (this.actions[key]) {
      return;
    }
    
    this.actions[key] = {
      key: key,
      runFunc: runFunc,
      instance: instance || window,
      endEvent: endEvent
    }

    for (let __key in this.actions) {
      if (__key != key && this.actions[__key]['endEvent'] === endEvent) {
        return;
      }
    }
    
    const _this = this;
    document.addEventListener(endEvent, function(e) {
      _this.__nextAction(endEvent, e.detail)
    });
  },
  
  initActions: function() {
    const self = this;
    document.addEventListener('click', function(event) {
      let btn = event.target;
      if (!btn.getAttribute('actions')) {
        btn = event.target.closest('[actions]');
      }
      if (!btn) return;
      event.preventDefault();

      let actions = (btn.getAttribute(self.attribute) || "").replace(/\s/g, '').split(',');
      if (actions.length == 0) return;
      self.stageIndex = 0;
      self.selectedStage = actions;
      
      //. run function
      self.selectedElement = btn;
      self.__runAction();
    })
  },
  
  __runAction: function(data) {

    if (this.stageIndex >= this.selectedStage.length) {

      if (this.stageIndex == this.selectedStage.length) {
        this.__runLink(this.selectedElement);        
      }
      return;
    }
    
    const actionName = this.selectedStage[this.stageIndex];
    //. run function
    const action = this.actions[actionName];
    if (action) {
      if (action.runFunc) {
        action.runFunc.call(null, this.selectedElement, data);
      } else {
        this.__nextAction(action.endEvent, {});
      }
    } else {
      let status = this.__runSpecialAction(actionName, data);
      if (status === "next") {
        this.__runNextAction();
      }
    }
  },
  
  __nextAction: function(eventName, data) {
    const key = this.selectedStage[this.stageIndex];
    if (!key) {
      return ;
    }
    if (eventName !== this.actions[key].endEvent) {
      return;
    }
    this.__runNextAction(data);
  },
  
  __runSpecialAction: function(actionName, data) {
    let matches = /(\w+)\{([a-zA-Z0-9_ \-#$.]+)\}/gm.exec(actionName)
    
    if (!matches || matches.length < 3) {
      return "next";
    }
    
    let type = matches[1], param = matches[2].trim()
    if (!param) return "next";
    
    const self = this;
    switch (type) {
      case 'event':
        console.log("Waiting Event....");
        document.addEventListener(param, (eventData) => {
          console.log('Event Action (Received event from other section) ====== ' + param);
          self.__runNextAction(eventData);
        }, { once: true })
        break;
      case 'timeout':
        let delayTime = parseInt(param);
        if (delayTime > 0) {
          setTimeout(function() {
            console.log("Timeout ======= " + param)
            self.__runNextAction(data);
          }, parseInt(param));
        }
        break;
      case 'action':
        let btn = document.querySelector(param);
        if (btn) {
          btn.click();
        }
        break;
      default:
        return "next";
    }
  },
  
  __runNextAction: function(data) {
    this.stageIndex ++;
    this.__runAction(data);
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
    if (typeof CoCreate.logic !== 'undefined') {
        CoCreate.logic.runLink(link)
    }
    else if (link.hasAttribute('href')) {
      window.location.href = link.getAttribute('href');
    }
  },
}


CoCreateAction.initActions();

export default CoCreateAction;