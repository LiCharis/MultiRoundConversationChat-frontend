"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/trough";
exports.ids = ["vendor-chunks/trough"];
exports.modules = {

/***/ "(ssr)/./node_modules/trough/index.js":
/*!**************************************!*\
  !*** ./node_modules/trough/index.js ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   trough: () => (/* binding */ trough),\n/* harmony export */   wrap: () => (/* binding */ wrap)\n/* harmony export */ });\n/**\n * @typedef {(error?: Error|null|undefined, ...output: Array<any>) => void} Callback\n * @typedef {(...input: Array<any>) => any} Middleware\n *\n * @typedef {(...input: Array<any>) => void} Run\n *   Call all middleware.\n * @typedef {(fn: Middleware) => Pipeline} Use\n *   Add `fn` (middleware) to the list.\n * @typedef {{run: Run, use: Use}} Pipeline\n *   Middleware.\n */ /**\n * Create new middleware.\n *\n * @returns {Pipeline}\n */ function trough() {\n    /** @type {Array<Middleware>} */ const fns = [];\n    /** @type {Pipeline} */ const pipeline = {\n        run,\n        use\n    };\n    return pipeline;\n    /** @type {Run} */ function run(...values) {\n        let middlewareIndex = -1;\n        /** @type {Callback} */ const callback = values.pop();\n        if (typeof callback !== \"function\") {\n            throw new TypeError(\"Expected function as last argument, not \" + callback);\n        }\n        next(null, ...values);\n        /**\n     * Run the next `fn`, or we’re done.\n     *\n     * @param {Error|null|undefined} error\n     * @param {Array<any>} output\n     */ function next(error, ...output) {\n            const fn = fns[++middlewareIndex];\n            let index = -1;\n            if (error) {\n                callback(error);\n                return;\n            }\n            // Copy non-nullish input into values.\n            while(++index < values.length){\n                if (output[index] === null || output[index] === undefined) {\n                    output[index] = values[index];\n                }\n            }\n            // Save the newly created `output` for the next call.\n            values = output;\n            // Next or done.\n            if (fn) {\n                wrap(fn, next)(...output);\n            } else {\n                callback(null, ...output);\n            }\n        }\n    }\n    /** @type {Use} */ function use(middelware) {\n        if (typeof middelware !== \"function\") {\n            throw new TypeError(\"Expected `middelware` to be a function, not \" + middelware);\n        }\n        fns.push(middelware);\n        return pipeline;\n    }\n}\n/**\n * Wrap `middleware`.\n * Can be sync or async; return a promise, receive a callback, or return new\n * values and errors.\n *\n * @param {Middleware} middleware\n * @param {Callback} callback\n */ function wrap(middleware, callback) {\n    /** @type {boolean} */ let called;\n    return wrapped;\n    /**\n   * Call `middleware`.\n   * @this {any}\n   * @param {Array<any>} parameters\n   * @returns {void}\n   */ function wrapped(...parameters) {\n        const fnExpectsCallback = middleware.length > parameters.length;\n        /** @type {any} */ let result;\n        if (fnExpectsCallback) {\n            parameters.push(done);\n        }\n        try {\n            result = middleware.apply(this, parameters);\n        } catch (error) {\n            const exception = /** @type {Error} */ error;\n            // Well, this is quite the pickle.\n            // `middleware` received a callback and called it synchronously, but that\n            // threw an error.\n            // The only thing left to do is to throw the thing instead.\n            if (fnExpectsCallback && called) {\n                throw exception;\n            }\n            return done(exception);\n        }\n        if (!fnExpectsCallback) {\n            if (result instanceof Promise) {\n                result.then(then, done);\n            } else if (result instanceof Error) {\n                done(result);\n            } else {\n                then(result);\n            }\n        }\n    }\n    /**\n   * Call `callback`, only once.\n   * @type {Callback}\n   */ function done(error, ...output) {\n        if (!called) {\n            called = true;\n            callback(error, ...output);\n        }\n    }\n    /**\n   * Call `done` with one value.\n   *\n   * @param {any} [value]\n   */ function then(value) {\n        done(null, value);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Lbm93bGVkZ2VHcmFwaFFTLy4vbm9kZV9tb2R1bGVzL3Ryb3VnaC9pbmRleC5qcz8zYzdlIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQHR5cGVkZWYgeyhlcnJvcj86IEVycm9yfG51bGx8dW5kZWZpbmVkLCAuLi5vdXRwdXQ6IEFycmF5PGFueT4pID0+IHZvaWR9IENhbGxiYWNrXG4gKiBAdHlwZWRlZiB7KC4uLmlucHV0OiBBcnJheTxhbnk+KSA9PiBhbnl9IE1pZGRsZXdhcmVcbiAqXG4gKiBAdHlwZWRlZiB7KC4uLmlucHV0OiBBcnJheTxhbnk+KSA9PiB2b2lkfSBSdW5cbiAqICAgQ2FsbCBhbGwgbWlkZGxld2FyZS5cbiAqIEB0eXBlZGVmIHsoZm46IE1pZGRsZXdhcmUpID0+IFBpcGVsaW5lfSBVc2VcbiAqICAgQWRkIGBmbmAgKG1pZGRsZXdhcmUpIHRvIHRoZSBsaXN0LlxuICogQHR5cGVkZWYge3tydW46IFJ1biwgdXNlOiBVc2V9fSBQaXBlbGluZVxuICogICBNaWRkbGV3YXJlLlxuICovXG5cbi8qKlxuICogQ3JlYXRlIG5ldyBtaWRkbGV3YXJlLlxuICpcbiAqIEByZXR1cm5zIHtQaXBlbGluZX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRyb3VnaCgpIHtcbiAgLyoqIEB0eXBlIHtBcnJheTxNaWRkbGV3YXJlPn0gKi9cbiAgY29uc3QgZm5zID0gW11cbiAgLyoqIEB0eXBlIHtQaXBlbGluZX0gKi9cbiAgY29uc3QgcGlwZWxpbmUgPSB7cnVuLCB1c2V9XG5cbiAgcmV0dXJuIHBpcGVsaW5lXG5cbiAgLyoqIEB0eXBlIHtSdW59ICovXG4gIGZ1bmN0aW9uIHJ1biguLi52YWx1ZXMpIHtcbiAgICBsZXQgbWlkZGxld2FyZUluZGV4ID0gLTFcbiAgICAvKiogQHR5cGUge0NhbGxiYWNrfSAqL1xuICAgIGNvbnN0IGNhbGxiYWNrID0gdmFsdWVzLnBvcCgpXG5cbiAgICBpZiAodHlwZW9mIGNhbGxiYWNrICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBmdW5jdGlvbiBhcyBsYXN0IGFyZ3VtZW50LCBub3QgJyArIGNhbGxiYWNrKVxuICAgIH1cblxuICAgIG5leHQobnVsbCwgLi4udmFsdWVzKVxuXG4gICAgLyoqXG4gICAgICogUnVuIHRoZSBuZXh0IGBmbmAsIG9yIHdl4oCZcmUgZG9uZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RXJyb3J8bnVsbHx1bmRlZmluZWR9IGVycm9yXG4gICAgICogQHBhcmFtIHtBcnJheTxhbnk+fSBvdXRwdXRcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBuZXh0KGVycm9yLCAuLi5vdXRwdXQpIHtcbiAgICAgIGNvbnN0IGZuID0gZm5zWysrbWlkZGxld2FyZUluZGV4XVxuICAgICAgbGV0IGluZGV4ID0gLTFcblxuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIGNhbGxiYWNrKGVycm9yKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgLy8gQ29weSBub24tbnVsbGlzaCBpbnB1dCBpbnRvIHZhbHVlcy5cbiAgICAgIHdoaWxlICgrK2luZGV4IDwgdmFsdWVzLmxlbmd0aCkge1xuICAgICAgICBpZiAob3V0cHV0W2luZGV4XSA9PT0gbnVsbCB8fCBvdXRwdXRbaW5kZXhdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBvdXRwdXRbaW5kZXhdID0gdmFsdWVzW2luZGV4XVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFNhdmUgdGhlIG5ld2x5IGNyZWF0ZWQgYG91dHB1dGAgZm9yIHRoZSBuZXh0IGNhbGwuXG4gICAgICB2YWx1ZXMgPSBvdXRwdXRcblxuICAgICAgLy8gTmV4dCBvciBkb25lLlxuICAgICAgaWYgKGZuKSB7XG4gICAgICAgIHdyYXAoZm4sIG5leHQpKC4uLm91dHB1dClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNhbGxiYWNrKG51bGwsIC4uLm91dHB1dClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKiogQHR5cGUge1VzZX0gKi9cbiAgZnVuY3Rpb24gdXNlKG1pZGRlbHdhcmUpIHtcbiAgICBpZiAodHlwZW9mIG1pZGRlbHdhcmUgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICdFeHBlY3RlZCBgbWlkZGVsd2FyZWAgdG8gYmUgYSBmdW5jdGlvbiwgbm90ICcgKyBtaWRkZWx3YXJlXG4gICAgICApXG4gICAgfVxuXG4gICAgZm5zLnB1c2gobWlkZGVsd2FyZSlcbiAgICByZXR1cm4gcGlwZWxpbmVcbiAgfVxufVxuXG4vKipcbiAqIFdyYXAgYG1pZGRsZXdhcmVgLlxuICogQ2FuIGJlIHN5bmMgb3IgYXN5bmM7IHJldHVybiBhIHByb21pc2UsIHJlY2VpdmUgYSBjYWxsYmFjaywgb3IgcmV0dXJuIG5ld1xuICogdmFsdWVzIGFuZCBlcnJvcnMuXG4gKlxuICogQHBhcmFtIHtNaWRkbGV3YXJlfSBtaWRkbGV3YXJlXG4gKiBAcGFyYW0ge0NhbGxiYWNrfSBjYWxsYmFja1xuICovXG5leHBvcnQgZnVuY3Rpb24gd3JhcChtaWRkbGV3YXJlLCBjYWxsYmFjaykge1xuICAvKiogQHR5cGUge2Jvb2xlYW59ICovXG4gIGxldCBjYWxsZWRcblxuICByZXR1cm4gd3JhcHBlZFxuXG4gIC8qKlxuICAgKiBDYWxsIGBtaWRkbGV3YXJlYC5cbiAgICogQHRoaXMge2FueX1cbiAgICogQHBhcmFtIHtBcnJheTxhbnk+fSBwYXJhbWV0ZXJzXG4gICAqIEByZXR1cm5zIHt2b2lkfVxuICAgKi9cbiAgZnVuY3Rpb24gd3JhcHBlZCguLi5wYXJhbWV0ZXJzKSB7XG4gICAgY29uc3QgZm5FeHBlY3RzQ2FsbGJhY2sgPSBtaWRkbGV3YXJlLmxlbmd0aCA+IHBhcmFtZXRlcnMubGVuZ3RoXG4gICAgLyoqIEB0eXBlIHthbnl9ICovXG4gICAgbGV0IHJlc3VsdFxuXG4gICAgaWYgKGZuRXhwZWN0c0NhbGxiYWNrKSB7XG4gICAgICBwYXJhbWV0ZXJzLnB1c2goZG9uZSlcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgcmVzdWx0ID0gbWlkZGxld2FyZS5hcHBseSh0aGlzLCBwYXJhbWV0ZXJzKVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zdCBleGNlcHRpb24gPSAvKiogQHR5cGUge0Vycm9yfSAqLyAoZXJyb3IpXG5cbiAgICAgIC8vIFdlbGwsIHRoaXMgaXMgcXVpdGUgdGhlIHBpY2tsZS5cbiAgICAgIC8vIGBtaWRkbGV3YXJlYCByZWNlaXZlZCBhIGNhbGxiYWNrIGFuZCBjYWxsZWQgaXQgc3luY2hyb25vdXNseSwgYnV0IHRoYXRcbiAgICAgIC8vIHRocmV3IGFuIGVycm9yLlxuICAgICAgLy8gVGhlIG9ubHkgdGhpbmcgbGVmdCB0byBkbyBpcyB0byB0aHJvdyB0aGUgdGhpbmcgaW5zdGVhZC5cbiAgICAgIGlmIChmbkV4cGVjdHNDYWxsYmFjayAmJiBjYWxsZWQpIHtcbiAgICAgICAgdGhyb3cgZXhjZXB0aW9uXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkb25lKGV4Y2VwdGlvbilcbiAgICB9XG5cbiAgICBpZiAoIWZuRXhwZWN0c0NhbGxiYWNrKSB7XG4gICAgICBpZiAocmVzdWx0IGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICByZXN1bHQudGhlbih0aGVuLCBkb25lKVxuICAgICAgfSBlbHNlIGlmIChyZXN1bHQgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICBkb25lKHJlc3VsdClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoZW4ocmVzdWx0KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsIGBjYWxsYmFja2AsIG9ubHkgb25jZS5cbiAgICogQHR5cGUge0NhbGxiYWNrfVxuICAgKi9cbiAgZnVuY3Rpb24gZG9uZShlcnJvciwgLi4ub3V0cHV0KSB7XG4gICAgaWYgKCFjYWxsZWQpIHtcbiAgICAgIGNhbGxlZCA9IHRydWVcbiAgICAgIGNhbGxiYWNrKGVycm9yLCAuLi5vdXRwdXQpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGwgYGRvbmVgIHdpdGggb25lIHZhbHVlLlxuICAgKlxuICAgKiBAcGFyYW0ge2FueX0gW3ZhbHVlXVxuICAgKi9cbiAgZnVuY3Rpb24gdGhlbih2YWx1ZSkge1xuICAgIGRvbmUobnVsbCwgdmFsdWUpXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJ0cm91Z2giLCJmbnMiLCJwaXBlbGluZSIsInJ1biIsInVzZSIsInZhbHVlcyIsIm1pZGRsZXdhcmVJbmRleCIsImNhbGxiYWNrIiwicG9wIiwiVHlwZUVycm9yIiwibmV4dCIsImVycm9yIiwib3V0cHV0IiwiZm4iLCJpbmRleCIsImxlbmd0aCIsInVuZGVmaW5lZCIsIndyYXAiLCJtaWRkZWx3YXJlIiwicHVzaCIsIm1pZGRsZXdhcmUiLCJjYWxsZWQiLCJ3cmFwcGVkIiwicGFyYW1ldGVycyIsImZuRXhwZWN0c0NhbGxiYWNrIiwicmVzdWx0IiwiZG9uZSIsImFwcGx5IiwiZXhjZXB0aW9uIiwiUHJvbWlzZSIsInRoZW4iLCJFcnJvciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/trough/index.js\n");

/***/ })

};
;