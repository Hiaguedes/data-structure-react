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
    const [items, setItems] = react__WEBPACK_IMPORTED_MODULE_0___default().useState({});
    const enqueue = (element) => {
        items[count] = element;
        setCount(count => count + 1);
    };
    const dequeue = () => {
        if (isEmpty()) {
            return undefined;
        }
        const result = items[lowestCount];
        items.pop();
        setItems(items);
        setLowestCount(lowestCount => lowestCount - 1);
        return result;
    };
    const peek = () => {
        if (isEmpty()) {
            return undefined;
        }
        return items[lowestCount];
    };
    const isEmpty = () => {
        return size() === 0;
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
        peek,
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
/******/ 	__webpack_require__.h = () => ("8e61a075153e687ab10d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YXRpb24vaG9va3MvdXNlUXVldWUudHN4Iiwid2VicGFjazovL2RhdGEtc3RydWN0dXJlLXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5mdW5jdGlvbiB1c2VRdWV1ZTxUPiAoKSB7XHJcblxyXG4gICAgY29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSBSZWFjdC51c2VTdGF0ZTxudW1iZXI+KDApO1xyXG4gICAgY29uc3QgW2xvd2VzdENvdW50LCBzZXRMb3dlc3RDb3VudF0gPSBSZWFjdC51c2VTdGF0ZTxudW1iZXI+KDApO1xyXG4gICAgY29uc3QgW2l0ZW1zLCBzZXRJdGVtc10gPSBSZWFjdC51c2VTdGF0ZTxhbnk+KHt9KTtcclxuICBcclxuICAgIGNvbnN0IGVucXVldWUgPSAoZWxlbWVudDogVCkgPT4ge1xyXG4gICAgICBpdGVtc1tjb3VudF0gPSBlbGVtZW50O1xyXG4gICAgICBzZXRDb3VudChjb3VudCA9PiBjb3VudCArIDEpO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgY29uc3QgZGVxdWV1ZSA9ICgpID0+IHtcclxuICAgICAgaWYgKGlzRW1wdHkoKSkge1xyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgcmVzdWx0ID0gaXRlbXNbbG93ZXN0Q291bnRdO1xyXG4gICAgICBpdGVtcy5wb3AoKTtcclxuXHJcbiAgICAgIHNldEl0ZW1zKGl0ZW1zKVxyXG4gICAgICBzZXRMb3dlc3RDb3VudChsb3dlc3RDb3VudCA9PiBsb3dlc3RDb3VudCAtIDEpXHJcbiAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBjb25zdCBwZWVrID0gKCkgPT4ge1xyXG4gICAgICBpZiAoaXNFbXB0eSgpKSB7XHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gaXRlbXNbbG93ZXN0Q291bnRdO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgY29uc3QgaXNFbXB0eSA9ICgpID0+IHtcclxuICAgICAgcmV0dXJuIHNpemUoKSA9PT0gMDtcclxuICAgIH1cclxuICBcclxuICAgIGNvbnN0IGNsZWFyID0gKCkgPT4ge1xyXG4gICAgICBzZXRJdGVtcyh7fSk7XHJcbiAgICAgIHNldENvdW50KDApO1xyXG4gICAgICBzZXRMb3dlc3RDb3VudCgwKTtcclxuICAgIH1cclxuICBcclxuICAgIGNvbnN0IHNpemUgPSAoKSA9PiB7XHJcbiAgICAgIHJldHVybiBjb3VudCAtIGxvd2VzdENvdW50O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgY29uc3QgdG9TdHJpbmcgPSAoKSA9PiB7XHJcbiAgICAgIGlmIChpc0VtcHR5KCkpIHtcclxuICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgIH1cclxuICAgICAgbGV0IG9ialN0cmluZyA9IGAke2l0ZW1zW2xvd2VzdENvdW50XX1gO1xyXG4gICAgICBmb3IgKGxldCBpID0gbG93ZXN0Q291bnQgKyAxOyBpIDwgY291bnQ7IGkrKykge1xyXG4gICAgICAgIG9ialN0cmluZyA9IGAke29ialN0cmluZ30sJHtpdGVtc1tpXX1gO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBvYmpTdHJpbmc7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBjb25zdCB2YWx1ZXMgPSAoKTogdW5kZWZpbmVkIHwgVFtdID0+IHtcclxuICAgICAgcmV0dXJuIGlzRW1wdHkoKSA/IHVuZGVmaW5lZCA6IE9iamVjdC52YWx1ZXMoaXRlbXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcGVlayxcclxuICAgICAgICB2YWx1ZXMsXHJcbiAgICAgICAgdG9TdHJpbmcsXHJcbiAgICAgICAgc2l6ZSxcclxuICAgICAgICBjbGVhcixcclxuICAgICAgICBwZWVrLFxyXG4gICAgICAgIGlzRW1wdHksXHJcbiAgICAgICAgZGVxdWV1ZSxcclxuICAgICAgICBlbnF1ZXVlLFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgdXNlUXVldWU7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiOGU2MWEwNzUxNTNlNjg3YWIxMGRcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=