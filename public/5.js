(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./resources/js/components/Login/Login.js":
/*!************************************************!*\
  !*** ./resources/js/components/Login/Login.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _utils_Auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/Auth */ "./resources/js/components/utils/Auth.js");





var schema = yup__WEBPACK_IMPORTED_MODULE_2__["object"]({
  email: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().email('Invalid email address').required('Email is a Required Field'),
  password: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().max(198, 'Must be 20 characters or less').required('Message is a Required Field')
});

function Login(props) {
  var processLogin = function processLogin(data) {
    //alert(JSON.stringify(data));

    /* axios.post('/api/login', data)
        .then((res) => {
            this.setState({ message_success: 'success' });
            location.replace("/login?created")     
          })
        .catch((error) => {
            let errors = error.response.data.errors;
            console.log(errors);
            this.setState({message_error: Object.entries(errors)});
          });  */
    axios.post('/api/login', data).then(function (response) {
      //setLoading(false);
      Object(_utils_Auth__WEBPACK_IMPORTED_MODULE_4__["setUserSession"])(response.data.access_token, response.data.user);
      props.history.push('/');
    })["catch"](function (error) {
      // setLoading(false);
      if (error.response.status === 401) setError(error.response.data.message);else setError("Something went wrong. Please try again later.");
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    id: "login"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row justify-content-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-sm-6 card mt-4 mb-4 p-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "mb-4"
  }, "Login to Create A Session"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Formik"], {
    validationSchema: schema // onSubmit={console.log}
    ,
    onSubmit: function onSubmit(values) {
      processLogin(values);
    },
    initialValues: {
      email: '',
      password: ''
    }
  }, function (_ref) {
    var handleSubmit = _ref.handleSubmit,
        handleChange = _ref.handleChange,
        handleBlur = _ref.handleBlur,
        values = _ref.values,
        touched = _ref.touched,
        isValid = _ref.isValid,
        errors = _ref.errors,
        isSubmitting = _ref.isSubmitting;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"], {
      noValidate: true,
      onSubmit: handleSubmit
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Row, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, {
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
    }, errors.password), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Control.Feedback, null, "Looks good!")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      type: "submit",
      disabled: isSubmitting
    }, "Login"));
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ })

}]);