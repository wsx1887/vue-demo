<template>
  <div id="app">
    <header id="header">
      <a class="brand" href="/webdoc">A</a>
      <navbar/>
    </header>
    <main id="main">
      <router-view/>
    </main>
    <footer></footer>
  </div>
</template>
<script>
import navbar from "./components/navbar.vue";
export default {
  components: {
    navbar
  }
};
</script>
<style>
html,
body {
  margin: 0%;
  padding: 0%;
  font-family: "tahoma", "sans-serif";
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
  z-index: 3;
  background-color: #fbfbfb;
}
.brand {
  font-size: 3em;
  color: #fbb500;
  /*text-shadow: 0 0 2px white, 0 3px 3px #ff3, 2px 4px 4px #fd3;*/
  -webkit-transform: scale(1, -1);
  -moz-transform: scale(1, -1);
  -ms-transform: scale(1, -1);
  -o-transform: scale(1, -1);
  transform: scale(1, -1);
  text-align: center;
  font-family: "Algerian";
  text-decoration: none;
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
