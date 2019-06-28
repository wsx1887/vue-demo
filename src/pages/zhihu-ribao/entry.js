import Vue from 'vue'
import App from './知乎日报网页版.vue'

Vue.config.productionTip=false;

new Vue({
   render(h) {
       return h(App);
   },
}).$mount('#app')