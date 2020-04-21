import Vue from 'vue'
import Vuex from 'vuex'
import login from './login'
import addressModule from './module'
import joinInfo from './joinIfo'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    login,
    addressModule,
    joinInfo
  }
})
