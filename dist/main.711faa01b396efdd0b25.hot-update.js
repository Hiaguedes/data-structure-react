"use strict";
self["webpackHotUpdatedata_structure_react"]("main",{

/***/ "./src/presentation/hooks/useQueue.tsx":
/*!*********************************************!*\
  !*** ./src/presentation/hooks/useQueue.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useQueue() {
    const [count, setCount] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(0);
    const [lowestCount, setLowestCount] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(0);
    const [items, setItems] = react__WEBPACK_IMPORTED_MODULE_0___default().useState([]);
    const enqueue = (element) => {
        items[count] = element;
        setCount(count => count + 1);
    };
    const dequeue = react__WEBPACK_IMPORTED_MODULE_0___default().useCallback(() => {
        if (isEmpty()) {
            return undefined;
        }
        const result = items[0];
        items.shift();
        console.log('items fila', items);
        setItems(items);
        setCount(count => count - 1);
        return result;
    }, [items, lowestCount]);
    const peek = () => {
        if (isEmpty()) {
            return undefined;
        }
        return items[lowestCount];
    };
    const isEmpty = () => {
        return items.length === 0;
    };
    const clear = () => {
        setItems({});
        setCount(0);
        setLowestCount(0);
    };
    const size = () => {
        return count - lowestCount;
    };
    const toString = () => {
        if (isEmpty()) {
            return '';
        }
        let objString = `${items[lowestCount]}`;
        for (let i = lowestCount + 1; i < count; i++) {
            objString = `${objString},${items[i]}`;
        }
        return objString;
    };
    const values = () => {
        return isEmpty() ? undefined : Object.values(items);
    };
    return {
        peek,
        values,
        toString,
        size,
        clear,
        isEmpty,
        dequeue,
        enqueue,
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useQueue);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("0a2909584d674e3f43d8")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGlFQUFlLFFBQVEsRUFBQzs7Ozs7Ozs7O1VDM0UxQiIsInNvdXJjZXMiOlsid2VicGFjazovL2RhdGEtc3RydWN0dXJlLXJlYWN0Ly4vc3JjL3ByZXNlbnRhdGlvbi9ob29rcy91c2VRdWV1ZS50c3giLCJ3ZWJwYWNrOi8vZGF0YS1zdHJ1Y3R1cmUtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIHVzZVF1ZXVlPFQ+ICgpIHtcclxuXHJcbiAgICBjb25zdCBbY291bnQsIHNldENvdW50XSA9IFJlYWN0LnVzZVN0YXRlPG51bWJlcj4oMCk7XHJcbiAgICBjb25zdCBbbG93ZXN0Q291bnQsIHNldExvd2VzdENvdW50XSA9IFJlYWN0LnVzZVN0YXRlPG51bWJlcj4oMCk7XHJcbiAgICBjb25zdCBbaXRlbXMsIHNldEl0ZW1zXSA9IFJlYWN0LnVzZVN0YXRlPGFueT4oW10pO1xyXG4gIFxyXG4gICAgY29uc3QgZW5xdWV1ZSA9IChlbGVtZW50OiBUKSA9PiB7XHJcbiAgICAgIGl0ZW1zW2NvdW50XSA9IGVsZW1lbnQ7XHJcbiAgICAgIHNldENvdW50KGNvdW50ID0+IGNvdW50ICsgMSk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBjb25zdCBkZXF1ZXVlID0gUmVhY3QudXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICBpZiAoaXNFbXB0eSgpKSB7XHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCByZXN1bHQgPSBpdGVtc1swXTtcclxuICAgICAgaXRlbXMuc2hpZnQoKTtcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKCdpdGVtcyBmaWxhJywgaXRlbXMpXHJcblxyXG4gICAgICBzZXRJdGVtcyhpdGVtcylcclxuICAgICAgc2V0Q291bnQoY291bnQgPT4gY291bnQgLSAxKVxyXG4gICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfSwgW2l0ZW1zLCBsb3dlc3RDb3VudF0pXHJcbiAgXHJcbiAgICBjb25zdCBwZWVrID0gKCkgPT4ge1xyXG4gICAgICBpZiAoaXNFbXB0eSgpKSB7XHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gaXRlbXNbbG93ZXN0Q291bnRdO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgY29uc3QgaXNFbXB0eSA9ICgpID0+IHtcclxuICAgICAgcmV0dXJuIGl0ZW1zLmxlbmd0aCA9PT0gMDtcclxuICAgIH1cclxuICBcclxuICAgIGNvbnN0IGNsZWFyID0gKCkgPT4ge1xyXG4gICAgICBzZXRJdGVtcyh7fSk7XHJcbiAgICAgIHNldENvdW50KDApO1xyXG4gICAgICBzZXRMb3dlc3RDb3VudCgwKTtcclxuICAgIH1cclxuICBcclxuICAgIGNvbnN0IHNpemUgPSAoKSA9PiB7XHJcbiAgICAgIHJldHVybiBjb3VudCAtIGxvd2VzdENvdW50O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgY29uc3QgdG9TdHJpbmcgPSAoKSA9PiB7XHJcbiAgICAgIGlmIChpc0VtcHR5KCkpIHtcclxuICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgIH1cclxuICAgICAgbGV0IG9ialN0cmluZyA9IGAke2l0ZW1zW2xvd2VzdENvdW50XX1gO1xyXG4gICAgICBmb3IgKGxldCBpID0gbG93ZXN0Q291bnQgKyAxOyBpIDwgY291bnQ7IGkrKykge1xyXG4gICAgICAgIG9ialN0cmluZyA9IGAke29ialN0cmluZ30sJHtpdGVtc1tpXX1gO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBvYmpTdHJpbmc7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBjb25zdCB2YWx1ZXMgPSAoKTogdW5kZWZpbmVkIHwgVFtdID0+IHtcclxuICAgICAgcmV0dXJuIGlzRW1wdHkoKSA/IHVuZGVmaW5lZCA6IE9iamVjdC52YWx1ZXMoaXRlbXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcGVlayxcclxuICAgICAgICB2YWx1ZXMsXHJcbiAgICAgICAgdG9TdHJpbmcsXHJcbiAgICAgICAgc2l6ZSxcclxuICAgICAgICBjbGVhcixcclxuICAgICAgICBpc0VtcHR5LFxyXG4gICAgICAgIGRlcXVldWUsXHJcbiAgICAgICAgZW5xdWV1ZSxcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IHVzZVF1ZXVlOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjBhMjkwOTU4NGQ2NzRlM2Y0M2Q4XCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9