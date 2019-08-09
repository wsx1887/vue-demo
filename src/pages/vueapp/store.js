import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: ""
  },
  mutations: {
    updateUserID(state, value) {
      state.userID = value;
    }
  },
  actions: {
    async login(context,d) {
      axios.post('/api/vueapp/login',d).then(res=>{
        if(res){
          context.commit('updateUserID',res.data);
        }
      })
    }
  }
})
