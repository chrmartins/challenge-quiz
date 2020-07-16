webpackHotUpdate("static/development/pages/register.js",{

/***/ "./src/components/FormRegister/styles.ts":
/*!***********************************************!*\
  !*** ./src/components/FormRegister/styles.ts ***!
  \***********************************************/
/*! exports provided: Wrapper, AnswerWrapper, OptionWrapper, OptionInput, Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Wrapper\", function() { return Wrapper; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AnswerWrapper\", function() { return AnswerWrapper; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"OptionWrapper\", function() { return OptionWrapper; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"OptionInput\", function() { return OptionInput; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Button\", function() { return Button; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nvar Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"styles__Wrapper\",\n  componentId: \"sc-35rka2-0\"\n})([\"width:100%;max-width:1120px;height:100vh;margin:0 auto;display:flex;margin-top:30px;align-items:center;display:flex;flex-direction:column;p{font-size:2rem;display:flex;flex-direction:row-reverse;align-items:left;justify-content:left;}h2{margin-top:10px;font-size:2rem;}li{list-style-type:none;display:flex;input{width:900px;height:35px;border-radius:5px;margin:10px auto;font-size:1.6rem;padding:10px;}}\"]);\nvar AnswerWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"styles__AnswerWrapper\",\n  componentId: \"sc-35rka2-1\"\n})([\"margin-top:20px;.correct{font-size:2rem;}\"]);\nvar OptionWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"styles__OptionWrapper\",\n  componentId: \"sc-35rka2-2\"\n})([\"margin-top:10px;display:flex;align-items:center;justify-content:center;\"]);\nvar OptionInput = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"styles__OptionInput\",\n  componentId: \"sc-35rka2-3\"\n})([\"margin-top:10px;display:flex;flex-direction:column;align-items:center;justify-content:center;label{font-size:1.3rem;margin-right:15px;align-items:center;justify-content:center;}input{margin:10px 15px;font-size:1.3rem;}\"]);\nvar Button = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].button.withConfig({\n  displayName: \"styles__Button\",\n  componentId: \"sc-35rka2-4\"\n})([\"width:120px;height:40px;background-color:#e0445b;color:#fff;font-size:1.3rem;font-weight:bold;border:0 solid;border-radius:5px;align-items:center;margin:25px 10px;\"]);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Gb3JtUmVnaXN0ZXIvc3R5bGVzLnRzP2E4YWIiXSwibmFtZXMiOlsiV3JhcHBlciIsInN0eWxlZCIsImRpdiIsIkFuc3dlcldyYXBwZXIiLCJPcHRpb25XcmFwcGVyIiwiT3B0aW9uSW5wdXQiLCJCdXR0b24iLCJidXR0b24iXSwibWFwcGluZ3MiOiJBQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTSxJQUFNQSxPQUFPLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsMlpBQWI7QUF1Q0EsSUFBTUMsYUFBYSxHQUFHRix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLGlEQUFuQjtBQVFBLElBQU1FLGFBQWEsR0FBR0gseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSwrRUFBbkI7QUFPQSxJQUFNRyxXQUFXLEdBQUdKLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsa09BQWpCO0FBcUJBLElBQU1JLE1BQU0sR0FBR0wseURBQU0sQ0FBQ00sTUFBVjtBQUFBO0FBQUE7QUFBQSwyS0FBWiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL0Zvcm1SZWdpc3Rlci9zdHlsZXMudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyLvu79pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5leHBvcnQgY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDExMjBweDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgcCB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuICAgIGFsaWduLWl0ZW1zOiBsZWZ0O1xuICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcbiAgfVxuXG4gIGgyIHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgfVxuXG4gIGxpIHtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgZGlzcGxheTogZmxleDtcblxuICAgIGlucHV0IHtcbiAgICAgIHdpZHRoOiA5MDBweDtcbiAgICAgIGhlaWdodDogMzVweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgIG1hcmdpbjogMTBweCBhdXRvO1xuICAgICAgZm9udC1zaXplOiAxLjZyZW07XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICAgIH1cbiAgfVxuYFxuXG5leHBvcnQgY29uc3QgQW5zd2VyV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbi10b3A6IDIwcHg7XG5cbiAgLmNvcnJlY3Qge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgfVxuYFxuXG5leHBvcnQgY29uc3QgT3B0aW9uV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuYFxuXG5leHBvcnQgY29uc3QgT3B0aW9uSW5wdXQgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICBsYWJlbCB7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cblxuICBpbnB1dCB7XG4gICAgbWFyZ2luOiAxMHB4IDE1cHg7XG5cbiAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgfVxuYFxuXG5leHBvcnQgY29uc3QgQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcbiAgd2lkdGg6IDEyMHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMDQ0NWI7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJvcmRlcjogMCBzb2xpZDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDI1cHggMTBweDtcbmBcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/FormRegister/styles.ts\n");

/***/ })

})