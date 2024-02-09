"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/hast-util-parse-selector";
exports.ids = ["vendor-chunks/hast-util-parse-selector"];
exports.modules = {

/***/ "(ssr)/./node_modules/hast-util-parse-selector/lib/index.js":
/*!************************************************************!*\
  !*** ./node_modules/hast-util-parse-selector/lib/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   parseSelector: () => (/* binding */ parseSelector)\n/* harmony export */ });\n/**\n * @typedef {import('hast').Properties} Properties\n * @typedef {import('hast').Element} Element\n */ const search = /[#.]/g;\n/**\n * Create a hast element from a simple CSS selector.\n *\n * @template {string} Selector\n *   Type of selector.\n * @template {string} [DefaultTagName='div']\n *   Type of default tag name.\n * @param {Selector | null | undefined} [selector]\n *   Simple CSS selector.\n *\n *   Can contain a tag name (`foo`), classes (`.bar`), and an ID (`#baz`).\n *   Multiple classes are allowed.\n *   Uses the last ID if multiple IDs are found.\n * @param {DefaultTagName | null | undefined} [defaultTagName='div']\n *   Tag name to use if `selector` does not specify one (default: `'div'`).\n * @returns {Element & {tagName: import('./extract.js').ExtractTagName<Selector, DefaultTagName>}}\n *   Built element.\n */ function parseSelector(selector, defaultTagName) {\n    const value = selector || \"\";\n    /** @type {Properties} */ const props = {};\n    let start = 0;\n    /** @type {string | undefined} */ let previous;\n    /** @type {string | undefined} */ let tagName;\n    while(start < value.length){\n        search.lastIndex = start;\n        const match = search.exec(value);\n        const subvalue = value.slice(start, match ? match.index : value.length);\n        if (subvalue) {\n            if (!previous) {\n                tagName = subvalue;\n            } else if (previous === \"#\") {\n                props.id = subvalue;\n            } else if (Array.isArray(props.className)) {\n                props.className.push(subvalue);\n            } else {\n                props.className = [\n                    subvalue\n                ];\n            }\n            start += subvalue.length;\n        }\n        if (match) {\n            previous = match[0];\n            start++;\n        }\n    }\n    return {\n        type: \"element\",\n        // @ts-expect-error: fine.\n        tagName: tagName || defaultTagName || \"div\",\n        properties: props,\n        children: []\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvaGFzdC11dGlsLXBhcnNlLXNlbGVjdG9yL2xpYi9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7OztDQUdDLEdBRUQsTUFBTUEsU0FBUztBQUVmOzs7Ozs7Ozs7Ozs7Ozs7OztDQWlCQyxHQUNNLFNBQVNDLGNBQWNDLFFBQVEsRUFBRUMsY0FBYztJQUNwRCxNQUFNQyxRQUFRRixZQUFZO0lBQzFCLHVCQUF1QixHQUN2QixNQUFNRyxRQUFRLENBQUM7SUFDZixJQUFJQyxRQUFRO0lBQ1osK0JBQStCLEdBQy9CLElBQUlDO0lBQ0osK0JBQStCLEdBQy9CLElBQUlDO0lBRUosTUFBT0YsUUFBUUYsTUFBTUssTUFBTSxDQUFFO1FBQzNCVCxPQUFPVSxTQUFTLEdBQUdKO1FBQ25CLE1BQU1LLFFBQVFYLE9BQU9ZLElBQUksQ0FBQ1I7UUFDMUIsTUFBTVMsV0FBV1QsTUFBTVUsS0FBSyxDQUFDUixPQUFPSyxRQUFRQSxNQUFNSSxLQUFLLEdBQUdYLE1BQU1LLE1BQU07UUFFdEUsSUFBSUksVUFBVTtZQUNaLElBQUksQ0FBQ04sVUFBVTtnQkFDYkMsVUFBVUs7WUFDWixPQUFPLElBQUlOLGFBQWEsS0FBSztnQkFDM0JGLE1BQU1XLEVBQUUsR0FBR0g7WUFDYixPQUFPLElBQUlJLE1BQU1DLE9BQU8sQ0FBQ2IsTUFBTWMsU0FBUyxHQUFHO2dCQUN6Q2QsTUFBTWMsU0FBUyxDQUFDQyxJQUFJLENBQUNQO1lBQ3ZCLE9BQU87Z0JBQ0xSLE1BQU1jLFNBQVMsR0FBRztvQkFBQ047aUJBQVM7WUFDOUI7WUFFQVAsU0FBU08sU0FBU0osTUFBTTtRQUMxQjtRQUVBLElBQUlFLE9BQU87WUFDVEosV0FBV0ksS0FBSyxDQUFDLEVBQUU7WUFDbkJMO1FBQ0Y7SUFDRjtJQUVBLE9BQU87UUFDTGUsTUFBTTtRQUNOLDBCQUEwQjtRQUMxQmIsU0FBU0EsV0FBV0wsa0JBQWtCO1FBQ3RDbUIsWUFBWWpCO1FBQ1prQixVQUFVLEVBQUU7SUFDZDtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vS25vd2xlZGdlR3JhcGhRUy8uL25vZGVfbW9kdWxlcy9oYXN0LXV0aWwtcGFyc2Utc2VsZWN0b3IvbGliL2luZGV4LmpzP2NhYmQiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdoYXN0JykuUHJvcGVydGllc30gUHJvcGVydGllc1xuICogQHR5cGVkZWYge2ltcG9ydCgnaGFzdCcpLkVsZW1lbnR9IEVsZW1lbnRcbiAqL1xuXG5jb25zdCBzZWFyY2ggPSAvWyMuXS9nXG5cbi8qKlxuICogQ3JlYXRlIGEgaGFzdCBlbGVtZW50IGZyb20gYSBzaW1wbGUgQ1NTIHNlbGVjdG9yLlxuICpcbiAqIEB0ZW1wbGF0ZSB7c3RyaW5nfSBTZWxlY3RvclxuICogICBUeXBlIG9mIHNlbGVjdG9yLlxuICogQHRlbXBsYXRlIHtzdHJpbmd9IFtEZWZhdWx0VGFnTmFtZT0nZGl2J11cbiAqICAgVHlwZSBvZiBkZWZhdWx0IHRhZyBuYW1lLlxuICogQHBhcmFtIHtTZWxlY3RvciB8IG51bGwgfCB1bmRlZmluZWR9IFtzZWxlY3Rvcl1cbiAqICAgU2ltcGxlIENTUyBzZWxlY3Rvci5cbiAqXG4gKiAgIENhbiBjb250YWluIGEgdGFnIG5hbWUgKGBmb29gKSwgY2xhc3NlcyAoYC5iYXJgKSwgYW5kIGFuIElEIChgI2JhemApLlxuICogICBNdWx0aXBsZSBjbGFzc2VzIGFyZSBhbGxvd2VkLlxuICogICBVc2VzIHRoZSBsYXN0IElEIGlmIG11bHRpcGxlIElEcyBhcmUgZm91bmQuXG4gKiBAcGFyYW0ge0RlZmF1bHRUYWdOYW1lIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2RlZmF1bHRUYWdOYW1lPSdkaXYnXVxuICogICBUYWcgbmFtZSB0byB1c2UgaWYgYHNlbGVjdG9yYCBkb2VzIG5vdCBzcGVjaWZ5IG9uZSAoZGVmYXVsdDogYCdkaXYnYCkuXG4gKiBAcmV0dXJucyB7RWxlbWVudCAmIHt0YWdOYW1lOiBpbXBvcnQoJy4vZXh0cmFjdC5qcycpLkV4dHJhY3RUYWdOYW1lPFNlbGVjdG9yLCBEZWZhdWx0VGFnTmFtZT59fVxuICogICBCdWlsdCBlbGVtZW50LlxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VTZWxlY3RvcihzZWxlY3RvciwgZGVmYXVsdFRhZ05hbWUpIHtcbiAgY29uc3QgdmFsdWUgPSBzZWxlY3RvciB8fCAnJ1xuICAvKiogQHR5cGUge1Byb3BlcnRpZXN9ICovXG4gIGNvbnN0IHByb3BzID0ge31cbiAgbGV0IHN0YXJ0ID0gMFxuICAvKiogQHR5cGUge3N0cmluZyB8IHVuZGVmaW5lZH0gKi9cbiAgbGV0IHByZXZpb3VzXG4gIC8qKiBAdHlwZSB7c3RyaW5nIHwgdW5kZWZpbmVkfSAqL1xuICBsZXQgdGFnTmFtZVxuXG4gIHdoaWxlIChzdGFydCA8IHZhbHVlLmxlbmd0aCkge1xuICAgIHNlYXJjaC5sYXN0SW5kZXggPSBzdGFydFxuICAgIGNvbnN0IG1hdGNoID0gc2VhcmNoLmV4ZWModmFsdWUpXG4gICAgY29uc3Qgc3VidmFsdWUgPSB2YWx1ZS5zbGljZShzdGFydCwgbWF0Y2ggPyBtYXRjaC5pbmRleCA6IHZhbHVlLmxlbmd0aClcblxuICAgIGlmIChzdWJ2YWx1ZSkge1xuICAgICAgaWYgKCFwcmV2aW91cykge1xuICAgICAgICB0YWdOYW1lID0gc3VidmFsdWVcbiAgICAgIH0gZWxzZSBpZiAocHJldmlvdXMgPT09ICcjJykge1xuICAgICAgICBwcm9wcy5pZCA9IHN1YnZhbHVlXG4gICAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocHJvcHMuY2xhc3NOYW1lKSkge1xuICAgICAgICBwcm9wcy5jbGFzc05hbWUucHVzaChzdWJ2YWx1ZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb3BzLmNsYXNzTmFtZSA9IFtzdWJ2YWx1ZV1cbiAgICAgIH1cblxuICAgICAgc3RhcnQgKz0gc3VidmFsdWUubGVuZ3RoXG4gICAgfVxuXG4gICAgaWYgKG1hdGNoKSB7XG4gICAgICBwcmV2aW91cyA9IG1hdGNoWzBdXG4gICAgICBzdGFydCsrXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAnZWxlbWVudCcsXG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvcjogZmluZS5cbiAgICB0YWdOYW1lOiB0YWdOYW1lIHx8IGRlZmF1bHRUYWdOYW1lIHx8ICdkaXYnLFxuICAgIHByb3BlcnRpZXM6IHByb3BzLFxuICAgIGNoaWxkcmVuOiBbXVxuICB9XG59XG4iXSwibmFtZXMiOlsic2VhcmNoIiwicGFyc2VTZWxlY3RvciIsInNlbGVjdG9yIiwiZGVmYXVsdFRhZ05hbWUiLCJ2YWx1ZSIsInByb3BzIiwic3RhcnQiLCJwcmV2aW91cyIsInRhZ05hbWUiLCJsZW5ndGgiLCJsYXN0SW5kZXgiLCJtYXRjaCIsImV4ZWMiLCJzdWJ2YWx1ZSIsInNsaWNlIiwiaW5kZXgiLCJpZCIsIkFycmF5IiwiaXNBcnJheSIsImNsYXNzTmFtZSIsInB1c2giLCJ0eXBlIiwicHJvcGVydGllcyIsImNoaWxkcmVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/hast-util-parse-selector/lib/index.js\n");

/***/ })

};
;