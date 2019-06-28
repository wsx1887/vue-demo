import Vue from 'vue'
import App from './app.vue'
import router from './router.js'
import store from "./store.js"

Vue.config.productionTip=false;

window.shoppingVM=new Vue({
    el:"#app",
    router,
    store,
    render(h) {
        return h(App);
    }
});