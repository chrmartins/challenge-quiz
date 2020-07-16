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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/ListView/index.tsx":
/*!*******************************************!*\
  !*** ./src/components/ListView/index.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var service_fetchGraphQl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! service/fetchGraphQl */ \"./src/service/fetchGraphQl.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ \"./src/components/ListView/styles.ts\");\nvar _jsxFileName = \"/home/chrmartins/myprojects/challenge-questions/src/components/ListView/index.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nfunction ViewQuestions() {\n  const {\n    0: listQuestions,\n    1: setListQuestions\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]); // eslint-disable-next-line @typescript-eslint/no-unused-vars\n\n  const {\n    0: question,\n    1: setQuestion\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('');\n  const {\n    0: reload,\n    1: setReload\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0); //Requisição ao servidor com graphql\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    async function getQuestions() {\n      const query = await Object(service_fetchGraphQl__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(`\n        query questions {\n          questions{\n            id\n            question\n            options\n            answerID\n          }\n        }\n      `);\n      const {\n        questions\n      } = query.data;\n      setListQuestions(questions);\n      console.log(questions);\n    }\n\n    getQuestions();\n  }, [reload]);\n\n  async function getQuestion(id) {\n    next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push(`/register?questionId=${id}`);\n  }\n\n  async function deleteQuestion(id) {\n    console.log('deletar');\n    const query = await Object(service_fetchGraphQl__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(`\n    mutation deleteQuestion($id: ID) {\n      deleteQuestion (\n        id: $id\n      ){\n        id\n      }\n    }\n  `, {\n      id: id\n    });\n\n    if (query.data) {\n      const {\n        deleteQuestion\n      } = query.data;\n\n      if (deleteQuestion === null) {\n        success('Questão excluída com sucesso.');\n      }\n    }\n  }\n\n  function success(text, ctrl = true) {\n    if (ctrl) {\n      alert(text);\n      setReload(reload + 1);\n    }\n\n    setQuestion('');\n  }\n\n  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__[\"Wrapper\"], {\n    className: \"ViewQuestions\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    id: \"list-question\",\n    className: \"box-div\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 7\n    }\n  }, __jsx(\"ul\", {\n    id: \"question-ul\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 9\n    }\n  }, listQuestions.map((quest, index) => __jsx(\"li\", {\n    key: quest.id,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 15\n    }\n  }, __jsx(\"span\", {\n    className: \"question-ul-number\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 17\n    }\n  }, index + 1), ' ', __jsx(\"span\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 17\n    }\n  }, quest.question)), __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 15\n    }\n  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n    className: \"btn-edit\",\n    onClick: () => getQuestion(quest.id),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 17\n    }\n  }, \"EDITAR\"), __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n    className: \"btn-del\",\n    onClick: () => deleteQuestion(quest.id),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 17\n    }\n  }, \"EXCLUIR\")))))));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ViewQuestions);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MaXN0Vmlldy9pbmRleC50c3g/NzdiYiJdLCJuYW1lcyI6WyJWaWV3UXVlc3Rpb25zIiwibGlzdFF1ZXN0aW9ucyIsInNldExpc3RRdWVzdGlvbnMiLCJ1c2VTdGF0ZSIsInF1ZXN0aW9uIiwic2V0UXVlc3Rpb24iLCJyZWxvYWQiLCJzZXRSZWxvYWQiLCJ1c2VFZmZlY3QiLCJnZXRRdWVzdGlvbnMiLCJxdWVyeSIsImZldGNoR3JhcGhRbCIsInF1ZXN0aW9ucyIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiZ2V0UXVlc3Rpb24iLCJpZCIsIlJvdXRlciIsInB1c2giLCJkZWxldGVRdWVzdGlvbiIsInN1Y2Nlc3MiLCJ0ZXh0IiwiY3RybCIsImFsZXJ0IiwibWFwIiwicXVlc3QiLCJpbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUM7QUFDRDtBQUNBO0FBRUE7O0FBRUEsU0FBU0EsYUFBVCxHQUF5QjtBQUN2QixRQUFNO0FBQUEsT0FBQ0MsYUFBRDtBQUFBLE9BQWdCQztBQUFoQixNQUFvQ0Msc0RBQVEsQ0FBQyxFQUFELENBQWxELENBRHVCLENBR3ZCOztBQUNBLFFBQU07QUFBQSxPQUFDQyxRQUFEO0FBQUEsT0FBV0M7QUFBWCxNQUEwQkYsc0RBQVEsQ0FBQyxFQUFELENBQXhDO0FBRUEsUUFBTTtBQUFBLE9BQUNHLE1BQUQ7QUFBQSxPQUFTQztBQUFULE1BQXNCSixzREFBUSxDQUFDLENBQUQsQ0FBcEMsQ0FOdUIsQ0FRdkI7O0FBQ0FLLHlEQUFTLENBQUMsTUFBTTtBQUNkLG1CQUFlQyxZQUFmLEdBQThCO0FBQzVCLFlBQU1DLEtBQUssR0FBRyxNQUFNQyxvRUFBWSxDQUFFOzs7Ozs7Ozs7T0FBRixDQUFoQztBQVdBLFlBQU07QUFBRUM7QUFBRixVQUFnQkYsS0FBSyxDQUFDRyxJQUE1QjtBQUNBWCxzQkFBZ0IsQ0FBQ1UsU0FBRCxDQUFoQjtBQUVBRSxhQUFPLENBQUNDLEdBQVIsQ0FBWUgsU0FBWjtBQUNEOztBQUVESCxnQkFBWTtBQUNiLEdBcEJRLEVBb0JOLENBQUNILE1BQUQsQ0FwQk0sQ0FBVDs7QUFzQkEsaUJBQWVVLFdBQWYsQ0FBMkJDLEVBQTNCLEVBQXVDO0FBQ3JDQyxzREFBTSxDQUFDQyxJQUFQLENBQWEsd0JBQXVCRixFQUFHLEVBQXZDO0FBQ0Q7O0FBRUQsaUJBQWVHLGNBQWYsQ0FBOEJILEVBQTlCLEVBQTBDO0FBQ3hDSCxXQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaO0FBRUEsVUFBTUwsS0FBSyxHQUFHLE1BQU1DLG9FQUFZLENBQzdCOzs7Ozs7OztHQUQ2QixFQVU5QjtBQUFFTSxRQUFFLEVBQUVBO0FBQU4sS0FWOEIsQ0FBaEM7O0FBYUEsUUFBSVAsS0FBSyxDQUFDRyxJQUFWLEVBQWdCO0FBQ2QsWUFBTTtBQUFFTztBQUFGLFVBQXFCVixLQUFLLENBQUNHLElBQWpDOztBQUVBLFVBQUlPLGNBQWMsS0FBSyxJQUF2QixFQUE2QjtBQUMzQkMsZUFBTyxDQUFDLCtCQUFELENBQVA7QUFDRDtBQUNGO0FBQ0Y7O0FBRUQsV0FBU0EsT0FBVCxDQUFpQkMsSUFBakIsRUFBdUJDLElBQUksR0FBRyxJQUE5QixFQUFvQztBQUNsQyxRQUFJQSxJQUFKLEVBQVU7QUFDUkMsV0FBSyxDQUFDRixJQUFELENBQUw7QUFDQWYsZUFBUyxDQUFDRCxNQUFNLEdBQUcsQ0FBVixDQUFUO0FBQ0Q7O0FBRURELGVBQVcsQ0FBQyxFQUFELENBQVg7QUFDRDs7QUFFRCxTQUNFLE1BQUMsK0NBQUQ7QUFBVyxhQUFTLEVBQUMsZUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssTUFBRSxFQUFDLGVBQVI7QUFBd0IsYUFBUyxFQUFDLFNBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLE1BQUUsRUFBQyxhQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0osYUFBYSxDQUFDd0IsR0FBZCxDQUFrQixDQUFDQyxLQUFELEVBQVFDLEtBQVIsS0FDakI7QUFBSSxPQUFHLEVBQUVELEtBQUssQ0FBQ1QsRUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQU0sYUFBUyxFQUFDLG9CQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXNDVSxLQUFLLEdBQUcsQ0FBOUMsQ0FERixFQUMwRCxHQUQxRCxFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBT0QsS0FBSyxDQUFDdEIsUUFBYixDQUZGLENBREYsRUFLRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw4Q0FBRDtBQUNFLGFBQVMsRUFBQyxVQURaO0FBRUUsV0FBTyxFQUFFLE1BQU1ZLFdBQVcsQ0FBQ1UsS0FBSyxDQUFDVCxFQUFQLENBRjVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixFQU9FLE1BQUMsOENBQUQ7QUFDRSxhQUFTLEVBQUMsU0FEWjtBQUVFLFdBQU8sRUFBRSxNQUFNRyxjQUFjLENBQUNNLEtBQUssQ0FBQ1QsRUFBUCxDQUYvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUEYsQ0FMRixDQURELENBREgsQ0FERixDQURGLENBREY7QUE4QkQ7O0FBRWNqQiw0RUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL0xpc3RWaWV3L2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbIu+7v2ltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgZmV0Y2hHcmFwaFFsIGZyb20gJ3NlcnZpY2UvZmV0Y2hHcmFwaFFsJ1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcblxuaW1wb3J0ICogYXMgUyBmcm9tICcuL3N0eWxlcydcblxuZnVuY3Rpb24gVmlld1F1ZXN0aW9ucygpIHtcbiAgY29uc3QgW2xpc3RRdWVzdGlvbnMsIHNldExpc3RRdWVzdGlvbnNdID0gdXNlU3RhdGUoW10pXG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICBjb25zdCBbcXVlc3Rpb24sIHNldFF1ZXN0aW9uXSA9IHVzZVN0YXRlKCcnKVxuXG4gIGNvbnN0IFtyZWxvYWQsIHNldFJlbG9hZF0gPSB1c2VTdGF0ZSgwKVxuXG4gIC8vUmVxdWlzacOnw6NvIGFvIHNlcnZpZG9yIGNvbSBncmFwaHFsXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0UXVlc3Rpb25zKCkge1xuICAgICAgY29uc3QgcXVlcnkgPSBhd2FpdCBmZXRjaEdyYXBoUWwoYFxuICAgICAgICBxdWVyeSBxdWVzdGlvbnMge1xuICAgICAgICAgIHF1ZXN0aW9uc3tcbiAgICAgICAgICAgIGlkXG4gICAgICAgICAgICBxdWVzdGlvblxuICAgICAgICAgICAgb3B0aW9uc1xuICAgICAgICAgICAgYW5zd2VySURcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGApXG5cbiAgICAgIGNvbnN0IHsgcXVlc3Rpb25zIH0gPSBxdWVyeS5kYXRhXG4gICAgICBzZXRMaXN0UXVlc3Rpb25zKHF1ZXN0aW9ucylcblxuICAgICAgY29uc29sZS5sb2cocXVlc3Rpb25zKVxuICAgIH1cblxuICAgIGdldFF1ZXN0aW9ucygpXG4gIH0sIFtyZWxvYWRdKVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGdldFF1ZXN0aW9uKGlkOiBzdHJpbmcpIHtcbiAgICBSb3V0ZXIucHVzaChgL3JlZ2lzdGVyP3F1ZXN0aW9uSWQ9JHtpZH1gKVxuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gZGVsZXRlUXVlc3Rpb24oaWQ6IHN0cmluZykge1xuICAgIGNvbnNvbGUubG9nKCdkZWxldGFyJylcblxuICAgIGNvbnN0IHF1ZXJ5ID0gYXdhaXQgZmV0Y2hHcmFwaFFsKFxuICAgICAgYFxuICAgIG11dGF0aW9uIGRlbGV0ZVF1ZXN0aW9uKCRpZDogSUQpIHtcbiAgICAgIGRlbGV0ZVF1ZXN0aW9uIChcbiAgICAgICAgaWQ6ICRpZFxuICAgICAgKXtcbiAgICAgICAgaWRcbiAgICAgIH1cbiAgICB9XG4gIGAsXG4gICAgICB7IGlkOiBpZCB9XG4gICAgKVxuXG4gICAgaWYgKHF1ZXJ5LmRhdGEpIHtcbiAgICAgIGNvbnN0IHsgZGVsZXRlUXVlc3Rpb24gfSA9IHF1ZXJ5LmRhdGFcblxuICAgICAgaWYgKGRlbGV0ZVF1ZXN0aW9uID09PSBudWxsKSB7XG4gICAgICAgIHN1Y2Nlc3MoJ1F1ZXN0w6NvIGV4Y2x1w61kYSBjb20gc3VjZXNzby4nKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHN1Y2Nlc3ModGV4dCwgY3RybCA9IHRydWUpIHtcbiAgICBpZiAoY3RybCkge1xuICAgICAgYWxlcnQodGV4dClcbiAgICAgIHNldFJlbG9hZChyZWxvYWQgKyAxKVxuICAgIH1cblxuICAgIHNldFF1ZXN0aW9uKCcnKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Uy5XcmFwcGVyIGNsYXNzTmFtZT1cIlZpZXdRdWVzdGlvbnNcIj5cbiAgICAgIDxkaXYgaWQ9XCJsaXN0LXF1ZXN0aW9uXCIgY2xhc3NOYW1lPVwiYm94LWRpdlwiPlxuICAgICAgICA8dWwgaWQ9XCJxdWVzdGlvbi11bFwiPlxuICAgICAgICAgIHtsaXN0UXVlc3Rpb25zLm1hcCgocXVlc3QsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8bGkga2V5PXtxdWVzdC5pZH0+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicXVlc3Rpb24tdWwtbnVtYmVyXCI+e2luZGV4ICsgMX08L3NwYW4+eycgJ31cbiAgICAgICAgICAgICAgICA8c3Bhbj57cXVlc3QucXVlc3Rpb259PC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8Uy5CdXR0b25cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0bi1lZGl0XCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGdldFF1ZXN0aW9uKHF1ZXN0LmlkKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBFRElUQVJcbiAgICAgICAgICAgICAgICA8L1MuQnV0dG9uPlxuICAgICAgICAgICAgICAgIDxTLkJ1dHRvblxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuLWRlbFwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBkZWxldGVRdWVzdGlvbihxdWVzdC5pZCl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgRVhDTFVJUlxuICAgICAgICAgICAgICAgIDwvUy5CdXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgIDwvUy5XcmFwcGVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFZpZXdRdWVzdGlvbnNcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/ListView/index.tsx\n");

/***/ }),

/***/ "./src/components/ListView/styles.ts":
/*!*******************************************!*\
  !*** ./src/components/ListView/styles.ts ***!
  \*******************************************/
/*! exports provided: Wrapper, Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Wrapper\", function() { return Wrapper; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Button\", function() { return Button; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section.withConfig({\n  displayName: \"styles__Wrapper\",\n  componentId: \"vajq9v-0\"\n})([\"width:100%;max-width:1120px;height:100vh;margin:0 auto;display:flex;align-items:center;justify-content:center;ul{margin-top:80px;list-style-type:none;li{display:flex;flex-direction:column;font-size:1.6rem;}}\"]);\nconst Button = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({\n  displayName: \"styles__Button\",\n  componentId: \"vajq9v-1\"\n})([\"width:90px;height:30px;background-color:#e0445b;color:#fff;font-size:1.3rem;font-weight:bold;border:0 solid;border-radius:5px;align-items:center;margin:10px 10px 35px 10px;\"]);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MaXN0Vmlldy9zdHlsZXMudHM/MzA3YiJdLCJuYW1lcyI6WyJXcmFwcGVyIiwic3R5bGVkIiwic2VjdGlvbiIsIkJ1dHRvbiIsImJ1dHRvbiJdLCJtYXBwaW5ncyI6IkFBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU0sTUFBTUEsT0FBTyxHQUFHQyx3REFBTSxDQUFDQyxPQUFWO0FBQUE7QUFBQTtBQUFBLHVOQUFiO0FBc0JBLE1BQU1DLE1BQU0sR0FBR0Ysd0RBQU0sQ0FBQ0csTUFBVjtBQUFBO0FBQUE7QUFBQSxvTEFBWiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL0xpc3RWaWV3L3N0eWxlcy50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIu+7v2ltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmV4cG9ydCBjb25zdCBXcmFwcGVyID0gc3R5bGVkLnNlY3Rpb25gXG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDExMjBweDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgbWFyZ2luOiAwIGF1dG87XG5cbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgdWwge1xuICAgIG1hcmdpbi10b3A6IDgwcHg7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuXG4gICAgbGkge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgICB9XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXG4gIHdpZHRoOiA5MHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMDQ0NWI7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJvcmRlcjogMCBzb2xpZDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDEwcHggMTBweCAzNXB4IDEwcHg7XG5gXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/ListView/styles.ts\n");

/***/ }),

/***/ "./src/components/ViewQuestions/index.tsx":
/*!************************************************!*\
  !*** ./src/components/ViewQuestions/index.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ \"./src/components/ViewQuestions/styles.ts\");\n/* harmony import */ var _components_ListView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/ListView */ \"./src/components/ListView/index.tsx\");\nvar _jsxFileName = \"/home/chrmartins/myprojects/challenge-questions/src/components/ViewQuestions/index.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst ViewQuestions = ({\n  title = 'Perguntas Cadastradas',\n  description = 'Edite ou exclua suas perguntas'\n}) => {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"Wrapper\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }\n  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"Title\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 9\n    }\n  }, title), __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"Description\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 9\n    }\n  }, description), __jsx(_components_ListView__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 9\n    }\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ViewQuestions);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9WaWV3UXVlc3Rpb25zL2luZGV4LnRzeD81MWI4Il0sIm5hbWVzIjpbIlZpZXdRdWVzdGlvbnMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFDO0FBRUQ7O0FBRUEsTUFBTUEsYUFBYSxHQUFHLENBQUM7QUFDckJDLE9BQUssR0FBRyx1QkFEYTtBQUVyQkMsYUFBVyxHQUFHO0FBRk8sQ0FBRCxLQUdoQjtBQUNKLFNBQ0UsbUVBQ0UsTUFBQywrQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw2Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVVELEtBQVYsQ0FERixFQUVFLE1BQUMsbURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFnQkMsV0FBaEIsQ0FGRixFQUdFLE1BQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhGLENBREYsQ0FERjtBQVNELENBYkQ7O0FBY2VGLDRFQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvVmlld1F1ZXN0aW9ucy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyLvu79pbXBvcnQgKiBhcyBTIGZyb20gJy4vc3R5bGVzJ1xuXG5pbXBvcnQgTGlzdFZpZXcgZnJvbSAnQGNvbXBvbmVudHMvTGlzdFZpZXcnXG5cbmNvbnN0IFZpZXdRdWVzdGlvbnMgPSAoe1xuICB0aXRsZSA9ICdQZXJndW50YXMgQ2FkYXN0cmFkYXMnLFxuICBkZXNjcmlwdGlvbiA9ICdFZGl0ZSBvdSBleGNsdWEgc3VhcyBwZXJndW50YXMnXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxTLldyYXBwZXI+XG4gICAgICAgIDxTLlRpdGxlPnt0aXRsZX08L1MuVGl0bGU+XG4gICAgICAgIDxTLkRlc2NyaXB0aW9uPntkZXNjcmlwdGlvbn08L1MuRGVzY3JpcHRpb24+XG4gICAgICAgIDxMaXN0VmlldyAvPlxuICAgICAgPC9TLldyYXBwZXI+XG4gICAgPC8+XG4gIClcbn1cbmV4cG9ydCBkZWZhdWx0IFZpZXdRdWVzdGlvbnNcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/ViewQuestions/index.tsx\n");

/***/ }),

/***/ "./src/components/ViewQuestions/styles.ts":
/*!************************************************!*\
  !*** ./src/components/ViewQuestions/styles.ts ***!
  \************************************************/
/*! exports provided: Wrapper, Title, Description */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Wrapper\", function() { return Wrapper; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Title\", function() { return Title; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Description\", function() { return Description; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.main.withConfig({\n  displayName: \"styles__Wrapper\",\n  componentId: \"j1qd2t-0\"\n})([\"background-color:#221c41;color:#fff;width:100%;height:100%;padding:3rem;text-align:center;align-items:center;justify-content:top;display:flex;flex-direction:column;\"]);\nconst Title = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h1.withConfig({\n  displayName: \"styles__Title\",\n  componentId: \"j1qd2t-1\"\n})([\"font-size:4rem;\"]);\nconst Description = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h2.withConfig({\n  displayName: \"styles__Description\",\n  componentId: \"j1qd2t-2\"\n})([\"padding-top:10px;font-size:2rem;color:#e0445b;\"]);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9WaWV3UXVlc3Rpb25zL3N0eWxlcy50cz9jNDA4Il0sIm5hbWVzIjpbIldyYXBwZXIiLCJzdHlsZWQiLCJtYWluIiwiVGl0bGUiLCJoMSIsIkRlc2NyaXB0aW9uIiwiaDIiXSwibWFwcGluZ3MiOiJBQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU0sTUFBTUEsT0FBTyxHQUFHQyx3REFBTSxDQUFDQyxJQUFWO0FBQUE7QUFBQTtBQUFBLDRLQUFiO0FBWUEsTUFBTUMsS0FBSyxHQUFHRix3REFBTSxDQUFDRyxFQUFWO0FBQUE7QUFBQTtBQUFBLHVCQUFYO0FBR0EsTUFBTUMsV0FBVyxHQUFHSix3REFBTSxDQUFDSyxFQUFWO0FBQUE7QUFBQTtBQUFBLHNEQUFqQiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL1ZpZXdRdWVzdGlvbnMvc3R5bGVzLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsi77u/aW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuZXhwb3J0IGNvbnN0IFdyYXBwZXIgPSBzdHlsZWQubWFpbmBcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMWM0MTtcbiAgY29sb3I6ICNmZmY7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDNyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiB0b3A7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5gXG5leHBvcnQgY29uc3QgVGl0bGUgPSBzdHlsZWQuaDFgXG4gIGZvbnQtc2l6ZTogNHJlbTtcbmBcbmV4cG9ydCBjb25zdCBEZXNjcmlwdGlvbiA9IHN0eWxlZC5oMmBcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgY29sb3I6ICNlMDQ0NWI7XG5gXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/ViewQuestions/styles.ts\n");

/***/ }),

/***/ "./src/pages/viewlist.tsx":
/*!********************************!*\
  !*** ./src/pages/viewlist.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return View; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_ViewQuestions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/ViewQuestions */ \"./src/components/ViewQuestions/index.tsx\");\nvar _jsxFileName = \"/home/chrmartins/myprojects/challenge-questions/src/pages/viewlist.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction View() {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_ViewQuestions__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 7\n    }\n  }));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvdmlld2xpc3QudHN4P2I3ZWMiXSwibmFtZXMiOlsiVmlldyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQztBQUVjLFNBQVNBLElBQVQsR0FBZ0I7QUFDN0IsU0FDRSxtRUFDRSxNQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGO0FBS0QiLCJmaWxlIjoiLi9zcmMvcGFnZXMvdmlld2xpc3QudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsi77u/aW1wb3J0IFZpZXdRdWVzdGlvbnMgZnJvbSAnLi4vY29tcG9uZW50cy9WaWV3UXVlc3Rpb25zJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBWaWV3KCkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Vmlld1F1ZXN0aW9ucyAvPlxuICAgIDwvPlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/viewlist.tsx\n");

/***/ }),

/***/ "./src/service/fetchGraphQl.js":
/*!*************************************!*\
  !*** ./src/service/fetchGraphQl.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nasync function fetchGraphQL(text, variables) {\n  const response = await fetch('http://localhost:3001', {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json'\n    },\n    body: JSON.stringify({\n      query: text,\n      variables\n    })\n  });\n  return await response.json();\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (fetchGraphQL);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZS9mZXRjaEdyYXBoUWwuanM/YWExYiJdLCJuYW1lcyI6WyJmZXRjaEdyYXBoUUwiLCJ0ZXh0IiwidmFyaWFibGVzIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInF1ZXJ5IiwianNvbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxlQUFlQSxZQUFmLENBQTRCQyxJQUE1QixFQUFrQ0MsU0FBbEMsRUFBNkM7QUFDM0MsUUFBTUMsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBQyx1QkFBRCxFQUEwQjtBQUNwREMsVUFBTSxFQUFFLE1BRDRDO0FBRXBEQyxXQUFPLEVBQUU7QUFDUCxzQkFBZ0I7QUFEVCxLQUYyQztBQUtwREMsUUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUNuQkMsV0FBSyxFQUFFVCxJQURZO0FBRW5CQztBQUZtQixLQUFmO0FBTDhDLEdBQTFCLENBQTVCO0FBV0EsU0FBTyxNQUFNQyxRQUFRLENBQUNRLElBQVQsRUFBYjtBQUNEOztBQUVjWCwyRUFBZiIsImZpbGUiOiIuL3NyYy9zZXJ2aWNlL2ZldGNoR3JhcGhRbC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImFzeW5jIGZ1bmN0aW9uIGZldGNoR3JhcGhRTCh0ZXh0LCB2YXJpYWJsZXMpIHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAxJywge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIHF1ZXJ5OiB0ZXh0LFxuICAgICAgdmFyaWFibGVzXG4gICAgfSlcbiAgfSlcblxuICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZldGNoR3JhcGhRTFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/service/fetchGraphQl.js\n");

/***/ }),

/***/ 6:
/*!**************************************!*\
  !*** multi ./src/pages/viewlist.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/chrmartins/myprojects/challenge-questions/src/pages/viewlist.tsx */"./src/pages/viewlist.tsx");


/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiP2Y1YWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic3R5bGVkLWNvbXBvbmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-components\n");

/***/ })

/******/ });