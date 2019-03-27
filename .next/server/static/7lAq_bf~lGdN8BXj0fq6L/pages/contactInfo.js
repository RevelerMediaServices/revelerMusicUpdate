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
/******/ 	return __webpack_require__(__webpack_require__.s = 32);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),

/***/ 12:
/***/ (function(module, exports) {

module.exports = require("firebase");

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(45);


/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./components/Layout.js + 2 modules
var Layout = __webpack_require__(9);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(2);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "next-seo"
var external_next_seo_ = __webpack_require__(5);
var external_next_seo_default = /*#__PURE__*/__webpack_require__.n(external_next_seo_);

// EXTERNAL MODULE: external "firebase"
var external_firebase_ = __webpack_require__(12);
var external_firebase_default = /*#__PURE__*/__webpack_require__.n(external_firebase_);

// CONCATENATED MODULE: ./Firebase.js

var config = {
  apiKey: "AIzaSyAhQunsX8aLAc1j459PORR1blnMZqzyoJY",
  authDomain: "thespotcoloradosprings.firebaseapp.com",
  databaseURL: "https://thespotcoloradosprings.firebaseio.com",
  projectId: "thespotcoloradosprings",
  storageBucket: "thespotcoloradosprings.appspot.com",
  messagingSenderId: "706866210540"
};

if (!external_firebase_default.a.apps.length) {
  external_firebase_default.a.initializeApp(config);
}

var db = external_firebase_default.a.database();
// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__(1);

// CONCATENATED MODULE: ./components/RevelerContact.js


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var RevelerContactDiv = external_styled_components_default.a.div.withConfig({
  displayName: "RevelerContact__RevelerContactDiv",
  componentId: "nujo68-0"
})(["position:absolute;left:50%;transform:translate(-50%,0%);-webkit-box-shadow:0 0 1vw rgba(154,154,154,1);-moz-box-shadow:0 0 1vw rgba(154,154,154,1);box-shadow:0 0 1vw rgba(154,154,154,1);width:75vw;background-color:black;border:solid 0.01vw rgba(0,0,100,1);margin:0;padding:0;padding-top:1vh;.contactFormPageHeader{color:white;text-align:center;font-size:3vw;font-family:\"PT Sans\",sans-serif;@media only screen and (max-width:767px){font-size:6vw;}@media only screen and (max-width:1200px) and (min-width:767px){font-size:6vw;}}.newContactFormContainerDiv{text-align:center;color:white;font-family:\"PT Sans\",sans-serif;font-size:2vw;@media only screen and (max-width:767px){font-size:5vw;}@media only screen and (max-width:1200px) and (min-width:767px){font-size:2.5vw;}}.asLabel{padding-top:1vh;}.newContactFormButtonDiv{padding-top:2vh;padding-bottom:2vh;}.contactCards{background-color:transparent;margin-left:5%;margin-right:10%;margin-top:2vh;background-color:rgb(26,26,28,1);@media only screen and (max-width:767px){margin-left:5%;margin-right:5%;}@media only screen and (max-width:1200px) and (min-width:767px){margin-left:5%;margin-right:10%;}}.contactCardsWords{font-family:\"PT Sans\",sans-serif;font-size:1vw;@media only screen and (max-width:767px){font-size:3.5vw;}@media only screen and (max-width:1200px) and (min-width:767px){font-size:1.5vw;}}"]);

function RevelerContact() {
  var _useState = Object(external_react_["useState"])(""),
      _useState2 = _slicedToArray(_useState, 2),
      fName = _useState2[0],
      setFName = _useState2[1];

  var _useState3 = Object(external_react_["useState"])(""),
      _useState4 = _slicedToArray(_useState3, 2),
      lNameCompanyName = _useState4[0],
      setLNameCompanyName = _useState4[1];

  var _useState5 = Object(external_react_["useState"])(""),
      _useState6 = _slicedToArray(_useState5, 2),
      dateOfEvent = _useState6[0],
      setDateOfEvent = _useState6[1];

  var _useState7 = Object(external_react_["useState"])(""),
      _useState8 = _slicedToArray(_useState7, 2),
      phoneNumber = _useState8[0],
      setPhoneNumber = _useState8[1];

  var _useState9 = Object(external_react_["useState"])(""),
      _useState10 = _slicedToArray(_useState9, 2),
      bestTimeToCall = _useState10[0],
      setBestTimeToCall = _useState10[1];

  var _useState11 = Object(external_react_["useState"])(""),
      _useState12 = _slicedToArray(_useState11, 2),
      emailAddress = _useState12[0],
      setEmailAdress = _useState12[1];

  var _useState13 = Object(external_react_["useState"])(""),
      _useState14 = _slicedToArray(_useState13, 2),
      zipCodeOfVenue = _useState14[0],
      setZipCodeOfVenue = _useState14[1];

  var _useState15 = Object(external_react_["useState"])(""),
      _useState16 = _slicedToArray(_useState15, 2),
      message = _useState16[0],
      setMessage = _useState16[1];

  var onSubmit = Object(external_react_["useCallback"])(function (e) {
    e.preventDefault();
    var newFormRef = db.ref("ContactForms");
    var form = {
      fName: fName,
      lNameCompanyName: lNameCompanyName,
      dateOfEvent: dateOfEvent,
      phoneNumber: phoneNumber,
      bestTimeToCall: bestTimeToCall,
      emailAddress: emailAddress,
      zipCodeOfVenue: zipCodeOfVenue,
      message: message
    };
    newFormRef.push(form);
    setFName("");
    setLNameCompanyName("");
    setDateOfEvent("");
    setPhoneNumber("");
    setBestTimeToCall("");
    setEmailAdress("");
    setZipCodeOfVenue("");
    setMessage("");
  });
  return external_react_default.a.createElement(RevelerContactDiv, null, external_react_default.a.createElement("div", {
    className: "contactFormPageHeader"
  }, "Contact Reveler Music"), external_react_default.a.createElement(external_reactstrap_["Row"], null, external_react_default.a.createElement(external_reactstrap_["Col"], {
    xl: "8",
    md: "6",
    xs: "12"
  }, external_react_default.a.createElement(external_reactstrap_["Form"], {
    onSubmit: onSubmit
  }, external_react_default.a.createElement(external_reactstrap_["Container"], {
    className: "newContactFormContainerDiv"
  }, external_react_default.a.createElement(external_reactstrap_["Row"], null, external_react_default.a.createElement(external_reactstrap_["Col"], {
    xl: "6",
    md: "12"
  }, external_react_default.a.createElement(external_reactstrap_["Label"], {
    for: "fname",
    className: "asLabel"
  }, "First Name"), external_react_default.a.createElement(external_reactstrap_["Input"], {
    type: "text",
    name: "fname",
    placeholder: "Fist Name",
    id: "fname",
    onChange: function onChange(e) {
      return setFName(e.target.value);
    },
    value: fName,
    className: "asInput"
  })), external_react_default.a.createElement(external_reactstrap_["Col"], {
    xl: "6",
    md: "12"
  }, external_react_default.a.createElement(external_reactstrap_["Label"], {
    for: "lNameCompanyName",
    className: "asLabel"
  }, "Last/Company Name"), external_react_default.a.createElement(external_reactstrap_["Input"], {
    type: "text",
    name: "lNameCompanyName",
    placeholder: "Last Name or Company Name",
    id: "lNameCompanyName",
    onChange: function onChange(e) {
      return setLNameCompanyName(e.target.value);
    },
    value: lNameCompanyName,
    className: "asInput"
  }))), external_react_default.a.createElement(external_reactstrap_["Row"], null, external_react_default.a.createElement(external_reactstrap_["Col"], {
    xl: "6",
    md: "12"
  }, external_react_default.a.createElement(external_reactstrap_["Label"], {
    for: "dateOfEvent",
    className: "asLabel"
  }, "Date of Event"), external_react_default.a.createElement(external_reactstrap_["Input"], {
    type: "text",
    name: "dateOfEvent",
    placeholder: "Date of Event",
    id: "dateOfEvent",
    onChange: function onChange(e) {
      return setDateOfEvent(e.target.value);
    },
    value: dateOfEvent,
    className: "asInput"
  })), external_react_default.a.createElement(external_reactstrap_["Col"], {
    xl: "6",
    md: "12"
  }, external_react_default.a.createElement(external_reactstrap_["Label"], {
    for: "phoneNumber",
    className: "asLabel"
  }, "Phone Number"), external_react_default.a.createElement(external_reactstrap_["Input"], {
    type: "text",
    name: "phoneNumber",
    placeholder: "Phone Number",
    id: "phoneNumber",
    onChange: function onChange(e) {
      return setPhoneNumber(e.target.value);
    },
    value: phoneNumber,
    className: "asInput"
  }))), external_react_default.a.createElement(external_reactstrap_["Row"], null, external_react_default.a.createElement(external_reactstrap_["Col"], {
    xl: "6",
    md: "12"
  }, external_react_default.a.createElement(external_reactstrap_["Label"], {
    for: "bestTimeToCall",
    className: "asLabel"
  }, "Best Time to Call"), external_react_default.a.createElement(external_reactstrap_["Input"], {
    type: "text",
    name: "bestTimeToCall",
    placeholder: "Best Time to Call",
    id: "bestTimeToCall",
    onChange: function onChange(e) {
      return setBestTimeToCall(e.target.value);
    },
    value: bestTimeToCall,
    className: "asInput"
  })), external_react_default.a.createElement(external_reactstrap_["Col"], {
    xl: "6",
    md: "12"
  }, external_react_default.a.createElement(external_reactstrap_["Label"], {
    for: "emailAddress",
    className: "asLabel"
  }, "Email Address"), external_react_default.a.createElement(external_reactstrap_["Input"], {
    type: "text",
    name: "emailAddress",
    placeholder: "Email Address",
    id: "emailAddress",
    onChange: function onChange(e) {
      return setEmailAdress(e.target.value);
    },
    value: emailAddress,
    className: "asInput"
  }))), external_react_default.a.createElement(external_reactstrap_["Row"], null, external_react_default.a.createElement(external_reactstrap_["Col"], null, external_react_default.a.createElement(external_reactstrap_["Label"], {
    for: "message",
    className: "asLabel"
  }, "Message"), external_react_default.a.createElement(external_reactstrap_["Input"], {
    type: "textarea",
    name: "message",
    placeholder: "Message",
    id: "message",
    onChange: function onChange(e) {
      return setMessage(e.target.value);
    },
    value: message,
    className: "asInput",
    rows: "5"
  }))), external_react_default.a.createElement("div", {
    className: "newContactFormButtonDiv"
  }, external_react_default.a.createElement(external_reactstrap_["Button"], {
    type: "submit"
  }, "Send Message"))))), external_react_default.a.createElement(external_reactstrap_["Col"], {
    xl: "4",
    md: "6",
    xs: "12",
    id: "MainColumn2"
  }, external_react_default.a.createElement("div", null, external_react_default.a.createElement(external_reactstrap_["Card"], {
    className: "contactCards",
    body: true,
    inverse: true
  }, external_react_default.a.createElement("div", {
    className: "contactCardsWords"
  }, "Colorado Springs - Pueblo", external_react_default.a.createElement("br", null), "(719) 439-7950")), external_react_default.a.createElement(external_reactstrap_["Card"], {
    className: "contactCards",
    body: true,
    inverse: true
  }, external_react_default.a.createElement("div", {
    className: "contactCardsWords"
  }, "Denver - Castle Rock", external_react_default.a.createElement("br", null), "(720) 306-1354")), external_react_default.a.createElement(external_reactstrap_["Card"], {
    className: "contactCards",
    body: true,
    inverse: true
  }, external_react_default.a.createElement("div", {
    className: "contactCardsWords"
  }, "Other Contacts"), external_react_default.a.createElement("div", {
    className: "contactCardsWords"
  }, "Email - contact@revelermusic.com", external_react_default.a.createElement("br", null), "Facebook - @revelermusicllc", external_react_default.a.createElement("br", null), "Instagram - @revelermusicllc"))))));
}

/* harmony default export */ var components_RevelerContact = (RevelerContact);
// CONCATENATED MODULE: ./pages/contactInfo.js





var ContactInfoDiv = external_styled_components_default.a.div.withConfig({
  displayName: "contactInfo__ContactInfoDiv",
  componentId: "rpbbut-0"
})(["margin:0;padding:0;height:80vh;width:100vw;"]);

function ContactInfo() {
  return external_react_default.a.createElement(Layout["a" /* default */], null, external_react_default.a.createElement(ContactInfoDiv, null, external_react_default.a.createElement(external_next_seo_default.a, {
    config: {
      title: "Reveler Music, LLC - #BringinTheParty ** Music Entertainment Services - Contact Page ",
      description: "Contact Reveler Music, LLC for music entertainment services, such as, Live Music, Live Sound and Open Mics, Karaoke and DJ, to Pueblo, Colorado Springs, Castle Rock, Denver and the surrounding areas.",
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
  }), external_react_default.a.createElement(components_RevelerContact, null)));
}

/* harmony default export */ var contactInfo = __webpack_exports__["default"] = (ContactInfo);

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports = require("next-seo");

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

module.exports = "/_next/static/images/RevelerLogoWhiteShadow-8bbba9ab68dbc8fc115d3811c703e8f7.png";

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

module.exports = "/_next/static/images/landingPage-31f2624e1c1faa7bfb0ee2a889b285c1.jpg";

/***/ }),

/***/ 8:
/***/ (function(module, exports) {

module.exports = "/_next/static/images/mobileLandingPage-d54ad7317266d8b78da0a529084c9474.jpg";

/***/ }),

/***/ 9:
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

/***/ })

/******/ });