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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var _ImageAsset__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ImageAsset */ \"./src/ImageAsset.js\");\n\n/*  Primary App Class\n */\n//==============================================================================\n\nclass App {\n  constructor() {\n    this.initialised = false;\n    this.assets = {\n      \"exampleImage\": new _ImageAsset__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('assets/simple-bg.png')\n    };\n    this.prevTime = null;\n    this.nextFrame = window.requestAnimationFrame(this.main.bind(this));\n  }\n  /*\n  The main loop. Run a single frame of gameplay.\n  - time: the current/total time (milliseconds) since the game started.\n   */\n\n\n  main(time) {\n    const timeStep = this.prevTime ? time - this.prevTime : time;\n    this.prevTime = time;\n\n    if (this.initialised) {\n      this.play(timeStep);\n      this.paint();\n    } else {\n      this.initialisationCheck();\n    }\n\n    this.nextFrame = window.requestAnimationFrame(this.main.bind(this));\n  }\n\n  play(timeStep = 0) {}\n\n  paint() {}\n\n  initialisationCheck() {\n    // Assets check\n    let allAssetsReady = true;\n    let numReadyAssets = 0;\n    let numTotalAssets = 0;\n    Object.keys(this.assets).forEach(id => {\n      const asset = this.assets[id];\n      allAssetsReady = allAssetsReady && asset.ready;\n      if (asset.ready) numReadyAssets++;\n      numTotalAssets++;\n    });\n\n    if (allAssetsReady) {\n      // Let's go!\n      this.initialised = true;\n    }\n  }\n\n} //==============================================================================\n\n//# sourceURL=webpack://dynamic-sprites-experiment/./src/App.js?");

/***/ }),

/***/ "./src/ImageAsset.js":
/*!***************************!*\
  !*** ./src/ImageAsset.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ImageAsset)\n/* harmony export */ });\nclass ImageAsset {\n  constructor(url) {\n    this.url = url;\n    this.ready = false;\n    this.error = false;\n    this.img = new Image();\n\n    this.img.onload = function () {\n      this.ready = true;\n      this.error = false;\n    }.bind(this);\n\n    this.img.onerror = function (err) {\n      console.error('ImageAsset Error (' + this.url + '): ', err);\n      this.ready = false;\n      this.error = true;\n    }.bind(this);\n\n    this.img.src = this.url;\n  }\n\n}\n\n//# sourceURL=webpack://dynamic-sprites-experiment/./src/ImageAsset.js?");

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