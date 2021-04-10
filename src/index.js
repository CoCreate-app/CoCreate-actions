// -testing1
const CoCreateAction = {
  attribute: 'data-actions',
  actions: {},
  selectedStage: [],
  stageIndex: 0,
  selectedElement: null,
  
  completedEventName: 'completedEvent',
  
  __init: function() {
    this.actionButtonEvent()
  },

  actionButtonEvent: function() {
    const self = this;
    document.addEventListener('click', function(event) {
      let btn = event.target;
      if (!btn.getAttribute('data-actions')) {
        btn = event.target.closest('[data-actions]');
      }
      if (!btn) return;
      event.preventDefault();

      let actions = (btn.getAttribute(self.attribute) || "").replace(/\s/g, '').split(',');
      if (actions.length == 0) return;
      self.stageIndex = 0;
      self.selectedStage = actions;
      
      //. run function
      self.selectedElement = btn;
      self.__runActionFunc();
    })
  },
  
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
    //. register events
    
    for (let __key in this.actions) {
      if (__key != key && this.actions[__key]['endEvent'] === endEvent) {
        return;
      }
    }
    
    //. register events
    const _this = this;
    document.addEventListener(endEvent, function(e) {
      _this.__nextAction(endEvent, e.detail)
    });
  },
  
  __runActionFunc: function(data) {

    if (this.stageIndex >= this.selectedStage.length) {

      //. if latest case, it will be run aTag
      if (this.stageIndex == this.selectedStage.length) {
        this.__runAtag(this.selectedElement);        
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
        this.__moveNextAction();
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
    this.__moveNextAction(data);
  },
  
  __runAtag: function(button) {
    var aTag = button.querySelector('a');
          
    if (aTag) {
      // CoCreate.logic.setLinkProcess(aTag)
    }
  },
  
  //. special action
  
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
          self.__moveNextAction(eventData);
        }, { once: true })
        break;
      case 'timeout':
        let delayTime = parseInt(param);
        if (delayTime > 0) {
          setTimeout(function() {
            console.log("Timeout ======= " + param)
            self.__moveNextAction(data);
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
  
  __moveNextAction: function(data) {
    this.stageIndex ++;
    this.__runActionFunc(data);
  },
}


CoCreateAction.__init();

export default CoCreateAction;