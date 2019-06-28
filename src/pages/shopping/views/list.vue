<template>
  <div v-show="list.length">
    <div class="list-control">
      <div class="list-control-filter">
        <span>品牌：</span>
        <span
          class="list-control-filter-item"
          :class="{on: item === filterBrand}"
          v-for="(item,index) in brands"
          @click="handleFilterBrand(item)"
          :key="index"
        >{{ item }}</span>
      </div>
      <div class="list-control-filter">
        <span>颜色：</span>
        <span
          class="list-control-filter-item"
          :class="{on: item === filterColor}"
          v-for="(item,index) in colors"
          @click="handleFilterColor(item)"
          :key="index"
        >{{ item }}</span>
      </div>
      <div class="list-control-order">
        <span>排序：</span>
        <span
          class="list-control-order-item"
          :class="{on: order === ''}"
          @click="handleOrderDefault"
        >默认</span>
        <span
          class="list-control-order-item"
          :class="{on: order === 'sales'}"
          @click="handleOrderSales"
        >
          销量
          <template v-if="order === 'sales'">↓</template>
        </span>
        <span
          class="list-control-order-item"
          :class="{on: order.indexOf('cost') > -1}"
          @click="handleOrderCost"
        >
          价格
          <template v-if="order === 'cost-asc'">↑</template>
          <template v-if="order === 'cost-desc'">↓</template>
        </span>
      </div>
    </div>
    <productItem v-for="item in filteredAndOrderedList" :info="item" :key="item.id"></productItem>
    <div class="product-not-found" v-show="!filteredAndOrderedList.length">暂无相关商品</div>
  </div>
</template>
<script>
import productItem from "../components/productItem.vue";
export default {
  components: { productItem },
  data() {
    return {
      //选中的品牌，用于过滤
      filterBrand: "",
      //选中的颜色
      filterColor: "",
      //用于商品的排序
      order: ""
    };
  },
  computed: {
    //取得所有商品
    list() {
      return this.$store.state.productList;
    },
    //品牌列表
    brands() {
      return this.$store.getters.brands;
    },
    //颜色列表
    colors() {
      return this.$store.getters.colors;
    },
    //返回过滤后的商品列表
    filteredAndOrderedList() {
      //数组展开
      let list = [...this.list];
      // 按品牌过滤
      if (this.filterBrand !== "") {
        list = list.filter(item => item.brand === this.filterBrand);
      }
      // 按颜色过滤
      if (this.filterColor !== "") {
        list = list.filter(item => item.color === this.filterColor);
      }
      // 排序
      if (this.order !== "") {
        if (this.order === "sales") {
          list = list.sort((a, b) => b.sales - a.sales);
        } else if (this.order === "cost-desc") {
          list = list.sort((a, b) => b.cost - a.cost);
        } else if (this.order === "cost-asc") {
          list = list.sort((a, b) => a.cost - b.cost);
        }
      }
      return list;
    }
  },
  methods: {
    //点击品牌以筛选
    handleFilterBrand(brand) {
      if (this.filterBrand === brand) {
        this.filterBrand = "";
      } else {
        this.filterBrand = brand;
      }
    },
    //点击颜色以筛选
    handleFilterColor(color) {
      if (this.filterColor === color) {
        this.filterColor = "";
      } else {
        this.filterColor = color;
      }
    },
    //默认排序
    handleOrderDefault() {
      this.order = "";
    },
    //按销售情况排序
    handleOrderSales() {
      this.order = "sales";
    },
    //按价格排序
    handleOrderCost() {
      if (this.order === "cost-desc") {
        this.order = "cost-asc";
      } else {
        this.order = "cost-desc";
      }
    }
  },
  mounted() {
    this.$store.dispatch("getProductList");
  }
};
</script>
<style scoped>
.list-control {
  background: #fff;
  border-radius: 6px;
  margin: 16px;
  padding: 16px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
}
.list-control-filter {
  margin-bottom: 16px;
}
.list-control-filter-item,
.list-control-order-item {
  cursor: pointer;
  display: inline-block;
  border: 1px solid #e9eaec;
  border-radius: 4px;
  margin-right: 6px;
  padding: 2px 6px;
}
.list-control-filter-item.on,
.list-control-order-item.on {
  background: #f2352e;
  border: 1px solid #f2352e;
  color: #fff;
}
.product-not-found {
  text-align: center;
  padding: 32px;
}
</style>