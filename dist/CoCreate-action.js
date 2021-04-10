(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["action"] = factory();
	else
		root["CoCreate"] = root["CoCreate"] || {}, root["CoCreate"]["action"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "../CoCreate-components/CoCreate-action/src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../CoCreate-components/CoCreate-action/src/index.js":
/*!***********************************************************!*\
  !*** ../CoCreate-components/CoCreate-action/src/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n// -testing1\nconst CoCreateAction = {\n  attribute: 'data-actions',\n  actions: {},\n  selectedStage: [],\n  stageIndex: 0,\n  selectedElement: null,\n  completedEventName: 'completedEvent',\n  __init: function () {\n    this.actionButtonEvent();\n  },\n  // init: function(container) {\n  //   const __container = container || document\n  //   if (!__container.querySelectorAll) {\n  // \treturn;\n  // }\n  // let buttons = __container.querySelectorAll(\"[data-actions]\");\n  // for (let i = 0; i < buttons.length; i++) {\n  //   this.actionButtonEvent(buttons[i]);\n  // }\n  // },\n  // actionButtonEvent: function(btn) {\n  //   const _this = this;    \n  // let checkActions = btn.getAttribute('data-actions') || \"\";\n  // checkActions = checkActions.replace(/\\s/g, '').split(',');\n  // if (checkActions.length == 0) {\n  //   return;\n  // }\n  //   btn.addEventListener('click', function(event) {\n  //     event.preventDefault();\n  //     let actions = this.getAttribute(_this.attribute) || \"\";\n  //     actions = actions.replace(/\\s/g, '').split(',');\n  //     _this.stageIndex = 0;\n  //     _this.selectedStage = actions;\n  //     //. run function\n  //     _this.selectedElement = btn;\n  //     _this.__runActionFunc();\n  //   })\n  // },\n  actionButtonEvent: function () {\n    const self = this;\n    document.addEventListener('click', function (event) {\n      let btn = event.target;\n\n      if (!btn.getAttribute('data-actions')) {\n        btn = event.target.closest('[data-actions]');\n      }\n\n      if (!btn) return;\n      event.preventDefault();\n      let actions = (btn.getAttribute(self.attribute) || \"\").replace(/\\s/g, '').split(',');\n      if (actions.length == 0) return;\n      self.stageIndex = 0;\n      self.selectedStage = actions; //. run function\n\n      self.selectedElement = btn;\n\n      self.__runActionFunc();\n    });\n  },\n  init: function ({\n    action,\n    callback,\n    endEvent\n  }) {\n    this.registerEvent(action, callback, null, endEvent);\n  },\n\n  /**\n   * key: string\n   * runFunc: function\n   * instance: object\n   * endEvent: string\n   **/\n  registerEvent: function (key, runFunc, instance, endEvent) {\n    if (this.actions[key]) {\n      return;\n    }\n\n    this.actions[key] = {\n      key: key,\n      runFunc: runFunc,\n      instance: instance || window,\n      endEvent: endEvent\n    }; //. register events\n\n    for (let __key in this.actions) {\n      if (__key != key && this.actions[__key]['endEvent'] === endEvent) {\n        return;\n      }\n    } //. register events\n\n\n    const _this = this;\n\n    document.addEventListener(endEvent, function (e) {\n      _this.__nextAction(endEvent, e.detail);\n    });\n  },\n  __runActionFunc: function (data) {\n    if (this.stageIndex >= this.selectedStage.length) {\n      //. if latest case, it will be run aTag\n      if (this.stageIndex == this.selectedStage.length) {\n        this.__runAtag(this.selectedElement);\n      }\n\n      return;\n    }\n\n    const key = this.selectedStage[this.stageIndex]; //. run function\n\n    const action = this.actions[key];\n\n    if (action) {\n      if (action.runFunc) {\n        action.runFunc.call(null, this.selectedElement, data);\n      } else {\n        this.__nextAction(action.endEvent, {});\n      }\n    }\n  },\n  __nextAction: function (eventName, data) {\n    const key = this.selectedStage[this.stageIndex];\n\n    if (!key) {\n      return;\n    }\n\n    if (eventName !== this.actions[key].endEvent) {\n      return;\n    }\n\n    this.stageIndex++;\n\n    this.__runActionFunc(data);\n  },\n  __runAtag: function (button) {\n    var aTag = button.querySelector('a');\n\n    if (aTag) {\n      CoCreate.logic.setLinkProcess(aTag);\n    }\n  }\n};\n\nCoCreateAction.__init();\n\nvar _default = CoCreateAction;\nexports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Db0NyZWF0ZS5hY3Rpb24vLi4vQ29DcmVhdGUtY29tcG9uZW50cy9Db0NyZWF0ZS1hY3Rpb24vc3JjL2luZGV4LmpzPzgyNWIiXSwibmFtZXMiOlsiQ29DcmVhdGVBY3Rpb24iLCJhdHRyaWJ1dGUiLCJhY3Rpb25zIiwic2VsZWN0ZWRTdGFnZSIsInN0YWdlSW5kZXgiLCJzZWxlY3RlZEVsZW1lbnQiLCJjb21wbGV0ZWRFdmVudE5hbWUiLCJfX2luaXQiLCJhY3Rpb25CdXR0b25FdmVudCIsInNlbGYiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsImJ0biIsInRhcmdldCIsImdldEF0dHJpYnV0ZSIsImNsb3Nlc3QiLCJwcmV2ZW50RGVmYXVsdCIsInJlcGxhY2UiLCJzcGxpdCIsImxlbmd0aCIsIl9fcnVuQWN0aW9uRnVuYyIsImluaXQiLCJhY3Rpb24iLCJjYWxsYmFjayIsImVuZEV2ZW50IiwicmVnaXN0ZXJFdmVudCIsImtleSIsInJ1bkZ1bmMiLCJpbnN0YW5jZSIsIndpbmRvdyIsIl9fa2V5IiwiX3RoaXMiLCJlIiwiX19uZXh0QWN0aW9uIiwiZGV0YWlsIiwiZGF0YSIsIl9fcnVuQXRhZyIsImNhbGwiLCJldmVudE5hbWUiLCJidXR0b24iLCJhVGFnIiwicXVlcnlTZWxlY3RvciIsIkNvQ3JlYXRlIiwibG9naWMiLCJzZXRMaW5rUHJvY2VzcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQSxNQUFNQSxjQUFjLEdBQUc7QUFDckJDLFdBQVMsRUFBRSxjQURVO0FBRXJCQyxTQUFPLEVBQUUsRUFGWTtBQUdyQkMsZUFBYSxFQUFFLEVBSE07QUFJckJDLFlBQVUsRUFBRSxDQUpTO0FBS3JCQyxpQkFBZSxFQUFFLElBTEk7QUFPckJDLG9CQUFrQixFQUFFLGdCQVBDO0FBU3JCQyxRQUFNLEVBQUUsWUFBVztBQUNqQixTQUFLQyxpQkFBTDtBQUNELEdBWG9CO0FBWXJCO0FBRUE7QUFDQTtBQUNBO0FBQ0E7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cmMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAtdGVzdGluZzFcbmNvbnN0IENvQ3JlYXRlQWN0aW9uID0ge1xuICBhdHRyaWJ1dGU6ICdkYXRhLWFjdGlvbnMnLFxuICBhY3Rpb25zOiB7fSxcbiAgc2VsZWN0ZWRTdGFnZTogW10sXG4gIHN0YWdlSW5kZXg6IDAsXG4gIHNlbGVjdGVkRWxlbWVudDogbnVsbCxcbiAgXG4gIGNvbXBsZXRlZEV2ZW50TmFtZTogJ2NvbXBsZXRlZEV2ZW50JyxcbiAgXG4gIF9faW5pdDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5hY3Rpb25CdXR0b25FdmVudCgpXG4gIH0sXG4gIC8vIGluaXQ6IGZ1bmN0aW9uKGNvbnRhaW5lcikge1xuICAgIFxuICAvLyAgIGNvbnN0IF9fY29udGFpbmVyID0gY29udGFpbmVyIHx8IGRvY3VtZW50XG4gIC8vICAgaWYgKCFfX2NvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKSB7XG5cdFx0Ly8gXHRyZXR1cm47XG5cdFx0Ly8gfVxuXHRcdFxuXHRcdC8vIGxldCBidXR0b25zID0gX19jb250YWluZXIucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLWFjdGlvbnNdXCIpO1xuXG5cdFx0Ly8gZm9yIChsZXQgaSA9IDA7IGkgPCBidXR0b25zLmxlbmd0aDsgaSsrKSB7XG5cdFx0Ly8gICB0aGlzLmFjdGlvbkJ1dHRvbkV2ZW50KGJ1dHRvbnNbaV0pO1xuXHRcdC8vIH1cbiAgLy8gfSxcbiAgXG4gIC8vIGFjdGlvbkJ1dHRvbkV2ZW50OiBmdW5jdGlvbihidG4pIHtcbiAgLy8gICBjb25zdCBfdGhpcyA9IHRoaXM7ICAgIFxuXHQgLy8gbGV0IGNoZWNrQWN0aW9ucyA9IGJ0bi5nZXRBdHRyaWJ1dGUoJ2RhdGEtYWN0aW9ucycpIHx8IFwiXCI7XG5cdCAvLyBjaGVja0FjdGlvbnMgPSBjaGVja0FjdGlvbnMucmVwbGFjZSgvXFxzL2csICcnKS5zcGxpdCgnLCcpO1xuXHQgIFxuXHQgLy8gaWYgKGNoZWNrQWN0aW9ucy5sZW5ndGggPT0gMCkge1xuXHQgLy8gICByZXR1cm47XG5cdCAvLyB9XG5cbiAgLy8gICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAvLyAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgLy8gICAgIGxldCBhY3Rpb25zID0gdGhpcy5nZXRBdHRyaWJ1dGUoX3RoaXMuYXR0cmlidXRlKSB8fCBcIlwiO1xuICAvLyAgICAgYWN0aW9ucyA9IGFjdGlvbnMucmVwbGFjZSgvXFxzL2csICcnKS5zcGxpdCgnLCcpO1xuICAvLyAgICAgX3RoaXMuc3RhZ2VJbmRleCA9IDA7XG4gIC8vICAgICBfdGhpcy5zZWxlY3RlZFN0YWdlID0gYWN0aW9ucztcbiAgICAgIFxuICAvLyAgICAgLy8uIHJ1biBmdW5jdGlvblxuICAvLyAgICAgX3RoaXMuc2VsZWN0ZWRFbGVtZW50ID0gYnRuO1xuICAvLyAgICAgX3RoaXMuX19ydW5BY3Rpb25GdW5jKCk7XG4gICAgICBcbiAgLy8gICB9KVxuICAvLyB9LFxuICBcbiAgYWN0aW9uQnV0dG9uRXZlbnQ6IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIGxldCBidG4gPSBldmVudC50YXJnZXQ7XG4gICAgICBpZiAoIWJ0bi5nZXRBdHRyaWJ1dGUoJ2RhdGEtYWN0aW9ucycpKSB7XG4gICAgICAgIGJ0biA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCdbZGF0YS1hY3Rpb25zXScpO1xuICAgICAgfVxuICAgICAgaWYgKCFidG4pIHJldHVybjtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGxldCBhY3Rpb25zID0gKGJ0bi5nZXRBdHRyaWJ1dGUoc2VsZi5hdHRyaWJ1dGUpIHx8IFwiXCIpLnJlcGxhY2UoL1xccy9nLCAnJykuc3BsaXQoJywnKTtcbiAgICAgIGlmIChhY3Rpb25zLmxlbmd0aCA9PSAwKSByZXR1cm47XG4gICAgICBzZWxmLnN0YWdlSW5kZXggPSAwO1xuICAgICAgc2VsZi5zZWxlY3RlZFN0YWdlID0gYWN0aW9ucztcbiAgICAgIFxuICAgICAgLy8uIHJ1biBmdW5jdGlvblxuICAgICAgc2VsZi5zZWxlY3RlZEVsZW1lbnQgPSBidG47XG4gICAgICBzZWxmLl9fcnVuQWN0aW9uRnVuYygpO1xuICAgIH0pXG4gIH0sXG4gIFxuICBpbml0OiBmdW5jdGlvbih7YWN0aW9uLCBjYWxsYmFjaywgZW5kRXZlbnR9KSB7XG4gICAgdGhpcy5yZWdpc3RlckV2ZW50KGFjdGlvbiwgY2FsbGJhY2ssIG51bGwsIGVuZEV2ZW50KTtcbiAgfSxcbiAgXG4gIC8qKlxuICAgKiBrZXk6IHN0cmluZ1xuICAgKiBydW5GdW5jOiBmdW5jdGlvblxuICAgKiBpbnN0YW5jZTogb2JqZWN0XG4gICAqIGVuZEV2ZW50OiBzdHJpbmdcbiAgICoqL1xuICByZWdpc3RlckV2ZW50OiBmdW5jdGlvbihrZXksIHJ1bkZ1bmMsIGluc3RhbmNlLCBlbmRFdmVudCkge1xuICAgIGlmICh0aGlzLmFjdGlvbnNba2V5XSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBcbiAgICB0aGlzLmFjdGlvbnNba2V5XSA9IHtcbiAgICAgIGtleToga2V5LFxuICAgICAgcnVuRnVuYzogcnVuRnVuYyxcbiAgICAgIGluc3RhbmNlOiBpbnN0YW5jZSB8fCB3aW5kb3csXG4gICAgICBlbmRFdmVudDogZW5kRXZlbnRcbiAgICB9XG4gICAgLy8uIHJlZ2lzdGVyIGV2ZW50c1xuICAgIFxuICAgIGZvciAobGV0IF9fa2V5IGluIHRoaXMuYWN0aW9ucykge1xuICAgICAgaWYgKF9fa2V5ICE9IGtleSAmJiB0aGlzLmFjdGlvbnNbX19rZXldWydlbmRFdmVudCddID09PSBlbmRFdmVudCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIC8vLiByZWdpc3RlciBldmVudHNcbiAgICBjb25zdCBfdGhpcyA9IHRoaXM7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihlbmRFdmVudCwgZnVuY3Rpb24oZSkge1xuICAgICAgX3RoaXMuX19uZXh0QWN0aW9uKGVuZEV2ZW50LCBlLmRldGFpbClcbiAgICB9KTtcbiAgfSxcbiAgXG4gIF9fcnVuQWN0aW9uRnVuYzogZnVuY3Rpb24oZGF0YSkge1xuXG4gICAgaWYgKHRoaXMuc3RhZ2VJbmRleCA+PSB0aGlzLnNlbGVjdGVkU3RhZ2UubGVuZ3RoKSB7XG5cbiAgICAgIC8vLiBpZiBsYXRlc3QgY2FzZSwgaXQgd2lsbCBiZSBydW4gYVRhZ1xuICAgICAgaWYgKHRoaXMuc3RhZ2VJbmRleCA9PSB0aGlzLnNlbGVjdGVkU3RhZ2UubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuX19ydW5BdGFnKHRoaXMuc2VsZWN0ZWRFbGVtZW50KTsgICAgICAgIFxuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBrZXkgPSB0aGlzLnNlbGVjdGVkU3RhZ2VbdGhpcy5zdGFnZUluZGV4XTtcbiAgICAvLy4gcnVuIGZ1bmN0aW9uXG4gICAgY29uc3QgYWN0aW9uID0gdGhpcy5hY3Rpb25zW2tleV07XG4gICAgaWYgKGFjdGlvbikge1xuICAgICAgaWYgKGFjdGlvbi5ydW5GdW5jKSB7XG4gICAgICAgIGFjdGlvbi5ydW5GdW5jLmNhbGwobnVsbCwgdGhpcy5zZWxlY3RlZEVsZW1lbnQsIGRhdGEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fX25leHRBY3Rpb24oYWN0aW9uLmVuZEV2ZW50LCB7fSk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBcbiAgX19uZXh0QWN0aW9uOiBmdW5jdGlvbihldmVudE5hbWUsIGRhdGEpIHtcbiAgICBjb25zdCBrZXkgPSB0aGlzLnNlbGVjdGVkU3RhZ2VbdGhpcy5zdGFnZUluZGV4XTtcbiAgICBpZiAoIWtleSkge1xuICAgICAgcmV0dXJuIDtcbiAgICB9XG4gICAgaWYgKGV2ZW50TmFtZSAhPT0gdGhpcy5hY3Rpb25zW2tleV0uZW5kRXZlbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5zdGFnZUluZGV4ICsrO1xuICAgIHRoaXMuX19ydW5BY3Rpb25GdW5jKGRhdGEpO1xuICB9LFxuICBcbiAgX19ydW5BdGFnOiBmdW5jdGlvbihidXR0b24pIHtcbiAgICB2YXIgYVRhZyA9IGJ1dHRvbi5xdWVyeVNlbGVjdG9yKCdhJyk7XG4gICAgICAgICAgXG4gICAgaWYgKGFUYWcpIHtcbiAgICAgIENvQ3JlYXRlLmxvZ2ljLnNldExpbmtQcm9jZXNzKGFUYWcpXG4gICAgfVxuICB9XG59XG5cblxuQ29DcmVhdGVBY3Rpb24uX19pbml0KCk7XG5cbmV4cG9ydCBkZWZhdWx0IENvQ3JlYXRlQWN0aW9uOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../CoCreate-components/CoCreate-action/src/index.js\n");

/***/ })

/******/ })["default"];
});