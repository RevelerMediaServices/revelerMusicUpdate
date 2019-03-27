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
/******/ 	return __webpack_require__(__webpack_require__.s = 37);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-spring");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("next-seo");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/RevelerLogoWhiteShadow-8bbba9ab68dbc8fc115d3811c703e8f7.png";

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/landingPage-31f2624e1c1faa7bfb0ee2a889b285c1.jpg";

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/mobileLandingPage-d54ad7317266d8b78da0a529084c9474.jpg";

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__(1);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(2);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./components/RMNavbar.js


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var RMNavbarDiv = external_styled_components_default.a.div.withConfig({
  displayName: "RMNavbar__RMNavbarDiv",
  componentId: "i6xy3e-0"
})(["height:10vh;padding:0;margin:0;background:transparent;color:white;font-size:1.5em;font-family:\"Oswald\",sans-serif;font-variant:small-caps;position:fixed;width:100vw;max-width:100%;z-index:9999;@media only screen and (max-width:767px){padding:0;margin:0;font-size:3em;}@media only screen and (max-width:1200px) and (min-width:700px){padding:0;margin:0;}.fa.fa-navicon{color:white;font-size:1.75em;}a{color:white;}.collapse{width:100%;@media only screen and (max-width:767px){padding:0;margin:0;height:78vh;max-height:78vh;}@media only screen and (max-width:1200px) and (min-width:700px){padding:0;margin:0;}}.nav-item{text-align:center;@media only screen and (max-width:767px){z-index:9999;background:rgba(0,0,0,0.8);width:100%;margin:0;padding:0;}@media only screen and (max-width:1200px) and (min-width:700px){z-index:9999;background:rgba(0,0,0,0.8);width:100%;margin:0;padding:0;}}"]);

function RMNavbar() {
  var _useState = Object(external_react_["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      toggle = _useState2[0],
      setToggle = _useState2[1];

  return external_react_default.a.createElement(RMNavbarDiv, null, external_react_default.a.createElement(external_reactstrap_["Navbar"], {
    expand: "md",
    sticky: "top",
    className: "justify-content-center"
  }, external_react_default.a.createElement(external_reactstrap_["NavbarToggler"], {
    onClick: function onClick() {
      return setToggle(!toggle);
    },
    className: ""
  }, external_react_default.a.createElement("i", {
    className: "fa fa-navicon"
  })), external_react_default.a.createElement(external_reactstrap_["Collapse"], {
    isOpen: toggle,
    navbar: true
  }, external_react_default.a.createElement("div", {
    className: "navWrapper"
  }, external_react_default.a.createElement(external_reactstrap_["Nav"], {
    navbar: true
  }, external_react_default.a.createElement(external_reactstrap_["NavbarBrand"], null), external_react_default.a.createElement(external_reactstrap_["NavItem"], null, external_react_default.a.createElement(external_reactstrap_["NavLink"], {
    href: "/revelerMusicUpdate/",
    className: "nav-link"
  }, "Home")), external_react_default.a.createElement(external_reactstrap_["NavItem"], null, external_react_default.a.createElement(external_reactstrap_["NavLink"], {
    href: "/revelerMusicUpdate/about"
  }, "About")), external_react_default.a.createElement(external_reactstrap_["NavItem"], null, external_react_default.a.createElement(external_reactstrap_["NavLink"], {
    href: "/revelerMusicUpdate/contactInfo"
  }, "Contact")), external_react_default.a.createElement(external_reactstrap_["NavItem"], null, external_react_default.a.createElement(external_reactstrap_["NavLink"], {
    href: "/revelerMusicUpdate/revelerProcess"
  }, "Process")), external_react_default.a.createElement(external_reactstrap_["NavItem"], null, external_react_default.a.createElement(external_reactstrap_["NavLink"], {
    href: "/revelerMusicUpdate/services"
  }, "Services")))))));
}

/* harmony default export */ var components_RMNavbar = (RMNavbar);
// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(3);
var link_default = /*#__PURE__*/__webpack_require__.n(link_);

// CONCATENATED MODULE: ./components/Footer.js




var FooterDiv = external_styled_components_default.a.div.withConfig({
  displayName: "Footer__FooterDiv",
  componentId: "lufdny-0"
})(["font-size:1.3em;background:rgba(0,0,0,0.8);height:10vh;padding-top:2vh;position:fixed;bottom:0;width:100%;@media only screen and (max-width:767px){height:13vh;font-size:0.8em;}@media only screen and (max-width:1200px) and (min-width:767px){height:10vh;font-size:1em;}footer{}footer .menu li a{color:white;font-variant:small-caps;padding-left:1vw;padding-right:1vw;@media only screen and (max-width:767px){}@media only screen and (max-width:1200px) and (min-width:767px){padding-left:0.5vw;padding-right:0.5vw;}}footer .menu li a:hover{color:blue;}.fa.fa-facebook,.fa.fa-youtube-play,.fa.fa-instagram{color:#b1aca1;font-size:1.5em;padding-left:1vw;padding-right:1vw;@media only screen and (max-width:767px){}@media only screen and (max-width:1200px) and (min-width:767px){}}.fa.fa-facebook:hover,.fa.fa-youtube-play:hover,.fa.fa-instagram:hover{color:#6794c2;}"]);

function Footer() {
  return external_react_default.a.createElement(FooterDiv, null, external_react_default.a.createElement("div", {
    className: "footerDiv"
  }, external_react_default.a.createElement("footer", null, external_react_default.a.createElement(external_reactstrap_["Row"], {
    className: "text-center"
  }, external_react_default.a.createElement(external_reactstrap_["Col"], {
    md: 6,
    className: ""
  }, external_react_default.a.createElement("ul", {
    className: "list-inline"
  }, external_react_default.a.createElement("li", {
    className: "list-inline-item"
  }, external_react_default.a.createElement(link_default.a, {
    href: "https://www.facebook.com/revelermusicllc"
  }, external_react_default.a.createElement("a", {
    target: "_blank"
  }, external_react_default.a.createElement("i", {
    className: "fa fa-facebook fa-2x"
  })))), external_react_default.a.createElement("li", {
    className: "list-inline-item"
  }, external_react_default.a.createElement(link_default.a, {
    href: "https://www.facebook.com/revelermusicllc"
  }, external_react_default.a.createElement("a", {
    target: "_blank"
  }, external_react_default.a.createElement("i", {
    className: "fa fa-youtube-play fa-2x"
  })))), external_react_default.a.createElement("li", {
    className: "list-inline-item"
  }, external_react_default.a.createElement(link_default.a, {
    href: "https://www.instagram.com/revelermusicllc/"
  }, external_react_default.a.createElement("a", {
    target: "_blank"
  }, external_react_default.a.createElement("i", {
    className: "fa fa-instagram fa-2x "
  })))))), external_react_default.a.createElement(external_reactstrap_["Col"], {
    md: 6,
    className: ""
  }, external_react_default.a.createElement("ul", {
    className: "menu list-inline"
  }, external_react_default.a.createElement("li", {
    className: "list-inline-item"
  }, external_react_default.a.createElement(link_default.a, {
    href: "/"
  }, external_react_default.a.createElement("a", null, "Home"))), external_react_default.a.createElement("li", {
    className: "list-inline-item"
  }, external_react_default.a.createElement(link_default.a, {
    href: "/about"
  }, external_react_default.a.createElement("a", null, "About"))), external_react_default.a.createElement("li", {
    className: "list-inline-item"
  }, external_react_default.a.createElement(link_default.a, {
    href: "/contactInfo"
  }, external_react_default.a.createElement("a", null, "Contact"))), external_react_default.a.createElement("li", {
    className: "list-inline-item"
  }, external_react_default.a.createElement(link_default.a, {
    href: "/revelerProcess"
  }, external_react_default.a.createElement("a", null, "Process"))), external_react_default.a.createElement("li", {
    className: "list-inline-item"
  }, external_react_default.a.createElement(link_default.a, {
    href: "/services"
  }, external_react_default.a.createElement("a", null, "Services")))))))));
}

/* harmony default export */ var components_Footer = (Footer);
// EXTERNAL MODULE: external "next-seo"
var external_next_seo_ = __webpack_require__(5);
var external_next_seo_default = /*#__PURE__*/__webpack_require__.n(external_next_seo_);

// EXTERNAL MODULE: ./static/images/landingPage.jpg
var landingPage = __webpack_require__(7);
var landingPage_default = /*#__PURE__*/__webpack_require__.n(landingPage);

// EXTERNAL MODULE: ./static/images/mobileLandingPage.jpg
var mobileLandingPage = __webpack_require__(8);
var mobileLandingPage_default = /*#__PURE__*/__webpack_require__.n(mobileLandingPage);

// EXTERNAL MODULE: ./static/images/RevelerLogoWhiteShadow.png
var RevelerLogoWhiteShadow = __webpack_require__(6);
var RevelerLogoWhiteShadow_default = /*#__PURE__*/__webpack_require__.n(RevelerLogoWhiteShadow);

// CONCATENATED MODULE: ./components/Layout.js








var LayoutDiv = external_styled_components_default.a.div.withConfig({
  displayName: "Layout__LayoutDiv",
  componentId: "sc-1pf2tfi-0"
})(["height:100vh;background-image:url(", ");background-size:100% 100%;@media screen and (max-width:767px){background-image:url(", ");background-size:100% 100%;}.mainViewDiv{position:fixed;top:10vh;width:100vw;height:80vh;@media only screen and (max-width:767px){height:77vh;overflow-y:scroll;overflow-x:hidden;}@media only screen and (max-width:1200px) and (min-width:700px){font-size:1em;overflow-y:scroll;}}#navbarDiv{z-index:9999;}#imgRMLogoLayout{width:20vw;position:fixed;top:1%;right:0;z-index:9999;@media only screen and (max-width:767px){position:fixed;bottom:8%;right:0;z-index:9999;width:40vw;}@media only screen and (max-width:1200px) and (min-width:700px){}}"], landingPage_default.a, mobileLandingPage_default.a);

function Layout(props) {
  return external_react_default.a.createElement(LayoutDiv, null, external_react_default.a.createElement(external_next_seo_default.a, {
    config: {
      title: "Reveler Music, LLC - #BringinTheParty ** Music Entertainment Services",
      description: "Reveler Music, LLC provides Music Entertainment Services for the Colorado Corridor, Denver, Castle Rock, Colorado Springs, Pueblow and the surrounding areas.  Live Music, Live Sound and Open Mics, Karaoke and DJ",
      canonical: "https://revelermusic.com",
      openGraph: {
        type: "website",
        url: "https://revelermusic.com/",
        title: "Reveler Music, LLC - Contact Page",
        description: "Contact Reveler Music, LLC for music entertainment services, such as, Live Music, Live Sound and Open Mics, Karaoke and DJ, to Pueblo, Colorado Springs, Castle Rock, Denver and the surrounding areas.",
        site_name: "Revler Music, LLC"
      },
      twitter: {
        handle: "@jwgravesco"
      }
    }
  }), external_react_default.a.createElement("img", {
    id: "imgRMLogoLayout",
    src: RevelerLogoWhiteShadow_default.a,
    alt: "Reveler Music, LLC Logo"
  }), external_react_default.a.createElement("div", {
    id: "navbarDiv"
  }, external_react_default.a.createElement(components_RMNavbar, null)), external_react_default.a.createElement("div", {
    className: "mainViewDiv"
  }, props.children), external_react_default.a.createElement(components_Footer, null));
}

/* harmony default export */ var components_Layout = __webpack_exports__["a"] = (Layout);

/***/ }),
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEAAQMAAABmvDolAAAABlBMVEUAAAD///+l2Z/dAAAAAXRSTlMAQObYZgAAAFVJREFUaN7t1zESAEEEBMD5/6dtcBdswH5Ai1AdKkWSpKoqmTIAAAAAaIoAwFfUHwAAAADwAu4oYDorgK2gXxsAMMwRsB7cPWAX6NYGAACAPwsAgBEcqldzREzkKLMAAAAASUVORK5CYII="

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAMAAABrrFhUAAADAFBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8HPQsIAAAA/3RSTlMAAQIDBAUGBwgJCgsMDQ4PEBESExQVFhcYGRobHB0eHyAhIiMkJSYnKCkqKywtLi8wMTIzNDU2Nzg5Ojs8PT4/QEFCQ0RFRkdISUpLTE1O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"

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(38);


/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_spring__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _static_images_sliders_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(24);
/* harmony import */ var _static_images_sliders_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_static_images_sliders_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _static_images_guitar_player_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(25);
/* harmony import */ var _static_images_guitar_player_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_static_images_guitar_player_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _static_images_dj_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(26);
/* harmony import */ var _static_images_dj_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_static_images_dj_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _static_images_singer_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(27);
/* harmony import */ var _static_images_singer_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_static_images_singer_png__WEBPACK_IMPORTED_MODULE_9__);










var ServicesDiv = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "services__ServicesDiv",
  componentId: "sc-5x131j-0"
})(["color:white;text-align:left;margin:0;padding:2vw;height:80vh;font-size:2vw;background:rgba(0,0,0,0.8);@media only screen and (max-width:767px){height:auto;}@media only screen and (max-width:1200px) and (min-width:767px){height:auto;}h1{text-align:center;font-family:\"Fjalla One\",sans-serif;font-size:4.855vw;@media only screen and (max-width:767px){font-size:9.6vw;}@media only screen and (max-width:1200px) and (min-width:767px){}}#pServicesGoal{margin-left:30vw;margin-right:30vw;font-size:1vw;font-family:\"Noto Sans\",sans-serif;text-align:center;@media only screen and (max-width:767px){margin-left:5vw;margin-right:5vw;font-size:5vw;}@media only screen and (max-width:1200px) and (min-width:767px){margin-left:15vw;margin-right:15vw;font-size:1.618vw;}}.cardImg{width:5vw;height:5vw;margin-left:auto;margin-right:auto;@media only screen and (max-width:767px){width:25vw;height:25vw;}@media only screen and (max-width:1200px) and (min-width:767px){width:15vw;height:15vw;}}.colStyle{@media only screen and (max-width:767px){margin-top:2vh;margin-bottom:2vh;}@media only screen and (max-width:1200px) and (min-width:767px){margin-top:1vh;margin-bottom:1vh;}}.card{background:rgba(0,0,0,0.6);height:50vh;width:100%;padding:2vw;-webkit-box-shadow:0.2vw 0.2vw 1vw rgba(154,154,154,1);-moz-box-shadow:0.2vw 0.2vw 1vw rgba(154,154,154,1);box-shadow:0.2vw 0.2vw 1vw rgba(154,154,154,1);@media only screen and (max-width:1200px) and (min-width:700px){height:100%;}@media only screen and (max-width:700px){height:100%;}}.card-title{text-align:center;font-family:\"Fjalla One\",sans-serif;font-size:2.5vw;height:8vh;font-variant:small-caps;@media only screen and (max-width:767px){font-size:12vw;height:100%;}@media only screen and (max-width:1200px) and (min-width:767px){font-size:5vw;height:10vh;}}.card-text{padding:1vh;font-family:\"Noto Sans\",sans-serif;font-size:1vw;height:28vh;overflow-y:auto;@media only screen and (max-width:767px){font-size:5vw;height:100%;}@media only screen and (max-width:1200px) and (min-width:767px){font-size:2vw;height:100%;}}"]);

function Services() {
  var card1 = Object(react_spring__WEBPACK_IMPORTED_MODULE_3__["useSpring"])({
    opacity: 1,
    from: {
      opacity: 0
    },
    delay: 0,
    config: {
      mass: 1,
      tension: 180,
      friction: 12,
      duration: 500
    }
  });
  var card2 = Object(react_spring__WEBPACK_IMPORTED_MODULE_3__["useSpring"])({
    opacity: 1,
    from: {
      opacity: 0
    },
    delay: 500,
    config: {
      mass: 1,
      tension: 180,
      friction: 12,
      duration: 500
    }
  });
  var card3 = Object(react_spring__WEBPACK_IMPORTED_MODULE_3__["useSpring"])({
    opacity: 1,
    from: {
      opacity: 0
    },
    delay: 1000,
    config: {
      mass: 1,
      tension: 180,
      friction: 12,
      duration: 500
    }
  });
  var card4 = Object(react_spring__WEBPACK_IMPORTED_MODULE_3__["useSpring"])({
    opacity: 1,
    from: {
      opacity: 0
    },
    delay: 1500,
    config: {
      mass: 1,
      tension: 180,
      friction: 12,
      duration: 500
    }
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ServicesDiv, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_seo__WEBPACK_IMPORTED_MODULE_4___default.a, {
    config: {
      title: "Reveler Music, LLC - #BringinTheParty ** Music Entertainment Services - Service Page",
      description: "Reveler Music, LLC offers music entertainment services, such as, Live Music, Live Sound and Open Mics, Karaoke and DJ, to Pueblo, Colorado Springs, Castle Rock, Denver and the surrounding areas.",
      canonical: "https://revelermusic.com",
      openGraph: {
        type: "website",
        url: "https://revelermusic.com/services",
        title: "Reveler Music, LLC - Service Page",
        description: "Reveler Music, LLC offers music entertainment services, such as, Live Music, Live Sound and Open Mics, Karaoke and DJ, to Pueblo, Colorado Springs, Castle Rock, Denver and the surrounding areas.",
        site_name: "Revler Music, LLC"
      },
      twitter: {
        handle: "@jwgravesco"
      }
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Reveler Music, LLC Services"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    id: "pServicesGoal"
  }, "Reveler's goal is to provide an amazing experience at a fair price."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    className: "colStyle",
    xl: "3",
    md: "6",
    xs: "12"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_spring__WEBPACK_IMPORTED_MODULE_3__["animated"].div, {
    style: card1
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Card"], {
    body: true,
    outline: true,
    color: "secondary"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "cardImg",
    src: _static_images_sliders_png__WEBPACK_IMPORTED_MODULE_6___default.a,
    alt: "Live Music icon"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["CardTitle"], null, "Live Music"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["CardText"], {
    className: "justify-content-center"
  }, "With music brands to cover any event or occasion, Reveler Music offers Live Music services for Family Friendly or 21+ occasions."))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    className: "colStyle",
    xl: "3",
    md: "6",
    xs: "12"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_spring__WEBPACK_IMPORTED_MODULE_3__["animated"].div, {
    style: card2
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Card"], {
    body: true,
    outline: true,
    color: "secondary"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "cardImg",
    src: _static_images_guitar_player_png__WEBPACK_IMPORTED_MODULE_7___default.a,
    alt: "Open Mic icon"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["CardTitle"], null, "Open Mics"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["CardText"], {
    className: "justify-content-center"
  }, "With professional modern sound equipment, Reveler Music offers talented Open Mic services for Music or Comedy events."))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    className: "colStyle",
    xl: "3",
    md: "6",
    xs: "12"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_spring__WEBPACK_IMPORTED_MODULE_3__["animated"].div, {
    style: card3
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Card"], {
    body: true,
    outline: true,
    color: "secondary"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "cardImg",
    src: _static_images_singer_png__WEBPACK_IMPORTED_MODULE_9___default.a,
    alt: "mixer icon"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["CardTitle"], null, "Karaoke"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["CardText"], {
    className: "justify-content-center"
  }, "With 77,000+ songs of all skill level, Reveler Music offers entertaining and fun karaoke services for occasion, event or genre."))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    className: "colStyle",
    xl: "3",
    md: "6",
    xs: "12"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_spring__WEBPACK_IMPORTED_MODULE_3__["animated"].div, {
    style: card4
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Card"], {
    body: true,
    outline: true,
    color: "secondary"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "cardImg",
    src: _static_images_dj_png__WEBPACK_IMPORTED_MODULE_8___default.a,
    alt: "mixer icon"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["CardTitle"], null, "DJ"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["CardText"], {
    className: "justify-content-center"
  }, "With more than 30 years of music experience, Reveler Music offers spectacular dynamic DJ services to create the perfect experience."))))))));
}

/* harmony default export */ __webpack_exports__["default"] = (Services);

/***/ })
/******/ ]);