<template>
  <div id="app">
    <header id="header">
      <a class="brand">A</a>
      <nav id="nav">
        <ul class="navul">
          <li>
            <router-link to="{name:'css'}">CSS</router-link>
          </li>
          <li>
            <router-link to="{name:'js'}">JS</router-link>
          </li>
          <li>
            <router-link to="{name:'vue'}">VUE</router-link>
          </li>
          <li>
            <router-link to="{name:'x4'}">X4工厂计算器</router-link>
          </li>
          <li>
            <router-link to="{name:'bootstrap4'}">Bootstrap4</router-link>
          </li>
          <li>
            <router-link to="{name:'tools'}">工具</router-link>
          </li>
          <li>
            <router-link to="{name:'about'}">关于</router-link>
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
  height: 4em;
  top: 0%;
  display: flex;
  justify-content: space-between;
  padding: 0.5em 0;
  box-sizing: border-box;
  align-items: center;
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
  display: flex;
  height: 100%;
  justify-content: space-around;
  align-items: center;
}
.navul a {
  margin:0 .5em;
  padding: .3em .5em;
  text-decoration: none;
  color: rgb(24, 29, 49);
  font-size: 1.1em;
}
#main {
  display: block;
  position: relative;
  top: 4em;
}
</style>

<style lang="scss">
#nav {
  a {
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
