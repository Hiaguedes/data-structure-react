"use strict";
self["webpackHotUpdatedata_structure_react"]("main",{

/***/ "./src/presentation/pages/hashTable.tsx":
/*!**********************************************!*\
  !*** ./src/presentation/pages/hashTable.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_useHashTable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/useHashTable */ "./src/presentation/hooks/useHashTable.tsx");


const HashTable = () => {
    const hashTable = (0,_hooks_useHashTable__WEBPACK_IMPORTED_MODULE_1__["default"])();
    const nameRef = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(null);
    const [nameValue, setNameValue] = react__WEBPACK_IMPORTED_MODULE_0___default().useState('');
    const [emailValue, setEmailValue] = react__WEBPACK_IMPORTED_MODULE_0___default().useState('');
    const RenderQueueValues = react__WEBPACK_IMPORTED_MODULE_0___default().useCallback(() => {
        if (hashTable.isEmpty()) {
            return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "nao temos valores na fila"));
        }
        console.log('Tabela', hashTable.getTable());
        return Object.values(hashTable.getTable()).map(item => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { style: { display: 'flex' } },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { style: { marginRight: '1rem' } }, item.key),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, item.value))));
    }, [hashTable]);
    react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
        hashTable.put('Ygritte', 'ygritte@email.com');
        hashTable.put('Jonathan', 'jonathan@email.com');
        hashTable.put('Jamie', 'jamie@email.com');
        hashTable.put('Jack', 'jack@email.com');
        hashTable.put('Jasmine', 'jasmine@email.com');
        hashTable.put('Jake', 'jake@email.com');
        hashTable.put('Nathan', 'nathan@email.com');
        hashTable.put('Athelstan', 'athelstan@email.com');
        hashTable.put('Sue', 'sue@email.com');
        hashTable.put('Aethelwulf', 'aethelwulf@email.com');
        hashTable.put('Sargeras', 'sargeras@email.com');
    }, []);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Hash Table"),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", { ref: nameRef, placeholder: "Nome", type: 'text', value: nameValue, onChange: (event) => { setNameValue(event.target.value); } }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", { placeholder: "email", type: 'email', value: emailValue, onChange: (event) => { setEmailValue(event.target.value); } }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { children: "Adicionar a tabela hasheada", onClick: () => {
                hashTable.put(nameValue, emailValue);
                nameRef.current.focus();
            } }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { children: "Retirar da tabela hasheada", onClick: () => {
                hashTable.remove(nameValue);
                nameRef === null || nameRef === void 0 ? void 0 : nameRef.current.focus();
            } }),
        RenderQueueValues()));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HashTable);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("981bc9900a72f8550228")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsS0FBSyxDQUFDLEdBQUMsR0FDMUQ7UUFDRix1RUFDSSxRQUFRLEVBQUMsNkJBQTZCLEVBQ3RDLE9BQU8sRUFBRSxHQUFHLEVBQUU7Z0JBQ1YsU0FBUyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsVUFBVSxDQUFDLENBQUM7Z0JBQ3JDLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDNUIsQ0FBQyxHQUNIO1FBQ0YsdUVBQ0ksUUFBUSxFQUFDLDRCQUE0QixFQUNyQyxPQUFPLEVBQUUsR0FBRyxFQUFFO2dCQUNWLFNBQVMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDO2dCQUMzQixPQUFPLGFBQVAsT0FBTyx1QkFBUCxPQUFPLENBQUUsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQzdCLENBQUMsR0FDSDtRQUNELGlCQUFpQixFQUFFLENBQ3JCLENBQ047QUFDTCxDQUFDO0FBRUQsaUVBQWUsU0FBUyxFQUFDOzs7Ozs7Ozs7VUN6RXpCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGF0YS1zdHJ1Y3R1cmUtcmVhY3QvLi9zcmMvcHJlc2VudGF0aW9uL3BhZ2VzL2hhc2hUYWJsZS50c3giLCJ3ZWJwYWNrOi8vZGF0YS1zdHJ1Y3R1cmUtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgdXNlSGFzaFRhYmxlIGZyb20gXCIuLi9ob29rcy91c2VIYXNoVGFibGVcIjtcclxuXHJcbmNvbnN0IEhhc2hUYWJsZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IGhhc2hUYWJsZSA9IHVzZUhhc2hUYWJsZTxzdHJpbmcsIHN0cmluZz4oKTtcclxuICAgIGNvbnN0IG5hbWVSZWYgPSBSZWFjdC51c2VSZWY8YW55PihudWxsKTtcclxuICAgIGNvbnN0IFtuYW1lVmFsdWUsIHNldE5hbWVWYWx1ZV0gPSBSZWFjdC51c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbZW1haWxWYWx1ZSwgc2V0RW1haWxWYWx1ZV0gPSBSZWFjdC51c2VTdGF0ZSgnJyk7XHJcblxyXG4gICAgY29uc3QgUmVuZGVyUXVldWVWYWx1ZXMgPSBSZWFjdC51c2VDYWxsYmFjaygoKSA9PiB7XHJcblxyXG4gICAgICAgIGlmKGhhc2hUYWJsZS5pc0VtcHR5KCkpe1xyXG4gICAgICAgICAgICByZXR1cm4gKDxwPm5hbyB0ZW1vcyB2YWxvcmVzIG5hIGZpbGE8L3A+KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ1RhYmVsYScgLGhhc2hUYWJsZS5nZXRUYWJsZSgpKTtcclxuICAgICAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyhoYXNoVGFibGUuZ2V0VGFibGUoKSkubWFwKGl0ZW0gPT4gKFxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTogJ2ZsZXgnfX0+XHJcbiAgICAgICAgICAgICAgICA8cCBzdHlsZT17e21hcmdpblJpZ2h0OiAnMXJlbSd9fT57aXRlbS5rZXl9PC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+e2l0ZW0udmFsdWV9PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKVxyXG4gICAgfSwgW2hhc2hUYWJsZV0pXHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBoYXNoVGFibGUucHV0KCdZZ3JpdHRlJywgJ3lncml0dGVAZW1haWwuY29tJyk7XHJcbiAgICAgICAgaGFzaFRhYmxlLnB1dCgnSm9uYXRoYW4nLCAnam9uYXRoYW5AZW1haWwuY29tJyk7XHJcbiAgICAgICAgaGFzaFRhYmxlLnB1dCgnSmFtaWUnLCAnamFtaWVAZW1haWwuY29tJyk7XHJcbiAgICAgICAgaGFzaFRhYmxlLnB1dCgnSmFjaycsICdqYWNrQGVtYWlsLmNvbScpO1xyXG4gICAgICAgIGhhc2hUYWJsZS5wdXQoJ0phc21pbmUnLCAnamFzbWluZUBlbWFpbC5jb20nKTtcclxuICAgICAgICBoYXNoVGFibGUucHV0KCdKYWtlJywgJ2pha2VAZW1haWwuY29tJyk7XHJcbiAgICAgICAgaGFzaFRhYmxlLnB1dCgnTmF0aGFuJywgJ25hdGhhbkBlbWFpbC5jb20nKTtcclxuICAgICAgICBoYXNoVGFibGUucHV0KCdBdGhlbHN0YW4nLCAnYXRoZWxzdGFuQGVtYWlsLmNvbScpO1xyXG4gICAgICAgIGhhc2hUYWJsZS5wdXQoJ1N1ZScsICdzdWVAZW1haWwuY29tJyk7XHJcbiAgICAgICAgaGFzaFRhYmxlLnB1dCgnQWV0aGVsd3VsZicsICdhZXRoZWx3dWxmQGVtYWlsLmNvbScpO1xyXG4gICAgICAgIGhhc2hUYWJsZS5wdXQoJ1NhcmdlcmFzJywgJ3NhcmdlcmFzQGVtYWlsLmNvbScpO1xyXG4gICAgfSwgW10pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8aDE+SGFzaCBUYWJsZTwvaDE+XHJcbiAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgIHJlZj17bmFtZVJlZn1cclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTm9tZVwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPXsndGV4dCd9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17bmFtZVZhbHVlfSBcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHtzZXROYW1lVmFsdWUoZXZlbnQudGFyZ2V0LnZhbHVlKX19IFxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgIHR5cGU9eydlbWFpbCd9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17ZW1haWxWYWx1ZX0gXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB7c2V0RW1haWxWYWx1ZShldmVudC50YXJnZXQudmFsdWUpfX0gXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgICBjaGlsZHJlbj1cIkFkaWNpb25hciBhIHRhYmVsYSBoYXNoZWFkYVwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGFzaFRhYmxlLnB1dChuYW1lVmFsdWUsIGVtYWlsVmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWVSZWYuY3VycmVudC5mb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICAgIGNoaWxkcmVuPVwiUmV0aXJhciBkYSB0YWJlbGEgaGFzaGVhZGFcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGhhc2hUYWJsZS5yZW1vdmUobmFtZVZhbHVlKVxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWVSZWY/LmN1cnJlbnQuZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIHtSZW5kZXJRdWV1ZVZhbHVlcygpfVxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIYXNoVGFibGU7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiOTgxYmM5OTAwYTcyZjg1NTAyMjhcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=