(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/profile/jobseeker/AppEditResume.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/profile/jobseeker/AppEditResume.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vuejs_auto_complete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuejs-auto-complete */ "./node_modules/vuejs-auto-complete/dist/build.js");
/* harmony import */ var vuejs_auto_complete__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vuejs_auto_complete__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "AppEditResume",
  components: {
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_1___default.a,
    Autocomplete: vuejs_auto_complete__WEBPACK_IMPORTED_MODULE_2___default.a
  },
  props: ['data'],
  data: function data() {
    return {
      submitted: false,
      loading: false,
      parseData: null,
      empTypes: null,
      categories: null,
      autocompleteKey: 0,
      cities: null,
      editor: _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_0___default.a,
      editorConfig: {
        toolbar: ['Heading', 'bulletedList', 'numberedList', 'bold', 'italic', 'link', 'undo', 'redo']
      },
      images: []
    };
  },
  created: function created() {
    this.$store.dispatch('GET_CITY');
    this.$store.dispatch('GET_CATEGORIES');
    this.$store.dispatch('GET_TYPES');
    this.$store.dispatch('GET_LEVELS');
    this.parseData = JSON.parse(this.data);
    this.empTypes = this.createCheckboxGroupArray(this.parseData.employment_types);
    this.categories = this.createCheckboxGroupArray(this.parseData.categories);
    this.parseData.educations = this.educationList();
    this.parseData.experiences = this.experiencesList();
    this.parseData.cities = this.mapCityArr();
  },
  methods: {
    educationList: function educationList() {
      var _this = this;

      var list = [];
      this.parseData.educations.forEach(function (item) {
        list.push({
          id: item.id,
          education_levels: {
            name: item.education_levels.name,
            id: item.education_levels.id
          },
          institution: item.institution,
          specialty: item.specialty,
          faculty: item.faculty,
          city: item.city,
          i_study: !!item.i_study,
          study_month_with: _this.findMonth(item.study_month_with),
          study_year_with: item.study_year_with,
          study_month_to: _this.findMonth(item.study_month_to),
          study_year_to: item.study_year_to
        });
      });
      return list;
    },
    experiencesList: function experiencesList() {
      var _this2 = this;

      return this.parseData.experiences.map(function (item) {
        return _objectSpread({}, item, {
          i_work: !!item.i_work,
          worked_month_with: _this2.findMonth(item.worked_month_with),
          worked_year_with: item.worked_year_with,
          worked_month_to: _this2.findMonth(item.worked_month_to),
          worked_year_to: item.worked_year_to
        });
      });
    },
    addExperience: function addExperience() {
      this.parseData.experiences.push({
        company: '',
        position: null,
        city: null,
        i_work: false,
        worked_month_with: '',
        worked_year_with: '',
        worked_month_to: '',
        worked_year_to: ''
      });
    },
    addCertificate: function addCertificate() {
      var certificate = {
        description: ''
      };
      this.parseData.certificates.push(certificate);
    },
    addEducation: function addEducation() {
      var educations = {
        id: '',
        education_levels: {
          name: '',
          id: ''
        },
        institution: '',
        specialty: '',
        faculty: '',
        city: '',
        i_study: false,
        study_month_with: '',
        study_year_with: '',
        study_month_to: '',
        study_year_to: ''
      };
      this.parseData.educations.push(educations);
    },
    deleteEducation: function deleteEducation(index) {
      this.parseData.educations.splice(index, 1);
    },
    deleteExperience: function deleteExperience(index) {
      this.parseData.experiences.splice(index, 1);
    },
    deleteCertificate: function deleteCertificate(index) {
      if (this.parseData.certificates[index]['fileId'] != undefined) {
        axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("/summary/delete-scan/".concat(this.parseData.certificates[index]['fileId'])).then(function (response) {}).catch(function (error) {});
      }

      this.parseData.certificates.splice(index, 1);
    },
    sendExperienceArray: function sendExperienceArray() {
      return this.parseData.experiences.map(function (item) {
        return {
          company: item.company,
          position: item.position,
          cities: item.city,
          i_work: +item.i_work,
          worked_month_with: +item.worked_month_with.id,
          worked_year_with: item.worked_year_with,
          worked_month_to: +item.i_work == 0 ? +item.worked_month_to.id : null,
          worked_year_to: +item.i_work == 0 ? item.worked_year_to : null
        };
      });
    },
    sendEducationArray: function sendEducationArray() {
      var educationArr = [];
      this.parseData.educations.forEach(function (education) {
        educationArr.push({
          education_level_id: education.education_levels.id,
          institution: education.institution,
          specialty: education.specialty,
          faculty: education.faculty,
          city: education.city,
          i_study: +education.i_study,
          study_month_with: education.study_month_with.number,
          study_year_with: +education.study_year_with,
          study_month_to: education.study_month_to !== undefined ? education.study_month_to.number : null,
          study_year_to: +education.study_year_to
        });
      });
      return educationArr;
    },
    findMonth: function findMonth(monthKey) {
      return this.month.find(function (month) {
        return monthKey === month.id;
      });
    },
    createCheckboxGroupArray: function createCheckboxGroupArray(object) {
      var array = [];
      object.forEach(function (elem) {
        array.push(elem.id);
      });
      return array;
    },
    mapCityArr: function mapCityArr() {
      var cities = [];
      this.parseData.cities.forEach(function (city) {
        cities.push({
          id: city.id,
          name: city.name
        });
      });
      return cities;
    },
    cityName: function cityName(group) {
      this.parseData.cities = this.parseData.cities.map(function (item) {
        if (item.id === '') {
          item.name = group.display;
          item.id = group.value;
        }

        return item;
      });
    },
    // add city
    addInput: function addInput() {
      this.parseData.cities.push({
        id: '',
        name: ''
      });
    },
    // delete city
    deleteInput: function deleteInput(index) {
      var _this3 = this;

      this.parseData.cities.splice(index, 1);
      this.$nextTick(function () {
        _this3.autocompleteKey += 1;
      });
    },
    createCityArray: function createCityArray() {
      var cities = [];
      this.parseData.cities.forEach(function (city) {
        cities.push(city.id);
      });
      return cities;
    },
    handleFileUpload: function handleFileUpload(event) {
      this.parseData.certificates[event.target.dataset.id].file = event.target.files[0];
    },
    deleteCertificateFile: function deleteCertificateFile(index, id) {
      var _this4 = this;

      axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("/summary/delete-scan/".concat(id)).then(function (response) {
        if (response.data.status === 'success') {
          delete _this4.parseData.certificates[index]['fileId'];
          delete _this4.parseData.certificates[index]['size'];
          delete _this4.parseData.certificates[index]['scan'];
        }
      }).catch(function (error) {});
    },
    resumeEditSubmit: function resumeEditSubmit() {
      var _this5 = this;

      this.submitted = true;
      this.$store.dispatch('addErrors', this.$validator.errors.items);
      this.$validator.validate().then(function (valid) {
        if (valid) {
          _this5.loading = true;
          var formData = new FormData();

          var cities = _this5.createCityArray();

          var educations = _this5.sendEducationArray();

          var experiences = _this5.sendExperienceArray();

          console.log(experiences);

          for (var i = 0; i < _this5.parseData.certificates.length; i++) {
            var file = _this5.parseData.certificates[i].file;
            formData.append('certificates[' + i + '][file]', file);
            formData.append('certificates[' + i + '][description]', _this5.parseData.certificates[i].description);
            formData.append('certificates[' + i + '][fileId]', _this5.parseData.certificates[i].fileId ? _this5.parseData.certificates[i].fileId : '');
          }

          for (var i = 0; i < cities.length; i++) {
            var city = cities[i];
            formData.append('city[' + i + ']', city);
          }

          console.log(educations);

          for (var i = 0; i < educations.length; i++) {
            var education = educations[i];

            for (var index in education) {
              var attr = education[index];
              formData.append('educations[' + i + '][' + index + ']', attr);
            }
          }

          for (var i = 0; i < experiences.length; i++) {
            var experience = experiences[i];

            for (var index in experience) {
              var attr = experience[index];
              formData.append('experiences[' + i + '][' + index + ']', attr);
            }
          }

          for (var i = 0; i < _this5.empTypes.length; i++) {
            var employment_type = _this5.empTypes[i];
            formData.append('employment_types[' + i + ']', employment_type);
          }

          for (var i = 0; i < _this5.categories.length; i++) {
            var categories = _this5.categories[i];
            formData.append('categories[' + i + ']', categories);
          }

          formData.append('position', _this5.parseData.position);
          formData.append('salary', _this5.parseData.salary);
          formData.append('salary', _this5.parseData.salary);
          formData.append('salary_comment', _this5.parseData.salary_comment);
          formData.append('hide_data', typeof _this5.parseData.hide_data !== "number" ? +_this5.parseData.hide_data : _this5.parseData.hide_data);
          formData.append('published', +_this5.parseData.published);
          formData.append('information', _this5.parseData.information);
          formData.append('short_desc', _this5.parseData.short_desc);
          formData.append('video', _this5.parseData.video);
          axios__WEBPACK_IMPORTED_MODULE_3___default.a.post("/summary/update/".concat(_this5.parseData.id), formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }).then(function (response) {
            if (response.data.status === 'redirect') {
              _this5.loading = false;
              window.location.href = response.data.data.path;
            }
          }).catch(function (error) {
            _this5.loading = false;

            for (var errorItem in error.response.data.errors) {
              _this5.errors.add({
                field: errorItem,
                msg: error.response.data.errors[errorItem][0]
              });
            }
          });
        }
      });
    }
  },
  computed: {
    typesList: function typesList() {
      return this.$store.getters.TYPES;
    },
    categoriesList: function categoriesList() {
      return this.$store.getters.CATEGORIES;
    },
    cityList: function cityList() {
      return this.$store.getters.CITY;
    },
    typesLevels: function typesLevels() {
      return this.$store.getters.LEVELS;
    },
    month: function month() {
      return this.$store.getters.month;
    },
    year: function year() {
      return this.$store.getters.year;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/profile/jobseeker/AppEditResume.vue?vue&type=style&index=0&id=5e7d2bf6&scoped=true&lang=sass&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/lib/loader.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/profile/jobseeker/AppEditResume.vue?vue&type=style&index=0&id=5e7d2bf6&scoped=true&lang=sass& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".create-resume[data-v-5e7d2bf6] {\n  padding-top: 23px;\n}\n.create-resume .prev-link[data-v-5e7d2bf6] {\n  display: inline-block;\n  margin-bottom: 22px;\n}\n.resume[data-v-5e7d2bf6] {\n  width: 803px;\n  background-color: #f9f9f9;\n  border: 1px solid #cfd6dc;\n}\n@media only screen and (max-width: 991px) {\n.resume[data-v-5e7d2bf6] {\n    width: 100%;\n}\n}\n.resume__block[data-v-5e7d2bf6] {\n  padding: 24px 36px 39px;\n  border-bottom: 1px solid #cfd6dc;\n}\n@media only screen and (max-width: 575px) {\n.resume__block[data-v-5e7d2bf6] {\n    padding: 15px 20px 25px;\n}\n}\n.resume__block .input-group[data-v-5e7d2bf6]:last-child {\n  margin-bottom: 0;\n}\n.resume__title[data-v-5e7d2bf6] {\n  font-weight: 500;\n  font-size: 1.5rem;\n  margin-bottom: 33px;\n}\n@media only screen and (max-width: 991px) {\n.resume__title[data-v-5e7d2bf6] {\n    margin-bottom: 25px;\n}\n}\n@media only screen and (max-width: 575px) {\n.resume__title[data-v-5e7d2bf6] {\n    margin-bottom: 13px;\n    line-height: 1.2;\n}\n}\n.resume__subtitle[data-v-5e7d2bf6] {\n  font-weight: 400;\n  font-size: 0.9375rem;\n  line-height: 1.5rem;\n  color: #797979;\n}\n.resume .input-group[data-v-5e7d2bf6] {\n  align-items: flex-start;\n  margin-bottom: 15px;\n}\n.resume .input-group label[data-v-5e7d2bf6]:not(.checkbox) {\n  margin-bottom: 11px;\n}\n.resume .checkbox[data-v-5e7d2bf6] {\n  margin-bottom: 5px;\n}\n.resume .checkbox span[data-v-5e7d2bf6] {\n  font-weight: 400;\n}\n@media only screen and (max-width: 575px) {\n.resume .checkbox span[data-v-5e7d2bf6] {\n    font-size: 0.8rem;\n}\n}\n.resume .checkbox span[data-v-5e7d2bf6]:before {\n  background-color: #fff;\n}\n.resume__position[data-v-5e7d2bf6] {\n  max-width: 570px;\n}\n.resume__desired[data-v-5e7d2bf6] {\n  max-width: 260px;\n}\n.resume__desired-add[data-v-5e7d2bf6] {\n  -webkit-box-shadow: none;\n  -moz-box-shadow: none;\n  box-shadow: none;\n  background-color: transparent;\n  border: none;\n  display: inline-flex;\n  align-items: center;\n  color: #0092d7;\n}\n.resume__desired-add span[data-v-5e7d2bf6] {\n  margin-left: 7px;\n}\n.resume .autocomplete-desired[data-v-5e7d2bf6] {\n  margin-bottom: 10px;\n  width: 100%;\n}\n.resume__salary[data-v-5e7d2bf6] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-start;\n}\n.resume__salary input[data-v-5e7d2bf6] {\n  width: 260px;\n}\n@media only screen and (max-width: 575px) {\n.resume__salary input[data-v-5e7d2bf6] {\n    width: 165px;\n}\n}\n.resume__salary span[data-v-5e7d2bf6] {\n  margin-left: 15px;\n  white-space: nowrap;\n}\n.resume__category-wrapper[data-v-5e7d2bf6] {\n  display: flex;\n  flex-wrap: wrap;\n}\n.resume__category-item[data-v-5e7d2bf6] {\n  width: 50%;\n  flex-shrink: 0;\n}\n@media only screen and (max-width: 991px) {\n.resume__category-item[data-v-5e7d2bf6] {\n    padding-right: 10px;\n}\n}\n.resume__education .resume__title[data-v-5e7d2bf6] {\n  margin-bottom: 20px;\n}\n.resume__education .resume__desc[data-v-5e7d2bf6] {\n  margin-bottom: 35px;\n  margin-top: -8px;\n  font-size: 0.9375rem;\n  line-height: 1.5rem;\n  color: #797979;\n}\n@media only screen and (max-width: 991px) {\n.resume__education .resume__desc[data-v-5e7d2bf6] {\n    margin-bottom: 20px;\n}\n}\n.resume .input-group__select[data-v-5e7d2bf6] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n@media only screen and (max-width: 575px) {\n.resume .input-group__select[data-v-5e7d2bf6] {\n    flex-direction: column;\n}\n}\n.resume__level[data-v-5e7d2bf6] {\n  max-width: 570px;\n}\n.resume__level .v-select__default[data-v-5e7d2bf6] {\n  width: 100%;\n  background-color: #fff;\n}\n.resume__period[data-v-5e7d2bf6] {\n  width: calc(50% - 15px);\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n@media only screen and (max-width: 767px) {\n.resume__period[data-v-5e7d2bf6] {\n    flex-direction: column;\n    width: 100%;\n    margin-bottom: 0 !important;\n}\n}\n.resume__period .v-select__default[data-v-5e7d2bf6] {\n  width: calc(50% - 5px);\n  background-color: #fff;\n  margin-bottom: 10px;\n}\n@media only screen and (max-width: 767px) {\n.resume__period .v-select__default[data-v-5e7d2bf6] {\n    width: calc(100% - 10px);\n}\n}\n.resume__period label[data-v-5e7d2bf6] {\n  width: 100%;\n}\n.resume__city[data-v-5e7d2bf6] {\n  max-width: 260px;\n}\n.resume__city .autocomplete-wrapper[data-v-5e7d2bf6] {\n  width: 100%;\n}\n.resume__show .radio[data-v-5e7d2bf6] {\n  margin-bottom: 15px;\n}\n.resume__show .radio span[data-v-5e7d2bf6]:before {\n  background-color: #fff;\n}\n.resume__show .hide[data-v-5e7d2bf6] {\n  margin-left: 25px;\n}\n@media only screen and (max-width: 575px) {\n.resume__show .hide[data-v-5e7d2bf6] {\n    margin-left: 10px;\n}\n}\n.resume__show p[data-v-5e7d2bf6] {\n  color: #909090;\n  line-height: 1.1875rem;\n  font-size: 0.875rem;\n  margin-bottom: 0;\n  max-width: 376px;\n  margin-left: 33px;\n}\n.resume .btn-wrapper[data-v-5e7d2bf6] {\n  margin-top: 25px;\n}\n@media only screen and (max-width: 575px) {\n.resume .btn-wrapper[data-v-5e7d2bf6] {\n    margin-top: 10px;\n}\n}\n.resume .btn-wrapper .btn-green[data-v-5e7d2bf6] {\n  height: 47px;\n  line-height: 47px;\n  padding: 0 20px;\n  font-size: 1rem;\n}\n.resume .btn-wrapper .or[data-v-5e7d2bf6] {\n  color: #969696;\n  margin: 0 15px;\n}\n@media only screen and (max-width: 575px) {\n.resume .btn-wrapper .or[data-v-5e7d2bf6] {\n    display: none;\n}\n}\n@media only screen and (max-width: 575px) {\n.resume .btn-wrapper .link-default__red[data-v-5e7d2bf6] {\n    margin-left: 15px;\n}\n}\n.city-autocomplete[data-v-5e7d2bf6] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 13px;\n}\n.city-autocomplete .link-default__red[data-v-5e7d2bf6] {\n  margin-left: 10px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/profile/jobseeker/AppEditResume.vue?vue&type=style&index=0&id=5e7d2bf6&scoped=true&lang=sass&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/lib/loader.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/profile/jobseeker/AppEditResume.vue?vue&type=style&index=0&id=5e7d2bf6&scoped=true&lang=sass& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/lib/loader.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AppEditResume.vue?vue&type=style&index=0&id=5e7d2bf6&scoped=true&lang=sass& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/profile/jobseeker/AppEditResume.vue?vue&type=style&index=0&id=5e7d2bf6&scoped=true&lang=sass&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/profile/jobseeker/AppEditResume.vue?vue&type=template&id=5e7d2bf6&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/profile/jobseeker/AppEditResume.vue?vue&type=template&id=5e7d2bf6&scoped=true& ***!
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
  return _c(
    "form",
    {
      staticClass: "resume",
      attrs: { enctype: "multipart/form-data" },
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
          return _vm.resumeEditSubmit($event)
        }
      }
    },
    [
      _c("div", { staticClass: "resume__block" }, [
        _c("h2", { staticClass: "resume__title" }, [
          _vm._v("\n            Общая информация\n        ")
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
              keypress: function($event) {
                if (
                  !$event.type.indexOf("key") &&
                  _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                ) {
                  return null
                }
                $event.preventDefault()
              },
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
            _vm._l(_vm.parseData.cities, function(city, index) {
              return _c(
                "div",
                { key: index, staticClass: "city-autocomplete" },
                [
                  _c("autocomplete", {
                    directives: [
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: { required: true },
                        expression: "{required: true}"
                      }
                    ],
                    key: _vm.autocompleteKey,
                    ref: "autocomplete",
                    refInFor: true,
                    class: {
                      "is-invalid": _vm.submitted && _vm.errors.has("city")
                    },
                    attrs: {
                      name: "city",
                      initialValue: city.id,
                      initialDisplay: city.name,
                      placeholder: "",
                      source: _vm.cityList
                    },
                    on: { selected: _vm.cityName },
                    model: {
                      value: city.id,
                      callback: function($$v) {
                        _vm.$set(city, "id", $$v)
                      },
                      expression: "city.id"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "link-default link-default__red d-none",
                      class: { "d-flex": _vm.parseData.cities.length > 1 },
                      attrs: { type: "button" },
                      on: {
                        click: function($event) {
                          return _vm.deleteInput(index)
                        }
                      }
                    },
                    [_vm._v("Удалить")]
                  )
                ],
                1
              )
            }),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "resume__desired-add",
                attrs: { type: "button" },
                on: { click: _vm.addInput }
              },
              [
                _vm._v("\n                +\n                "),
                _c("span", { staticClass: "link-default" }, [
                  _vm._v("Добавить еще один")
                ])
              ]
            )
          ],
          2
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "input-group" },
          [
            _vm._m(2),
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
                    name: "level_education",
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
                        _vm.submitted && _vm.errors.has("level_education")
                    }
                  },
                  [
                    _vm._v(
                      "\n                           " +
                        _vm._s(types.name) +
                        "\n                        "
                    )
                  ]
                )
              ])
            })
          ],
          2
        ),
        _vm._v(" "),
        _c("div", { staticClass: "input-group " }, [
          _vm._m(3),
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
                  _vm.$set(_vm.parseData, "salary", _vm._n($event.target.value))
                },
                blur: function($event) {
                  return _vm.$forceUpdate()
                }
              }
            }),
            _vm._v(" "),
            _c("span", [_vm._v("руб в месяц")])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "input-group resume__comment" }, [
          _c("label", [
            _vm._v("\n                Коментарий к зарплате:\n            ")
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
            attrs: { type: "text", name: "comment" },
            domProps: { value: _vm.parseData.salary_comment },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.parseData, "salary_comment", $event.target.value)
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "input-group resume__position" }, [
          _c("label", [
            _vm._v("\n                Ссылка на Youtube:\n            ")
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
        _c(
          "div",
          { staticClass: "input-group resume__category" },
          [
            _vm._m(4),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "resume__category-wrapper m-b-15" },
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
                                $$i < 0 && (_vm.categories = $$a.concat([$$v]))
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
            ),
            _vm._v(" "),
            _c("app-add-category", {
              attrs: { request: _vm.parseData.link_to_offer_category }
            })
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "resume__block resume__education" },
        [
          _c("h2", { staticClass: "resume__title" }, [
            _vm._v("\n            Опыт работы\n        ")
          ]),
          _vm._v(" "),
          _vm._l(this.parseData.experiences, function(experience, index) {
            return _c(
              "div",
              { key: index, staticClass: "educations-wrapper" },
              [
                _c("div", { staticClass: "input-group resume__level" }, [
                  _vm._m(5, true),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: experience.position,
                        expression: "experience.position"
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
                        _vm.submitted &&
                        _vm.errors.has("experience." + index + ".position")
                    },
                    attrs: {
                      type: "text",
                      name: "experience." + index + ".position"
                    },
                    domProps: { value: experience.position },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(experience, "position", $event.target.value)
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "input-group input-group__full" }, [
                  _vm._m(6, true),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: experience.company,
                        expression: "experience.company"
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
                        _vm.submitted &&
                        _vm.errors.has("experience." + index + ".company")
                    },
                    attrs: {
                      type: "text",
                      name: "experience." + index + ".company"
                    },
                    domProps: { value: experience.company },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(experience, "company", $event.target.value)
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "input-group resume__city" }, [
                  _vm._m(7, true),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: experience.city,
                        expression: "experience.city"
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
                        _vm.submitted &&
                        _vm.errors.has("experience." + index + ".city")
                    },
                    attrs: {
                      type: "text",
                      name: "experience." + index + ".city"
                    },
                    domProps: { value: experience.city },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(experience, "city", $event.target.value)
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "input-group input-group__select" }, [
                  _c(
                    "div",
                    { staticClass: "input-group resume__period" },
                    [
                      _vm._m(8, true),
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
                        staticClass: "v-select__default",
                        class: {
                          "is-invalid":
                            _vm.submitted &&
                            _vm.errors.has(
                              "experience." + index + ".periodMonthWith"
                            )
                        },
                        attrs: {
                          options: _vm.month,
                          label: "name",
                          placeholder: " - месяц - ",
                          name: "experience." + index + ".periodMonthWith"
                        },
                        scopedSlots: _vm._u([
                          {
                            key: "option",
                            fn: function(option) {
                              return [
                                _vm._v(
                                  "\n                            " +
                                    _vm._s(option.name) +
                                    "\n                        "
                                )
                              ]
                            }
                          }
                        ]),
                        model: {
                          value: experience.worked_month_with,
                          callback: function($$v) {
                            _vm.$set(experience, "worked_month_with", $$v)
                          },
                          expression: "experience.worked_month_with"
                        }
                      }),
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
                        staticClass: "v-select__default",
                        class: {
                          "is-invalid":
                            _vm.submitted &&
                            _vm.errors.has(
                              "experience." + index + ".periodYearWith"
                            )
                        },
                        attrs: {
                          placeholder: " - год - ",
                          options: _vm.year,
                          name: "experience." + index + ".periodYearWith"
                        },
                        model: {
                          value: experience.worked_year_with,
                          callback: function($$v) {
                            _vm.$set(experience, "worked_year_with", $$v)
                          },
                          expression: "experience.worked_year_with"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "input-group resume__period" },
                    [
                      _vm._m(9, true),
                      _vm._v(" "),
                      !experience.i_work
                        ? [
                            _c("v-select", {
                              directives: [
                                {
                                  name: "validate",
                                  rawName: "v-validate",
                                  value: "required",
                                  expression: "'required'"
                                }
                              ],
                              staticClass: "v-select__default",
                              class: {
                                "is-invalid":
                                  _vm.submitted &&
                                  _vm.errors.has(
                                    "experience." + index + ".periodMonthTo"
                                  )
                              },
                              attrs: {
                                options: _vm.month,
                                label: "name",
                                placeholder: " - месяц - ",
                                name: "experience." + index + ".periodMonthTo"
                              },
                              scopedSlots: _vm._u([
                                {
                                  key: "option",
                                  fn: function(option) {
                                    return [
                                      _vm._v(
                                        "\n                                " +
                                          _vm._s(option.name) +
                                          "\n                            "
                                      )
                                    ]
                                  }
                                }
                              ]),
                              model: {
                                value: experience.worked_month_to,
                                callback: function($$v) {
                                  _vm.$set(experience, "worked_month_to", $$v)
                                },
                                expression: "experience.worked_month_to"
                              }
                            }),
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
                              staticClass: "v-select__default",
                              class: {
                                "is-invalid":
                                  _vm.submitted &&
                                  _vm.errors.has(
                                    "experience." + index + ".periodYearTo"
                                  )
                              },
                              attrs: {
                                placeholder: " - год - ",
                                options: _vm.year,
                                name: "experience." + index + ".periodYearTo"
                              },
                              model: {
                                value: experience.worked_year_to,
                                callback: function($$v) {
                                  _vm.$set(experience, "worked_year_to", $$v)
                                },
                                expression: "experience.worked_year_to"
                              }
                            })
                          ]
                        : _vm._e(),
                      _vm._v(" "),
                      _c("label", { staticClass: "checkbox" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: experience.i_work,
                              expression: "experience.i_work"
                            }
                          ],
                          attrs: {
                            type: "checkbox",
                            value: "1",
                            name: "untilToday"
                          },
                          domProps: {
                            checked: Array.isArray(experience.i_work)
                              ? _vm._i(experience.i_work, "1") > -1
                              : experience.i_work
                          },
                          on: {
                            change: function($event) {
                              var $$a = experience.i_work,
                                $$el = $event.target,
                                $$c = $$el.checked ? true : false
                              if (Array.isArray($$a)) {
                                var $$v = "1",
                                  $$i = _vm._i($$a, $$v)
                                if ($$el.checked) {
                                  $$i < 0 &&
                                    _vm.$set(
                                      experience,
                                      "i_work",
                                      $$a.concat([$$v])
                                    )
                                } else {
                                  $$i > -1 &&
                                    _vm.$set(
                                      experience,
                                      "i_work",
                                      $$a
                                        .slice(0, $$i)
                                        .concat($$a.slice($$i + 1))
                                    )
                                }
                              } else {
                                _vm.$set(experience, "i_work", $$c)
                              }
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("span", [
                          _vm._v(
                            "\n                            по сегодняшний день\n                        "
                          )
                        ])
                      ])
                    ],
                    2
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "text-right" }, [
                  _c(
                    "button",
                    {
                      staticClass: "link-default link-default__red",
                      attrs: { type: "button" },
                      on: {
                        click: function($event) {
                          return _vm.deleteExperience(index)
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\n\n                    Удалить опыт работы\n                "
                      )
                    ]
                  )
                ])
              ]
            )
          }),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn btn-green btn-small",
              attrs: { type: "button" },
              on: {
                click: function($event) {
                  return _vm.addExperience()
                }
              }
            },
            [_vm._v("\n            Добавить опыт работы\n        ")]
          )
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "resume__block resume__education" },
        [
          _c("h2", { staticClass: "resume__title" }, [
            _vm._v("\n            Образование\n        ")
          ]),
          _vm._v(" "),
          _vm._m(10),
          _vm._v(" "),
          _vm._l(_vm.parseData.educations, function(education, index) {
            return _c(
              "div",
              {
                key: index,
                class: {
                  "educations-wrapper": _vm.parseData.educations.length > 1
                }
              },
              [
                _c(
                  "div",
                  { staticClass: "input-group resume__level" },
                  [
                    _vm._m(11, true),
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
                      staticClass: "v-select__default",
                      class: {
                        "is-invalid":
                          _vm.submitted &&
                          _vm.errors.has(
                            "educations." + index + ".level_education"
                          )
                      },
                      attrs: {
                        options: _vm.typesLevels,
                        label: "name",
                        placeholder: " - выбрать - ",
                        name: "educations." + index + ".level_education"
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "option",
                          fn: function(option) {
                            return [
                              _vm._v(
                                "\n                        " +
                                  _vm._s(option.name) +
                                  "\n                    "
                              )
                            ]
                          }
                        }
                      ]),
                      model: {
                        value: education.education_levels,
                        callback: function($$v) {
                          _vm.$set(education, "education_levels", $$v)
                        },
                        expression: "education.education_levels"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", { staticClass: "input-group input-group__full" }, [
                  _vm._m(12, true),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: education.institution,
                        expression: "education.institution"
                      },
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: { required: true },
                        expression: "{required: true}"
                      }
                    ],
                    class: {
                      "is-invalid":
                        _vm.submitted &&
                        _vm.errors.has("educations." + index + ".institution")
                    },
                    attrs: {
                      type: "text",
                      name: "educations." + index + ".institution"
                    },
                    domProps: { value: education.institution },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(education, "institution", $event.target.value)
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "input-group input-group__full" }, [
                  _vm._m(13, true),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: education.faculty,
                        expression: "education.faculty"
                      },
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: { required: true },
                        expression: "{required: true}"
                      }
                    ],
                    class: {
                      "is-invalid":
                        _vm.submitted &&
                        _vm.errors.has("educations." + index + ".faculty")
                    },
                    attrs: {
                      type: "text",
                      name: "educations." + index + ".faculty"
                    },
                    domProps: { value: education.faculty },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(education, "faculty", $event.target.value)
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "input-group input-group__full" }, [
                  _vm._m(14, true),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: education.specialty,
                        expression: "education.specialty"
                      },
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: { required: true },
                        expression: "{required: true}"
                      }
                    ],
                    class: {
                      "is-invalid":
                        _vm.submitted &&
                        _vm.errors.has("educations." + index + ".specialty")
                    },
                    attrs: {
                      type: "text",
                      name: "educations." + index + ".specialty"
                    },
                    domProps: { value: education.specialty },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(education, "specialty", $event.target.value)
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "input-group resume__city" }, [
                  _vm._m(15, true),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: education.city,
                        expression: "education.city"
                      },
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: { required: true },
                        expression: "{required: true}"
                      }
                    ],
                    class: {
                      "is-invalid":
                        _vm.submitted &&
                        _vm.errors.has("educations." + index + ".city")
                    },
                    attrs: {
                      type: "text",
                      name: "educations." + index + ".city"
                    },
                    domProps: { value: education.city },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(education, "city", $event.target.value)
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "input-group input-group__select" }, [
                  _c(
                    "div",
                    { staticClass: "input-group resume__period" },
                    [
                      _vm._m(16, true),
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
                        staticClass: "v-select__default",
                        class: {
                          "is-invalid":
                            _vm.submitted &&
                            _vm.errors.has(
                              "educations." + index + ".study_month_with"
                            )
                        },
                        attrs: {
                          options: _vm.month,
                          label: "name",
                          placeholder: " - месяц - ",
                          name: "educations." + index + ".study_month_with"
                        },
                        scopedSlots: _vm._u([
                          {
                            key: "option",
                            fn: function(option) {
                              return [
                                _vm._v(
                                  "\n                            " +
                                    _vm._s(option.name) +
                                    "\n                        "
                                )
                              ]
                            }
                          }
                        ]),
                        model: {
                          value: education.study_month_with,
                          callback: function($$v) {
                            _vm.$set(education, "study_month_with", $$v)
                          },
                          expression: "education.study_month_with"
                        }
                      }),
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
                        staticClass: "v-select__default",
                        class: {
                          "is-invalid":
                            _vm.submitted &&
                            _vm.errors.has(
                              "educations." + index + ".study_year_with"
                            )
                        },
                        attrs: {
                          placeholder: " - год - ",
                          name: "educations." + index + ".study_year_with",
                          options: _vm.year
                        },
                        model: {
                          value: education.study_year_with,
                          callback: function($$v) {
                            _vm.$set(education, "study_year_with", $$v)
                          },
                          expression: "education.study_year_with"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "input-group resume__period" },
                    [
                      _vm._m(17, true),
                      _vm._v(" "),
                      education.i_study !== true
                        ? [
                            _c("v-select", {
                              directives: [
                                {
                                  name: "validate",
                                  rawName: "v-validate",
                                  value: "required",
                                  expression: "'required'"
                                }
                              ],
                              staticClass: "v-select__default",
                              class: {
                                "is-invalid":
                                  _vm.submitted &&
                                  _vm.errors.has(
                                    "educations." + index + ".study_month_to"
                                  )
                              },
                              attrs: {
                                options: _vm.month,
                                label: "name",
                                placeholder: " - месяц - ",
                                name: "educations." + index + ".study_month_to"
                              },
                              scopedSlots: _vm._u([
                                {
                                  key: "option",
                                  fn: function(option) {
                                    return [
                                      _vm._v(
                                        "\n                                " +
                                          _vm._s(option.name) +
                                          "\n                            "
                                      )
                                    ]
                                  }
                                }
                              ]),
                              model: {
                                value: education.study_month_to,
                                callback: function($$v) {
                                  _vm.$set(education, "study_month_to", $$v)
                                },
                                expression: "education.study_month_to"
                              }
                            }),
                            _vm._v(" "),
                            _c("v-select", {
                              directives: [
                                {
                                  name: "validate",
                                  rawName: "v-validate",
                                  value: "required: education.i_study !== true",
                                  expression:
                                    "'required: education.i_study !== true'"
                                }
                              ],
                              staticClass: "v-select__default",
                              class: {
                                "is-invalid":
                                  _vm.submitted &&
                                  _vm.errors.has(
                                    "educations." + index + ".study_year_to"
                                  )
                              },
                              attrs: {
                                placeholder: " - год - ",
                                name: "educations." + index + ".study_year_to",
                                options: _vm.year
                              },
                              model: {
                                value: education.study_year_to,
                                callback: function($$v) {
                                  _vm.$set(education, "study_year_to", $$v)
                                },
                                expression: "education.study_year_to"
                              }
                            })
                          ]
                        : _vm._e(),
                      _vm._v(" "),
                      _c("label", { staticClass: "checkbox" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: education.i_study,
                              expression: "education.i_study"
                            }
                          ],
                          attrs: { type: "checkbox", name: "untilToday" },
                          domProps: {
                            checked: Array.isArray(education.i_study)
                              ? _vm._i(education.i_study, null) > -1
                              : education.i_study
                          },
                          on: {
                            change: function($event) {
                              var $$a = education.i_study,
                                $$el = $event.target,
                                $$c = $$el.checked ? true : false
                              if (Array.isArray($$a)) {
                                var $$v = null,
                                  $$i = _vm._i($$a, $$v)
                                if ($$el.checked) {
                                  $$i < 0 &&
                                    _vm.$set(
                                      education,
                                      "i_study",
                                      $$a.concat([$$v])
                                    )
                                } else {
                                  $$i > -1 &&
                                    _vm.$set(
                                      education,
                                      "i_study",
                                      $$a
                                        .slice(0, $$i)
                                        .concat($$a.slice($$i + 1))
                                    )
                                }
                              } else {
                                _vm.$set(education, "i_study", $$c)
                              }
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("span", [
                          _vm._v(
                            "\n                            по сегодняшний день\n                        "
                          )
                        ])
                      ])
                    ],
                    2
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "text-right" }, [
                  _c(
                    "button",
                    {
                      staticClass: "link-default link-default__red",
                      attrs: { type: "button" },
                      on: {
                        click: function($event) {
                          return _vm.deleteEducation(index)
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\n                    Удалить образование\n                "
                      )
                    ]
                  )
                ])
              ]
            )
          }),
          _vm._v(" "),
          _vm.parseData.educations.length < 5
            ? _c(
                "button",
                {
                  staticClass: "btn btn-green btn-small",
                  attrs: { type: "button" },
                  on: {
                    click: function($event) {
                      return _vm.addEducation()
                    }
                  }
                },
                [_vm._v("\n            Добавить образование\n        ")]
              )
            : _vm._e()
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "resume__block resume__education" },
        [
          _c("h2", { staticClass: "resume__title" }, [
            _vm._v(
              "\n            Портфолио сертификатов и компетенций\n        "
            )
          ]),
          _vm._v(" "),
          _vm._l(_vm.parseData.certificates, function(certificate, index) {
            return _c(
              "div",
              { key: index, staticClass: "educations-wrapper" },
              [
                _c("div", { staticClass: "input-group" }, [
                  _vm._m(18, true),
                  _vm._v(" "),
                  _c("textarea", {
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
                        value: certificate.description,
                        expression: "certificate.description"
                      }
                    ],
                    class: {
                      "is-invalid":
                        _vm.submitted &&
                        _vm.errors.has("certificate." + index + ".description")
                    },
                    attrs: {
                      name: "certificate." + index + ".description",
                      maxlength: "3000"
                    },
                    domProps: { value: certificate.description },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          certificate,
                          "description",
                          $event.target.value
                        )
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "input-group" }, [
                  _c("label", [
                    _vm._v(
                      "\n                     Копия сертификата:\n                "
                    )
                  ]),
                  _vm._v(" "),
                  certificate.size != "" && certificate.path != undefined
                    ? _c("div", { staticClass: "up_files" }, [
                        _c(
                          "a",
                          {
                            attrs: { href: "" + certificate.path, download: "" }
                          },
                          [_vm._v("Скачать файл")]
                        ),
                        _vm._v(" "),
                        _c("span", { staticClass: "small-text" }, [
                          _vm._v("(размер " + _vm._s(certificate.size) + " b)")
                        ]),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "link-default link-default__red",
                            attrs: { type: "button" },
                            on: {
                              click: function($event) {
                                return _vm.deleteCertificateFile(
                                  index,
                                  certificate.fileId
                                )
                              }
                            }
                          },
                          [_vm._v("Удалить")]
                        )
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _c("input", {
                    ref: "file",
                    refInFor: true,
                    staticClass: "btn-file",
                    attrs: {
                      type: "file",
                      accept: "image/*,application/pdf",
                      id: "certificate-" + index,
                      name: "certificate." + index + ".file",
                      "data-id": "" + index
                    },
                    on: { change: _vm.handleFileUpload }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "text-right" }, [
                  _c(
                    "button",
                    {
                      staticClass: "link-default link-default__red",
                      attrs: { type: "button" },
                      on: {
                        click: function($event) {
                          return _vm.deleteCertificate(index)
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\n                    Удалить сертификат\n                "
                      )
                    ]
                  )
                ])
              ]
            )
          }),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn btn-green btn-small",
              attrs: { type: "button" },
              on: {
                click: function($event) {
                  return _vm.addCertificate()
                }
              }
            },
            [_vm._v("\n            Добавить сертификат\n        ")]
          )
        ],
        2
      ),
      _vm._v(" "),
      _c("div", { staticClass: "resume__block" }, [
        _vm._m(19),
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
          _vm._v("\n            Дополнительная информаци\n        ")
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "input-group" },
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
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "resume__block resume__show" }, [
        _vm._m(20),
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
        _c("div", { staticClass: "input-group hide" }, [
          _c("label", { staticClass: "checkbox" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.parseData.hide_data,
                  expression: "parseData.hide_data"
                }
              ],
              attrs: { type: "checkbox", name: "show_date" },
              domProps: {
                checked: Array.isArray(_vm.parseData.hide_data)
                  ? _vm._i(_vm.parseData.hide_data, null) > -1
                  : _vm.parseData.hide_data
              },
              on: {
                change: function($event) {
                  var $$a = _vm.parseData.hide_data,
                    $$el = $event.target,
                    $$c = $$el.checked ? true : false
                  if (Array.isArray($$a)) {
                    var $$v = null,
                      $$i = _vm._i($$a, $$v)
                    if ($$el.checked) {
                      $$i < 0 &&
                        _vm.$set(_vm.parseData, "hide_data", $$a.concat([$$v]))
                    } else {
                      $$i > -1 &&
                        _vm.$set(
                          _vm.parseData,
                          "hide_data",
                          $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                        )
                    }
                  } else {
                    _vm.$set(_vm.parseData, "hide_data", $$c)
                  }
                }
              }
            }),
            _vm._v(" "),
            _c("span", [
              _vm._v(
                "\n                    Скрыть мои личные данные\n                "
              )
            ])
          ]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "\n                Не показывать в резюме мои имя, фамилию, адрес,\n                телефон, эл. почту, текущее место работы, фотографию.\n            "
            )
          ])
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
            attrs: { type: "radio", value: "0", name: "published" },
            domProps: { checked: _vm._q(_vm.parseData.published, "0") },
            on: {
              change: function($event) {
                return _vm.$set(_vm.parseData, "published", "0")
              }
            }
          }),
          _vm._v(" "),
          _c("span", [_vm._v("\n                Скрыто\n            ")])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "btn-wrapper" }, [
          _c(
            "button",
            {
              staticClass: "btn btn-green",
              attrs: { type: "submit", disabled: _vm.loading }
            },
            [_vm._v("\n                Сохранить резюме\n            ")]
          ),
          _vm._v(" "),
          _c("span", { staticClass: "or" }, [
            _vm._v("\n                или\n            ")
          ]),
          _vm._v(" "),
          _c("button", { staticClass: "link-default link-default__red" }, [
            _vm._v("\n                Отменить\n            ")
          ])
        ])
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v("\n                Должность, на которой вы хотите работать "),
      _c("span", { staticClass: "req" }, [_vm._v("*")]),
      _vm._v(":\n            ")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v("\n                Желаемый город работы "),
      _c("span", { staticClass: "req" }, [_vm._v("*")]),
      _vm._v(":\n            ")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v("\n                Вид занятости "),
      _c("span", { staticClass: "req" }, [_vm._v("*")]),
      _vm._v(":\n            ")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v("\n                Зарплата "),
      _c("span", { staticClass: "req" }, [_vm._v("*")]),
      _vm._v(":\n            ")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v("\n                Категория для размещения "),
      _c("span", { staticClass: "req" }, [_vm._v("*")]),
      _vm._v(":\n            ")
    ])
  },
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
      _vm._v("\n                    Организация "),
      _c("span", { staticClass: "req" }, [_vm._v("*")]),
      _vm._v(":\n                ")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v("\n                    Город "),
      _c("span", { staticClass: "req" }, [_vm._v("*")]),
      _vm._v(":\n                ")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v("\n                        Период обучения с "),
      _c("span", { staticClass: "req" }, [_vm._v("*")]),
      _vm._v(":\n                    ")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v("\n                        По "),
      _c("span", { staticClass: "req" }, [_vm._v("*")]),
      _vm._v(":\n                    ")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "resume__desc" }, [
      _vm._v("\n            Добавьте ваш наивысший уровень образования. "),
      _c("br"),
      _vm._v(
        "\n            Остальные можно будет добавить на следующей странице.\n        "
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v("\n                    Уровень образования "),
      _c("span", { staticClass: "req" }, [_vm._v("*")]),
      _vm._v(":\n                ")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v("\n                    Учебное заведение "),
      _c("span", { staticClass: "req" }, [_vm._v("*")]),
      _vm._v(":\n                ")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v("\n                    Факультет "),
      _c("span", { staticClass: "req" }, [_vm._v("*")]),
      _vm._v(":\n                ")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v("\n                   Направление (специальность) "),
      _c("span", { staticClass: "req" }, [_vm._v("*")]),
      _vm._v(":\n                ")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v("\n                    Город "),
      _c("span", { staticClass: "req" }, [_vm._v("*")]),
      _vm._v(":\n                ")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v("\n                        Период обучения с "),
      _c("span", { staticClass: "req" }, [_vm._v("*")]),
      _vm._v(":\n                    ")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v("\n                        По "),
      _c("span", { staticClass: "req" }, [_vm._v("*")]),
      _vm._v(":\n                    ")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v("\n                    Описание сертификата "),
      _c("span", { staticClass: "req" }, [_vm._v("*")]),
      _vm._v(":\n                ")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h2", { staticClass: "resume__title" }, [
      _vm._v("\n            Краткая информация\n            "),
      _c("div", { staticClass: "resume__subtitle" }, [
        _vm._v(
          "\n                Дополните вакансию информацией, на которую хотели бы обратить внимание соискателя.\n            "
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h2", { staticClass: "resume__title" }, [
      _vm._v("\n            Настройки видимости резюме "),
      _c("span", { staticClass: "req" }, [_vm._v("*")]),
      _vm._v(":\n        ")
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/profile/jobseeker/AppEditResume.vue":
/*!****************************************************************!*\
  !*** ./resources/js/views/profile/jobseeker/AppEditResume.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppEditResume_vue_vue_type_template_id_5e7d2bf6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppEditResume.vue?vue&type=template&id=5e7d2bf6&scoped=true& */ "./resources/js/views/profile/jobseeker/AppEditResume.vue?vue&type=template&id=5e7d2bf6&scoped=true&");
/* harmony import */ var _AppEditResume_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppEditResume.vue?vue&type=script&lang=js& */ "./resources/js/views/profile/jobseeker/AppEditResume.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _AppEditResume_vue_vue_type_style_index_0_id_5e7d2bf6_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AppEditResume.vue?vue&type=style&index=0&id=5e7d2bf6&scoped=true&lang=sass& */ "./resources/js/views/profile/jobseeker/AppEditResume.vue?vue&type=style&index=0&id=5e7d2bf6&scoped=true&lang=sass&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AppEditResume_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AppEditResume_vue_vue_type_template_id_5e7d2bf6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AppEditResume_vue_vue_type_template_id_5e7d2bf6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5e7d2bf6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/profile/jobseeker/AppEditResume.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/profile/jobseeker/AppEditResume.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/views/profile/jobseeker/AppEditResume.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppEditResume_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AppEditResume.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/profile/jobseeker/AppEditResume.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppEditResume_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/profile/jobseeker/AppEditResume.vue?vue&type=style&index=0&id=5e7d2bf6&scoped=true&lang=sass&":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/views/profile/jobseeker/AppEditResume.vue?vue&type=style&index=0&id=5e7d2bf6&scoped=true&lang=sass& ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AppEditResume_vue_vue_type_style_index_0_id_5e7d2bf6_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/lib/loader.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AppEditResume.vue?vue&type=style&index=0&id=5e7d2bf6&scoped=true&lang=sass& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/profile/jobseeker/AppEditResume.vue?vue&type=style&index=0&id=5e7d2bf6&scoped=true&lang=sass&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AppEditResume_vue_vue_type_style_index_0_id_5e7d2bf6_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AppEditResume_vue_vue_type_style_index_0_id_5e7d2bf6_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AppEditResume_vue_vue_type_style_index_0_id_5e7d2bf6_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AppEditResume_vue_vue_type_style_index_0_id_5e7d2bf6_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AppEditResume_vue_vue_type_style_index_0_id_5e7d2bf6_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/profile/jobseeker/AppEditResume.vue?vue&type=template&id=5e7d2bf6&scoped=true&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/views/profile/jobseeker/AppEditResume.vue?vue&type=template&id=5e7d2bf6&scoped=true& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppEditResume_vue_vue_type_template_id_5e7d2bf6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AppEditResume.vue?vue&type=template&id=5e7d2bf6&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/profile/jobseeker/AppEditResume.vue?vue&type=template&id=5e7d2bf6&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppEditResume_vue_vue_type_template_id_5e7d2bf6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppEditResume_vue_vue_type_template_id_5e7d2bf6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);