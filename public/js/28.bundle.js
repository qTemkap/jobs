(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[28],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AppHeaderNav.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/AppHeaderNav.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "AppHeaderNav",
  props: ['authcheck'],
  data: function data() {
    return {
      navLinks: [{
        name: 'Ищу работу',
        href: '/jobs'
      }, {
        name: 'Ищу сотрудников',
        href: '/resumes'
      }, {
        name: 'Помощь',
        href: '/faq'
      }, {
        name: 'Компании',
        href: '/companies'
      }],
      showMobileMenu: false
    };
  },
  methods: {
    showMenu: function showMenu() {
      this.showMobileMenu = !this.showMobileMenu;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AppHeaderNav.vue?vue&type=template&id=f61018c0&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/AppHeaderNav.vue?vue&type=template&id=f61018c0& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "nav",
      { staticClass: "header__nav", class: { show: _vm.showMobileMenu } },
      [
        _c(
          "ul",
          _vm._l(_vm.navLinks, function(link, index) {
            return _c("li", { key: index }, [
              _c("a", { attrs: { href: link.href } }, [
                _vm._v(_vm._s(link.name))
              ])
            ])
          }),
          0
        )
      ]
    ),
    _vm._v(" "),
    _c("img", {
      staticClass: "menu-mobile",
      attrs: { src: __webpack_require__(/*! ../../../resources/img/menu.svg */ "./resources/img/menu.svg"), alt: "" },
      on: {
        click: function($event) {
          return _vm.showMenu()
        }
      }
    })
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/img/menu.svg":
/*!********************************!*\
  !*** ./resources/img/menu.svg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/menu.svg?14702a9a5cc6fd945e380bf8210888f3";

/***/ }),

/***/ "./resources/js/components/AppHeaderNav.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/AppHeaderNav.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppHeaderNav_vue_vue_type_template_id_f61018c0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppHeaderNav.vue?vue&type=template&id=f61018c0& */ "./resources/js/components/AppHeaderNav.vue?vue&type=template&id=f61018c0&");
/* harmony import */ var _AppHeaderNav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppHeaderNav.vue?vue&type=script&lang=js& */ "./resources/js/components/AppHeaderNav.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AppHeaderNav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AppHeaderNav_vue_vue_type_template_id_f61018c0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AppHeaderNav_vue_vue_type_template_id_f61018c0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/AppHeaderNav.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/AppHeaderNav.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/AppHeaderNav.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppHeaderNav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./AppHeaderNav.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AppHeaderNav.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppHeaderNav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/AppHeaderNav.vue?vue&type=template&id=f61018c0&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/AppHeaderNav.vue?vue&type=template&id=f61018c0& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppHeaderNav_vue_vue_type_template_id_f61018c0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./AppHeaderNav.vue?vue&type=template&id=f61018c0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AppHeaderNav.vue?vue&type=template&id=f61018c0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppHeaderNav_vue_vue_type_template_id_f61018c0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppHeaderNav_vue_vue_type_template_id_f61018c0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);