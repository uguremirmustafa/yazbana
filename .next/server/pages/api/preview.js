module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/preview.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/config.js":
/*!***********************!*\
  !*** ./lib/config.js ***!
  \***********************/
/*! exports provided: sanityConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sanityConfig\", function() { return sanityConfig; });\nconst sanityConfig = {\n  // Find your project ID and dataset in `sanity.json` in your studio project\n  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',\n  projectId: \"djoik40x\",\n  useCdn: false // useCdn == true gives fast, cheap responses using a globally distributed cache.\n  // Set this to false if your application require the freshest possible\n  // data always (potentially slightly slower and a bit more expensive).\n\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvY29uZmlnLmpzPzUzMDMiXSwibmFtZXMiOlsic2FuaXR5Q29uZmlnIiwiZGF0YXNldCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19TQU5JVFlfREFUQVNFVCIsInByb2plY3RJZCIsInVzZUNkbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFPLE1BQU1BLFlBQVksR0FBRztBQUMxQjtBQUNBQyxTQUFPLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQywwQkFBWixJQUEwQyxZQUZ6QjtBQUcxQkMsV0FBUyxFQUFFSCxVQUhlO0FBSTFCSSxRQUFNLE9BSm9CLENBSzFCO0FBQ0E7QUFDQTs7QUFQMEIsQ0FBckIiLCJmaWxlIjoiLi9saWIvY29uZmlnLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHNhbml0eUNvbmZpZyA9IHtcbiAgLy8gRmluZCB5b3VyIHByb2plY3QgSUQgYW5kIGRhdGFzZXQgaW4gYHNhbml0eS5qc29uYCBpbiB5b3VyIHN0dWRpbyBwcm9qZWN0XG4gIGRhdGFzZXQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NBTklUWV9EQVRBU0VUIHx8ICdwcm9kdWN0aW9uJyxcbiAgcHJvamVjdElkOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TQU5JVFlfUFJPSkVDVF9JRCxcbiAgdXNlQ2RuOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nLFxuICAvLyB1c2VDZG4gPT0gdHJ1ZSBnaXZlcyBmYXN0LCBjaGVhcCByZXNwb25zZXMgdXNpbmcgYSBnbG9iYWxseSBkaXN0cmlidXRlZCBjYWNoZS5cbiAgLy8gU2V0IHRoaXMgdG8gZmFsc2UgaWYgeW91ciBhcHBsaWNhdGlvbiByZXF1aXJlIHRoZSBmcmVzaGVzdCBwb3NzaWJsZVxuICAvLyBkYXRhIGFsd2F5cyAocG90ZW50aWFsbHkgc2xpZ2h0bHkgc2xvd2VyIGFuZCBhIGJpdCBtb3JlIGV4cGVuc2l2ZSkuXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/config.js\n");

/***/ }),

/***/ "./lib/queries.js":
/*!************************!*\
  !*** ./lib/queries.js ***!
  \************************/
/*! exports provided: indexQuery, postQuery, postSlugsQuery, postBySlugQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"indexQuery\", function() { return indexQuery; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"postQuery\", function() { return postQuery; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"postSlugsQuery\", function() { return postSlugsQuery; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"postBySlugQuery\", function() { return postBySlugQuery; });\nconst postFields = `\n  _id,\n  title,\n  \"slug\": slug.current,\n  \"author\": author->{name, image},\n  mainImage,\n  publishedAt,\n  excerpt,\n`;\nconst indexQuery = `\n*[_type == \"post\"] | order(date desc, _updatedAt desc) {\n  ${postFields}\n}`;\nconst postQuery = `\n{\n  \"post\": *[_type == \"post\" && slug.current == $slug] | order(_updatedAt desc) | [0] {\n    body,\n    \"categories\": categories[]->{title,'slug':slug.current},\n    ${postFields}\n  },\n  \"morePosts\": *[_type == \"post\" && slug.current != $slug] | order(date desc, _updatedAt desc) | [0...2] {\n    ${postFields}\n  }\n}`;\nconst postSlugsQuery = `\n*[_type == \"post\" && defined(slug.current)][].slug.current\n`;\nconst postBySlugQuery = `\n*[_type == \"post\" && slug.current == $slug][0] {\n  ${postFields}\n}\n`;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvcXVlcmllcy5qcz80N2RhIl0sIm5hbWVzIjpbInBvc3RGaWVsZHMiLCJpbmRleFF1ZXJ5IiwicG9zdFF1ZXJ5IiwicG9zdFNsdWdzUXVlcnkiLCJwb3N0QnlTbHVnUXVlcnkiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFNQSxVQUFVLEdBQUk7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQVJBO0FBVU8sTUFBTUMsVUFBVSxHQUFJO0FBQzNCO0FBQ0EsSUFBSUQsVUFBVztBQUNmLEVBSE87QUFLQSxNQUFNRSxTQUFTLEdBQUk7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNRixVQUFXO0FBQ2pCO0FBQ0E7QUFDQSxNQUFNQSxVQUFXO0FBQ2pCO0FBQ0EsRUFWTztBQVlBLE1BQU1HLGNBQWMsR0FBSTtBQUMvQjtBQUNBLENBRk87QUFJQSxNQUFNQyxlQUFlLEdBQUk7QUFDaEM7QUFDQSxJQUFJSixVQUFXO0FBQ2Y7QUFDQSxDQUpPIiwiZmlsZSI6Ii4vbGliL3F1ZXJpZXMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwb3N0RmllbGRzID0gYFxuICBfaWQsXG4gIHRpdGxlLFxuICBcInNsdWdcIjogc2x1Zy5jdXJyZW50LFxuICBcImF1dGhvclwiOiBhdXRob3ItPntuYW1lLCBpbWFnZX0sXG4gIG1haW5JbWFnZSxcbiAgcHVibGlzaGVkQXQsXG4gIGV4Y2VycHQsXG5gO1xuXG5leHBvcnQgY29uc3QgaW5kZXhRdWVyeSA9IGBcbipbX3R5cGUgPT0gXCJwb3N0XCJdIHwgb3JkZXIoZGF0ZSBkZXNjLCBfdXBkYXRlZEF0IGRlc2MpIHtcbiAgJHtwb3N0RmllbGRzfVxufWA7XG5cbmV4cG9ydCBjb25zdCBwb3N0UXVlcnkgPSBgXG57XG4gIFwicG9zdFwiOiAqW190eXBlID09IFwicG9zdFwiICYmIHNsdWcuY3VycmVudCA9PSAkc2x1Z10gfCBvcmRlcihfdXBkYXRlZEF0IGRlc2MpIHwgWzBdIHtcbiAgICBib2R5LFxuICAgIFwiY2F0ZWdvcmllc1wiOiBjYXRlZ29yaWVzW10tPnt0aXRsZSwnc2x1Zyc6c2x1Zy5jdXJyZW50fSxcbiAgICAke3Bvc3RGaWVsZHN9XG4gIH0sXG4gIFwibW9yZVBvc3RzXCI6ICpbX3R5cGUgPT0gXCJwb3N0XCIgJiYgc2x1Zy5jdXJyZW50ICE9ICRzbHVnXSB8IG9yZGVyKGRhdGUgZGVzYywgX3VwZGF0ZWRBdCBkZXNjKSB8IFswLi4uMl0ge1xuICAgICR7cG9zdEZpZWxkc31cbiAgfVxufWA7XG5cbmV4cG9ydCBjb25zdCBwb3N0U2x1Z3NRdWVyeSA9IGBcbipbX3R5cGUgPT0gXCJwb3N0XCIgJiYgZGVmaW5lZChzbHVnLmN1cnJlbnQpXVtdLnNsdWcuY3VycmVudFxuYDtcblxuZXhwb3J0IGNvbnN0IHBvc3RCeVNsdWdRdWVyeSA9IGBcbipbX3R5cGUgPT0gXCJwb3N0XCIgJiYgc2x1Zy5jdXJyZW50ID09ICRzbHVnXVswXSB7XG4gICR7cG9zdEZpZWxkc31cbn1cbmA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/queries.js\n");

/***/ }),

/***/ "./lib/sanity.server.js":
/*!******************************!*\
  !*** ./lib/sanity.server.js ***!
  \******************************/
/*! exports provided: sanityClient, previewClient, getClient, overlayDrafts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sanityClient\", function() { return sanityClient; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"previewClient\", function() { return previewClient; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getClient\", function() { return getClient; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"overlayDrafts\", function() { return overlayDrafts; });\n/* harmony import */ var next_sanity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-sanity */ \"next-sanity\");\n/* harmony import */ var next_sanity__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_sanity__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ \"./lib/config.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n/**\n * Server-side Sanity utilities. By having these in a separate file from the\n * utilities we use on the client side, we are able to tree-shake (remove)\n * code that is not used on the client side.\n */\n\n\nconst sanityClient = Object(next_sanity__WEBPACK_IMPORTED_MODULE_0__[\"createClient\"])(_config__WEBPACK_IMPORTED_MODULE_1__[\"sanityConfig\"]);\nconst previewClient = Object(next_sanity__WEBPACK_IMPORTED_MODULE_0__[\"createClient\"])(_objectSpread(_objectSpread({}, _config__WEBPACK_IMPORTED_MODULE_1__[\"sanityConfig\"]), {}, {\n  useCdn: false,\n  token: process.env.SANITY_API_TOKEN\n}));\nconst getClient = preview => preview ? previewClient : sanityClient;\nfunction overlayDrafts(docs) {\n  const documents = docs || [];\n  const overlayed = documents.reduce((map, doc) => {\n    if (!doc._id) {\n      throw new Error('Ensure that `_id` is included in query projection');\n    }\n\n    const isDraft = doc._id.startsWith('drafts.');\n\n    const id = isDraft ? doc._id.slice(7) : doc._id;\n    return isDraft || !map.has(id) ? map.set(id, doc) : map;\n  }, new Map());\n  return Array.from(overlayed.values());\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvc2FuaXR5LnNlcnZlci5qcz9jYzllIl0sIm5hbWVzIjpbInNhbml0eUNsaWVudCIsImNyZWF0ZUNsaWVudCIsInNhbml0eUNvbmZpZyIsInByZXZpZXdDbGllbnQiLCJ1c2VDZG4iLCJ0b2tlbiIsInByb2Nlc3MiLCJlbnYiLCJTQU5JVFlfQVBJX1RPS0VOIiwiZ2V0Q2xpZW50IiwicHJldmlldyIsIm92ZXJsYXlEcmFmdHMiLCJkb2NzIiwiZG9jdW1lbnRzIiwib3ZlcmxheWVkIiwicmVkdWNlIiwibWFwIiwiZG9jIiwiX2lkIiwiRXJyb3IiLCJpc0RyYWZ0Iiwic3RhcnRzV2l0aCIsImlkIiwic2xpY2UiLCJoYXMiLCJzZXQiLCJNYXAiLCJBcnJheSIsImZyb20iLCJ2YWx1ZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxNQUFNQSxZQUFZLEdBQUdDLGdFQUFZLENBQUNDLG9EQUFELENBQWpDO0FBRUEsTUFBTUMsYUFBYSxHQUFHRixnRUFBWSxpQ0FDcENDLG9EQURvQztBQUV2Q0UsUUFBTSxFQUFFLEtBRitCO0FBR3ZDQyxPQUFLLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQztBQUhvQixHQUFsQztBQU1BLE1BQU1DLFNBQVMsR0FBSUMsT0FBRCxJQUFjQSxPQUFPLEdBQUdQLGFBQUgsR0FBbUJILFlBQTFEO0FBRUEsU0FBU1csYUFBVCxDQUF1QkMsSUFBdkIsRUFBNkI7QUFDbEMsUUFBTUMsU0FBUyxHQUFHRCxJQUFJLElBQUksRUFBMUI7QUFDQSxRQUFNRSxTQUFTLEdBQUdELFNBQVMsQ0FBQ0UsTUFBVixDQUFpQixDQUFDQyxHQUFELEVBQU1DLEdBQU4sS0FBYztBQUMvQyxRQUFJLENBQUNBLEdBQUcsQ0FBQ0MsR0FBVCxFQUFjO0FBQ1osWUFBTSxJQUFJQyxLQUFKLENBQVUsbURBQVYsQ0FBTjtBQUNEOztBQUVELFVBQU1DLE9BQU8sR0FBR0gsR0FBRyxDQUFDQyxHQUFKLENBQVFHLFVBQVIsQ0FBbUIsU0FBbkIsQ0FBaEI7O0FBQ0EsVUFBTUMsRUFBRSxHQUFHRixPQUFPLEdBQUdILEdBQUcsQ0FBQ0MsR0FBSixDQUFRSyxLQUFSLENBQWMsQ0FBZCxDQUFILEdBQXNCTixHQUFHLENBQUNDLEdBQTVDO0FBQ0EsV0FBT0UsT0FBTyxJQUFJLENBQUNKLEdBQUcsQ0FBQ1EsR0FBSixDQUFRRixFQUFSLENBQVosR0FBMEJOLEdBQUcsQ0FBQ1MsR0FBSixDQUFRSCxFQUFSLEVBQVlMLEdBQVosQ0FBMUIsR0FBNkNELEdBQXBEO0FBQ0QsR0FSaUIsRUFRZixJQUFJVSxHQUFKLEVBUmUsQ0FBbEI7QUFVQSxTQUFPQyxLQUFLLENBQUNDLElBQU4sQ0FBV2QsU0FBUyxDQUFDZSxNQUFWLEVBQVgsQ0FBUDtBQUNEIiwiZmlsZSI6Ii4vbGliL3Nhbml0eS5zZXJ2ZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFNlcnZlci1zaWRlIFNhbml0eSB1dGlsaXRpZXMuIEJ5IGhhdmluZyB0aGVzZSBpbiBhIHNlcGFyYXRlIGZpbGUgZnJvbSB0aGVcbiAqIHV0aWxpdGllcyB3ZSB1c2Ugb24gdGhlIGNsaWVudCBzaWRlLCB3ZSBhcmUgYWJsZSB0byB0cmVlLXNoYWtlIChyZW1vdmUpXG4gKiBjb2RlIHRoYXQgaXMgbm90IHVzZWQgb24gdGhlIGNsaWVudCBzaWRlLlxuICovXG5pbXBvcnQgeyBjcmVhdGVDbGllbnQgfSBmcm9tICduZXh0LXNhbml0eSc7XG5pbXBvcnQgeyBzYW5pdHlDb25maWcgfSBmcm9tICcuL2NvbmZpZyc7XG5cbmV4cG9ydCBjb25zdCBzYW5pdHlDbGllbnQgPSBjcmVhdGVDbGllbnQoc2FuaXR5Q29uZmlnKTtcblxuZXhwb3J0IGNvbnN0IHByZXZpZXdDbGllbnQgPSBjcmVhdGVDbGllbnQoe1xuICAuLi5zYW5pdHlDb25maWcsXG4gIHVzZUNkbjogZmFsc2UsXG4gIHRva2VuOiBwcm9jZXNzLmVudi5TQU5JVFlfQVBJX1RPS0VOLFxufSk7XG5cbmV4cG9ydCBjb25zdCBnZXRDbGllbnQgPSAocHJldmlldykgPT4gKHByZXZpZXcgPyBwcmV2aWV3Q2xpZW50IDogc2FuaXR5Q2xpZW50KTtcblxuZXhwb3J0IGZ1bmN0aW9uIG92ZXJsYXlEcmFmdHMoZG9jcykge1xuICBjb25zdCBkb2N1bWVudHMgPSBkb2NzIHx8IFtdO1xuICBjb25zdCBvdmVybGF5ZWQgPSBkb2N1bWVudHMucmVkdWNlKChtYXAsIGRvYykgPT4ge1xuICAgIGlmICghZG9jLl9pZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFbnN1cmUgdGhhdCBgX2lkYCBpcyBpbmNsdWRlZCBpbiBxdWVyeSBwcm9qZWN0aW9uJyk7XG4gICAgfVxuXG4gICAgY29uc3QgaXNEcmFmdCA9IGRvYy5faWQuc3RhcnRzV2l0aCgnZHJhZnRzLicpO1xuICAgIGNvbnN0IGlkID0gaXNEcmFmdCA/IGRvYy5faWQuc2xpY2UoNykgOiBkb2MuX2lkO1xuICAgIHJldHVybiBpc0RyYWZ0IHx8ICFtYXAuaGFzKGlkKSA/IG1hcC5zZXQoaWQsIGRvYykgOiBtYXA7XG4gIH0sIG5ldyBNYXAoKSk7XG5cbiAgcmV0dXJuIEFycmF5LmZyb20ob3ZlcmxheWVkLnZhbHVlcygpKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/sanity.server.js\n");

/***/ }),

/***/ "./pages/api/preview.js":
/*!******************************!*\
  !*** ./pages/api/preview.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return preview; });\n/* harmony import */ var _lib_queries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/queries */ \"./lib/queries.js\");\n/* harmony import */ var _lib_sanity_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/sanity.server */ \"./lib/sanity.server.js\");\n\n\nasync function preview(req, res) {\n  // Check the secret and next parameters\n  // This secret should only be known to this API route and the CMS\n  if (req.query.secret !== process.env.SANITY_PREVIEW_SECRET || !req.query.slug) {\n    return res.status(401).json({\n      message: 'Invalid token'\n    });\n  } // Check if the post with the given `slug` exists\n\n\n  const post = await _lib_sanity_server__WEBPACK_IMPORTED_MODULE_1__[\"previewClient\"].fetch(_lib_queries__WEBPACK_IMPORTED_MODULE_0__[\"postBySlugQuery\"], {\n    slug: req.query.slug\n  }); // If the slug doesn't exist prevent preview mode from being enabled\n\n  if (!post) {\n    return res.status(401).json({\n      message: 'Invalid slug'\n    });\n  } // Enable Preview Mode by setting the cookies\n\n\n  res.setPreviewData({}); // Redirect to the path from the fetched post\n  // We don't redirect to req.query.slug as that might lead to open redirect vulnerabilities\n\n  res.writeHead(307, {\n    Location: `/posts/${post.slug}`\n  });\n  res.end();\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvcHJldmlldy5qcz81YzIzIl0sIm5hbWVzIjpbInByZXZpZXciLCJyZXEiLCJyZXMiLCJxdWVyeSIsInNlY3JldCIsInByb2Nlc3MiLCJlbnYiLCJTQU5JVFlfUFJFVklFV19TRUNSRVQiLCJzbHVnIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJwb3N0IiwicHJldmlld0NsaWVudCIsImZldGNoIiwicG9zdEJ5U2x1Z1F1ZXJ5Iiwic2V0UHJldmlld0RhdGEiLCJ3cml0ZUhlYWQiLCJMb2NhdGlvbiIsImVuZCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRWUsZUFBZUEsT0FBZixDQUF1QkMsR0FBdkIsRUFBNEJDLEdBQTVCLEVBQWlDO0FBQzlDO0FBQ0E7QUFDQSxNQUFJRCxHQUFHLENBQUNFLEtBQUosQ0FBVUMsTUFBVixLQUFxQkMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLHFCQUFqQyxJQUEwRCxDQUFDTixHQUFHLENBQUNFLEtBQUosQ0FBVUssSUFBekUsRUFBK0U7QUFDN0UsV0FBT04sR0FBRyxDQUFDTyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsYUFBTyxFQUFFO0FBQVgsS0FBckIsQ0FBUDtBQUNELEdBTDZDLENBTzlDOzs7QUFDQSxRQUFNQyxJQUFJLEdBQUcsTUFBTUMsZ0VBQWEsQ0FBQ0MsS0FBZCxDQUFvQkMsNERBQXBCLEVBQXFDO0FBQ3REUCxRQUFJLEVBQUVQLEdBQUcsQ0FBQ0UsS0FBSixDQUFVSztBQURzQyxHQUFyQyxDQUFuQixDQVI4QyxDQVk5Qzs7QUFDQSxNQUFJLENBQUNJLElBQUwsRUFBVztBQUNULFdBQU9WLEdBQUcsQ0FBQ08sTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLGFBQU8sRUFBRTtBQUFYLEtBQXJCLENBQVA7QUFDRCxHQWY2QyxDQWlCOUM7OztBQUNBVCxLQUFHLENBQUNjLGNBQUosQ0FBbUIsRUFBbkIsRUFsQjhDLENBb0I5QztBQUNBOztBQUNBZCxLQUFHLENBQUNlLFNBQUosQ0FBYyxHQUFkLEVBQW1CO0FBQUVDLFlBQVEsRUFBRyxVQUFTTixJQUFJLENBQUNKLElBQUs7QUFBaEMsR0FBbkI7QUFDQU4sS0FBRyxDQUFDaUIsR0FBSjtBQUNEIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL3ByZXZpZXcuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwb3N0QnlTbHVnUXVlcnkgfSBmcm9tICcuLi8uLi9saWIvcXVlcmllcyc7XG5pbXBvcnQgeyBwcmV2aWV3Q2xpZW50IH0gZnJvbSAnLi4vLi4vbGliL3Nhbml0eS5zZXJ2ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBwcmV2aWV3KHJlcSwgcmVzKSB7XG4gIC8vIENoZWNrIHRoZSBzZWNyZXQgYW5kIG5leHQgcGFyYW1ldGVyc1xuICAvLyBUaGlzIHNlY3JldCBzaG91bGQgb25seSBiZSBrbm93biB0byB0aGlzIEFQSSByb3V0ZSBhbmQgdGhlIENNU1xuICBpZiAocmVxLnF1ZXJ5LnNlY3JldCAhPT0gcHJvY2Vzcy5lbnYuU0FOSVRZX1BSRVZJRVdfU0VDUkVUIHx8ICFyZXEucXVlcnkuc2x1Zykge1xuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMSkuanNvbih7IG1lc3NhZ2U6ICdJbnZhbGlkIHRva2VuJyB9KTtcbiAgfVxuXG4gIC8vIENoZWNrIGlmIHRoZSBwb3N0IHdpdGggdGhlIGdpdmVuIGBzbHVnYCBleGlzdHNcbiAgY29uc3QgcG9zdCA9IGF3YWl0IHByZXZpZXdDbGllbnQuZmV0Y2gocG9zdEJ5U2x1Z1F1ZXJ5LCB7XG4gICAgc2x1ZzogcmVxLnF1ZXJ5LnNsdWcsXG4gIH0pO1xuXG4gIC8vIElmIHRoZSBzbHVnIGRvZXNuJ3QgZXhpc3QgcHJldmVudCBwcmV2aWV3IG1vZGUgZnJvbSBiZWluZyBlbmFibGVkXG4gIGlmICghcG9zdCkge1xuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMSkuanNvbih7IG1lc3NhZ2U6ICdJbnZhbGlkIHNsdWcnIH0pO1xuICB9XG5cbiAgLy8gRW5hYmxlIFByZXZpZXcgTW9kZSBieSBzZXR0aW5nIHRoZSBjb29raWVzXG4gIHJlcy5zZXRQcmV2aWV3RGF0YSh7fSk7XG5cbiAgLy8gUmVkaXJlY3QgdG8gdGhlIHBhdGggZnJvbSB0aGUgZmV0Y2hlZCBwb3N0XG4gIC8vIFdlIGRvbid0IHJlZGlyZWN0IHRvIHJlcS5xdWVyeS5zbHVnIGFzIHRoYXQgbWlnaHQgbGVhZCB0byBvcGVuIHJlZGlyZWN0IHZ1bG5lcmFiaWxpdGllc1xuICByZXMud3JpdGVIZWFkKDMwNywgeyBMb2NhdGlvbjogYC9wb3N0cy8ke3Bvc3Quc2x1Z31gIH0pO1xuICByZXMuZW5kKCk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/preview.js\n");

/***/ }),

/***/ "next-sanity":
/*!******************************!*\
  !*** external "next-sanity" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-sanity\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXNhbml0eVwiPzA4ZGIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC1zYW5pdHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXNhbml0eVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-sanity\n");

/***/ })

/******/ });