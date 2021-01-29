(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["CoCreateAction"] = factory();
	else
		root["CoCreateAction"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/CoCreate-actions.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/CoCreate-actions.js":
/*!*********************************!*\
  !*** ./src/CoCreate-actions.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// -testing1\nvar CoCreateAction = {\n  attribute: 'data-actions',\n  actions: {},\n  selectedStage: [],\n  stageIndex: 0,\n  selectedElement: null,\n  completedEventName: 'completedEvent',\n  init: function init() {\n    this.actionButtonEvent();\n  },\n  // init: function(container) {\n  //   const __container = container || document\n  //   if (!__container.querySelectorAll) {\n  // \treturn;\n  // }\n  // let buttons = __container.querySelectorAll(\"[data-actions]\");\n  // for (let i = 0; i < buttons.length; i++) {\n  //   this.actionButtonEvent(buttons[i]);\n  // }\n  // },\n  // actionButtonEvent: function(btn) {\n  //   const _this = this;    \n  // let checkActions = btn.getAttribute('data-actions') || \"\";\n  // checkActions = checkActions.replace(/\\s/g, '').split(',');\n  // if (checkActions.length == 0) {\n  //   return;\n  // }\n  //   btn.addEventListener('click', function(event) {\n  //     event.preventDefault();\n  //     let actions = this.getAttribute(_this.attribute) || \"\";\n  //     actions = actions.replace(/\\s/g, '').split(',');\n  //     _this.stageIndex = 0;\n  //     _this.selectedStage = actions;\n  //     //. run function\n  //     _this.selectedElement = btn;\n  //     _this.__runActionFunc();\n  //   })\n  // },\n  actionButtonEvent: function actionButtonEvent() {\n    var self = this;\n    document.addEventListener('click', function (event) {\n      var btn = event.target;\n\n      if (!btn.getAttribute('data-actions')) {\n        btn = event.target.closest('[data-actions]');\n      }\n\n      if (!btn) return;\n      event.preventDefault();\n      var actions = (btn.getAttribute(self.attribute) || \"\").replace(/\\s/g, '').split(',');\n      if (actions.length == 0) return;\n      self.stageIndex = 0;\n      self.selectedStage = actions; //. run function\n\n      self.selectedElement = btn;\n\n      self.__runActionFunc();\n    });\n  },\n\n  /**\n   * key: string\n   * runFunc: function\n   * instance: object\n   * endEvent: string\n   **/\n  registerEvent: function registerEvent(key, runFunc, instance, endEvent) {\n    if (this.actions[key]) {\n      return;\n    }\n\n    this.actions[key] = {\n      key: key,\n      runFunc: runFunc,\n      instance: instance || window,\n      endEvent: endEvent\n    }; //. register events\n\n    for (var __key in this.actions) {\n      if (__key != key && this.actions[__key]['endEvent'] === endEvent) {\n        return;\n      }\n    } //. register events\n\n\n    var _this = this;\n\n    document.addEventListener(endEvent, function (e) {\n      _this.__nextAction(endEvent, e.detail);\n    });\n  },\n  __runActionFunc: function __runActionFunc(data) {\n    if (this.stageIndex >= this.selectedStage.length) {\n      //. if latest case, it will be run aTag\n      if (this.stageIndex == this.selectedStage.length) {\n        this.__runAtag(this.selectedElement);\n      }\n\n      return;\n    }\n\n    var key = this.selectedStage[this.stageIndex]; //. run function\n\n    var action = this.actions[key];\n\n    if (action) {\n      if (action.runFunc) {\n        action.runFunc.call(action.instance, this.selectedElement, data);\n      } else {\n        this.__nextAction(action.endEvent, {});\n      }\n    }\n  },\n  __nextAction: function __nextAction(eventName, data) {\n    var key = this.selectedStage[this.stageIndex];\n\n    if (!key) {\n      return;\n    }\n\n    if (eventName !== this.actions[key].endEvent) {\n      return;\n    }\n\n    this.stageIndex++;\n\n    this.__runActionFunc(data);\n  },\n  __runAtag: function __runAtag(button) {\n    var aTag = button.querySelector('a');\n\n    if (aTag) {\n      CoCreateLogic.setLinkProcess(aTag);\n    }\n  }\n};\nCoCreateAction.init();\n/* harmony default export */ __webpack_exports__[\"default\"] = (CoCreateAction);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Db0NyZWF0ZUFjdGlvbi8uL3NyYy9Db0NyZWF0ZS1hY3Rpb25zLmpzPzUyZGUiXSwibmFtZXMiOlsiQ29DcmVhdGVBY3Rpb24iLCJhdHRyaWJ1dGUiLCJhY3Rpb25zIiwic2VsZWN0ZWRTdGFnZSIsInN0YWdlSW5kZXgiLCJzZWxlY3RlZEVsZW1lbnQiLCJjb21wbGV0ZWRFdmVudE5hbWUiLCJpbml0IiwiYWN0aW9uQnV0dG9uRXZlbnQiLCJzZWxmIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJidG4iLCJ0YXJnZXQiLCJnZXRBdHRyaWJ1dGUiLCJjbG9zZXN0IiwicHJldmVudERlZmF1bHQiLCJyZXBsYWNlIiwic3BsaXQiLCJsZW5ndGgiLCJfX3J1bkFjdGlvbkZ1bmMiLCJyZWdpc3RlckV2ZW50Iiwia2V5IiwicnVuRnVuYyIsImluc3RhbmNlIiwiZW5kRXZlbnQiLCJ3aW5kb3ciLCJfX2tleSIsIl90aGlzIiwiZSIsIl9fbmV4dEFjdGlvbiIsImRldGFpbCIsImRhdGEiLCJfX3J1bkF0YWciLCJhY3Rpb24iLCJjYWxsIiwiZXZlbnROYW1lIiwiYnV0dG9uIiwiYVRhZyIsInF1ZXJ5U2VsZWN0b3IiLCJDb0NyZWF0ZUxvZ2ljIiwic2V0TGlua1Byb2Nlc3MiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQSxJQUFNQSxjQUFjLEdBQUc7QUFDckJDLFdBQVMsRUFBRSxjQURVO0FBRXJCQyxTQUFPLEVBQUUsRUFGWTtBQUdyQkMsZUFBYSxFQUFFLEVBSE07QUFJckJDLFlBQVUsRUFBRSxDQUpTO0FBS3JCQyxpQkFBZSxFQUFFLElBTEk7QUFPckJDLG9CQUFrQixFQUFFLGdCQVBDO0FBUXJCQyxNQUFJLEVBQUUsZ0JBQVc7QUFDZixTQUFLQyxpQkFBTDtBQUNELEdBVm9CO0FBV3JCO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtB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LENBQUNYLE9BQVAsQ0FBZVksSUFBZixDQUFvQkQsTUFBTSxDQUFDVixRQUEzQixFQUFxQyxLQUFLcEIsZUFBMUMsRUFBMkQ0QixJQUEzRDtBQUNELE9BRkQsTUFFTztBQUNMLGFBQUtGLFlBQUwsQ0FBa0JJLE1BQU0sQ0FBQ1QsUUFBekIsRUFBbUMsRUFBbkM7QUFDRDtBQUNGO0FBQ0YsR0ExSG9CO0FBNEhyQkssY0FBWSxFQUFFLHNCQUFTTSxTQUFULEVBQW9CSixJQUFwQixFQUEwQjtBQUN0QyxRQUFNVixHQUFHLEdBQUcsS0FBS3BCLGFBQUwsQ0FBbUIsS0FBS0MsVUFBeEIsQ0FBWjs7QUFDQSxRQUFJLENBQUNtQixHQUFMLEVBQVU7QUFDUjtBQUNEOztBQUNELFFBQUljLFNBQVMsS0FBSyxLQUFLbkMsT0FBTCxDQUFhcUIsR0FBYixFQUFrQkcsUUFBcEMsRUFBOEM7QUFDNUM7QUFDRDs7QUFDRCxTQUFLdEIsVUFBTDs7QUFDQSxTQUFLaUIsZUFBTCxDQUFxQlksSUFBckI7QUFDRCxHQXRJb0I7QUF3SXJCQyxXQUFTLEVBQUUsbUJBQVNJLE1BQVQsRUFBaUI7QUFDMUIsUUFBSUMsSUFBSSxHQUFHRCxNQUFNLENBQUNFLGFBQVAsQ0FBcUIsR0FBckIsQ0FBWDs7QUFFQSxRQUFJRCxJQUFKLEVBQVU7QUFDUkUsbUJBQWEsQ0FBQ0MsY0FBZCxDQUE2QkgsSUFBN0I7QUFDRDtBQUNGO0FBOUlvQixDQUF2QjtBQWtKQXZDLGNBQWMsQ0FBQ08sSUFBZjtBQUVlUCw2RUFBZiIsImZpbGUiOiIuL3NyYy9Db0NyZWF0ZS1hY3Rpb25zLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLXRlc3RpbmcxXG5jb25zdCBDb0NyZWF0ZUFjdGlvbiA9IHtcbiAgYXR0cmlidXRlOiAnZGF0YS1hY3Rpb25zJyxcbiAgYWN0aW9uczoge30sXG4gIHNlbGVjdGVkU3RhZ2U6IFtdLFxuICBzdGFnZUluZGV4OiAwLFxuICBzZWxlY3RlZEVsZW1lbnQ6IG51bGwsXG4gIFxuICBjb21wbGV0ZWRFdmVudE5hbWU6ICdjb21wbGV0ZWRFdmVudCcsXG4gIGluaXQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuYWN0aW9uQnV0dG9uRXZlbnQoKVxuICB9LFxuICAvLyBpbml0OiBmdW5jdGlvbihjb250YWluZXIpIHtcbiAgICBcbiAgLy8gICBjb25zdCBfX2NvbnRhaW5lciA9IGNvbnRhaW5lciB8fCBkb2N1bWVudFxuICAvLyAgIGlmICghX19jb250YWluZXIucXVlcnlTZWxlY3RvckFsbCkge1xuXHRcdC8vIFx0cmV0dXJuO1xuXHRcdC8vIH1cblx0XHRcblx0XHQvLyBsZXQgYnV0dG9ucyA9IF9fY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1hY3Rpb25zXVwiKTtcblxuXHRcdC8vIGZvciAobGV0IGkgPSAwOyBpIDwgYnV0dG9ucy5sZW5ndGg7IGkrKykge1xuXHRcdC8vICAgdGhpcy5hY3Rpb25CdXR0b25FdmVudChidXR0b25zW2ldKTtcblx0XHQvLyB9XG4gIC8vIH0sXG4gIFxuICAvLyBhY3Rpb25CdXR0b25FdmVudDogZnVuY3Rpb24oYnRuKSB7XG4gIC8vICAgY29uc3QgX3RoaXMgPSB0aGlzOyAgICBcblx0IC8vIGxldCBjaGVja0FjdGlvbnMgPSBidG4uZ2V0QXR0cmlidXRlKCdkYXRhLWFjdGlvbnMnKSB8fCBcIlwiO1xuXHQgLy8gY2hlY2tBY3Rpb25zID0gY2hlY2tBY3Rpb25zLnJlcGxhY2UoL1xccy9nLCAnJykuc3BsaXQoJywnKTtcblx0ICBcblx0IC8vIGlmIChjaGVja0FjdGlvbnMubGVuZ3RoID09IDApIHtcblx0IC8vICAgcmV0dXJuO1xuXHQgLy8gfVxuXG4gIC8vICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgLy8gICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIC8vICAgICBsZXQgYWN0aW9ucyA9IHRoaXMuZ2V0QXR0cmlidXRlKF90aGlzLmF0dHJpYnV0ZSkgfHwgXCJcIjtcbiAgLy8gICAgIGFjdGlvbnMgPSBhY3Rpb25zLnJlcGxhY2UoL1xccy9nLCAnJykuc3BsaXQoJywnKTtcbiAgLy8gICAgIF90aGlzLnN0YWdlSW5kZXggPSAwO1xuICAvLyAgICAgX3RoaXMuc2VsZWN0ZWRTdGFnZSA9IGFjdGlvbnM7XG4gICAgICBcbiAgLy8gICAgIC8vLiBydW4gZnVuY3Rpb25cbiAgLy8gICAgIF90aGlzLnNlbGVjdGVkRWxlbWVudCA9IGJ0bjtcbiAgLy8gICAgIF90aGlzLl9fcnVuQWN0aW9uRnVuYygpO1xuICAgICAgXG4gIC8vICAgfSlcbiAgLy8gfSxcbiAgXG4gIGFjdGlvbkJ1dHRvbkV2ZW50OiBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICBsZXQgYnRuID0gZXZlbnQudGFyZ2V0O1xuICAgICAgaWYgKCFidG4uZ2V0QXR0cmlidXRlKCdkYXRhLWFjdGlvbnMnKSkge1xuICAgICAgICBidG4gPSBldmVudC50YXJnZXQuY2xvc2VzdCgnW2RhdGEtYWN0aW9uc10nKTtcbiAgICAgIH1cbiAgICAgIGlmICghYnRuKSByZXR1cm47XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBsZXQgYWN0aW9ucyA9IChidG4uZ2V0QXR0cmlidXRlKHNlbGYuYXR0cmlidXRlKSB8fCBcIlwiKS5yZXBsYWNlKC9cXHMvZywgJycpLnNwbGl0KCcsJyk7XG4gICAgICBpZiAoYWN0aW9ucy5sZW5ndGggPT0gMCkgcmV0dXJuO1xuICAgICAgc2VsZi5zdGFnZUluZGV4ID0gMDtcbiAgICAgIHNlbGYuc2VsZWN0ZWRTdGFnZSA9IGFjdGlvbnM7XG4gICAgICBcbiAgICAgIC8vLiBydW4gZnVuY3Rpb25cbiAgICAgIHNlbGYuc2VsZWN0ZWRFbGVtZW50ID0gYnRuO1xuICAgICAgc2VsZi5fX3J1bkFjdGlvbkZ1bmMoKTtcbiAgICB9KVxuICB9LFxuICBcbiAgLyoqXG4gICAqIGtleTogc3RyaW5nXG4gICAqIHJ1bkZ1bmM6IGZ1bmN0aW9uXG4gICAqIGluc3RhbmNlOiBvYmplY3RcbiAgICogZW5kRXZlbnQ6IHN0cmluZ1xuICAgKiovXG4gIHJlZ2lzdGVyRXZlbnQ6IGZ1bmN0aW9uKGtleSwgcnVuRnVuYywgaW5zdGFuY2UsIGVuZEV2ZW50KSB7XG4gICAgaWYgKHRoaXMuYWN0aW9uc1trZXldKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIFxuICAgIHRoaXMuYWN0aW9uc1trZXldID0ge1xuICAgICAga2V5OiBrZXksXG4gICAgICBydW5GdW5jOiBydW5GdW5jLFxuICAgICAgaW5zdGFuY2U6IGluc3RhbmNlIHx8IHdpbmRvdyxcbiAgICAgIGVuZEV2ZW50OiBlbmRFdmVudFxuICAgIH1cbiAgICAvLy4gcmVnaXN0ZXIgZXZlbnRzXG4gICAgXG4gICAgZm9yIChsZXQgX19rZXkgaW4gdGhpcy5hY3Rpb25zKSB7XG4gICAgICBpZiAoX19rZXkgIT0ga2V5ICYmIHRoaXMuYWN0aW9uc1tfX2tleV1bJ2VuZEV2ZW50J10gPT09IGVuZEV2ZW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLy8uIHJlZ2lzdGVyIGV2ZW50c1xuICAgIGNvbnN0IF90aGlzID0gdGhpcztcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKGVuZEV2ZW50LCBmdW5jdGlvbihlKSB7XG4gICAgICBfdGhpcy5fX25leHRBY3Rpb24oZW5kRXZlbnQsIGUuZGV0YWlsKVxuICAgIH0pO1xuICB9LFxuICBcbiAgX19ydW5BY3Rpb25GdW5jOiBmdW5jdGlvbihkYXRhKSB7XG5cbiAgICBpZiAodGhpcy5zdGFnZUluZGV4ID49IHRoaXMuc2VsZWN0ZWRTdGFnZS5sZW5ndGgpIHtcblxuICAgICAgLy8uIGlmIGxhdGVzdCBjYXNlLCBpdCB3aWxsIGJlIHJ1biBhVGFnXG4gICAgICBpZiAodGhpcy5zdGFnZUluZGV4ID09IHRoaXMuc2VsZWN0ZWRTdGFnZS5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5fX3J1bkF0YWcodGhpcy5zZWxlY3RlZEVsZW1lbnQpOyAgICAgICAgXG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IGtleSA9IHRoaXMuc2VsZWN0ZWRTdGFnZVt0aGlzLnN0YWdlSW5kZXhdO1xuICAgIC8vLiBydW4gZnVuY3Rpb25cbiAgICBjb25zdCBhY3Rpb24gPSB0aGlzLmFjdGlvbnNba2V5XTtcbiAgICBpZiAoYWN0aW9uKSB7XG4gICAgICBpZiAoYWN0aW9uLnJ1bkZ1bmMpIHtcbiAgICAgICAgYWN0aW9uLnJ1bkZ1bmMuY2FsbChhY3Rpb24uaW5zdGFuY2UsIHRoaXMuc2VsZWN0ZWRFbGVtZW50LCBkYXRhKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX19uZXh0QWN0aW9uKGFjdGlvbi5lbmRFdmVudCwge30pO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgXG4gIF9fbmV4dEFjdGlvbjogZnVuY3Rpb24oZXZlbnROYW1lLCBkYXRhKSB7XG4gICAgY29uc3Qga2V5ID0gdGhpcy5zZWxlY3RlZFN0YWdlW3RoaXMuc3RhZ2VJbmRleF07XG4gICAgaWYgKCFrZXkpIHtcbiAgICAgIHJldHVybiA7XG4gICAgfVxuICAgIGlmIChldmVudE5hbWUgIT09IHRoaXMuYWN0aW9uc1trZXldLmVuZEV2ZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuc3RhZ2VJbmRleCArKztcbiAgICB0aGlzLl9fcnVuQWN0aW9uRnVuYyhkYXRhKTtcbiAgfSxcbiAgXG4gIF9fcnVuQXRhZzogZnVuY3Rpb24oYnV0dG9uKSB7XG4gICAgdmFyIGFUYWcgPSBidXR0b24ucXVlcnlTZWxlY3RvcignYScpO1xuICAgICAgICAgIFxuICAgIGlmIChhVGFnKSB7XG4gICAgICBDb0NyZWF0ZUxvZ2ljLnNldExpbmtQcm9jZXNzKGFUYWcpXG4gICAgfVxuICB9XG59XG5cblxuQ29DcmVhdGVBY3Rpb24uaW5pdCgpO1xuXG5leHBvcnQgZGVmYXVsdCBDb0NyZWF0ZUFjdGlvbjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/CoCreate-actions.js\n");

/***/ })

/******/ })["default"];
});