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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ProjectsWrapper\": function() { return /* binding */ ProjectsWrapper; },\n/* harmony export */   \"Loading\": function() { return /* binding */ Loading; },\n/* harmony export */   \"ProjectList\": function() { return /* binding */ ProjectList; },\n/* harmony export */   \"ProjectItem\": function() { return /* binding */ ProjectItem; },\n/* harmony export */   \"ProjectInfo\": function() { return /* binding */ ProjectInfo; },\n/* harmony export */   \"ProjectDescription\": function() { return /* binding */ ProjectDescription; },\n/* harmony export */   \"SingleProjectWrapper\": function() { return /* binding */ SingleProjectWrapper; },\n/* harmony export */   \"HeaderLink\": function() { return /* binding */ HeaderLink; }\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar ProjectsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.section.withConfig({\n  displayName: \"styled__ProjectsWrapper\",\n  componentId: \"sc-18mkte2-0\"\n})([\"padding:180px 30px;max-width:840px;margin:0 auto;@media(max-width:800px){max-width:100%;padding:150px 30px;h1,p{text-align:left;}}\"]);\nvar Loading = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({\n  displayName: \"styled__Loading\",\n  componentId: \"sc-18mkte2-1\"\n})([\"margin:40px 0 0;\"]);\nvar ProjectList = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.ul.withConfig({\n  displayName: \"styled__ProjectList\",\n  componentId: \"sc-18mkte2-2\"\n})([\"padding-top:50px;\"]);\nvar ProjectItem = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.li.withConfig({\n  displayName: \"styled__ProjectItem\",\n  componentId: \"sc-18mkte2-3\"\n})([\"display:flex;justify-content:flex-start;width:100%;margin:0 0 40px;img{object-fit:cover;}@media(max-width:800px){flex-direction:column;}\"]);\nvar ProjectInfo = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({\n  displayName: \"styled__ProjectInfo\",\n  componentId: \"sc-18mkte2-4\"\n})([\"width:60%;margin-left:20px;a{font-size:\", \";line-height:1.2;&:hover{text-decoration:underline;}}@media(max-width:800px){margin-top:25px;width:100%;}\"], function (props) {\n  return props.theme.fontSizes.title;\n});\nvar ProjectDescription = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.p.withConfig({\n  displayName: \"styled__ProjectDescription\",\n  componentId: \"sc-18mkte2-5\"\n})([\"padding-top:30px;\"]);\nvar SingleProjectWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.section.withConfig({\n  displayName: \"styled__SingleProjectWrapper\",\n  componentId: \"sc-18mkte2-6\"\n})([\"padding:180px 30px 40px;max-width:62%;margin:0 auto;h1{margin:0 0 20px;}p{margin:0 0 20px;}.text{margin:0 0 40px;color:#fff;}div{color:#fff;}@media(max-width:800px){max-width:100%;padding:150px 30px 0;h1,p{text-align:left;}}\"]);\nvar HeaderLink = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.a.withConfig({\n  displayName: \"styled__HeaderLink\",\n  componentId: \"sc-18mkte2-7\"\n})([\"font-size:\", \";font-family:\", \";color:\", \";text-transform:uppercase;cursor:pointer;transition:0.2s;text-decoration:none;border-bottom:1px solid \", \";&:hover{color:\", \";text-decoration:none;border-bottom:1px solid \", \";}\"], function (props) {\n  return props.theme.fontSizes.text;\n}, function (props) {\n  return props.theme.fontFamilies.firaSansRegular;\n}, function (props) {\n  return props.theme.colors.lightGray;\n}, function (props) {\n  return props.theme.colors.lightGray;\n}, function (props) {\n  return props.theme.colors.white;\n}, function (props) {\n  return props.theme.colors.white;\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectsWrapper);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvamV0b3Mvc3R5bGVkLmpzPzllZWUiXSwibmFtZXMiOlsiUHJvamVjdHNXcmFwcGVyIiwic3R5bGVkIiwiTG9hZGluZyIsIlByb2plY3RMaXN0IiwiUHJvamVjdEl0ZW0iLCJQcm9qZWN0SW5mbyIsInByb3BzIiwidGhlbWUiLCJmb250U2l6ZXMiLCJ0aXRsZSIsIlByb2plY3REZXNjcmlwdGlvbiIsIlNpbmdsZVByb2plY3RXcmFwcGVyIiwiSGVhZGVyTGluayIsInRleHQiLCJmb250RmFtaWxpZXMiLCJmaXJhU2Fuc1JlZ3VsYXIiLCJjb2xvcnMiLCJsaWdodEdyYXkiLCJ3aGl0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBRU8sSUFBTUEsZUFBZSxHQUFHQyx5RUFBSDtBQUFBO0FBQUE7QUFBQSwwSUFBckI7QUFhQSxJQUFNQyxPQUFPLEdBQUdELHFFQUFIO0FBQUE7QUFBQTtBQUFBLHdCQUFiO0FBSUEsSUFBTUUsV0FBVyxHQUFHRixvRUFBSDtBQUFBO0FBQUE7QUFBQSx5QkFBakI7QUFJQSxJQUFNRyxXQUFXLEdBQUdILG9FQUFIO0FBQUE7QUFBQTtBQUFBLGdKQUFqQjtBQWFBLElBQU1JLFdBQVcsR0FBR0oscUVBQUg7QUFBQTtBQUFBO0FBQUEsNkpBSVQsVUFBQ0ssS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxTQUFaLENBQXNCQyxLQUFqQztBQUFBLENBSlMsQ0FBakI7QUFnQkEsSUFBTUMsa0JBQWtCLEdBQUdULG1FQUFIO0FBQUE7QUFBQTtBQUFBLHlCQUF4QjtBQUlBLElBQU1VLG9CQUFvQixHQUFHVix5RUFBSDtBQUFBO0FBQUE7QUFBQSx3T0FBMUI7QUEwQkEsSUFBTVcsVUFBVSxHQUFHWCxtRUFBSDtBQUFBO0FBQUE7QUFBQSxvT0FDUixVQUFDSyxLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFNBQVosQ0FBc0JLLElBQWpDO0FBQUEsQ0FEUSxFQUVOLFVBQUNQLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWU8sWUFBWixDQUF5QkMsZUFBcEM7QUFBQSxDQUZNLEVBR1osVUFBQ1QsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZUyxNQUFaLENBQW1CQyxTQUE5QjtBQUFBLENBSFksRUFRTSxVQUFDWCxLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlTLE1BQVosQ0FBbUJDLFNBQTlCO0FBQUEsQ0FSTixFQVVWLFVBQUNYLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWVMsTUFBWixDQUFtQkUsS0FBOUI7QUFBQSxDQVZVLEVBWVEsVUFBQ1osS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZUyxNQUFaLENBQW1CRSxLQUE5QjtBQUFBLENBWlIsQ0FBaEI7QUFpQlAsK0RBQWVsQixlQUFmIiwiZmlsZSI6Ii4vcGFnZXMvcHJvamV0b3Mvc3R5bGVkLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuZXhwb3J0IGNvbnN0IFByb2plY3RzV3JhcHBlciA9IHN0eWxlZC5zZWN0aW9uYFxuXHRwYWRkaW5nOiAxODBweCAzMHB4O1xuXHRtYXgtd2lkdGg6IDg0MHB4O1xuXHRtYXJnaW46IDAgYXV0bztcblx0QG1lZGlhKG1heC13aWR0aDogODAwcHgpIHtcblx0ICBtYXgtd2lkdGg6IDEwMCU7XG5cdFx0cGFkZGluZzogMTUwcHggMzBweDtcblx0XHRoMSwgcCB7XG5cdFx0XHR0ZXh0LWFsaWduOiBsZWZ0O1xuXHRcdH1cbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IExvYWRpbmcgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW46IDQwcHggMCAwO1xuYDtcblxuZXhwb3J0IGNvbnN0IFByb2plY3RMaXN0ID0gc3R5bGVkLnVsYFxuXHRwYWRkaW5nLXRvcDogNTBweDtcbmA7XG5cbmV4cG9ydCBjb25zdCBQcm9qZWN0SXRlbSA9IHN0eWxlZC5saWBcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuXHR3aWR0aDogMTAwJTtcblx0bWFyZ2luOiAwIDAgNDBweDtcblx0aW1nIHtcblx0XHRvYmplY3QtZml0OiBjb3Zlcjtcblx0fVxuXHRAbWVkaWEobWF4LXdpZHRoOiA4MDBweCkge1xuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBQcm9qZWN0SW5mbyA9IHN0eWxlZC5kaXZgXG5cdHdpZHRoOiA2MCU7XG5cdG1hcmdpbi1sZWZ0OiAyMHB4O1xuXHRhIHtcblx0XHRmb250LXNpemU6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5mb250U2l6ZXMudGl0bGV9O1xuXHRcdGxpbmUtaGVpZ2h0OiAxLjI7XG5cdFx0Jjpob3ZlciB7XG5cdFx0XHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcblx0XHR9XG5cdH1cblx0QG1lZGlhKG1heC13aWR0aDogODAwcHgpIHtcblx0ICBtYXJnaW4tdG9wOiAyNXB4O1xuXHQgIHdpZHRoOiAxMDAlO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgUHJvamVjdERlc2NyaXB0aW9uID0gc3R5bGVkLnBgXG5cdHBhZGRpbmctdG9wOiAzMHB4O1xuYDtcblxuZXhwb3J0IGNvbnN0IFNpbmdsZVByb2plY3RXcmFwcGVyID0gc3R5bGVkLnNlY3Rpb25gXG4gIHBhZGRpbmc6IDE4MHB4IDMwcHggNDBweDtcblx0bWF4LXdpZHRoOiA2MiU7XG5cdG1hcmdpbjogMCBhdXRvO1xuXHRoMSB7XG5cdFx0bWFyZ2luOiAwIDAgMjBweDtcblx0fVxuXHRwIHtcblx0XHRtYXJnaW46IDAgMCAyMHB4O1xuXHR9XG5cdC50ZXh0IHtcblx0XHRtYXJnaW46IDAgMCA0MHB4O1xuXHRcdGNvbG9yOiAjZmZmO1xuXHR9XG5cdGRpdiB7XG5cdFx0Y29sb3I6ICNmZmY7XG5cdH1cblx0QG1lZGlhKG1heC13aWR0aDogODAwcHgpIHtcblx0ICBtYXgtd2lkdGg6IDEwMCU7XG5cdFx0cGFkZGluZzogMTUwcHggMzBweCAwO1xuXHRcdGgxLCBwIHtcblx0XHRcdHRleHQtYWxpZ246IGxlZnQ7XG5cdFx0fVxuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgSGVhZGVyTGluayA9IHN0eWxlZC5hYFxuICBmb250LXNpemU6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5mb250U2l6ZXMudGV4dH07XG4gIGZvbnQtZmFtaWx5OiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuZm9udEZhbWlsaWVzLmZpcmFTYW5zUmVndWxhcn07XG4gIGNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuY29sb3JzLmxpZ2h0R3JheX07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogMC4ycztcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmNvbG9ycy5saWdodEdyYXl9O1xuICAmOmhvdmVyIHtcbiAgICBjb2xvcjogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmNvbG9ycy53aGl0ZX07XG5cdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuY29sb3JzLndoaXRlfTtcbiAgfVxuYDtcblxuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0c1dyYXBwZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/projetos/styled.js\n");

/***/ })

});