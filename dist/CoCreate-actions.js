/******/ (function(modules) { // webpackBootstrap
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
/*! no static exports found */
/***/ (function(module, exports) {

eval("// -testing1\nvar CoCreateAction = {\n  attribute: 'data-actions',\n  actions: {},\n  selectedStage: [],\n  stageIndex: 0,\n  selectedElement: null,\n  completedEventName: 'completedEvent',\n  init: function init() {\n    this.actionButtonEvent();\n  },\n  // init: function(container) {\n  //   const __container = container || document\n  //   if (!__container.querySelectorAll) {\n  // \treturn;\n  // }\n  // let buttons = __container.querySelectorAll(\"[data-actions]\");\n  // for (let i = 0; i < buttons.length; i++) {\n  //   this.actionButtonEvent(buttons[i]);\n  // }\n  // },\n  // actionButtonEvent: function(btn) {\n  //   const _this = this;    \n  // let checkActions = btn.getAttribute('data-actions') || \"\";\n  // checkActions = checkActions.replace(/\\s/g, '').split(',');\n  // if (checkActions.length == 0) {\n  //   return;\n  // }\n  //   btn.addEventListener('click', function(event) {\n  //     event.preventDefault();\n  //     let actions = this.getAttribute(_this.attribute) || \"\";\n  //     actions = actions.replace(/\\s/g, '').split(',');\n  //     _this.stageIndex = 0;\n  //     _this.selectedStage = actions;\n  //     //. run function\n  //     _this.selectedElement = btn;\n  //     _this.__runActionFunc();\n  //   })\n  // },\n  actionButtonEvent: function actionButtonEvent() {\n    var self = this;\n    document.addEventListener('click', function (event) {\n      var btn = event.target;\n\n      if (!btn.getAttribute('data-actions')) {\n        btn = event.target.closest('[data-actions]');\n      }\n\n      if (!btn) return;\n      event.preventDefault();\n      var actions = (btn.getAttribute(self.attribute) || \"\").replace(/\\s/g, '').split(',');\n      if (actions.length == 0) return;\n      self.stageIndex = 0;\n      self.selectedStage = actions; //. run function\n\n      self.selectedElement = btn;\n\n      self.__runActionFunc();\n    });\n  },\n\n  /**\n   * key: string\n   * runFunc: function\n   * instance: object\n   * endEvent: string\n   **/\n  registerEvent: function registerEvent(key, runFunc, instance, endEvent) {\n    if (this.actions[key]) {\n      return;\n    }\n\n    this.actions[key] = {\n      key: key,\n      runFunc: runFunc,\n      instance: instance || window,\n      endEvent: endEvent\n    }; //. register events\n\n    for (var __key in this.actions) {\n      if (__key != key && this.actions[__key]['endEvent'] === endEvent) {\n        return;\n      }\n    } //. register events\n\n\n    var _this = this;\n\n    document.addEventListener(endEvent, function (e) {\n      _this.__nextAction(endEvent, e.detail);\n    });\n  },\n  __runActionFunc: function __runActionFunc(data) {\n    if (this.stageIndex >= this.selectedStage.length) {\n      //. if latest case, it will be run aTag\n      if (this.stageIndex == this.selectedStage.length) {\n        this.__runAtag(this.selectedElement);\n      }\n\n      return;\n    }\n\n    var key = this.selectedStage[this.stageIndex]; //. run function\n\n    var action = this.actions[key];\n\n    if (action) {\n      if (action.runFunc) {\n        action.runFunc.call(action.instance, this.selectedElement, data);\n      } else {\n        this.__nextAction(action.endEvent, {});\n      }\n    }\n  },\n  __nextAction: function __nextAction(eventName, data) {\n    var key = this.selectedStage[this.stageIndex];\n\n    if (!key) {\n      return;\n    }\n\n    if (eventName !== this.actions[key].endEvent) {\n      return;\n    }\n\n    this.stageIndex++;\n\n    this.__runActionFunc(data);\n  },\n  __runAtag: function __runAtag(button) {\n    var aTag = button.querySelector('a');\n\n    if (aTag) {\n      CoCreateLogic.setLinkProcess(aTag);\n    }\n  }\n};\nCoCreateAction.init();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvQ29DcmVhdGUtYWN0aW9ucy5qcz81MmRlIl0sIm5hbWVzIjpbIkNvQ3JlYXRlQWN0aW9uIiwiYXR0cmlidXRlIiwiYWN0aW9ucyIsInNlbGVjdGVkU3RhZ2UiLCJzdGFnZUluZGV4Iiwic2VsZWN0ZWRFbGVtZW50IiwiY29tcGxldGVkRXZlbnROYW1lIiwiaW5pdCIsImFjdGlvbkJ1dHRvbkV2ZW50Iiwic2VsZiIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiYnRuIiwidGFyZ2V0IiwiZ2V0QXR0cmlidXRlIiwiY2xvc2VzdCIsInByZXZlbnREZWZhdWx0IiwicmVwbGFjZSIsInNwbGl0IiwibGVuZ3RoIiwiX19ydW5BY3Rpb25GdW5jIiwicmVnaXN0ZXJFdmVudCIsImtleSIsInJ1bkZ1bmMiLCJpbnN0YW5jZSIsImVuZEV2ZW50Iiwid2luZG93IiwiX19rZXkiLCJfdGhpcyIsImUiLCJfX25leHRBY3Rpb24iLCJkZXRhaWwiLCJkYXRhIiwiX19ydW5BdGFnIiwiYWN0aW9uIiwiY2FsbCIsImV2ZW50TmFtZSIsImJ1dHRvbiIsImFUYWciLCJxdWVyeVNlbGVjdG9yIiwiQ29DcmVhdGVMb2dpYyIsInNldExpbmtQcm9jZXNzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLElBQU1BLGNBQWMsR0FBRztBQUNyQkMsV0FBUyxFQUFFLGNBRFU7QUFFckJDLFNBQU8sRUFBRSxFQUZZO0FBR3JCQyxlQUFhLEVBQUUsRUFITTtBQUlyQkMsWUFBVSxFQUFFLENBSlM7QUFLckJDLGlCQUFlLEVBQUUsSUFMSTtBQU9yQkMsb0JBQWtCLEVBQUUsZ0JBUEM7QUFRckJDLE1BQUksRUFBRSxnQkFBVztBQUNmLFNBQUtDLGlCQUFMO0FBQ0QsR0FWb0I7QUFXckI7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQUEsbUJBQWlCLEVBQUUsNkJBQVc7QUFDNUIsUUFBTUMsSUFBSSxHQUFHLElBQWI7QUFDQUMsWUFBUSxDQUFDQyxnQkFBVCxDQUEwQixPQUExQixFQUFtQyxVQUFTQyxLQUFULEVBQWdCO0FBQ2pELFVBQUlDLEdBQUcsR0FBR0QsS0FBSyxDQUFDRSxNQUFoQjs7QUFDQSxVQUFJLENBQUNELEdBQUcsQ0FBQ0UsWUFBSixDQUFpQixjQUFqQixDQUFMLEVBQXVDO0FBQ3JDRixXQUFHLEdBQUdELEtBQUssQ0FBQ0UsTUFBTixDQUFhRSxPQUFiLENBQXFCLGdCQUFyQixDQUFOO0FBQ0Q7O0FBQ0QsVUFBSSxDQUFDSCxHQUFMLEVBQVU7QUFDVkQsV0FBSyxDQUFDSyxjQUFOO0FBRUEsVUFBSWYsT0FBTyxHQUFHLENBQUNXLEdBQUcsQ0FBQ0UsWUFBSixDQUFpQk4sSUFBSSxDQUFDUixTQUF0QixLQUFvQyxFQUFyQyxFQUF5Q2lCLE9BQXpDLENBQWlELEtBQWpELEVBQXdELEVBQXhELEVBQTREQyxLQUE1RCxDQUFrRSxHQUFsRSxDQUFkO0FBQ0EsVUFBSWpCLE9BQU8sQ0FBQ2tCLE1BQVIsSUFBa0IsQ0FBdEIsRUFBeUI7QUFDekJYLFVBQUksQ0FBQ0wsVUFBTCxHQUFrQixDQUFsQjtBQUNBSyxVQUFJLENBQUNOLGFBQUwsR0FBcUJELE9BQXJCLENBWGlELENBYWpEOztBQUNBTyxVQUFJLENBQUNKLGVBQUwsR0FBdUJRLEdBQXZCOztBQUNBSixVQUFJLENBQUNZLGVBQUw7QUFDRCxLQWhCRDtBQWlCRCxHQW5Fb0I7O0FBcUVyQjtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRUMsZUFBYSxFQUFFLHVCQUFTQyxHQUFULEVBQWNDLE9BQWQsRUFBdUJDLFFBQXZCLEVBQWlDQyxRQUFqQyxFQUEyQztBQUN4RCxRQUFJLEtBQUt4QixPQUFMLENBQWFxQixHQUFiLENBQUosRUFBdUI7QUFDckI7QUFDRDs7QUFFRCxTQUFLckIsT0FBTCxDQUFhcUIsR0FBYixJQUFvQjtBQUNsQkEsU0FBRyxFQUFFQSxHQURhO0FBRWxCQyxhQUFPLEVBQUVBLE9BRlM7QUFHbEJDLGNBQVEsRUFBRUEsUUFBUSxJQUFJRSxNQUhKO0FBSWxCRCxjQUFRLEVBQUVBO0FBSlEsS0FBcEIsQ0FMd0QsQ0FXeEQ7O0FBRUEsU0FBSyxJQUFJRSxLQUFULElBQWtCLEtBQUsxQixPQUF2QixFQUFnQztBQUM5QixVQUFJMEIsS0FBSyxJQUFJTCxHQUFULElBQWdCLEtBQUtyQixPQUFMLENBQWEwQixLQUFiLEVBQW9CLFVBQXBCLE1BQW9DRixRQUF4RCxFQUFrRTtBQUNoRTtBQUNEO0FBQ0YsS0FqQnVELENBbUJ4RDs7O0FBQ0EsUUFBTUcsS0FBSyxHQUFHLElBQWQ7O0FBQ0FuQixZQUFRLENBQUNDLGdCQUFULENBQTBCZSxRQUExQixFQUFvQyxVQUFTSSxDQUFULEVBQVk7QUFDOUNELFdBQUssQ0FBQ0UsWUFBTixDQUFtQkwsUUFBbkIsRUFBNkJJLENBQUMsQ0FBQ0UsTUFBL0I7QUFDRCxLQUZEO0FBR0QsR0FuR29CO0FBcUdyQlgsaUJBQWUsRUFBRSx5QkFBU1ksSUFBVCxFQUFlO0FBRTlCLFFBQUksS0FBSzdCLFVBQUwsSUFBbUIsS0FBS0QsYUFBTCxDQUFtQmlCLE1BQTFDLEVBQWtEO0FBRWhEO0FBQ0EsVUFBSSxLQUFLaEIsVUFBTCxJQUFtQixLQUFLRCxhQUFMLENBQW1CaUIsTUFBMUMsRUFBa0Q7QUFDaEQsYUFBS2MsU0FBTCxDQUFlLEtBQUs3QixlQUFwQjtBQUNEOztBQUNEO0FBQ0Q7O0FBRUQsUUFBTWtCLEdBQUcsR0FBRyxLQUFLcEIsYUFBTCxDQUFtQixLQUFLQyxVQUF4QixDQUFaLENBWDhCLENBWTlCOztBQUNBLFFBQU0rQixNQUFNLEdBQUcsS0FBS2pDLE9BQUwsQ0FBYXFCLEdBQWIsQ0FBZjs7QUFDQSxRQUFJWSxNQUFKLEVBQVk7QUFDVixVQUFJQSxNQUFNLENBQUNYLE9BQVgsRUFBb0I7QUFDbEJXLGNBQU0sQ0FBQ1gsT0FBUCxDQUFlWSxJQUFmLENBQW9CRCxNQUFNLENBQUNWLFFBQTNCLEVBQXFDLEtBQUtwQixlQUExQyxFQUEyRDRCLElBQTNEO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsYUFBS0YsWUFBTCxDQUFrQkksTUFBTSxDQUFDVCxRQUF6QixFQUFtQyxFQUFuQztBQUNEO0FBQ0Y7QUFDRixHQTFIb0I7QUE0SHJCSyxjQUFZLEVBQUUsc0JBQVNNLFNBQVQsRUFBb0JKLElBQXBCLEVBQTBCO0FBQ3RDLFFBQU1WLEdBQUcsR0FBRyxLQUFLcEIsYUFBTCxDQUFtQixLQUFLQyxVQUF4QixDQUFaOztBQUNBLFFBQUksQ0FBQ21CLEdBQUwsRUFBVTtBQUNSO0FBQ0Q7O0FBQ0QsUUFBSWMsU0FBUyxLQUFLLEtBQUtuQyxPQUFMLENBQWFxQixHQUFiLEVBQWtCRyxRQUFwQyxFQUE4QztBQUM1QztBQUNEOztBQUNELFNBQUt0QixVQUFMOztBQUNBLFNBQUtpQixlQUFMLENBQXFCWSxJQUFyQjtBQUNELEdBdElvQjtBQXdJckJDLFdBQVMsRUFBRSxtQkFBU0ksTUFBVCxFQUFpQjtBQUMxQixRQUFJQyxJQUFJLEdBQUdELE1BQU0sQ0FBQ0UsYUFBUCxDQUFxQixHQUFyQixDQUFYOztBQUVBLFFBQUlELElBQUosRUFBVTtBQUNSRSxtQkFBYSxDQUFDQyxjQUFkLENBQTZCSCxJQUE3QjtBQUNEO0FBQ0Y7QUE5SW9CLENBQXZCO0FBaUpBdkMsY0FBYyxDQUFDTyxJQUFmIiwiZmlsZSI6Ii4vc3JjL0NvQ3JlYXRlLWFjdGlvbnMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAtdGVzdGluZzFcbmNvbnN0IENvQ3JlYXRlQWN0aW9uID0ge1xuICBhdHRyaWJ1dGU6ICdkYXRhLWFjdGlvbnMnLFxuICBhY3Rpb25zOiB7fSxcbiAgc2VsZWN0ZWRTdGFnZTogW10sXG4gIHN0YWdlSW5kZXg6IDAsXG4gIHNlbGVjdGVkRWxlbWVudDogbnVsbCxcbiAgXG4gIGNvbXBsZXRlZEV2ZW50TmFtZTogJ2NvbXBsZXRlZEV2ZW50JyxcbiAgaW5pdDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5hY3Rpb25CdXR0b25FdmVudCgpXG4gIH0sXG4gIC8vIGluaXQ6IGZ1bmN0aW9uKGNvbnRhaW5lcikge1xuICAgIFxuICAvLyAgIGNvbnN0IF9fY29udGFpbmVyID0gY29udGFpbmVyIHx8IGRvY3VtZW50XG4gIC8vICAgaWYgKCFfX2NvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKSB7XG5cdFx0Ly8gXHRyZXR1cm47XG5cdFx0Ly8gfVxuXHRcdFxuXHRcdC8vIGxldCBidXR0b25zID0gX19jb250YWluZXIucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLWFjdGlvbnNdXCIpO1xuXG5cdFx0Ly8gZm9yIChsZXQgaSA9IDA7IGkgPCBidXR0b25zLmxlbmd0aDsgaSsrKSB7XG5cdFx0Ly8gICB0aGlzLmFjdGlvbkJ1dHRvbkV2ZW50KGJ1dHRvbnNbaV0pO1xuXHRcdC8vIH1cbiAgLy8gfSxcbiAgXG4gIC8vIGFjdGlvbkJ1dHRvbkV2ZW50OiBmdW5jdGlvbihidG4pIHtcbiAgLy8gICBjb25zdCBfdGhpcyA9IHRoaXM7ICAgIFxuXHQgLy8gbGV0IGNoZWNrQWN0aW9ucyA9IGJ0bi5nZXRBdHRyaWJ1dGUoJ2RhdGEtYWN0aW9ucycpIHx8IFwiXCI7XG5cdCAvLyBjaGVja0FjdGlvbnMgPSBjaGVja0FjdGlvbnMucmVwbGFjZSgvXFxzL2csICcnKS5zcGxpdCgnLCcpO1xuXHQgIFxuXHQgLy8gaWYgKGNoZWNrQWN0aW9ucy5sZW5ndGggPT0gMCkge1xuXHQgLy8gICByZXR1cm47XG5cdCAvLyB9XG5cbiAgLy8gICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAvLyAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgLy8gICAgIGxldCBhY3Rpb25zID0gdGhpcy5nZXRBdHRyaWJ1dGUoX3RoaXMuYXR0cmlidXRlKSB8fCBcIlwiO1xuICAvLyAgICAgYWN0aW9ucyA9IGFjdGlvbnMucmVwbGFjZSgvXFxzL2csICcnKS5zcGxpdCgnLCcpO1xuICAvLyAgICAgX3RoaXMuc3RhZ2VJbmRleCA9IDA7XG4gIC8vICAgICBfdGhpcy5zZWxlY3RlZFN0YWdlID0gYWN0aW9ucztcbiAgICAgIFxuICAvLyAgICAgLy8uIHJ1biBmdW5jdGlvblxuICAvLyAgICAgX3RoaXMuc2VsZWN0ZWRFbGVtZW50ID0gYnRuO1xuICAvLyAgICAgX3RoaXMuX19ydW5BY3Rpb25GdW5jKCk7XG4gICAgICBcbiAgLy8gICB9KVxuICAvLyB9LFxuICBcbiAgYWN0aW9uQnV0dG9uRXZlbnQ6IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIGxldCBidG4gPSBldmVudC50YXJnZXQ7XG4gICAgICBpZiAoIWJ0bi5nZXRBdHRyaWJ1dGUoJ2RhdGEtYWN0aW9ucycpKSB7XG4gICAgICAgIGJ0biA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCdbZGF0YS1hY3Rpb25zXScpO1xuICAgICAgfVxuICAgICAgaWYgKCFidG4pIHJldHVybjtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGxldCBhY3Rpb25zID0gKGJ0bi5nZXRBdHRyaWJ1dGUoc2VsZi5hdHRyaWJ1dGUpIHx8IFwiXCIpLnJlcGxhY2UoL1xccy9nLCAnJykuc3BsaXQoJywnKTtcbiAgICAgIGlmIChhY3Rpb25zLmxlbmd0aCA9PSAwKSByZXR1cm47XG4gICAgICBzZWxmLnN0YWdlSW5kZXggPSAwO1xuICAgICAgc2VsZi5zZWxlY3RlZFN0YWdlID0gYWN0aW9ucztcbiAgICAgIFxuICAgICAgLy8uIHJ1biBmdW5jdGlvblxuICAgICAgc2VsZi5zZWxlY3RlZEVsZW1lbnQgPSBidG47XG4gICAgICBzZWxmLl9fcnVuQWN0aW9uRnVuYygpO1xuICAgIH0pXG4gIH0sXG4gIFxuICAvKipcbiAgICoga2V5OiBzdHJpbmdcbiAgICogcnVuRnVuYzogZnVuY3Rpb25cbiAgICogaW5zdGFuY2U6IG9iamVjdFxuICAgKiBlbmRFdmVudDogc3RyaW5nXG4gICAqKi9cbiAgcmVnaXN0ZXJFdmVudDogZnVuY3Rpb24oa2V5LCBydW5GdW5jLCBpbnN0YW5jZSwgZW5kRXZlbnQpIHtcbiAgICBpZiAodGhpcy5hY3Rpb25zW2tleV0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG4gICAgdGhpcy5hY3Rpb25zW2tleV0gPSB7XG4gICAgICBrZXk6IGtleSxcbiAgICAgIHJ1bkZ1bmM6IHJ1bkZ1bmMsXG4gICAgICBpbnN0YW5jZTogaW5zdGFuY2UgfHwgd2luZG93LFxuICAgICAgZW5kRXZlbnQ6IGVuZEV2ZW50XG4gICAgfVxuICAgIC8vLiByZWdpc3RlciBldmVudHNcbiAgICBcbiAgICBmb3IgKGxldCBfX2tleSBpbiB0aGlzLmFjdGlvbnMpIHtcbiAgICAgIGlmIChfX2tleSAhPSBrZXkgJiYgdGhpcy5hY3Rpb25zW19fa2V5XVsnZW5kRXZlbnQnXSA9PT0gZW5kRXZlbnQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAvLy4gcmVnaXN0ZXIgZXZlbnRzXG4gICAgY29uc3QgX3RoaXMgPSB0aGlzO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoZW5kRXZlbnQsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIF90aGlzLl9fbmV4dEFjdGlvbihlbmRFdmVudCwgZS5kZXRhaWwpXG4gICAgfSk7XG4gIH0sXG4gIFxuICBfX3J1bkFjdGlvbkZ1bmM6IGZ1bmN0aW9uKGRhdGEpIHtcblxuICAgIGlmICh0aGlzLnN0YWdlSW5kZXggPj0gdGhpcy5zZWxlY3RlZFN0YWdlLmxlbmd0aCkge1xuXG4gICAgICAvLy4gaWYgbGF0ZXN0IGNhc2UsIGl0IHdpbGwgYmUgcnVuIGFUYWdcbiAgICAgIGlmICh0aGlzLnN0YWdlSW5kZXggPT0gdGhpcy5zZWxlY3RlZFN0YWdlLmxlbmd0aCkge1xuICAgICAgICB0aGlzLl9fcnVuQXRhZyh0aGlzLnNlbGVjdGVkRWxlbWVudCk7ICAgICAgICBcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG4gICAgY29uc3Qga2V5ID0gdGhpcy5zZWxlY3RlZFN0YWdlW3RoaXMuc3RhZ2VJbmRleF07XG4gICAgLy8uIHJ1biBmdW5jdGlvblxuICAgIGNvbnN0IGFjdGlvbiA9IHRoaXMuYWN0aW9uc1trZXldO1xuICAgIGlmIChhY3Rpb24pIHtcbiAgICAgIGlmIChhY3Rpb24ucnVuRnVuYykge1xuICAgICAgICBhY3Rpb24ucnVuRnVuYy5jYWxsKGFjdGlvbi5pbnN0YW5jZSwgdGhpcy5zZWxlY3RlZEVsZW1lbnQsIGRhdGEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fX25leHRBY3Rpb24oYWN0aW9uLmVuZEV2ZW50LCB7fSk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBcbiAgX19uZXh0QWN0aW9uOiBmdW5jdGlvbihldmVudE5hbWUsIGRhdGEpIHtcbiAgICBjb25zdCBrZXkgPSB0aGlzLnNlbGVjdGVkU3RhZ2VbdGhpcy5zdGFnZUluZGV4XTtcbiAgICBpZiAoIWtleSkge1xuICAgICAgcmV0dXJuIDtcbiAgICB9XG4gICAgaWYgKGV2ZW50TmFtZSAhPT0gdGhpcy5hY3Rpb25zW2tleV0uZW5kRXZlbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5zdGFnZUluZGV4ICsrO1xuICAgIHRoaXMuX19ydW5BY3Rpb25GdW5jKGRhdGEpO1xuICB9LFxuICBcbiAgX19ydW5BdGFnOiBmdW5jdGlvbihidXR0b24pIHtcbiAgICB2YXIgYVRhZyA9IGJ1dHRvbi5xdWVyeVNlbGVjdG9yKCdhJyk7XG4gICAgICAgICAgXG4gICAgaWYgKGFUYWcpIHtcbiAgICAgIENvQ3JlYXRlTG9naWMuc2V0TGlua1Byb2Nlc3MoYVRhZylcbiAgICB9XG4gIH1cbn1cblxuQ29DcmVhdGVBY3Rpb24uaW5pdCgpOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/CoCreate-actions.js\n");

/***/ })

/******/ });