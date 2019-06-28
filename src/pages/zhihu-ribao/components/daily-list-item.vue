<template>
  <a class="daily-list-item">
    <img class="daily-list-item-img" :src="baseUrl+Story.image" alt="标题图片">
    <div class="daily-list-item-title">{{Story.title}}</div>
  </a>
</template>
<script>
//

import publicVar from "../config.js";
export default {
  name: "daily-list-item",
  props: {
    //传入消息对象，必须包含标题和图片url: {title,image}。
    Story:{
      type: Object,
      default:function(){
        return {image:'https://pic4.zhimg.com/v2-c0cc4498b47f594db385261275c8410f.jpg',title:"给我一节永远有电的五号电池，还你一个乌托邦"};
      }
    }
  },
  data() {
    return {
      //加在图片真实地址之前的基地址。
      baseUrl: publicVar.proxy.baseUrl
    };
  }
};
</script>
<style scoped>
.daily-list-item {
  display: block;
  padding: 0.6rem;
  overflow: hidden;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}
.daily-list-item:hover {
  background-color: #99bff1;
}
.daily-list-item-img {
  width: 5rem;
  height: 5rem;
  border-radius: 0.3rem;
  float: left;
}
.daily-list-item-title {
  padding: 0.6rem 0.3rem 0.6rem 5.6rem;
}
</style>

