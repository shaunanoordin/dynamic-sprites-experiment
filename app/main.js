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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var _ImageAsset__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ImageAsset */ \"./src/ImageAsset.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\n\n/*  Primary App Class\n */\n//==============================================================================\n\nvar App = /*#__PURE__*/function () {\n  function App() {\n    var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 160;\n    var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 80;\n\n    _classCallCheck(this, App);\n\n    this.html = {\n      canvas: document.getElementById('canvas'),\n      main: document.getElementById('main')\n    };\n    this.canvas2d = this.html.canvas.getContext('2d');\n    this.canvasWidth = width;\n    this.canvasHeight = height;\n    this.setupUI();\n    this.initialised = false;\n    this.assets = {\n      'mario': new _ImageAsset__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('assets/mario.gif')\n    };\n    this.rotatedMario_rotationTime = 0;\n    this.rotatedMario_rotationMax = 12000;\n    this.prevTime = null;\n    this.nextFrame = window.requestAnimationFrame(this.main.bind(this));\n  }\n  /*\n  The main loop. Run a single frame of gameplay.\n  - time: the current/total time (milliseconds) since the game started.\n   */\n\n\n  _createClass(App, [{\n    key: \"main\",\n    value: function main(time) {\n      var timeStep = this.prevTime ? time - this.prevTime : time;\n      this.prevTime = time;\n\n      if (this.initialised) {\n        this.play(timeStep);\n        this.paint();\n      } else {\n        this.initialisationCheck();\n      }\n\n      this.nextFrame = window.requestAnimationFrame(this.main.bind(this));\n    }\n  }, {\n    key: \"play\",\n    value: function play() {\n      var timeStep = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;\n      this.rotatedMario_rotationTime = (this.rotatedMario_rotationTime + timeStep) % this.rotatedMario_rotationMax;\n    }\n  }, {\n    key: \"paint\",\n    value: function paint() {\n      var c2d = this.canvas2d;\n      var camera = this.camera;\n      var img = this.assets.mario.img;\n      c2d.clearRect(0, 0, this.canvasWidth, this.canvasHeight);\n      c2d.fillStyle = '#ccc';\n      c2d.fillRect(0, 0, this.canvasWidth, this.canvasHeight);\n\n      function paintSmallMario() {\n        var scale = 1;\n        var srcX = 6,\n            srcY = 7;\n        var srcSizeX = 12,\n            srcSizeY = 16;\n        var tgtX = 0,\n            tgtY = 0;\n        var tgtSizeX = srcSizeX * scale,\n            tgtSizeY = srcSizeY * scale;\n        c2d.drawImage(img, srcX, srcY, srcSizeX, srcSizeY, tgtX, tgtY, tgtSizeX, tgtSizeY);\n      }\n\n      function paintBigMario() {\n        var scale = 4;\n        var srcX = 6,\n            srcY = 7;\n        var srcSizeX = 12,\n            srcSizeY = 16;\n        var tgtX = 12,\n            tgtY = 0;\n        var tgtSizeX = srcSizeX * scale,\n            tgtSizeY = srcSizeY * scale;\n        c2d.drawImage(img, srcX, srcY, srcSizeX, srcSizeY, tgtX, tgtY, tgtSizeX, tgtSizeY);\n      }\n\n      function paintInvertedMario() {\n        c2d.save();\n        c2d.globalCompositeOperation = 'exclusion';\n        var scale = 1;\n        var srcX = 6,\n            srcY = 7;\n        var srcSizeX = 12,\n            srcSizeY = 16;\n        var tgtX = 72,\n            tgtY = 0;\n        var tgtSizeX = srcSizeX * scale,\n            tgtSizeY = srcSizeY * scale;\n        c2d.drawImage(img, srcX, srcY, srcSizeX, srcSizeY, tgtX, tgtY, tgtSizeX, tgtSizeY);\n        c2d.restore();\n      }\n\n      function paintRotatedMario(progress) {\n        c2d.save();\n        var scale = 1;\n        var srcX = 6,\n            srcY = 7;\n        var srcSizeX = 12,\n            srcSizeY = 16;\n        var tgtX = 96,\n            tgtY = 16;\n        var tgtSizeX = srcSizeX * scale,\n            tgtSizeY = srcSizeY * scale;\n        c2d.translate(tgtX, tgtY);\n        c2d.rotate(Math.PI * 2 * progress);\n        c2d.drawImage(img, srcX, srcY, srcSizeX, srcSizeY, tgtSizeX / -2, tgtY / -2, // Paint sprite, centred on 0,0\n        tgtSizeX, tgtSizeY);\n        c2d.restore();\n      }\n\n      paintSmallMario();\n      paintBigMario();\n      paintInvertedMario();\n      paintRotatedMario(this.rotatedMario_rotationTime / this.rotatedMario_rotationMax);\n    }\n  }, {\n    key: \"initialisationCheck\",\n    value: function initialisationCheck() {\n      var _this = this;\n\n      // Assets check\n      var allAssetsReady = true;\n      var numReadyAssets = 0;\n      var numTotalAssets = 0;\n      Object.keys(this.assets).forEach(function (id) {\n        var asset = _this.assets[id];\n        allAssetsReady = allAssetsReady && asset.ready;\n        if (asset.ready) numReadyAssets++;\n        numTotalAssets++;\n      });\n\n      if (allAssetsReady) {\n        // Let's go!\n        this.initialised = true;\n      }\n    }\n  }, {\n    key: \"setupUI\",\n    value: function setupUI() {\n      this.html.canvas.width = this.canvasWidth;\n      this.html.canvas.height = this.canvasHeight;\n      this.canvas2d.imageSmoothingEnabled = false;\n      /* Allow sprite art to be scaled up in drawImage() */\n\n      if (window.PointerEvent) {\n        this.html.canvas.addEventListener('pointerdown', this.onPointerDown.bind(this));\n        this.html.canvas.addEventListener('pointermove', this.onPointerMove.bind(this));\n        this.html.canvas.addEventListener('pointerup', this.onPointerUp.bind(this));\n        this.html.canvas.addEventListener('pointercancel', this.onPointerUp.bind(this));\n      } else {\n        this.html.canvas.addEventListener('mousedown', this.onPointerDown.bind(this));\n        this.html.canvas.addEventListener('mousemove', this.onPointerMove.bind(this));\n        this.html.canvas.addEventListener('mouseup', this.onPointerUp.bind(this));\n      } // Prevent \"touch and hold to open context menu\" menu on touchscreens.\n\n\n      this.html.canvas.addEventListener('touchstart', stopEvent);\n      this.html.canvas.addEventListener('touchmove', stopEvent);\n      this.html.canvas.addEventListener('touchend', stopEvent);\n      this.html.canvas.addEventListener('touchcancel', stopEvent);\n      this.html.main.addEventListener('keydown', this.onKeyDown.bind(this));\n      this.html.main.addEventListener('keyup', this.onKeyUp.bind(this)); // window.addEventListener('resize', this.updateUI.bind(this))\n      // this.updateUI()\n\n      this.html.main.focus();\n    }\n  }, {\n    key: \"onPointerDown\",\n    value: function onPointerDown(e) {\n      return stopEvent(e);\n    }\n  }, {\n    key: \"onPointerMove\",\n    value: function onPointerMove(e) {\n      return stopEvent(e);\n    }\n  }, {\n    key: \"onPointerUp\",\n    value: function onPointerUp(e) {\n      return stopEvent(e);\n    }\n  }, {\n    key: \"onKeyDown\",\n    value: function onKeyDown(e) {}\n  }, {\n    key: \"onKeyUp\",\n    value: function onKeyUp(e) {}\n  }]);\n\n  return App;\n}();\n\n\n\nfunction getEventCoords(event, element) {\n  var xRatio = element.width && element.offsetWidth ? element.width / element.offsetWidth : 1;\n  var yRatio = element.height && element.offsetHeight ? element.height / element.offsetHeight : 1;\n  var x = event.offsetX * xRatio;\n  var y = event.offsetY * yRatio;\n  return {\n    x: x,\n    y: y\n  };\n}\n\nfunction stopEvent(e) {\n  if (!e) return false;\n  e.preventDefault && e.preventDefault();\n  e.stopPropagation && e.stopPropagation();\n  e.returnValue = false;\n  e.cancelBubble = true;\n  return false;\n} //==============================================================================\n\n//# sourceURL=webpack://dynamic-sprites-experiment/./src/App.js?");

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