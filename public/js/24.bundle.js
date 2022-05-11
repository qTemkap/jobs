(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[24],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AppUploader.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/AppUploader.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuejs_clipper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuejs-clipper */ "./node_modules/vuejs-clipper/src/clipper.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
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
  name: "AppUploader",
  components: {
    clipperFixed: vuejs_clipper__WEBPACK_IMPORTED_MODULE_0__["clipperFixed"]
  },
  props: {
    img: {
      type: String,
      default: null
    },
    request: {
      type: String,
      default: null
    },
    delete: {
      type: String,
      default: null
    },
    company: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      image: this.img,
      uploadImage: null
    };
  },
  created: function created() {},
  methods: {
    showModal: function showModal(modalName) {
      this.uploadImage = null, this.$modal.show(modalName);
    },
    hideModal: function hideModal(modalName) {
      this.uploadImage = null, this.$modal.hide(modalName);
    },
    deletePhoto: function deletePhoto() {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete(this.delete).then(function (response) {
        if (response.status === 200) {
          _this.hideModal('edit-photo');

          if (!_this.company) {
            document.querySelector('.header__auth-image').src = '/images/auth.svg';
          } else {
            _this.$store.commit('SET_COMPANY_LOGO', null);
          }
        }
      }).catch(function (error) {
        for (var errorItem in error.response.data.errors) {
          _this.errors.add({
            field: errorItem,
            msg: error.response.data.errors[errorItem][0]
          });
        }
      });
    },
    editPhotoSubmit: function editPhotoSubmit() {
      var _this2 = this;

      this.submitted = true;
      this.$store.dispatch('addErrors', this.$validator.errors.items);
      var formData = new FormData();
      formData.append('_method', 'PUT');

      if (this.uploadImage !== null && !this.company) {
        formData.append('avatar', this.dataURItoBlob(this.uploadImage), 'avatar.jpg');
      } else if (this.uploadImage !== null && this.company) {
        formData.append('image', this.dataURItoBlob(this.uploadImage)), 'company.jpg';
      }

      this.$validator.validate().then(function (valid) {
        if (valid) {
          axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(_this2.request, formData).then(function (response) {
            if (response.status === 200) {
              if (_this2.company) {
                _this2.image = response.data.data;

                _this2.$store.commit('SET_COMPANY_LOGO', response.data.data);
              } else {
                _this2.image = response.data.data.avatar;
                document.querySelector('.header__auth-image').src = response.data.data.avatar_thumb;
              }

              _this2.uploadImage = null, _this2.hideModal('edit-photo');
              _this2.saved = true;
            }
          }).catch(function (error) {
            for (var errorItem in error.response.data.errors) {
              _this2.errors.add({
                field: errorItem,
                msg: error.response.data.errors[errorItem][0]
              });
            }
          });
        }
      });
    },
    // methods show avatar after change input type file
    getResult: function getResult() {
      var canvas = this.$refs.clipper.clip(); //call component's clip method

      this.uploadImage = canvas.toDataURL("image/jpg", 1);
    },
    upload: function upload(e) {
      if (e.target.files.length !== 0) {
        if (this.uploadImage) URL.revokeObjectURL(this.uploadImage);
        this.uploadImage = window.URL.createObjectURL(e.target.files[0]);
      }
    },
    dataURItoBlob: function dataURItoBlob(dataURI) {
      if (dataURI === null) {
        return null;
      } // convert base64/URLEncoded data component to raw binary data held in a string


      var byteString;
      if (dataURI.split(',')[0].indexOf('base64') >= 0) byteString = atob(dataURI.split(',')[1]);else byteString = unescape(dataURI.split(',')[1]); // separate out the mime component

      var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]; // write the bytes of the string to a typed array

      var ia = new Uint8Array(byteString.length);

      for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
      }

      return new Blob([ia], {
        type: mimeString
      });
    },
    removeImage: function removeImage() {
      this.image = null;
      this.uploadImage = null;
      this.deletePhoto();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AppUploader.vue?vue&type=template&id=365751d8&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/AppUploader.vue?vue&type=template&id=365751d8& ***!
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
  return _c(
    "div",
    [
      _c("div", { staticClass: "profile__photo" }, [
        _c(
          "h3",
          { staticClass: "profile__title" },
          [
            _vm.company
              ? [_vm._v("\n                Логотип\n            ")]
              : [_vm._v("\n                Фотография\n            ")]
          ],
          2
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "avatar-wrapper" },
          [
            _vm.image !== null
              ? [
                  _c("img", {
                    staticClass: "img-fluid img-profile",
                    attrs: { src: _vm.image, alt: "profile" }
                  })
                ]
              : [
                  _vm.company
                    ? [
                        _c("img", {
                          staticClass: "img-fluid img-profile",
                          attrs: {
                            src: __webpack_require__(/*! ../../../resources/img/profile-company.jpg */ "./resources/img/profile-company.jpg"),
                            alt: "profile"
                          }
                        })
                      ]
                    : [
                        _c("img", {
                          staticClass: "img-fluid img-profile",
                          attrs: {
                            src: __webpack_require__(/*! ../../../resources/img/profile-user.jpg */ "./resources/img/profile-user.jpg"),
                            alt: "profile"
                          }
                        })
                      ]
                ],
            _vm._v(" "),
            _vm.image !== null
              ? _c(
                  "button",
                  {
                    staticClass: "clear-photo",
                    on: {
                      click: function($event) {
                        return _vm.removeImage()
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
                          width: "10px",
                          height: "10px"
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
                )
              : _vm._e()
          ],
          2
        ),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass: "btn btn-green btn-green-photo",
            on: {
              click: function($event) {
                return _vm.showModal("edit-photo")
              }
            }
          },
          [
            _vm.company
              ? [_vm._v("\n                 Загрузить логотип\n            ")]
              : [_vm._v("\n                 Загрузить фото\n            ")]
          ],
          2
        )
      ]),
      _vm._v(" "),
      _c(
        "modal",
        {
          staticClass: "modal modal-edit-photo",
          attrs: { name: "edit-photo" }
        },
        [
          _c(
            "div",
            {
              staticClass: "prev",
              on: {
                click: function($event) {
                  return _vm.hideModal("edit-photo")
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
                  return _vm.hideModal("edit-photo")
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
          _c(
            "h2",
            { staticClass: "page-title" },
            [
              _vm.company
                ? [_vm._v("\n                Ваш логотип\n            ")]
                : [_vm._v("\n                Ваша фотография\n            ")]
            ],
            2
          ),
          _vm._v(" "),
          _c("div", { staticClass: "modal-content" }, [
            _c(
              "form",
              {
                ref: "avatarForm",
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
                    return _vm.editPhotoSubmit($event)
                  }
                }
              },
              [
                !_vm.uploadImage
                  ? _c("div", { staticClass: "image-download border" }, [
                      _c("img", {
                        staticClass: "img-fluid",
                        attrs: { src: "/images/download-image.png" }
                      }),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "image-download__text" },
                        [
                          _vm.company
                            ? [
                                _vm._v(
                                  "\n                            Пожалуйста, выберите свой логотип\n                        "
                                )
                              ]
                            : [
                                _vm._v(
                                  "\n                            Пожалуйста, выберите свою фотографию,\n                            лучше всего — лицо в анфас.\n                        "
                                )
                              ]
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _c("label", { staticClass: "btn download-btn" }, [
                        _c("input", {
                          attrs: { type: "file" },
                          on: {
                            change: function($event) {
                              return _vm.upload($event)
                            }
                          }
                        }),
                        _vm._v(
                          "\n                        Выбрать\n                    "
                        )
                      ])
                    ])
                  : _c(
                      "div",
                      [
                        _c(
                          "clipper-fixed",
                          {
                            ref: "clipper",
                            staticClass: "my-clipper",
                            attrs: { src: _vm.uploadImage }
                          },
                          [
                            _c(
                              "div",
                              {
                                staticClass: "placeholder",
                                attrs: { slot: "placeholder" },
                                slot: "placeholder"
                              },
                              [_vm._v("No image")]
                            )
                          ]
                        )
                      ],
                      1
                    ),
                _vm._v(" "),
                _c("div", { staticClass: "btn-wrapper" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-green",
                      attrs: { type: "submit" },
                      on: { click: _vm.getResult }
                    },
                    [_vm._v("Сохранить")]
                  ),
                  _vm._v(" "),
                  _c("span", { staticClass: "or" }, [
                    _vm._v(
                      "\n                        или\n                    "
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "link-default link-default__red",
                      attrs: { type: "button" },
                      on: {
                        click: function($event) {
                          return _vm.hideModal("edit-photo")
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
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/img/profile-company.jpg":
/*!*******************************************!*\
  !*** ./resources/img/profile-company.jpg ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/profile-company.jpg?42eca3510e491dc254194771dd7871af";

/***/ }),

/***/ "./resources/img/profile-user.jpg":
/*!****************************************!*\
  !*** ./resources/img/profile-user.jpg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/profile-user.jpg?8cea90a6037de6e865135114a3522b91";

/***/ }),

/***/ "./resources/js/components/AppUploader.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/AppUploader.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppUploader_vue_vue_type_template_id_365751d8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppUploader.vue?vue&type=template&id=365751d8& */ "./resources/js/components/AppUploader.vue?vue&type=template&id=365751d8&");
/* harmony import */ var _AppUploader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppUploader.vue?vue&type=script&lang=js& */ "./resources/js/components/AppUploader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AppUploader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AppUploader_vue_vue_type_template_id_365751d8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AppUploader_vue_vue_type_template_id_365751d8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/AppUploader.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/AppUploader.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/AppUploader.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppUploader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./AppUploader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AppUploader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppUploader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/AppUploader.vue?vue&type=template&id=365751d8&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/AppUploader.vue?vue&type=template&id=365751d8& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppUploader_vue_vue_type_template_id_365751d8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./AppUploader.vue?vue&type=template&id=365751d8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AppUploader.vue?vue&type=template&id=365751d8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppUploader_vue_vue_type_template_id_365751d8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppUploader_vue_vue_type_template_id_365751d8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);