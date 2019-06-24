import Vue from 'vue'
import Router from 'vue-router'
import ViewCss from './views/css.vue';
import ViewGradient from './views/css/gradient.vue';
/* import ViewJs from './views/js.vue';
import ViewVue from './views/vue.vue';
import ViewX4 from './views/x4.vue';
import ViewBootstrap4 from './views/bootstrap4.vue';
import ViewTools from './views/tools.vue'; */

Vue.use(Router);

export default new Router({
  mode: 'history',
  //base: process.env.BASE_URL,
  base: process.env.NODE_ENV === 'production' ? "/vueapp/" : "/",
  routes: [
    {
      path:'/',
      redirect:{name:'css'}
    },
    {
      path: '/css',
      name: 'css',
      component: ViewCss,
      redirect:{name:'gradient'},
      children: [
        {
          path: '',
          redirect:{name:'gradient'}
        },
        {
          path: 'gradient',
          name: 'gradient',
          meta: {
            title: '渐变背景'
          },
          component: ViewGradient
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/js',
      name: 'js',
      component: () => import('./views/js.vue')
    },
    {
      path: '/vue',
      name: 'vue',
      component: () => import('./views/vue.vue')
    },
    {
      path: '/x4',
      name: 'x4',
      component: () => import("./views/x4.vue")
    },
    {
      path: '/bootstrap4',
      name: 'bootstrap4',
      component: () => import('./views/bootstrap4.vue')
    },
    {
      path: '/tools',
      name: 'tools',
      component: () => import('./views/tools.vue')
    }
  ]
})
