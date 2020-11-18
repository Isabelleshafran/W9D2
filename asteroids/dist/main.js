/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\nconst Util = __webpack_require__(/*! ./util */ \"./src/util.js\");\n\n\nconst DEFAULTS = {\n    color: \"red\", \n    radius: 20\n}\n\nfunction Asteroid(options) {\n    options.color = DEFAULTS.color;\n    options.radius = DEFAULTS.radius;\n    options.vel = Util.randomVec(5);\n    MovingObject.call(this, options);\n}\n\nUtil.inherits(Asteroid, MovingObject);\n\nmodule.exports = Asteroid;\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 38:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Util = __webpack_require__(/*! ./util */ \"./src/util.js\");\n\nconst DEFAULTS = {\n    DIM_X: 1000,\n    DIM_Y: 600,\n    NUM_ASTEROIDS: 50\n\n}\n\n\nfunction Game() {\n    this.asteroids = [];\n    this.addAsteroids();\n}\n\n\nGame.prototype.addAsteroids = function(){\n    for(let i= 0; i < DEFAULTS.NUM_ASTEROIDS; i++){\n        this.asteroids.push(new Asteroid({ pos: this.randomPosition()}))\n    }\n}\n\n// const ast = new Asteroid({ pos: [30, 30] });\n\nGame.prototype.randomPosition = function(){\n    return [DEFAULTS.DIM_X * Math.random(), DEFAULTS.DIM_Y * Math.random() ]\n}\n\nGame.prototype.draw = function(ctx) {\n    ctx.clearRect(0, 0, DEFAULTS.DIM_X, DEFAULTS.DIM_Y);\n    this.asteroids.forEach(ast => ast.draw(ctx));\n}\n\nGame.prototype.moveObjects = function() {\n    asteroids.forEach(ast => ast.move(1000));\n}\n\nmodule.exports = Game;\n// ctx.clearRect(0, 0, canvas.width, canvas.height);\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/***/ ((module) => {

eval("\nfunction MovingObject(options) {\n    this.pos = options.pos; \n    this.vel = options.vel;\n    this.radius = options.radius;\n    this.color = options.color;\n}\n\nMovingObject.prototype.draw = function(ctx){\n    ctx.fillStyle = this.color;\n    ctx.beginPath();\n\n    ctx.arc(\n        this.pos[0], \n        this.pos[1],\n        this.radius, \n        0, \n        2 * Math.PI, \n        false\n    );\n\n    ctx.fill();\n}\n\nMovingObject.prototype.move = function(time) {\n    let x = this.pos[0];\n    let y = this.pos[1];\n    \n    let newPos = [x + (this.vel[0]*time), y + (this.vel[1]*time)];\n    this.pos = newPos;\n}\n\nmodule.exports = MovingObject;\n\n// const mo = new MovingObject({\n//   pos: [30, 30],\n//   vel: [10, 10],\n//   radius: 5,\n//   color: \"#00FF00\",\n// });\n\n// this is math, not JavaScript\n// Dist([x_1, y_1], [x_2, y_2]) = sqrt((x_1 - x_2) ** 2 + (y_1 - y_2) ** 2)\n// Norm([x_1, y_1]) = Dist([0, 0], [x_1, y_1]);\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/***/ ((module) => {

eval("\nconst Util = {\n  inherits(childClass, parentClass) {\n    function Surrogate(){}\n    Surrogate.prototype = parentClass.prototype;\n    childClass.prototype = new Surrogate();\n    // childClass.prototype = Object.create(parentClass.prototype)\n    childClass.prototype.constructor = childClass; \n  }, \n\n    randomVec(length) {\n        const deg = 2 * Math.PI * Math.random();\n        return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n    },\n\n    // Scale the length of a vector by the given amount.\n    scale(vec, m) {\n        return [vec[0] * m, vec[1] * m];\n    }\n};\n\nmodule.exports = Util; \n\n//# sourceURL=webpack:///./src/util.js?");

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
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Asteroid = __webpack_require__(/*! ./asteroid */ \"./src/asteroid.js\");\nconst Game = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\n\n// first arg is event its listenting for \n// second is whats invoked when the 'event' happens\n// once all elements are loaded on page we run the other code \nwindow.addEventListener(\"DOMContentLoaded\", () => {\n    // console.log(\"DOM fully loaded and parsed\");\n    let canvas = document.getElementById(\"game-canvas\");\n    let context = canvas.getContext(\"2d\");\n    // let test = new MovingObject(canvas, cotnext)\n    // test.draw(ctx)\n    \n    const mo = new MovingObject({\n        pos: [100, 100],\n        vel: [10, 10],\n        radius: 5,\n        color: \"#00FF00\"\n    });\n    \n    mo.draw(context);\n    window.MovingObject = MovingObject;\n    window.Asteroid = Asteroid;\n    window.context = context;\n    window.Game = Game;\n    // const ast = new Asteroid({ pos: [30, 30] });\n    // ast.draw(context);\n    \n});\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");
})();

/******/ })()
;