import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      name: 'xubao',
      token: 'dgher'
    }
  },
  mutations: {
    updateUser(state, value) {
      state.user = value;
    }
  },
  actions: {
    login(context, d) {
      return new Promise((resolve, reject) => {
        axios.post('/api/vueapp/login', d).then(res => {
          if (res.data.messageType === 1) {
            context.commit('updateUserID', { name: res.data.doc.name, token: res.data.doc.token });
            window.localStorage.name = res.data.doc.name;
            window.localStorage.token = res.data.doc.token;
            resolve(true);
          } else {
            resolve(false);
          }
        }).catch(err => reject(err));
      })
    },
    checkout({ commit }, token) {
      return new Promise((resolve, reject) => {
        window.localStorage.name = '';
        window.localStorage.token = '';
        commit('updateUser', { name: '', token: '' });
        axios.post('/api/vueapp/checkout', token).then(res => {
          if (res.data.messageType === 1) {
            resolve(true);
          }
        }).catch(err => reject(err));
      })
    }
  }
})