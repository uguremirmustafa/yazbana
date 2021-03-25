webpackHotUpdate_N_E("pages/index",{

/***/ "./components/HeroPost.js":
/*!********************************!*\
  !*** ./components/HeroPost.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return HeroPost; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/Avatar */ \"./components/Avatar.js\");\n/* harmony import */ var _components_Date__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/Date */ \"./components/Date.js\");\n/* harmony import */ var _components_CoverImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/CoverImage */ \"./components/CoverImage.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _chakra_ui_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/layout */ \"./node_modules/@chakra-ui/layout/dist/esm/index.js\");\nvar _jsxFileName = \"/home/anomy/Documents/nextjs-projects/yazbana/client/components/HeroPost.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nfunction HeroPost(_ref) {\n  var title = _ref.title,\n      coverImage = _ref.coverImage,\n      date = _ref.date,\n      excerpt = _ref.excerpt,\n      author = _ref.author,\n      slug = _ref.slug;\n  return __jsx(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_5__[\"Box\"], {\n    as: \"section\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 5\n    }\n  }, __jsx(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_5__[\"Box\"], {\n    mb: {\n      base: '8',\n      md: '12'\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }\n  }, __jsx(_components_CoverImage__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    slug: slug,\n    title: title,\n    image: coverImage,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 9\n    }\n  })), __jsx(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_5__[\"Grid\"], {\n    templateColumns: {\n      base: '1fr',\n      md: '1fr 1fr'\n    },\n    gap: 8,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }\n  }, __jsx(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_5__[\"GridItem\"], {\n    borderRight: \"rgba(1,1,1,0.6) 1px solid\",\n    pr: \"6\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 9\n    }\n  }, __jsx(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_5__[\"Heading\"], {\n    mb: \"4\",\n    textTransform: \"capitalize\",\n    fontSize: {\n      base: '3xl',\n      lg: '5xl'\n    },\n    className: \"mb-4 text-4xl lg:text-6xl leading-tight\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 11\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    as: \"/posts/\".concat(slug),\n    href: \"/posts/[slug]\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 13\n    }\n  }, __jsx(\"a\", {\n    className: \"hover:underline\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 15\n    }\n  }, title))), __jsx(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_5__[\"Box\"], {\n    mb: {\n      base: '4',\n      md: '0'\n    },\n    className: \"mb-4 md:mb-0 text-lg\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 11\n    }\n  }, __jsx(_components_Date__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    dateString: date,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 13\n    }\n  }))), __jsx(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_5__[\"GridItem\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 9\n    }\n  }, __jsx(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_5__[\"Box\"], {\n    my: \"4\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 11\n    }\n  }, __jsx(_components_Avatar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    name: author.name,\n    picture: author.image,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 13\n    }\n  })), __jsx(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_5__[\"Text\"], {\n    className: \"text-lg leading-relaxed mb-4\",\n    fontSize: \"lg\",\n    mb: \"4\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 11\n    }\n  }, excerpt))));\n}\n_c = HeroPost;\n\nvar _c;\n\n$RefreshReg$(_c, \"HeroPost\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZXJvUG9zdC5qcz8zMmZhIl0sIm5hbWVzIjpbIkhlcm9Qb3N0IiwidGl0bGUiLCJjb3ZlckltYWdlIiwiZGF0ZSIsImV4Y2VycHQiLCJhdXRob3IiLCJzbHVnIiwiYmFzZSIsIm1kIiwibGciLCJuYW1lIiwiaW1hZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsUUFBVCxPQUFzRTtBQUFBLE1BQWxEQyxLQUFrRCxRQUFsREEsS0FBa0Q7QUFBQSxNQUEzQ0MsVUFBMkMsUUFBM0NBLFVBQTJDO0FBQUEsTUFBL0JDLElBQStCLFFBQS9CQSxJQUErQjtBQUFBLE1BQXpCQyxPQUF5QixRQUF6QkEsT0FBeUI7QUFBQSxNQUFoQkMsTUFBZ0IsUUFBaEJBLE1BQWdCO0FBQUEsTUFBUkMsSUFBUSxRQUFSQSxJQUFRO0FBQ25GLFNBQ0UsTUFBQyxxREFBRDtBQUFLLE1BQUUsRUFBQyxTQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHFEQUFEO0FBQUssTUFBRSxFQUFFO0FBQUVDLFVBQUksRUFBRSxHQUFSO0FBQWFDLFFBQUUsRUFBRTtBQUFqQixLQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDhEQUFEO0FBQVksUUFBSSxFQUFFRixJQUFsQjtBQUF3QixTQUFLLEVBQUVMLEtBQS9CO0FBQXNDLFNBQUssRUFBRUMsVUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsRUFJRSxNQUFDLHNEQUFEO0FBQU0sbUJBQWUsRUFBRTtBQUFFSyxVQUFJLEVBQUUsS0FBUjtBQUFlQyxRQUFFLEVBQUU7QUFBbkIsS0FBdkI7QUFBdUQsT0FBRyxFQUFFLENBQTVEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDBEQUFEO0FBQVUsZUFBVyxFQUFDLDJCQUF0QjtBQUFrRCxNQUFFLEVBQUMsR0FBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMseURBQUQ7QUFDRSxNQUFFLEVBQUMsR0FETDtBQUVFLGlCQUFhLEVBQUMsWUFGaEI7QUFHRSxZQUFRLEVBQUU7QUFBRUQsVUFBSSxFQUFFLEtBQVI7QUFBZUUsUUFBRSxFQUFFO0FBQW5CLEtBSFo7QUFJRSxhQUFTLEVBQUMseUNBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1FLE1BQUMsZ0RBQUQ7QUFBTSxNQUFFLG1CQUFZSCxJQUFaLENBQVI7QUFBNEIsUUFBSSxFQUFDLGVBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBQyxpQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWdDTCxLQUFoQyxDQURGLENBTkYsQ0FERixFQVdFLE1BQUMscURBQUQ7QUFBSyxNQUFFLEVBQUU7QUFBRU0sVUFBSSxFQUFFLEdBQVI7QUFBYUMsUUFBRSxFQUFFO0FBQWpCLEtBQVQ7QUFBaUMsYUFBUyxFQUFDLHNCQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx3REFBRDtBQUFNLGNBQVUsRUFBRUwsSUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBWEYsQ0FERixFQWdCRSxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHFEQUFEO0FBQUssTUFBRSxFQUFDLEdBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMERBQUQ7QUFBUSxRQUFJLEVBQUVFLE1BQU0sQ0FBQ0ssSUFBckI7QUFBMkIsV0FBTyxFQUFFTCxNQUFNLENBQUNNLEtBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLEVBSUUsTUFBQyxzREFBRDtBQUFNLGFBQVMsRUFBQyw4QkFBaEI7QUFBK0MsWUFBUSxFQUFDLElBQXhEO0FBQTZELE1BQUUsRUFBQyxHQUFoRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dQLE9BREgsQ0FKRixDQWhCRixDQUpGLENBREY7QUFnQ0Q7S0FqQ3VCSixRIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9IZXJvUG9zdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBdmF0YXIgZnJvbSAnQGNvbXBvbmVudHMvQXZhdGFyJztcbmltcG9ydCBEYXRlIGZyb20gJ0Bjb21wb25lbnRzL0RhdGUnO1xuaW1wb3J0IENvdmVySW1hZ2UgZnJvbSAnQGNvbXBvbmVudHMvQ292ZXJJbWFnZSc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgQm94LCBHcmlkLCBHcmlkSXRlbSwgSGVhZGluZywgVGV4dCB9IGZyb20gJ0BjaGFrcmEtdWkvbGF5b3V0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVyb1Bvc3QoeyB0aXRsZSwgY292ZXJJbWFnZSwgZGF0ZSwgZXhjZXJwdCwgYXV0aG9yLCBzbHVnIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8Qm94IGFzPVwic2VjdGlvblwiPlxuICAgICAgPEJveCBtYj17eyBiYXNlOiAnOCcsIG1kOiAnMTInIH19PlxuICAgICAgICA8Q292ZXJJbWFnZSBzbHVnPXtzbHVnfSB0aXRsZT17dGl0bGV9IGltYWdlPXtjb3ZlckltYWdlfSAvPlxuICAgICAgPC9Cb3g+XG4gICAgICA8R3JpZCB0ZW1wbGF0ZUNvbHVtbnM9e3sgYmFzZTogJzFmcicsIG1kOiAnMWZyIDFmcicgfX0gZ2FwPXs4fT5cbiAgICAgICAgPEdyaWRJdGVtIGJvcmRlclJpZ2h0PVwicmdiYSgxLDEsMSwwLjYpIDFweCBzb2xpZFwiIHByPVwiNlwiPlxuICAgICAgICAgIDxIZWFkaW5nXG4gICAgICAgICAgICBtYj1cIjRcIlxuICAgICAgICAgICAgdGV4dFRyYW5zZm9ybT1cImNhcGl0YWxpemVcIlxuICAgICAgICAgICAgZm9udFNpemU9e3sgYmFzZTogJzN4bCcsIGxnOiAnNXhsJyB9fVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibWItNCB0ZXh0LTR4bCBsZzp0ZXh0LTZ4bCBsZWFkaW5nLXRpZ2h0XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8TGluayBhcz17YC9wb3N0cy8ke3NsdWd9YH0gaHJlZj1cIi9wb3N0cy9bc2x1Z11cIj5cbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaG92ZXI6dW5kZXJsaW5lXCI+e3RpdGxlfTwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L0hlYWRpbmc+XG4gICAgICAgICAgPEJveCBtYj17eyBiYXNlOiAnNCcsIG1kOiAnMCcgfX0gY2xhc3NOYW1lPVwibWItNCBtZDptYi0wIHRleHQtbGdcIj5cbiAgICAgICAgICAgIDxEYXRlIGRhdGVTdHJpbmc9e2RhdGV9IC8+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgIDxHcmlkSXRlbT5cbiAgICAgICAgICA8Qm94IG15PVwiNFwiPlxuICAgICAgICAgICAgPEF2YXRhciBuYW1lPXthdXRob3IubmFtZX0gcGljdHVyZT17YXV0aG9yLmltYWdlfSAvPlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT1cInRleHQtbGcgbGVhZGluZy1yZWxheGVkIG1iLTRcIiBmb250U2l6ZT1cImxnXCIgbWI9XCI0XCI+XG4gICAgICAgICAgICB7ZXhjZXJwdH1cbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICA8L0dyaWQ+XG4gICAgPC9Cb3g+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/HeroPost.js\n");

/***/ })

})