import Vue from 'vue'
import Vuex from 'vuex'

import Common from './modules/common'
import Auth from './modules/auth'
import Profile from './modules/profile'
import Company from './modules/company'
import Search from './modules/search'


Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Common,
    Auth,
    Profile,
    Company,
    Search
  }
})
