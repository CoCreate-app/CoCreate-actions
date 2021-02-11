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
  // init: function(container) {
    
  //   const __container = container || document
  //   if (!__container.querySelectorAll) {
		// 	return;
		// }
		
		// let buttons = __container.querySelectorAll("[data-actions]");

		// for (let i = 0; i < buttons.length; i++) {
		//   this.actionButtonEvent(buttons[i]);
		// }
  // },
  
  // actionButtonEvent: function(btn) {
  //   const _this = this;    
	 // let checkActions = btn.getAttribute('data-actions') || "";
	 // checkActions = checkActions.replace(/\s/g, '').split(',');
	  
	 // if (checkActions.length == 0) {
	 //   return;
	 // }

  //   btn.addEventListener('click', function(event) {
  //     event.preventDefault();
  //     let actions = this.getAttribute(_this.attribute) || "";
  //     actions = actions.replace(/\s/g, '').split(',');
  //     _this.stageIndex = 0;
  //     _this.selectedStage = actions;
      
  //     //. run function
  //     _this.selectedElement = btn;
  //     _this.__runActionFunc();
      
  //   })
  // },
  
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
    
    const key = this.selectedStage[this.stageIndex];
    //. run function
    const action = this.actions[key];
    if (action) {
      if (action.runFunc) {
        action.runFunc.call(null, this.selectedElement, data);
      } else {
        this.__nextAction(action.endEvent, {});
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
    this.stageIndex ++;
    this.__runActionFunc(data);
  },
  
  __runAtag: function(button) {
    var aTag = button.querySelector('a');
          
    if (aTag) {
      CoCreate.logic.setLinkProcess(aTag)
    }
  }
}


CoCreateAction.__init();

export default CoCreateAction;