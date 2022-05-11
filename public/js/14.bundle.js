(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/profile/employer/AppEditVacancy.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/profile/employer/AppEditVacancy.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuejs_auto_complete__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuejs-auto-complete */ "./node_modules/vuejs-auto-complete/dist/build.js");
/* harmony import */ var vuejs_auto_complete__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuejs_auto_complete__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "AppEditVacancy",
  components: {
    Autocomplete: vuejs_auto_complete__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  props: ['data', 'logo'],
  data: function data() {
    return {
      submitted: false,
      loading: false,
      parseData: null,
      city: null,
      empTypes: null,
      categories: null,
      editor: _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1___default.a,
      editorConfig: {
        toolbar: ['Heading', 'bulletedList', 'numberedList', 'bold', 'italic', 'link', 'undo', 'redo']
      }
    };
  },
  beforeMount: function beforeMount() {
    this.$store.dispatch('GET_CITY');
    this.$store.dispatch('GET_CATEGORIES');
    this.$store.dispatch('GET_TYPES');
    this.$store.commit('SET_COMPANY_LOGO', this.logo);
    this.parseData = JSON.parse(this.data);
    this.city = this.parseData.cities[0].id;
    this.empTypes = this.createCheckboxGroupArray(this.parseData.employment_types);
    this.categories = this.createCheckboxGroupArray(this.parseData.categories);
  },
  methods: {
    createCheckboxGroupArray: function createCheckboxGroupArray(object) {
      var array = [];
      object.forEach(function (elem) {
        array.push(elem.id);
      });
      return array;
    },
    createCityArray: function createCityArray() {
      var cities = [];
      cities.push("".concat(this.city));
      return cities;
    },
    vacancyEditSubmit: function vacancyEditSubmit() {
      var _this = this;

      this.submitted = true;
      this.$store.dispatch('addErrors', this.$validator.errors.items);
      this.$validator.validate().then(function (valid) {
        if (valid) {
          _this.loading = true;
          axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("/vacancy/update/".concat(_this.parseData.id), {
            _method: 'PATCH',
            position: _this.parseData.position,
            cities: _this.createCityArray(),
            contact_name: _this.parseData.contact_name,
            contact_phone: _this.parseData.contact_phone,
            contact_email: _this.parseData.contact_email,
            employment_types: _this.empTypes,
            salary: _this.parseData.salary,
            salary_comment: _this.parseData.salary_comment,
            description: _this.parseData.description,
            categories: _this.categories,
            published: _this.parseData.published,
            short_desc: _this.parseData.short_desc,
            video: _this.parseData.video
          }).then(function (response) {
            if (response.data.status === 'redirect') {
              window.location.href = response.data.data.path;
              _this.loading = false;
            }
          }).catch(function (error) {
            _this.loading = false;

            for (var errorItem in error.response.data.errors) {
              _this.errors.add({
                field: errorItem,
                msg: error.response.data.errors[errorItem][0]
              });
            }
          }).then(function () {
            _this.loading = false;
          });
        }
      });
    }
  },
  computed: {
    cityList: function cityList() {
      return this.$store.getters.CITY;
    },
    typesList: function typesList() {
      return this.$store.getters.TYPES;
    },
    categoriesList: function categoriesList() {
      return this.$store.getters.CATEGORIES;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/profile/employer/AppEditVacancy.vue?vue&type=style&index=0&id=64bf7c0f&scoped=true&lang=sass&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/lib/loader.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/profile/employer/AppEditVacancy.vue?vue&type=style&index=0&id=64bf7c0f&scoped=true&lang=sass& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".create-resume[data-v-64bf7c0f] {\n  padding-top: 23px;\n}\n.create-resume .prev-link[data-v-64bf7c0f] {\n  display: inline-block;\n  margin-bottom: 22px;\n}\n.resume[data-v-64bf7c0f] {\n  width: 803px;\n  background-color: #f9f9f9;\n  border: 1px solid #cfd6dc;\n}\n@media only screen and (max-width: 991px) {\n.resume[data-v-64bf7c0f] {\n    width: 100%;\n}\n}\n.resume__block[data-v-64bf7c0f] {\n  padding: 24px 36px 39px;\n  border-bottom: 1px solid #cfd6dc;\n}\n@media only screen and (max-width: 575px) {\n.resume__block[data-v-64bf7c0f] {\n    padding: 15px 20px 25px;\n}\n}\n.resume__block .input-group[data-v-64bf7c0f]:last-child {\n  margin-bottom: 0;\n}\n.resume__title[data-v-64bf7c0f] {\n  font-weight: 500;\n  font-size: 1.5rem;\n  margin-bottom: 33px;\n}\n@media only screen and (max-width: 991px) {\n.resume__title[data-v-64bf7c0f] {\n    margin-bottom: 25px;\n}\n}\n@media only screen and (max-width: 575px) {\n.resume__title[data-v-64bf7c0f] {\n    margin-bottom: 13px;\n    line-height: 1.2;\n}\n}\n.resume__subtitle[data-v-64bf7c0f] {\n  font-weight: 400;\n  font-size: 0.9375rem;\n  line-height: 1.5rem;\n  color: #797979;\n}\n.resume .input-group[data-v-64bf7c0f] {\n  align-items: flex-start;\n  margin-bottom: 15px;\n}\n.resume .input-group label[data-v-64bf7c0f]:not(.checkbox) {\n  margin-bottom: 11px;\n}\n.resume .checkbox[data-v-64bf7c0f] {\n  margin-bottom: 5px;\n}\n.resume .checkbox span[data-v-64bf7c0f] {\n  font-weight: 400;\n}\n@media only screen and (max-width: 575px) {\n.resume .checkbox span[data-v-64bf7c0f] {\n    font-size: 0.8rem;\n}\n}\n.resume .checkbox span[data-v-64bf7c0f]:before {\n  background-color: #fff;\n}\n.resume__position[data-v-64bf7c0f] {\n  max-width: 570px;\n}\n.resume__desired[data-v-64bf7c0f] {\n  max-width: 260px;\n}\n.resume__desired-add[data-v-64bf7c0f] {\n  -webkit-box-shadow: none;\n  -moz-box-shadow: none;\n  box-shadow: none;\n  background-color: transparent;\n  border: none;\n  display: inline-flex;\n  align-items: center;\n  color: #0092d7;\n}\n.resume__desired-add span[data-v-64bf7c0f] {\n  margin-left: 7px;\n}\n.resume .autocomplete-desired[data-v-64bf7c0f] {\n  margin-bottom: 10px;\n  width: 100%;\n}\n.resume__salary[data-v-64bf7c0f] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-start;\n}\n.resume__salary input[data-v-64bf7c0f] {\n  width: 260px;\n}\n@media only screen and (max-width: 575px) {\n.resume__salary input[data-v-64bf7c0f] {\n    width: 165px;\n}\n}\n.resume__salary span[data-v-64bf7c0f] {\n  margin-left: 15px;\n  white-space: nowrap;\n}\n.resume__category-wrapper[data-v-64bf7c0f] {\n  display: flex;\n  flex-wrap: wrap;\n}\n.resume__category-item[data-v-64bf7c0f] {\n  width: 50%;\n  flex-shrink: 0;\n}\n@media only screen and (max-width: 991px) {\n.resume__category-item[data-v-64bf7c0f] {\n    padding-right: 10px;\n}\n}\n.resume__education .resume__title[data-v-64bf7c0f] {\n  margin-bottom: 20px;\n}\n.resume__education .resume__desc[data-v-64bf7c0f] {\n  margin-bottom: 35px;\n  margin-top: -8px;\n  font-size: 0.9375rem;\n  line-height: 1.5rem;\n  color: #797979;\n}\n@media only screen and (max-width: 991px) {\n.resume__education .resume__desc[data-v-64bf7c0f] {\n    margin-bottom: 20px;\n}\n}\n.resume .input-group__select[data-v-64bf7c0f] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n@media only screen and (max-width: 575px) {\n.resume .input-group__select[data-v-64bf7c0f] {\n    flex-direction: column;\n}\n}\n.resume__level[data-v-64bf7c0f] {\n  max-width: 570px;\n}\n.resume__level .v-select__default[data-v-64bf7c0f] {\n  width: 100%;\n  background-color: #fff;\n}\n.resume__period[data-v-64bf7c0f] {\n  width: calc(50% - 15px);\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n@media only screen and (max-width: 767px) {\n.resume__period[data-v-64bf7c0f] {\n    flex-direction: column;\n    width: 100%;\n    margin-bottom: 0 !important;\n}\n}\n.resume__period .v-select__default[data-v-64bf7c0f] {\n  width: calc(50% - 5px);\n  background-color: #fff;\n  margin-bottom: 10px;\n}\n@media only screen and (max-width: 767px) {\n.resume__period .v-select__default[data-v-64bf7c0f] {\n    width: calc(100% - 10px);\n}\n}\n.resume__period label[data-v-64bf7c0f] {\n  width: 100%;\n}\n.resume__city[data-v-64bf7c0f] {\n  max-width: 260px;\n}\n.resume__city .autocomplete-wrapper[data-v-64bf7c0f] {\n  width: 100%;\n}\n.resume__show .radio[data-v-64bf7c0f] {\n  margin-bottom: 15px;\n}\n.resume__show .radio span[data-v-64bf7c0f]:before {\n  background-color: #fff;\n}\n.resume__show .hide[data-v-64bf7c0f] {\n  margin-left: 25px;\n}\n@media only screen and (max-width: 575px) {\n.resume__show .hide[data-v-64bf7c0f] {\n    margin-left: 10px;\n}\n}\n.resume__show p[data-v-64bf7c0f] {\n  color: #909090;\n  line-height: 1.1875rem;\n  font-size: 0.875rem;\n  margin-bottom: 0;\n  max-width: 376px;\n  margin-left: 33px;\n}\n.resume .btn-wrapper[data-v-64bf7c0f] {\n  margin-top: 25px;\n}\n@media only screen and (max-width: 575px) {\n.resume .btn-wrapper[data-v-64bf7c0f] {\n    margin-top: 10px;\n}\n}\n.resume .btn-wrapper .btn-green[data-v-64bf7c0f] {\n  height: 47px;\n  line-height: 47px;\n  padding: 0 20px;\n  font-size: 1rem;\n}\n.resume .btn-wrapper .or[data-v-64bf7c0f] {\n  color: #969696;\n  margin: 0 15px;\n}\n@media only screen and (max-width: 575px) {\n.resume .btn-wrapper .or[data-v-64bf7c0f] {\n    display: none;\n}\n}\n@media only screen and (max-width: 575px) {\n.resume .btn-wrapper .link-default__red[data-v-64bf7c0f] {\n    margin-left: 15px;\n}\n}\n.city-autocomplete[data-v-64bf7c0f] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 13px;\n}\n.city-autocomplete .link-default__red[data-v-64bf7c0f] {\n  margin-left: 10px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/profile/employer/AppEditVacancy.vue?vue&type=style&index=0&id=64bf7c0f&scoped=true&lang=sass&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/lib/loader.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/profile/employer/AppEditVacancy.vue?vue&type=style&index=0&id=64bf7c0f&scoped=true&lang=sass& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/lib/loader.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AppEditVacancy.vue?vue&type=style&index=0&id=64bf7c0f&scoped=true&lang=sass& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/profile/employer/AppEditVacancy.vue?vue&type=style&index=0&id=64bf7c0f&scoped=true&lang=sass&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/profile/employer/AppEditVacancy.vue?vue&type=template&id=64bf7c0f&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/profile/employer/AppEditVacancy.vue?vue&type=template&id=64bf7c0f&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
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
      "form",
      {
        staticClass: "resume",
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
            return _vm.vacancyEditSubmit($event)
          }
        }
      },
      [
        _c(
          "div",
          { staticClass: "resume__block" },
          [
            _c("h2", { staticClass: "resume__title" }, [
              _vm._v("\n                Общая информация\n            ")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "input-group resume__position" }, [
              _vm._m(0),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.parseData.position,
                    expression: "parseData.position"
                  },
                  {
                    name: "validate",
                    rawName: "v-validate",
                    value: { required: true },
                    expression: "{required: true}"
                  }
                ],
                class: {
                  "is-invalid": _vm.submitted && _vm.errors.has("position")
                },
                attrs: { type: "text", name: "position" },
                domProps: { value: _vm.parseData.position },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.parseData, "position", $event.target.value)
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "input-group resume__desired" },
              [
                _vm._m(1),
                _vm._v(" "),
                _c("autocomplete", {
                  attrs: {
                    source: _vm.cityList,
                    initialValue: _vm.parseData.cities[0].id,
                    initialDisplay: _vm.parseData.cities[0].name
                  },
                  model: {
                    value: _vm.city,
                    callback: function($$v) {
                      _vm.city = $$v
                    },
                    expression: "city"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "input-group resume__desired" }, [
              _vm._m(2),
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
                    value: { required: true },
                    expression: "{required: true}"
                  }
                ],
                class: {
                  "is-invalid": _vm.submitted && _vm.errors.has("contact_name")
                },
                attrs: { type: "text", name: "contact_name" },
                domProps: { value: _vm.parseData.contact_name },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.parseData, "contact_name", $event.target.value)
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "input-group resume__desired" }, [
              _vm._m(3),
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
                    value: { required: true },
                    expression: "{required: true}"
                  }
                ],
                class: {
                  "is-invalid": _vm.submitted && _vm.errors.has("contact_phone")
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
            _c("div", { staticClass: "input-group resume__desired" }, [
              _vm._m(4),
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
                    value: { required: true },
                    expression: "{required: true}"
                  }
                ],
                class: {
                  "is-invalid": _vm.submitted && _vm.errors.has("contact_email")
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
            _c(
              "div",
              { staticClass: "input-group" },
              [
                _vm._m(5),
                _vm._v(" "),
                _vm._l(_vm.typesList, function(types, index) {
                  return _c("label", { key: index, staticClass: "checkbox" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        },
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.empTypes,
                          expression: "empTypes"
                        }
                      ],
                      attrs: {
                        type: "checkbox",
                        name: "employment_types",
                        id: types.id
                      },
                      domProps: {
                        value: types.id,
                        checked: Array.isArray(_vm.empTypes)
                          ? _vm._i(_vm.empTypes, types.id) > -1
                          : _vm.empTypes
                      },
                      on: {
                        change: function($event) {
                          var $$a = _vm.empTypes,
                            $$el = $event.target,
                            $$c = $$el.checked ? true : false
                          if (Array.isArray($$a)) {
                            var $$v = types.id,
                              $$i = _vm._i($$a, $$v)
                            if ($$el.checked) {
                              $$i < 0 && (_vm.empTypes = $$a.concat([$$v]))
                            } else {
                              $$i > -1 &&
                                (_vm.empTypes = $$a
                                  .slice(0, $$i)
                                  .concat($$a.slice($$i + 1)))
                            }
                          } else {
                            _vm.empTypes = $$c
                          }
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        class: {
                          "is-invalid":
                            _vm.submitted && _vm.errors.has("employment_types")
                        }
                      },
                      [
                        _vm._v(
                          "\n                   " +
                            _vm._s(types.name) +
                            "\n                "
                        )
                      ]
                    )
                  ])
                })
              ],
              2
            ),
            _vm._v(" "),
            _c("div", { staticClass: "input-group" }, [
              _vm._m(6),
              _vm._v(" "),
              _c("div", { staticClass: "resume__salary" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model.number",
                      value: _vm.parseData.salary,
                      expression: "parseData.salary",
                      modifiers: { number: true }
                    },
                    {
                      name: "validate",
                      rawName: "v-validate",
                      value: { required: true },
                      expression: "{required: true}"
                    }
                  ],
                  class: {
                    "is-invalid": _vm.submitted && _vm.errors.has("salary")
                  },
                  attrs: { type: "text", name: "salary" },
                  domProps: { value: _vm.parseData.salary },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.parseData,
                        "salary",
                        _vm._n($event.target.value)
                      )
                    },
                    blur: function($event) {
                      return _vm.$forceUpdate()
                    }
                  }
                }),
                _vm._v(" "),
                _c("span", [_vm._v("руб. в месяц")])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "input-group resume__comment" }, [
              _c("label", [
                _vm._v(
                  "\n                    Коментарий к зарплате:\n                "
                )
              ]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.parseData.salary_comment,
                    expression: "parseData.salary_comment"
                  }
                ],
                attrs: { type: "text", name: "salary_comment" },
                domProps: { value: _vm.parseData.salary_comment },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(
                      _vm.parseData,
                      "salary_comment",
                      $event.target.value
                    )
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "input-group resume__position" }, [
              _c("label", [
                _vm._v(
                  "\n                    Ссылка на Youtube:\n                "
                )
              ]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.parseData.video,
                    expression: "parseData.video"
                  }
                ],
                attrs: { type: "text", name: "video" },
                domProps: { value: _vm.parseData.video },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.parseData, "video", $event.target.value)
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "input-group resume__category" }, [
              _vm._m(7),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "resume__category-wrapper" },
                _vm._l(_vm.categoriesList, function(category, index) {
                  return _c(
                    "div",
                    { key: index, staticClass: "resume__category-item" },
                    [
                      _c("label", { staticClass: "checkbox" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "validate",
                              rawName: "v-validate",
                              value: "required",
                              expression: "'required'"
                            },
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.categories,
                              expression: "categories"
                            }
                          ],
                          attrs: {
                            type: "checkbox",
                            name: "categories",
                            id: category.id
                          },
                          domProps: {
                            value: category.id,
                            checked: Array.isArray(_vm.categories)
                              ? _vm._i(_vm.categories, category.id) > -1
                              : _vm.categories
                          },
                          on: {
                            change: function($event) {
                              var $$a = _vm.categories,
                                $$el = $event.target,
                                $$c = $$el.checked ? true : false
                              if (Array.isArray($$a)) {
                                var $$v = category.id,
                                  $$i = _vm._i($$a, $$v)
                                if ($$el.checked) {
                                  $$i < 0 &&
                                    (_vm.categories = $$a.concat([$$v]))
                                } else {
                                  $$i > -1 &&
                                    (_vm.categories = $$a
                                      .slice(0, $$i)
                                      .concat($$a.slice($$i + 1)))
                                }
                              } else {
                                _vm.categories = $$c
                              }
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            class: {
                              "is-invalid":
                                _vm.submitted && _vm.errors.has("categories")
                            }
                          },
                          [
                            _vm._v(
                              "\n                            " +
                                _vm._s(category.name) +
                                "\n                        "
                            )
                          ]
                        )
                      ])
                    ]
                  )
                }),
                0
              )
            ]),
            _vm._v(" "),
            _c("app-add-category", {
              attrs: { request: _vm.parseData.link_to_offer_category }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c("div", { staticClass: "resume__block" }, [
          _vm._m(8),
          _vm._v(" "),
          _c("div", { staticClass: "input-group" }, [
            _c("textarea", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.parseData.short_desc,
                  expression: "parseData.short_desc"
                }
              ],
              attrs: { name: "short_desc", maxlength: "191" },
              domProps: { value: _vm.parseData.short_desc },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.parseData, "short_desc", $event.target.value)
                }
              }
            })
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "resume__block" }, [
          _c("h2", { staticClass: "resume__title" }, [
            _vm._v("\n                Описание вакансии\n            ")
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "input-group" },
            [
              _c("ckeditor", {
                attrs: { editor: _vm.editor, config: _vm.editorConfig },
                model: {
                  value: _vm.parseData.description,
                  callback: function($$v) {
                    _vm.$set(_vm.parseData, "description", $$v)
                  },
                  expression: "parseData.description"
                }
              })
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "resume__block resume__show" }, [
          _c("h2", { staticClass: "resume__title" }, [
            _vm._v(
              "\n                Настройки видимости вакансии:\n            "
            )
          ]),
          _vm._v(" "),
          _c("label", { staticClass: "radio" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.parseData.published,
                  expression: "parseData.published"
                }
              ],
              attrs: { type: "radio", value: "1", name: "published" },
              domProps: { checked: _vm._q(_vm.parseData.published, "1") },
              on: {
                change: function($event) {
                  return _vm.$set(_vm.parseData, "published", "1")
                }
              }
            }),
            _vm._v(" "),
            _c("span", [
              _vm._v("\n                Размещено на сайте\n            ")
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "input-group hide m-0" }),
          _vm._v(" "),
          _c("label", { staticClass: "radio" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.parseData.published,
                  expression: "parseData.published"
                }
              ],
              attrs: { type: "radio", value: "0", name: "published" },
              domProps: { checked: _vm._q(_vm.parseData.published, "0") },
              on: {
                change: function($event) {
                  return _vm.$set(_vm.parseData, "published", "0")
                }
              }
            }),
            _vm._v(" "),
            _c("span", [_vm._v("\n                Черновик\n            ")])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "btn-wrapper" }, [
            _c(
              "button",
              {
                staticClass: "btn btn-green",
                attrs: { disabled: _vm.loading, type: "submit" }
              },
              [
                _vm._v(
                  "\n                    Сохранить резюме\n                "
                )
              ]
            ),
            _vm._v(" "),
            _c("span", { staticClass: "or" }, [
              _vm._v("\n                или\n            ")
            ]),
            _vm._v(" "),
            _c("button", { staticClass: "link-default link-default__red" }, [
              _vm._v("\n                    Отменить\n                ")
            ])
          ])
        ])
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v("\n                    Должность "),
      _c("span", { staticClass: "req" }, [_vm._v("*")]),
      _vm._v(":\n                ")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v("\n                    Город работы "),
      _c("span", { staticClass: "req" }, [_vm._v("*")]),
      _vm._v(":\n                ")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v("\n                    Контактное лицо "),
      _c("span", { staticClass: "req" }, [_vm._v("*")]),
      _vm._v(":\n                ")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v("\n                    Телефон "),
      _c("span", { staticClass: "req" }, [_vm._v("*")]),
      _vm._v(":\n                ")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v("\n                    Email "),
      _c("span", { staticClass: "req" }, [_vm._v("*")]),
      _vm._v(":\n                ")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v("\n                    Вид занятости "),
      _c("span", { staticClass: "req" }, [_vm._v("*")]),
      _vm._v(":\n                ")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v("\n                    Зарплата "),
      _c("span", { staticClass: "req" }, [_vm._v("*")]),
      _vm._v(":\n                ")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v("\n                    Категория для размещения "),
      _c("span", { staticClass: "req" }, [_vm._v("*")]),
      _vm._v(":\n                ")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h2", { staticClass: "resume__title" }, [
      _vm._v("\n                Краткая информация\n                "),
      _c("div", { staticClass: "resume__subtitle" }, [
        _vm._v(
          "\n                    Дополните вакансию информацией, на которую хотели бы обратить внимание соискателя.\n                "
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/profile/employer/AppEditVacancy.vue":
/*!****************************************************************!*\
  !*** ./resources/js/views/profile/employer/AppEditVacancy.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppEditVacancy_vue_vue_type_template_id_64bf7c0f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppEditVacancy.vue?vue&type=template&id=64bf7c0f&scoped=true& */ "./resources/js/views/profile/employer/AppEditVacancy.vue?vue&type=template&id=64bf7c0f&scoped=true&");
/* harmony import */ var _AppEditVacancy_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppEditVacancy.vue?vue&type=script&lang=js& */ "./resources/js/views/profile/employer/AppEditVacancy.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _AppEditVacancy_vue_vue_type_style_index_0_id_64bf7c0f_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AppEditVacancy.vue?vue&type=style&index=0&id=64bf7c0f&scoped=true&lang=sass& */ "./resources/js/views/profile/employer/AppEditVacancy.vue?vue&type=style&index=0&id=64bf7c0f&scoped=true&lang=sass&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AppEditVacancy_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AppEditVacancy_vue_vue_type_template_id_64bf7c0f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AppEditVacancy_vue_vue_type_template_id_64bf7c0f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "64bf7c0f",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/profile/employer/AppEditVacancy.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/profile/employer/AppEditVacancy.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/views/profile/employer/AppEditVacancy.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppEditVacancy_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AppEditVacancy.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/profile/employer/AppEditVacancy.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppEditVacancy_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/profile/employer/AppEditVacancy.vue?vue&type=style&index=0&id=64bf7c0f&scoped=true&lang=sass&":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/views/profile/employer/AppEditVacancy.vue?vue&type=style&index=0&id=64bf7c0f&scoped=true&lang=sass& ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AppEditVacancy_vue_vue_type_style_index_0_id_64bf7c0f_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/lib/loader.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AppEditVacancy.vue?vue&type=style&index=0&id=64bf7c0f&scoped=true&lang=sass& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/profile/employer/AppEditVacancy.vue?vue&type=style&index=0&id=64bf7c0f&scoped=true&lang=sass&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AppEditVacancy_vue_vue_type_style_index_0_id_64bf7c0f_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AppEditVacancy_vue_vue_type_style_index_0_id_64bf7c0f_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AppEditVacancy_vue_vue_type_style_index_0_id_64bf7c0f_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AppEditVacancy_vue_vue_type_style_index_0_id_64bf7c0f_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AppEditVacancy_vue_vue_type_style_index_0_id_64bf7c0f_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/profile/employer/AppEditVacancy.vue?vue&type=template&id=64bf7c0f&scoped=true&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/views/profile/employer/AppEditVacancy.vue?vue&type=template&id=64bf7c0f&scoped=true& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppEditVacancy_vue_vue_type_template_id_64bf7c0f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AppEditVacancy.vue?vue&type=template&id=64bf7c0f&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/profile/employer/AppEditVacancy.vue?vue&type=template&id=64bf7c0f&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppEditVacancy_vue_vue_type_template_id_64bf7c0f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppEditVacancy_vue_vue_type_template_id_64bf7c0f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);