import Router from 'vue-router'
import vue from 'vue'

vue.use(Router);

const router = new Router({
    mode: 'history',
    base: process.env.NODE_ENV === 'production' ? '/shopping/' : '/shopping/shopping/',
    routes: [
        {
            path: '/list',
            name: 'list',
            meta: {
                title: '商品列表'
            },
            component: () => import('./views/list.vue')
        },
        {
            path: '/cart',
            name: 'cart',
            meta: {
                title: '购物车'
            },
            component: () => import('./views/cart.vue')
        },
        {
            path: '/product/:id',
            name: 'product',
            meta: {
                title: '商品详情'
            },
            component: () => import('./views/product.vue')
        },
        {
            path: '*',
            redirect: '/list'
        }
    ]
});
router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    next();
})
router.afterEach((to, from) => {
    while (from) { break; }//只是不让eslint提示
    window.scrollTo(0, 0);
});
export default router;