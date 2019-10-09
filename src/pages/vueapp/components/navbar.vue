<template>
  <nav id="nav">
    <ul class="navul">
      <li>
        <router-link :to="{name:'css'}">CSS</router-link>
        <span class="arrow"></span>
        <ul class="dropdown-menu">
          <li>
            <router-link :to="{name:'gradient'}">渐变</router-link>
          </li>
          <li>
            <router-link :to="{name:'textshadow'}">文字阴影</router-link>
          </li>
        </ul>
      </li>
      <li>
        <a>JS</a>
        <span class="arrow"></span>
        <ul class="dropdown-menu">
          <li>
            <router-link :to="{name:'ball'}">弹球游戏</router-link>
          </li>
          <li>
            <router-link :to="{name:'jigsaw'}">拼图游戏</router-link>
          </li>
          <li>
            <router-link :to="{name:'snake'}">贪吃蛇</router-link>
          </li>
        </ul>
      </li>
      <li>
        <a>VUE</a>
        <span class="arrow"></span>
        <ul class="dropdown-menu">
          <li>
            <a href="./电商网站实例.html">电商网简单实例</a>
          </li>
          <li>
            <a href="知乎日报网页版.html">知乎日报网页版</a>
          </li>
        </ul>
      </li>
      <li>
        <a href="x4工厂计算器.html">X4工厂计算器</a>
      </li>
      <li>
        <a href="bootstrap4简略文档.html">Bootstrap4</a>
      </li>
      <li>
        <router-link :to="{name:'tools'}">工具</router-link>
      </li>
      <li>
        <router-link :to="{name:'about'}">关于</router-link>
      </li>
<!--       <li>
        <template v-if="user.token==null||user.token===''">
          <router-link :to="{name:'login',params:{propshow:'login'}}">登录/注册</router-link>
          <span class="arrow"></span>
          <div class="dropdown-menu">
            <div class="input-group">
              <label>用户名：</label>
              <input type="text" />
            </div>
            <div class="input-group">
              <label>密码：</label>
              <input type="password" />
            </div>
            <div class="input-group">
              <button @click="login">登录</button>
            </div>
            <div class="input-group">
              <router-link :to="{name:'login',params:{propshow:'getpassword'}}">忘记密码</router-link>
              <router-link :to="{name:'login',params:{propshow:'join'}}">注册</router-link>
            </div>
          </div>
        </template>
        <template v-if="user.token!=null&&user.token!=''">
          <a href>{{user.name}}</a>
          <span class="arrow"></span>
          <div class="dropdown-menu">
            <div class="input-group">
              <button type="button" style="margin:1em;" id="checkout" @click="checkout">退出</button>
            </div>
          </div>
        </template>
      </li> -->
    </ul>
  </nav>
</template>
<script>
export default {
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  methods: {
    checkout() {
      window.localStorage.name = "";
      window.localStorage.token = "";
      this.$store.commit("updateUser", { name: "", token: "" });
    },
    getPassWord(){},
    login(){}
  }
};
</script>

<style scoped>
a {
  cursor: pointer;
}
#nav {
  height: 100%;
  margin: 0%;
  padding: 0%;
}
.navul {
  list-style-type: none;
  margin: 0%;
  padding: 0%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  height: 100%;
  -webkit-justify-content: space-around;
  -ms-flex-pack: distribute;
  justify-content: space-around;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  font-weight: 500;
}
.navul a {
  margin: 0 0.5em;
  padding: 0.3em 0.4em;
  text-decoration: none;
  display: inline-block;
  color: rgb(24, 29, 49);
}
.navul a:hover {
  border-bottom: solid 2px rgb(0, 139, 98);
}
.navul > li {
  position: relative;
}
.navul > li:first-of-type a {
  margin-left: 0%;
  padding-left: 0%;
}
.navul > li > a:hover ~ .dropdown-menu,
.navul > li > .arrow:hover ~ .dropdown-menu,
.dropdown-menu:hover {
  display: block;
}
.dropdown-menu {
  display: none;
  list-style: none;
  padding: 0;
  margin: 0%;
  position: absolute;
  white-space: nowrap;
  border: 1px solid #bbb;
  padding-left: 0.5em;
  top: 100%;
  right: 0%;
  box-sizing: border-box;
  border-radius: 0.25em;
  max-height: calc(100vh - 4em);
  overflow-y: auto;
  margin: 0%;
  background-color: #fefefe;
}
.dropdown-menu > li > a {
  display: block;
  text-align: center;
}
.arrow {
  border-left: 0.3em solid transparent;
  border-right: 0.3em solid transparent;
  border-top: 0.4em solid #999;
  border-bottom: 0;
  box-sizing: border-box;
  vertical-align: middle;
  margin-left: -0.5em;
  margin-top: -0.1em;
  display: inline-block;
}
.input-group > label {
  display: inline-block;
  min-width: 4em;
}

</style>
