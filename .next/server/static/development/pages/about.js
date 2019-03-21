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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\HC\\Desktop\\RevelerMusic\\RevelerMediaServices\\Client Work\\websiteUpdateRevelerMusic\\rmUpdate\\components\\Footer.js";




var FooterDiv = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Footer__FooterDiv",
  componentId: "lufdny-0"
})(["font-size:1.3em;background:rgba(0,0,0,0.8);padding:1vw;footer{height:10vh;padding-top:0.5vw;@media only screen and (max-width:767px){height:20vh;font-size:0.8em;}@media only screen and (max-width:1200px) and (min-width:700px){height:20vh;font-size:1em;}}footer .menu li a{color:white;padding-left:0.5vw;padding-right:0.5vw;text-decoration:none;}footer .menu li a:hover{color:blue;}.fa.fa-facebook,.fa.fa-youtube-play,.fa.fa-instagram{color:#b1aca1;font-size:1.5em;padding-left:1vw;padding-right:1vw;}.fa.fa-facebook:hover,.fa.fa-youtube-play:hover,.fa.fa-instagram:hover{color:#6794c2;}"]);

function Footer() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FooterDiv, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "footerDiv",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    className: "text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    xl: 6,
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "list-inline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "list-inline-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "https://www.facebook.com/revelermusicllc",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-facebook fa-2x",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "list-inline-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "https://www.facebook.com/revelermusicllc",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-youtube-play fa-2x",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "list-inline-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "https://www.instagram.com/revelermusicllc/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-instagram fa-2x ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  })))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    xl: 6,
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "menu list-inline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "list-inline-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, "Home"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "list-inline-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, "About"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "list-inline-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/contactInfo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, "Contact"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "list-inline-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/revelerProcess",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, "Process"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "list-inline-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/services",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, "Services"))))))))));
}

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _RMNavbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RMNavbar */ "./components/RMNavbar.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer */ "./components/Footer.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-seo */ "next-seo");
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _static_images_landingPage_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../static/images/landingPage.jpg */ "./static/images/landingPage.jpg");
/* harmony import */ var _static_images_landingPage_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_static_images_landingPage_jpg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _static_images_mobileLandingPage_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../static/images/mobileLandingPage.jpg */ "./static/images/mobileLandingPage.jpg");
/* harmony import */ var _static_images_mobileLandingPage_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_static_images_mobileLandingPage_jpg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _static_images_RevelerLogoWhiteShadow_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../static/images/RevelerLogoWhiteShadow.png */ "./static/images/RevelerLogoWhiteShadow.png");
/* harmony import */ var _static_images_RevelerLogoWhiteShadow_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_static_images_RevelerLogoWhiteShadow_png__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Users\\HC\\Desktop\\RevelerMusic\\RevelerMediaServices\\Client Work\\websiteUpdateRevelerMusic\\rmUpdate\\components\\Layout.js";








var LayoutDiv = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "Layout__LayoutDiv",
  componentId: "sc-1pf2tfi-0"
})(["height:100vh;background-image:url(", ");background-size:100% 100%;@media screen and (max-width:600px){background-image:url(", ");background-size:100% 100%;}#navbarDiv{z-index:9999;}#imgRMLogoLayout{width:20vw;position:fixed;top:1vh;right:1vw;z-index:9999;}"], _static_images_landingPage_jpg__WEBPACK_IMPORTED_MODULE_5___default.a, _static_images_mobileLandingPage_jpg__WEBPACK_IMPORTED_MODULE_6___default.a);

function Layout(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LayoutDiv, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_seo__WEBPACK_IMPORTED_MODULE_4___default.a, {
    config: {
      title: "Reveler Music, LLC - #BringinTheParty ** Music Entertainment Services",
      description: "Reveler Music, LLC provides Music Entertainment Services for the Colorado Corridor, Denver, Castle Rock, Colorado Springs, Pueblow and the surrounding areas.  Live Music, Live Sound and Open Mics, Karaoke and DJ"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    id: "imgRMLogoLayout",
    src: _static_images_RevelerLogoWhiteShadow_png__WEBPACK_IMPORTED_MODULE_7___default.a,
    alt: "Reveler Music, LLC Logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "navbarDiv",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_RMNavbar__WEBPACK_IMPORTED_MODULE_1__["default"], {
    style: {
      zIndex: "9999"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, props.children), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/RMNavbar.js":
/*!********************************!*\
  !*** ./components/RMNavbar.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\HC\\Desktop\\RevelerMusic\\RevelerMediaServices\\Client Work\\websiteUpdateRevelerMusic\\rmUpdate\\components\\RMNavbar.js";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var RMNavbarDiv = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "RMNavbar__RMNavbarDiv",
  componentId: "i6xy3e-0"
})(["height:10vh;padding:0;margin:0;background:transparent;color:white;padding-top:2vh;font-size:1.5em;font-family:\"Oswald\",sans-serif;width:100%;@media only screen and (max-width:767px){padding:0;margin:0;font-size:4em;}@media only screen and (max-width:1000px) and (min-width:700px){padding:0;margin:0;}.fa.fa-navicon{color:white;font-size:1.75em;}a{color:white;}.collapse{width:100%;}.nav-item{padding-left:2vw;text-align:center;@media (max-width:767px){z-index:9999;background:rgba(0,0,0,0.8);width:100%;margin:0;padding:0;}}"]);

function RMNavbar() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      toggle = _useState2[0],
      setToggle = _useState2[1];

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RMNavbarDiv, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"], {
    expand: "md",
    sticky: "top",
    className: "justify-content-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavbarToggler"], {
    className: "",
    onClick: function onClick() {
      return setToggle(!toggle);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-navicon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Collapse"], {
    isOpen: toggle,
    navbar: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "navWrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"], {
    navbar: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavbarBrand"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavItem"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    href: "/",
    className: "nav-link",
    onClick: function onClick() {
      return setToggle(!toggle);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, "Home")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavItem"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    href: "/about",
    onClick: function onClick() {
      return setToggle(!toggle);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, "About")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavItem"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    href: "/contactInfo",
    onClick: function onClick() {
      return setToggle(!toggle);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, "Contact")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavItem"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    href: "/revelerProcess",
    onClick: function onClick() {
      return setToggle(!toggle);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, "Process")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavItem"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    href: "/services",
    onClick: function onClick() {
      return setToggle(!toggle);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, "Services")))))));
}

/* harmony default export */ __webpack_exports__["default"] = (RMNavbar);

/***/ }),

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-spring */ "react-spring");
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_spring__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-seo */ "next-seo");
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _static_images_RMBackofBusinessCard_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../static/images/RMBackofBusinessCard.png */ "./static/images/RMBackofBusinessCard.png");
/* harmony import */ var _static_images_RMBackofBusinessCard_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_static_images_RMBackofBusinessCard_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _static_images_RevelerLogo_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../static/images/RevelerLogo.png */ "./static/images/RevelerLogo.png");
/* harmony import */ var _static_images_RevelerLogo_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_static_images_RevelerLogo_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _static_images_roughneckProfilePic_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../static/images/roughneckProfilePic.jpg */ "./static/images/roughneckProfilePic.jpg");
/* harmony import */ var _static_images_roughneckProfilePic_jpg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_static_images_roughneckProfilePic_jpg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _static_images_heatherSelfie_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../static/images/heatherSelfie.jpg */ "./static/images/heatherSelfie.jpg");
/* harmony import */ var _static_images_heatherSelfie_jpg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_static_images_heatherSelfie_jpg__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "C:\\Users\\HC\\Desktop\\RevelerMusic\\RevelerMediaServices\\Client Work\\websiteUpdateRevelerMusic\\rmUpdate\\pages\\about.js";










var AboutDiv = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "about__AboutDiv",
  componentId: "sc-1ed34bi-0"
})(["margin:0;padding:0;background:white;height:75.8vh;@media only screen and (max-width:767px){height:100%;}@media only screen and (max-width:1200px) and (min-width:767px){height:100%;}.row{margin:0;padding:0;}h1{font-size:4.855em;text-align:center;height:15%;font-family:\"Fjalla One\",sans-serif;@media (max-width:576px){font-size:2em;}@media (min-width:576px){}@media (min-width:992px){}@media (min-width:1200px){}}h2{font-family:\"Special Elite\",cursive;font-size:2.023em;text-align:center;font-variant:small-caps;@media (max-width:576px){font-size:1.214em;}}p{font-family:\"Special Elite\",cursive;font-size:1em;text-align:justify;font-family:\"Noto Sans\",sans-serif;width:100%;height:60%;@media (max-width:576px){font-size:0.809em;}}img{float:right;margin:1vw;z-index:-1;}#imgRMBusCard{width:21vw;float:left;@media (max-width:576px){width:42vw;}}#imgRMLogo{width:15vw;float:right;@media (max-width:576px){width:45vw;}}#imgJ{width:13vw;float:right;outline:0.15vw dashed black;border:0.4vw solid white;@media (max-width:576px){width:45vw;}}#imgHeather{width:12vw;float:left;margin-top:0.3vw;outline:0.15vw dashed black;border:0.4vw solid white;@media (max-width:576px){width:45vw;}}"]);

function About() {
  var aboutParagraph = Object(react_spring__WEBPACK_IMPORTED_MODULE_2__["useSpring"])({
    marginLeft: 0,
    opacity: 1,
    from: {
      marginLeft: -250,
      opacity: 0
    },
    config: {
      duration: 2000
    },
    delay: 0
  });
  var aboutParagraph2 = Object(react_spring__WEBPACK_IMPORTED_MODULE_2__["useSpring"])({
    marginLeft: 0,
    opacity: 1,
    from: {
      marginLeft: -250,
      opacity: 0
    },
    config: {
      duration: 2000
    },
    delay: 1000
  });
  var aboutParagraph3 = Object(react_spring__WEBPACK_IMPORTED_MODULE_2__["useSpring"])({
    marginLeft: 0,
    opacity: 1,
    from: {
      marginLeft: -250,
      opacity: 0
    },
    config: {
      duration: 2000
    },
    delay: 2000
  });
  var aboutParagraph4 = Object(react_spring__WEBPACK_IMPORTED_MODULE_2__["useSpring"])({
    marginLeft: 0,
    opacity: 1,
    from: {
      marginLeft: -250,
      opacity: 0
    },
    config: {
      duration: 2000
    },
    delay: 3000
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AboutDiv, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_seo__WEBPACK_IMPORTED_MODULE_4___default.a, {
    config: {
      title: "Reveler Media Services Next.js/Firebase starter",
      description: "Next.js starter template with Styled-Components, Firebase, Next-SEO"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  }, "About Reveler Music, LLC"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "rowWrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    xl: 3,
    md: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  }, "Meet Reveler"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_spring__WEBPACK_IMPORTED_MODULE_2__["animated"].p, {
    style: aboutParagraph,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: this
  }, "Most work very hard each and every day to provide for himself or", " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _static_images_RMBackofBusinessCard_png__WEBPACK_IMPORTED_MODULE_6___default.a,
    id: "imgRMBusCard",
    alt: "Santa & the Mrs of West Texas",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: this
  }), "herself and his or her family. With all of this struggle and sacrifice it is essential that the important days go well. You deserve to have your special events such as a daughter or son's wedding or his or her college graduation make you smile. Reveler Music wants to remove all worries one has about keeping the ones you love happy and having a good time.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    xl: 3,
    md: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196
    },
    __self: this
  }, "Reveler Process"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_spring__WEBPACK_IMPORTED_MODULE_2__["animated"].p, {
    style: aboutParagraph2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197
    },
    __self: this
  }, "In order to ensure 100% complete and total being happy and having a good time for you and your loved ones, Reveler Music, LLC created a 4 step Experience Guarantee Process. 1) You and Reveler will go through the Entertainment service options available, and together we will find the right option. 2) Next, together we will walk through the event and visualize the best outcome. 3) In the next step of the process, Reveler implements your vision in a way that ensures 100% complete and total satisfaction. No excuses! 4) Finally, the last and the best", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _static_images_RevelerLogo_png__WEBPACK_IMPORTED_MODULE_7___default.a,
    alt: "Santa & the Mrs at the Odessa Movie Theatre",
    id: "imgRMLogo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207
    },
    __self: this
  }), " ", "step, You go Party down, and enjoy what you have earned.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    xl: 3,
    md: 6,
    className: "colStyle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216
    },
    __self: this
  }, "J."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_spring__WEBPACK_IMPORTED_MODULE_2__["animated"].p, {
    style: aboutParagraph3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217
    },
    __self: this
  }, "Although able to complete college degrees in Accounting, Business Administration and Information Architecture, J", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _static_images_roughneckProfilePic_jpg__WEBPACK_IMPORTED_MODULE_8___default.a,
    id: "imgJ",
    alt: "Santa Baking Cookies",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220
    },
    __self: this
  }), " ", "maintains the blue-collar work ethic he learned growing up in Odessa Texas. From the oil rigs of West Texas to the board rooms of the largest tax accounting firm in the world, J has appreciated a diverse work history, as well as, a diverse understanding and tolerance of people and of cultures. Having played the guitar and having sang in bands from Heavy Metal to Country music for more than 30 years, J has an extensive background in music entertainment.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    xl: 3,
    md: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232
    },
    __self: this
  }, "Heather"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_spring__WEBPACK_IMPORTED_MODULE_2__["animated"].p, {
    style: aboutParagraph4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233
    },
    __self: this
  }, "Very few things in life light up a room like Heather when she walks in the room. God given natural beauty complimented with a", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _static_images_heatherSelfie_jpg__WEBPACK_IMPORTED_MODULE_9___default.a,
    id: "imgHeather",
    alt: "the Mrs Enjoying Barbeque",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236
    },
    __self: this
  }), " ", "voice that could only be bestowed from the heavens. Coming from a family of outstanding musicians, Heather's natural talent was found very early, and she began formal training at the age of 4. Born and raised on the beaches near Tampa, FL, Heather was a bit of a beach bunni, but says she loves Colorado and now she is a snow bunni. \uD83D\uDE0A"))))));
}

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ "./static/images/RMBackofBusinessCard.png":
/*!************************************************!*\
  !*** ./static/images/RMBackofBusinessCard.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/RMBackofBusinessCard-1683631f052d8e1c4a2e25821e1751f6.png";

/***/ }),

/***/ "./static/images/RevelerLogo.png":
/*!***************************************!*\
  !*** ./static/images/RevelerLogo.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/RevelerLogo-c7228118dcb487967226ffd395a164b8.png";

/***/ }),

/***/ "./static/images/RevelerLogoWhiteShadow.png":
/*!**************************************************!*\
  !*** ./static/images/RevelerLogoWhiteShadow.png ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/RevelerLogoWhiteShadow-8bbba9ab68dbc8fc115d3811c703e8f7.png";

/***/ }),

/***/ "./static/images/heatherSelfie.jpg":
/*!*****************************************!*\
  !*** ./static/images/heatherSelfie.jpg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/heatherSelfie-23c063a59a0c276575faff28338b5e0e.jpg";

/***/ }),

/***/ "./static/images/landingPage.jpg":
/*!***************************************!*\
  !*** ./static/images/landingPage.jpg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/landingPage-31f2624e1c1faa7bfb0ee2a889b285c1.jpg";

/***/ }),

/***/ "./static/images/mobileLandingPage.jpg":
/*!*********************************************!*\
  !*** ./static/images/mobileLandingPage.jpg ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/mobileLandingPage-d54ad7317266d8b78da0a529084c9474.jpg";

/***/ }),

/***/ "./static/images/roughneckProfilePic.jpg":
/*!***********************************************!*\
  !*** ./static/images/roughneckProfilePic.jpg ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/roughneckProfilePic-e7aae83eafe18486557593535cfdb08c.jpg";

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/about.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/about.js */"./pages/about.js");


/***/ }),

/***/ "next-seo":
/*!***************************!*\
  !*** external "next-seo" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-seo");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-spring":
/*!*******************************!*\
  !*** external "react-spring" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-spring");

/***/ }),

/***/ "reactstrap":
/*!*****************************!*\
  !*** external "reactstrap" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=about.js.map