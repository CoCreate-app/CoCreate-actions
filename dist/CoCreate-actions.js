/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
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
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/CoCreate-actions.js":
/*!*********************************!*\
  !*** ./src/CoCreate-actions.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n// -testing1\nvar CoCreateAction = {\n  attribute: 'data-actions',\n  actions: {},\n  selectedStage: [],\n  stageIndex: 0,\n  selectedElement: null,\n  completedEventName: 'completedEvent',\n  init: function init() {\n    this.actionButtonEvent();\n  },\n  // init: function(container) {\n  //   const __container = container || document\n  //   if (!__container.querySelectorAll) {\n  // \treturn;\n  // }\n  // let buttons = __container.querySelectorAll(\"[data-actions]\");\n  // for (let i = 0; i < buttons.length; i++) {\n  //   this.actionButtonEvent(buttons[i]);\n  // }\n  // },\n  // actionButtonEvent: function(btn) {\n  //   const _this = this;    \n  // let checkActions = btn.getAttribute('data-actions') || \"\";\n  // checkActions = checkActions.replace(/\\s/g, '').split(',');\n  // if (checkActions.length == 0) {\n  //   return;\n  // }\n  //   btn.addEventListener('click', function(event) {\n  //     event.preventDefault();\n  //     let actions = this.getAttribute(_this.attribute) || \"\";\n  //     actions = actions.replace(/\\s/g, '').split(',');\n  //     _this.stageIndex = 0;\n  //     _this.selectedStage = actions;\n  //     //. run function\n  //     _this.selectedElement = btn;\n  //     _this.__runActionFunc();\n  //   })\n  // },\n  actionButtonEvent: function actionButtonEvent() {\n    var self = this;\n    document.addEventListener('click', function (event) {\n      var btn = event.target;\n\n      if (!btn.getAttribute('data-actions')) {\n        btn = event.target.closest('[data-actions]');\n      }\n\n      if (!btn) return;\n      event.preventDefault();\n      var actions = (btn.getAttribute(self.attribute) || \"\").replace(/\\s/g, '').split(',');\n      if (actions.length == 0) return;\n      self.stageIndex = 0;\n      self.selectedStage = actions; //. run function\n\n      self.selectedElement = btn;\n\n      self.__runActionFunc();\n    });\n  },\n\n  /**\n   * key: string\n   * runFunc: function\n   * instance: object\n   * endEvent: string\n   **/\n  registerEvent: function registerEvent(key, runFunc, instance, endEvent) {\n    if (this.actions[key]) {\n      return;\n    }\n\n    this.actions[key] = {\n      key: key,\n      runFunc: runFunc,\n      instance: instance || window,\n      endEvent: endEvent\n    }; //. register events\n\n    for (var __key in this.actions) {\n      if (__key != key && this.actions[__key]['endEvent'] === endEvent) {\n        return;\n      }\n    } //. register events\n\n\n    var _this = this;\n\n    document.addEventListener(endEvent, function (e) {\n      _this.__nextAction(endEvent, e.detail);\n    });\n  },\n  __runActionFunc: function __runActionFunc(data) {\n    if (this.stageIndex >= this.selectedStage.length) {\n      //. if latest case, it will be run aTag\n      if (this.stageIndex == this.selectedStage.length) {\n        this.__runAtag(this.selectedElement);\n      }\n\n      return;\n    }\n\n    var key = this.selectedStage[this.stageIndex]; //. run function\n\n    var action = this.actions[key];\n\n    if (action) {\n      if (action.runFunc) {\n        action.runFunc.call(action.instance, this.selectedElement, data);\n      } else {\n        this.__nextAction(action.endEvent, {});\n      }\n    }\n  },\n  __nextAction: function __nextAction(eventName, data) {\n    var key = this.selectedStage[this.stageIndex];\n\n    if (!key) {\n      return;\n    }\n\n    if (eventName !== this.actions[key].endEvent) {\n      return;\n    }\n\n    this.stageIndex++;\n\n    this.__runActionFunc(data);\n  },\n  __runAtag: function __runAtag(button) {\n    var aTag = button.querySelector('a');\n\n    if (aTag) {\n      CoCreateLogic.setLinkProcess(aTag);\n    }\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CoCreateAction);\nCoCreateAction.init();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Db0NyZWF0ZUFjdGlvbi8uL3NyYy9Db0NyZWF0ZS1hY3Rpb25zLmpzPzUyZGUiXSwibmFtZXMiOlsiQ29DcmVhdGVBY3Rpb24iLCJhdHRyaWJ1dGUiLCJhY3Rpb25zIiwic2VsZWN0ZWRTdGFnZSIsInN0YWdlSW5kZXgiLCJzZWxlY3RlZEVsZW1lbnQiLCJjb21wbGV0ZWRFdmVudE5hbWUiLCJpbml0IiwiYWN0aW9uQnV0dG9uRXZlbnQiLCJzZWxmIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJidG4iLCJ0YXJnZXQiLCJnZXRBdHRyaWJ1dGUiLCJjbG9zZXN0IiwicHJldmVudERlZmF1bHQiLCJyZXBsYWNlIiwic3BsaXQiLCJsZW5ndGgiLCJfX3J1bkFjdGlvbkZ1bmMiLCJyZWdpc3RlckV2ZW50Iiwia2V5IiwicnVuRnVuYyIsImluc3RhbmNlIiwiZW5kRXZlbnQiLCJ3aW5kb3ciLCJfX2tleSIsIl90aGlzIiwiZSIsIl9fbmV4dEFjdGlvbiIsImRldGFpbCIsImRhdGEiLCJfX3J1bkF0YWciLCJhY3Rpb24iLCJjYWxsIiwiZXZlbnROYW1lIiwiYnV0dG9uIiwiYVRhZyIsInF1ZXJ5U2VsZWN0b3IiLCJDb0NyZWF0ZUxvZ2ljIiwic2V0TGlua1Byb2Nlc3MiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBLElBQU1BLGNBQWMsR0FBRztBQUNyQkMsV0FBUyxFQUFFLGNBRFU7QUFFckJDLFNBQU8sRUFBRSxFQUZZO0FBR3JCQyxlQUFhLEVBQUUsRUFITTtBQUlyQkMsWUFBVSxFQUFFLENBSlM7QUFLckJDLGlCQUFlLEVBQUUsSUFMSTtBQU9yQkMsb0JBQWtCLEVBQUUsZ0JBUEM7QUFRckJDLE1BQUksRUFBRSxnQkFBVztBQUNmLFNBQUtDLGlCQUFMO0FBQ0QsR0FWb0I7QUFXckI7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FB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Q0FBQ1gsT0FBUCxDQUFlWSxJQUFmLENBQW9CRCxNQUFNLENBQUNWLFFBQTNCLEVBQXFDLEtBQUtwQixlQUExQyxFQUEyRDRCLElBQTNEO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsYUFBS0YsWUFBTCxDQUFrQkksTUFBTSxDQUFDVCxRQUF6QixFQUFtQyxFQUFuQztBQUNEO0FBQ0Y7QUFDRixHQTFIb0I7QUE0SHJCSyxjQUFZLEVBQUUsc0JBQVNNLFNBQVQsRUFBb0JKLElBQXBCLEVBQTBCO0FBQ3RDLFFBQU1WLEdBQUcsR0FBRyxLQUFLcEIsYUFBTCxDQUFtQixLQUFLQyxVQUF4QixDQUFaOztBQUNBLFFBQUksQ0FBQ21CLEdBQUwsRUFBVTtBQUNSO0FBQ0Q7O0FBQ0QsUUFBSWMsU0FBUyxLQUFLLEtBQUtuQyxPQUFMLENBQWFxQixHQUFiLEVBQWtCRyxRQUFwQyxFQUE4QztBQUM1QztBQUNEOztBQUNELFNBQUt0QixVQUFMOztBQUNBLFNBQUtpQixlQUFMLENBQXFCWSxJQUFyQjtBQUNELEdBdElvQjtBQXdJckJDLFdBQVMsRUFBRSxtQkFBU0ksTUFBVCxFQUFpQjtBQUMxQixRQUFJQyxJQUFJLEdBQUdELE1BQU0sQ0FBQ0UsYUFBUCxDQUFxQixHQUFyQixDQUFYOztBQUVBLFFBQUlELElBQUosRUFBVTtBQUNSRSxtQkFBYSxDQUFDQyxjQUFkLENBQTZCSCxJQUE3QjtBQUNEO0FBQ0Y7QUE5SW9CLENBQXZCO0FBaUpBLGlFQUFldkMsY0FBZjtBQUVBQSxjQUFjLENBQUNPLElBQWYiLCJmaWxlIjoiLi9zcmMvQ29DcmVhdGUtYWN0aW9ucy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIC10ZXN0aW5nMVxuY29uc3QgQ29DcmVhdGVBY3Rpb24gPSB7XG4gIGF0dHJpYnV0ZTogJ2RhdGEtYWN0aW9ucycsXG4gIGFjdGlvbnM6IHt9LFxuICBzZWxlY3RlZFN0YWdlOiBbXSxcbiAgc3RhZ2VJbmRleDogMCxcbiAgc2VsZWN0ZWRFbGVtZW50OiBudWxsLFxuICBcbiAgY29tcGxldGVkRXZlbnROYW1lOiAnY29tcGxldGVkRXZlbnQnLFxuICBpbml0OiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmFjdGlvbkJ1dHRvbkV2ZW50KClcbiAgfSxcbiAgLy8gaW5pdDogZnVuY3Rpb24oY29udGFpbmVyKSB7XG4gICAgXG4gIC8vICAgY29uc3QgX19jb250YWluZXIgPSBjb250YWluZXIgfHwgZG9jdW1lbnRcbiAgLy8gICBpZiAoIV9fY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwpIHtcblx0XHQvLyBcdHJldHVybjtcblx0XHQvLyB9XG5cdFx0XG5cdFx0Ly8gbGV0IGJ1dHRvbnMgPSBfX2NvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtYWN0aW9uc11cIik7XG5cblx0XHQvLyBmb3IgKGxldCBpID0gMDsgaSA8IGJ1dHRvbnMubGVuZ3RoOyBpKyspIHtcblx0XHQvLyAgIHRoaXMuYWN0aW9uQnV0dG9uRXZlbnQoYnV0dG9uc1tpXSk7XG5cdFx0Ly8gfVxuICAvLyB9LFxuICBcbiAgLy8gYWN0aW9uQnV0dG9uRXZlbnQ6IGZ1bmN0aW9uKGJ0bikge1xuICAvLyAgIGNvbnN0IF90aGlzID0gdGhpczsgICAgXG5cdCAvLyBsZXQgY2hlY2tBY3Rpb25zID0gYnRuLmdldEF0dHJpYnV0ZSgnZGF0YS1hY3Rpb25zJykgfHwgXCJcIjtcblx0IC8vIGNoZWNrQWN0aW9ucyA9IGNoZWNrQWN0aW9ucy5yZXBsYWNlKC9cXHMvZywgJycpLnNwbGl0KCcsJyk7XG5cdCAgXG5cdCAvLyBpZiAoY2hlY2tBY3Rpb25zLmxlbmd0aCA9PSAwKSB7XG5cdCAvLyAgIHJldHVybjtcblx0IC8vIH1cblxuICAvLyAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gIC8vICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAvLyAgICAgbGV0IGFjdGlvbnMgPSB0aGlzLmdldEF0dHJpYnV0ZShfdGhpcy5hdHRyaWJ1dGUpIHx8IFwiXCI7XG4gIC8vICAgICBhY3Rpb25zID0gYWN0aW9ucy5yZXBsYWNlKC9cXHMvZywgJycpLnNwbGl0KCcsJyk7XG4gIC8vICAgICBfdGhpcy5zdGFnZUluZGV4ID0gMDtcbiAgLy8gICAgIF90aGlzLnNlbGVjdGVkU3RhZ2UgPSBhY3Rpb25zO1xuICAgICAgXG4gIC8vICAgICAvLy4gcnVuIGZ1bmN0aW9uXG4gIC8vICAgICBfdGhpcy5zZWxlY3RlZEVsZW1lbnQgPSBidG47XG4gIC8vICAgICBfdGhpcy5fX3J1bkFjdGlvbkZ1bmMoKTtcbiAgICAgIFxuICAvLyAgIH0pXG4gIC8vIH0sXG4gIFxuICBhY3Rpb25CdXR0b25FdmVudDogZnVuY3Rpb24oKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgbGV0IGJ0biA9IGV2ZW50LnRhcmdldDtcbiAgICAgIGlmICghYnRuLmdldEF0dHJpYnV0ZSgnZGF0YS1hY3Rpb25zJykpIHtcbiAgICAgICAgYnRuID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJ1tkYXRhLWFjdGlvbnNdJyk7XG4gICAgICB9XG4gICAgICBpZiAoIWJ0bikgcmV0dXJuO1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgbGV0IGFjdGlvbnMgPSAoYnRuLmdldEF0dHJpYnV0ZShzZWxmLmF0dHJpYnV0ZSkgfHwgXCJcIikucmVwbGFjZSgvXFxzL2csICcnKS5zcGxpdCgnLCcpO1xuICAgICAgaWYgKGFjdGlvbnMubGVuZ3RoID09IDApIHJldHVybjtcbiAgICAgIHNlbGYuc3RhZ2VJbmRleCA9IDA7XG4gICAgICBzZWxmLnNlbGVjdGVkU3RhZ2UgPSBhY3Rpb25zO1xuICAgICAgXG4gICAgICAvLy4gcnVuIGZ1bmN0aW9uXG4gICAgICBzZWxmLnNlbGVjdGVkRWxlbWVudCA9IGJ0bjtcbiAgICAgIHNlbGYuX19ydW5BY3Rpb25GdW5jKCk7XG4gICAgfSlcbiAgfSxcbiAgXG4gIC8qKlxuICAgKiBrZXk6IHN0cmluZ1xuICAgKiBydW5GdW5jOiBmdW5jdGlvblxuICAgKiBpbnN0YW5jZTogb2JqZWN0XG4gICAqIGVuZEV2ZW50OiBzdHJpbmdcbiAgICoqL1xuICByZWdpc3RlckV2ZW50OiBmdW5jdGlvbihrZXksIHJ1bkZ1bmMsIGluc3RhbmNlLCBlbmRFdmVudCkge1xuICAgIGlmICh0aGlzLmFjdGlvbnNba2V5XSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBcbiAgICB0aGlzLmFjdGlvbnNba2V5XSA9IHtcbiAgICAgIGtleToga2V5LFxuICAgICAgcnVuRnVuYzogcnVuRnVuYyxcbiAgICAgIGluc3RhbmNlOiBpbnN0YW5jZSB8fCB3aW5kb3csXG4gICAgICBlbmRFdmVudDogZW5kRXZlbnRcbiAgICB9XG4gICAgLy8uIHJlZ2lzdGVyIGV2ZW50c1xuICAgIFxuICAgIGZvciAobGV0IF9fa2V5IGluIHRoaXMuYWN0aW9ucykge1xuICAgICAgaWYgKF9fa2V5ICE9IGtleSAmJiB0aGlzLmFjdGlvbnNbX19rZXldWydlbmRFdmVudCddID09PSBlbmRFdmVudCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIC8vLiByZWdpc3RlciBldmVudHNcbiAgICBjb25zdCBfdGhpcyA9IHRoaXM7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihlbmRFdmVudCwgZnVuY3Rpb24oZSkge1xuICAgICAgX3RoaXMuX19uZXh0QWN0aW9uKGVuZEV2ZW50LCBlLmRldGFpbClcbiAgICB9KTtcbiAgfSxcbiAgXG4gIF9fcnVuQWN0aW9uRnVuYzogZnVuY3Rpb24oZGF0YSkge1xuXG4gICAgaWYgKHRoaXMuc3RhZ2VJbmRleCA+PSB0aGlzLnNlbGVjdGVkU3RhZ2UubGVuZ3RoKSB7XG5cbiAgICAgIC8vLiBpZiBsYXRlc3QgY2FzZSwgaXQgd2lsbCBiZSBydW4gYVRhZ1xuICAgICAgaWYgKHRoaXMuc3RhZ2VJbmRleCA9PSB0aGlzLnNlbGVjdGVkU3RhZ2UubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuX19ydW5BdGFnKHRoaXMuc2VsZWN0ZWRFbGVtZW50KTsgICAgICAgIFxuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBrZXkgPSB0aGlzLnNlbGVjdGVkU3RhZ2VbdGhpcy5zdGFnZUluZGV4XTtcbiAgICAvLy4gcnVuIGZ1bmN0aW9uXG4gICAgY29uc3QgYWN0aW9uID0gdGhpcy5hY3Rpb25zW2tleV07XG4gICAgaWYgKGFjdGlvbikge1xuICAgICAgaWYgKGFjdGlvbi5ydW5GdW5jKSB7XG4gICAgICAgIGFjdGlvbi5ydW5GdW5jLmNhbGwoYWN0aW9uLmluc3RhbmNlLCB0aGlzLnNlbGVjdGVkRWxlbWVudCwgZGF0YSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9fbmV4dEFjdGlvbihhY3Rpb24uZW5kRXZlbnQsIHt9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIFxuICBfX25leHRBY3Rpb246IGZ1bmN0aW9uKGV2ZW50TmFtZSwgZGF0YSkge1xuICAgIGNvbnN0IGtleSA9IHRoaXMuc2VsZWN0ZWRTdGFnZVt0aGlzLnN0YWdlSW5kZXhdO1xuICAgIGlmICgha2V5KSB7XG4gICAgICByZXR1cm4gO1xuICAgIH1cbiAgICBpZiAoZXZlbnROYW1lICE9PSB0aGlzLmFjdGlvbnNba2V5XS5lbmRFdmVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnN0YWdlSW5kZXggKys7XG4gICAgdGhpcy5fX3J1bkFjdGlvbkZ1bmMoZGF0YSk7XG4gIH0sXG4gIFxuICBfX3J1bkF0YWc6IGZ1bmN0aW9uKGJ1dHRvbikge1xuICAgIHZhciBhVGFnID0gYnV0dG9uLnF1ZXJ5U2VsZWN0b3IoJ2EnKTtcbiAgICAgICAgICBcbiAgICBpZiAoYVRhZykge1xuICAgICAgQ29DcmVhdGVMb2dpYy5zZXRMaW5rUHJvY2VzcyhhVGFnKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb0NyZWF0ZUFjdGlvbjtcblxuQ29DcmVhdGVBY3Rpb24uaW5pdCgpOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/CoCreate-actions.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__("./src/CoCreate-actions.js");
/******/ })()
.default;
});