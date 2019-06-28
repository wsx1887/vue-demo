<template>
  <div>
    <div class="header">
      <router-link :to="{name:'list'}" class="header-title">电商网站示例</router-link>
      <div class="header-menu">
        <router-link :to="{name:'cart'}" class="header-menu-cart">
          购物车
          <span v-if="cartList.length">{{ cartList.length }}</span>
        </router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  computed: {
    cartList() {
      return this.$store.state.cartList;
    }
    /*也可以写成：
    import {mapState} from 'vuex'
    computed:mapState({
      cartList:'cartList'  
      或 cartList:state => state.cartList
    })
    或
    computed:mapState([
      'cartList'
    ])
    */
  }
};
</script>
<style scoped>
.header{
    height: 48px;
    line-height: 48px;
    background: rgba(0,0,0,.8);
    color: #fff;
}
.header-title{
    padding: 0 32px;
    float: left;
    color: #fff;
}
.header-menu{
    float: right;
    margin-right: 32px;
}
.header-menu-cart{
    color: #fff;
}
.header-menu-cart span{
    display: inline-block;
    width: 16px;
    height: 16px;
    line-height: 16px;
    text-align: center;
    border-radius: 50%;
    background: #ff5500;
    color: #fff;
    font-size: 12px;
}
</style>

