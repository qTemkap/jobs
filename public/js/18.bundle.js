(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/profile/employer/company/AppProfileCompany.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/profile/employer/company/AppProfileCompany.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vuejs_auto_complete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuejs-auto-complete */ "./node_modules/vuejs-auto-complete/dist/build.js");
/* harmony import */ var vuejs_auto_complete__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vuejs_auto_complete__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_3__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "AppProfileCompany",
  components: {
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_0___default.a,
    Autocomplete: vuejs_auto_complete__WEBPACK_IMPORTED_MODULE_2___default.a
  },
  props: ['data'],
  data: function data() {
    return {
      saved: false,
      parseData: null,
      sideBarShow: false,
      submitted: false,
      editor: _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_3___default.a,
      editorConfig: {
        toolbar: ['bulletedList', 'numberedList', 'bold', 'italic', 'link', 'undo', 'redo']
      },
      phones: [],
      cities: null,
      avatar: null
    };
  },
  created: function created() {
    var _this = this;

    this.parseData = JSON.parse(this.data);
    this.$store.dispatch('GET_CITY');
    this.$store.dispatch('GET_COMPANY_SIZE');
    this.$store.dispatch('GET_COMPANY_TYPE');
    this.$store.commit('SET_COMPANY_LOGO', this.parseData.logo);
    this.cities = this.parseData.cities !== null ? this.parseData.cities[0].id : '';
    this.avatar = this.parseData.logo !== null ? this.parseData.logo : null;

    if (this.parseData.phones !== null) {
      this.parseData.phones.forEach(function (phone) {
        _this.phones.push({
          number: phone
        });
      });
    }
  },
  methods: {
    showModal: function showModal(modalName) {
      this.$modal.show(modalName);
    },
    hideModal: function hideModal(modalName) {
      this.$modal.hide(modalName);
    },
    beforeClose: function beforeClose(event) {
      if (this.saved == false) {
        this.parseData = JSON.parse(this.data);
      } else {
        this.saved = false;
      }
    },
    // methods editCompanyScope
    editCompanyScopeSubmit: function editCompanyScopeSubmit() {
      var _this2 = this;

      this.submitted = true;
      this.$store.dispatch('addErrors', this.$validator.errors.items);
      var editCompanyScopeData = {
        _method: 'PATCH',
        name: this.parseData.name,
        company_type_id: this.conversionToObject(this.parseData.company_types).id,
        company_sizes_id: this.conversionToObject(this.parseData.company_size).id
      };
      this.$validator.validate().then(function (valid) {
        if (valid) {
          axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/company/update', editCompanyScopeData).then(function (response) {
            if (response.status === 200) {
              _this2.saved = true;

              _this2.hideModal('edit-company-scope');
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
    // methods EditCompanyDescription
    editCompanyDescriptionSubmit: function editCompanyDescriptionSubmit(event) {
      var _this3 = this;

      this.submitted = true;
      this.$store.dispatch('addErrors', this.$validator.errors.items);
      var editCompanyDescriptionData = {
        _method: 'PATCH',
        information: this.parseData.information
      };
      this.$validator.validate().then(function (valid) {
        if (valid) {
          axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/company/update/information', editCompanyDescriptionData).then(function (response) {
            if (response.status === 200) {
              _this3.saved = true;

              _this3.hideModal('edit-company-description');
            }
          }).catch(function (error) {
            for (var errorItem in error.response.data.errors) {
              _this3.errors.add({
                field: errorItem,
                msg: error.response.data.errors[errorItem][0]
              });
            }
          });
        }
      });
    },
    // methods EditEditCompanyInfo
    editCompanyInfoSubmit: function editCompanyInfoSubmit() {
      var _this4 = this;

      this.submitted = true;
      this.$store.dispatch('addErrors', this.$validator.errors.items);
      this.$validator.validate().then(function (valid) {
        if (valid) {
          axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/company/update/about', {
            _method: 'PATCH',
            city_id: _this4.cities,
            address: _this4.parseData.address,
            phones: _this4.phoneToArray(),
            email: _this4.parseData.email,
            web_site: _this4.parseData.web_site
          }).then(function (response) {
            if (response.status === 200) {
              _this4.saved = true;

              _this4.hideModal('edit-company-info');
            }
          }).catch(function (error) {
            for (var errorItem in error.response.data.errors) {
              _this4.errors.add({
                field: errorItem,
                msg: error.response.data.errors[errorItem][0]
              });
            }
          });
        }
      });
    },
    // methods EditCompanyPerson showEditCompanyPerson
    editCompanyPersonSubmit: function editCompanyPersonSubmit() {
      var _this5 = this;

      this.submitted = true;
      this.$store.dispatch('addErrors', this.$validator.errors.items);
      var editCompanyPersonData = {
        _method: 'PATCH',
        contact_name: this.parseData.contact_name,
        contact_phone: this.parseData.contact_phone,
        contact_email: this.parseData.contact_email
      };
      this.$validator.validate().then(function (valid) {
        if (valid) {
          axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/company/update/contacts', editCompanyPersonData).then(function (response) {
            if (response.status === 200) {
              _this5.hideModal('edit-company-person');
            }
          }).catch(function (error) {
            for (var errorItem in error.response.data.errors) {
              _this5.errors.add({
                field: errorItem,
                msg: error.response.data.errors[errorItem][0]
              });
            }
          });
        }
      });
    },
    // add phone in company edit info
    addInput: function addInput() {
      this.phones.push({
        number: ''
      });
    },
    // delete phone in company edit info
    deleteInput: function deleteInput(index) {
      this.phones.splice(index, 1);
    },
    phoneToArray: function phoneToArray() {
      var phoneArray = [];
      this.phones.forEach(function (item) {
        phoneArray.push(item.number);
      });
      return phoneArray;
    },
    phoneToString: function phoneToString() {
      var phoneArray = [];
      this.phones.forEach(function (item) {
        phoneArray.push(item.number);
      });
      return phoneArray.join();
    },
    cityInfo: function cityInfo() {
      var _this6 = this;

      if (this.cityList) {
        return this.cityList.find(function (city) {
          return _this6.parseData.cities[0].id == city.id;
        });
      } else {
        return {
          name: this.parseData.cities[0].name
        };
      }
    },
    conversionToObject: function conversionToObject(data) {
      if (Array.isArray(data)) {
        return data[0];
      } else {
        return data;
      }
    },
    residenceCity: function residenceCity() {
      var _this7 = this;

      var setCity = this.cityList.find(function (cityId) {
        return _this7.cities === cityId.id;
      });

      if (setCity !== undefined) {
        return setCity.name;
      }
    }
  },
  computed: {
    cityList: function cityList() {
      return this.$store.getters.CITY;
    },
    sizeList: function sizeList() {
      return this.$store.getters.COMPANY_SIZE;
    },
    typeList: function typeList() {
      return this.$store.getters.COMPANY_TYPE;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/profile/employer/company/AppProfileCompany.vue?vue&type=style&index=0&id=9d944d18&scoped=true&lang=sass&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/lib/loader.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/profile/employer/company/AppProfileCompany.vue?vue&type=style&index=0&id=9d944d18&scoped=true&lang=sass& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".profile__title[data-v-9d944d18] {\n  margin-bottom: 30px;\n}\n.user-data[data-v-9d944d18] {\n  margin: 0 0 20px 0;\n}\n@media only screen and (max-width: 575px) {\n.user-data__item p[data-v-9d944d18]:first-child {\n    width: 95px;\n}\n}\n@media only screen and (max-width: 575px) {\n.user-data__item p[data-v-9d944d18]:last-child {\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n}\n.btn-block[data-v-9d944d18] {\n  border-top: 1px solid #e6e9ed;\n  padding-top: 16px;\n}\n.profile__block[data-v-9d944d18] {\n  flex-direction: column;\n}\n.profile__block-row[data-v-9d944d18] {\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n.profile__block-row .btn-block[data-v-9d944d18] {\n  width: 100%;\n}\n@media only screen and (max-width: 575px) {\n.profile__block-info[data-v-9d944d18] {\n    flex-direction: column;\n}\n}\n.profile__block-info .user-data__item p[data-v-9d944d18]:first-child {\n  width: 94px;\n}\n.profile__large[data-v-9d944d18] {\n  width: calc(100% - 160px);\n}\n@media only screen and (max-width: 575px) {\n.profile__large[data-v-9d944d18] {\n    width: 100%;\n    margin-bottom: 0;\n}\n}\n.profile__small[data-v-9d944d18] {\n  width: 160px;\n}\n@media only screen and (max-width: 575px) {\n.profile__small[data-v-9d944d18] {\n    margin-bottom: 25px;\n}\n}\n.img-profile[data-v-9d944d18] {\n  width: 100%;\n}\n.profile__photo[data-v-9d944d18] {\n  margin-left: auto;\n  width: 100%;\n}\n.btn-green-photo[data-v-9d944d18] {\n  width: 100%;\n}\n.desc[data-v-9d944d18] {\n  margin-bottom: 20px;\n}\n.add-phone[data-v-9d944d18] {\n  align-items: flex-start;\n  margin-bottom: 0;\n}\n.add-phone-wrapper[data-v-9d944d18] {\n  margin-bottom: 10px;\n}\n.add-phone-wrapper[data-v-9d944d18] {\n  display: flex;\n  align-items: center;\n}\n.add-phone-wrapper .link-default__red[data-v-9d944d18] {\n  margin-left: 10px;\n}\n.dropdown-menu[data-v-9d944d18] {\n  z-index: 99999 !important;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/profile/employer/company/AppProfileCompany.vue?vue&type=style&index=0&id=9d944d18&scoped=true&lang=sass&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/lib/loader.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/profile/employer/company/AppProfileCompany.vue?vue&type=style&index=0&id=9d944d18&scoped=true&lang=sass& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/lib/loader.js??ref--7-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AppProfileCompany.vue?vue&type=style&index=0&id=9d944d18&scoped=true&lang=sass& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/profile/employer/company/AppProfileCompany.vue?vue&type=style&index=0&id=9d944d18&scoped=true&lang=sass&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/profile/employer/company/AppProfileCompany.vue?vue&type=template&id=9d944d18&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/profile/employer/company/AppProfileCompany.vue?vue&type=template&id=9d944d18&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************/
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
      _c("div", { staticClass: "profile__block" }, [
        _c("h3", { staticClass: "profile__title" }, [
          _vm._v("\n            Название и сфера деятельности\n        ")
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "user-data" }, [
          _c("div", { staticClass: "user-data__item" }, [
            _c("p", [
              _vm._v("\n                    Название:\n                ")
            ]),
            _vm._v(" "),
            _c("p", [
              _vm._v(
                "\n                    " +
                  _vm._s(_vm.parseData.name) +
                  "\n                "
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "user-data__item" }, [
            _c("p", [
              _vm._v("\n                    Тип компании:\n                ")
            ]),
            _vm._v(" "),
            _c("p", [
              _vm._v(
                "\n                    " +
                  _vm._s(
                    _vm.conversionToObject(_vm.parseData.company_types).name
                  ) +
                  "\n                "
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "user-data__item" }, [
            _c("p", [
              _vm._v("\n                    Размер компании:\n                ")
            ]),
            _vm._v(" "),
            _c("p", [
              _vm.parseData.company_size.length !== 0
                ? _c("span", [
                    _vm._v(
                      "\n                        больше  " +
                        _vm._s(
                          _vm.conversionToObject(_vm.parseData.company_size)
                            .name
                        ) +
                        " сотрудников\n                    "
                    )
                  ])
                : _vm._e()
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "btn-block" }, [
          _c(
            "button",
            {
              staticClass: "btn-edit",
              on: {
                click: function($event) {
                  return _vm.showModal("edit-company-scope")
                }
              }
            },
            [_vm._v("\n                Редактировать\n            ")]
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "profile__block" }, [
        _c("h3", { staticClass: "profile__title" }, [
          _vm._v("\n            Описание компании\n        ")
        ]),
        _vm._v(" "),
        _c("div", {
          staticClass: "desc profile__desc",
          domProps: { innerHTML: _vm._s(_vm.parseData.information) }
        }),
        _vm._v(" "),
        _c("div", { staticClass: "btn-block" }, [
          _c(
            "button",
            {
              staticClass: "btn-edit",
              on: {
                click: function($event) {
                  return _vm.showModal("edit-company-description")
                }
              }
            },
            [_vm._v("\n                Редактировать\n            ")]
          )
        ])
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "profile__block profile__block-row profile__block-info"
        },
        [
          _c("div", { staticClass: "profile__large" }, [
            _c("h3", { staticClass: "profile__title" }, [
              _vm._v("\n                Информация о компании\n            ")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "user-data" }, [
              _c("div", { staticClass: "user-data__item" }, [
                _c("p", [
                  _vm._v(
                    "\n                        Город:\n                    "
                  )
                ]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "\n                        " +
                      _vm._s(_vm.residenceCity()) +
                      "\n                    "
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "user-data__item" }, [
                _c("p", [
                  _vm._v(
                    "\n                        Адрес:\n                    "
                  )
                ]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "\n                        " +
                      _vm._s(_vm.parseData.address) +
                      "\n                    "
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "user-data__item" }, [
                _c("p", [
                  _vm._v(
                    "\n                        Телефон:\n                    "
                  )
                ]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "\n                        " +
                      _vm._s(this.phoneToString()) +
                      "\n                    "
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "user-data__item" }, [
                _c("p", [
                  _vm._v(
                    "\n                        E-mail:\n                    "
                  )
                ]),
                _vm._v(" "),
                _c("p", [
                  _c(
                    "a",
                    {
                      staticClass: "link-default",
                      attrs: { href: "mailto:" + _vm.parseData.email }
                    },
                    [_vm._v(_vm._s(_vm.parseData.email))]
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "user-data__item" }, [
                _c("p", [
                  _vm._v(
                    "\n                        Веб сайт:\n                    "
                  )
                ]),
                _vm._v(" "),
                _c("p", [
                  _c(
                    "a",
                    {
                      staticClass: "link-default",
                      attrs: {
                        href: "http://" + _vm.parseData.web_site,
                        target: "_blank"
                      }
                    },
                    [_vm._v(_vm._s(_vm.parseData.web_site))]
                  )
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "profile__small" },
            [
              _c("app-uploader", {
                attrs: {
                  img: this.avatar,
                  company: true,
                  delete: "/image/company/logo/delete",
                  request: "/image/company/logo/upload"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "btn-block" }, [
            _c(
              "button",
              {
                staticClass: "btn-edit",
                on: {
                  click: function($event) {
                    return _vm.showModal("edit-company-info")
                  }
                }
              },
              [_vm._v("\n                Редактировать\n            ")]
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "profile__block profile__block-info" }, [
        _c("h3", { staticClass: "profile__title" }, [
          _vm._v("\n            Контактное лицо\n        ")
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "user-data" }, [
          _c("div", { staticClass: "user-data__item" }, [
            _c("p", [_vm._v("\n                    Имя:\n                ")]),
            _vm._v(" "),
            _c("p", [
              _vm._v(
                "\n                    " +
                  _vm._s(_vm.parseData.contact_name) +
                  "\n                "
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "user-data__item" }, [
            _c("p", [
              _vm._v("\n                    Телефон:\n                ")
            ]),
            _vm._v(" "),
            _c("p", [
              _vm._v(
                "\n                    " +
                  _vm._s(_vm.parseData.contact_phone) +
                  "\n                "
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "user-data__item" }, [
            _c("p", [
              _vm._v("\n                    E-mail:\n                ")
            ]),
            _vm._v(" "),
            _c("p", [
              _c(
                "a",
                {
                  staticClass: "link-default",
                  attrs: { href: "mailto:" + _vm.parseData.contact_email }
                },
                [_vm._v(_vm._s(_vm.parseData.contact_email))]
              )
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "btn-block" }, [
          _c(
            "button",
            {
              staticClass: "btn-edit",
              on: {
                click: function($event) {
                  return _vm.showModal("edit-company-person")
                }
              }
            },
            [_vm._v("\n                Редактировать\n            ")]
          )
        ])
      ]),
      _vm._v(" "),
      _c(
        "modal",
        {
          staticClass: "modal",
          attrs: { name: "edit-company-scope" },
          on: { "before-close": _vm.beforeClose }
        },
        [
          _c(
            "div",
            {
              staticClass: "prev",
              on: {
                click: function($event) {
                  return _vm.hideModal("edit-company-scope")
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
              _vm._v("\n            Личные данные\n        ")
            ]
          ),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "close",
              on: {
                click: function($event) {
                  return _vm.hideModal("edit-company-scope")
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
            _vm._v("\n            Название и сфера деятельности\n        ")
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
                    return _vm.editCompanyScopeSubmit($event)
                  }
                }
              },
              [
                _c("div", { staticClass: "input-group" }, [
                  _c("label", [
                    _vm._v("\n                        Название "),
                    _c("span", { staticClass: "req" }, [_vm._v("*")]),
                    _vm._v(":\n                    ")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.parseData.name,
                        expression: "parseData.name"
                      },
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required",
                        expression: "'required'"
                      }
                    ],
                    class: {
                      "is-invalid": _vm.submitted && _vm.errors.has("name")
                    },
                    attrs: { type: "text", name: "name" },
                    domProps: { value: _vm.parseData.name },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.parseData, "name", $event.target.value)
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "input-group" },
                  [
                    _c("label", [
                      _vm._v("\n                        Тип компании "),
                      _c("span", { staticClass: "req" }, [_vm._v("*")]),
                      _vm._v(":\n                    ")
                    ]),
                    _vm._v(" "),
                    _c("v-select", {
                      directives: [
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "v-select__default v-select__default-white",
                      class: {
                        "is-invalid":
                          _vm.submitted && _vm.errors.has("company_type_id")
                      },
                      attrs: {
                        label: "name",
                        placeholder: " - тип - ",
                        name: "company_type_id",
                        options: _vm.typeList
                      },
                      model: {
                        value: _vm.parseData.company_types,
                        callback: function($$v) {
                          _vm.$set(_vm.parseData, "company_types", $$v)
                        },
                        expression: "parseData.company_types"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "input-group" },
                  [
                    _c("label", [
                      _vm._v("\n                        Размер компании "),
                      _c("span", { staticClass: "req" }, [_vm._v("*")]),
                      _vm._v(":\n                    ")
                    ]),
                    _vm._v(" "),
                    _c("v-select", {
                      directives: [
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "v-select__default v-select__default-white",
                      class: {
                        "is-invalid":
                          _vm.submitted && _vm.errors.has("company_sizes_id")
                      },
                      attrs: {
                        label: "name",
                        placeholder: " - размер - ",
                        name: "company_sizes_id",
                        options: _vm.sizeList
                      },
                      model: {
                        value: _vm.parseData.company_size,
                        callback: function($$v) {
                          _vm.$set(_vm.parseData, "company_size", $$v)
                        },
                        expression: "parseData.company_size"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", { staticClass: "btn-wrapper" }, [
                  _c(
                    "button",
                    { staticClass: "btn btn-green", attrs: { type: "submit" } },
                    [
                      _vm._v(
                        "\n                        Сохранить\n                    "
                      )
                    ]
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
                          return _vm.hideModal("edit-company-scope")
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
      ),
      _vm._v(" "),
      _c(
        "modal",
        {
          staticClass: "modal modal-edit-description",
          attrs: { name: "edit-company-description" },
          on: { "before-close": _vm.beforeClose }
        },
        [
          _c(
            "div",
            {
              staticClass: "prev",
              on: {
                click: function($event) {
                  return _vm.hideModal("edit-company-description")
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
              _vm._v("\n            Личные данные\n        ")
            ]
          ),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "close",
              on: {
                click: function($event) {
                  return _vm.hideModal("edit-company-description")
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
            _vm._v("\n            Описание компании\n        ")
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
                    return _vm.editCompanyDescriptionSubmit($event)
                  }
                }
              },
              [
                _c(
                  "div",
                  { staticClass: "input-group m-0" },
                  [
                    _c("ckeditor", {
                      attrs: { editor: _vm.editor, config: _vm.editorConfig },
                      model: {
                        value: _vm.parseData.information,
                        callback: function($$v) {
                          _vm.$set(_vm.parseData, "information", $$v)
                        },
                        expression: "parseData.information"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", { staticClass: "btn-wrapper m-t-10" }, [
                  _c(
                    "button",
                    { staticClass: "btn btn-green", attrs: { type: "submit" } },
                    [
                      _vm._v(
                        "\n                        Сохранить\n                    "
                      )
                    ]
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
                          return _vm.hideModal("edit-company-description")
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
      ),
      _vm._v(" "),
      _c(
        "modal",
        {
          staticClass: "modal",
          attrs: { name: "edit-company-info" },
          on: { "before-close": _vm.beforeClose }
        },
        [
          _c(
            "div",
            {
              staticClass: "prev",
              on: {
                click: function($event) {
                  return _vm.hideModal("edit-company-info")
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
              _vm._v("\n            Личные данные\n        ")
            ]
          ),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "close",
              on: {
                click: function($event) {
                  return _vm.hideModal("edit-company-info")
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
            _vm._v("\n            Информация о компании\n        ")
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
                    return _vm.editCompanyInfoSubmit($event)
                  }
                }
              },
              [
                _c(
                  "div",
                  { staticClass: "input-group" },
                  [
                    _c("label", [
                      _vm._v("\n                        Город "),
                      _c("span", { staticClass: "req" }, [_vm._v("*")]),
                      _vm._v(":\n                    ")
                    ]),
                    _vm._v(" "),
                    _c("autocomplete", {
                      directives: [
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      class: {
                        "is-invalid": _vm.submitted && _vm.errors.has("city")
                      },
                      attrs: {
                        placeholder: "Например, Москва",
                        name: "city",
                        initialDisplay: _vm.residenceCity(),
                        source: _vm.cityList
                      },
                      model: {
                        value: _vm.cities,
                        callback: function($$v) {
                          _vm.cities = _vm._n($$v)
                        },
                        expression: "cities"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", { staticClass: "input-group" }, [
                  _c("label", [
                    _vm._v("\n                        Адрес "),
                    _c("span", { staticClass: "req" }, [_vm._v("*")]),
                    _vm._v(":\n                    ")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.parseData.address,
                        expression: "parseData.address"
                      },
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required",
                        expression: "'required'"
                      }
                    ],
                    class: {
                      "is-invalid": _vm.submitted && _vm.errors.has("address")
                    },
                    attrs: { type: "text", name: "address" },
                    domProps: { value: _vm.parseData.address },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.parseData, "address", $event.target.value)
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "input-group" }, [
                  _c(
                    "div",
                    { staticClass: "input-group add-phone" },
                    [
                      _c("label", [
                        _vm._v("\n                            Телефон "),
                        _c("span", { staticClass: "req" }, [_vm._v("*")]),
                        _vm._v(":\n                        ")
                      ]),
                      _vm._v(" "),
                      _vm._l(_vm.phones, function(phone, index) {
                        return _c(
                          "div",
                          { key: index, staticClass: "add-phone-wrapper" },
                          [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: phone.number,
                                  expression: "phone.number"
                                },
                                {
                                  name: "validate",
                                  rawName: "v-validate",
                                  value: "required",
                                  expression: "'required'"
                                }
                              ],
                              class: {
                                "is-invalid":
                                  _vm.submitted && _vm.errors.has("phone")
                              },
                              attrs: { type: "text", name: "phone" },
                              domProps: { value: phone.number },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(phone, "number", $event.target.value)
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c(
                              "button",
                              {
                                staticClass:
                                  "link-default link-default__red d-none",
                                class: { "d-flex": _vm.phones.length > 1 },
                                attrs: { type: "button" },
                                on: {
                                  click: function($event) {
                                    return _vm.deleteInput(phone)
                                  }
                                }
                              },
                              [
                                _vm._v(
                                  "\n                                Удалить\n                            "
                                )
                              ]
                            )
                          ]
                        )
                      }),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "btn-link btn-add",
                          attrs: { type: "button" },
                          on: { click: _vm.addInput }
                        },
                        [
                          _vm._v(
                            "\n                            +\n                            "
                          ),
                          _c("span", { staticClass: "link-default" }, [
                            _vm._v("Добавить еще один")
                          ])
                        ]
                      )
                    ],
                    2
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "input-group" }, [
                  _c("label", [
                    _vm._v("\n                        E-mail "),
                    _c("span", { staticClass: "req" }, [_vm._v("*")]),
                    _vm._v(":\n                    ")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.parseData.email,
                        expression: "parseData.email"
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
                    attrs: { type: "text", name: "email" },
                    domProps: { value: _vm.parseData.email },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.parseData, "email", $event.target.value)
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "input-group" }, [
                  _c("label", [
                    _vm._v("\n                        Веб сайт "),
                    _c("span", { staticClass: "req" }, [_vm._v("*")]),
                    _vm._v(":\n                    ")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.parseData.web_site,
                        expression: "parseData.web_site"
                      }
                    ],
                    attrs: { type: "text", name: "web_site" },
                    domProps: { value: _vm.parseData.web_site },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.parseData, "web_site", $event.target.value)
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
                        "\n                        Сохранить\n                    "
                      )
                    ]
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
                          return _vm.hideModal("edit-company-info")
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
      ),
      _vm._v(" "),
      _c(
        "modal",
        {
          staticClass: "modal",
          attrs: { name: "edit-company-person" },
          on: { "before-close": _vm.beforeClose }
        },
        [
          _c(
            "div",
            {
              staticClass: "prev",
              on: {
                click: function($event) {
                  return _vm.hideModal("edit-company-person")
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
              _vm._v("\n            Личные данные\n        ")
            ]
          ),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "close",
              on: {
                click: function($event) {
                  return _vm.hideModal("edit-company-person")
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
            _vm._v("\n            Контактное лицо\n        ")
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
                    return _vm.editCompanyPersonSubmit($event)
                  }
                }
              },
              [
                _c("div", { staticClass: "input-group" }, [
                  _c("label", [
                    _vm._v("\n                        Имя "),
                    _c("span", { staticClass: "req" }, [_vm._v("*")]),
                    _vm._v(":\n                    ")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.parseData.contact_name,
                        expression: "parseData.contact_name"
                      },
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required",
                        expression: "'required'"
                      }
                    ],
                    class: {
                      "is-invalid":
                        _vm.submitted && _vm.errors.has("contact_name")
                    },
                    attrs: { type: "text", name: "contact_name" },
                    domProps: { value: _vm.parseData.contact_name },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.parseData,
                          "contact_name",
                          $event.target.value
                        )
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "input-group" }, [
                  _c("label", [
                    _vm._v("\n                        Телефон "),
                    _c("span", { staticClass: "req" }, [_vm._v("*")]),
                    _vm._v(":\n                    ")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.parseData.contact_phone,
                        expression: "parseData.contact_phone"
                      },
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required",
                        expression: "'required'"
                      }
                    ],
                    class: {
                      "is-invalid":
                        _vm.submitted && _vm.errors.has("contact_phone")
                    },
                    attrs: { type: "text", name: "contact_phone" },
                    domProps: { value: _vm.parseData.contact_phone },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.parseData,
                          "contact_phone",
                          $event.target.value
                        )
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "input-group" }, [
                  _c("label", [
                    _vm._v("\n                        E-mail "),
                    _c("span", { staticClass: "req" }, [_vm._v("*")]),
                    _vm._v(":\n                    ")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.parseData.contact_email,
                        expression: "parseData.contact_email"
                      },
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required",
                        expression: "'required'"
                      }
                    ],
                    class: {
                      "is-invalid":
                        _vm.submitted && _vm.errors.has("contact_email")
                    },
                    attrs: { type: "text", name: "contact_email" },
                    domProps: { value: _vm.parseData.contact_email },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.parseData,
                          "contact_email",
                          $event.target.value
                        )
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
                        "\n                        Сохранить\n                    "
                      )
                    ]
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
                          return _vm.hideModal("edit-company-person")
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

/***/ "./resources/js/views/profile/employer/company/AppProfileCompany.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/views/profile/employer/company/AppProfileCompany.vue ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppProfileCompany_vue_vue_type_template_id_9d944d18_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppProfileCompany.vue?vue&type=template&id=9d944d18&scoped=true& */ "./resources/js/views/profile/employer/company/AppProfileCompany.vue?vue&type=template&id=9d944d18&scoped=true&");
/* harmony import */ var _AppProfileCompany_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppProfileCompany.vue?vue&type=script&lang=js& */ "./resources/js/views/profile/employer/company/AppProfileCompany.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _AppProfileCompany_vue_vue_type_style_index_0_id_9d944d18_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AppProfileCompany.vue?vue&type=style&index=0&id=9d944d18&scoped=true&lang=sass& */ "./resources/js/views/profile/employer/company/AppProfileCompany.vue?vue&type=style&index=0&id=9d944d18&scoped=true&lang=sass&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AppProfileCompany_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AppProfileCompany_vue_vue_type_template_id_9d944d18_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AppProfileCompany_vue_vue_type_template_id_9d944d18_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "9d944d18",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/profile/employer/company/AppProfileCompany.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/profile/employer/company/AppProfileCompany.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/views/profile/employer/company/AppProfileCompany.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppProfileCompany_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AppProfileCompany.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/profile/employer/company/AppProfileCompany.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppProfileCompany_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/profile/employer/company/AppProfileCompany.vue?vue&type=style&index=0&id=9d944d18&scoped=true&lang=sass&":
/*!*************************************************************************************************************************************!*\
  !*** ./resources/js/views/profile/employer/company/AppProfileCompany.vue?vue&type=style&index=0&id=9d944d18&scoped=true&lang=sass& ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AppProfileCompany_vue_vue_type_style_index_0_id_9d944d18_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/lib/loader.js??ref--7-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AppProfileCompany.vue?vue&type=style&index=0&id=9d944d18&scoped=true&lang=sass& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/profile/employer/company/AppProfileCompany.vue?vue&type=style&index=0&id=9d944d18&scoped=true&lang=sass&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AppProfileCompany_vue_vue_type_style_index_0_id_9d944d18_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AppProfileCompany_vue_vue_type_style_index_0_id_9d944d18_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AppProfileCompany_vue_vue_type_style_index_0_id_9d944d18_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AppProfileCompany_vue_vue_type_style_index_0_id_9d944d18_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AppProfileCompany_vue_vue_type_style_index_0_id_9d944d18_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/profile/employer/company/AppProfileCompany.vue?vue&type=template&id=9d944d18&scoped=true&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/views/profile/employer/company/AppProfileCompany.vue?vue&type=template&id=9d944d18&scoped=true& ***!
  \**********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppProfileCompany_vue_vue_type_template_id_9d944d18_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AppProfileCompany.vue?vue&type=template&id=9d944d18&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/profile/employer/company/AppProfileCompany.vue?vue&type=template&id=9d944d18&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppProfileCompany_vue_vue_type_template_id_9d944d18_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppProfileCompany_vue_vue_type_template_id_9d944d18_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);