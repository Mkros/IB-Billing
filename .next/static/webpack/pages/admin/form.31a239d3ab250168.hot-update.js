"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/admin/form",{

/***/ "./pages/admin/form.js":
/*!*****************************!*\
  !*** ./pages/admin/form.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Form; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var components_Cards_CardTable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/Cards/CardTable.js */ \"./components/Cards/CardTable.js\");\n/* harmony import */ var layouts_Admin_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! layouts/Admin.js */ \"./layouts/Admin.js\");\n/* harmony import */ var components_Cards_CardSettings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/Cards/CardSettings */ \"./components/Cards/CardSettings.js\");\n\nvar _s = $RefreshSig$();\n\n// components\n\n// layout for page\n\n\nfunction Form(color) {\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        id: \"\",\n        firstName: \"\",\n        lastName: \"\",\n        email: \"\",\n        mobileNo: \"\",\n        city: \"\",\n        country: \"\",\n        state: \" \",\n        aboutMe: \"\",\n        username: \"\",\n        dob: \"\",\n        pinCode: \"\",\n        address1: \"\",\n        address2: \"\"\n    });\n    // const fetchData = async () => {\n    //     const response = await api.getData();\n    //     setData(response);\n    // };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n    // fetchData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n            className: \"items-center w-full bg-transparent border-collapse\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                className: \"px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left \" + (color === \"light\" ? \"bg-blueGray-50 text-blueGray-500 border-blueGray-100\" : \"bg-blueGray-600 text-blueGray-200 border-blueGray-500\"),\n                                children: \"Project\"\n                            }, void 0, false, {\n                                fileName: \"H:\\\\vit\\\\IB-billing\\\\pages\\\\admin\\\\form.js\",\n                                lineNumber: 42,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                className: \"px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left \" + (color === \"light\" ? \"bg-blueGray-50 text-blueGray-500 border-blueGray-100\" : \"bg-blueGray-600 text-blueGray-200 border-blueGray-500\"),\n                                children: \"Budget\"\n                            }, void 0, false, {\n                                fileName: \"H:\\\\vit\\\\IB-billing\\\\pages\\\\admin\\\\form.js\",\n                                lineNumber: 52,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                className: \"px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left \" + (color === \"light\" ? \"bg-blueGray-50 text-blueGray-500 border-blueGray-100\" : \"bg-blueGray-600 text-blueGray-200 border-blueGray-500\"),\n                                children: \"Status\"\n                            }, void 0, false, {\n                                fileName: \"H:\\\\vit\\\\IB-billing\\\\pages\\\\admin\\\\form.js\",\n                                lineNumber: 62,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                className: \"px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left \" + (color === \"light\" ? \"bg-blueGray-50 text-blueGray-500 border-blueGray-100\" : \"bg-blueGray-600 text-blueGray-200 border-blueGray-500\"),\n                                children: \"Users\"\n                            }, void 0, false, {\n                                fileName: \"H:\\\\vit\\\\IB-billing\\\\pages\\\\admin\\\\form.js\",\n                                lineNumber: 72,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                className: \"px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left \" + (color === \"light\" ? \"bg-blueGray-50 text-blueGray-500 border-blueGray-100\" : \"bg-blueGray-600 text-blueGray-200 border-blueGray-500\"),\n                                children: \"Completion\"\n                            }, void 0, false, {\n                                fileName: \"H:\\\\vit\\\\IB-billing\\\\pages\\\\admin\\\\form.js\",\n                                lineNumber: 82,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                className: \"px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left \" + (color === \"light\" ? \"bg-blueGray-50 text-blueGray-500 border-blueGray-100\" : \"bg-blueGray-600 text-blueGray-200 border-blueGray-500\")\n                            }, void 0, false, {\n                                fileName: \"H:\\\\vit\\\\IB-billing\\\\pages\\\\admin\\\\form.js\",\n                                lineNumber: 92,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"H:\\\\vit\\\\IB-billing\\\\pages\\\\admin\\\\form.js\",\n                        lineNumber: 41,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"H:\\\\vit\\\\IB-billing\\\\pages\\\\admin\\\\form.js\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: \"The Sliding Mr. Bones (Next Stop, Pottersville)\"\n                                }, void 0, false, {\n                                    fileName: \"H:\\\\vit\\\\IB-billing\\\\pages\\\\admin\\\\form.js\",\n                                    lineNumber: 104,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: \"Malcolm Lockyer\"\n                                }, void 0, false, {\n                                    fileName: \"H:\\\\vit\\\\IB-billing\\\\pages\\\\admin\\\\form.js\",\n                                    lineNumber: 105,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: \"1961\"\n                                }, void 0, false, {\n                                    fileName: \"H:\\\\vit\\\\IB-billing\\\\pages\\\\admin\\\\form.js\",\n                                    lineNumber: 106,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: \"Earth, Wind, and Fire\"\n                                }, void 0, false, {\n                                    fileName: \"H:\\\\vit\\\\IB-billing\\\\pages\\\\admin\\\\form.js\",\n                                    lineNumber: 107,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: \"1975\"\n                                }, void 0, false, {\n                                    fileName: \"H:\\\\vit\\\\IB-billing\\\\pages\\\\admin\\\\form.js\",\n                                    lineNumber: 108,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"H:\\\\vit\\\\IB-billing\\\\pages\\\\admin\\\\form.js\",\n                            lineNumber: 103,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: \"Witchy Woman\"\n                                }, void 0, false, {\n                                    fileName: \"H:\\\\vit\\\\IB-billing\\\\pages\\\\admin\\\\form.js\",\n                                    lineNumber: 111,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: \"The Eagles\"\n                                }, void 0, false, {\n                                    fileName: \"H:\\\\vit\\\\IB-billing\\\\pages\\\\admin\\\\form.js\",\n                                    lineNumber: 112,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: \"1972\"\n                                }, void 0, false, {\n                                    fileName: \"H:\\\\vit\\\\IB-billing\\\\pages\\\\admin\\\\form.js\",\n                                    lineNumber: 113,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: \"Malcolm Lockyer\"\n                                }, void 0, false, {\n                                    fileName: \"H:\\\\vit\\\\IB-billing\\\\pages\\\\admin\\\\form.js\",\n                                    lineNumber: 114,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: \"1961\"\n                                }, void 0, false, {\n                                    fileName: \"H:\\\\vit\\\\IB-billing\\\\pages\\\\admin\\\\form.js\",\n                                    lineNumber: 115,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"H:\\\\vit\\\\IB-billing\\\\pages\\\\admin\\\\form.js\",\n                            lineNumber: 110,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: \"Shining Star\"\n                                }, void 0, false, {\n                                    fileName: \"H:\\\\vit\\\\IB-billing\\\\pages\\\\admin\\\\form.js\",\n                                    lineNumber: 118,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: \"Witchy Woman\"\n                                }, void 0, false, {\n                                    fileName: \"H:\\\\vit\\\\IB-billing\\\\pages\\\\admin\\\\form.js\",\n                                    lineNumber: 119,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: \"The Eagles\"\n                                }, void 0, false, {\n                                    fileName: \"H:\\\\vit\\\\IB-billing\\\\pages\\\\admin\\\\form.js\",\n                                    lineNumber: 120,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: \"1972\"\n                                }, void 0, false, {\n                                    fileName: \"H:\\\\vit\\\\IB-billing\\\\pages\\\\admin\\\\form.js\",\n                                    lineNumber: 121,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: \"The Sliding Mr. Bones (Next Stop, Pottersville)\"\n                                }, void 0, false, {\n                                    fileName: \"H:\\\\vit\\\\IB-billing\\\\pages\\\\admin\\\\form.js\",\n                                    lineNumber: 122,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"H:\\\\vit\\\\IB-billing\\\\pages\\\\admin\\\\form.js\",\n                            lineNumber: 117,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"H:\\\\vit\\\\IB-billing\\\\pages\\\\admin\\\\form.js\",\n                    lineNumber: 102,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"H:\\\\vit\\\\IB-billing\\\\pages\\\\admin\\\\form.js\",\n            lineNumber: 39,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Form, \"+JhEHRkfH+oFWRNv8RiX+HsLDrM=\");\n_c = Form;\nForm.layout = layouts_Admin_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"];\nvar _c;\n$RefreshReg$(_c, \"Form\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hZG1pbi9mb3JtLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFFbkQsYUFBYTtBQUN5QztBQUV0RCxrQkFBa0I7QUFDbUI7QUFDb0I7QUFFMUMsU0FBU00sS0FBS0MsS0FBSyxFQUFFOztJQUNsQyxNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR1AsK0NBQVFBLENBQUM7UUFDL0JRLElBQUk7UUFDSkMsV0FBVztRQUNYQyxVQUFVO1FBQ1ZDLE9BQU87UUFDUEMsVUFBVTtRQUNWQyxNQUFNO1FBQ05DLFNBQVM7UUFDVEMsT0FBTztRQUNQQyxTQUFTO1FBQ1RDLFVBQVU7UUFDVkMsS0FBSztRQUNMQyxTQUFTO1FBQ1RDLFVBQVU7UUFDVkMsVUFBVTtJQUNaO0lBRUEsa0NBQWtDO0lBQ2xDLDRDQUE0QztJQUM1Qyx5QkFBeUI7SUFDekIsS0FBSztJQUVMdEIsZ0RBQVNBLENBQUMsSUFBTTtJQUNkLGVBQWU7SUFDakIsR0FBRyxFQUFFO0lBRUwscUJBQ0U7a0JBQ0UsNEVBQUN1QjtZQUFNQyxXQUFVOzs4QkFDZiw4REFBQ0M7OEJBQ0MsNEVBQUNDOzswQ0FDQyw4REFBQ0M7Z0NBQ0NILFdBQ0Usa0lBQ0NsQixDQUFBQSxVQUFVLFVBQ1AseURBQ0EsdURBQXVEOzBDQUU5RDs7Ozs7OzBDQUdELDhEQUFDcUI7Z0NBQ0NILFdBQ0Usa0lBQ0NsQixDQUFBQSxVQUFVLFVBQ1AseURBQ0EsdURBQXVEOzBDQUU5RDs7Ozs7OzBDQUdELDhEQUFDcUI7Z0NBQ0NILFdBQ0Usa0lBQ0NsQixDQUFBQSxVQUFVLFVBQ1AseURBQ0EsdURBQXVEOzBDQUU5RDs7Ozs7OzBDQUdELDhEQUFDcUI7Z0NBQ0NILFdBQ0Usa0lBQ0NsQixDQUFBQSxVQUFVLFVBQ1AseURBQ0EsdURBQXVEOzBDQUU5RDs7Ozs7OzBDQUdELDhEQUFDcUI7Z0NBQ0NILFdBQ0Usa0lBQ0NsQixDQUFBQSxVQUFVLFVBQ1AseURBQ0EsdURBQXVEOzBDQUU5RDs7Ozs7OzBDQUdELDhEQUFDcUI7Z0NBQ0NILFdBQ0Usa0lBQ0NsQixDQUFBQSxVQUFVLFVBQ1AseURBQ0EsdURBQXVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFLbkUsOERBQUNzQjs7c0NBQ0MsOERBQUNGOzs4Q0FDQyw4REFBQ0c7OENBQUc7Ozs7Ozs4Q0FDSiw4REFBQ0E7OENBQUc7Ozs7Ozs4Q0FDSiw4REFBQ0E7OENBQUc7Ozs7Ozs4Q0FDSiw4REFBQ0E7OENBQUc7Ozs7Ozs4Q0FDSiw4REFBQ0E7OENBQUc7Ozs7Ozs7Ozs7OztzQ0FFTiw4REFBQ0g7OzhDQUNDLDhEQUFDRzs4Q0FBRzs7Ozs7OzhDQUNKLDhEQUFDQTs4Q0FBRzs7Ozs7OzhDQUNKLDhEQUFDQTs4Q0FBRzs7Ozs7OzhDQUNKLDhEQUFDQTs4Q0FBRzs7Ozs7OzhDQUNKLDhEQUFDQTs4Q0FBRzs7Ozs7Ozs7Ozs7O3NDQUVOLDhEQUFDSDs7OENBQ0MsOERBQUNHOzhDQUFHOzs7Ozs7OENBQ0osOERBQUNBOzhDQUFHOzs7Ozs7OENBQ0osOERBQUNBOzhDQUFHOzs7Ozs7OENBQ0osOERBQUNBOzhDQUFHOzs7Ozs7OENBQ0osOERBQUNBOzhDQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWhCLENBQUM7R0F0SHVCeEI7S0FBQUE7QUF3SHhCQSxLQUFLeUIsTUFBTSxHQUFHM0Isd0RBQUtBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2FkbWluL2Zvcm0uanM/MWUyZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuLy8gY29tcG9uZW50c1xyXG5pbXBvcnQgQ2FyZFRhYmxlIGZyb20gXCJjb21wb25lbnRzL0NhcmRzL0NhcmRUYWJsZS5qc1wiO1xyXG5cclxuLy8gbGF5b3V0IGZvciBwYWdlXHJcbmltcG9ydCBBZG1pbiBmcm9tIFwibGF5b3V0cy9BZG1pbi5qc1wiO1xyXG5pbXBvcnQgQ2FyZFNldHRpbmdzIGZyb20gXCJjb21wb25lbnRzL0NhcmRzL0NhcmRTZXR0aW5nc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybShjb2xvcikge1xyXG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKHtcclxuICAgIGlkOiBcIlwiLFxyXG4gICAgZmlyc3ROYW1lOiBcIlwiLFxyXG4gICAgbGFzdE5hbWU6IFwiXCIsXHJcbiAgICBlbWFpbDogXCJcIixcclxuICAgIG1vYmlsZU5vOiBcIlwiLFxyXG4gICAgY2l0eTogXCJcIixcclxuICAgIGNvdW50cnk6IFwiXCIsXHJcbiAgICBzdGF0ZTogXCIgXCIsXHJcbiAgICBhYm91dE1lOiBcIlwiLFxyXG4gICAgdXNlcm5hbWU6IFwiXCIsXHJcbiAgICBkb2I6IFwiXCIsXHJcbiAgICBwaW5Db2RlOiBcIlwiLFxyXG4gICAgYWRkcmVzczE6IFwiXCIsXHJcbiAgICBhZGRyZXNzMjogXCJcIixcclxuICB9KTtcclxuXHJcbiAgLy8gY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gIC8vICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5nZXREYXRhKCk7XHJcbiAgLy8gICAgIHNldERhdGEocmVzcG9uc2UpO1xyXG4gIC8vIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBmZXRjaERhdGEoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8dGFibGUgY2xhc3NOYW1lPVwiaXRlbXMtY2VudGVyIHctZnVsbCBiZy10cmFuc3BhcmVudCBib3JkZXItY29sbGFwc2VcIj5cclxuICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgIDx0aFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICBcInB4LTYgYWxpZ24tbWlkZGxlIGJvcmRlciBib3JkZXItc29saWQgcHktMyB0ZXh0LXhzIHVwcGVyY2FzZSBib3JkZXItbC0wIGJvcmRlci1yLTAgd2hpdGVzcGFjZS1ub3dyYXAgZm9udC1zZW1pYm9sZCB0ZXh0LWxlZnQgXCIgK1xyXG4gICAgICAgICAgICAgICAgKGNvbG9yID09PSBcImxpZ2h0XCJcclxuICAgICAgICAgICAgICAgICAgPyBcImJnLWJsdWVHcmF5LTUwIHRleHQtYmx1ZUdyYXktNTAwIGJvcmRlci1ibHVlR3JheS0xMDBcIlxyXG4gICAgICAgICAgICAgICAgICA6IFwiYmctYmx1ZUdyYXktNjAwIHRleHQtYmx1ZUdyYXktMjAwIGJvcmRlci1ibHVlR3JheS01MDBcIilcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBQcm9qZWN0XHJcbiAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgIDx0aFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICBcInB4LTYgYWxpZ24tbWlkZGxlIGJvcmRlciBib3JkZXItc29saWQgcHktMyB0ZXh0LXhzIHVwcGVyY2FzZSBib3JkZXItbC0wIGJvcmRlci1yLTAgd2hpdGVzcGFjZS1ub3dyYXAgZm9udC1zZW1pYm9sZCB0ZXh0LWxlZnQgXCIgK1xyXG4gICAgICAgICAgICAgICAgKGNvbG9yID09PSBcImxpZ2h0XCJcclxuICAgICAgICAgICAgICAgICAgPyBcImJnLWJsdWVHcmF5LTUwIHRleHQtYmx1ZUdyYXktNTAwIGJvcmRlci1ibHVlR3JheS0xMDBcIlxyXG4gICAgICAgICAgICAgICAgICA6IFwiYmctYmx1ZUdyYXktNjAwIHRleHQtYmx1ZUdyYXktMjAwIGJvcmRlci1ibHVlR3JheS01MDBcIilcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBCdWRnZXRcclxuICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgPHRoXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgIFwicHgtNiBhbGlnbi1taWRkbGUgYm9yZGVyIGJvcmRlci1zb2xpZCBweS0zIHRleHQteHMgdXBwZXJjYXNlIGJvcmRlci1sLTAgYm9yZGVyLXItMCB3aGl0ZXNwYWNlLW5vd3JhcCBmb250LXNlbWlib2xkIHRleHQtbGVmdCBcIiArXHJcbiAgICAgICAgICAgICAgICAoY29sb3IgPT09IFwibGlnaHRcIlxyXG4gICAgICAgICAgICAgICAgICA/IFwiYmctYmx1ZUdyYXktNTAgdGV4dC1ibHVlR3JheS01MDAgYm9yZGVyLWJsdWVHcmF5LTEwMFwiXHJcbiAgICAgICAgICAgICAgICAgIDogXCJiZy1ibHVlR3JheS02MDAgdGV4dC1ibHVlR3JheS0yMDAgYm9yZGVyLWJsdWVHcmF5LTUwMFwiKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIFN0YXR1c1xyXG4gICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICA8dGhcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgXCJweC02IGFsaWduLW1pZGRsZSBib3JkZXIgYm9yZGVyLXNvbGlkIHB5LTMgdGV4dC14cyB1cHBlcmNhc2UgYm9yZGVyLWwtMCBib3JkZXItci0wIHdoaXRlc3BhY2Utbm93cmFwIGZvbnQtc2VtaWJvbGQgdGV4dC1sZWZ0IFwiICtcclxuICAgICAgICAgICAgICAgIChjb2xvciA9PT0gXCJsaWdodFwiXHJcbiAgICAgICAgICAgICAgICAgID8gXCJiZy1ibHVlR3JheS01MCB0ZXh0LWJsdWVHcmF5LTUwMCBib3JkZXItYmx1ZUdyYXktMTAwXCJcclxuICAgICAgICAgICAgICAgICAgOiBcImJnLWJsdWVHcmF5LTYwMCB0ZXh0LWJsdWVHcmF5LTIwMCBib3JkZXItYmx1ZUdyYXktNTAwXCIpXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgVXNlcnNcclxuICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgPHRoXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgIFwicHgtNiBhbGlnbi1taWRkbGUgYm9yZGVyIGJvcmRlci1zb2xpZCBweS0zIHRleHQteHMgdXBwZXJjYXNlIGJvcmRlci1sLTAgYm9yZGVyLXItMCB3aGl0ZXNwYWNlLW5vd3JhcCBmb250LXNlbWlib2xkIHRleHQtbGVmdCBcIiArXHJcbiAgICAgICAgICAgICAgICAoY29sb3IgPT09IFwibGlnaHRcIlxyXG4gICAgICAgICAgICAgICAgICA/IFwiYmctYmx1ZUdyYXktNTAgdGV4dC1ibHVlR3JheS01MDAgYm9yZGVyLWJsdWVHcmF5LTEwMFwiXHJcbiAgICAgICAgICAgICAgICAgIDogXCJiZy1ibHVlR3JheS02MDAgdGV4dC1ibHVlR3JheS0yMDAgYm9yZGVyLWJsdWVHcmF5LTUwMFwiKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIENvbXBsZXRpb25cclxuICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgPHRoXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgIFwicHgtNiBhbGlnbi1taWRkbGUgYm9yZGVyIGJvcmRlci1zb2xpZCBweS0zIHRleHQteHMgdXBwZXJjYXNlIGJvcmRlci1sLTAgYm9yZGVyLXItMCB3aGl0ZXNwYWNlLW5vd3JhcCBmb250LXNlbWlib2xkIHRleHQtbGVmdCBcIiArXHJcbiAgICAgICAgICAgICAgICAoY29sb3IgPT09IFwibGlnaHRcIlxyXG4gICAgICAgICAgICAgICAgICA/IFwiYmctYmx1ZUdyYXktNTAgdGV4dC1ibHVlR3JheS01MDAgYm9yZGVyLWJsdWVHcmF5LTEwMFwiXHJcbiAgICAgICAgICAgICAgICAgIDogXCJiZy1ibHVlR3JheS02MDAgdGV4dC1ibHVlR3JheS0yMDAgYm9yZGVyLWJsdWVHcmF5LTUwMFwiKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPjwvdGg+XHJcbiAgICAgICAgICA8L3RyPlxyXG4gICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICA8dGQ+VGhlIFNsaWRpbmcgTXIuIEJvbmVzIChOZXh0IFN0b3AsIFBvdHRlcnN2aWxsZSk8L3RkPlxyXG4gICAgICAgICAgICA8dGQ+TWFsY29sbSBMb2NreWVyPC90ZD5cclxuICAgICAgICAgICAgPHRkPjE5NjE8L3RkPlxyXG4gICAgICAgICAgICA8dGQ+RWFydGgsIFdpbmQsIGFuZCBGaXJlPC90ZD5cclxuICAgICAgICAgICAgPHRkPjE5NzU8L3RkPlxyXG4gICAgICAgICAgPC90cj5cclxuICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgPHRkPldpdGNoeSBXb21hbjwvdGQ+XHJcbiAgICAgICAgICAgIDx0ZD5UaGUgRWFnbGVzPC90ZD5cclxuICAgICAgICAgICAgPHRkPjE5NzI8L3RkPlxyXG4gICAgICAgICAgICA8dGQ+TWFsY29sbSBMb2NreWVyPC90ZD5cclxuICAgICAgICAgICAgPHRkPjE5NjE8L3RkPlxyXG4gICAgICAgICAgPC90cj5cclxuICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgPHRkPlNoaW5pbmcgU3RhcjwvdGQ+XHJcbiAgICAgICAgICAgIDx0ZD5XaXRjaHkgV29tYW48L3RkPlxyXG4gICAgICAgICAgICA8dGQ+VGhlIEVhZ2xlczwvdGQ+XHJcbiAgICAgICAgICAgIDx0ZD4xOTcyPC90ZD5cclxuICAgICAgICAgICAgPHRkPlRoZSBTbGlkaW5nIE1yLiBCb25lcyAoTmV4dCBTdG9wLCBQb3R0ZXJzdmlsbGUpPC90ZD5cclxuICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgPC90Ym9keT5cclxuICAgICAgPC90YWJsZT5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbkZvcm0ubGF5b3V0ID0gQWRtaW47XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQ2FyZFRhYmxlIiwiQWRtaW4iLCJDYXJkU2V0dGluZ3MiLCJGb3JtIiwiY29sb3IiLCJkYXRhIiwic2V0RGF0YSIsImlkIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJlbWFpbCIsIm1vYmlsZU5vIiwiY2l0eSIsImNvdW50cnkiLCJzdGF0ZSIsImFib3V0TWUiLCJ1c2VybmFtZSIsImRvYiIsInBpbkNvZGUiLCJhZGRyZXNzMSIsImFkZHJlc3MyIiwidGFibGUiLCJjbGFzc05hbWUiLCJ0aGVhZCIsInRyIiwidGgiLCJ0Ym9keSIsInRkIiwibGF5b3V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/admin/form.js\n"));

/***/ })

});