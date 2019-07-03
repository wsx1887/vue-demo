<template>
  <nav id="nav">
    <ul class="navul">
      <li>
        <router-link :to="{name:'css'}">CSS</router-link>
        <span class="arrow"></span>
        <ul class="dropdown-menu">
          <li><router-link :to="{name:'gradient'}">渐变</router-link></li>
          <li><router-link :to="{name:'textshadow'}">文字阴影</router-link></li>
        </ul>
      </li>
      <li>
        <a>JS</a>
        <span class="arrow"></span>
        <ul class="dropdown-menu">
          <li><router-link :to="{name:'ball'}">弹球游戏</router-link></li>
          <li><router-link :to="{name:'jigsaw'}">拼图游戏</router-link></li>
          <li><router-link :to="{name:'snake'}">贪吃蛇</router-link></li>
        </ul>
      </li>
      <li>
        <router-link :to="{name:'vue'}">VUE</router-link>
        <span class="arrow"></span>
        <ul class="dropdown-menu">
          <li><a href="/shopping">电商网简单实例</a></li>
          <li><a href="/zhihuribao">知乎日报网页版</a></li>
        </ul>
      </li>
      <li>
        <router-link :to="{name:'x4'}">X4工厂计算器</router-link>
      </li>
      <li>
        <a href="/bootstrap4简略文档.html">Bootstrap4</a>
      </li>
      <li>
        <router-link :to="{name:'tools'}">工具</router-link>
      </li>
      <li>
        <router-link :to="{name:'about'}">关于</router-link>
      </li>
    </ul>
  </nav>
</template>
<style scoped>
a{
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
.navul>li{
  position: relative;
}
.navul>li:first-of-type a {
  margin-left: 0%;
  padding-left: 0%;
}
.navul>li:last-of-type a {
  margin-right: 0%;
  padding-right: 0%;
}
.navul>li>a:hover~.dropdown-menu,
.navul>li>.arrow:hover~.dropdown-menu,
.dropdown-menu:hover{
  display: block;
}
.dropdown-menu{
  display: none;
  list-style: none;
  padding: 0;
  margin: 0%;
  position: absolute;
  white-space: nowrap;
  border: 1px solid #bbb;
  padding-left: .5em;
  top: 100%;
  right: 0%;
  box-sizing: border-box;
  border-radius: .25em;
  max-height: calc(100vh - 4em);
  overflow-y: auto;
  margin: 0%;
  background-color: #fefefe;
}
.dropdown-menu>li>a{
  display: block;
  text-align: center;
}
.arrow{
  border-left: .3em solid transparent;
    border-right: .3em solid transparent;
    border-top: .4em solid #999;
    border-bottom: 0;
    box-sizing: border-box;
    vertical-align: middle;
    margin-left: -0.5em;
    margin-top: -0.1em;
    display: inline-block;
}
</style>
