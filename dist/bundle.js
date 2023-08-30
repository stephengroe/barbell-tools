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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* Meyer reset */\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n/* Variables */\n\n:root {\n    --red: #F4442E;\n    --white: #FCFCFC;\n    --green: #06D6A0;\n    --yellow: #FFD166;\n    --blue: #26547C;\n    --lightgrey: #95A3B3;\n    --black: #130303;\n    --accent: orange;\n\n    --plate-height: 100px;\n    --plate-width: 20px;\n\n    --x-large: 1;\n    --large: .85;\n    --medium: .65;\n    --small: .45;\n    --x-small: .3;\n    --xx-small: .2;\n}\n\nbody {\n    background-color: var(--black);\n    font-family: 'Inter', sans-serif;\n    min-height: 100vh;\n    position: relative;\n    padding-bottom: 25px;\n}\n\n.header {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 1rem;\n}\n\n.header a {\n    background-color: var(--lightgrey);\n    border-radius: 100%;\n    display: block;\n    width: 45px;\n    height: 45px;\n}\n\n.header h1 {\n    font-weight: 200;\n    font-size: 1.25rem;\n    color: var(--white);\n    margin: 0 auto;\n}\n\n#wrapper {\n    margin: 1ch;\n    max-width: 800px;\n}\n\n.card {\n    padding: 2em;\n    color: var(--black);\n    text-decoration: none;\n    background-color: var(--white);\n    display: block;\n    border-radius: 25px;\n    max-width: 800px;\n    margin: 0 auto 1ch auto;\n}\n\n.card h2 {\n    font-size: 1.25rem;\n    font-weight: bold;\n    margin-bottom: .5em;\n}\n\n#visualizer {\n    text-align: center;\n    padding-top: 35px;\n    margin: 0 2ch 20px 2ch;\n    min-height: 150px;\n}\n\n.display {\n    display: flex;\n    justify-content: space-around;\n    margin-bottom: 15px;\n    font-weight: bold;\n    padding: 25px;\n    text-align: center;\n    margin: auto;\n    max-width: 75%;\n    background: var(--lightgrey);\n    border-bottom-right-radius: 0px;\n    border-bottom-left-radius: 0px;\n    color: var(--white);\n    position: relative;\n    font-size: 3rem;\n}\n\n.error {\n    animation: shake 150ms;\n}\n\n@keyframes shake {\n    0% { transform: translate(0, 0); }\n    13% { transform: translate(3px, 0); }\n    38% { transform: translate(-3px, 0); }\n    63% { transform: translate(3px, 0); }\n    87% { transform: translate(-3px, 0); }\n    100% { transform: translate(0, 0); }\n}\n\n.display #unit {\n    font-size: 1rem;\n    text-transform: uppercase;\n    display: block;\n}\n\n.display button {\n    font-size: 1.25rem;\n    background-color: var(--accent);\n    color: var(--white);\n    height: 2.5em;\n    width: 2.5em;\n    text-align: center;\n    display: inline-block;\n    cursor: pointer;\n    border-width: 0;\n    border-radius: 100%;\n}\n\n.keypad {\n    min-height: 250px;\n    display: grid;\n    grid-template-columns: 33% 33% 33%;\n    grid-template-rows: auto;\n    border-radius: 25px;\n    box-shadow: 0px 0.9px 1.3px hsl(200 200 200 / 0.03),\n    0.1px 3.6px 5.2px -0.1px hsl(200 200 200 / 0.12),\n    0.1px 7.3px 10.6px -0.2px hsl(200 200 200 / 0.2),\n    0.2px 14.9px 21.6px -0.4px hsl(200 200 200 / 0.29);\n}\n\n.keypad button {\n    border-width: 0;\n    background-color: #eee;\n    border-radius: 25px;\n    font-size: 1.25rem;\n    padding: 10px;\n    margin: 5px;\n    color: var(--black);\n    cursor: pointer;\n}\n\n#copyright {\n    text-align: center;\n    position: absolute;\n    width: 100%;\n    font-size: .75rem;\n    color: var(--lightgrey);\n    bottom: 10px;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://barbell-tools/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://barbell-tools/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://barbell-tools/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://barbell-tools/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://barbell-tools/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://barbell-tools/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://barbell-tools/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://barbell-tools/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://barbell-tools/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://barbell-tools/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n// Weight module\n\nconst weight = {\n    currentWeight: 0,\n    maxWeight: 1500,\n    minWeight: 0,\n\n    initializeWeight: function(initialWeight) {\n        this.currentWeight = this.getValidWeight(initialWeight);\n        display.renderDisplay(initialWeight);\n        display.renderVisualizer(initialWeight);\n    },\n\n    updateWeight: function(buttonFunction, buttonValue) {\n        let newWeight = calcFunction[buttonFunction](this.currentWeight, +buttonValue);\n        newWeight = this.getValidWeight(newWeight)\n        this.currentWeight = newWeight;\n        display.renderDisplay(newWeight);\n        display.renderVisualizer(newWeight);\n    },\n\n    getValidWeight: function(enteredWeight) {\n        if (enteredWeight > this.maxWeight || enteredWeight < this.minWeight) {\n            display.alertWeightError();\n            return this.currentWeight;\n        } else {\n            this.currentWeight = enteredWeight;\n            return enteredWeight;\n        }\n    },\n}\n\n// Key actions\nconst calcFunction = {\n    append: function(weight, value) {\n        return Number(weight.toString() + value);\n    },\n\n    add: function(weight, value) {\n        return weight + value;\n    },\n\n    subtract: function(weight, value) {\n        return weight - value;\n    },\n\n    delete: function(weight, value) {\n        const result = weight.toString().slice(0, -value);\n        return Number(result);\n    },\n\n    clear: function(unused01, unused02) {\n        return 0;\n    },\n}\n\nconst keypad = {\n    bindKeypad: function() {\n        let calcButton = document.querySelectorAll(\"[data-button-function]\");\n        calcButton.forEach(item => {\n            item.addEventListener(\"click\", function(){\n                weight.updateWeight(this.dataset.buttonFunction, this.dataset.buttonValue)\n            })\n        });\n    },\n}\n\nconst display = {\n    unit: \"lbs.\",\n    mode: \"visualizer\",\n\n    renderDisplay: function(displayValue) {\n        let weightDisplay = document.querySelector(\"[data-display='weight']\");\n        weightDisplay.textContent = displayValue.toString();\n        const unit = document.createElement(\"span\")\n        unit.textContent = this.unit;\n        unit.setAttribute(\"id\", \"unit\");\n        weightDisplay.appendChild(unit);\n    },\n\n    alertWeightError: function(){\n        let weightDisplay = document.querySelector(\"[data-display='weight']\");\n        weightDisplay.classList.add(\"error\");\n        setTimeout(() => {\n            weightDisplay.classList.remove(\"error\");\n        }, \"150\");\n    },\n\n    renderVisualizer: function(weight) {\n        let visualizer = document.querySelector(\"[data-display='visualizer']\");\n        this.clearVisualizerDisplay(visualizer);\n        oneRepMax.renderDisplay(weight);\n    },\n\n    clearVisualizerDisplay: function(element) {\n        while (element.firstChild){\n            element.removeChild(visualizer.firstChild);\n        }\n    },\n}\n\nconst plateVisualizer = {\n    increments: [45, 25, 10, 5, 2.5],\n    barWeight: 45,\n\n    renderDisplay: function(weight) {\n        let platesNeeded = this.getWeightIncrements(weight);\n        for (let increment of platesNeeded){\n            if (increment[1] === 0) {continue;}\n\n            // Create container\n            let incrementContainer = document.createElement(\"div\");\n            let plateIconClass = \"plate-\" + increment[0].toString().replace(\".\",\"-\");\n            incrementContainer.classList.add(\"incrementContainer\", plateIconClass);\n\n            // Create text\n            let description = incrementContainer.appendChild(document.createElement(\"h3\"));\n            description.textContent = increment[1] + \" \\u00D7 \" + increment[0];\n\n            // Create plates container\n            let plateContainer = incrementContainer.appendChild(document.createElement(\"div\"));\n            plateContainer.classList.add(\"plateContainer\");\n\n            // Create each plate\n            for (i=0; i<increment[1]; i++){\n                plateContainer.appendChild(document.createElement(\"div\"));\n            }\n\n            visualizer.appendChild(incrementContainer);\n        }\n    },\n\n    getWeightIncrements: function(weight) {\n        if (weight <= this.barWeight) return [];\n        weight = (weight - this.barWeight) / 2;\n        let platesNeeded = this.increments.map(increment => {\n            const plates = Math.floor(weight / increment);\n            weight %= increment;\n            return [increment, plates];\n        });\n\n        if (weight > 0) {\n            platesNeeded.push([\"custom\", Math.round(weight * 100) / 100]);\n        }\n\n        return platesNeeded;\n    },\n}\n\nconst oneRepMax = {\n    startWeight: 225,\n    startReps: 5,\n\n    calculateMaxReps: function(weight, reps) {\n        let maxReps = [];\n        let oneRepMax = weight * (36 / (37 - reps)); // Brzycki formula\n        \n        for (let i = 1; i <= 10; i++){\n            let estimatedWeight;\n            estimatedWeight = Math.floor((37 - i) * oneRepMax / 36);\n            maxReps.push([estimatedWeight, i])\n        }\n        return maxReps;\n    },\n\n    renderDisplay: function(weight, reps) {\n        let maxReps = this.calculateMaxReps(weight, reps);\n\n        // Show 1-rep max\n        let maxHeading = document.createElement(\"h3\");\n        maxHeading.textContent = maxReps[0][1] + \" \\u00D7 \" + maxReps[0][0];\n\n        // Show lists with other rep maxes\n        let maxList = document.createElement(\"ul\");\n        \n        for (let i = 1; i < maxReps.length; i++){\n            let maxListItem = document.createElement(\"li\");\n            maxListItem.textContent = maxReps[i][1] + \" \\u00D7 \" + maxReps[i][0];\n            maxList.appendChild(maxListItem);\n        }\n\n        visualizer.appendChild(maxHeading)\n        visualizer.appendChild(maxList);\n    }\n}\n\nconst reps = {\n    currentReps: 0,\n    maxReps: 10,\n    minReps: 0,\n\n    initializeReps: function(initialReps) {\n        this.currentReps = this.getValidWeight(initialReps);\n        display.renderDisplay(initialReps);\n        display.renderVisualizer(initialReps);\n    },\n\n    updateWeight: function(buttonFunction, buttonValue){\n        let newWeight = calcFunction[buttonFunction](this.currentWeight, +buttonValue);\n        newWeight = this.getValidWeight(newWeight)\n        this.currentWeight = newWeight;\n        display.renderDisplay(newWeight);\n        display.renderVisualizer(newWeight);\n    },\n\n    getValidWeight: function(enteredWeight){\n        if (enteredWeight > this.maxWeight || enteredWeight < this.minWeight) {\n            display.alertWeightError();\n            return this.currentWeight;\n        } else {\n            this.currentWeight = enteredWeight;\n            return enteredWeight;\n        }\n    },\n}\n\nconst strengthStandards = {\n\n\n}\n\n// Initialize\n\nweight.initializeWeight(380);\nreps.initializeReps(5);\nkeypad.bindKeypad();\n\n\n\n\nconst standards = {\n    men: {\n        114: {\n            'press': [53, 72, 90, 107, 129],\n            'bench press': [84, 107, 130, 179, 222],\n            'squat': [78, 144, 174, 240, 320],\n            'deadlift': [97, 179, 204, 299, 387],\n        },\n        123: {\n            'press': [57, 78, 98, 116, 141],\n            'bench press': [91, 116, 142, 194, 242],\n            'squat': [84, 155, 190, 259, 346],\n            'deadlift': [105, 194, 222, 320, 414],\n        },\n        132: {\n            'press': [61, 84, 105, 125, 151],\n            'bench press': [98, 125, 153, 208, 260],\n            'squat': [91, 168, 205, 278, 369],\n            'deadlift': [113, 209, 239, 342, 438],\n        },\n        148: {\n            'press': [69, 94, 119, 140, 169],\n            'bench press': [109, 140, 172, 234, 291],\n            'squat': [101, 188, 230, 313, 410],\n            'deadlift': [126, 234, 269, 380, 482],\n        },\n        165: {\n            'press': [75, 102, 129, 153, 186],\n            'bench press': [119, 152, 187, 255, 319],\n            'squat': [110, 204, 250, 342, 445],\n            'deadlift': [137, 254, 293, 411, 518],\n        },\n        181: {\n            'press': [81, 110, 138, 164, 218],\n            'bench press': [128, 164, 201, 275, 343],\n            'squat': [119, 220, 269, 367, 479],\n            'deadlift': [148, 274, 315, 438, 548],\n        },\n        198: {\n            'press': [85, 116, 146, 173, 234],\n            'bench press': [135, 173, 213, 289, 362],\n            'squat': [125, 232, 285, 387, 504],\n            'deadlift': [156, 289, 333, 457, 567],\n        },\n        220: {\n            'press': [89, 122, 155, 183, 255],\n            'bench press': [142, 183, 225, 306, 381],\n            'squat': [132, 244, 301, 409, 532],\n            'deadlift': [164, 305, 351, 479, 586],\n        },\n        242: {\n            'press': [93, 127, 159, 189, 264],\n            'bench press': [149, 190, 232, 316, 395],\n            'squat': [137, 255, 311, 423, 551],\n            'deadlift': [172, 318, 363, 490, 596],\n        },\n        275: {\n            'press': [96, 131, 164, 194, 272],\n            'bench press': [153, 196, 239, 325, 407],\n            'squat': [141, 261, 319, 435, 567],\n            'deadlift': [176, 326, 373, 499, 602],\n        },\n        319: {\n            'press': [98, 133, 167, 199, 278],\n            'bench press': [156, 199, 244, 333, 416],\n            'squat': [144, 267, 326, 445, 580],\n            'deadlift': [180, 333, 381, 506, 608],\n        },\n        320: {\n            'press': [100, 136, 171, 203, 284],\n            'bench press': [159, 204, 248, 340, 425],\n            'squat': [147, 272, 332, 454, 593],\n            'deadlift': [183, 340, 388, 512, 617],\n        },\n    },\n    women: {\n        97: {\n            'press': [31, 42, 50, 66, 85],\n            'bench press': [49, 63, 73, 94, 116],\n            'squat': [46, 84, 98, 129, 163],\n            'deadlift': [57, 105, 122, 175, 232],\n        },\n        105: {\n            'press': [33, 46, 53, 71, 91],\n            'bench press': [53, 68, 79, 102, 124],\n            'squat': [49, 91, 106, 140, 174],\n            'deadlift': [61, 114, 132, 189, 242],\n        },\n        114: {\n            'press': [36, 49, 58, 76, 97],\n            'bench press': [57, 73, 85, 109, 133],\n            'squat': [53, 98, 114, 150, 187],\n            'deadlift': [66, 122, 142, 200, 253],\n        },\n        123: {\n            'press': [38, 52, 61, 81, 104],\n            'bench press': [60, 77, 90, 116, 142],\n            'squat': [56, 103, 121, 160, 199],\n            'deadlift': [70, 129, 151, 211, 263],\n        },\n        132: {\n            'press': [40, 55, 65, 85, 110],\n            'bench press': [64, 82, 95, 122, 150],\n            'squat': [59, 110, 127, 168, 211],\n            'deadlift': [74, 137, 159, 220, 273],\n        },\n        148: {\n            'press': [44, 60, 72, 94, 121],\n            'bench press': [70, 90, 105, 135, 165],\n            'squat': [65, 121, 141, 185, 232],\n            'deadlift': [81, 151, 176, 241, 295],\n        },\n        165: {\n            'press': [48, 65, 77, 102, 134],\n            'bench press': [76, 97, 113, 146, 183],\n            'squat': [70, 130, 151, 200, 256],\n            'deadlift': [88, 162, 189, 258, 319],\n        },\n        181: {\n            'press': [51, 70, 83, 110, 140],\n            'bench press': [81, 104, 122, 158, 192],\n            'squat': [75, 139, 164, 215, 268],\n            'deadlift': [94, 174, 204, 273, 329],\n        },\n        198: {\n            'press': [55, 75, 88, 117, 151],\n            'bench press': [88, 112, 130, 167, 205],\n            'squat': [81, 150, 174, 229, 288],\n            'deadlift': [101, 187, 217, 284, 349],\n        },\n        199: {\n            'press': [58, 79, 93, 123, 159],\n            'bench press': [92, 118, 137, 177, 217],\n            'squat': [85, 158, 184, 242, 303],\n            'deadlift': [107, 197, 229, 297, 364],\n        },\n\n    },\n}\n\n//# sourceURL=webpack://barbell-tools/./src/index.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;