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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ProjectsWrapper\": function() { return /* binding */ ProjectsWrapper; },\n/* harmony export */   \"ProjectList\": function() { return /* binding */ ProjectList; },\n/* harmony export */   \"ProjectItem\": function() { return /* binding */ ProjectItem; },\n/* harmony export */   \"ProjectInfo\": function() { return /* binding */ ProjectInfo; },\n/* harmony export */   \"ProjectDescription\": function() { return /* binding */ ProjectDescription; },\n/* harmony export */   \"SingleProjectWrapper\": function() { return /* binding */ SingleProjectWrapper; },\n/* harmony export */   \"HeaderLink\": function() { return /* binding */ HeaderLink; }\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar ProjectsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.section.withConfig({\n  displayName: \"styled__ProjectsWrapper\",\n  componentId: \"sc-18mkte2-0\"\n})([\"padding:180px 30px;max-width:62%;margin:0 auto;@media(max-width:800px){max-width:100%;padding:150px 30px;h1,p{text-align:left;}}\"]);\nvar ProjectList = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.ul.withConfig({\n  displayName: \"styled__ProjectList\",\n  componentId: \"sc-18mkte2-1\"\n})([\"padding-top:50px;\"]);\nvar ProjectItem = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.li.withConfig({\n  displayName: \"styled__ProjectItem\",\n  componentId: \"sc-18mkte2-2\"\n})([\"display:flex;justify-content:flex-start;width:100%;margin:0 0 40px;img{object-fit:cover;}@media(max-width:800px){flex-direction:column;}\"]);\nvar ProjectInfo = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({\n  displayName: \"styled__ProjectInfo\",\n  componentId: \"sc-18mkte2-3\"\n})([\"width:60%;margin-left:20px;a{font-size:\", \";&:hover{text-decoration:underline;}}@media(max-width:800px){margin-top:25px;width:100%;}\"], function (props) {\n  return props.theme.fontSizes.title;\n});\nvar ProjectDescription = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.p.withConfig({\n  displayName: \"styled__ProjectDescription\",\n  componentId: \"sc-18mkte2-4\"\n})([\"padding-top:30px;\"]);\nvar SingleProjectWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.section.withConfig({\n  displayName: \"styled__SingleProjectWrapper\",\n  componentId: \"sc-18mkte2-5\"\n})([\"padding:180px 30px 40px;max-width:62%;margin:0 auto;h1{margin:0 0 20px;}p{margin:0 0 40px;}div{color:#fff;}@media(max-width:800px){max-width:100%;padding:150px 30px 0;h1,p{text-align:left;}}\"]);\nvar HeaderLink = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.a.withConfig({\n  displayName: \"styled__HeaderLink\",\n  componentId: \"sc-18mkte2-6\"\n})([\"font-size:\", \";font-family:\", \";color:\", \";text-transform:uppercase;cursor:pointer;transition:0.2s;border-bottom:1px solid \", \";&:hover{color:\", \";}&.current{color:\", \";pointer-events:none;border-bottom:1px solid \", \";}@media(max-width:800px){margin:0 0 20px;}\"], function (props) {\n  return props.theme.fontSizes.text;\n}, function (props) {\n  return props.theme.fontFamilies.firaSansRegular;\n}, function (props) {\n  return props.theme.colors.lightGray;\n}, function (props) {\n  return props.theme.colors.lightGray;\n}, function (props) {\n  return props.theme.colors.white;\n}, function (props) {\n  return props.theme.colors.white;\n}, function (props) {\n  return props.theme.colors.white;\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectsWrapper);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvamV0b3Mvc3R5bGVkLmpzPzllZWUiXSwibmFtZXMiOlsiUHJvamVjdHNXcmFwcGVyIiwic3R5bGVkIiwiUHJvamVjdExpc3QiLCJQcm9qZWN0SXRlbSIsIlByb2plY3RJbmZvIiwicHJvcHMiLCJ0aGVtZSIsImZvbnRTaXplcyIsInRpdGxlIiwiUHJvamVjdERlc2NyaXB0aW9uIiwiU2luZ2xlUHJvamVjdFdyYXBwZXIiLCJIZWFkZXJMaW5rIiwidGV4dCIsImZvbnRGYW1pbGllcyIsImZpcmFTYW5zUmVndWxhciIsImNvbG9ycyIsImxpZ2h0R3JheSIsIndoaXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUVPLElBQU1BLGVBQWUsR0FBR0MseUVBQUg7QUFBQTtBQUFBO0FBQUEsd0lBQXJCO0FBYUEsSUFBTUMsV0FBVyxHQUFHRCxvRUFBSDtBQUFBO0FBQUE7QUFBQSx5QkFBakI7QUFJQSxJQUFNRSxXQUFXLEdBQUdGLG9FQUFIO0FBQUE7QUFBQTtBQUFBLGdKQUFqQjtBQWFBLElBQU1HLFdBQVcsR0FBR0gscUVBQUg7QUFBQTtBQUFBO0FBQUEsNklBSVQsVUFBQ0ksS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxTQUFaLENBQXNCQyxLQUFqQztBQUFBLENBSlMsQ0FBakI7QUFlQSxJQUFNQyxrQkFBa0IsR0FBR1IsbUVBQUg7QUFBQTtBQUFBO0FBQUEseUJBQXhCO0FBSUEsSUFBTVMsb0JBQW9CLEdBQUdULHlFQUFIO0FBQUE7QUFBQTtBQUFBLHNNQUExQjtBQXNCQSxJQUFNVSxVQUFVLEdBQUdWLG1FQUFIO0FBQUE7QUFBQTtBQUFBLDZRQUNSLFVBQUNJLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsU0FBWixDQUFzQkssSUFBakM7QUFBQSxDQURRLEVBRU4sVUFBQ1AsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZTyxZQUFaLENBQXlCQyxlQUFwQztBQUFBLENBRk0sRUFHWixVQUFDVCxLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlTLE1BQVosQ0FBbUJDLFNBQTlCO0FBQUEsQ0FIWSxFQVFNLFVBQUNYLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWVMsTUFBWixDQUFtQkMsU0FBOUI7QUFBQSxDQVJOLEVBVVYsVUFBQ1gsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZUyxNQUFaLENBQW1CRSxLQUE5QjtBQUFBLENBVlUsRUFhVixVQUFDWixLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlTLE1BQVosQ0FBbUJFLEtBQTlCO0FBQUEsQ0FiVSxFQWVRLFVBQUNaLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWVMsTUFBWixDQUFtQkUsS0FBOUI7QUFBQSxDQWZSLENBQWhCO0FBdUJQLCtEQUFlakIsZUFBZiIsImZpbGUiOiIuL3BhZ2VzL3Byb2pldG9zL3N0eWxlZC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmV4cG9ydCBjb25zdCBQcm9qZWN0c1dyYXBwZXIgPSBzdHlsZWQuc2VjdGlvbmBcblx0cGFkZGluZzogMTgwcHggMzBweDtcblx0bWF4LXdpZHRoOiA2MiU7XG5cdG1hcmdpbjogMCBhdXRvO1xuXHRAbWVkaWEobWF4LXdpZHRoOiA4MDBweCkge1xuXHQgIG1heC13aWR0aDogMTAwJTtcblx0XHRwYWRkaW5nOiAxNTBweCAzMHB4O1xuXHRcdGgxLCBwIHtcblx0XHRcdHRleHQtYWxpZ246IGxlZnQ7XG5cdFx0fVxuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgUHJvamVjdExpc3QgPSBzdHlsZWQudWxgXG5cdHBhZGRpbmctdG9wOiA1MHB4O1xuYDtcblxuZXhwb3J0IGNvbnN0IFByb2plY3RJdGVtID0gc3R5bGVkLmxpYFxuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG5cdHdpZHRoOiAxMDAlO1xuXHRtYXJnaW46IDAgMCA0MHB4O1xuXHRpbWcge1xuXHRcdG9iamVjdC1maXQ6IGNvdmVyO1xuXHR9XG5cdEBtZWRpYShtYXgtd2lkdGg6IDgwMHB4KSB7XG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IFByb2plY3RJbmZvID0gc3R5bGVkLmRpdmBcblx0d2lkdGg6IDYwJTtcblx0bWFyZ2luLWxlZnQ6IDIwcHg7XG5cdGEge1xuXHRcdGZvbnQtc2l6ZTogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmZvbnRTaXplcy50aXRsZX07XG5cdFx0Jjpob3ZlciB7XG5cdFx0XHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcblx0XHR9XG5cdH1cblx0QG1lZGlhKG1heC13aWR0aDogODAwcHgpIHtcblx0ICBtYXJnaW4tdG9wOiAyNXB4O1xuXHQgIHdpZHRoOiAxMDAlO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgUHJvamVjdERlc2NyaXB0aW9uID0gc3R5bGVkLnBgXG5cdHBhZGRpbmctdG9wOiAzMHB4O1xuYDtcblxuZXhwb3J0IGNvbnN0IFNpbmdsZVByb2plY3RXcmFwcGVyID0gc3R5bGVkLnNlY3Rpb25gXG4gIHBhZGRpbmc6IDE4MHB4IDMwcHggNDBweDtcblx0bWF4LXdpZHRoOiA2MiU7XG5cdG1hcmdpbjogMCBhdXRvO1xuXHRoMSB7XG5cdFx0bWFyZ2luOiAwIDAgMjBweDtcblx0fVxuXHRwIHtcblx0XHRtYXJnaW46IDAgMCA0MHB4O1xuXHR9XG5cdGRpdiB7XG5cdFx0Y29sb3I6ICNmZmY7XG5cdH1cblx0QG1lZGlhKG1heC13aWR0aDogODAwcHgpIHtcblx0ICBtYXgtd2lkdGg6IDEwMCU7XG5cdFx0cGFkZGluZzogMTUwcHggMzBweCAwO1xuXHRcdGgxLCBwIHtcblx0XHRcdHRleHQtYWxpZ246IGxlZnQ7XG5cdFx0fVxuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgSGVhZGVyTGluayA9IHN0eWxlZC5hYFxuICBmb250LXNpemU6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5mb250U2l6ZXMudGV4dH07XG4gIGZvbnQtZmFtaWx5OiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuZm9udEZhbWlsaWVzLmZpcmFTYW5zUmVndWxhcn07XG4gIGNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuY29sb3JzLmxpZ2h0R3JheX07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogMC4ycztcbiAgLy8gbWFyZ2luOiAwIDIwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuY29sb3JzLmxpZ2h0R3JheX07XG4gICY6aG92ZXIge1xuICAgIGNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuY29sb3JzLndoaXRlfTtcbiAgfVxuICAmLmN1cnJlbnR7XG4gICAgY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5jb2xvcnMud2hpdGV9O1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuY29sb3JzLndoaXRlfTtcbiAgfVxuICBAbWVkaWEobWF4LXdpZHRoOiA4MDBweCkge1xuICAgIG1hcmdpbjogMCAwIDIwcHg7XG4gIH1cbmA7XG5cblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdHNXcmFwcGVyOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/projetos/styled.js\n");

/***/ })

});