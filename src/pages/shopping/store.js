import vue from 'vue'
import vuex from 'vuex'
import axios from 'axios';

vue.use(vuex);

export default new vuex.Store({
    state: {
        //所有产品列表
        productList: [],
        //加入购物车的产品列表
        cartList: []
    },
    getters: {
        //筛选出品牌
        brands: state => {
            const brands = state.productList.map(item => item.brand);
            return getFilterArray(brands);
        },
        //筛选出颜色
        colors: state => {
            const colors = state.productList.map(item => item.color);
            return getFilterArray(colors);
        }
    },
    mutations: {
        // 添加商品列表
        setProductList (state, data) {
            state.productList = data;
        },
        // 添加到购物车
        addCart (state, id) {
            // 先判断购物车是否已有，如果有，数量+1
            const isAdded = state.cartList.find(item => item.id === id);
            if (isAdded) {
                isAdded.count ++;
            } else {
                state.cartList.push({
                    id: id,
                    count: 1
                })
            }
        },
        // 修改商品数量
        editCartCount (state, payload) {
            const product = state.cartList.find(item => item.id === payload.id);
            product.count += payload.count;
        },
        // 删除商品
        deleteCart (state, id) {
            const index = state.cartList.findIndex(item => item.id === id);
            state.cartList.splice(index, 1);
        },
        // 清空购物车
        emptyCart (state) {
            state.cartList = [];
        }
    },
    actions: {
        // 请求商品列表
        getProductList (context) {
            // 通过 ajax 获取
            axios.get('/data/shopping-productList.json').then(res=>{
                context.commit('setProductList',res.data);
            })
        },
        // 购买
        buy (context) {
            // 真实环境应通过 ajax 提交购买请求后再清空购物列表
            return new Promise(resolve=> {
                setTimeout(() => {
                    context.commit('emptyCart');
                    resolve();
                }, 500)
            });
        }
    }
})
//简单的数组去重复
function getFilterArray (array) {
    var json = {};
    array.forEach(element => {
        json[element]=1;
    });
    return Object.keys(json);
}