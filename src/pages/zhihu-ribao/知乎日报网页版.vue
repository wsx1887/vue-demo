<template>
  <div id="app" class="daily">
    <div class="daily-menu">
      <div
        class="daily-menu-item"
        @click="handleToRecentNews"
        :class="{active:active==='recentNews'}"
      >最新消息</div>
      <div
        class="daily-menu-item"
        @click="handleToHotNews"
        :class="{active:active==='hotNews'}"
      >热门消息</div>
      <div
        class="daily-menu-item"
        @click="handleToDayNews"
        :class="{active:active==='dayNews'}"
      >每日消息</div>
    </div>
    <div class="daily-list" id="dailylist" @scroll.stop="scrollLoadDayNews">
      <template v-if="active==='recentNews'">
        <div class="daily-list-date">{{formatDay(recentNews.date)}}</div>
        <daily-list-item
          v-for="(news,index) of recentNews.stories"
          :key="index+1000"
          :Story="{title:news.title,image:news.images[0]}"
          @click.native="handleClick(news.id)"
          :class="{active:news.id===articleId}"
        ></daily-list-item>
        <!--
        <daily-list-item
          v-for="(news,index) of recentNews.top_stories"
          :key="index+5000"
          :Story="{title:news.title,image:news.image}"
          @click.native="handleClick(news.id)"
          :class="{active:news.id===articleId}"
        ></daily-list-item>-->
      </template>
      <template v-if="active==='hotNews'">
        <daily-list-item
          v-for="news of hotNews.recent"
          :key="news.news_id"
          :Story="{title:news.title,image:news.thumbnail}"
          @click.native="handleClick(news.news_id)"
          :class="{active:news.news_id===articleId}"
        ></daily-list-item>
      </template>
      <template v-if="active==='dayNews'">
        <div v-for="newsList of dayNews" :key="newsList.date">
          <div class="daily-list-date">{{formatDay(newsList.date)}}</div>
          <daily-list-item
            v-for="news of newsList.stories"
            :key="news.id"
            :Story="{title:news.title,image:news.images[0]}"
            @click.native="handleClick(news.id)"
            :class="{active:news.id===articleId}"
          ></daily-list-item>
        </div>
      </template>
    </div>
    <div class="daily-article">
      <dailyArticle :id="articleId"></dailyArticle>
    </div>
  </div>
</template>
<script>
import publicVar from "./config.js";
import axios from "axios";

import dailyListItem from "./components/daily-list-item.vue";
import dailyArticle from "./components/daily-article.vue";
//import dailyListDate from "./components/daily-list-date.vue";

export default {
  name: "app",
  components: {
    dailyListItem,
    dailyArticle
    //dailyListDate
  },
  data() {
    return {
      articleId: 0,
      hotNews: {},
      recentNews: {},
      dayNews: [],
      active: "recentNews", //当前显示人消息类型 recentNews、hotNews、dayNews
      isLoading: false,
      dayTime: Date.now() + 86400000, //明天的日期。获取今的每日消息需要输入明天的日期。
      baseUrl: publicVar.proxy.baseUrl
    };
  },
  methods: {
    getHotNews() {
      var url = this.baseUrl + "https://news-at.zhihu.com/api/4/news/hot";
      var _this = this;
      axios.get(url).then(res => {
        _this.hotNews = res.data;
      });
    },
    getRecentNews() {
      var url = this.baseUrl + "https://news-at.zhihu.com/api/4/news/latest";
      var _this = this;
      axios.get(url).then(res => {
        _this.recentNews = res.data;
      });
    },
    async getDayNews() {
      this.isLoading = true;
      var day = new Date(this.dayTime);
      var year = day.getFullYear();
      var month = day.getMonth() + 1; //getMonth从 0 开始。
      var date = day.getDate();
      var url =
        this.baseUrl +
        "https://news-at.zhihu.com/api/4/news/before/" +
        year +
        (month < 10 ? "0" + month : month) +
        (date < 10 ? "0" + date : date);
      //var _this = this;
      var d = await axios.get(url);
      this.dayNews.push(d.data);
      this.isLoading = false;
      /*axios.get(url).then(res => {
        _this.dayNews.push(res.data);
        _this.isLoading = false;
      });*/
    },
    formatDay(d) {
      if (d) {
        var year = d.substring(0, 4);
        var month = d.substring(4, 6);
        var day = d.substring(6);
        return year + "年 " + month + "月 " + day + "日";
      }
    },
    handleClick(id) {
      this.articleId = id;
    },
    handleToRecentNews() {
      this.recentNews = {};
      this.active = "recentNews";
      this.getRecentNews();
    },
    handleToHotNews() {
      this.hotNews = {};
      this.active = "hotNews";
      this.getHotNews();
    },
    async handleToDayNews() {
      this.dayNews = [];
      this.active = "dayNews";
      this.dayTime = Date.now() + 86400000;
      await this.getDayNews();
      var dailyList = document.getElementById("dailylist");
      var n = 1;
      while (n) {
        //await this.$nextTick();
        if (dailyList.scrollHeight > dailyList.clientHeight) break;
        else {
          this.dayTime -= 86400000;
          await this.getDayNews();
        }
        n++;
        if (n >= 20) break;
      }
    },
    async scrollLoadDayNews(event) {
      //var _this = this;
      //this.$nextTick(function a() {
      var dailyList = event.currentTarget;
      if (this.isLoading == true) return;
      //if (this.active === "dayNews" || this.isLoading === false) {
      if (
        dailyList.scrollTop + dailyList.clientHeight >=
        dailyList.scrollHeight - 1
      ) {
        this.isLoading = true;
        this.dayTime -= 86400000;
        await this.getDayNews();
        this.isLoading = false;
      }
      //}
      //});
    }
  },
  mounted() {
    //var _this = this;
    this.$nextTick(function() {
      this.getRecentNews();
    });
  }
};
</script>

<style>
html,
body {
  padding: 0;
  margin: 0;
  height: 100%;
  box-sizing: border-box;
}
</style>
<style scoped>
.daily-menu {
  width: 8rem;
  position: fixed;
  top: 0%;
  bottom: 0%;
  left: 0%;
  overflow-y: auto;
  background-color: #f5f7f9;
  border-radius: 0.3rem;
}
.daily-menu-item {
  font-size: 1.2rem;
  text-align: center;
  margin: 0.3rem 0;
  padding: 0.6rem 0;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}
.daily-menu-item:hover {
  background-color: #99bff1;
}
.daily-list {
  width: 19rem;
  position: fixed;
  top: 0%;
  left: 8.1rem;
  bottom: 0%;
  overflow: auto;
  border-radius: 0.3rem;
  border-right: 1px solid #d7dde4;
}
.daily-article {
  margin-left: 27.2rem;
}
.active {
  background-color: #bfd4f0;
}
.daily-list-date {
  text-align: center;
  padding: 0.3rem 0;
  background-color: #ebebeb;
}
</style>


