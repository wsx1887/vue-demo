<template>
  <div v-if="id" id="daily-article">
    <div class="daily-article-title">{{data.title}}</div>
    <div class="daily-article-content" v-html="data.body"></div>
    <div class="daily-comments">
      <div class="daily-article-extra">
        <ul>
          <li>
            <a>
              <span>点赞：</span>
              <span>{{extra.popularity}}</span>
            </a>
          </li>
          <li>
            <a>
              <span>总评：</span>
              <span>{{extra.comments}}</span>
            </a>
          </li>
          <li>
            <a href="#long-comments">
              <span>长评：</span>
              <span>{{extra.long_comments}}</span>
            </a>
          </li>
          <li>
            <a href="#short-comments">
              <span>短评：</span>
              <span>{{extra.short_comments}}</span>
            </a>
          </li>
        </ul>
      </div>
      <div id="long-comments" v-if="extra.long_comments">
        <ul>
          <li v-for="lComment of longComments" :key="lComment.id">
            <div class="daily-comment-avatar">
              <img :src="lComment.avatar" alt="头像">
            </div>
            <div class="daily-comment-content">
              <div class="daily-comment-user">
                <span class="name">{{lComment.author}}</span>
                <span class="time">{{formatTime(lComment.time)}}</span>
                <span class="likes">点赞：{{lComment.likes}}</span>
              </div>
              <div class="daily-comment-text">{{lComment.content}}</div>
            </div>
          </li>
        </ul>
      </div>
      <div id="short-comments" v-if="extra.short_comments">
        <ul>
          <li v-for="sComment of shortComments" :key="sComment.id">
            <div class="daily-comment-avatar">
              <img :src="sComment.avatar" alt="头像">
            </div>
            <div class="daily-comment-content">
              <div class="daily-comment-user">
                <span class="name">{{sComment.author}}</span>
                <span class="time">{{formatTime(sComment.time)}}</span>
                <span class="likes">点赞：{{sComment.likes}}</span>
              </div>
              <div class="daily-comment-text">{{sComment.content}}</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import publicVar from "../config.js";
export default {
  name: "daily-article",
  //传入id数据，类型为数字
  props: {
    id: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      data: {},
      extra: {},
      longComments: [],
      shortComments: [],
      baseUrl: publicVar.proxy.baseUrl
    };
  },
  methods: {
    getArticle() {
      var articleUrl =
        this.baseUrl + "https://news-at.zhihu.com/api/4/news/" + this.id;
      var _this = this;
      axios.get(articleUrl).then(function(res) {
        var d = res.data;
        d.body = d.body.replace(
          /src="http/gi,
          'src="' + _this.baseUrl + "http"
        );
        _this.data = d;
        window.scrollTo(0, 0);
        _this.getExtra();
        _this.getLongComments();
        _this.getShortComments();
      });
    },
    getExtra() {
      var _this = this;
      var extraUrl =
        this.baseUrl + "https://news-at.zhihu.com/api/4/story-extra/" + this.id;
      axios.get(extraUrl).then(function(res) {
        _this.extra = res.data;
      });
    },
    getLongComments() {
      var _this = this;
      var url =
        this.baseUrl +
        "https://news-at.zhihu.com/api/4/story/" +
        this.id +
        "/long-comments";
      axios.get(url).then(function(res) {
        var d = res.data;
        var list = d.comments.map(x => {
          x.avatar = _this.baseUrl + x.avatar;
          return x;
        });
        _this.longComments = list;
      });
    },
    getShortComments() {
      var _this = this;
      var url =
        this.baseUrl +
        "https://news-at.zhihu.com/api/4/story/" +
        this.id +
        "/short-comments";
      axios.get(url).then(function(res) {
        var d = res.data;
        var list = d.comments.map(x => {
          x.avatar = _this.baseUrl + x.avatar;
          return x;
        });
        _this.shortComments = list;
      });
    },
    formatTime(time1) {
      var ThatMilliseconds = time1 * 1000;
      var nowMilliseconds = Date.now();
      var different = nowMilliseconds - ThatMilliseconds;
      var seconds = different / 1000;
      if (seconds < 60) return Math.floor(seconds) + "秒前";
      var minutes = seconds / 60;
      if (minutes < 60) return Math.floor(minutes) + "分前";
      var hours = minutes / 60;
      if(hours<24) return Math.floor(hours)+'小时前';
      var days=hours/24;
      if(days<8) return Math.floor(days)+'天前';
      var date=new Date(ThatMilliseconds) ;
      return [date.getFullYear(),date.getMonth()+1,date.getDate()].join('-');
    }
  },
  mounted() {
    this.getArticle();
  },
  watch: {
    id: function(val) {
      if (val) this.getArticle();
    }
  }
};
</script>
<style scoped>
#daily-article {
  padding: 1rem;
}
.daily-article-title {
  font-size: xx-large;
  font-weight: bold;
  color: #222;
  text-align: center;
  padding: 0.5rem 0;
}
.daily-comments {
  margin: 0.5rem 0;
}
.daily-comments ul {
  list-style-type: none;
  padding: 0;
}
.daily-article-extra ul li {
  display: inline-block;
  margin-right: 1rem;
}
.daily-article-extra {
  border-top: 1px solid #222;
  margin-top: 1rem;
}
#long-comments li,
#short-comments li {
  border-bottom: 1px dashed #cdddf0;
  display: block;
  overflow: hidden;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
}
.daily-comment-avatar {
  float: left;
  width: 68px;
  height: 68px;
}
.daily-comment-content {
  margin-left: 75px;
}
.daily-comment-user span {
  margin-right: 1rem;
}
.daily-comment-text {
  margin-top: 0.4rem;
}
</style>
