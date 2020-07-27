(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./resources/js/components/Register/Register.js":
/*!******************************************************!*\
  !*** ./resources/js/components/Register/Register.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var schema = yup__WEBPACK_IMPORTED_MODULE_2__["object"]({
  first_name: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().min(3, 'Invalid First Name').required('First Name is a Required Field'),
  middle_name: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().min(3, 'Invalid Middle Name').required('Middle Name is a Required Field'),
  last_name: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().min(3, 'Invalid Last Name').required('Last Name is a Required Field'),
  email: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().email('Invalid email address').required('Email is a Required Field'),
  password: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().min(8, 'Must be 8 characters or or More').required('Password is a Required Field'),
  password_confirmation: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().min(8, 'Must be 8 characters or or More').required('Confirm Password is a Required Field')
});

var Register = /*#__PURE__*/function (_Component) {
  _inherits(Register, _Component);

  var _super = _createSuper(Register);

  function Register(props) {
    var _this;

    _classCallCheck(this, Register);

    _this = _super.call(this, props);
    _this.processRegister = _this.processRegister.bind(_assertThisInitialized(_this));
    _this.state = {
      first_name: '',
      middle_name: '',
      last_name: '',
      email: '',
      password: '',
      password_confirmation: '',
      message_success: '',
      message_error: ''
    };
    return _this;
  }

  _createClass(Register, [{
    key: "processRegister",
    value: function processRegister(data) {
      var _this2 = this;

      //alert(data)
      axios.post('/api/register', data).then(function (res) {
        _this2.setState({
          message_success: 'success, Account Created'
        });

        _this2.props.history.push("/login?created");
      })["catch"](function (error) {
        var errors = error.response.data.errors;
        console.log(errors);

        _this2.setState({
          message_error: Object.entries(errors)
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var errors = this.state.message_error ? this.state.message_error.map(function (error, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          key: index,
          className: "alert alert-danger"
        }, error[1]);
      }) : '';
      var sucessMessage = this.state.message_success ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "alert alert-success"
      }, this.state.message_success, " ") : '';
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container",
        id: "register"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row justify-content-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-sm-6 card mt-4 mb-4 p-4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        className: "mb-4"
      }, "Create a New Account"), errors, sucessMessage, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Formik"], {
        validationSchema: schema,
        onSubmit: function onSubmit(values) {
          _this3.processRegister(values);
        },
        initialValues: {
          first_name: '',
          middle_name: '',
          last_name: '',
          email: '',
          password: '',
          password_confirmation: '',
          message_alert: ''
        }
      }, function (_ref) {
        var handleSubmit = _ref.handleSubmit,
            handleChange = _ref.handleChange,
            handleBlur = _ref.handleBlur,
            handleReset = _ref.handleReset,
            resetForm = _ref.resetForm,
            values = _ref.values,
            touched = _ref.touched,
            isValid = _ref.isValid,
            isInvalid = _ref.isInvalid,
            errors = _ref.errors,
            isSubmitting = _ref.isSubmitting;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"], {
          noValidate: true,
          onSubmit: handleSubmit,
          id: "registerForm"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Row, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, {
          as: react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"],
          md: "12",
          controlId: "validationFormikUsername"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Label, null, "First Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["InputGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Control, {
          type: "text",
          placeholder: "First Name",
          name: "first_name",
          value: values.first_name,
          onChange: handleChange,
          onBlur: handleBlur,
          isValid: touched.first_name && !errors.first_name,
          isInvalid: !!(touched.first_name && errors.first_name)
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Control.Feedback, {
          type: "invalid"
        }, errors.first_name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Control.Feedback, null, "Looks good!")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Row, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, {
          as: react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"],
          md: "12",
          controlId: "validationFormikUsername"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Label, null, "Middle Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["InputGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Control, {
          type: "text",
          placeholder: "Middle Name",
          name: "middle_name",
          value: values.middle_name,
          onChange: handleChange,
          onBlur: handleBlur,
          isValid: touched.middle_name && !errors.middle_name,
          isInvalid: !!(touched.middle_name && errors.middle_name)
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Control.Feedback, {
          type: "invalid"
        }, errors.middle_name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Control.Feedback, null, "Looks good!")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Row, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, {
          as: react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"],
          md: "12",
          controlId: "validationFormikUsername"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Label, null, "Last Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["InputGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Control, {
          type: "text",
          placeholder: "Last Name",
          name: "last_name",
          value: values.last_name,
          onChange: handleChange,
          onBlur: handleBlur,
          isValid: touched.last_name && !errors.last_name,
          isInvalid: !!(touched.last_name && errors.last_name)
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Control.Feedback, {
          type: "invalid"
        }, errors.last_name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Control.Feedback, null, "Looks good!")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Row, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, {
          as: react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"],
          md: "12",
          controlId: "validationFormikUsername"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Label, null, "Email"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["InputGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Control, {
          type: "email",
          placeholder: "Email",
          name: "email",
          value: values.email,
          onChange: handleChange,
          onBlur: handleBlur,
          isValid: touched.email && !errors.email,
          isInvalid: !!(touched.email && errors.email)
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Control.Feedback, {
          type: "invalid"
        }, errors.email), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Control.Feedback, null, "Looks good!")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Row, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, {
          as: react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"],
          md: "12",
          controlId: "validationFormikUsername"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Label, null, "Password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["InputGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Control, {
          type: "password",
          placeholder: "Enter Password",
          name: "password",
          value: values.password,
          onChange: handleChange,
          onBlur: handleBlur,
          isValid: touched.password && !errors.password,
          isInvalid: !!(touched.password && errors.password)
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Control.Feedback, {
          type: "invalid"
        }, errors.password), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Control.Feedback, null, "Looks good!")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Row, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, {
          as: react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"],
          md: "12",
          controlId: "validationFormikUsername"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Label, null, "Password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["InputGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Control, {
          type: "password",
          placeholder: "Confirm Password",
          name: "password_confirmation",
          value: values.password_confirmation,
          onChange: handleChange,
          onBlur: handleBlur,
          isValid: touched.password_confirmation && !errors.password_confirmation,
          isInvalid: !!(touched.password_confirmation && errors.password_confirmation)
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Control.Feedback, {
          type: "invalid"
        }, errors.password_confirmation), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Control.Feedback, null, "Looks good!")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
          type: "submit",
          disabled: !isValid
        }, "Register"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
          type: "button",
          onClick: handleReset,
          className: "float-right",
          variant: "warning"
        }, "Reset"));
      }))));
    }
  }]);

  return Register;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Register);

/***/ })

}]);