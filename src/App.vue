<template>
  <div id="app">
    <header id="header">
      <a class="brand" href>A</a>
      <nav id="nav">
        <ul class="navul">
          <li>
            <router-link :to="{name:'css'}">CSS</router-link>
          </li>
          <li>
            <router-link :to="{name:'js'}">JS</router-link>
          </li>
          <li>
            <router-link :to="{name:'vue'}">VUE</router-link>
          </li>
          <li>
            <router-link :to="{name:'x4'}">X4工厂计算器</router-link>
          </li>
          <li>
            <router-link :to="{name:'bootstrap4'}">Bootstrap4</router-link>
          </li>
          <li>
            <router-link :to="{name:'tools'}">工具</router-link>
          </li>
          <li>
            <router-link :to="{name:'about'}">关于</router-link>
          </li>
        </ul>
      </nav>
    </header>
    <main id="main">
      <router-view/>
    </main>
    <footer></footer>
  </div>
</template>
<style>
html,
body {
  margin: 0%;
  padding: 0%;
  font-family: "微软雅黑", "华文中宋", "sans-serif";
}
</style>

<style scoped>
#header {
  position: fixed;
  width: 100%;
  height: 3.5em;
  top: 0%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -moz-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding: 0.5em 2em;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  border-bottom: 1px solid rgb(180, 180, 180);
}
.brand {
  font-size: 3em;
  color: #fbb500;
  text-shadow: 0 0 2px white, 0 3px 3px #ff3, 2px 4px 4px #fd3;
  -webkit-transform: scale(1, -1);
  -moz-transform: scale(1, -1);
  -ms-transform: scale(1, -1);
  -o-transform: scale(1, -1);
  transform: scale(1, -1);
  text-align: center;
  font-family: "Algerian";
  text-decoration: none;
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
}
.navul a {
  margin: 0 0.3em;
  padding: 0.3em 0.4em;
  text-decoration: none;
  display: inline-block;
  color: rgb(24, 29, 49);
}
.navul a:hover {
  border-bottom: solid 2px rgb(0, 139, 98);
}
.navul li:first-of-type a {
  margin-left: 0%;
  padding-left: 0%;
}
.navul li:last-of-type a {
  margin-right: 0%;
  padding-right: 0%;
}
#main {
  display: block;
  position: relative;
  top: 4em;
  margin: 0% 2em;
}
.router-link-exact-active {
  border-bottom: solid 2px rgb(0, 139, 98);
}
</style>
