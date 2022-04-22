"use strict";
self["webpackHotUpdatedata_structure_react"]("main",{

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _presentation_pages_queue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./presentation/pages/queue */ "./src/presentation/pages/queue.tsx");
/* harmony import */ var _presentation_pages_stack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./presentation/pages/stack */ "./src/presentation/pages/stack.tsx");



const App = () => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_presentation_pages_stack__WEBPACK_IMPORTED_MODULE_2__["default"], null),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_presentation_pages_queue__WEBPACK_IMPORTED_MODULE_1__["default"], null)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);


/***/ }),

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


/***/ }),

/***/ "./src/presentation/pages/queue.tsx":
/*!******************************************!*\
  !*** ./src/presentation/pages/queue.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_useQueue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/useQueue */ "./src/presentation/hooks/useQueue.tsx");


const Queue = () => {
    const queue = (0,_hooks_useQueue__WEBPACK_IMPORTED_MODULE_1__["default"])();
    const inputRef = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(null);
    const [inputValue, setInputValue] = react__WEBPACK_IMPORTED_MODULE_0___default().useState('0');
    react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
        console.log('valores', queue.values());
    }, [queue]);
    const RenderStackValues = react__WEBPACK_IMPORTED_MODULE_0___default().useCallback(() => {
        if (queue.isEmpty()) {
            return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "nao temos valores na pilha"));
        }
        return queue.values().map(value => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, value)));
    }, [queue]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Stack"),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", { ref: inputRef, type: 'number', value: inputValue, onChange: (event) => { setInputValue(event.target.value); } }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { children: "Adicionar a fila", onClick: () => {
                queue.enqueue(Number(inputValue));
                setInputValue('');
                inputRef.current.focus();
            } }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { children: "Tirar da fila", onClick: () => {
                queue.dequeue();
                setInputValue('');
                inputRef === null || inputRef === void 0 ? void 0 : inputRef.current.focus();
            } }),
        RenderStackValues()));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Queue);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("8dd4a9f2ccce3917713e")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi44YjFmNjE2ZDAyNzEzN2YyMjNlYy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ3lCO0FBQ3FCO0FBRUE7QUFFOUMsTUFBTSxHQUFHLEdBQUcsR0FBRyxFQUFFO0lBQ2YsT0FBTyxDQUNMO1FBQ0UsMkRBQUMsaUVBQUssT0FBRztRQUNULDJEQUFDLGlFQUFLLE9BQUcsQ0FDUixDQUNKO0FBQ0gsQ0FBQztBQUVELGlFQUFlLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZlE7QUFFMUIsU0FBUyxRQUFRO0lBRWIsTUFBTSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsR0FBRyxxREFBYyxDQUFTLENBQUMsQ0FBQyxDQUFDO0lBQ3BELE1BQU0sQ0FBQyxXQUFXLEVBQUUsY0FBYyxDQUFDLEdBQUcscURBQWMsQ0FBUyxDQUFDLENBQUMsQ0FBQztJQUNoRSxNQUFNLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxHQUFHLHFEQUFjLENBQU0sRUFBRSxDQUFDLENBQUM7SUFFbEQsTUFBTSxPQUFPLEdBQUcsQ0FBQyxPQUFVLEVBQUUsRUFBRTtRQUM3QixLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQsTUFBTSxPQUFPLEdBQUcsR0FBRyxFQUFFO1FBQ25CLElBQUksT0FBTyxFQUFFLEVBQUU7WUFDYixPQUFPLFNBQVMsQ0FBQztTQUNsQjtRQUNELE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNsQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUM7UUFFWixRQUFRLENBQUMsS0FBSyxDQUFDO1FBQ2YsY0FBYyxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztRQUM5QyxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBRUQs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RUFBRTtnQkFDVixLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO2dCQUNsQyxhQUFhLENBQUMsRUFBRSxDQUFDO2dCQUNqQixRQUFRLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQzdCLENBQUMsR0FDSDtRQUNGLHVFQUNJLFFBQVEsRUFBQyxlQUFlLEVBQ3hCLE9BQU8sRUFBRSxHQUFHLEVBQUU7Z0JBQ1YsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUNoQixhQUFhLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQ2xCLFFBQVEsYUFBUixRQUFRLHVCQUFSLFFBQVEsQ0FBRSxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDOUIsQ0FBQyxHQUNIO1FBQ0QsaUJBQWlCLEVBQUUsQ0FDckIsQ0FDTjtBQUNMLENBQUM7QUFFRCxpRUFBZSxLQUFLLEVBQUM7Ozs7Ozs7OztVQ25EckIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXRhLXN0cnVjdHVyZS1yZWFjdC8uL3NyYy9BcHAudHN4Iiwid2VicGFjazovL2RhdGEtc3RydWN0dXJlLXJlYWN0Ly4vc3JjL3ByZXNlbnRhdGlvbi9ob29rcy91c2VRdWV1ZS50c3giLCJ3ZWJwYWNrOi8vZGF0YS1zdHJ1Y3R1cmUtcmVhY3QvLi9zcmMvcHJlc2VudGF0aW9uL3BhZ2VzL3F1ZXVlLnRzeCIsIndlYnBhY2s6Ly9kYXRhLXN0cnVjdHVyZS1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFF1ZXVlIGZyb20gJy4vcHJlc2VudGF0aW9uL3BhZ2VzL3F1ZXVlJ1xyXG5cclxuaW1wb3J0IFN0YWNrIGZyb20gJy4vcHJlc2VudGF0aW9uL3BhZ2VzL3N0YWNrJ1xyXG5cclxuY29uc3QgQXBwID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8U3RhY2sgLz5cclxuICAgICAgPFF1ZXVlIC8+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcCIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIHVzZVF1ZXVlPFQ+IHtcclxuXHJcbiAgICBjb25zdCBbY291bnQsIHNldENvdW50XSA9IFJlYWN0LnVzZVN0YXRlPG51bWJlcj4oMCk7XHJcbiAgICBjb25zdCBbbG93ZXN0Q291bnQsIHNldExvd2VzdENvdW50XSA9IFJlYWN0LnVzZVN0YXRlPG51bWJlcj4oMCk7XHJcbiAgICBjb25zdCBbaXRlbXMsIHNldEl0ZW1zXSA9IFJlYWN0LnVzZVN0YXRlPGFueT4oe30pO1xyXG4gIFxyXG4gICAgY29uc3QgZW5xdWV1ZSA9IChlbGVtZW50OiBUKSA9PiB7XHJcbiAgICAgIGl0ZW1zW2NvdW50XSA9IGVsZW1lbnQ7XHJcbiAgICAgIHNldENvdW50KGNvdW50ID0+IGNvdW50ICsgMSk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBjb25zdCBkZXF1ZXVlID0gKCkgPT4ge1xyXG4gICAgICBpZiAoaXNFbXB0eSgpKSB7XHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCByZXN1bHQgPSBpdGVtc1tsb3dlc3RDb3VudF07XHJcbiAgICAgIGl0ZW1zLnBvcCgpO1xyXG5cclxuICAgICAgc2V0SXRlbXMoaXRlbXMpXHJcbiAgICAgIHNldExvd2VzdENvdW50KGxvd2VzdENvdW50ID0+IGxvd2VzdENvdW50IC0gMSlcclxuICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICBcclxuICAgIGNvbnN0IHBlZWsgPSAoKSA9PiB7XHJcbiAgICAgIGlmIChpc0VtcHR5KCkpIHtcclxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBpdGVtc1tsb3dlc3RDb3VudF07XHJcbiAgICB9XHJcbiAgXHJcbiAgICBjb25zdCBpc0VtcHR5ID0gKCkgPT4ge1xyXG4gICAgICByZXR1cm4gc2l6ZSgpID09PSAwO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgY29uc3QgY2xlYXIgPSAoKSA9PiB7XHJcbiAgICAgIHNldEl0ZW1zKHt9KTtcclxuICAgICAgc2V0Q291bnQoMCk7XHJcbiAgICAgIHNldExvd2VzdENvdW50KDApO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgY29uc3Qgc2l6ZSA9ICgpID0+IHtcclxuICAgICAgcmV0dXJuIGNvdW50IC0gbG93ZXN0Q291bnQ7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBjb25zdCB0b1N0cmluZyA9ICgpID0+IHtcclxuICAgICAgaWYgKGlzRW1wdHkoKSkge1xyXG4gICAgICAgIHJldHVybiAnJztcclxuICAgICAgfVxyXG4gICAgICBsZXQgb2JqU3RyaW5nID0gYCR7aXRlbXNbbG93ZXN0Q291bnRdfWA7XHJcbiAgICAgIGZvciAobGV0IGkgPSBsb3dlc3RDb3VudCArIDE7IGkgPCBjb3VudDsgaSsrKSB7XHJcbiAgICAgICAgb2JqU3RyaW5nID0gYCR7b2JqU3RyaW5nfSwke2l0ZW1zW2ldfWA7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIG9ialN0cmluZztcclxuICAgIH1cclxuICBcclxuICAgIGNvbnN0IHZhbHVlcyA9ICgpOiB1bmRlZmluZWQgfCBUW10gPT4ge1xyXG4gICAgICByZXR1cm4gaXNFbXB0eSgpID8gdW5kZWZpbmVkIDogT2JqZWN0LnZhbHVlcyhpdGVtcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwZWVrLFxyXG4gICAgICAgIHZhbHVlcyxcclxuICAgICAgICB0b1N0cmluZyxcclxuICAgICAgICBzaXplLFxyXG4gICAgICAgIGNsZWFyLFxyXG4gICAgICAgIHBlZWssXHJcbiAgICAgICAgaXNFbXB0eSxcclxuICAgICAgICBkZXF1ZXVlLFxyXG4gICAgICAgIGVucXVldWUsXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBleHBvcnQgZGVmYXVsdCB1c2VRdWV1ZTsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHVzZVF1ZXVlIGZyb20gXCIuLi9ob29rcy91c2VRdWV1ZVwiO1xyXG5cclxuY29uc3QgUXVldWUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBxdWV1ZSA9IHVzZVF1ZXVlPG51bWJlcj4oKTtcclxuICAgIGNvbnN0IGlucHV0UmVmID0gUmVhY3QudXNlUmVmPGFueT4obnVsbCk7XHJcbiAgICBjb25zdCBbaW5wdXRWYWx1ZSwgc2V0SW5wdXRWYWx1ZV0gPSBSZWFjdC51c2VTdGF0ZSgnMCcpO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3ZhbG9yZXMnLCBxdWV1ZS52YWx1ZXMoKSlcclxuICAgIH0sIFtxdWV1ZV0pXHJcblxyXG4gICAgY29uc3QgUmVuZGVyU3RhY2tWYWx1ZXMgPSBSZWFjdC51c2VDYWxsYmFjaygoKSA9PiB7XHJcblxyXG4gICAgICAgIGlmKHF1ZXVlLmlzRW1wdHkoKSl7XHJcbiAgICAgICAgICAgIHJldHVybiAoPHA+bmFvIHRlbW9zIHZhbG9yZXMgbmEgcGlsaGE8L3A+KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHF1ZXVlLnZhbHVlcygpLm1hcCh2YWx1ZSA9PiAoPHA+e3ZhbHVlfTwvcD4pKVxyXG4gICAgfSwgW3F1ZXVlXSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxoMT5TdGFjazwvaDE+XHJcbiAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgIHJlZj17aW5wdXRSZWZ9XHJcbiAgICAgICAgICAgICAgICB0eXBlPXsnbnVtYmVyJ31cclxuICAgICAgICAgICAgICAgIHZhbHVlPXtpbnB1dFZhbHVlfSBcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHtzZXRJbnB1dFZhbHVlKGV2ZW50LnRhcmdldC52YWx1ZSl9fSBcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICAgIGNoaWxkcmVuPVwiQWRpY2lvbmFyIGEgZmlsYVwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcXVldWUuZW5xdWV1ZShOdW1iZXIoaW5wdXRWYWx1ZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldElucHV0VmFsdWUoJycpXHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRSZWYuY3VycmVudC5mb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICAgIGNoaWxkcmVuPVwiVGlyYXIgZGEgZmlsYVwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcXVldWUuZGVxdWV1ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldElucHV0VmFsdWUoJycpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0UmVmPy5jdXJyZW50LmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICB7UmVuZGVyU3RhY2tWYWx1ZXMoKX1cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUXVldWU7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiOGRkNGE5ZjJjY2NlMzkxNzcxM2VcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=