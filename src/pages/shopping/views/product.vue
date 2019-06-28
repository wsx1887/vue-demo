<template>
  <div v-if="product">
    <div class="product">
      <div class="product-image">
        <img :src="product.image">
      </div>
      <div class="product-info">
        <h1 class="product-name">{{ product.name }}</h1>
        <div class="product-cost">¥ {{ product.cost }}</div>
        <div class="product-add-cart" @click="handleAddToCart">加入购物车</div>
      </div>
    </div>
    <div class="product-desc">
      <h2>产品介绍</h2>
      <img
        v-for="n in 10"
        :src="'/img/shopping/' + n + '.jpg'"
        :key="n"
        alt="假装这里有图片"
      >
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 获取路由中的参数
      id: parseInt(this.$route.params.id),
      product: null
    };
  },
  methods: {
    //根据id取得产品数据
    getProduct() {
      let _this=this;
      this.product = this.$store.state.productList.find(
        item => item.id === _this.id
      );
      //console.log(this.$store.state.productList);
    },
    // 加入购物车
    handleAddToCart() {
      this.$store.commit("addCart", this.id);
    }
  },
  //渲染dom后调用
  mounted() {
    this.getProduct();
  }
};
</script>
<style scoped>
.product {
  margin: 32px;
  padding: 32px;
  background: #fff;
  border: 1px solid #dddee1;
  border-radius: 10px;
  overflow: hidden;
}
.product-image {
  width: 50%;
  height: 550px;
  float: left;
  text-align: center;
}
.product-image img {
  height: 100%;
}
.product-info {
  width: 50%;
  padding: 150px 0 250px;
  height: 150px;
  float: left;
  text-align: center;
}
.product-cost {
  color: #f2352e;
  margin: 8px 0;
}
.product-add-cart {
  display: inline-block;
  padding: 8px 64px;
  margin: 8px 0;
  background: #2d8cf0;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
}
.product-desc {
  background: #fff;
  margin: 32px;
  padding: 32px;
  border: 1px solid #dddee1;
  border-radius: 10px;
  text-align: center;
}
.product-desc img {
  display: block;
  width: 50%;
  margin: 32px auto;
  padding: 32px;
  border-bottom: 1px solid #dddee1;
}
</style>