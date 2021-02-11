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
/******/ 	return __webpack_require__(__webpack_require__.s = "../CoCreate-components/CoCreate-action/src/CoCreate-action.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../CoCreate-components/CoCreate-action/src/CoCreate-action.js":
/*!*********************************************************************!*\
  !*** ../CoCreate-components/CoCreate-action/src/CoCreate-action.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// -testing1\nvar CoCreateAction = {\n  attribute: 'data-actions',\n  actions: {},\n  selectedStage: [],\n  stageIndex: 0,\n  selectedElement: null,\n  completedEventName: 'completedEvent',\n  __init: function __init() {\n    this.actionButtonEvent();\n  },\n  // init: function(container) {\n  //   const __container = container || document\n  //   if (!__container.querySelectorAll) {\n  // \treturn;\n  // }\n  // let buttons = __container.querySelectorAll(\"[data-actions]\");\n  // for (let i = 0; i < buttons.length; i++) {\n  //   this.actionButtonEvent(buttons[i]);\n  // }\n  // },\n  // actionButtonEvent: function(btn) {\n  //   const _this = this;    \n  // let checkActions = btn.getAttribute('data-actions') || \"\";\n  // checkActions = checkActions.replace(/\\s/g, '').split(',');\n  // if (checkActions.length == 0) {\n  //   return;\n  // }\n  //   btn.addEventListener('click', function(event) {\n  //     event.preventDefault();\n  //     let actions = this.getAttribute(_this.attribute) || \"\";\n  //     actions = actions.replace(/\\s/g, '').split(',');\n  //     _this.stageIndex = 0;\n  //     _this.selectedStage = actions;\n  //     //. run function\n  //     _this.selectedElement = btn;\n  //     _this.__runActionFunc();\n  //   })\n  // },\n  actionButtonEvent: function actionButtonEvent() {\n    var self = this;\n    document.addEventListener('click', function (event) {\n      var btn = event.target;\n\n      if (!btn.getAttribute('data-actions')) {\n        btn = event.target.closest('[data-actions]');\n      }\n\n      if (!btn) return;\n      event.preventDefault();\n      var actions = (btn.getAttribute(self.attribute) || \"\").replace(/\\s/g, '').split(',');\n      if (actions.length == 0) return;\n      self.stageIndex = 0;\n      self.selectedStage = actions; //. run function\n\n      self.selectedElement = btn;\n\n      self.__runActionFunc();\n    });\n  },\n  init: function init(_ref) {\n    var action = _ref.action,\n        callback = _ref.callback,\n        endEvent = _ref.endEvent;\n    this.registerEvent(action, callback, null, endEvent);\n  },\n\n  /**\n   * key: string\n   * runFunc: function\n   * instance: object\n   * endEvent: string\n   **/\n  registerEvent: function registerEvent(key, runFunc, instance, endEvent) {\n    if (this.actions[key]) {\n      return;\n    }\n\n    this.actions[key] = {\n      key: key,\n      runFunc: runFunc,\n      instance: instance || window,\n      endEvent: endEvent\n    }; //. register events\n\n    for (var __key in this.actions) {\n      if (__key != key && this.actions[__key]['endEvent'] === endEvent) {\n        return;\n      }\n    } //. register events\n\n\n    var _this = this;\n\n    document.addEventListener(endEvent, function (e) {\n      _this.__nextAction(endEvent, e.detail);\n    });\n  },\n  __runActionFunc: function __runActionFunc(data) {\n    if (this.stageIndex >= this.selectedStage.length) {\n      //. if latest case, it will be run aTag\n      if (this.stageIndex == this.selectedStage.length) {\n        this.__runAtag(this.selectedElement);\n      }\n\n      return;\n    }\n\n    var key = this.selectedStage[this.stageIndex]; //. run function\n\n    var action = this.actions[key];\n\n    if (action) {\n      if (action.runFunc) {\n        action.runFunc.call(null, this.selectedElement, data);\n      } else {\n        this.__nextAction(action.endEvent, {});\n      }\n    }\n  },\n  __nextAction: function __nextAction(eventName, data) {\n    var key = this.selectedStage[this.stageIndex];\n\n    if (!key) {\n      return;\n    }\n\n    if (eventName !== this.actions[key].endEvent) {\n      return;\n    }\n\n    this.stageIndex++;\n\n    this.__runActionFunc(data);\n  },\n  __runAtag: function __runAtag(button) {\n    var aTag = button.querySelector('a');\n\n    if (aTag) {\n      CoCreate.logic.setLinkProcess(aTag);\n    }\n  }\n};\n\nCoCreateAction.__init();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CoCreateAction);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Db0NyZWF0ZS5hY3Rpb24vLi4vQ29DcmVhdGUtY29tcG9uZW50cy9Db0NyZWF0ZS1hY3Rpb24vc3JjL0NvQ3JlYXRlLWFjdGlvbi5qcz8zMjkwIl0sIm5hbWVzIjpbIkNvQ3JlYXRlQWN0aW9uIiwiYXR0cmlidXRlIiwiYWN0aW9ucyIsInNlbGVjdGVkU3RhZ2UiLCJzdGFnZUluZGV4Iiwic2VsZWN0ZWRFbGVtZW50IiwiY29tcGxldGVkRXZlbnROYW1lIiwiX19pbml0IiwiYWN0aW9uQnV0dG9uRXZlbnQiLCJzZWxmIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJidG4iLCJ0YXJnZXQiLCJnZXRBdHRyaWJ1dGUiLCJjbG9zZXN0IiwicHJldmVudERlZmF1bHQiLCJyZXBsYWNlIiwic3BsaXQiLCJsZW5ndGgiLCJfX3J1bkFjdGlvbkZ1bmMiLCJpbml0IiwiYWN0aW9uIiwiY2FsbGJhY2siLCJlbmRFdmVudCIsInJlZ2lzdGVyRXZlbnQiLCJrZXkiLCJydW5GdW5jIiwiaW5zdGFuY2UiLCJ3aW5kb3ciLCJfX2tleSIsIl90aGlzIiwiZSIsIl9fbmV4dEFjdGlvbiIsImRldGFpbCIsImRhdGEiLCJfX3J1bkF0YWciLCJjYWxsIiwiZXZlbnROYW1lIiwiYnV0dG9uIiwiYVRhZyIsInF1ZXJ5U2VsZWN0b3IiLCJDb0NyZWF0ZSIsImxvZ2ljIiwic2V0TGlua1Byb2Nlc3MiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQSxJQUFNQSxjQUFjLEdBQUc7QUFDckJDLFdBQVMsRUFBRSxjQURVO0FBRXJCQyxTQUFPLEVBQUUsRUFGWTtBQUdyQkMsZUFBYSxFQUFFLEVBSE07QUFJckJDLFlBQVUsRUFBRSxDQUpTO0FBS3JCQyxpQkFBZSxFQUFFLElBTEk7QUFPckJDLG9CQUFrQixFQUFFLGdCQVBDO0FBU3JCQyxRQUFNLEVBQUUsa0JBQVc7QUFDakIsU0FBS0MsaUJBQUw7QUFDRCxHQVhvQjtBQVlyQjtBQUVBO0FBQ0E7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Zjs7QUFFZVAsNkVBQWYiLCJmaWxlIjoiLi4vQ29DcmVhdGUtY29tcG9uZW50cy9Db0NyZWF0ZS1hY3Rpb24vc3JjL0NvQ3JlYXRlLWFjdGlvbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIC10ZXN0aW5nMVxuY29uc3QgQ29DcmVhdGVBY3Rpb24gPSB7XG4gIGF0dHJpYnV0ZTogJ2RhdGEtYWN0aW9ucycsXG4gIGFjdGlvbnM6IHt9LFxuICBzZWxlY3RlZFN0YWdlOiBbXSxcbiAgc3RhZ2VJbmRleDogMCxcbiAgc2VsZWN0ZWRFbGVtZW50OiBudWxsLFxuICBcbiAgY29tcGxldGVkRXZlbnROYW1lOiAnY29tcGxldGVkRXZlbnQnLFxuICBcbiAgX19pbml0OiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmFjdGlvbkJ1dHRvbkV2ZW50KClcbiAgfSxcbiAgLy8gaW5pdDogZnVuY3Rpb24oY29udGFpbmVyKSB7XG4gICAgXG4gIC8vICAgY29uc3QgX19jb250YWluZXIgPSBjb250YWluZXIgfHwgZG9jdW1lbnRcbiAgLy8gICBpZiAoIV9fY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwpIHtcblx0XHQvLyBcdHJldHVybjtcblx0XHQvLyB9XG5cdFx0XG5cdFx0Ly8gbGV0IGJ1dHRvbnMgPSBfX2NvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtYWN0aW9uc11cIik7XG5cblx0XHQvLyBmb3IgKGxldCBpID0gMDsgaSA8IGJ1dHRvbnMubGVuZ3RoOyBpKyspIHtcblx0XHQvLyAgIHRoaXMuYWN0aW9uQnV0dG9uRXZlbnQoYnV0dG9uc1tpXSk7XG5cdFx0Ly8gfVxuICAvLyB9LFxuICBcbiAgLy8gYWN0aW9uQnV0dG9uRXZlbnQ6IGZ1bmN0aW9uKGJ0bikge1xuICAvLyAgIGNvbnN0IF90aGlzID0gdGhpczsgICAgXG5cdCAvLyBsZXQgY2hlY2tBY3Rpb25zID0gYnRuLmdldEF0dHJpYnV0ZSgnZGF0YS1hY3Rpb25zJykgfHwgXCJcIjtcblx0IC8vIGNoZWNrQWN0aW9ucyA9IGNoZWNrQWN0aW9ucy5yZXBsYWNlKC9cXHMvZywgJycpLnNwbGl0KCcsJyk7XG5cdCAgXG5cdCAvLyBpZiAoY2hlY2tBY3Rpb25zLmxlbmd0aCA9PSAwKSB7XG5cdCAvLyAgIHJldHVybjtcblx0IC8vIH1cblxuICAvLyAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gIC8vICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAvLyAgICAgbGV0IGFjdGlvbnMgPSB0aGlzLmdldEF0dHJpYnV0ZShfdGhpcy5hdHRyaWJ1dGUpIHx8IFwiXCI7XG4gIC8vICAgICBhY3Rpb25zID0gYWN0aW9ucy5yZXBsYWNlKC9cXHMvZywgJycpLnNwbGl0KCcsJyk7XG4gIC8vICAgICBfdGhpcy5zdGFnZUluZGV4ID0gMDtcbiAgLy8gICAgIF90aGlzLnNlbGVjdGVkU3RhZ2UgPSBhY3Rpb25zO1xuICAgICAgXG4gIC8vICAgICAvLy4gcnVuIGZ1bmN0aW9uXG4gIC8vICAgICBfdGhpcy5zZWxlY3RlZEVsZW1lbnQgPSBidG47XG4gIC8vICAgICBfdGhpcy5fX3J1bkFjdGlvbkZ1bmMoKTtcbiAgICAgIFxuICAvLyAgIH0pXG4gIC8vIH0sXG4gIFxuICBhY3Rpb25CdXR0b25FdmVudDogZnVuY3Rpb24oKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgbGV0IGJ0biA9IGV2ZW50LnRhcmdldDtcbiAgICAgIGlmICghYnRuLmdldEF0dHJpYnV0ZSgnZGF0YS1hY3Rpb25zJykpIHtcbiAgICAgICAgYnRuID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJ1tkYXRhLWFjdGlvbnNdJyk7XG4gICAgICB9XG4gICAgICBpZiAoIWJ0bikgcmV0dXJuO1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgbGV0IGFjdGlvbnMgPSAoYnRuLmdldEF0dHJpYnV0ZShzZWxmLmF0dHJpYnV0ZSkgfHwgXCJcIikucmVwbGFjZSgvXFxzL2csICcnKS5zcGxpdCgnLCcpO1xuICAgICAgaWYgKGFjdGlvbnMubGVuZ3RoID09IDApIHJldHVybjtcbiAgICAgIHNlbGYuc3RhZ2VJbmRleCA9IDA7XG4gICAgICBzZWxmLnNlbGVjdGVkU3RhZ2UgPSBhY3Rpb25zO1xuICAgICAgXG4gICAgICAvLy4gcnVuIGZ1bmN0aW9uXG4gICAgICBzZWxmLnNlbGVjdGVkRWxlbWVudCA9IGJ0bjtcbiAgICAgIHNlbGYuX19ydW5BY3Rpb25GdW5jKCk7XG4gICAgfSlcbiAgfSxcbiAgXG4gIGluaXQ6IGZ1bmN0aW9uKHthY3Rpb24sIGNhbGxiYWNrLCBlbmRFdmVudH0pIHtcbiAgICB0aGlzLnJlZ2lzdGVyRXZlbnQoYWN0aW9uLCBjYWxsYmFjaywgbnVsbCwgZW5kRXZlbnQpO1xuICB9LFxuICBcbiAgLyoqXG4gICAqIGtleTogc3RyaW5nXG4gICAqIHJ1bkZ1bmM6IGZ1bmN0aW9uXG4gICAqIGluc3RhbmNlOiBvYmplY3RcbiAgICogZW5kRXZlbnQ6IHN0cmluZ1xuICAgKiovXG4gIHJlZ2lzdGVyRXZlbnQ6IGZ1bmN0aW9uKGtleSwgcnVuRnVuYywgaW5zdGFuY2UsIGVuZEV2ZW50KSB7XG4gICAgaWYgKHRoaXMuYWN0aW9uc1trZXldKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIFxuICAgIHRoaXMuYWN0aW9uc1trZXldID0ge1xuICAgICAga2V5OiBrZXksXG4gICAgICBydW5GdW5jOiBydW5GdW5jLFxuICAgICAgaW5zdGFuY2U6IGluc3RhbmNlIHx8IHdpbmRvdyxcbiAgICAgIGVuZEV2ZW50OiBlbmRFdmVudFxuICAgIH1cbiAgICAvLy4gcmVnaXN0ZXIgZXZlbnRzXG4gICAgXG4gICAgZm9yIChsZXQgX19rZXkgaW4gdGhpcy5hY3Rpb25zKSB7XG4gICAgICBpZiAoX19rZXkgIT0ga2V5ICYmIHRoaXMuYWN0aW9uc1tfX2tleV1bJ2VuZEV2ZW50J10gPT09IGVuZEV2ZW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLy8uIHJlZ2lzdGVyIGV2ZW50c1xuICAgIGNvbnN0IF90aGlzID0gdGhpcztcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKGVuZEV2ZW50LCBmdW5jdGlvbihlKSB7XG4gICAgICBfdGhpcy5fX25leHRBY3Rpb24oZW5kRXZlbnQsIGUuZGV0YWlsKVxuICAgIH0pO1xuICB9LFxuICBcbiAgX19ydW5BY3Rpb25GdW5jOiBmdW5jdGlvbihkYXRhKSB7XG5cbiAgICBpZiAodGhpcy5zdGFnZUluZGV4ID49IHRoaXMuc2VsZWN0ZWRTdGFnZS5sZW5ndGgpIHtcblxuICAgICAgLy8uIGlmIGxhdGVzdCBjYXNlLCBpdCB3aWxsIGJlIHJ1biBhVGFnXG4gICAgICBpZiAodGhpcy5zdGFnZUluZGV4ID09IHRoaXMuc2VsZWN0ZWRTdGFnZS5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5fX3J1bkF0YWcodGhpcy5zZWxlY3RlZEVsZW1lbnQpOyAgICAgICAgXG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IGtleSA9IHRoaXMuc2VsZWN0ZWRTdGFnZVt0aGlzLnN0YWdlSW5kZXhdO1xuICAgIC8vLiBydW4gZnVuY3Rpb25cbiAgICBjb25zdCBhY3Rpb24gPSB0aGlzLmFjdGlvbnNba2V5XTtcbiAgICBpZiAoYWN0aW9uKSB7XG4gICAgICBpZiAoYWN0aW9uLnJ1bkZ1bmMpIHtcbiAgICAgICAgYWN0aW9uLnJ1bkZ1bmMuY2FsbChudWxsLCB0aGlzLnNlbGVjdGVkRWxlbWVudCwgZGF0YSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9fbmV4dEFjdGlvbihhY3Rpb24uZW5kRXZlbnQsIHt9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIFxuICBfX25leHRBY3Rpb246IGZ1bmN0aW9uKGV2ZW50TmFtZSwgZGF0YSkge1xuICAgIGNvbnN0IGtleSA9IHRoaXMuc2VsZWN0ZWRTdGFnZVt0aGlzLnN0YWdlSW5kZXhdO1xuICAgIGlmICgha2V5KSB7XG4gICAgICByZXR1cm4gO1xuICAgIH1cbiAgICBpZiAoZXZlbnROYW1lICE9PSB0aGlzLmFjdGlvbnNba2V5XS5lbmRFdmVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnN0YWdlSW5kZXggKys7XG4gICAgdGhpcy5fX3J1bkFjdGlvbkZ1bmMoZGF0YSk7XG4gIH0sXG4gIFxuICBfX3J1bkF0YWc6IGZ1bmN0aW9uKGJ1dHRvbikge1xuICAgIHZhciBhVGFnID0gYnV0dG9uLnF1ZXJ5U2VsZWN0b3IoJ2EnKTtcbiAgICAgICAgICBcbiAgICBpZiAoYVRhZykge1xuICAgICAgQ29DcmVhdGUubG9naWMuc2V0TGlua1Byb2Nlc3MoYVRhZylcbiAgICB9XG4gIH1cbn1cblxuXG5Db0NyZWF0ZUFjdGlvbi5fX2luaXQoKTtcblxuZXhwb3J0IGRlZmF1bHQgQ29DcmVhdGVBY3Rpb247Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../CoCreate-components/CoCreate-action/src/CoCreate-action.js\n");

/***/ })

/******/ })["default"];
});