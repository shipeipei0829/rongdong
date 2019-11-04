import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import home from './modules/home'
import msg from './modules/msg'
import order from './modules/order'
import me from './modules/me'

import getters from './getters'
Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    user,
    home,
    msg,
    order,
    me
  },
  getters
})

export default store
