webpackHotUpdate("static/development/pages/register.js",{

/***/ "./node_modules/function-bind/implementation.js":
false,

/***/ "./node_modules/function-bind/index.js":
false,

/***/ "./node_modules/has/src/index.js":
false,

/***/ "./node_modules/next/dist/build/polyfills/object-assign.js":
false,

/***/ "./node_modules/next/dist/build/polyfills/object.assign/index.js":
false,

/***/ "./node_modules/next/dist/client/link.js":
false,

/***/ "./node_modules/next/link.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/assertThisInitialized.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/getPrototypeOf.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/inherits.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
false,

/***/ "./node_modules/prop-types-exact/build/helpers/isPlainObject.js":
false,

/***/ "./node_modules/prop-types-exact/build/index.js":
false,

/***/ "./node_modules/prop-types/checkPropTypes.js":
false,

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
false,

/***/ "./node_modules/prop-types/index.js":
false,

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
false,

/***/ "./src/components/RegisterQuestions/index.tsx":
/*!****************************************************!*\
  !*** ./src/components/RegisterQuestions/index.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ \"./src/components/RegisterQuestions/styles.ts\");\n/* harmony import */ var _components_FormRegister__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/FormRegister */ \"./src/components/FormRegister/index.tsx\");\nvar _this = undefined,\n    _jsxFileName = \"/home/chrmartins/myprojects/challenge-questions/src/components/RegisterQuestions/index.tsx\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar RegisterQuestions = function RegisterQuestions(_ref) {\n  var _ref$title = _ref.title,\n      title = _ref$title === void 0 ? 'Formulário para Cadastro' : _ref$title,\n      _ref$description = _ref.description,\n      description = _ref$description === void 0 ? 'Crie aqui suas perguntas e respostas.' : _ref$description,\n      questionId = _ref.questionId;\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"Wrapper\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }\n  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"Title\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 9\n    }\n  }, title), __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"Description\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 9\n    }\n  }, description), __jsx(_components_FormRegister__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    questionId: questionId,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 9\n    }\n  })));\n};\n\n_c = RegisterQuestions;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RegisterQuestions);\n\nvar _c;\n\n$RefreshReg$(_c, \"RegisterQuestions\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9SZWdpc3RlclF1ZXN0aW9ucy9pbmRleC50c3g/YjRjMyJdLCJuYW1lcyI6WyJSZWdpc3RlclF1ZXN0aW9ucyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJxdWVzdGlvbklkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUM7QUFFRDs7QUFJQSxJQUFNQSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLE9BSXBCO0FBQUEsd0JBSEpDLEtBR0k7QUFBQSxNQUhKQSxLQUdJLDJCQUhJLDBCQUdKO0FBQUEsOEJBRkpDLFdBRUk7QUFBQSxNQUZKQSxXQUVJLGlDQUZVLHVDQUVWO0FBQUEsTUFESkMsVUFDSSxRQURKQSxVQUNJO0FBQ0osU0FDRSxtRUFDRSxNQUFDLCtDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFRSxNQUFDLDZDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBVUYsS0FBVixDQUZGLEVBR0UsTUFBQyxtREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWdCQyxXQUFoQixDQUhGLEVBSUUsTUFBQyxnRUFBRDtBQUFjLGNBQVUsRUFBRUMsVUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpGLENBREYsQ0FERjtBQVVELENBZkQ7O0tBQU1ILGlCO0FBZ0JTQSxnRkFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL1JlZ2lzdGVyUXVlc3Rpb25zL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbIu+7v2ltcG9ydCAqIGFzIFMgZnJvbSAnLi9zdHlsZXMnXG5cbmltcG9ydCBGb3JtUmVnaXN0ZXIgZnJvbSAnQGNvbXBvbmVudHMvRm9ybVJlZ2lzdGVyJ1xuXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmNvbnN0IFJlZ2lzdGVyUXVlc3Rpb25zID0gKHtcbiAgdGl0bGUgPSAnRm9ybXVsw6FyaW8gcGFyYSBDYWRhc3RybycsXG4gIGRlc2NyaXB0aW9uID0gJ0NyaWUgYXF1aSBzdWFzIHBlcmd1bnRhcyBlIHJlc3Bvc3Rhcy4nLFxuICBxdWVzdGlvbklkXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxTLldyYXBwZXI+XG4gICAgICBcbiAgICAgICAgPFMuVGl0bGU+e3RpdGxlfTwvUy5UaXRsZT5cbiAgICAgICAgPFMuRGVzY3JpcHRpb24+e2Rlc2NyaXB0aW9ufTwvUy5EZXNjcmlwdGlvbj5cbiAgICAgICAgPEZvcm1SZWdpc3RlciBxdWVzdGlvbklkPXtxdWVzdGlvbklkfSAvPlxuICAgICAgPC9TLldyYXBwZXI+XG4gICAgPC8+XG4gIClcbn1cbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdGVyUXVlc3Rpb25zXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/RegisterQuestions/index.tsx\n");

/***/ })

})