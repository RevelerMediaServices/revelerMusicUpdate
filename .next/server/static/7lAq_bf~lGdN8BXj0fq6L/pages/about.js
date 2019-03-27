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
/******/ 	return __webpack_require__(__webpack_require__.s = 30);
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
/* 13 */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/RMBackofBusinessCard-1683631f052d8e1c4a2e25821e1751f6.png";

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/RevelerLogo-c7228118dcb487967226ffd395a164b8.png";

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/roughneckProfilePic-e7aae83eafe18486557593535cfdb08c.jpg";

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/heatherSelfie-23c063a59a0c276575faff28338b5e0e.jpg";

/***/ }),
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(31);


/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_spring__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _static_images_RMBackofBusinessCard_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13);
/* harmony import */ var _static_images_RMBackofBusinessCard_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_static_images_RMBackofBusinessCard_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _static_images_RevelerLogo_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(14);
/* harmony import */ var _static_images_RevelerLogo_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_static_images_RevelerLogo_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _static_images_roughneckProfilePic_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(15);
/* harmony import */ var _static_images_roughneckProfilePic_jpg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_static_images_roughneckProfilePic_jpg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _static_images_heatherSelfie_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(16);
/* harmony import */ var _static_images_heatherSelfie_jpg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_static_images_heatherSelfie_jpg__WEBPACK_IMPORTED_MODULE_9__);


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










var AboutDiv = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "about__AboutDiv",
  componentId: "sc-1ed34bi-0"
})(["margin:0;padding-left:1vw;padding-right:1vw;background:white;height:80vh;overflow-y:auto;h1{text-align:center;font-family:\"Fjalla One\",sans-serif;font-size:4.855vw;@media only screen and (max-width:767px){font-size:9.6vw;}@media only screen and (max-width:1200px) and (min-width:767px){font-size:6.855vw;}}.colStyle{@media only screen and (max-width:767px){margin-top:2vh;margin-bottom:2vh;}@media only screen and (max-width:1200px) and (min-width:767px){margin-top:1vh;margin-bottom:1vh;}}h2{text-align:center;font-family:\"Fjalla One\",sans-serif;font-size:2.4vw;color:black;text-shadow:0.05vw 0.05vw 0.05vw rgba(255,255,255,1);height:6vh;margin-bottom:1vh;font-variant:small-caps;@media only screen and (max-width:767px){font-size:9vw;height:8vh;}@media only screen and (max-width:1200px) and (min-width:767px){font-size:5vw;height:8vh;}}p{padding:0;font-family:\"Noto Sans\",sans-serif;font-size:0.95vw;width:100%;overflow-y:auto;@media only screen and (max-width:767px){font-size:5vw;height:100%;}@media only screen and (max-width:1200px) and (min-width:767px){font-size:2vw;height:100%;}}img{margin:1vw;@media only screen and (max-width:767px){margin:2vw;}@media only screen and (max-width:1200px) and (min-width:767px){margin:1vw;}}#imgRMBusCard{width:21vw;float:left;@media only screen and (max-width:767px){width:50vw;}@media only screen and (max-width:1200px) and (min-width:767px){width:30vw;}}#imgRMLogo{width:16vw;float:right;@media only screen and (max-width:767px){width:45vw;}@media only screen and (max-width:1200px) and (min-width:767px){width:27vw;}}#imgJ{width:13vw;float:right;outline:0.15vw dashed black;border:0.4vw solid white;@media only screen and (max-width:767px){width:45vw;}@media only screen and (max-width:1200px) and (min-width:767px){width:27vw;}}#imgHeather{width:12vw;float:left;margin-top:0.3vw;outline:0.15vw dashed black;border:0.4vw solid white;@media only screen and (max-width:767px){width:45vw;}@media only screen and (max-width:1200px) and (min-width:767px){width:27vw;}}"]);

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
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AboutDiv, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_seo__WEBPACK_IMPORTED_MODULE_4___default.a, {
    config: {
      title: "Reveler Music, LLC - #BringinTheParty ** Music Entertainment Services - About Page",
      description: "Meet Reveler Music, LLC, we offer music entertainment services, such as, Live Music, Live Sound and Open Mics, Karaoke and DJ, to Pueblo, Colorado Springs, Castle Rock, Denver and the surrounding areas.",
      canonical: "https://revelermusic.com",
      openGraph: {
        type: "website",
        url: "https://revelermusic.com/about",
        title: "Reveler Music, LLC - About Page",
        description: "Meet Reveler Music, LLC, we offer music entertainment services, such as, Live Music, Live Sound and Open Mics, Karaoke and DJ, to Pueblo, Colorado Springs, Castle Rock, Denver and the surrounding areas.",
        site_name: "Revler Music, LLC"
      },
      twitter: {
        handle: "@jwgravesco"
      }
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "About Reveler Music, LLC"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "rowWrapper"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    className: "colStyle",
    xl: 3,
    md: 6
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Meet Reveler"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_spring__WEBPACK_IMPORTED_MODULE_2__["animated"].p, {
    style: aboutParagraph
  }, "Most work very hard each and every day to provide for himself or", " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _static_images_RMBackofBusinessCard_png__WEBPACK_IMPORTED_MODULE_6___default.a,
    id: "imgRMBusCard",
    alt: "Santa & the Mrs of West Texas"
  }), "herself and his or her family. With all of this struggle and sacrifice it is essential that the important days go well. You deserve to have your special events such as a daughter or son's wedding or his or her college graduation make you smile. Reveler Music wants to remove all worries one has about keeping the ones you love happy and having a good time.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    className: "colStyle",
    xl: 3,
    md: 6
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Reveler Process"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_spring__WEBPACK_IMPORTED_MODULE_2__["animated"].p, {
    style: aboutParagraph2
  }, "In order to ensure 100% complete and total being happy and having a good time for you and your loved ones, Reveler Music, LLC created a 4 step Experience Guarantee Process. 1) You and Reveler will go through the Entertainment service options available, and together we will find the right option. 2) Next, together we will walk through the event and visualize the best outcome. 3) In the next step of the process, Reveler implements your vision in a way that ensures 100% complete and total satisfaction. No excuses! 4) Finally, the last and the best", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _static_images_RevelerLogo_png__WEBPACK_IMPORTED_MODULE_7___default.a,
    alt: "Santa & the Mrs at the Odessa Movie Theatre",
    id: "imgRMLogo"
  }), " ", "step, You go Party down, and enjoy what you have earned.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], _defineProperty({
    className: "colStyle",
    xl: 3,
    md: 6
  }, "className", "colStyle"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "J."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_spring__WEBPACK_IMPORTED_MODULE_2__["animated"].p, {
    style: aboutParagraph3
  }, "Although able to complete college degrees in Accounting, Business Administration and Information Architecture, J", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _static_images_roughneckProfilePic_jpg__WEBPACK_IMPORTED_MODULE_8___default.a,
    id: "imgJ",
    alt: "Santa Baking Cookies"
  }), " ", "maintains the blue-collar work ethic he learned growing up in Odessa Texas. From the oil rigs of West Texas to the board rooms of the largest tax accounting firm in the world, J has appreciated a diverse work history, as well as, a diverse understanding and tolerance of people and of cultures. Having played the guitar and having sang in bands from Heavy Metal to Country music for more than 30 years, J has an extensive background in music entertainment.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    className: "colStyle",
    xl: 3,
    md: 6
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Heather"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_spring__WEBPACK_IMPORTED_MODULE_2__["animated"].p, {
    style: aboutParagraph4
  }, "Very few things in life light up a room like Heather when she walks in the room. God given natural beauty complimented with a", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _static_images_heatherSelfie_jpg__WEBPACK_IMPORTED_MODULE_9___default.a,
    id: "imgHeather",
    alt: "the Mrs Enjoying Barbeque"
  }), " ", "voice that could only be bestowed from the heavens. Coming from a family of outstanding musicians, Heather's natural talent was found very early, and she began formal training at the age of 4. Born and raised on the beaches near Tampa, FL, Heather was a bit of a beach bunni, but says she loves Colorado and now she is a snow bunni. \uD83D\uDE0A"))))));
}

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ })
/******/ ]);