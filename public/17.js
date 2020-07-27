(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "./resources/js/components/Logout/Logout.js":
/*!**************************************************!*\
  !*** ./resources/js/components/Logout/Logout.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_Auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/Auth */ "./resources/js/components/utils/Auth.js");



function Logout(props) {
  var user = Object(_utils_Auth__WEBPACK_IMPORTED_MODULE_1__["getUser"])(); // handle click event of logout button

  var handleLogout = function handleLogout() {
    Object(_utils_Auth__WEBPACK_IMPORTED_MODULE_1__["removeUserSession"])();
    props.history.push('/login');
  };

  handleLogout();
  return '';
}

/* harmony default export */ __webpack_exports__["default"] = (Logout);

/***/ })

}]);