/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/projetos",{

/***/ "./pages/projetos/styled.js":
/*!**********************************!*\
  !*** ./pages/projetos/styled.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ProjectsWrapper\": function() { return /* binding */ ProjectsWrapper; },\n/* harmony export */   \"ProjectList\": function() { return /* binding */ ProjectList; },\n/* harmony export */   \"ProjectItem\": function() { return /* binding */ ProjectItem; },\n/* harmony export */   \"ProjectInfo\": function() { return /* binding */ ProjectInfo; },\n/* harmony export */   \"ProjectDescription\": function() { return /* binding */ ProjectDescription; },\n/* harmony export */   \"SingleProjectWrapper\": function() { return /* binding */ SingleProjectWrapper; },\n/* harmony export */   \"HeaderLink\": function() { return /* binding */ HeaderLink; }\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar ProjectsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.section.withConfig({\n  displayName: \"styled__ProjectsWrapper\",\n  componentId: \"sc-18mkte2-0\"\n})([\"padding:180px 30px;max-width:62%;margin:0 auto;.loading{margin:20px 0 0;}@media(max-width:800px){max-width:100%;padding:150px 30px;h1,p{text-align:left;}}\"]);\nvar ProjectList = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.ul.withConfig({\n  displayName: \"styled__ProjectList\",\n  componentId: \"sc-18mkte2-1\"\n})([\"padding-top:50px;\"]);\nvar ProjectItem = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.li.withConfig({\n  displayName: \"styled__ProjectItem\",\n  componentId: \"sc-18mkte2-2\"\n})([\"display:flex;justify-content:flex-start;width:100%;margin:0 0 40px;img{object-fit:cover;}@media(max-width:800px){flex-direction:column;}\"]);\nvar ProjectInfo = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({\n  displayName: \"styled__ProjectInfo\",\n  componentId: \"sc-18mkte2-3\"\n})([\"width:60%;margin-left:20px;a{font-size:\", \";&:hover{text-decoration:underline;}}@media(max-width:800px){margin-top:25px;width:100%;}\"], function (props) {\n  return props.theme.fontSizes.title;\n});\nvar ProjectDescription = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.p.withConfig({\n  displayName: \"styled__ProjectDescription\",\n  componentId: \"sc-18mkte2-4\"\n})([\"padding-top:30px;\"]);\nvar SingleProjectWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.section.withConfig({\n  displayName: \"styled__SingleProjectWrapper\",\n  componentId: \"sc-18mkte2-5\"\n})([\"padding:180px 30px 40px;max-width:62%;margin:0 auto;h1{margin:0 0 20px;}p{margin:0 0 40px;}div{color:#fff;}@media(max-width:800px){max-width:100%;padding:150px 30px 0;h1,p{text-align:left;}}\"]);\nvar HeaderLink = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.a.withConfig({\n  displayName: \"styled__HeaderLink\",\n  componentId: \"sc-18mkte2-6\"\n})([\"font-size:\", \";font-family:\", \";color:\", \";text-transform:uppercase;cursor:pointer;transition:0.2s;text-decoration:none;border-bottom:1px solid \", \";&:hover{color:\", \";text-decoration:none;border-bottom:1px solid \", \";}\"], function (props) {\n  return props.theme.fontSizes.text;\n}, function (props) {\n  return props.theme.fontFamilies.firaSansRegular;\n}, function (props) {\n  return props.theme.colors.lightGray;\n}, function (props) {\n  return props.theme.colors.lightGray;\n}, function (props) {\n  return props.theme.colors.white;\n}, function (props) {\n  return props.theme.colors.white;\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectsWrapper);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvamV0b3Mvc3R5bGVkLmpzPzllZWUiXSwibmFtZXMiOlsiUHJvamVjdHNXcmFwcGVyIiwic3R5bGVkIiwiUHJvamVjdExpc3QiLCJQcm9qZWN0SXRlbSIsIlByb2plY3RJbmZvIiwicHJvcHMiLCJ0aGVtZSIsImZvbnRTaXplcyIsInRpdGxlIiwiUHJvamVjdERlc2NyaXB0aW9uIiwiU2luZ2xlUHJvamVjdFdyYXBwZXIiLCJIZWFkZXJMaW5rIiwidGV4dCIsImZvbnRGYW1pbGllcyIsImZpcmFTYW5zUmVndWxhciIsImNvbG9ycyIsImxpZ2h0R3JheSIsIndoaXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUVPLElBQU1BLGVBQWUsR0FBR0MseUVBQUg7QUFBQTtBQUFBO0FBQUEsa0tBQXJCO0FBZ0JBLElBQU1DLFdBQVcsR0FBR0Qsb0VBQUg7QUFBQTtBQUFBO0FBQUEseUJBQWpCO0FBSUEsSUFBTUUsV0FBVyxHQUFHRixvRUFBSDtBQUFBO0FBQUE7QUFBQSxnSkFBakI7QUFhQSxJQUFNRyxXQUFXLEdBQUdILHFFQUFIO0FBQUE7QUFBQTtBQUFBLDZJQUlULFVBQUNJLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsU0FBWixDQUFzQkMsS0FBakM7QUFBQSxDQUpTLENBQWpCO0FBZUEsSUFBTUMsa0JBQWtCLEdBQUdSLG1FQUFIO0FBQUE7QUFBQTtBQUFBLHlCQUF4QjtBQUlBLElBQU1TLG9CQUFvQixHQUFHVCx5RUFBSDtBQUFBO0FBQUE7QUFBQSxzTUFBMUI7QUFzQkEsSUFBTVUsVUFBVSxHQUFHVixtRUFBSDtBQUFBO0FBQUE7QUFBQSxvT0FDUixVQUFDSSxLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFNBQVosQ0FBc0JLLElBQWpDO0FBQUEsQ0FEUSxFQUVOLFVBQUNQLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWU8sWUFBWixDQUF5QkMsZUFBcEM7QUFBQSxDQUZNLEVBR1osVUFBQ1QsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZUyxNQUFaLENBQW1CQyxTQUE5QjtBQUFBLENBSFksRUFRTSxVQUFDWCxLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlTLE1BQVosQ0FBbUJDLFNBQTlCO0FBQUEsQ0FSTixFQVVWLFVBQUNYLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWVMsTUFBWixDQUFtQkUsS0FBOUI7QUFBQSxDQVZVLEVBWVEsVUFBQ1osS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZUyxNQUFaLENBQW1CRSxLQUE5QjtBQUFBLENBWlIsQ0FBaEI7QUFtQlAsK0RBQWVqQixlQUFmIiwiZmlsZSI6Ii4vcGFnZXMvcHJvamV0b3Mvc3R5bGVkLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuZXhwb3J0IGNvbnN0IFByb2plY3RzV3JhcHBlciA9IHN0eWxlZC5zZWN0aW9uYFxuXHRwYWRkaW5nOiAxODBweCAzMHB4O1xuXHRtYXgtd2lkdGg6IDYyJTtcblx0bWFyZ2luOiAwIGF1dG87XG5cdC5sb2FkaW5nIHtcblx0XHRtYXJnaW46IDIwcHggMCAwO1xuXHR9XG5cdEBtZWRpYShtYXgtd2lkdGg6IDgwMHB4KSB7XG5cdCAgbWF4LXdpZHRoOiAxMDAlO1xuXHRcdHBhZGRpbmc6IDE1MHB4IDMwcHg7XG5cdFx0aDEsIHAge1xuXHRcdFx0dGV4dC1hbGlnbjogbGVmdDtcblx0XHR9XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBQcm9qZWN0TGlzdCA9IHN0eWxlZC51bGBcblx0cGFkZGluZy10b3A6IDUwcHg7XG5gO1xuXG5leHBvcnQgY29uc3QgUHJvamVjdEl0ZW0gPSBzdHlsZWQubGlgXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcblx0d2lkdGg6IDEwMCU7XG5cdG1hcmdpbjogMCAwIDQwcHg7XG5cdGltZyB7XG5cdFx0b2JqZWN0LWZpdDogY292ZXI7XG5cdH1cblx0QG1lZGlhKG1heC13aWR0aDogODAwcHgpIHtcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgUHJvamVjdEluZm8gPSBzdHlsZWQuZGl2YFxuXHR3aWR0aDogNjAlO1xuXHRtYXJnaW4tbGVmdDogMjBweDtcblx0YSB7XG5cdFx0Zm9udC1zaXplOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuZm9udFNpemVzLnRpdGxlfTtcblx0XHQmOmhvdmVyIHtcblx0XHRcdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuXHRcdH1cblx0fVxuXHRAbWVkaWEobWF4LXdpZHRoOiA4MDBweCkge1xuXHQgIG1hcmdpbi10b3A6IDI1cHg7XG5cdCAgd2lkdGg6IDEwMCU7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBQcm9qZWN0RGVzY3JpcHRpb24gPSBzdHlsZWQucGBcblx0cGFkZGluZy10b3A6IDMwcHg7XG5gO1xuXG5leHBvcnQgY29uc3QgU2luZ2xlUHJvamVjdFdyYXBwZXIgPSBzdHlsZWQuc2VjdGlvbmBcbiAgcGFkZGluZzogMTgwcHggMzBweCA0MHB4O1xuXHRtYXgtd2lkdGg6IDYyJTtcblx0bWFyZ2luOiAwIGF1dG87XG5cdGgxIHtcblx0XHRtYXJnaW46IDAgMCAyMHB4O1xuXHR9XG5cdHAge1xuXHRcdG1hcmdpbjogMCAwIDQwcHg7XG5cdH1cblx0ZGl2IHtcblx0XHRjb2xvcjogI2ZmZjtcblx0fVxuXHRAbWVkaWEobWF4LXdpZHRoOiA4MDBweCkge1xuXHQgIG1heC13aWR0aDogMTAwJTtcblx0XHRwYWRkaW5nOiAxNTBweCAzMHB4IDA7XG5cdFx0aDEsIHAge1xuXHRcdFx0dGV4dC1hbGlnbjogbGVmdDtcblx0XHR9XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBIZWFkZXJMaW5rID0gc3R5bGVkLmFgXG4gIGZvbnQtc2l6ZTogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmZvbnRTaXplcy50ZXh0fTtcbiAgZm9udC1mYW1pbHk6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5mb250RmFtaWxpZXMuZmlyYVNhbnNSZWd1bGFyfTtcbiAgY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5jb2xvcnMubGlnaHRHcmF5fTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiAwLjJzO1xuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuY29sb3JzLmxpZ2h0R3JheX07XG4gICY6aG92ZXIge1xuICAgIGNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuY29sb3JzLndoaXRlfTtcblx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5jb2xvcnMud2hpdGV9O1xuICB9XG5cblxuYDtcblxuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0c1dyYXBwZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/projetos/styled.js\n");

/***/ })

});