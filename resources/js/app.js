// ================== import  libs ===============================

import Vue from 'vue'
import store from './store/store'
import axios from 'axios'

import ru from 'vee-validate/dist/locale/ru';
import VeeValidate, { Validator } from 'vee-validate';
Vue.use(VeeValidate);
Validator.localize('ru', ru);

import VModal from 'vue-js-modal'
Vue.use(VModal);

import CKEditor from '@ckeditor/ckeditor5-vue';
Vue.use( CKEditor );

import VuejsClipper from 'vuejs-clipper'
Vue.use(VuejsClipper);

// helpers

import rate from 'vue-rate';
Vue.use(rate);

// ================== import  components ===============================

// layout
Vue.component('AppHeaderNav', () => import('./components/AppHeaderNav'));
Vue.component('AppError', () => import('./components/AppError'));
Vue.component('AppFooter', () => import('./components/AppFooter'));
Vue.component('AppSearch', () => import('./components/AppSearch'));
// auth
Vue.component('AppAuthLogin', () => import('./views/auth/AppAuthLogin'));
Vue.component('AppAuthRegistration', () => import('./views/auth/AppAuthRegistration'));
Vue.component('AppAuthReset', () => import('./views/auth/AppAuthReset'));
Vue.component('AppAuthEmail', () => import('./views/auth/AppAuthEmail'));
//seo
Vue.component('AppSeoBlock', () => import('./components/AppSeoBlock'));
// uploader
Vue.component('AppUploader', () => import('./components/AppUploader'));
// add category modal
Vue.component('AppAddCategory', () => import('./components/AppAddCategory'));

// profile
Vue.component('AppProfile', () => import('./views/profile/jobseeker/AppProfile'));
Vue.component('AppResumeList', () => import('./views/profile/jobseeker/AppResumeList'));
Vue.component('AppCreateResume', () => import('./views/profile/jobseeker/AppCreateResume'));
Vue.component('AppShowResume', () => import('./views/profile/jobseeker/AppShowResume'));
Vue.component('AppEditResume', () => import('./views/profile/jobseeker/AppEditResume'));
Vue.component('AppResumeFeedback', () => import('./views/profile/jobseeker/AppResumeFeedback'));

Vue.component('AppFavoriteList', () => import('./views/profile/jobseeker/AppFavoriteList'));
Vue.component('AppSeekerVacancyCard', () => import('./views/profile/jobseeker/AppSeekerVacancyCard'));

Vue.component('AppCompanyFeedback', () => import('./views/profile/employer/company/AppCompanyFeedback'));
Vue.component('AppProfileCompany', () => import('./views/profile/employer/company/AppProfileCompany'));
Vue.component('AppProfileEmployer', () => import('./views/profile/employer/AppProfileEmployer'));
Vue.component('AppCompanyLogo', () => import('./views/profile/employer/company/AppCompanyLogo'));
Vue.component('AppCompanyShow', () => import('./views/profile/employer/company/AppCompanyShow'));

Vue.component('AppCreateVacancy', () => import('./views/profile/employer/AppCreateVacancy'));
Vue.component('AppShowVacancy', () => import('./views/profile/employer/AppShowVacancy'));
Vue.component('AppVacancyList', () => import('./views/profile/employer/AppVacancyList'));
Vue.component('AppEditVacancy', () => import('./views/profile/employer/AppEditVacancy'));

// search
Vue.component('AppResumeSearch', () => import('./views/search/jobSeeker/AppResumeSearch'));
Vue.component('AppResumeView', () => import('./views/search/jobSeeker/AppResumeView'));

Vue.component('AppVacancySearch', () => import('./views/search/employer/AppVacancySearch'));
Vue.component('AppVacancyView', () => import('./views/search/employer/AppVacancyView'));

Vue.component('AppFaq', () => import('./components/AppFaq'));

// ================== token config  ===============================

Vue.config.productionTip = false;
let token = document.head.querySelector('meta[name="csrf-token"]');
if (token) {
    axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
    console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}

// ================= init Vue ================================

new Vue({
    store
}).$mount('#app');

