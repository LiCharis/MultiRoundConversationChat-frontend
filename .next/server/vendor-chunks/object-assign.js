"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/object-assign";
exports.ids = ["vendor-chunks/object-assign"];
exports.modules = {

/***/ "(ssr)/./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/***/ ((module) => {

eval("/*\nobject-assign\n(c) Sindre Sorhus\n@license MIT\n*/ \n/* eslint-disable no-unused-vars */ var getOwnPropertySymbols = Object.getOwnPropertySymbols;\nvar hasOwnProperty = Object.prototype.hasOwnProperty;\nvar propIsEnumerable = Object.prototype.propertyIsEnumerable;\nfunction toObject(val) {\n    if (val === null || val === undefined) {\n        throw new TypeError(\"Object.assign cannot be called with null or undefined\");\n    }\n    return Object(val);\n}\nfunction shouldUseNative() {\n    try {\n        if (!Object.assign) {\n            return false;\n        }\n        // Detect buggy property enumeration order in older V8 versions.\n        // https://bugs.chromium.org/p/v8/issues/detail?id=4118\n        var test1 = new String(\"abc\"); // eslint-disable-line no-new-wrappers\n        test1[5] = \"de\";\n        if (Object.getOwnPropertyNames(test1)[0] === \"5\") {\n            return false;\n        }\n        // https://bugs.chromium.org/p/v8/issues/detail?id=3056\n        var test2 = {};\n        for(var i = 0; i < 10; i++){\n            test2[\"_\" + String.fromCharCode(i)] = i;\n        }\n        var order2 = Object.getOwnPropertyNames(test2).map(function(n) {\n            return test2[n];\n        });\n        if (order2.join(\"\") !== \"0123456789\") {\n            return false;\n        }\n        // https://bugs.chromium.org/p/v8/issues/detail?id=3056\n        var test3 = {};\n        \"abcdefghijklmnopqrst\".split(\"\").forEach(function(letter) {\n            test3[letter] = letter;\n        });\n        if (Object.keys(Object.assign({}, test3)).join(\"\") !== \"abcdefghijklmnopqrst\") {\n            return false;\n        }\n        return true;\n    } catch (err) {\n        // We don't expect any of the above to throw, but better to be safe.\n        return false;\n    }\n}\nmodule.exports = shouldUseNative() ? Object.assign : function(target, source) {\n    var from;\n    var to = toObject(target);\n    var symbols;\n    for(var s = 1; s < arguments.length; s++){\n        from = Object(arguments[s]);\n        for(var key in from){\n            if (hasOwnProperty.call(from, key)) {\n                to[key] = from[key];\n            }\n        }\n        if (getOwnPropertySymbols) {\n            symbols = getOwnPropertySymbols(from);\n            for(var i = 0; i < symbols.length; i++){\n                if (propIsEnumerable.call(from, symbols[i])) {\n                    to[symbols[i]] = from[symbols[i]];\n                }\n            }\n        }\n    }\n    return to;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvb2JqZWN0LWFzc2lnbi9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBQTs7OztBQUlBLEdBRUE7QUFDQSxpQ0FBaUMsR0FDakMsSUFBSUEsd0JBQXdCQyxPQUFPRCxxQkFBcUI7QUFDeEQsSUFBSUUsaUJBQWlCRCxPQUFPRSxTQUFTLENBQUNELGNBQWM7QUFDcEQsSUFBSUUsbUJBQW1CSCxPQUFPRSxTQUFTLENBQUNFLG9CQUFvQjtBQUU1RCxTQUFTQyxTQUFTQyxHQUFHO0lBQ3BCLElBQUlBLFFBQVEsUUFBUUEsUUFBUUMsV0FBVztRQUN0QyxNQUFNLElBQUlDLFVBQVU7SUFDckI7SUFFQSxPQUFPUixPQUFPTTtBQUNmO0FBRUEsU0FBU0c7SUFDUixJQUFJO1FBQ0gsSUFBSSxDQUFDVCxPQUFPVSxNQUFNLEVBQUU7WUFDbkIsT0FBTztRQUNSO1FBRUEsZ0VBQWdFO1FBRWhFLHVEQUF1RDtRQUN2RCxJQUFJQyxRQUFRLElBQUlDLE9BQU8sUUFBUyxzQ0FBc0M7UUFDdEVELEtBQUssQ0FBQyxFQUFFLEdBQUc7UUFDWCxJQUFJWCxPQUFPYSxtQkFBbUIsQ0FBQ0YsTUFBTSxDQUFDLEVBQUUsS0FBSyxLQUFLO1lBQ2pELE9BQU87UUFDUjtRQUVBLHVEQUF1RDtRQUN2RCxJQUFJRyxRQUFRLENBQUM7UUFDYixJQUFLLElBQUlDLElBQUksR0FBR0EsSUFBSSxJQUFJQSxJQUFLO1lBQzVCRCxLQUFLLENBQUMsTUFBTUYsT0FBT0ksWUFBWSxDQUFDRCxHQUFHLEdBQUdBO1FBQ3ZDO1FBQ0EsSUFBSUUsU0FBU2pCLE9BQU9hLG1CQUFtQixDQUFDQyxPQUFPSSxHQUFHLENBQUMsU0FBVUMsQ0FBQztZQUM3RCxPQUFPTCxLQUFLLENBQUNLLEVBQUU7UUFDaEI7UUFDQSxJQUFJRixPQUFPRyxJQUFJLENBQUMsUUFBUSxjQUFjO1lBQ3JDLE9BQU87UUFDUjtRQUVBLHVEQUF1RDtRQUN2RCxJQUFJQyxRQUFRLENBQUM7UUFDYix1QkFBdUJDLEtBQUssQ0FBQyxJQUFJQyxPQUFPLENBQUMsU0FBVUMsTUFBTTtZQUN4REgsS0FBSyxDQUFDRyxPQUFPLEdBQUdBO1FBQ2pCO1FBQ0EsSUFBSXhCLE9BQU95QixJQUFJLENBQUN6QixPQUFPVSxNQUFNLENBQUMsQ0FBQyxHQUFHVyxRQUFRRCxJQUFJLENBQUMsUUFDN0Msd0JBQXdCO1lBQ3pCLE9BQU87UUFDUjtRQUVBLE9BQU87SUFDUixFQUFFLE9BQU9NLEtBQUs7UUFDYixvRUFBb0U7UUFDcEUsT0FBTztJQUNSO0FBQ0Q7QUFFQUMsT0FBT0MsT0FBTyxHQUFHbkIsb0JBQW9CVCxPQUFPVSxNQUFNLEdBQUcsU0FBVW1CLE1BQU0sRUFBRUMsTUFBTTtJQUM1RSxJQUFJQztJQUNKLElBQUlDLEtBQUszQixTQUFTd0I7SUFDbEIsSUFBSUk7SUFFSixJQUFLLElBQUlDLElBQUksR0FBR0EsSUFBSUMsVUFBVUMsTUFBTSxFQUFFRixJQUFLO1FBQzFDSCxPQUFPL0IsT0FBT21DLFNBQVMsQ0FBQ0QsRUFBRTtRQUUxQixJQUFLLElBQUlHLE9BQU9OLEtBQU07WUFDckIsSUFBSTlCLGVBQWVxQyxJQUFJLENBQUNQLE1BQU1NLE1BQU07Z0JBQ25DTCxFQUFFLENBQUNLLElBQUksR0FBR04sSUFBSSxDQUFDTSxJQUFJO1lBQ3BCO1FBQ0Q7UUFFQSxJQUFJdEMsdUJBQXVCO1lBQzFCa0MsVUFBVWxDLHNCQUFzQmdDO1lBQ2hDLElBQUssSUFBSWhCLElBQUksR0FBR0EsSUFBSWtCLFFBQVFHLE1BQU0sRUFBRXJCLElBQUs7Z0JBQ3hDLElBQUlaLGlCQUFpQm1DLElBQUksQ0FBQ1AsTUFBTUUsT0FBTyxDQUFDbEIsRUFBRSxHQUFHO29CQUM1Q2lCLEVBQUUsQ0FBQ0MsT0FBTyxDQUFDbEIsRUFBRSxDQUFDLEdBQUdnQixJQUFJLENBQUNFLE9BQU8sQ0FBQ2xCLEVBQUUsQ0FBQztnQkFDbEM7WUFDRDtRQUNEO0lBQ0Q7SUFFQSxPQUFPaUI7QUFDUiIsInNvdXJjZXMiOlsid2VicGFjazovL0tub3dsZWRnZUdyYXBoUVMvLi9ub2RlX21vZHVsZXMvb2JqZWN0LWFzc2lnbi9pbmRleC5qcz9hMWQ1Il0sInNvdXJjZXNDb250ZW50IjpbIi8qXG5vYmplY3QtYXNzaWduXG4oYykgU2luZHJlIFNvcmh1c1xuQGxpY2Vuc2UgTUlUXG4qL1xuXG4ndXNlIHN0cmljdCc7XG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xudmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIHByb3BJc0VudW1lcmFibGUgPSBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG5mdW5jdGlvbiB0b09iamVjdCh2YWwpIHtcblx0aWYgKHZhbCA9PT0gbnVsbCB8fCB2YWwgPT09IHVuZGVmaW5lZCkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ09iamVjdC5hc3NpZ24gY2Fubm90IGJlIGNhbGxlZCB3aXRoIG51bGwgb3IgdW5kZWZpbmVkJyk7XG5cdH1cblxuXHRyZXR1cm4gT2JqZWN0KHZhbCk7XG59XG5cbmZ1bmN0aW9uIHNob3VsZFVzZU5hdGl2ZSgpIHtcblx0dHJ5IHtcblx0XHRpZiAoIU9iamVjdC5hc3NpZ24pIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBEZXRlY3QgYnVnZ3kgcHJvcGVydHkgZW51bWVyYXRpb24gb3JkZXIgaW4gb2xkZXIgVjggdmVyc2lvbnMuXG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD00MTE4XG5cdFx0dmFyIHRlc3QxID0gbmV3IFN0cmluZygnYWJjJyk7ICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ldy13cmFwcGVyc1xuXHRcdHRlc3QxWzVdID0gJ2RlJztcblx0XHRpZiAoT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDEpWzBdID09PSAnNScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QyID0ge307XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG5cdFx0XHR0ZXN0MlsnXycgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGkpXSA9IGk7XG5cdFx0fVxuXHRcdHZhciBvcmRlcjIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MikubWFwKGZ1bmN0aW9uIChuKSB7XG5cdFx0XHRyZXR1cm4gdGVzdDJbbl07XG5cdFx0fSk7XG5cdFx0aWYgKG9yZGVyMi5qb2luKCcnKSAhPT0gJzAxMjM0NTY3ODknKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MyA9IHt9O1xuXHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24gKGxldHRlcikge1xuXHRcdFx0dGVzdDNbbGV0dGVyXSA9IGxldHRlcjtcblx0XHR9KTtcblx0XHRpZiAoT2JqZWN0LmtleXMoT2JqZWN0LmFzc2lnbih7fSwgdGVzdDMpKS5qb2luKCcnKSAhPT1cblx0XHRcdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXHR9IGNhdGNoIChlcnIpIHtcblx0XHQvLyBXZSBkb24ndCBleHBlY3QgYW55IG9mIHRoZSBhYm92ZSB0byB0aHJvdywgYnV0IGJldHRlciB0byBiZSBzYWZlLlxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNob3VsZFVzZU5hdGl2ZSgpID8gT2JqZWN0LmFzc2lnbiA6IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSkge1xuXHR2YXIgZnJvbTtcblx0dmFyIHRvID0gdG9PYmplY3QodGFyZ2V0KTtcblx0dmFyIHN5bWJvbHM7XG5cblx0Zm9yICh2YXIgcyA9IDE7IHMgPCBhcmd1bWVudHMubGVuZ3RoOyBzKyspIHtcblx0XHRmcm9tID0gT2JqZWN0KGFyZ3VtZW50c1tzXSk7XG5cblx0XHRmb3IgKHZhciBrZXkgaW4gZnJvbSkge1xuXHRcdFx0aWYgKGhhc093blByb3BlcnR5LmNhbGwoZnJvbSwga2V5KSkge1xuXHRcdFx0XHR0b1trZXldID0gZnJvbVtrZXldO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcblx0XHRcdHN5bWJvbHMgPSBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZnJvbSk7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN5bWJvbHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKHByb3BJc0VudW1lcmFibGUuY2FsbChmcm9tLCBzeW1ib2xzW2ldKSkge1xuXHRcdFx0XHRcdHRvW3N5bWJvbHNbaV1dID0gZnJvbVtzeW1ib2xzW2ldXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiB0bztcbn07XG4iXSwibmFtZXMiOlsiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwiT2JqZWN0IiwiaGFzT3duUHJvcGVydHkiLCJwcm90b3R5cGUiLCJwcm9wSXNFbnVtZXJhYmxlIiwicHJvcGVydHlJc0VudW1lcmFibGUiLCJ0b09iamVjdCIsInZhbCIsInVuZGVmaW5lZCIsIlR5cGVFcnJvciIsInNob3VsZFVzZU5hdGl2ZSIsImFzc2lnbiIsInRlc3QxIiwiU3RyaW5nIiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsInRlc3QyIiwiaSIsImZyb21DaGFyQ29kZSIsIm9yZGVyMiIsIm1hcCIsIm4iLCJqb2luIiwidGVzdDMiLCJzcGxpdCIsImZvckVhY2giLCJsZXR0ZXIiLCJrZXlzIiwiZXJyIiwibW9kdWxlIiwiZXhwb3J0cyIsInRhcmdldCIsInNvdXJjZSIsImZyb20iLCJ0byIsInN5bWJvbHMiLCJzIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwia2V5IiwiY2FsbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/object-assign/index.js\n");

/***/ })

};
;