(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[31],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AppSeoBlock.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/AppSeoBlock.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
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
  data: function data() {
    return {
      showMore: false,
      showBtn: false
    };
  },
  methods: {
    showMoreText: function showMoreText() {
      this.showMore = !this.showMore;
    },
    matchHeight: function matchHeight() {
      var height = this.$refs.seo.clientHeight;

      if (height > 150) {
        this.showBtn = true;
      }
    }
  },
  mounted: function mounted() {
    this.matchHeight();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AppSeoBlock.vue?vue&type=template&id=15915c54&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/AppSeoBlock.vue?vue&type=template&id=15915c54& ***!
  \**************************************************************************************************************************************************************************************************************/
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
  return _c("section", { staticClass: "seo-block" }, [
    _c("div", { staticClass: "container" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-sm-12" }, [
          _c(
            "div",
            {
              ref: "seo",
              staticClass: "seo-block__content",
              class: { show: _vm.showMore }
            },
            [
              _c("h2", [
                _vm._v(
                  "\n                        Работа в России\n                    "
                )
              ]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "Работа - важная часть жизни почти каждого из нас. А если это любимая работа? Если профессия вам по душе и вы действительно нашли сферу деятельности, в которой можете реализовать свой потенциал? Тогда вам действительно повезло."
                )
              ]),
              _vm._v(" "),
              _vm._m(0),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "«Как теперь найти хорошую работу в Москве? Как подобрать достойную вакансию в моем регионе? А главное, какой должна быть эта работа?» - эти и многие другие вопросы не покидают нас ни на минуту при поиске нового места или сферы деятельности."
                )
              ]),
              _vm._v(" "),
              _vm._m(1),
              _vm._v(" "),
              _vm._m(2)
            ]
          ),
          _vm._v(" "),
          _c(
            "button",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.showBtn,
                  expression: "showBtn"
                }
              ],
              staticClass: "link-dots",
              on: {
                click: function($event) {
                  return _vm.showMoreText()
                }
              }
            },
            [
              _vm.showMore === false
                ? _c("span", [
                    _vm._v(
                      "\n                        Показать полностью\n                    "
                    )
                  ])
                : _c("span", [
                    _vm._v(
                      "\n                        Скрыть\n                    "
                    )
                  ])
            ]
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [
      _vm._v("Мы, команда "),
      _c("a", { attrs: { href: "https://edhh.ru" } }, [_vm._v("edhh.ru")]),
      _vm._v(
        " нашли себя в сфере образования и теперь рады дать такую возможность всем, кто планирует строить карьеру в научно-образовательной отрасли, а также тем, кто хочет или вынужден сменить направление деятельности. Ведь не стоит забывать: случается, что однажды приходится менять место работы и с головой погружаться в поиск вакансий — ведь мы стремимся найти хорошую альтернативу сегодняшней должности."
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [
      _vm._v("Портал "),
      _c("a", { attrs: { href: "https://edhh.ru" } }, [_vm._v("edhh.ru")]),
      _vm._v(
        " создан специально для тех, кто ищет и предлагает работу самых различных профилей в образовательных и научных учреждениях. Предлагаете работу учителя в школе? преподавателя в институте? Это к нам. Хотите работать бухгалтером в детском саду или поваром в НИИ? Это тоже к нам. EdHunter - это вакансии учебных заведений и научных учреждений по всей России. Решите вопрос трудоустройства и поиска сотрудников вместе с нами!"
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [
      _vm._v("С уважением,"),
      _c("br"),
      _vm._v("\n                        команда EdHunter")
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/AppSeoBlock.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/AppSeoBlock.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppSeoBlock_vue_vue_type_template_id_15915c54___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppSeoBlock.vue?vue&type=template&id=15915c54& */ "./resources/js/components/AppSeoBlock.vue?vue&type=template&id=15915c54&");
/* harmony import */ var _AppSeoBlock_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppSeoBlock.vue?vue&type=script&lang=js& */ "./resources/js/components/AppSeoBlock.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AppSeoBlock_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AppSeoBlock_vue_vue_type_template_id_15915c54___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AppSeoBlock_vue_vue_type_template_id_15915c54___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/AppSeoBlock.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/AppSeoBlock.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/AppSeoBlock.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppSeoBlock_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./AppSeoBlock.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AppSeoBlock.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppSeoBlock_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/AppSeoBlock.vue?vue&type=template&id=15915c54&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/AppSeoBlock.vue?vue&type=template&id=15915c54& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppSeoBlock_vue_vue_type_template_id_15915c54___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./AppSeoBlock.vue?vue&type=template&id=15915c54& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AppSeoBlock.vue?vue&type=template&id=15915c54&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppSeoBlock_vue_vue_type_template_id_15915c54___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppSeoBlock_vue_vue_type_template_id_15915c54___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);