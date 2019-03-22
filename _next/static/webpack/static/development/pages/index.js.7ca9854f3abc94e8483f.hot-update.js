webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-spring */ "./node_modules/react-spring/web.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-seo */ "./node_modules/next-seo/dist/index.js");
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _static_images_instagramLogo_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../static/images/instagramLogo.png */ "./static/images/instagramLogo.png");
/* harmony import */ var _static_images_instagramLogo_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_static_images_instagramLogo_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _static_images_RevelerLogoWhiteShadow_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../static/images/RevelerLogoWhiteShadow.png */ "./static/images/RevelerLogoWhiteShadow.png");
/* harmony import */ var _static_images_RevelerLogoWhiteShadow_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_static_images_RevelerLogoWhiteShadow_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _static_images_421CDLogo_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../static/images/421CDLogo.png */ "./static/images/421CDLogo.png");
/* harmony import */ var _static_images_421CDLogo_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_static_images_421CDLogo_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _static_images_J_Heather_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../static/images/J&Heather.png */ "./static/images/J&Heather.png");
/* harmony import */ var _static_images_J_Heather_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_static_images_J_Heather_png__WEBPACK_IMPORTED_MODULE_9__);

var _jsxFileName = "C:\\Users\\HC\\Desktop\\RevelerMusic\\RevelerMediaServices\\Client Work\\websiteUpdateRevelerMusic\\rmUpdate\\pages\\index.js";


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }









var IndexDiv = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "pages__IndexDiv",
  componentId: "sc-1vacgmq-0"
})(["color:white;margin:0;padding:0;width:100vw;#jName{font-size:2.5em;position:absolute;top:65%;left:20%;font-family:\"Allerta Stencil\",sans-serif;font-weight:500;@media only screen and (max-width:767px){font-size:1.5em;top:40%;left:2%;}@media only screen and (max-width:1200px) and (min-width:767px){font-size:2em;top:60%;left:20%;}}#heatherName{text-align:center;font-size:2.5em;position:absolute;top:35%;right:30%;font-family:\"Allerta Stencil\",sans-serif;font-weight:500;@media only screen and (max-width:767px){top:0;right:30%;font-size:1.5em;}@media only screen and (max-width:1200px) and (min-width:767px){font-size:2em;top:35%;left:70%;}}#rmLogo{position:absolute;top:0;left:50%;width:25vw;@media only screen and (max-width:767px){left:5%;top:15%;width:50vw;}@media only screen and (max-width:1200px) and (min-width:767px){top:7%;left:55%;}}#jhLogo{position:absolute;top:58%;left:40%;img{width:16vw;}@media only screen and (max-width:767px){position:absolute;top:55%;left:1%;img{width:37vw;}}@media only screen and (max-width:1200px) and (min-width:767px){}}#cdLogo{position:absolute;top:68%;left:60%;img{width:16vw;}@media only screen and (max-width:767px){position:absolute;top:70%;left:35%;img{width:45vw;}}@media only screen and (max-width:1200px) and (min-width:767px){}}#landingPageWordsAtBottom{position:absolute;font-size:2em;left:10%;bottom:6%;color:white;font-family:\"Luckiest Guy\",cursive;@media only screen and (max-width:767px){font-size:0.8em;}@media only screen and (max-width:1200px) and (min-width:767px){font-size:1.8em;left:6%;bottom:0;}}#heatherLoveInstagram{position:absolute;font-size:1.5em;left:65%;right:0;color:white;font-family:\"Luckiest Guy\",cursive;img{width:3vw;}@media only screen and (max-width:767px){position:absolute;font-size:1em;top:20%;color:white;font-family:\"Luckiest Guy\",cursive;img{width:10vw;}}@media only screen and (max-width:1200px) and (min-width:767px){}}"]);

function Index() {
  var animIndexRMLogo = Object(react_spring__WEBPACK_IMPORTED_MODULE_3__["useSpring"])({
    from: {
      opacity: 0.5
    },
    opacity: 1,
    config: {
      duration: 3000
    }
  });
  var animJHLogo = Object(react_spring__WEBPACK_IMPORTED_MODULE_3__["useSpring"])({
    from: {
      marginLeft: -250,
      opacity: 0
    },
    to: function () {
      var _to = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(next, cancel) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return next({
                  marginLeft: 0,
                  opacity: 1,
                  config: {
                    duration: 1000
                  }
                });

              case 2:
                _context.next = 4;
                return next({
                  opacity: 0,
                  config: {
                    duration: 1000
                  }
                });

              case 4:
                _context.next = 6;
                return next({
                  opacity: 1,
                  config: {
                    duration: 1000
                  }
                });

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function to(_x, _x2) {
        return _to.apply(this, arguments);
      }

      return to;
    }()
  });
  var animCDLogo = Object(react_spring__WEBPACK_IMPORTED_MODULE_3__["useSpring"])({
    from: {
      marginLeft: 250,
      opacity: 0
    },
    to: function () {
      var _to2 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(next, cancel) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return next({
                  marginLeft: 0,
                  opacity: 1,
                  config: {
                    duration: 1000
                  }
                });

              case 2:
                _context2.next = 4;
                return next({
                  opacity: 0,
                  config: {
                    duration: 1000
                  }
                });

              case 4:
                _context2.next = 6;
                return next({
                  opacity: 1,
                  config: {
                    duration: 1000
                  }
                });

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function to(_x3, _x4) {
        return _to2.apply(this, arguments);
      }

      return to;
    }()
  });
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(IndexDiv, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_seo__WEBPACK_IMPORTED_MODULE_5___default.a, {
    config: {
      title: "Reveler Media Services Next.js/Firebase starter",
      description: "Next.js starter template with Styled-Components, Firebase, Next-SEO"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "jName",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211
    },
    __self: this
  }, "J. Graves"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "heatherName",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212
    },
    __self: this
  }, "Heather ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213
    },
    __self: this
  }), " Love"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "heatherLoveInstagram",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: _static_images_instagramLogo_png__WEBPACK_IMPORTED_MODULE_6___default.a,
    alt: "Instagram Logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216
    },
    __self: this
  }), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216
    },
    __self: this
  }), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://www.instagram.com/xheatherlovex/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217
    },
    __self: this
  }, "xheatherlovex")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "rmLogo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_spring__WEBPACK_IMPORTED_MODULE_3__["animated"].img, {
    style: animIndexRMLogo,
    src: _static_images_RevelerLogoWhiteShadow_png__WEBPACK_IMPORTED_MODULE_7___default.a,
    alt: "Reveler Music Logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "jhLogo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_spring__WEBPACK_IMPORTED_MODULE_3__["animated"].img, {
    style: animJHLogo,
    src: _static_images_J_Heather_png__WEBPACK_IMPORTED_MODULE_9___default.a,
    alt: "Reveler Music Logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "cdLogo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_spring__WEBPACK_IMPORTED_MODULE_3__["animated"].img, {
    style: animCDLogo,
    src: _static_images_421CDLogo_png__WEBPACK_IMPORTED_MODULE_8___default.a,
    alt: "Cowboy Drive Logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "landingPageWordsAtBottom",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240
    },
    __self: this
  }, "Corporate, Wedding, Family Friendly or 21+", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242
    },
    __self: this
  }), "Live Music, Open Mic, Karaoke and DJ Services")));
}

/* harmony default export */ __webpack_exports__["default"] = (Index);
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.7ca9854f3abc94e8483f.hot-update.js.map