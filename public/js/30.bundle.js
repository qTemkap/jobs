(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[30],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AppFaq.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/AppFaq.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
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
  props: {
    request: {
      type: String,
      default: null
    }
  },
  data: function data() {
    return {
      selected: 0,
      submitted: false,
      email: '',
      desc: ''
    };
  },
  methods: {
    showModal: function showModal(modalName) {
      this.$modal.show(modalName);
    },
    hideModal: function hideModal(modalName) {
      this.$modal.hide(modalName);
    },
    faqSubmit: function faqSubmit() {
      var _this = this;

      this.submitted = true;
      this.$store.dispatch('addErrors', this.$validator.errors.items);
      this.$validator.validate().then(function (valid) {
        if (valid) {
          axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/faq/question', {
            email: _this.email,
            comment: _this.desc
          }).then(function (response) {
            if (response.status === 200) {
              _this.hideModal('question');

              _this.email = '';
              _this.desc = '';

              _this.showModal('complete');
            }
          }).catch(function (error) {
            for (var errorItem in error.response.data.errors) {
              _this.errors.add({
                field: errorItem,
                msg: error.response.data.errors[errorItem][0]
              });
            }
          });
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AppFaq.vue?vue&type=template&id=7da264e0&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/AppFaq.vue?vue&type=template&id=7da264e0& ***!
  \*********************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    { staticClass: "row" },
    [
      _c("div", { staticClass: "col-9" }, [
        _c("div", { staticClass: "content_box" }, [
          _c(
            "div",
            { class: _vm.selected == 1 ? "faq_item active" : "faq_item" },
            [
              _c(
                "div",
                {
                  staticClass: "faq_title",
                  on: {
                    click: function($event) {
                      _vm.selected = 1
                    }
                  }
                },
                [_vm._v("Сколько стоит размещение вакансии/резюме на edhh.ru?")]
              ),
              _vm._v(" "),
              _vm._m(0)
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            { class: _vm.selected == 2 ? "faq_item active" : "faq_item" },
            [
              _c(
                "div",
                {
                  staticClass: "faq_title",
                  on: {
                    click: function($event) {
                      _vm.selected = 2
                    }
                  }
                },
                [
                  _vm._v(
                    "Могу ли я разместить свое резюме/свою вакансию на edhh.ru?"
                  )
                ]
              ),
              _vm._v(" "),
              _vm._m(1)
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            { class: _vm.selected == 3 ? "faq_item active" : "faq_item" },
            [
              _c(
                "div",
                {
                  staticClass: "faq_title",
                  on: {
                    click: function($event) {
                      _vm.selected = 3
                    }
                  }
                },
                [
                  _vm._v(
                    "Если  моя профессия/вакансия не относится к сфере образования, могу ли я размещать резюме/вакансию на edhh.ru?"
                  )
                ]
              ),
              _vm._v(" "),
              _vm._m(2)
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            { class: _vm.selected == 4 ? "faq_item active" : "faq_item" },
            [
              _c(
                "div",
                {
                  staticClass: "faq_title",
                  on: {
                    click: function($event) {
                      _vm.selected = 4
                    }
                  }
                },
                [
                  _vm._v(
                    "Я забыл логин/пароль от личного кабинета на edhh.ru, что мне делать?"
                  )
                ]
              ),
              _vm._v(" "),
              _vm._m(3)
            ]
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-3" }, [
        _c("div", { staticClass: "content_box faq_form_box" }, [
          _c("div", { staticClass: "title" }, [
            _vm._v("Не смогли найти ответ?")
          ]),
          _vm._v(" "),
          _c("p", [
            _vm._v("Вы можете задать нам вопрос, воспользовавшись формой.")
          ]),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn btn-green btn-xs",
              on: {
                click: function($event) {
                  return _vm.showModal("question")
                }
              }
            },
            [_vm._v("Задать вопрос")]
          )
        ])
      ]),
      _vm._v(" "),
      _c("modal", { staticClass: "modal", attrs: { name: "question" } }, [
        _c(
          "div",
          {
            staticClass: "prev",
            on: {
              click: function($event) {
                return _vm.hideModal("question")
              }
            }
          },
          [
            _c(
              "svg",
              {
                attrs: {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 6 10",
                  width: "6px",
                  height: "10px"
                }
              },
              [
                _c("path", {
                  attrs: {
                    "fill-rule": "evenodd",
                    fill: "rgb(43, 83, 198)",
                    d:
                      "M5.995,9.312 L5.329,9.994 L1.117,5.681 L0.671,6.139 L0.005,5.457 L0.452,5.000 L0.005,4.542 L0.671,3.860 L1.118,4.318 L5.329,0.005 L5.995,0.686 L1.783,4.999 L5.995,9.312 Z"
                  }
                })
              ]
            ),
            _vm._v("\n            Назад\n        ")
          ]
        ),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass: "close",
            attrs: { type: "button" },
            on: {
              click: function($event) {
                return _vm.hideModal("question")
              }
            }
          },
          [
            _c(
              "svg",
              {
                attrs: {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 20 20",
                  width: "20px",
                  height: "20px"
                }
              },
              [
                _c("path", {
                  attrs: {
                    "fill-rule": "evenodd",
                    fill: "rgb(0, 0, 0)",
                    d:
                      "M11.446,10.001 L20.009,18.567 L18.562,20.015 L9.998,11.450 L1.435,20.015 L-0.013,18.567 L8.550,10.001 L-0.013,1.436 L1.435,-0.013 L9.998,8.553 L18.562,-0.013 L20.009,1.436 L11.446,10.001 Z"
                  }
                })
              ]
            )
          ]
        ),
        _vm._v(" "),
        _c("h2", { staticClass: "page-title" }, [
          _vm._v("\n            Опишите вопрос\n        ")
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "modal-content" }, [
          _c(
            "form",
            {
              on: {
                keypress: function($event) {
                  if (
                    !$event.type.indexOf("key") &&
                    _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                  ) {
                    return null
                  }
                  $event.preventDefault()
                },
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.faqSubmit($event)
                }
              }
            },
            [
              _c("div", { staticClass: "input-group" }, [
                _c("label", [
                  _vm._v("\n                        Email "),
                  _c("span", { staticClass: "req" }, [_vm._v("*")]),
                  _vm._v(":\n                    ")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.email,
                      expression: "email"
                    },
                    {
                      name: "validate",
                      rawName: "v-validate",
                      value: "required",
                      expression: "'required'"
                    }
                  ],
                  class: {
                    "is-invalid": _vm.submitted && _vm.errors.has("email")
                  },
                  attrs: { type: "email", name: "email", maxlength: "255" },
                  domProps: { value: _vm.email },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.email = $event.target.value
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "input-group" }, [
                _c("label", [
                  _vm._v("\n                        Краткое описание "),
                  _c("span", { staticClass: "req" }, [_vm._v("*")]),
                  _vm._v(":\n                    ")
                ]),
                _vm._v(" "),
                _c("textarea", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.desc,
                      expression: "desc"
                    },
                    {
                      name: "validate",
                      rawName: "v-validate",
                      value: "required",
                      expression: "'required'"
                    }
                  ],
                  class: {
                    "is-invalid": _vm.submitted && _vm.errors.has("desc")
                  },
                  attrs: { name: "desc", maxlength: "1000" },
                  domProps: { value: _vm.desc },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.desc = $event.target.value
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "btn-wrapper" }, [
                _c(
                  "button",
                  { staticClass: "btn btn-green", attrs: { type: "submit" } },
                  [
                    _vm._v(
                      "\n                        Отправить\n                    "
                    )
                  ]
                ),
                _vm._v(" "),
                _c("span", { staticClass: "or" }, [
                  _vm._v("\n                        или\n                    ")
                ]),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "link-default link-default__red",
                    attrs: { type: "button" },
                    on: {
                      click: function($event) {
                        return _vm.hideModal("question")
                      }
                    }
                  },
                  [
                    _vm._v(
                      "\n                        Отменить\n                    "
                    )
                  ]
                )
              ])
            ]
          )
        ])
      ]),
      _vm._v(" "),
      _c("modal", { staticClass: "modal", attrs: { name: "complete" } }, [
        _c(
          "div",
          {
            staticClass: "prev",
            on: {
              click: function($event) {
                return _vm.hideModal("complete")
              }
            }
          },
          [
            _c(
              "svg",
              {
                attrs: {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 6 10",
                  width: "6px",
                  height: "10px"
                }
              },
              [
                _c("path", {
                  attrs: {
                    "fill-rule": "evenodd",
                    fill: "rgb(43, 83, 198)",
                    d:
                      "M5.995,9.312 L5.329,9.994 L1.117,5.681 L0.671,6.139 L0.005,5.457 L0.452,5.000 L0.005,4.542 L0.671,3.860 L1.118,4.318 L5.329,0.005 L5.995,0.686 L1.783,4.999 L5.995,9.312 Z"
                  }
                })
              ]
            ),
            _vm._v("\n            Назад\n        ")
          ]
        ),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass: "close",
            on: {
              click: function($event) {
                return _vm.hideModal("complete")
              }
            }
          },
          [
            _c(
              "svg",
              {
                attrs: {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 20 20",
                  width: "20px",
                  height: "20px"
                }
              },
              [
                _c("path", {
                  attrs: {
                    "fill-rule": "evenodd",
                    fill: "rgb(0, 0, 0)",
                    d:
                      "M11.446,10.001 L20.009,18.567 L18.562,20.015 L9.998,11.450 L1.435,20.015 L-0.013,18.567 L8.550,10.001 L-0.013,1.436 L1.435,-0.013 L9.998,8.553 L18.562,-0.013 L20.009,1.436 L11.446,10.001 Z"
                  }
                })
              ]
            )
          ]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "modal-content" }, [
          _c("div", { staticClass: "complete-block" }, [
            _c("div", { staticClass: "pic" }, [
              _c(
                "svg",
                {
                  attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    "xmlns:xlink": "http://www.w3.org/1999/xlink",
                    width: "107px",
                    height: "75px"
                  }
                },
                [
                  _c("path", {
                    attrs: {
                      "fill-rule": "evenodd",
                      fill: "rgb(0, 0, 0)",
                      d:
                        "M98.375,75.006 L8.625,75.006 C3.870,75.006 -0.001,71.192 -0.001,66.500 L-0.001,8.499 C-0.001,3.807 3.870,-0.007 8.625,-0.007 L98.375,-0.007 C103.130,-0.007 107.001,3.807 107.001,8.499 L107.001,66.500 C107.001,71.192 103.130,75.006 98.375,75.006 ZM3.449,66.500 C3.449,69.314 5.771,71.604 8.625,71.604 L98.375,71.604 C101.229,71.604 103.551,69.314 103.551,66.500 L103.551,8.499 C103.551,7.807 103.407,7.148 103.153,6.545 L68.064,36.717 L87.817,54.990 C88.511,55.630 88.545,56.708 87.893,57.392 C87.552,57.749 87.096,57.930 86.634,57.930 C86.209,57.930 85.785,57.777 85.454,57.467 L65.600,39.101 C65.549,39.053 65.526,38.989 65.482,38.937 L59.835,43.793 C58.085,45.296 55.794,46.048 53.500,46.048 C51.205,46.048 48.911,45.296 47.165,43.796 L41.519,38.939 C41.476,38.991 41.454,39.054 41.403,39.101 L21.543,57.467 C21.212,57.777 20.787,57.930 20.363,57.930 C19.904,57.930 19.445,57.749 19.103,57.392 C18.451,56.708 18.486,55.630 19.179,54.990 L38.937,36.718 L3.850,6.535 C3.593,7.140 3.449,7.803 3.449,8.499 L3.449,66.500 ZM8.625,3.396 C7.737,3.396 6.914,3.637 6.184,4.027 L49.432,41.227 C51.637,43.122 55.363,43.122 57.564,41.227 L100.824,4.031 C100.091,3.639 99.265,3.396 98.375,3.396 L8.625,3.396 Z"
                    }
                  })
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "complete-title" }, [
              _vm._v(
                "\n                    Ваш вопрос\n                    успешно отправлен\n                "
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "complete-desc" }, [
              _vm._v(
                "\n                    Мы обязательно ознакомимся с Вашим вопросом\n                    и свяжемся с Вами в ближайшее время\n                "
              )
            ])
          ])
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "faq_answer" }, [
      _c("p", [
        _vm._v(
          "Создание пользовательских аккаунтов и размещение вакансии/резюме бесплатно для кандидатов и работодателей. Специфика портала предусматривает, что все вакансии и резюме относятся исключительно к научно-образовательной отрасли."
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "faq_answer" }, [
      _c("p", [
        _vm._v(
          "Да, если вы ищете работу или сотрудников именно в сфере образования и науки. Чтобы разместить вакансию/резюме вы можете воспользоваться ссылкой.... или создать/войти в свой аккаунт через браузер."
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "faq_answer" }, [
      _c("p", [
        _vm._v(
          "На сайте возможно размещение резюме и вакансий по любым профессиям, которые востребованы в образовательных и научных учреждениях. Например, вы ищите работу бухгалтера именно в образовании, или в вашу школу требуется сантехник (в обоих случаях профессия не имеет отношения к образовательной сфере, но работать сотрудник будет в учебном заведении) и т.д."
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "faq_answer" }, [
      _c("p", [
        _vm._v(
          'Для восстановления доступа воспользуйтесь ссылкой http://edhh.ru/password/reset или формой восстановления пароля в блоке "Вход".'
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/AppFaq.vue":
/*!********************************************!*\
  !*** ./resources/js/components/AppFaq.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppFaq_vue_vue_type_template_id_7da264e0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppFaq.vue?vue&type=template&id=7da264e0& */ "./resources/js/components/AppFaq.vue?vue&type=template&id=7da264e0&");
/* harmony import */ var _AppFaq_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppFaq.vue?vue&type=script&lang=js& */ "./resources/js/components/AppFaq.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AppFaq_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AppFaq_vue_vue_type_template_id_7da264e0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AppFaq_vue_vue_type_template_id_7da264e0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/AppFaq.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/AppFaq.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/components/AppFaq.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFaq_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./AppFaq.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AppFaq.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFaq_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/AppFaq.vue?vue&type=template&id=7da264e0&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/AppFaq.vue?vue&type=template&id=7da264e0& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFaq_vue_vue_type_template_id_7da264e0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./AppFaq.vue?vue&type=template&id=7da264e0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AppFaq.vue?vue&type=template&id=7da264e0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFaq_vue_vue_type_template_id_7da264e0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFaq_vue_vue_type_template_id_7da264e0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);