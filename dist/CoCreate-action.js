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
/******/ 	return __webpack_require__(__webpack_require__.s = "../CoCreate-components/CoCreate-actions/src/CoCreate-actions.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../CoCreate-components/CoCreate-actions/src/CoCreate-actions.js":
/*!***********************************************************************!*\
  !*** ../CoCreate-components/CoCreate-actions/src/CoCreate-actions.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// -testing1\nvar CoCreateAction = {\n  attribute: 'data-actions',\n  actions: {},\n  selectedStage: [],\n  stageIndex: 0,\n  selectedElement: null,\n  completedEventName: 'completedEvent',\n  init: function init() {\n    this.actionButtonEvent();\n  },\n  // init: function(container) {\n  //   const __container = container || document\n  //   if (!__container.querySelectorAll) {\n  // \treturn;\n  // }\n  // let buttons = __container.querySelectorAll(\"[data-actions]\");\n  // for (let i = 0; i < buttons.length; i++) {\n  //   this.actionButtonEvent(buttons[i]);\n  // }\n  // },\n  // actionButtonEvent: function(btn) {\n  //   const _this = this;    \n  // let checkActions = btn.getAttribute('data-actions') || \"\";\n  // checkActions = checkActions.replace(/\\s/g, '').split(',');\n  // if (checkActions.length == 0) {\n  //   return;\n  // }\n  //   btn.addEventListener('click', function(event) {\n  //     event.preventDefault();\n  //     let actions = this.getAttribute(_this.attribute) || \"\";\n  //     actions = actions.replace(/\\s/g, '').split(',');\n  //     _this.stageIndex = 0;\n  //     _this.selectedStage = actions;\n  //     //. run function\n  //     _this.selectedElement = btn;\n  //     _this.__runActionFunc();\n  //   })\n  // },\n  actionButtonEvent: function actionButtonEvent() {\n    var self = this;\n    document.addEventListener('click', function (event) {\n      var btn = event.target;\n\n      if (!btn.getAttribute('data-actions')) {\n        btn = event.target.closest('[data-actions]');\n      }\n\n      if (!btn) return;\n      event.preventDefault();\n      var actions = (btn.getAttribute(self.attribute) || \"\").replace(/\\s/g, '').split(',');\n      if (actions.length == 0) return;\n      self.stageIndex = 0;\n      self.selectedStage = actions; //. run function\n\n      self.selectedElement = btn;\n\n      self.__runActionFunc();\n    });\n  },\n  add: function add(_ref) {\n    var action = _ref.action,\n        callback = _ref.callback,\n        endEvent = _ref.endEvent;\n    this.registerEvent(action, callback, null, endEvent);\n  },\n\n  /**\n   * key: string\n   * runFunc: function\n   * instance: object\n   * endEvent: string\n   **/\n  registerEvent: function registerEvent(key, runFunc, instance, endEvent) {\n    if (this.actions[key]) {\n      return;\n    }\n\n    this.actions[key] = {\n      key: key,\n      runFunc: runFunc,\n      instance: instance || window,\n      endEvent: endEvent\n    }; //. register events\n\n    for (var __key in this.actions) {\n      if (__key != key && this.actions[__key]['endEvent'] === endEvent) {\n        return;\n      }\n    } //. register events\n\n\n    var _this = this;\n\n    document.addEventListener(endEvent, function (e) {\n      _this.__nextAction(endEvent, e.detail);\n    });\n  },\n  __runActionFunc: function __runActionFunc(data) {\n    if (this.stageIndex >= this.selectedStage.length) {\n      //. if latest case, it will be run aTag\n      if (this.stageIndex == this.selectedStage.length) {\n        this.__runAtag(this.selectedElement);\n      }\n\n      return;\n    }\n\n    var key = this.selectedStage[this.stageIndex]; //. run function\n\n    var action = this.actions[key];\n\n    if (action) {\n      if (action.runFunc) {\n        action.runFunc.call(null, this.selectedElement, data);\n      } else {\n        this.__nextAction(action.endEvent, {});\n      }\n    }\n  },\n  __nextAction: function __nextAction(eventName, data) {\n    var key = this.selectedStage[this.stageIndex];\n\n    if (!key) {\n      return;\n    }\n\n    if (eventName !== this.actions[key].endEvent) {\n      return;\n    }\n\n    this.stageIndex++;\n\n    this.__runActionFunc(data);\n  },\n  __runAtag: function __runAtag(button) {\n    var aTag = button.querySelector('a');\n\n    if (aTag) {\n      CoCreate.logic.setLinkProcess(aTag);\n    }\n  }\n};\nCoCreateAction.init();\n/* harmony default export */ __webpack_exports__[\"default\"] = (CoCreateAction);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Db0NyZWF0ZS5hY3Rpb24vLi4vQ29DcmVhdGUtY29tcG9uZW50cy9Db0NyZWF0ZS1hY3Rpb25zL3NyYy9Db0NyZWF0ZS1hY3Rpb25zLmpzPzdmOWUiXSwibmFtZXMiOlsiQ29DcmVhdGVBY3Rpb24iLCJhdHRyaWJ1dGUiLCJhY3Rpb25zIiwic2VsZWN0ZWRTdGFnZSIsInN0YWdlSW5kZXgiLCJzZWxlY3RlZEVsZW1lbnQiLCJjb21wbGV0ZWRFdmVudE5hbWUiLCJpbml0IiwiYWN0aW9uQnV0dG9uRXZlbnQiLCJzZWxmIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJidG4iLCJ0YXJnZXQiLCJnZXRBdHRyaWJ1dGUiLCJjbG9zZXN0IiwicHJldmVudERlZmF1bHQiLCJyZXBsYWNlIiwic3BsaXQiLCJsZW5ndGgiLCJfX3J1bkFjdGlvbkZ1bmMiLCJhZGQiLCJhY3Rpb24iLCJjYWxsYmFjayIsImVuZEV2ZW50IiwicmVnaXN0ZXJFdmVudCIsImtleSIsInJ1bkZ1bmMiLCJpbnN0YW5jZSIsIndpbmRvdyIsIl9fa2V5IiwiX3RoaXMiLCJlIiwiX19uZXh0QWN0aW9uIiwiZGV0YWlsIiwiZGF0YSIsIl9fcnVuQXRhZyIsImNhbGwiLCJldmVudE5hbWUiLCJidXR0b24iLCJhVGFnIiwicXVlcnlTZWxlY3RvciIsIkNvQ3JlYXRlIiwibG9naWMiLCJzZXRMaW5rUHJvY2VzcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBLElBQU1BLGNBQWMsR0FBRztBQUNyQkMsV0FBUyxFQUFFLGNBRFU7QUFFckJDLFNBQU8sRUFBRSxFQUZZO0FBR3JCQyxlQUFhLEVBQUUsRUFITTtBQUlyQkMsWUFBVSxFQUFFLENBSlM7QUFLckJDLGlCQUFlLEVBQUUsSUFMSTtBQU9yQkMsb0JBQWtCLEVBQUUsZ0JBUEM7QUFTckJDLE1BQUksRUFBRSxnQkFBVztBQUNmLFNBQUtDLGlCQUFMO0FBQ0QsR0FYb0I7QUFZckI7QUFFQTtBQUNBO0FB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QUVlUCw2RUFBZiIsImZpbGUiOiIuLi9Db0NyZWF0ZS1jb21wb25lbnRzL0NvQ3JlYXRlLWFjdGlvbnMvc3JjL0NvQ3JlYXRlLWFjdGlvbnMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAtdGVzdGluZzFcbmNvbnN0IENvQ3JlYXRlQWN0aW9uID0ge1xuICBhdHRyaWJ1dGU6ICdkYXRhLWFjdGlvbnMnLFxuICBhY3Rpb25zOiB7fSxcbiAgc2VsZWN0ZWRTdGFnZTogW10sXG4gIHN0YWdlSW5kZXg6IDAsXG4gIHNlbGVjdGVkRWxlbWVudDogbnVsbCxcbiAgXG4gIGNvbXBsZXRlZEV2ZW50TmFtZTogJ2NvbXBsZXRlZEV2ZW50JyxcbiAgXG4gIGluaXQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuYWN0aW9uQnV0dG9uRXZlbnQoKVxuICB9LFxuICAvLyBpbml0OiBmdW5jdGlvbihjb250YWluZXIpIHtcbiAgICBcbiAgLy8gICBjb25zdCBfX2NvbnRhaW5lciA9IGNvbnRhaW5lciB8fCBkb2N1bWVudFxuICAvLyAgIGlmICghX19jb250YWluZXIucXVlcnlTZWxlY3RvckFsbCkge1xuXHRcdC8vIFx0cmV0dXJuO1xuXHRcdC8vIH1cblx0XHRcblx0XHQvLyBsZXQgYnV0dG9ucyA9IF9fY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1hY3Rpb25zXVwiKTtcblxuXHRcdC8vIGZvciAobGV0IGkgPSAwOyBpIDwgYnV0dG9ucy5sZW5ndGg7IGkrKykge1xuXHRcdC8vICAgdGhpcy5hY3Rpb25CdXR0b25FdmVudChidXR0b25zW2ldKTtcblx0XHQvLyB9XG4gIC8vIH0sXG4gIFxuICAvLyBhY3Rpb25CdXR0b25FdmVudDogZnVuY3Rpb24oYnRuKSB7XG4gIC8vICAgY29uc3QgX3RoaXMgPSB0aGlzOyAgICBcblx0IC8vIGxldCBjaGVja0FjdGlvbnMgPSBidG4uZ2V0QXR0cmlidXRlKCdkYXRhLWFjdGlvbnMnKSB8fCBcIlwiO1xuXHQgLy8gY2hlY2tBY3Rpb25zID0gY2hlY2tBY3Rpb25zLnJlcGxhY2UoL1xccy9nLCAnJykuc3BsaXQoJywnKTtcblx0ICBcblx0IC8vIGlmIChjaGVja0FjdGlvbnMubGVuZ3RoID09IDApIHtcblx0IC8vICAgcmV0dXJuO1xuXHQgLy8gfVxuXG4gIC8vICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgLy8gICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIC8vICAgICBsZXQgYWN0aW9ucyA9IHRoaXMuZ2V0QXR0cmlidXRlKF90aGlzLmF0dHJpYnV0ZSkgfHwgXCJcIjtcbiAgLy8gICAgIGFjdGlvbnMgPSBhY3Rpb25zLnJlcGxhY2UoL1xccy9nLCAnJykuc3BsaXQoJywnKTtcbiAgLy8gICAgIF90aGlzLnN0YWdlSW5kZXggPSAwO1xuICAvLyAgICAgX3RoaXMuc2VsZWN0ZWRTdGFnZSA9IGFjdGlvbnM7XG4gICAgICBcbiAgLy8gICAgIC8vLiBydW4gZnVuY3Rpb25cbiAgLy8gICAgIF90aGlzLnNlbGVjdGVkRWxlbWVudCA9IGJ0bjtcbiAgLy8gICAgIF90aGlzLl9fcnVuQWN0aW9uRnVuYygpO1xuICAgICAgXG4gIC8vICAgfSlcbiAgLy8gfSxcbiAgXG4gIGFjdGlvbkJ1dHRvbkV2ZW50OiBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICBsZXQgYnRuID0gZXZlbnQudGFyZ2V0O1xuICAgICAgaWYgKCFidG4uZ2V0QXR0cmlidXRlKCdkYXRhLWFjdGlvbnMnKSkge1xuICAgICAgICBidG4gPSBldmVudC50YXJnZXQuY2xvc2VzdCgnW2RhdGEtYWN0aW9uc10nKTtcbiAgICAgIH1cbiAgICAgIGlmICghYnRuKSByZXR1cm47XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBsZXQgYWN0aW9ucyA9IChidG4uZ2V0QXR0cmlidXRlKHNlbGYuYXR0cmlidXRlKSB8fCBcIlwiKS5yZXBsYWNlKC9cXHMvZywgJycpLnNwbGl0KCcsJyk7XG4gICAgICBpZiAoYWN0aW9ucy5sZW5ndGggPT0gMCkgcmV0dXJuO1xuICAgICAgc2VsZi5zdGFnZUluZGV4ID0gMDtcbiAgICAgIHNlbGYuc2VsZWN0ZWRTdGFnZSA9IGFjdGlvbnM7XG4gICAgICBcbiAgICAgIC8vLiBydW4gZnVuY3Rpb25cbiAgICAgIHNlbGYuc2VsZWN0ZWRFbGVtZW50ID0gYnRuO1xuICAgICAgc2VsZi5fX3J1bkFjdGlvbkZ1bmMoKTtcbiAgICB9KVxuICB9LFxuICBcbiAgYWRkOiBmdW5jdGlvbih7YWN0aW9uLCBjYWxsYmFjaywgZW5kRXZlbnR9KSB7XG4gICAgdGhpcy5yZWdpc3RlckV2ZW50KGFjdGlvbiwgY2FsbGJhY2ssIG51bGwsIGVuZEV2ZW50KTtcbiAgfSxcbiAgXG4gIC8qKlxuICAgKiBrZXk6IHN0cmluZ1xuICAgKiBydW5GdW5jOiBmdW5jdGlvblxuICAgKiBpbnN0YW5jZTogb2JqZWN0XG4gICAqIGVuZEV2ZW50OiBzdHJpbmdcbiAgICoqL1xuICByZWdpc3RlckV2ZW50OiBmdW5jdGlvbihrZXksIHJ1bkZ1bmMsIGluc3RhbmNlLCBlbmRFdmVudCkge1xuICAgIGlmICh0aGlzLmFjdGlvbnNba2V5XSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBcbiAgICB0aGlzLmFjdGlvbnNba2V5XSA9IHtcbiAgICAgIGtleToga2V5LFxuICAgICAgcnVuRnVuYzogcnVuRnVuYyxcbiAgICAgIGluc3RhbmNlOiBpbnN0YW5jZSB8fCB3aW5kb3csXG4gICAgICBlbmRFdmVudDogZW5kRXZlbnRcbiAgICB9XG4gICAgLy8uIHJlZ2lzdGVyIGV2ZW50c1xuICAgIFxuICAgIGZvciAobGV0IF9fa2V5IGluIHRoaXMuYWN0aW9ucykge1xuICAgICAgaWYgKF9fa2V5ICE9IGtleSAmJiB0aGlzLmFjdGlvbnNbX19rZXldWydlbmRFdmVudCddID09PSBlbmRFdmVudCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIC8vLiByZWdpc3RlciBldmVudHNcbiAgICBjb25zdCBfdGhpcyA9IHRoaXM7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihlbmRFdmVudCwgZnVuY3Rpb24oZSkge1xuICAgICAgX3RoaXMuX19uZXh0QWN0aW9uKGVuZEV2ZW50LCBlLmRldGFpbClcbiAgICB9KTtcbiAgfSxcbiAgXG4gIF9fcnVuQWN0aW9uRnVuYzogZnVuY3Rpb24oZGF0YSkge1xuXG4gICAgaWYgKHRoaXMuc3RhZ2VJbmRleCA+PSB0aGlzLnNlbGVjdGVkU3RhZ2UubGVuZ3RoKSB7XG5cbiAgICAgIC8vLiBpZiBsYXRlc3QgY2FzZSwgaXQgd2lsbCBiZSBydW4gYVRhZ1xuICAgICAgaWYgKHRoaXMuc3RhZ2VJbmRleCA9PSB0aGlzLnNlbGVjdGVkU3RhZ2UubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuX19ydW5BdGFnKHRoaXMuc2VsZWN0ZWRFbGVtZW50KTsgICAgICAgIFxuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBrZXkgPSB0aGlzLnNlbGVjdGVkU3RhZ2VbdGhpcy5zdGFnZUluZGV4XTtcbiAgICAvLy4gcnVuIGZ1bmN0aW9uXG4gICAgY29uc3QgYWN0aW9uID0gdGhpcy5hY3Rpb25zW2tleV07XG4gICAgaWYgKGFjdGlvbikge1xuICAgICAgaWYgKGFjdGlvbi5ydW5GdW5jKSB7XG4gICAgICAgIGFjdGlvbi5ydW5GdW5jLmNhbGwobnVsbCwgdGhpcy5zZWxlY3RlZEVsZW1lbnQsIGRhdGEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fX25leHRBY3Rpb24oYWN0aW9uLmVuZEV2ZW50LCB7fSk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBcbiAgX19uZXh0QWN0aW9uOiBmdW5jdGlvbihldmVudE5hbWUsIGRhdGEpIHtcbiAgICBjb25zdCBrZXkgPSB0aGlzLnNlbGVjdGVkU3RhZ2VbdGhpcy5zdGFnZUluZGV4XTtcbiAgICBpZiAoIWtleSkge1xuICAgICAgcmV0dXJuIDtcbiAgICB9XG4gICAgaWYgKGV2ZW50TmFtZSAhPT0gdGhpcy5hY3Rpb25zW2tleV0uZW5kRXZlbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5zdGFnZUluZGV4ICsrO1xuICAgIHRoaXMuX19ydW5BY3Rpb25GdW5jKGRhdGEpO1xuICB9LFxuICBcbiAgX19ydW5BdGFnOiBmdW5jdGlvbihidXR0b24pIHtcbiAgICB2YXIgYVRhZyA9IGJ1dHRvbi5xdWVyeVNlbGVjdG9yKCdhJyk7XG4gICAgICAgICAgXG4gICAgaWYgKGFUYWcpIHtcbiAgICAgIENvQ3JlYXRlLmxvZ2ljLnNldExpbmtQcm9jZXNzKGFUYWcpXG4gICAgfVxuICB9XG59XG5cblxuQ29DcmVhdGVBY3Rpb24uaW5pdCgpO1xuXG5leHBvcnQgZGVmYXVsdCBDb0NyZWF0ZUFjdGlvbjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../CoCreate-components/CoCreate-actions/src/CoCreate-actions.js\n");

/***/ })

/******/ })["default"];
});