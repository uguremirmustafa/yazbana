webpackHotUpdate_N_E("pages/index",{

/***/ "./components/CoverImage.js":
/*!**********************************!*\
  !*** ./components/CoverImage.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CoverImage; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_sanity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/sanity */ \"./lib/sanity.js\");\n/* harmony import */ var _chakra_ui_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/layout */ \"./node_modules/@chakra-ui/layout/dist/esm/index.js\");\nvar _jsxFileName = \"/home/anomy/Documents/nextjs-projects/yazbana/client/components/CoverImage.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nfunction CoverImage(_ref) {\n  var title = _ref.title,\n      slug = _ref.slug,\n      source = _ref.image,\n      size = _ref.size;\n  var height = size === 'small' ? 300 : 500;\n  var image = source ? __jsx(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_4__[\"Box\"], {\n    borderRadius: \"2xl\",\n    overflow: \"hidden\",\n    p: \"0\",\n    m: \"0\",\n    boxSizing: \"border-box\",\n    pos: \"relative\",\n    h: \"400px\",\n    cursor: \"pointer\",\n    transition: \".3s ease\",\n    shadow: \"lg\",\n    _hover: {\n      boxShadow: 'xl'\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 5\n    }\n  }, __jsx(next_image__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    objectFit: \"cover\",\n    layout: \"fill\",\n    alt: \"Cover Image for \".concat(title),\n    src: Object(_lib_sanity__WEBPACK_IMPORTED_MODULE_3__[\"urlForImage\"])(source).height(500).width(1000).url(),\n    className: \"coverImage\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }\n  })) : __jsx(\"div\", {\n    style: {\n      paddingTop: '50%',\n      backgroundColor: '#ddd'\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 5\n    }\n  });\n  return __jsx(\"div\", {\n    className: \"sm:mx-0\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 5\n    }\n  }, slug ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    as: \"/posts/\".concat(slug),\n    href: \"/posts/[slug]\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 9\n    }\n  }, __jsx(\"a\", {\n    \"aria-label\": title,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 11\n    }\n  }, image)) : image);\n}\n_c = CoverImage;\n\nvar _c;\n\n$RefreshReg$(_c, \"CoverImage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db3ZlckltYWdlLmpzP2QzMmUiXSwibmFtZXMiOlsiQ292ZXJJbWFnZSIsInRpdGxlIiwic2x1ZyIsInNvdXJjZSIsImltYWdlIiwic2l6ZSIsImhlaWdodCIsImJveFNoYWRvdyIsInVybEZvckltYWdlIiwid2lkdGgiLCJ1cmwiLCJwYWRkaW5nVG9wIiwiYmFja2dyb3VuZENvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDZSxTQUFTQSxVQUFULE9BQTBEO0FBQUEsTUFBcENDLEtBQW9DLFFBQXBDQSxLQUFvQztBQUFBLE1BQTdCQyxJQUE2QixRQUE3QkEsSUFBNkI7QUFBQSxNQUFoQkMsTUFBZ0IsUUFBdkJDLEtBQXVCO0FBQUEsTUFBUkMsSUFBUSxRQUFSQSxJQUFRO0FBQ3ZFLE1BQU1DLE1BQU0sR0FBR0QsSUFBSSxLQUFLLE9BQVQsR0FBbUIsR0FBbkIsR0FBeUIsR0FBeEM7QUFDQSxNQUFNRCxLQUFLLEdBQUdELE1BQU0sR0FDbEIsTUFBQyxxREFBRDtBQUNFLGdCQUFZLEVBQUMsS0FEZjtBQUVFLFlBQVEsRUFBQyxRQUZYO0FBR0UsS0FBQyxFQUFDLEdBSEo7QUFJRSxLQUFDLEVBQUMsR0FKSjtBQUtFLGFBQVMsRUFBQyxZQUxaO0FBTUUsT0FBRyxFQUFDLFVBTk47QUFPRSxLQUFDLEVBQUMsT0FQSjtBQVFFLFVBQU0sRUFBQyxTQVJUO0FBU0UsY0FBVSxFQUFDLFVBVGI7QUFVRSxVQUFNLEVBQUMsSUFWVDtBQVdFLFVBQU0sRUFBRTtBQUFFSSxlQUFTLEVBQUU7QUFBYixLQVhWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FhRSxNQUFDLGlEQUFEO0FBQ0UsYUFBUyxFQUFDLE9BRFo7QUFFRSxVQUFNLEVBQUMsTUFGVDtBQUdFLE9BQUcsNEJBQXFCTixLQUFyQixDQUhMO0FBSUUsT0FBRyxFQUFFTywrREFBVyxDQUFDTCxNQUFELENBQVgsQ0FBb0JHLE1BQXBCLENBQTJCLEdBQTNCLEVBQWdDRyxLQUFoQyxDQUFzQyxJQUF0QyxFQUE0Q0MsR0FBNUMsRUFKUDtBQUtFLGFBQVMsRUFBQyxZQUxaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFiRixDQURrQixHQXVCbEI7QUFBSyxTQUFLLEVBQUU7QUFBRUMsZ0JBQVUsRUFBRSxLQUFkO0FBQXFCQyxxQkFBZSxFQUFFO0FBQXRDLEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXZCRjtBQTBCQSxTQUNFO0FBQUssYUFBUyxFQUFDLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHVixJQUFJLEdBQ0gsTUFBQyxnREFBRDtBQUFNLE1BQUUsbUJBQVlBLElBQVosQ0FBUjtBQUE0QixRQUFJLEVBQUMsZUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsa0JBQVlELEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF1QkcsS0FBdkIsQ0FERixDQURHLEdBS0hBLEtBTkosQ0FERjtBQVdEO0tBdkN1QkosVSIsImZpbGUiOiIuL2NvbXBvbmVudHMvQ292ZXJJbWFnZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgeyB1cmxGb3JJbWFnZSB9IGZyb20gJy4uL2xpYi9zYW5pdHknO1xuaW1wb3J0IHsgQm94IH0gZnJvbSAnQGNoYWtyYS11aS9sYXlvdXQnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ292ZXJJbWFnZSh7IHRpdGxlLCBzbHVnLCBpbWFnZTogc291cmNlLCBzaXplIH0pIHtcbiAgY29uc3QgaGVpZ2h0ID0gc2l6ZSA9PT0gJ3NtYWxsJyA/IDMwMCA6IDUwMDtcbiAgY29uc3QgaW1hZ2UgPSBzb3VyY2UgPyAoXG4gICAgPEJveFxuICAgICAgYm9yZGVyUmFkaXVzPVwiMnhsXCJcbiAgICAgIG92ZXJmbG93PVwiaGlkZGVuXCJcbiAgICAgIHA9XCIwXCJcbiAgICAgIG09XCIwXCJcbiAgICAgIGJveFNpemluZz1cImJvcmRlci1ib3hcIlxuICAgICAgcG9zPVwicmVsYXRpdmVcIlxuICAgICAgaD1cIjQwMHB4XCJcbiAgICAgIGN1cnNvcj1cInBvaW50ZXJcIlxuICAgICAgdHJhbnNpdGlvbj1cIi4zcyBlYXNlXCJcbiAgICAgIHNoYWRvdz1cImxnXCJcbiAgICAgIF9ob3Zlcj17eyBib3hTaGFkb3c6ICd4bCcgfX1cbiAgICA+XG4gICAgICA8SW1hZ2VcbiAgICAgICAgb2JqZWN0Rml0PVwiY292ZXJcIlxuICAgICAgICBsYXlvdXQ9XCJmaWxsXCJcbiAgICAgICAgYWx0PXtgQ292ZXIgSW1hZ2UgZm9yICR7dGl0bGV9YH1cbiAgICAgICAgc3JjPXt1cmxGb3JJbWFnZShzb3VyY2UpLmhlaWdodCg1MDApLndpZHRoKDEwMDApLnVybCgpfVxuICAgICAgICBjbGFzc05hbWU9XCJjb3ZlckltYWdlXCJcbiAgICAgIC8+XG4gICAgPC9Cb3g+XG4gICkgOiAoXG4gICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nVG9wOiAnNTAlJywgYmFja2dyb3VuZENvbG9yOiAnI2RkZCcgfX0gLz5cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwic206bXgtMFwiPlxuICAgICAge3NsdWcgPyAoXG4gICAgICAgIDxMaW5rIGFzPXtgL3Bvc3RzLyR7c2x1Z31gfSBocmVmPVwiL3Bvc3RzL1tzbHVnXVwiPlxuICAgICAgICAgIDxhIGFyaWEtbGFiZWw9e3RpdGxlfT57aW1hZ2V9PC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICApIDogKFxuICAgICAgICBpbWFnZVxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/CoverImage.js\n");

/***/ })

})