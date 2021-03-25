webpackHotUpdate_N_E("pages/index",{

/***/ "./components/MoreStories.js":
/*!***********************************!*\
  !*** ./components/MoreStories.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MoreStories; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/layout */ \"./node_modules/@chakra-ui/layout/dist/esm/index.js\");\n/* harmony import */ var _components_PostPreview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/PostPreview */ \"./components/PostPreview.js\");\nvar _jsxFileName = \"/home/anomy/Documents/nextjs-projects/yazbana/client/components/MoreStories.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nfunction MoreStories(_ref) {\n  var _this = this;\n\n  var posts = _ref.posts;\n  return __jsx(\"section\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 5\n    }\n  }, __jsx(\"h2\", {\n    className: \"mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }\n  }), __jsx(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__[\"Heading\"], {\n    mb: \"8\",\n    fontSize: {\n      base: '3xl',\n      lg: '4xl'\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }\n  }, \"Yak\\u0131ndakiler\"), __jsx(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n    templateColumns: {\n      base: '1fr',\n      md: '1fr 1fr'\n    },\n    gap: {\n      md: '16',\n      lg: '32'\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"grid grid-cols-1 md:grid-cols-2 md:col-gap-16 lg:col-gap-32 row-gap-20 md:row-gap-32 mb-32\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 9\n    }\n  }, posts.map(function (post) {\n    return __jsx(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__[\"GridItem\"], {\n      key: post.slug,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 13\n      }\n    }, __jsx(_components_PostPreview__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      title: post.title,\n      coverImage: post.mainImage,\n      date: post.publishedAt,\n      author: post.author,\n      slug: post.slug,\n      excerpt: post.excerpt,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 15\n      }\n    }));\n  }))));\n}\n_c = MoreStories;\n\nvar _c;\n\n$RefreshReg$(_c, \"MoreStories\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nb3JlU3Rvcmllcy5qcz8yODQ0Il0sIm5hbWVzIjpbIk1vcmVTdG9yaWVzIiwicG9zdHMiLCJiYXNlIiwibGciLCJtZCIsIm1hcCIsInBvc3QiLCJzbHVnIiwidGl0bGUiLCJtYWluSW1hZ2UiLCJwdWJsaXNoZWRBdCIsImF1dGhvciIsImV4Y2VycHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxTQUFTQSxXQUFULE9BQWdDO0FBQUE7O0FBQUEsTUFBVEMsS0FBUyxRQUFUQSxLQUFTO0FBQzdDLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksYUFBUyxFQUFDLG9FQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFLE1BQUMseURBQUQ7QUFBUyxNQUFFLEVBQUMsR0FBWjtBQUFnQixZQUFRLEVBQUU7QUFBRUMsVUFBSSxFQUFFLEtBQVI7QUFBZUMsUUFBRSxFQUFFO0FBQW5CLEtBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRkYsRUFLRSxNQUFDLHNEQUFEO0FBQU0sbUJBQWUsRUFBRTtBQUFFRCxVQUFJLEVBQUUsS0FBUjtBQUFlRSxRQUFFLEVBQUU7QUFBbkIsS0FBdkI7QUFBdUQsT0FBRyxFQUFFO0FBQUVBLFFBQUUsRUFBRSxJQUFOO0FBQVlELFFBQUUsRUFBRTtBQUFoQixLQUE1RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsNEZBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHRixLQUFLLENBQUNJLEdBQU4sQ0FBVSxVQUFDQyxJQUFEO0FBQUEsV0FDVCxNQUFDLDBEQUFEO0FBQVUsU0FBRyxFQUFFQSxJQUFJLENBQUNDLElBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLCtEQUFEO0FBQ0UsV0FBSyxFQUFFRCxJQUFJLENBQUNFLEtBRGQ7QUFFRSxnQkFBVSxFQUFFRixJQUFJLENBQUNHLFNBRm5CO0FBR0UsVUFBSSxFQUFFSCxJQUFJLENBQUNJLFdBSGI7QUFJRSxZQUFNLEVBQUVKLElBQUksQ0FBQ0ssTUFKZjtBQUtFLFVBQUksRUFBRUwsSUFBSSxDQUFDQyxJQUxiO0FBTUUsYUFBTyxFQUFFRCxJQUFJLENBQUNNLE9BTmhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixDQURTO0FBQUEsR0FBVixDQURILENBREYsQ0FMRixDQURGO0FBd0JEO0tBekJ1QlosVyIsImZpbGUiOiIuL2NvbXBvbmVudHMvTW9yZVN0b3JpZXMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHcmlkLCBHcmlkSXRlbSwgSGVhZGluZyB9IGZyb20gJ0BjaGFrcmEtdWkvbGF5b3V0JztcbmltcG9ydCBQb3N0UHJldmlldyBmcm9tICdAY29tcG9uZW50cy9Qb3N0UHJldmlldyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1vcmVTdG9yaWVzKHsgcG9zdHMgfSkge1xuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uPlxuICAgICAgPGgyIGNsYXNzTmFtZT1cIm1iLTggdGV4dC02eGwgbWQ6dGV4dC03eGwgZm9udC1ib2xkIHRyYWNraW5nLXRpZ2h0ZXIgbGVhZGluZy10aWdodFwiPjwvaDI+XG4gICAgICA8SGVhZGluZyBtYj1cIjhcIiBmb250U2l6ZT17eyBiYXNlOiAnM3hsJywgbGc6ICc0eGwnIH19PlxuICAgICAgICBZYWvEsW5kYWtpbGVyXG4gICAgICA8L0hlYWRpbmc+XG4gICAgICA8R3JpZCB0ZW1wbGF0ZUNvbHVtbnM9e3sgYmFzZTogJzFmcicsIG1kOiAnMWZyIDFmcicgfX0gZ2FwPXt7IG1kOiAnMTYnLCBsZzogJzMyJyB9fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIG1kOmdyaWQtY29scy0yIG1kOmNvbC1nYXAtMTYgbGc6Y29sLWdhcC0zMiByb3ctZ2FwLTIwIG1kOnJvdy1nYXAtMzIgbWItMzJcIj5cbiAgICAgICAgICB7cG9zdHMubWFwKChwb3N0KSA9PiAoXG4gICAgICAgICAgICA8R3JpZEl0ZW0ga2V5PXtwb3N0LnNsdWd9PlxuICAgICAgICAgICAgICA8UG9zdFByZXZpZXdcbiAgICAgICAgICAgICAgICB0aXRsZT17cG9zdC50aXRsZX1cbiAgICAgICAgICAgICAgICBjb3ZlckltYWdlPXtwb3N0Lm1haW5JbWFnZX1cbiAgICAgICAgICAgICAgICBkYXRlPXtwb3N0LnB1Ymxpc2hlZEF0fVxuICAgICAgICAgICAgICAgIGF1dGhvcj17cG9zdC5hdXRob3J9XG4gICAgICAgICAgICAgICAgc2x1Zz17cG9zdC5zbHVnfVxuICAgICAgICAgICAgICAgIGV4Y2VycHQ9e3Bvc3QuZXhjZXJwdH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9HcmlkPlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/MoreStories.js\n");

/***/ })

})