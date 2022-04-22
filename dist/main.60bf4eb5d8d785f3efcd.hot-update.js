"use strict";
self["webpackHotUpdatedata_structure_react"]("main",{

/***/ "./src/presentation/pages/stack.tsx":
/*!******************************************!*\
  !*** ./src/presentation/pages/stack.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_useStack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/useStack */ "./src/presentation/hooks/useStack.tsx");


const Stack = () => {
    const stack = (0,_hooks_useStack__WEBPACK_IMPORTED_MODULE_1__["default"])();
    const inputRef = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(null);
    const [inputValue, setInputValue] = react__WEBPACK_IMPORTED_MODULE_0___default().useState('0');
    const RenderStackValues = react__WEBPACK_IMPORTED_MODULE_0___default().useCallback(() => {
        if (stack.isEmpty()) {
            return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "nao temos valores na pilha"));
        }
        return stack.values().reverse().map(value => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, value)));
    }, [stack]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Pilha"),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", { ref: inputRef, type: 'number', value: inputValue, onChange: (event) => { setInputValue(event.target.value); } }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { children: "Adicionar a pilha", onClick: () => {
                stack.push(Number(inputValue));
                setInputValue('');
                inputRef.current.focus();
            } }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { children: "Tirar da pilha", onClick: () => {
                stack.pop();
                setInputValue('');
                inputRef === null || inputRef === void 0 ? void 0 : inputRef.current.focus();
            } }),
        RenderStackValues()));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Stack);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("0d55312a6d28e0bce9a4")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi42MGJmNGViNWQ4ZDc4NWYzZWZjZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUI7QUFDZ0I7QUFFekMsTUFBTSxLQUFLLEdBQUcsR0FBRyxFQUFFO0lBQ2YsTUFBTSxLQUFLLEdBQUcsMkRBQVEsRUFBVSxDQUFDO0lBQ2pDLE1BQU0sUUFBUSxHQUFHLG1EQUFZLENBQU0sSUFBSSxDQUFDLENBQUM7SUFDekMsTUFBTSxDQUFDLFVBQVUsRUFBRSxhQUFhLENBQUMsR0FBRyxxREFBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBRXhELE1BQU0saUJBQWlCLEdBQUcsd0RBQWlCLENBQUMsR0FBRyxFQUFFO1FBRTdDLElBQUcsS0FBSyxDQUFDLE9BQU8sRUFBRSxFQUFDO1lBQ2YsT0FBTyxDQUFDLG1HQUFpQyxDQUFDO1NBQzdDO1FBRUQsT0FBTyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxzRUFBSSxLQUFLLENBQUssQ0FBQyxDQUFDO0lBQ2xFLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRVgsT0FBTyxDQUNIO1FBQ0ksK0VBQWM7UUFDZCxzRUFDSSxHQUFHLEVBQUUsUUFBUSxFQUNiLElBQUksRUFBRSxRQUFRLEVBQ2QsS0FBSyxFQUFFLFVBQVUsRUFDakIsUUFBUSxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUUsR0FBRSxhQUFhLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBQyxHQUMxRDtRQUNGLHVFQUNJLFFBQVEsRUFBQyxtQkFBbUIsRUFDNUIsT0FBTyxFQUFFLEdBQUcsRUFBRTtnQkFDVixLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO2dCQUMvQixhQUFhLENBQUMsRUFBRSxDQUFDO2dCQUNqQixRQUFRLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQzdCLENBQUMsR0FDSDtRQUNGLHVFQUNJLFFBQVEsRUFBQyxnQkFBZ0IsRUFDekIsT0FBTyxFQUFFLEdBQUcsRUFBRTtnQkFDVixLQUFLLENBQUMsR0FBRyxFQUFFLENBQUM7Z0JBQ1osYUFBYSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUNsQixRQUFRLGFBQVIsUUFBUSx1QkFBUixRQUFRLENBQUUsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQzlCLENBQUMsR0FDSDtRQUNELGlCQUFpQixFQUFFLENBQ3JCLENBQ047QUFDTCxDQUFDO0FBRUQsaUVBQWUsS0FBSyxFQUFDOzs7Ozs7Ozs7VUMvQ3JCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGF0YS1zdHJ1Y3R1cmUtcmVhY3QvLi9zcmMvcHJlc2VudGF0aW9uL3BhZ2VzL3N0YWNrLnRzeCIsIndlYnBhY2s6Ly9kYXRhLXN0cnVjdHVyZS1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB1c2VTdGFjayBmcm9tIFwiLi4vaG9va3MvdXNlU3RhY2tcIjtcclxuXHJcbmNvbnN0IFN0YWNrID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgc3RhY2sgPSB1c2VTdGFjazxudW1iZXI+KCk7XHJcbiAgICBjb25zdCBpbnB1dFJlZiA9IFJlYWN0LnVzZVJlZjxhbnk+KG51bGwpO1xyXG4gICAgY29uc3QgW2lucHV0VmFsdWUsIHNldElucHV0VmFsdWVdID0gUmVhY3QudXNlU3RhdGUoJzAnKTtcclxuXHJcbiAgICBjb25zdCBSZW5kZXJTdGFja1ZhbHVlcyA9IFJlYWN0LnVzZUNhbGxiYWNrKCgpID0+IHtcclxuXHJcbiAgICAgICAgaWYoc3RhY2suaXNFbXB0eSgpKXtcclxuICAgICAgICAgICAgcmV0dXJuICg8cD5uYW8gdGVtb3MgdmFsb3JlcyBuYSBwaWxoYTwvcD4pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gc3RhY2sudmFsdWVzKCkucmV2ZXJzZSgpLm1hcCh2YWx1ZSA9PiAoPHA+e3ZhbHVlfTwvcD4pKVxyXG4gICAgfSwgW3N0YWNrXSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxoMT5QaWxoYTwvaDE+XHJcbiAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgIHJlZj17aW5wdXRSZWZ9XHJcbiAgICAgICAgICAgICAgICB0eXBlPXsnbnVtYmVyJ31cclxuICAgICAgICAgICAgICAgIHZhbHVlPXtpbnB1dFZhbHVlfSBcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHtzZXRJbnB1dFZhbHVlKGV2ZW50LnRhcmdldC52YWx1ZSl9fSBcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICAgIGNoaWxkcmVuPVwiQWRpY2lvbmFyIGEgcGlsaGFcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YWNrLnB1c2goTnVtYmVyKGlucHV0VmFsdWUpKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRJbnB1dFZhbHVlKCcnKVxyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0UmVmLmN1cnJlbnQuZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgICBjaGlsZHJlbj1cIlRpcmFyIGRhIHBpbGhhXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzdGFjay5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRJbnB1dFZhbHVlKCcnKTtcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dFJlZj8uY3VycmVudC5mb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAge1JlbmRlclN0YWNrVmFsdWVzKCl9XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0YWNrOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjBkNTUzMTJhNmQyOGUwYmNlOWE0XCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9