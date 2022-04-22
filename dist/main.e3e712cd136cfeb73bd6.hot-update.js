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
    react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
        console.log('valores', stack.values());
    }, [stack]);
    const RenderStackValues = react__WEBPACK_IMPORTED_MODULE_0___default().useCallback(() => {
        if (stack.isEmpty()) {
            return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "nao temos valores na pilha"));
        }
        return stack.values().map(value => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, value)));
    }, [stack]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Stack"),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", { ref: inputRef, type: 'number', value: inputValue, onChange: (event) => { setInputValue(event.target.value); } }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { children: "Adicionar a fila", onClick: () => {
                stack.push(Number(inputValue));
                setInputValue('');
                inputRef.current.focus();
            } }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { children: "Tirar da fila", onClick: () => {
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
/******/ 	__webpack_require__.h = () => ("45b2fbbda708f5793f7e")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5lM2U3MTJjZDEzNmNmZWI3M2JkNi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUI7QUFDZ0I7QUFFekMsTUFBTSxLQUFLLEdBQUcsR0FBRyxFQUFFO0lBQ2YsTUFBTSxLQUFLLEdBQUcsMkRBQVEsRUFBVSxDQUFDO0lBQ2pDLE1BQU0sUUFBUSxHQUFHLG1EQUFZLENBQU0sSUFBSSxDQUFDLENBQUM7SUFDekMsTUFBTSxDQUFDLFVBQVUsRUFBRSxhQUFhLENBQUMsR0FBRyxxREFBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBRXhELHNEQUFlLENBQUMsR0FBRyxFQUFFO1FBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUMxQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUVYLE1BQU0saUJBQWlCLEdBQUcsd0RBQWlCLENBQUMsR0FBRyxFQUFFO1FBRTdDLElBQUcsS0FBSyxDQUFDLE9BQU8sRUFBRSxFQUFDO1lBQ2YsT0FBTyxDQUFDLG1HQUFpQyxDQUFDO1NBQzdDO1FBRUQsT0FBTyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxzRUFBSSxLQUFLLENBQUssQ0FBQyxDQUFDO0lBQ3hELENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRVgsT0FBTyxDQUNIO1FBQ0ksK0VBQWM7UUFDZCxzRUFDSSxHQUFHLEVBQUUsUUFBUSxFQUNiLElBQUksRUFBRSxRQUFRLEVBQ2QsS0FBSyxFQUFFLFVBQVUsRUFDakIsUUFBUSxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUUsR0FBRSxhQUFhLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBQyxHQUMxRDtRQUNGLHVFQUNJLFFBQVEsRUFBQyxrQkFBa0IsRUFDM0IsT0FBTyxFQUFFLEdBQUcsRUFBRTtnQkFDVixLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO2dCQUMvQixhQUFhLENBQUMsRUFBRSxDQUFDO2dCQUNqQixRQUFRLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQzdCLENBQUMsR0FDSDtRQUNGLHVFQUNJLFFBQVEsRUFBQyxlQUFlLEVBQ3hCLE9BQU8sRUFBRSxHQUFHLEVBQUU7Z0JBQ1YsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDO2dCQUNaLGFBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDbEIsUUFBUSxhQUFSLFFBQVEsdUJBQVIsUUFBUSxDQUFFLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUM5QixDQUFDLEdBQ0g7UUFDRCxpQkFBaUIsRUFBRSxDQUNyQixDQUNOO0FBQ0wsQ0FBQztBQUVELGlFQUFlLEtBQUssRUFBQzs7Ozs7Ozs7O1VDbkRyQiIsInNvdXJjZXMiOlsid2VicGFjazovL2RhdGEtc3RydWN0dXJlLXJlYWN0Ly4vc3JjL3ByZXNlbnRhdGlvbi9wYWdlcy9zdGFjay50c3giLCJ3ZWJwYWNrOi8vZGF0YS1zdHJ1Y3R1cmUtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgdXNlU3RhY2sgZnJvbSBcIi4uL2hvb2tzL3VzZVN0YWNrXCI7XHJcblxyXG5jb25zdCBTdGFjayA9ICgpID0+IHtcclxuICAgIGNvbnN0IHN0YWNrID0gdXNlU3RhY2s8bnVtYmVyPigpO1xyXG4gICAgY29uc3QgaW5wdXRSZWYgPSBSZWFjdC51c2VSZWY8YW55PihudWxsKTtcclxuICAgIGNvbnN0IFtpbnB1dFZhbHVlLCBzZXRJbnB1dFZhbHVlXSA9IFJlYWN0LnVzZVN0YXRlKCcwJyk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygndmFsb3JlcycsIHN0YWNrLnZhbHVlcygpKVxyXG4gICAgfSwgW3N0YWNrXSlcclxuXHJcbiAgICBjb25zdCBSZW5kZXJTdGFja1ZhbHVlcyA9IFJlYWN0LnVzZUNhbGxiYWNrKCgpID0+IHtcclxuXHJcbiAgICAgICAgaWYoc3RhY2suaXNFbXB0eSgpKXtcclxuICAgICAgICAgICAgcmV0dXJuICg8cD5uYW8gdGVtb3MgdmFsb3JlcyBuYSBwaWxoYTwvcD4pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gc3RhY2sudmFsdWVzKCkubWFwKHZhbHVlID0+ICg8cD57dmFsdWV9PC9wPikpXHJcbiAgICB9LCBbc3RhY2tdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGgxPlN0YWNrPC9oMT5cclxuICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgcmVmPXtpbnB1dFJlZn1cclxuICAgICAgICAgICAgICAgIHR5cGU9eydudW1iZXInfVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2lucHV0VmFsdWV9IFxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4ge3NldElucHV0VmFsdWUoZXZlbnQudGFyZ2V0LnZhbHVlKX19IFxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgY2hpbGRyZW49XCJBZGljaW9uYXIgYSBmaWxhXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzdGFjay5wdXNoKE51bWJlcihpbnB1dFZhbHVlKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0SW5wdXRWYWx1ZSgnJylcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dFJlZi5jdXJyZW50LmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgY2hpbGRyZW49XCJUaXJhciBkYSBmaWxhXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzdGFjay5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRJbnB1dFZhbHVlKCcnKTtcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dFJlZj8uY3VycmVudC5mb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAge1JlbmRlclN0YWNrVmFsdWVzKCl9XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0YWNrOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjQ1YjJmYmJkYTcwOGY1NzkzZjdlXCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9