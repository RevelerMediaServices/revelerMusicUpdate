module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("next-seo");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = "/revelerMusicUpdate/_next/static/images/landingPage-31f2624e1c1faa7bfb0ee2a889b285c1.jpg";

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = "/revelerMusicUpdate/_next/static/images/mobileLandingPage-d54ad7317266d8b78da0a529084c9474.jpg";

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(3);
var link_default = /*#__PURE__*/__webpack_require__.n(link_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(1);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./components/Navbar.js



var NavbarDiv = external_styled_components_default.a.div.withConfig({
  displayName: "Navbar__NavbarDiv",
  componentId: "sc-9bmlia-0"
})(["height:10vh;"]);

function Navbar() {
  return external_react_default.a.createElement(NavbarDiv, null, external_react_default.a.createElement("nav", {
    className: "navbar navbar-expand navbar-dark bg-dark mb-4"
  }, external_react_default.a.createElement("div", {
    className: "container"
  }, external_react_default.a.createElement(link_default.a, {
    href: "/revelerMusicUpdate/"
  }, external_react_default.a.createElement("a", {
    className: "navbar-brand"
  }, "Reveler Media Services")), external_react_default.a.createElement("div", {
    className: "collapse navbar-collapse"
  }, external_react_default.a.createElement("ul", {
    className: "navbar-nav ml-auto"
  }, external_react_default.a.createElement("li", {
    className: "nav-item"
  }, external_react_default.a.createElement(link_default.a, {
    href: "/revelerMusicUpdate/"
  }, external_react_default.a.createElement("a", {
    className: "nav-link"
  }, "Home"))), external_react_default.a.createElement("li", {
    className: "nav-item"
  }, external_react_default.a.createElement(link_default.a, {
    href: "/revelerMusicUpdate/about"
  }, external_react_default.a.createElement("a", {
    className: "nav-link"
  }, "About"))))))));
}

/* harmony default export */ var components_Navbar = (Navbar);
// EXTERNAL MODULE: external "next-seo"
var external_next_seo_ = __webpack_require__(2);
var external_next_seo_default = /*#__PURE__*/__webpack_require__.n(external_next_seo_);

// EXTERNAL MODULE: ./static/images/landingPage.jpg
var landingPage = __webpack_require__(4);
var landingPage_default = /*#__PURE__*/__webpack_require__.n(landingPage);

// EXTERNAL MODULE: ./static/images/mobileLandingPage.jpg
var mobileLandingPage = __webpack_require__(5);
var mobileLandingPage_default = /*#__PURE__*/__webpack_require__.n(mobileLandingPage);

// CONCATENATED MODULE: ./components/Layout.js






var LayoutDiv = external_styled_components_default.a.div.withConfig({
  displayName: "Layout__LayoutDiv",
  componentId: "sc-1pf2tfi-0"
})(["height:100vh;background-image:url(", ");background-size:100% 100%;@media screen and (max-width:700px){background-image:url(", ");background-size:100% 100%;}"], landingPage_default.a, mobileLandingPage_default.a);

function Layout(props) {
  return external_react_default.a.createElement(LayoutDiv, null, external_react_default.a.createElement(external_next_seo_default.a, {
    config: {
      title: "Reveler Media Services Next.js/Firebase starter",
      description: "Next.js starter template with Styled-Components, Firebase, Next-SEO"
    }
  }), external_react_default.a.createElement("div", null, external_react_default.a.createElement(components_Navbar, null), external_react_default.a.createElement("div", {
    className: "container"
  }, props.children)));
}

/* harmony default export */ var components_Layout = __webpack_exports__["a"] = (Layout);

/***/ }),
/* 7 */,
/* 8 */
/***/ (function(module, exports) {

module.exports = "/revelerMusicUpdate/_next/static/images/instagramLogo-71645cde79780e06e028902cd62025d8.png";

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = "/revelerMusicUpdate/_next/static/images/RevelerLogoWhiteShadow-8bbba9ab68dbc8fc115d3811c703e8f7.png";

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = "/revelerMusicUpdate/_next/static/images/421CDLogo-2a377cf4afbe19c72180457651841f8c.png";

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = "/revelerMusicUpdate/_next/static/images/J&Heather-c1a7acfdc56123819f7133a9163eb2cf.png";

/***/ }),
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(17);


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _static_images_instagramLogo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8);
/* harmony import */ var _static_images_instagramLogo_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_static_images_instagramLogo_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _static_images_RevelerLogoWhiteShadow_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9);
/* harmony import */ var _static_images_RevelerLogoWhiteShadow_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_static_images_RevelerLogoWhiteShadow_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _static_images_421CDLogo_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10);
/* harmony import */ var _static_images_421CDLogo_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_static_images_421CDLogo_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _static_images_J_Heather_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(11);
/* harmony import */ var _static_images_J_Heather_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_static_images_J_Heather_png__WEBPACK_IMPORTED_MODULE_7__);








var IndexDiv = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "pages__IndexDiv",
  componentId: "sc-1vacgmq-0"
})(["min-height:90vh;color:white;@media only screen and (max-width:700px){min-height:85vh;}#jName{font-size:2.5vw;position:absolute;top:65%;left:20%;font-family:\"Allerta Stencil\",sans-serif;font-weight:500;@media only screen and (max-width:700px){font-size:10vw;top:70%;left:20%;}}#heatherName{text-align:center;font-size:2.5vw;position:absolute;top:35%;left:70%;font-family:\"Allerta Stencil\",sans-serif;font-weight:500;@media only screen and (max-width:700px){font-size:10vw;top:20%;left:35%;}}#rmLogo{position:absolute;top:5%;left:50%;img{width:25vw;}@media only screen and (max-width:700px){position:absolute;top:7%;left:30%;img{width:40vw;}}}#jhLogo{position:absolute;top:58%;left:40%;img{width:16vw;}@media only screen and (max-width:700px){position:absolute;top:45%;left:10%;img{width:32vw;}}}#cdLogo{position:absolute;top:68%;left:60%;img{width:16vw;}@media only screen and (max-width:700px){position:absolute;top:55%;left:55%;img{width:38vw;}}}#landingPageWordsAtBottom{position:absolute;font-size:2vw;left:10%;bottom:5%;color:white;font-family:\"Luckiest Guy\",cursive;@media only screen and (max-width:700px){font-size:3.5vw;}}#heatherLoveInstagram{position:absolute;font-size:1.5vw;left:65%;top:53%;color:white;font-family:\"Luckiest Guy\",cursive;img{width:3vw;}@media only screen and (max-width:700px){position:absolute;font-size:5vw;left:55%;top:32%;color:white;font-family:\"Luckiest Guy\",cursive;img{width:12vw;float:right;}}}"]);

function Index() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IndexDiv, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_seo__WEBPACK_IMPORTED_MODULE_3___default.a, {
    config: {
      title: "Reveler Media Services Next.js/Firebase starter",
      description: "Next.js starter template with Styled-Components, Firebase, Next-SEO"
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "jName"
  }, "J. Graves"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "heatherName"
  }, "Heather ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), " Love"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "heatherLoveInstagram"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _static_images_instagramLogo_png__WEBPACK_IMPORTED_MODULE_4___default.a,
    alt: "Instagram Logo"
  }), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://www.instagram.com/xheatherlovex/"
  }, "xheatherlovex")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "rmLogo"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _static_images_RevelerLogoWhiteShadow_png__WEBPACK_IMPORTED_MODULE_5___default.a,
    alt: "Reveler Music Logo"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "jhLogo"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _static_images_J_Heather_png__WEBPACK_IMPORTED_MODULE_7___default.a,
    alt: "Reveler Music Logo"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "cdLogo"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _static_images_421CDLogo_png__WEBPACK_IMPORTED_MODULE_6___default.a,
    alt: "Reveler Music Logo"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "landingPageWordsAtBottom"
  }, "Corporate, Wedding, Family Friendly or 21+", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Live Music, Open Mic, Karaoke and DJ Services")));
}

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })
/******/ ]);