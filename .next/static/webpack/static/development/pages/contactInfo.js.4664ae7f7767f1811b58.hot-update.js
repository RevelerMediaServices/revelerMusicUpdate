webpackHotUpdate("static\\development\\pages\\contactInfo.js",{

/***/ "./components/RevelerContact.js":
/*!**************************************!*\
  !*** ./components/RevelerContact.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Firebase */ "./Firebase.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
var _jsxFileName = "C:\\Users\\HC\\Desktop\\RevelerMusic\\RevelerMediaServices\\Client Work\\websiteUpdateRevelerMusic\\rmUpdate\\components\\RevelerContact.js";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var RevelerContactDiv = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "RevelerContact__RevelerContactDiv",
  componentId: "nujo68-0"
})(["position:absolute;left:50%;transform:translate(-50%,0%);-webkit-box-shadow:0 0 1vw rgba(154,154,154,1);-moz-box-shadow:0 0 1vw rgba(154,154,154,1);box-shadow:0 0 1vw rgba(154,154,154,1);width:75vw;background-color:black;border:solid 0.01vw rgba(0,0,100,1);margin:0;padding:0;.contactFormPageHeader{color:white;text-align:center;font-size:3vw;font-family:\"PT Sans\",sans-serif;@media only screen and (max-width:1200px) and (min-width:700px){font-size:6vw;}@media only screen and (max-width:700px){font-size:8vw;}}.newContactFormContainerDiv{text-align:center;color:white;font-family:\"PT Sans\",sans-serif;font-size:2vw;@media only screen and (max-width:1200px) and (min-width:700px){font-size:2.5vw;}@media only screen and (max-width:700px){font-size:6.5vw;}}.contactFormButtonRow{}.asLabel{padding-top:0.5vh;}.asInput{}.newContactFormButtonDiv{padding-top:2vh;padding-bottom:2vh;}.contactCards{background-color:transparent;margin-left:5%;margin-right:10%;margin-top:2vh;background-color:rgb(26,26,28,1);@media only screen and (max-width:1200px) and (min-width:700px){margin-left:5%;margin-right:10%;}@media only screen and (max-width:700px){margin-left:5%;margin-right:5%;}}.contactCardsWords{font-family:\"PT Sans\",sans-serif;font-size:1vw;@media only screen and (max-width:1200px) and (min-width:700px){font-size:1.5vw;}@media only screen and (max-width:700px){font-size:7vw;}}"]);

function RevelerContact() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      _useState2 = _slicedToArray(_useState, 2),
      fName = _useState2[0],
      setFName = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      _useState4 = _slicedToArray(_useState3, 2),
      lNameCompanyName = _useState4[0],
      setLNameCompanyName = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      _useState6 = _slicedToArray(_useState5, 2),
      dateOfEvent = _useState6[0],
      setDateOfEvent = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      _useState8 = _slicedToArray(_useState7, 2),
      phoneNumber = _useState8[0],
      setPhoneNumber = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      _useState10 = _slicedToArray(_useState9, 2),
      bestTimeToCall = _useState10[0],
      setBestTimeToCall = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      _useState12 = _slicedToArray(_useState11, 2),
      emailAddress = _useState12[0],
      setEmailAdress = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      _useState14 = _slicedToArray(_useState13, 2),
      zipCodeOfVenue = _useState14[0],
      setZipCodeOfVenue = _useState14[1];

  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      _useState16 = _slicedToArray(_useState15, 2),
      message = _useState16[0],
      setMessage = _useState16[1];

  var onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    e.preventDefault();
    var newFormRef = _Firebase__WEBPACK_IMPORTED_MODULE_1__["db"].ref("ContactForms");
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
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RevelerContactDiv, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "contactFormPageHeader",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, "Contact Reveler Music"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    xl: "8",
    md: "6",
    xs: "12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Form"], {
    onSubmit: onSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    className: "newContactFormContainerDiv",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    xl: "6",
    md: "12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Label"], {
    for: "fname",
    className: "asLabel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }, "First Name"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    type: "text",
    name: "fname",
    placeholder: "Fist Name",
    id: "fname",
    onChange: function onChange(e) {
      return setFName(e.target.value);
    },
    value: fName,
    className: "asInput",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    xl: "6",
    md: "12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Label"], {
    for: "lNameCompanyName",
    className: "asLabel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }, "Last/Company Name"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    type: "text",
    name: "lNameCompanyName",
    placeholder: "Last Name or Company Name",
    id: "lNameCompanyName",
    onChange: function onChange(e) {
      return setLNameCompanyName(e.target.value);
    },
    value: lNameCompanyName,
    className: "asInput",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    xl: "6",
    md: "12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Label"], {
    for: "dateOfEvent",
    className: "asLabel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: this
  }, "Date of Event"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    type: "text",
    name: "dateOfEvent",
    placeholder: "Date of Event",
    id: "dateOfEvent",
    onChange: function onChange(e) {
      return setDateOfEvent(e.target.value);
    },
    value: dateOfEvent,
    className: "asInput",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    xl: "6",
    md: "12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Label"], {
    for: "phoneNumber",
    className: "asLabel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197
    },
    __self: this
  }, "Phone Number"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    type: "text",
    name: "phoneNumber",
    placeholder: "Phone Number",
    id: "phoneNumber",
    onChange: function onChange(e) {
      return setPhoneNumber(e.target.value);
    },
    value: phoneNumber,
    className: "asInput",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    xl: "6",
    md: "12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Label"], {
    for: "bestTimeToCall",
    className: "asLabel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213
    },
    __self: this
  }, "Best Time to Call"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    type: "text",
    name: "bestTimeToCall",
    placeholder: "Best Time to Call",
    id: "bestTimeToCall",
    onChange: function onChange(e) {
      return setBestTimeToCall(e.target.value);
    },
    value: bestTimeToCall,
    className: "asInput",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    xl: "6",
    md: "12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Label"], {
    for: "emailAddress",
    className: "asLabel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227
    },
    __self: this
  }, "Email Address"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    type: "text",
    name: "emailAddress",
    placeholder: "Email Address",
    id: "emailAddress",
    onChange: function onChange(e) {
      return setEmailAdress(e.target.value);
    },
    value: emailAddress,
    className: "asInput",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Label"], {
    for: "message",
    className: "asLabel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243
    },
    __self: this
  }, "Message"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    type: "textarea",
    name: "message",
    placeholder: "Message",
    id: "message",
    onChange: function onChange(e) {
      return setMessage(e.target.value);
    },
    value: message,
    className: "asInput",
    rows: "5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "newContactFormButtonDiv",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260
    },
    __self: this
  }, "Send Message"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    xl: "4",
    md: "6",
    xs: "12",
    id: "MainColumn2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
    className: "contactCards",
    body: true,
    inverse: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "contactCardsWords",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268
    },
    __self: this
  }, "Colorado Springs - Pueblo", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270
    },
    __self: this
  }), "(719) 439-7950")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
    className: "contactCards",
    body: true,
    inverse: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "contactCardsWords",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276
    },
    __self: this
  }, "Denver - Castle Rock", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278
    },
    __self: this
  }), "(720) 306-1354")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
    className: "contactCards",
    body: true,
    inverse: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "contactCardsWords",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283
    },
    __self: this
  }, "Other Contacts"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "contactCardsWords",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284
    },
    __self: this
  }, "Email - contact@revelermusic.com", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286
    },
    __self: this
  }), "Facebook - @revelermusicllc", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288
    },
    __self: this
  }), "Instagram - @revelermusicllc"))))));
}

/* harmony default export */ __webpack_exports__["default"] = (RevelerContact);

/***/ })

})
//# sourceMappingURL=contactInfo.js.4664ae7f7767f1811b58.hot-update.js.map