import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userID: ""
  },
  mutations: {
    updateUserID(state,value) {
      state.userID = value;
    }
  },
  actions: {

  }
})
