webpackJsonp([0],{

/***/ 117:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(59);


/***/ }),

/***/ 14:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assets_index_less__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assets_index_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__assets_index_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src___ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dom__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_dom__);
/* eslint-disable no-console */
/* tslint:disable:no-console */




__WEBPACK_IMPORTED_MODULE_3_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
    'div',
    { style: { marginBottom: 12 } },
    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1__src___["a" /* default */],
        { style: { backgroundColor: 'white' }, autoClose: true, right: [{ text: 'more',
                onPress: function onPress() {
                    return console.log('more');
                },
                style: { backgroundColor: 'orange', color: 'white' }
            }, { text: 'delete',
                onPress: function onPress() {
                    return console.log('delete');
                },
                style: { backgroundColor: 'red', color: 'white' }
            }], onOpen: function onOpen() {
                return console.log('open');
            }, onClose: function onClose() {
                return console.log('close');
            } },
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            'div',
            { onClick: function onClick() {
                    console.log('emit an event on children element!');
                }, style: {
                    height: 44,
                    backgroundColor: 'white',
                    lineHeight: '44px',
                    borderTop: '1px solid #dedede',
                    borderBottom: '1px solid #dedede'
                } },
            'swipe out simple demo'
        )
    )
), document.getElementById('__react-content'));

/***/ })

},[117]);
//# sourceMappingURL=right.js.map