/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/projetos",{

/***/ "./pages/projetos/index.js":
/*!*********************************!*\
  !*** ./pages/projetos/index.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProjectsPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Title__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Title */ \"./components/Title/index.js\");\n/* harmony import */ var _components_Text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Text */ \"./components/Text/index.js\");\n/* harmony import */ var _api_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../api/index */ \"./api/index.js\");\n/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styled */ \"./pages/projetos/styled.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Applications/XAMPP/xamppfiles/htdocs/mapa-da-informacao/pages/projetos/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction ProjectsPage() {\n  _s();\n\n  var _this = this;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),\n      projects = _useState[0],\n      setProjects = _useState[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    _api_index__WEBPACK_IMPORTED_MODULE_7__.default.getMaps().then(function (response) {\n      var _response$data;\n\n      if ((response === null || response === void 0 ? void 0 : (_response$data = response.data) === null || _response$data === void 0 ? void 0 : _response$data.length) !== 0) {\n        setProjects(response.data);\n      }\n    });\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n        children: \"Projetos - Portal Mapa da Informa\\xE7\\xE3o\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n        property: \"og:title\",\n        content: \"Projetos - Portal Mapa da Informa\\xE7\\xE3\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n        property: \"og:description\",\n        content: \"A informa\\xE7\\xE3o \\xE9 a melhor ferramenta para tomadas de decis\\xF5es. Conhe\\xE7a aqui os projetos do Portal Mapa da Informa\\xE7\\xE3o\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n        property: \"og:url\",\n        content: \"https://mapadainformacao.com.br/\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n        name: \"description\",\n        content: \"A informa\\xE7\\xE3o \\xE9 a melhor ferramenta para tomadas de decis\\xF5es. Conhe\\xE7a aqui os projetos do Portal Mapa da Informa\\xE7\\xE3o\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n        property: \"og:image\",\n        content:  false ? 0 : 'http://mapa-da-informacao.herokuapp.com/share.jpg'\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n        name: \"twitter:image\",\n        content:  false ? 0 : 'http://mapa-da-informacao.herokuapp.com/share.jpg'\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n        property: \"og:site_name\",\n        content: \"Projetos do Portal do Mapa da Informa\\xE7\\xE3o\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 9\n      }, this),  false ? /*#__PURE__*/0 : null,  false ? /*#__PURE__*/0 : null,  false ? /*#__PURE__*/0 : null]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_8__.ProjectsWrapper, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Title__WEBPACK_IMPORTED_MODULE_5__.default, {\n        lightText: 'Projetos'\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Text__WEBPACK_IMPORTED_MODULE_6__.default, {\n        text: \"A informa\\xE7\\xE3o \\xE9 um poderoso instrumento para tomadas de decis\\xF5es. O Portal do Mapa da Informa\\xE7\\xE3o apoia a governan\\xE7a de dados dos governos federal, estadual e municipal, proporcionando um maior entendimento do sistema de informa\\xE7\\xE3o e do objeto a ser aprofundado.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Text__WEBPACK_IMPORTED_MODULE_6__.default, {\n        text: \"Confira aqui os projetos que j\\xE1 foram feitos:\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_8__.ProjectList, {\n        children: projects.length !== 0 ? projects.map(function (item) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_8__.ProjectItem, {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n              alt: item === null || item === void 0 ? void 0 : item.title,\n              src: \"\".concat(item === null || item === void 0 ? void 0 : item.project_cover),\n              width: 380,\n              height: 280\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 45,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_8__.ProjectInfo, {\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                href: {\n                  pathname: \"/projetos/[map]/\",\n                  query: {\n                    map: item === null || item === void 0 ? void 0 : item.url_map,\n                    id: item === null || item === void 0 ? void 0 : item.id\n                  }\n                },\n                as: \"/projetos/\".concat(item === null || item === void 0 ? void 0 : item.url_map, \"/\"),\n                children: item === null || item === void 0 ? void 0 : item.title\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 52,\n                columnNumber: 17\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Text__WEBPACK_IMPORTED_MODULE_6__.default, {\n                text: item === null || item === void 0 ? void 0 : item.summary\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 55,\n                columnNumber: 17\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 51,\n              columnNumber: 15\n            }, _this)]\n          }, item === null || item === void 0 ? void 0 : item.id, true, {\n            fileName: _jsxFileName,\n            lineNumber: 44,\n            columnNumber: 13\n          }, _this);\n        }) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          children: \"Loading ...\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 58,\n          columnNumber: 16\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n_s(ProjectsPage, \"TSrpuQX6QU8EgjQSxaAzj2u9i4o=\");\n\n_c = ProjectsPage;\n\nvar _c;\n\n$RefreshReg$(_c, \"ProjectsPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvamV0b3MvaW5kZXguanM/NjFhMiJdLCJuYW1lcyI6WyJQcm9qZWN0c1BhZ2UiLCJ1c2VTdGF0ZSIsInByb2plY3RzIiwic2V0UHJvamVjdHMiLCJ1c2VFZmZlY3QiLCJBcGkiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwibGVuZ3RoIiwicHJvY2VzcyIsIm1hcCIsIml0ZW0iLCJ0aXRsZSIsInByb2plY3RfY292ZXIiLCJwYXRobmFtZSIsInF1ZXJ5IiwidXJsX21hcCIsImlkIiwic3VtbWFyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxZQUFULEdBQXdCO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ0xDLCtDQUFRLENBQUMsRUFBRCxDQURIO0FBQUEsTUFDOUJDLFFBRDhCO0FBQUEsTUFDcEJDLFdBRG9COztBQUVyQ0Msa0RBQVMsQ0FBRSxZQUFNO0FBQ2ZDLDJEQUFBLEdBQWNDLElBQWQsQ0FBbUIsVUFBQ0MsUUFBRCxFQUFjO0FBQUE7O0FBQy9CLFVBQUksQ0FBQUEsUUFBUSxTQUFSLElBQUFBLFFBQVEsV0FBUiw4QkFBQUEsUUFBUSxDQUFFQyxJQUFWLGtFQUFnQkMsTUFBaEIsTUFBMkIsQ0FBL0IsRUFBa0M7QUFDaENOLG1CQUFXLENBQUNJLFFBQVEsQ0FBQ0MsSUFBVixDQUFYO0FBQ0Q7QUFDRixLQUpEO0FBS0QsR0FOUSxFQU1OLEVBTk0sQ0FBVDtBQVFBLHNCQUNFO0FBQUEsNEJBQ0UsOERBQUMsa0RBQUQ7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBTSxnQkFBUSxFQUFDLFVBQWY7QUFBMEIsZUFBTyxFQUFDO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixlQUdFO0FBQU0sZ0JBQVEsRUFBQyxnQkFBZjtBQUFnQyxlQUFP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QUFBQTtBQUFBLFlBaEJGO0FBQUEsa0JBREY7QUEyQ0Q7O0dBckR1QmxCLFk7O0tBQUFBLFkiLCJmaWxlIjoiLi9wYWdlcy9wcm9qZXRvcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IFRpdGxlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvVGl0bGUnXG5pbXBvcnQgVGV4dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL1RleHQnXG5pbXBvcnQgQXBpIGZyb20gJy4uLy4uL2FwaS9pbmRleCdcbmltcG9ydCAqIGFzIFMgZnJvbSAnLi9zdHlsZWQnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RzUGFnZSgpIHtcbiAgY29uc3QgW3Byb2plY3RzLCBzZXRQcm9qZWN0c10gPSB1c2VTdGF0ZShbXSk7XG4gIHVzZUVmZmVjdCggKCkgPT4ge1xuICAgIEFwaS5nZXRNYXBzKCkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIGlmIChyZXNwb25zZT8uZGF0YT8ubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIHNldFByb2plY3RzKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgfVxuICAgIH0pICBcbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5Qcm9qZXRvcyAtIFBvcnRhbCBNYXBhIGRhIEluZm9ybWHDp8OjbzwvdGl0bGU+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PVwiUHJvamV0b3MgLSBQb3J0YWwgTWFwYSBkYSBJbmZvcm1hw6fDo1wiLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJBIGluZm9ybWHDp8OjbyDDqSBhIG1lbGhvciBmZXJyYW1lbnRhIHBhcmEgdG9tYWRhcyBkZSBkZWNpc8O1ZXMuIENvbmhlw6dhIGFxdWkgb3MgcHJvamV0b3MgZG8gUG9ydGFsIE1hcGEgZGEgSW5mb3JtYcOnw6NvXCIvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnVybFwiIGNvbnRlbnQ9XCJodHRwczovL21hcGFkYWluZm9ybWFjYW8uY29tLmJyL1wiLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkEgaW5mb3JtYcOnw6NvIMOpIGEgbWVsaG9yIGZlcnJhbWVudGEgcGFyYSB0b21hZGFzIGRlIGRlY2lzw7Vlcy4gQ29uaGXDp2EgYXF1aSBvcyBwcm9qZXRvcyBkbyBQb3J0YWwgTWFwYSBkYSBJbmZvcm1hw6fDo29cIi8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2VcIiBjb250ZW50PXtwcm9jZXNzLmVudi5TVEFUVVMgPT0gJ3Byb2R1Y3Rpb24nID8gJ2h0dHBzOi8vbWFwYWRhaW5mb3JtYWNhby5jb20uYnIvc2hhcmUuanBnJyA6ICdodHRwOi8vbWFwYS1kYS1pbmZvcm1hY2FvLmhlcm9rdWFwcC5jb20vc2hhcmUuanBnJ30gLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6aW1hZ2VcIiBjb250ZW50PXtwcm9jZXNzLmVudi5TVEFUVVMgPT0gJ3Byb2R1Y3Rpb24nID8gJ2h0dHBzOi8vbWFwYWRhaW5mb3JtYWNhby5jb20uYnIvc2hhcmUuanBnJyA6ICdodHRwOi8vbWFwYS1kYS1pbmZvcm1hY2FvLmhlcm9rdWFwcC5jb20vc2hhcmUuanBnJ30gIC8+IFxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnNpdGVfbmFtZVwiIGNvbnRlbnQ9XCJQcm9qZXRvcyBkbyBQb3J0YWwgZG8gTWFwYSBkYSBJbmZvcm1hw6fDo29cIi8+XG5cbiAgICAgICAgeyBwcm9jZXNzLmVudi5TVEFUVVMgPT0gJ3Byb2R1Y3Rpb24nID8gPG1ldGEgbmFtZT1cInJvYm90c1wiIGNvbnRlbnQ9XCJpbmRleCwgZm9sbG93XCIgLz4gOiBudWxsIH1cbiAgICAgICAgeyBwcm9jZXNzLmVudi5TVEFUVVMgPT0gJ3Byb2R1Y3Rpb24nID8gPG1ldGEgbmFtZT1cImdvb2dsZWJvdFwiIGNvbnRlbnQ9XCJpbmRleCwgZm9sbG93LCBtYXgtc25pcHBldDotMSwgbWF4LWltYWdlLXByZXZpZXc6bGFyZ2UsIG1heC12aWRlby1wcmV2aWV3Oi0xXCIgLz4gOiBudWxsIH1cbiAgICAgICAgeyBwcm9jZXNzLmVudi5TVEFUVVMgPT0gJ3Byb2R1Y3Rpb24nID8gPG1ldGEgbmFtZT1cImJpbmdib3RcIiBjb250ZW50PVwiaW5kZXgsIGZvbGxvdywgbWF4LXNuaXBwZXQ6LTEsIG1heC1pbWFnZS1wcmV2aWV3OmxhcmdlLCBtYXgtdmlkZW8tcHJldmlldzotMVwiIC8+IDogbnVsbCB9XG4gICAgICA8L0hlYWQ+XG4gICAgICBcbiAgICAgIDxTLlByb2plY3RzV3JhcHBlcj5cbiAgICAgICAgPFRpdGxlIGxpZ2h0VGV4dD17J1Byb2pldG9zJ30gLz5cbiAgICAgICAgPFRleHQgdGV4dD0nQSBpbmZvcm1hw6fDo28gw6kgdW0gcG9kZXJvc28gaW5zdHJ1bWVudG8gcGFyYSB0b21hZGFzIGRlIGRlY2lzw7Vlcy4gTyBQb3J0YWwgZG8gTWFwYSBkYSBJbmZvcm1hw6fDo28gYXBvaWEgYSBnb3Zlcm5hbsOnYSBkZSBkYWRvcyBkb3MgZ292ZXJub3MgZmVkZXJhbCwgZXN0YWR1YWwgZSBtdW5pY2lwYWwsIHByb3BvcmNpb25hbmRvIHVtIG1haW9yIGVudGVuZGltZW50byBkbyBzaXN0ZW1hIGRlIGluZm9ybWHDp8OjbyBlIGRvIG9iamV0byBhIHNlciBhcHJvZnVuZGFkby4nIC8+XG4gICAgICAgIDxUZXh0IHRleHQ9J0NvbmZpcmEgYXF1aSBvcyBwcm9qZXRvcyBxdWUgasOhIGZvcmFtIGZlaXRvczonIC8+XG4gICAgICAgIFxuICAgICAgICA8Uy5Qcm9qZWN0TGlzdD5cbiAgICAgICAgICB7cHJvamVjdHMubGVuZ3RoICE9PSAwID8gcHJvamVjdHMubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICA8Uy5Qcm9qZWN0SXRlbSBrZXk9e2l0ZW0/LmlkfT5cbiAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgIFx0YWx0PXtpdGVtPy50aXRsZX1cbiAgICAgICAgICAgICAgICBzcmM9e2Ake2l0ZW0/LnByb2plY3RfY292ZXJ9YH1cbiAgICAgICAgICAgICAgICB3aWR0aD17MzgwfVxuICAgICAgICAgICAgICAgIGhlaWdodD17MjgwfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8Uy5Qcm9qZWN0SW5mbz5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXt7IHBhdGhuYW1lOiBgL3Byb2pldG9zL1ttYXBdL2AsIHF1ZXJ5OnsgbWFwOiBpdGVtPy51cmxfbWFwLCBpZDogaXRlbT8uaWQgfX19IGFzPXtgL3Byb2pldG9zLyR7aXRlbT8udXJsX21hcH0vYH0+XG4gICAgICAgICAgICAgICAgICB7aXRlbT8udGl0bGV9XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDxUZXh0IHRleHQ9e2l0ZW0/LnN1bW1hcnl9IC8+XG4gICAgICAgICAgICAgIDwvUy5Qcm9qZWN0SW5mbz4gXG4gICAgICAgICAgICA8L1MuUHJvamVjdEl0ZW0+XG4gICAgICAgICAgKSkgOiA8ZGl2PkxvYWRpbmcgLi4uPC9kaXY+fVxuICAgICAgICA8L1MuUHJvamVjdExpc3Q+XG4gICAgICA8L1MuUHJvamVjdHNXcmFwcGVyPiBcbiAgICA8Lz5cbiAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/projetos/index.js\n");

/***/ })

});