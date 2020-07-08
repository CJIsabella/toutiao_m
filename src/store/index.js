import Vue from 'vue'
import Vuex from 'vuex'
import { setItem, getItem } from '@/utils/local_storage'

Vue.use(Vuex)
const USER_KEY = 'USER_KEY'

export default new Vuex.Store({
  state: {
    user: getItem(USER_KEY)
  },
  mutations: {
    setUser(state, value) {
      state.user = value
      setItem(USER_KEY, value)
    }
  },
  actions: {
  },
  modules: {
  }
})
