"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/zustand-utils";
exports.ids = ["vendor-chunks/zustand-utils"];
exports.modules = {

/***/ "(ssr)/./node_modules/zustand-utils/es/context.js":
/*!**************************************************!*\
  !*** ./node_modules/zustand-utils/es/context.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createContext: () => (/* binding */ createContext)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var zustand_traditional__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! zustand/traditional */ \"(ssr)/./node_modules/zustand/esm/traditional.mjs\");\n\n\n/**\n * create context for individual App\n * mostly use for component\n */ var createContext = function createContext() {\n    var ZustandContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(undefined);\n    var Provider = function Provider(_ref) {\n        var createStore = _ref.createStore, children = _ref.children;\n        var storeRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();\n        if (!storeRef.current) {\n            storeRef.current = createStore();\n        }\n        return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ZustandContext.Provider, {\n            value: storeRef.current\n        }, children);\n    };\n    var useContextStore = function useContextStore(selector, equalityFn) {\n        var store = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ZustandContext);\n        if (!store) {\n            throw new Error(\"Seems like you have not used zustand provider as an ancestor.\");\n        }\n        return (0,zustand_traditional__WEBPACK_IMPORTED_MODULE_1__.useStoreWithEqualityFn)(store, selector, equalityFn);\n    };\n    var useStoreApi = function useStoreApi() {\n        var store = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ZustandContext);\n        if (!store) {\n            throw new Error(\"Seems like you have not used zustand provider as an ancestor.\");\n        }\n        return store;\n    };\n    return {\n        Provider: Provider,\n        useStore: useContextStore,\n        useStoreApi: useStoreApi\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvenVzdGFuZC11dGlscy9lcy9jb250ZXh0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBK0Y7QUFDbEM7QUFDN0Q7OztDQUdDLEdBQ00sSUFBSUMsZ0JBQWdCLFNBQVNBO0lBQ2xDLElBQUlLLGlCQUFpQixXQUFXLEdBQUVKLG9EQUFrQkEsQ0FBQ0s7SUFDckQsSUFBSUMsV0FBVyxTQUFTQSxTQUFTQyxJQUFJO1FBQ25DLElBQUlDLGNBQWNELEtBQUtDLFdBQVcsRUFDaENDLFdBQVdGLEtBQUtFLFFBQVE7UUFDMUIsSUFBSUMsV0FBV1IsNkNBQU1BO1FBQ3JCLElBQUksQ0FBQ1EsU0FBU0MsT0FBTyxFQUFFO1lBQ3JCRCxTQUFTQyxPQUFPLEdBQUdIO1FBQ3JCO1FBQ0EsT0FBTyxXQUFXLEdBQUVWLG9EQUFhQSxDQUFDTSxlQUFlRSxRQUFRLEVBQUU7WUFDekRNLE9BQU9GLFNBQVNDLE9BQU87UUFDekIsR0FBR0Y7SUFDTDtJQUNBLElBQUlJLGtCQUFrQixTQUFTQSxnQkFBZ0JDLFFBQVEsRUFBRUMsVUFBVTtRQUNqRSxJQUFJQyxRQUFRZixpREFBVUEsQ0FBQ0c7UUFDdkIsSUFBSSxDQUFDWSxPQUFPO1lBQ1YsTUFBTSxJQUFJQyxNQUFNO1FBQ2xCO1FBQ0EsT0FBT2QsMkVBQXNCQSxDQUFDYSxPQUFPRixVQUFVQztJQUNqRDtJQUNBLElBQUlHLGNBQWMsU0FBU0E7UUFDekIsSUFBSUYsUUFBUWYsaURBQVVBLENBQUNHO1FBQ3ZCLElBQUksQ0FBQ1ksT0FBTztZQUNWLE1BQU0sSUFBSUMsTUFBTTtRQUNsQjtRQUNBLE9BQU9EO0lBQ1Q7SUFDQSxPQUFPO1FBQ0xWLFVBQVVBO1FBQ1ZhLFVBQVVOO1FBQ1ZLLGFBQWFBO0lBQ2Y7QUFDRixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vS25vd2xlZGdlR3JhcGhRUy8uL25vZGVfbW9kdWxlcy96dXN0YW5kLXV0aWxzL2VzL2NvbnRleHQuanM/MGI5YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVFbGVtZW50LCBjcmVhdGVDb250ZXh0IGFzIHJlYWN0Q3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlU3RvcmVXaXRoRXF1YWxpdHlGbiB9IGZyb20gJ3p1c3RhbmQvdHJhZGl0aW9uYWwnO1xuLyoqXG4gKiBjcmVhdGUgY29udGV4dCBmb3IgaW5kaXZpZHVhbCBBcHBcbiAqIG1vc3RseSB1c2UgZm9yIGNvbXBvbmVudFxuICovXG5leHBvcnQgdmFyIGNyZWF0ZUNvbnRleHQgPSBmdW5jdGlvbiBjcmVhdGVDb250ZXh0KCkge1xuICB2YXIgWnVzdGFuZENvbnRleHQgPSAvKiNfX1BVUkVfXyovcmVhY3RDcmVhdGVDb250ZXh0KHVuZGVmaW5lZCk7XG4gIHZhciBQcm92aWRlciA9IGZ1bmN0aW9uIFByb3ZpZGVyKF9yZWYpIHtcbiAgICB2YXIgY3JlYXRlU3RvcmUgPSBfcmVmLmNyZWF0ZVN0b3JlLFxuICAgICAgY2hpbGRyZW4gPSBfcmVmLmNoaWxkcmVuO1xuICAgIHZhciBzdG9yZVJlZiA9IHVzZVJlZigpO1xuICAgIGlmICghc3RvcmVSZWYuY3VycmVudCkge1xuICAgICAgc3RvcmVSZWYuY3VycmVudCA9IGNyZWF0ZVN0b3JlKCk7XG4gICAgfVxuICAgIHJldHVybiAvKiNfX1BVUkVfXyovY3JlYXRlRWxlbWVudChadXN0YW5kQ29udGV4dC5Qcm92aWRlciwge1xuICAgICAgdmFsdWU6IHN0b3JlUmVmLmN1cnJlbnRcbiAgICB9LCBjaGlsZHJlbik7XG4gIH07XG4gIHZhciB1c2VDb250ZXh0U3RvcmUgPSBmdW5jdGlvbiB1c2VDb250ZXh0U3RvcmUoc2VsZWN0b3IsIGVxdWFsaXR5Rm4pIHtcbiAgICB2YXIgc3RvcmUgPSB1c2VDb250ZXh0KFp1c3RhbmRDb250ZXh0KTtcbiAgICBpZiAoIXN0b3JlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1NlZW1zIGxpa2UgeW91IGhhdmUgbm90IHVzZWQgenVzdGFuZCBwcm92aWRlciBhcyBhbiBhbmNlc3Rvci4nKTtcbiAgICB9XG4gICAgcmV0dXJuIHVzZVN0b3JlV2l0aEVxdWFsaXR5Rm4oc3RvcmUsIHNlbGVjdG9yLCBlcXVhbGl0eUZuKTtcbiAgfTtcbiAgdmFyIHVzZVN0b3JlQXBpID0gZnVuY3Rpb24gdXNlU3RvcmVBcGkoKSB7XG4gICAgdmFyIHN0b3JlID0gdXNlQ29udGV4dChadXN0YW5kQ29udGV4dCk7XG4gICAgaWYgKCFzdG9yZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdTZWVtcyBsaWtlIHlvdSBoYXZlIG5vdCB1c2VkIHp1c3RhbmQgcHJvdmlkZXIgYXMgYW4gYW5jZXN0b3IuJyk7XG4gICAgfVxuICAgIHJldHVybiBzdG9yZTtcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICBQcm92aWRlcjogUHJvdmlkZXIsXG4gICAgdXNlU3RvcmU6IHVzZUNvbnRleHRTdG9yZSxcbiAgICB1c2VTdG9yZUFwaTogdXNlU3RvcmVBcGlcbiAgfTtcbn07Il0sIm5hbWVzIjpbImNyZWF0ZUVsZW1lbnQiLCJjcmVhdGVDb250ZXh0IiwicmVhY3RDcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZVJlZiIsInVzZVN0b3JlV2l0aEVxdWFsaXR5Rm4iLCJadXN0YW5kQ29udGV4dCIsInVuZGVmaW5lZCIsIlByb3ZpZGVyIiwiX3JlZiIsImNyZWF0ZVN0b3JlIiwiY2hpbGRyZW4iLCJzdG9yZVJlZiIsImN1cnJlbnQiLCJ2YWx1ZSIsInVzZUNvbnRleHRTdG9yZSIsInNlbGVjdG9yIiwiZXF1YWxpdHlGbiIsInN0b3JlIiwiRXJyb3IiLCJ1c2VTdG9yZUFwaSIsInVzZVN0b3JlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/zustand-utils/es/context.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/zustand-utils/es/createStoreUpdater.js":
/*!*************************************************************!*\
  !*** ./node_modules/zustand-utils/es/createStoreUpdater.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createStoreUpdater: () => (/* binding */ createStoreUpdater)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"(ssr)/./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fast-deep-equal */ \"(ssr)/./node_modules/fast-deep-equal/index.js\");\n/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fast_deep_equal__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n/**\n * 该函数接收四个参数：key，value 、 deps setStoreState\n * @param {key}：需要更新的 Store 中的 key\n *  @param  value：需要更新的值\n *  @param  deps：依赖项数组，默认为 [value]\n *  @param  setStoreState：一个可选的回调函数，用于更新 Store 状态\n */ // 定义一个函数，用于创建 Store 更新器\nvar createStoreUpdater = function createStoreUpdater(storeApi) {\n    return function(key, value) {\n        var deps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [\n            value\n        ];\n        var setStateFn = arguments.length > 3 ? arguments[3] : undefined;\n        // 获取 Store 更新函数\n        var setState = setStateFn !== null && setStateFn !== void 0 ? setStateFn : storeApi.setState;\n        // 使用 useEffect 监听依赖项变化\n        (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n            // 如果 value 不为 undefined，就更新 Store 中的指定 key 的值\n            if (typeof value !== \"undefined\") {\n                var _storeApi$getState;\n                var _state = (_storeApi$getState = storeApi.getState) === null || _storeApi$getState === void 0 ? void 0 : _storeApi$getState.call(storeApi);\n                if (fast_deep_equal__WEBPACK_IMPORTED_MODULE_1___default()(_state === null || _state === void 0 ? void 0 : _state[key], value)) return;\n                // @ts-ignore\n                setState((0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, key, value), false, {\n                    type: \"\\uD83D\\uDCAD useStoreUpdater / \".concat(key),\n                    payload: value\n                });\n            }\n        }, deps);\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvenVzdGFuZC11dGlscy9lcy9jcmVhdGVTdG9yZVVwZGF0ZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXdFO0FBQ2xDO0FBQ0o7QUFFbEM7Ozs7OztDQU1DLEdBRUQsd0JBQXdCO0FBQ2pCLElBQUlHLHFCQUFxQixTQUFTQSxtQkFBbUJDLFFBQVE7SUFDbEUsT0FBTyxTQUFVQyxHQUFHLEVBQUVDLEtBQUs7UUFDekIsSUFBSUMsT0FBT0MsVUFBVUMsTUFBTSxHQUFHLEtBQUtELFNBQVMsQ0FBQyxFQUFFLEtBQUtFLFlBQVlGLFNBQVMsQ0FBQyxFQUFFLEdBQUc7WUFBQ0Y7U0FBTTtRQUN0RixJQUFJSyxhQUFhSCxVQUFVQyxNQUFNLEdBQUcsSUFBSUQsU0FBUyxDQUFDLEVBQUUsR0FBR0U7UUFDdkQsZ0JBQWdCO1FBQ2hCLElBQUlFLFdBQVdELGVBQWUsUUFBUUEsZUFBZSxLQUFLLElBQUlBLGFBQWFQLFNBQVNRLFFBQVE7UUFDNUYsdUJBQXVCO1FBQ3ZCVixnREFBU0EsQ0FBQztZQUNSLDhDQUE4QztZQUM5QyxJQUFJLE9BQU9JLFVBQVUsYUFBYTtnQkFDaEMsSUFBSU87Z0JBQ0osSUFBSUMsU0FBUyxDQUFDRCxxQkFBcUJULFNBQVNXLFFBQVEsTUFBTSxRQUFRRix1QkFBdUIsS0FBSyxJQUFJLEtBQUssSUFBSUEsbUJBQW1CRyxJQUFJLENBQUNaO2dCQUNuSSxJQUFJSCxzREFBT0EsQ0FBQ2EsV0FBVyxRQUFRQSxXQUFXLEtBQUssSUFBSSxLQUFLLElBQUlBLE1BQU0sQ0FBQ1QsSUFBSSxFQUFFQyxRQUFRO2dCQUVqRixhQUFhO2dCQUNiTSxTQUFTWixxRkFBZUEsQ0FBQyxDQUFDLEdBQUdLLEtBQUtDLFFBQVEsT0FBTztvQkFDL0NXLE1BQU0sa0NBQWtDQyxNQUFNLENBQUNiO29CQUMvQ2MsU0FBU2I7Z0JBQ1g7WUFDRjtRQUNGLEdBQUdDO0lBQ0w7QUFDRixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vS25vd2xlZGdlR3JhcGhRUy8uL25vZGVfbW9kdWxlcy96dXN0YW5kLXV0aWxzL2VzL2NyZWF0ZVN0b3JlVXBkYXRlci5qcz9jZjJiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5XCI7XG5pbXBvcnQgaXNFcXVhbCBmcm9tICdmYXN0LWRlZXAtZXF1YWwnO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG4vKipcbiAqIOivpeWHveaVsOaOpeaUtuWbm+S4quWPguaVsO+8mmtlee+8jHZhbHVlIOOAgSBkZXBzIHNldFN0b3JlU3RhdGVcbiAqIEBwYXJhbSB7a2V5fe+8mumcgOimgeabtOaWsOeahCBTdG9yZSDkuK3nmoQga2V5XG4gKiAgQHBhcmFtICB2YWx1Ze+8mumcgOimgeabtOaWsOeahOWAvFxuICogIEBwYXJhbSAgZGVwc++8muS+nei1lumhueaVsOe7hO+8jOm7mOiupOS4uiBbdmFsdWVdXG4gKiAgQHBhcmFtICBzZXRTdG9yZVN0YXRl77ya5LiA5Liq5Y+v6YCJ55qE5Zue6LCD5Ye95pWw77yM55So5LqO5pu05pawIFN0b3JlIOeKtuaAgVxuICovXG5cbi8vIOWumuS5ieS4gOS4quWHveaVsO+8jOeUqOS6juWIm+W7uiBTdG9yZSDmm7TmlrDlmahcbmV4cG9ydCB2YXIgY3JlYXRlU3RvcmVVcGRhdGVyID0gZnVuY3Rpb24gY3JlYXRlU3RvcmVVcGRhdGVyKHN0b3JlQXBpKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgIHZhciBkZXBzID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBbdmFsdWVdO1xuICAgIHZhciBzZXRTdGF0ZUZuID0gYXJndW1lbnRzLmxlbmd0aCA+IDMgPyBhcmd1bWVudHNbM10gOiB1bmRlZmluZWQ7XG4gICAgLy8g6I635Y+WIFN0b3JlIOabtOaWsOWHveaVsFxuICAgIHZhciBzZXRTdGF0ZSA9IHNldFN0YXRlRm4gIT09IG51bGwgJiYgc2V0U3RhdGVGbiAhPT0gdm9pZCAwID8gc2V0U3RhdGVGbiA6IHN0b3JlQXBpLnNldFN0YXRlO1xuICAgIC8vIOS9v+eUqCB1c2VFZmZlY3Qg55uR5ZCs5L6d6LWW6aG55Y+Y5YyWXG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIOWmguaenCB2YWx1ZSDkuI3kuLogdW5kZWZpbmVk77yM5bCx5pu05pawIFN0b3JlIOS4reeahOaMh+WumiBrZXkg55qE5YC8XG4gICAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICB2YXIgX3N0b3JlQXBpJGdldFN0YXRlO1xuICAgICAgICB2YXIgX3N0YXRlID0gKF9zdG9yZUFwaSRnZXRTdGF0ZSA9IHN0b3JlQXBpLmdldFN0YXRlKSA9PT0gbnVsbCB8fCBfc3RvcmVBcGkkZ2V0U3RhdGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9zdG9yZUFwaSRnZXRTdGF0ZS5jYWxsKHN0b3JlQXBpKTtcbiAgICAgICAgaWYgKGlzRXF1YWwoX3N0YXRlID09PSBudWxsIHx8IF9zdGF0ZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3N0YXRlW2tleV0sIHZhbHVlKSkgcmV0dXJuO1xuXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgc2V0U3RhdGUoX2RlZmluZVByb3BlcnR5KHt9LCBrZXksIHZhbHVlKSwgZmFsc2UsIHtcbiAgICAgICAgICB0eXBlOiBcIlxcdUQ4M0RcXHVEQ0FEIHVzZVN0b3JlVXBkYXRlciAvIFwiLmNvbmNhdChrZXkpLFxuICAgICAgICAgIHBheWxvYWQ6IHZhbHVlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sIGRlcHMpO1xuICB9O1xufTsiXSwibmFtZXMiOlsiX2RlZmluZVByb3BlcnR5IiwiaXNFcXVhbCIsInVzZUVmZmVjdCIsImNyZWF0ZVN0b3JlVXBkYXRlciIsInN0b3JlQXBpIiwia2V5IiwidmFsdWUiLCJkZXBzIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwic2V0U3RhdGVGbiIsInNldFN0YXRlIiwiX3N0b3JlQXBpJGdldFN0YXRlIiwiX3N0YXRlIiwiZ2V0U3RhdGUiLCJjYWxsIiwidHlwZSIsImNvbmNhdCIsInBheWxvYWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/zustand-utils/es/createStoreUpdater.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/zustand-utils/es/optionalDevtools.js":
/*!***********************************************************!*\
  !*** ./node_modules/zustand-utils/es/optionalDevtools.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   optionalDevtools: () => (/* binding */ optionalDevtools)\n/* harmony export */ });\n/* harmony import */ var zustand_middleware__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zustand/middleware */ \"(ssr)/./node_modules/zustand/esm/middleware.mjs\");\n\n/**\n *\n * Make devtools optional\n * 将是否开启 devtools 变成可选方案\n * @see https://github.com/pmndrs/zustand/discussions/1266\n */ var optionalDevtools = function optionalDevtools(showDevTools) {\n    return showDevTools ? zustand_middleware__WEBPACK_IMPORTED_MODULE_0__.devtools : function(f) {\n        return f;\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvenVzdGFuZC11dGlscy9lcy9vcHRpb25hbERldnRvb2xzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQThDO0FBRTlDOzs7OztDQUtDLEdBQ00sSUFBSUMsbUJBQW1CLFNBQVNBLGlCQUFpQkMsWUFBWTtJQUNsRSxPQUFPQSxlQUFlRix3REFBUUEsR0FBRyxTQUFVRyxDQUFDO1FBQzFDLE9BQU9BO0lBQ1Q7QUFDRixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vS25vd2xlZGdlR3JhcGhRUy8uL25vZGVfbW9kdWxlcy96dXN0YW5kLXV0aWxzL2VzL29wdGlvbmFsRGV2dG9vbHMuanM/M2UzMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkZXZ0b29scyB9IGZyb20gJ3p1c3RhbmQvbWlkZGxld2FyZSc7XG5cbi8qKlxuICpcbiAqIE1ha2UgZGV2dG9vbHMgb3B0aW9uYWxcbiAqIOWwhuaYr+WQpuW8gOWQryBkZXZ0b29scyDlj5jmiJDlj6/pgInmlrnmoYhcbiAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3BtbmRycy96dXN0YW5kL2Rpc2N1c3Npb25zLzEyNjZcbiAqL1xuZXhwb3J0IHZhciBvcHRpb25hbERldnRvb2xzID0gZnVuY3Rpb24gb3B0aW9uYWxEZXZ0b29scyhzaG93RGV2VG9vbHMpIHtcbiAgcmV0dXJuIHNob3dEZXZUb29scyA/IGRldnRvb2xzIDogZnVuY3Rpb24gKGYpIHtcbiAgICByZXR1cm4gZjtcbiAgfTtcbn07Il0sIm5hbWVzIjpbImRldnRvb2xzIiwib3B0aW9uYWxEZXZ0b29scyIsInNob3dEZXZUb29scyIsImYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/zustand-utils/es/optionalDevtools.js\n");

/***/ })

};
;