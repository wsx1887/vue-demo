<template>
  <div id="textshadow">
    <h1>文字阴影</h1>
    <div id="burn">燃烧的文字</div>
    <div id="single">
      <span>左上文本阴影</span>
      <span>右下文本阴影</span>
      <span>左上模糊阴影</span>
      <span>右下模糊阴影</span>
    </div>
    <div id="multiple">多色文本阴影</div>
    <div id="threeD">
      <span>立体的文字1</span>
      <span>立体的文字2</span>
    </div>
    <div id="border">描边的文字</div>
    <div id="light">发光的文字</div>
  </div>
</template>
<style scoped>
#textshadow {
  text-align: center;
  font-family: "tahoma", "verdana", "arial", "宋体", "sans-serif";
}

#textshadow > div {
  font-size: 5em;
  width: 7em;
  margin: 0 auto;
}

#single span {
  display: block;
}

#single span:nth-child(1) {
  text-shadow: -0.06em -0.06em #333;
}

#single span:nth-child(2) {
  text-shadow: 0.06em 0.06em #333;
}

#single span:nth-child(3) {
  text-shadow: -0.06em -0.06em 0.07em #333;
}

#single span:nth-child(4) {
  text-shadow: 0.1em 0.1em 0.08em #333;
}

#multiple {
  text-shadow: 0.2em 0.2em 0.1em #660, -0.2em -0.2em 0.1em #060,
    0.8em 0.2em 0.1em #006;
}

#burn {
  background: #212121;
  margin-top: 0.3em;
  padding-top: 0.2em;
  text-shadow: 0 0 0.06em #fff, 0 -0.066em 0.06em #ff3,
    0.024em -0.13em 0.07em #ffdd33, 0.024em -0.22em 0.14em #f80,
    0.024em -0.33em 0.22em #f20;
}

#threeD span {
  display: block;
  font-weight: bold;
  color: #d1d1d1;
  background: #cccccc;
}

#threeD span:nth-child(1) {
  text-shadow: -1px -1px white, 1px 1px #333;
}

#threeD span:nth-child(2) {
  text-shadow: 1px 1px white, -1px -1px #333;
}

#border {
  color: #d1d1d1;
  background: #cccccc;
  text-shadow: 1px 0 black, -1px 0 black, 0 1px black, 0 -1px black;
}

#light {
  color: #d1d1d1;
  background: #cccccc;
  text-shadow: 0 0 0.2em #f87, 0 0 0.2em #f87;
  background: #111;
}
</style>