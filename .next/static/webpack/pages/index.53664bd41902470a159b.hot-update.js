webpackHotUpdate_N_E("pages/index",{

/***/ "./components/HeroPost.js":
/*!********************************!*\
  !*** ./components/HeroPost.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return HeroPost; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/Avatar */ \"./components/Avatar.js\");\n/* harmony import */ var _components_Date__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/Date */ \"./components/Date.js\");\n/* harmony import */ var _components_CoverImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/CoverImage */ \"./components/CoverImage.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _chakra_ui_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/layout */ \"./node_modules/@chakra-ui/layout/dist/esm/index.js\");\nvar _jsxFileName = \"/home/anomy/Documents/nextjs-projects/yazbana/client/components/HeroPost.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nfunction HeroPost(_ref) {\n  var title = _ref.title,\n      coverImage = _ref.coverImage,\n      date = _ref.date,\n      excerpt = _ref.excerpt,\n      author = _ref.author,\n      slug = _ref.slug;\n  return __jsx(\"section\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 5\n    }\n  }, __jsx(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_5__[\"Box\"], {\n    mb: {\n      base: '8',\n      md: '12'\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }\n  }, __jsx(_components_CoverImage__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    slug: slug,\n    title: title,\n    image: coverImage,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 9\n    }\n  })), __jsx(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_5__[\"Grid\"], {\n    templateColumns: {\n      base: '1fr',\n      md: '1fr 1fr'\n    },\n    maxW: \"1200px\",\n    mx: \"auto\",\n    my: \"8\",\n    gap: 8,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }\n  }, __jsx(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_5__[\"GridItem\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 9\n    }\n  }, __jsx(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_5__[\"Heading\"], {\n    mb: \"4\",\n    textTransform: \"capitalize\",\n    fontSize: {\n      base: '4xl',\n      lg: '5xl'\n    },\n    className: \"mb-4 text-4xl lg:text-6xl leading-tight\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 11\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    as: \"/posts/\".concat(slug),\n    href: \"/posts/[slug]\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 13\n    }\n  }, __jsx(\"a\", {\n    className: \"hover:underline\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 15\n    }\n  }, title))), __jsx(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_5__[\"Box\"], {\n    mb: {\n      base: '4',\n      md: '0'\n    },\n    fontSize: \"xl\",\n    className: \"mb-4 md:mb-0 text-lg\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 11\n    }\n  }, __jsx(_components_Date__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    dateString: date,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 13\n    }\n  }))), __jsx(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_5__[\"GridItem\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 9\n    }\n  }, __jsx(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_5__[\"Box\"], {\n    mb: \"4\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 11\n    }\n  }, __jsx(_components_Avatar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    name: author.name,\n    picture: author.image,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 13\n    }\n  })), __jsx(\"p\", {\n    className: \"text-lg leading-relaxed mb-4\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 11\n    }\n  }, excerpt))), __jsx(\"div\", {\n    className: \"md:grid md:grid-cols-2 md:col-gap-16 lg:col-gap-8 mb-20 md:mb-28\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }\n  }));\n}\n_c = HeroPost;\n\nvar _c;\n\n$RefreshReg$(_c, \"HeroPost\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZXJvUG9zdC5qcz8zMmZhIl0sIm5hbWVzIjpbIkhlcm9Qb3N0IiwidGl0bGUiLCJjb3ZlckltYWdlIiwiZGF0ZSIsImV4Y2VycHQiLCJhdXRob3IiLCJzbHVnIiwiYmFzZSIsIm1kIiwibGciLCJuYW1lIiwiaW1hZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsUUFBVCxPQUFzRTtBQUFBLE1BQWxEQyxLQUFrRCxRQUFsREEsS0FBa0Q7QUFBQSxNQUEzQ0MsVUFBMkMsUUFBM0NBLFVBQTJDO0FBQUEsTUFBL0JDLElBQStCLFFBQS9CQSxJQUErQjtBQUFBLE1BQXpCQyxPQUF5QixRQUF6QkEsT0FBeUI7QUFBQSxNQUFoQkMsTUFBZ0IsUUFBaEJBLE1BQWdCO0FBQUEsTUFBUkMsSUFBUSxRQUFSQSxJQUFRO0FBQ25GLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMscURBQUQ7QUFBSyxNQUFFLEVBQUU7QUFBRUMsVUFBSSxFQUFFLEdBQVI7QUFBYUMsUUFBRSxFQUFFO0FBQWpCLEtBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsOERBQUQ7QUFBWSxRQUFJLEVBQUVGLElBQWxCO0FBQXdCLFNBQUssRUFBRUwsS0FBL0I7QUFBc0MsU0FBSyxFQUFFQyxVQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixFQUlFLE1BQUMsc0RBQUQ7QUFBTSxtQkFBZSxFQUFFO0FBQUVLLFVBQUksRUFBRSxLQUFSO0FBQWVDLFFBQUUsRUFBRTtBQUFuQixLQUF2QjtBQUF1RCxRQUFJLEVBQUMsUUFBNUQ7QUFBcUUsTUFBRSxFQUFDLE1BQXhFO0FBQStFLE1BQUUsRUFBQyxHQUFsRjtBQUFzRixPQUFHLEVBQUUsQ0FBM0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMseURBQUQ7QUFDRSxNQUFFLEVBQUMsR0FETDtBQUVFLGlCQUFhLEVBQUMsWUFGaEI7QUFHRSxZQUFRLEVBQUU7QUFBRUQsVUFBSSxFQUFFLEtBQVI7QUFBZUUsUUFBRSxFQUFFO0FBQW5CLEtBSFo7QUFJRSxhQUFTLEVBQUMseUNBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1FLE1BQUMsZ0RBQUQ7QUFBTSxNQUFFLG1CQUFZSCxJQUFaLENBQVI7QUFBNEIsUUFBSSxFQUFDLGVBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBQyxpQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWdDTCxLQUFoQyxDQURGLENBTkYsQ0FERixFQVdFLE1BQUMscURBQUQ7QUFBSyxNQUFFLEVBQUU7QUFBRU0sVUFBSSxFQUFFLEdBQVI7QUFBYUMsUUFBRSxFQUFFO0FBQWpCLEtBQVQ7QUFBaUMsWUFBUSxFQUFDLElBQTFDO0FBQStDLGFBQVMsRUFBQyxzQkFBekQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsd0RBQUQ7QUFBTSxjQUFVLEVBQUVMLElBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQVhGLENBREYsRUFnQkUsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxxREFBRDtBQUFLLE1BQUUsRUFBQyxHQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDBEQUFEO0FBQVEsUUFBSSxFQUFFRSxNQUFNLENBQUNLLElBQXJCO0FBQTJCLFdBQU8sRUFBRUwsTUFBTSxDQUFDTSxLQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixFQUlFO0FBQUcsYUFBUyxFQUFDLDhCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBNkNQLE9BQTdDLENBSkYsQ0FoQkYsQ0FKRixFQTJCRTtBQUFLLGFBQVMsRUFBQyxrRUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBM0JGLENBREY7QUErQkQ7S0FoQ3VCSixRIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9IZXJvUG9zdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBdmF0YXIgZnJvbSAnQGNvbXBvbmVudHMvQXZhdGFyJztcbmltcG9ydCBEYXRlIGZyb20gJ0Bjb21wb25lbnRzL0RhdGUnO1xuaW1wb3J0IENvdmVySW1hZ2UgZnJvbSAnQGNvbXBvbmVudHMvQ292ZXJJbWFnZSc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgQm94LCBHcmlkLCBHcmlkSXRlbSwgSGVhZGluZyB9IGZyb20gJ0BjaGFrcmEtdWkvbGF5b3V0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVyb1Bvc3QoeyB0aXRsZSwgY292ZXJJbWFnZSwgZGF0ZSwgZXhjZXJwdCwgYXV0aG9yLCBzbHVnIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbj5cbiAgICAgIDxCb3ggbWI9e3sgYmFzZTogJzgnLCBtZDogJzEyJyB9fT5cbiAgICAgICAgPENvdmVySW1hZ2Ugc2x1Zz17c2x1Z30gdGl0bGU9e3RpdGxlfSBpbWFnZT17Y292ZXJJbWFnZX0gLz5cbiAgICAgIDwvQm94PlxuICAgICAgPEdyaWQgdGVtcGxhdGVDb2x1bW5zPXt7IGJhc2U6ICcxZnInLCBtZDogJzFmciAxZnInIH19IG1heFc9XCIxMjAwcHhcIiBteD1cImF1dG9cIiBteT1cIjhcIiBnYXA9ezh9PlxuICAgICAgICA8R3JpZEl0ZW0+XG4gICAgICAgICAgPEhlYWRpbmdcbiAgICAgICAgICAgIG1iPVwiNFwiXG4gICAgICAgICAgICB0ZXh0VHJhbnNmb3JtPVwiY2FwaXRhbGl6ZVwiXG4gICAgICAgICAgICBmb250U2l6ZT17eyBiYXNlOiAnNHhsJywgbGc6ICc1eGwnIH19XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtYi00IHRleHQtNHhsIGxnOnRleHQtNnhsIGxlYWRpbmctdGlnaHRcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxMaW5rIGFzPXtgL3Bvc3RzLyR7c2x1Z31gfSBocmVmPVwiL3Bvc3RzL1tzbHVnXVwiPlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJob3Zlcjp1bmRlcmxpbmVcIj57dGl0bGV9PC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvSGVhZGluZz5cbiAgICAgICAgICA8Qm94IG1iPXt7IGJhc2U6ICc0JywgbWQ6ICcwJyB9fSBmb250U2l6ZT1cInhsXCIgY2xhc3NOYW1lPVwibWItNCBtZDptYi0wIHRleHQtbGdcIj5cbiAgICAgICAgICAgIDxEYXRlIGRhdGVTdHJpbmc9e2RhdGV9IC8+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgIDxHcmlkSXRlbT5cbiAgICAgICAgICA8Qm94IG1iPVwiNFwiPlxuICAgICAgICAgICAgPEF2YXRhciBuYW1lPXthdXRob3IubmFtZX0gcGljdHVyZT17YXV0aG9yLmltYWdlfSAvPlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGcgbGVhZGluZy1yZWxheGVkIG1iLTRcIj57ZXhjZXJwdH08L3A+XG4gICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICA8L0dyaWQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kOmdyaWQgbWQ6Z3JpZC1jb2xzLTIgbWQ6Y29sLWdhcC0xNiBsZzpjb2wtZ2FwLTggbWItMjAgbWQ6bWItMjhcIj48L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/HeroPost.js\n");

/***/ })

})