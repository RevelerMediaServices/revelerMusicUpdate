webpackHotUpdate("static\\development\\pages\\about.js",{

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-spring */ "./node_modules/react-spring/web.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-seo */ "./node_modules/next-seo/dist/index.js");
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _static_images_RMBackofBusinessCard_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../static/images/RMBackofBusinessCard.png */ "./static/images/RMBackofBusinessCard.png");
/* harmony import */ var _static_images_RMBackofBusinessCard_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_static_images_RMBackofBusinessCard_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _static_images_RevelerLogo_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../static/images/RevelerLogo.png */ "./static/images/RevelerLogo.png");
/* harmony import */ var _static_images_RevelerLogo_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_static_images_RevelerLogo_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _static_images_roughneckProfilePic_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../static/images/roughneckProfilePic.jpg */ "./static/images/roughneckProfilePic.jpg");
/* harmony import */ var _static_images_roughneckProfilePic_jpg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_static_images_roughneckProfilePic_jpg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _static_images_heatherSelfie_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../static/images/heatherSelfie.jpg */ "./static/images/heatherSelfie.jpg");
/* harmony import */ var _static_images_heatherSelfie_jpg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_static_images_heatherSelfie_jpg__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "C:\\Users\\HC\\Desktop\\RevelerMusic\\RevelerMediaServices\\Client Work\\websiteUpdateRevelerMusic\\rmUpdate\\pages\\about.js";










var AboutDiv = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "about__AboutDiv",
  componentId: "sc-1ed34bi-0"
})(["margin:0;padding-left:1vw;padding-right:1vw;background:white;height:80vh;overflow-y:auto;h1{text-align:center;font-family:\"Fjalla One\",sans-serif;font-size:4.855vw;@media only screen and (max-width:767px){font-size:9.6vw;}@media only screen and (max-width:1200px) and (min-width:767px){font-size:6.855vw;}}h2{text-align:center;font-family:\"Fjalla One\",sans-serif;font-size:2.4vw;color:black;text-shadow:0.05vw 0.05vw 0.05vw rgba(255,255,255,1);height:6vh;margin-bottom:1vh;font-variant:small-caps;@media only screen and (max-width:767px){font-size:7.2vw;height:100%;}@media only screen and (max-width:1200px) and (min-width:767px){font-size:5vw;height:8vh;}}p{padding:0;font-family:\"Noto Sans\",sans-serif;font-size:0.95vw;width:100%;overflow-y:auto;@media only screen and (max-width:767px){font-size:5vw;height:100%;}@media only screen and (max-width:1200px) and (min-width:767px){font-size:2vw;height:100%;}}img{margin:1vw;@media only screen and (max-width:767px){}@media only screen and (max-width:1200px) and (min-width:767px){}}#imgRMBusCard{width:21vw;float:left;@media only screen and (max-width:767px){width:50vw;}@media only screen and (max-width:1200px) and (min-width:767px){width:30vw;}}#imgRMLogo{width:16vw;float:right;@media only screen and (max-width:767px){width:45vw;}@media only screen and (max-width:1200px) and (min-width:767px){width:27vw;}}#imgJ{width:13vw;float:right;outline:0.15vw dashed black;border:0.4vw solid white;@media only screen and (max-width:767px){width:45vw;}@media only screen and (max-width:1200px) and (min-width:767px){width:27vw;}}#imgHeather{width:12vw;float:left;margin-top:0.3vw;outline:0.15vw dashed black;border:0.4vw solid white;@media only screen and (max-width:767px){width:45vw;}@media only screen and (max-width:1200px) and (min-width:767px){width:27vw;}}"]);

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
      lineNumber: 183
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AboutDiv, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_seo__WEBPACK_IMPORTED_MODULE_4___default.a, {
    config: {
      title: "Reveler Media Services Next.js/Firebase starter",
      description: "Next.js starter template with Styled-Components, Firebase, Next-SEO"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192
    },
    __self: this
  }, "About Reveler Music, LLC"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "rowWrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
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
  }, "Meet Reveler"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_spring__WEBPACK_IMPORTED_MODULE_2__["animated"].p, {
    style: aboutParagraph,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197
    },
    __self: this
  }, "Most work very hard each and every day to provide for himself or", " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _static_images_RMBackofBusinessCard_png__WEBPACK_IMPORTED_MODULE_6___default.a,
    id: "imgRMBusCard",
    alt: "Santa & the Mrs of West Texas",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: this
  }), "herself and his or her family. With all of this struggle and sacrifice it is essential that the important days go well. You deserve to have your special events such as a daughter or son's wedding or his or her college graduation make you smile. Reveler Music wants to remove all worries one has about keeping the ones you love happy and having a good time.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    xl: 3,
    md: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213
    },
    __self: this
  }, "Reveler Process"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_spring__WEBPACK_IMPORTED_MODULE_2__["animated"].p, {
    style: aboutParagraph2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214
    },
    __self: this
  }, "In order to ensure 100% complete and total being happy and having a good time for you and your loved ones, Reveler Music, LLC created a 4 step Experience Guarantee Process. 1) You and Reveler will go through the Entertainment service options available, and together we will find the right option. 2) Next, together we will walk through the event and visualize the best outcome. 3) In the next step of the process, Reveler implements your vision in a way that ensures 100% complete and total satisfaction. No excuses! 4) Finally, the last and the best", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _static_images_RevelerLogo_png__WEBPACK_IMPORTED_MODULE_7___default.a,
    alt: "Santa & the Mrs at the Odessa Movie Theatre",
    id: "imgRMLogo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224
    },
    __self: this
  }), " ", "step, You go Party down, and enjoy what you have earned.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    xl: 3,
    md: 6,
    className: "colStyle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233
    },
    __self: this
  }, "J."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_spring__WEBPACK_IMPORTED_MODULE_2__["animated"].p, {
    style: aboutParagraph3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234
    },
    __self: this
  }, "Although able to complete college degrees in Accounting, Business Administration and Information Architecture, J", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _static_images_roughneckProfilePic_jpg__WEBPACK_IMPORTED_MODULE_8___default.a,
    id: "imgJ",
    alt: "Santa Baking Cookies",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237
    },
    __self: this
  }), " ", "maintains the blue-collar work ethic he learned growing up in Odessa Texas. From the oil rigs of West Texas to the board rooms of the largest tax accounting firm in the world, J has appreciated a diverse work history, as well as, a diverse understanding and tolerance of people and of cultures. Having played the guitar and having sang in bands from Heavy Metal to Country music for more than 30 years, J has an extensive background in music entertainment.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    xl: 3,
    md: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249
    },
    __self: this
  }, "Heather"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_spring__WEBPACK_IMPORTED_MODULE_2__["animated"].p, {
    style: aboutParagraph4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250
    },
    __self: this
  }, "Very few things in life light up a room like Heather when she walks in the room. God given natural beauty complimented with a", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _static_images_heatherSelfie_jpg__WEBPACK_IMPORTED_MODULE_9___default.a,
    id: "imgHeather",
    alt: "the Mrs Enjoying Barbeque",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253
    },
    __self: this
  }), " ", "voice that could only be bestowed from the heavens. Coming from a family of outstanding musicians, Heather's natural talent was found very early, and she began formal training at the age of 4. Born and raised on the beaches near Tampa, FL, Heather was a bit of a beach bunni, but says she loves Colorado and now she is a snow bunni. \uD83D\uDE0A"))))));
}

/* harmony default export */ __webpack_exports__["default"] = (About);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/about")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=about.js.c4b597242caeee5a12c1.hot-update.js.map