/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/projetos",{

/***/ "./api/index.js":
/*!**********************!*\
  !*** ./api/index.js ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Applications_XAMPP_xamppfiles_htdocs_mapa_da_informacao_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _Applications_XAMPP_xamppfiles_htdocs_mapa_da_informacao_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n // let url = process.env.STATUS == 'production' ? \"https://api.mapadainformacao.com.br/\" : \"https://staging-mapa-da-informacao-api.herokuapp.com/\"\n\nvar url = \"https://api.mapadainformacao.com.br/\";\n\nvar Api = function Api() {\n  var _this = this;\n\n  (0,_Applications_XAMPP_xamppfiles_htdocs_mapa_da_informacao_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, Api);\n\n  (0,_Applications_XAMPP_xamppfiles_htdocs_mapa_da_informacao_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(this, \"baseUrl\", url);\n\n  (0,_Applications_XAMPP_xamppfiles_htdocs_mapa_da_informacao_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(this, \"getMaps\", function () {\n    return axios__WEBPACK_IMPORTED_MODULE_2___default().get('/maps').then(function (response) {\n      return response;\n    });\n  });\n\n  (0,_Applications_XAMPP_xamppfiles_htdocs_mapa_da_informacao_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(this, \"getMap\", function (id) {\n    return axios__WEBPACK_IMPORTED_MODULE_2___default().get(\"/maps/\".concat(id)).then(function (response) {\n      return response;\n    });\n  });\n\n  (0,_Applications_XAMPP_xamppfiles_htdocs_mapa_da_informacao_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(this, \"getCategories\", function () {\n    return _this.get(\"/categories/\");\n  });\n\n  (0,_Applications_XAMPP_xamppfiles_htdocs_mapa_da_informacao_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(this, \"getNodes\", function () {\n    return _this.get(\"/nodes/\");\n  });\n\n  (axios__WEBPACK_IMPORTED_MODULE_2___default().defaults.baseURL) = url;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (new Api());\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBpL2luZGV4LmpzPzZjY2MiXSwibmFtZXMiOlsidXJsIiwiQXBpIiwiYXhpb3MiLCJ0aGVuIiwicmVzcG9uc2UiLCJpZCIsImdldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Q0FFQTs7QUFFQSxJQUFJQSxHQUFHLEdBQUcsc0NBQVY7O0lBRU1DLEcsR0FFSixlQUFjO0FBQUE7O0FBQUE7O0FBQUEsNkxBSUpELEdBSkk7O0FBQUEsNkxBTUosWUFBTTtBQUNkLFdBQU9FLGdEQUFBLENBQVUsT0FBVixFQUFtQkMsSUFBbkIsQ0FBd0IsVUFBQ0MsUUFBRDtBQUFBLGFBQWNBLFFBQWQ7QUFBQSxLQUF4QixDQUFQO0FBQ0QsR0FSYTs7QUFBQSw0TEFVTCxVQUFDQyxFQUFELEVBQVE7QUFDZixXQUFPSCxnREFBQSxpQkFBbUJHLEVBQW5CLEdBQXlCRixJQUF6QixDQUE4QixVQUFDQyxRQUFEO0FBQUEsYUFBY0EsUUFBZDtBQUFBLEtBQTlCLENBQVA7QUFDRCxHQVphOztBQUFBLG1NQWNFLFlBQU07QUFDcEIsV0FBTyxLQUFJLENBQUNFLEdBQUwsQ0FBUyxjQUFULENBQVA7QUFDRCxHQWhCYTs7QUFBQSw4TEFrQkgsWUFBTTtBQUNmLFdBQU8sS0FBSSxDQUFDQSxHQUFMLENBQVMsU0FBVCxDQUFQO0FBQ0QsR0FwQmE7O0FBQ1pKLGlFQUFBLEdBQXlCRixHQUF6QjtBQUNELEM7O0FBc0JILCtEQUFlLElBQUlDLEdBQUosRUFBZiIsImZpbGUiOiIuL2FwaS9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuLy8gbGV0IHVybCA9IHByb2Nlc3MuZW52LlNUQVRVUyA9PSAncHJvZHVjdGlvbicgPyBcImh0dHBzOi8vYXBpLm1hcGFkYWluZm9ybWFjYW8uY29tLmJyL1wiIDogXCJodHRwczovL3N0YWdpbmctbWFwYS1kYS1pbmZvcm1hY2FvLWFwaS5oZXJva3VhcHAuY29tL1wiXG5cbmxldCB1cmwgPSBcImh0dHBzOi8vYXBpLm1hcGFkYWluZm9ybWFjYW8uY29tLmJyL1wiXG5cbmNsYXNzIEFwaSB7XG4gIFxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBheGlvcy5kZWZhdWx0cy5iYXNlVVJMID0gdXJsXG4gIH1cblxuICBiYXNlVXJsID0gdXJsXG5cbiAgZ2V0TWFwcyA9ICgpID0+IHtcbiAgICByZXR1cm4gYXhpb3MuZ2V0KCcvbWFwcycpLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZSlcbiAgfTtcblxuICBnZXRNYXAgPSAoaWQpID0+IHtcbiAgICByZXR1cm4gYXhpb3MuZ2V0KGAvbWFwcy8ke2lkfWApLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZSlcbiAgfTtcblxuICBnZXRDYXRlZ29yaWVzID0gKCkgPT4ge1xuICAgIHJldHVybiB0aGlzLmdldChcIi9jYXRlZ29yaWVzL1wiKVxuICB9O1xuXG4gIGdldE5vZGVzID0gKCkgPT4ge1xuICAgIHJldHVybiB0aGlzLmdldChcIi9ub2Rlcy9cIilcbiAgfTtcblxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgQXBpKCk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./api/index.js\n");

/***/ })

});