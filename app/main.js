/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var _ImageAsset__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ImageAsset */ \"./src/ImageAsset.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\n\n/*  Primary App Class\n */\n//==============================================================================\n\nvar App = /*#__PURE__*/function () {\n  function App() {\n    _classCallCheck(this, App);\n\n    this.initialised = false;\n    this.assets = {\n      \"exampleImage\": new _ImageAsset__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('assets/simple-bg.png')\n    };\n    this.prevTime = null;\n    this.nextFrame = window.requestAnimationFrame(this.main.bind(this));\n  }\n  /*\n  The main loop. Run a single frame of gameplay.\n  - time: the current/total time (milliseconds) since the game started.\n   */\n\n\n  _createClass(App, [{\n    key: \"main\",\n    value: function main(time) {\n      var timeStep = this.prevTime ? time - this.prevTime : time;\n      this.prevTime = time;\n\n      if (this.initialised) {\n        this.play(timeStep);\n        this.paint();\n      } else {\n        this.initialisationCheck();\n      }\n\n      this.nextFrame = window.requestAnimationFrame(this.main.bind(this));\n    }\n  }, {\n    key: \"play\",\n    value: function play() {\n      var timeStep = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;\n    }\n  }, {\n    key: \"paint\",\n    value: function paint() {}\n  }, {\n    key: \"initialisationCheck\",\n    value: function initialisationCheck() {\n      var _this = this;\n\n      // Assets check\n      var allAssetsReady = true;\n      var numReadyAssets = 0;\n      var numTotalAssets = 0;\n      Object.keys(this.assets).forEach(function (id) {\n        var asset = _this.assets[id];\n        allAssetsReady = allAssetsReady && asset.ready;\n        if (asset.ready) numReadyAssets++;\n        numTotalAssets++;\n      });\n\n      if (allAssetsReady) {\n        // Let's go!\n        this.initialised = true;\n      }\n    }\n  }]);\n\n  return App;\n}(); //==============================================================================\n\n\n\n\n//# sourceURL=webpack://dynamic-sprites-experiment/./src/App.js?");

/***/ }),

/***/ "./src/ImageAsset.js":
/*!***************************!*\
  !*** ./src/ImageAsset.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ImageAsset)\n/* harmony export */ });\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar ImageAsset = /*#__PURE__*/_createClass(function ImageAsset(url) {\n  _classCallCheck(this, ImageAsset);\n\n  this.url = url;\n  this.ready = false;\n  this.error = false;\n  this.img = new Image();\n\n  this.img.onload = function () {\n    this.ready = true;\n    this.error = false;\n  }.bind(this);\n\n  this.img.onerror = function (err) {\n    console.error('ImageAsset Error (' + this.url + '): ', err);\n    this.ready = false;\n    this.error = true;\n  }.bind(this);\n\n  this.img.src = this.url;\n});\n\n\n\n//# sourceURL=webpack://dynamic-sprites-experiment/./src/ImageAsset.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App */ \"./src/App.js\");\n\n/*  Initialisations\n */\n//==============================================================================\n\nvar app;\n\nwindow.onload = function () {\n  window.app = new _App__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n}; //==============================================================================\n\n//# sourceURL=webpack://dynamic-sprites-experiment/./src/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;