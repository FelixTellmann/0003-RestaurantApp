webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/DataTable/ColumnHeader/ColumnHeader.js":
/*!***********************************************************!*\
  !*** ./components/DataTable/ColumnHeader/ColumnHeader.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ColumnHeader; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ColumnHeader_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ColumnHeader.scss */ "./components/DataTable/ColumnHeader/ColumnHeader.scss");
/* harmony import */ var _ColumnHeader_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ColumnHeader_scss__WEBPACK_IMPORTED_MODULE_2__);



function ColumnHeader(_ref) {
  var title = _ref.title,
      sortable = _ref.sortable;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(sortable),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      isSortable = _React$useState2[0],
      setIsSortable = _React$useState2[1];

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    onClick: function onClick() {
      return isChecked === 'checked' ? setIsChecked('') : setIsChecked('checked');
    },
    className: 'data-table__checkbox ' + isChecked
  });
}

/***/ }),

/***/ "./components/DataTable/DataTable.js":
/*!*******************************************!*\
  !*** ./components/DataTable/DataTable.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DataTable; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _DataTable_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DataTable.scss */ "./components/DataTable/DataTable.scss");
/* harmony import */ var _DataTable_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_DataTable_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Checkbox_Checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Checkbox/Checkbox */ "./components/DataTable/Checkbox/Checkbox.js");
/* harmony import */ var _ColumnHeader_ColumnHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ColumnHeader/ColumnHeader */ "./components/DataTable/ColumnHeader/ColumnHeader.js");





function DataTable(props) {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState('active'),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      active = _React$useState2[0],
      setActive = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(''),
      _React$useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState3, 2),
      active2 = _React$useState4[0],
      setActive2 = _React$useState4[1];

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "data-table__spacer"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("table", {
    className: "data-table"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("thead", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
    style: {
      width: '2.7%'
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Checkbox_Checkbox__WEBPACK_IMPORTED_MODULE_3__["default"], {
    checked: "checked"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ColumnHeader_ColumnHeader__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Date",
    sortable: true
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", null, "Payee"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", null, "Description"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", null, "Type"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", null, "Selection"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", null, "Reference"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", null, "VAT"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", null, "Spent"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", null, "Received"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", null, "REC?"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", null, "Action"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tbody", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, "Checkbox"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, "space Locker"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, "date"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, "Payee"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, "Description"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, "Type"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, "Selection"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, "Reference"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, "VAT"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, "Spent"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, "Received"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, "REC?"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, "Action")))));
}

/***/ })

})
//# sourceMappingURL=index.js.dcf2c0bcc6438a2c1ca9.hot-update.js.map