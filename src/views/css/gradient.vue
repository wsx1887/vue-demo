<template>
    <div id="gradient">
      <div class="bp1">1</div>
      <div class="bp2">2</div>
      <div class="bp3">3</div>
      <div class="bp4">4</div>
      <div class="bp5">5</div>
      <div class="bp6">6</div>
      <div class="bp7">7</div>
      <div class="bp8">8</div>
      <div class="bp9">9</div>
      <div class="bp10">10</div>
      <div class="bp11">11</div>
      <div class="bp12">12</div>
      <div class="bp13">13</div>
      <div class="bp14">14</div>
      <div class="bp15">15</div>
      <div class="bp16">16</div>
      <div class="bp17">17</div>
    </div>
</template>
<style scoped>
#gradient {
  text-align: center;
}
div:not(#gradient) {
  font-size: 3em;
  width: 300px;
  height: 300px;
  border: solid 2px #fcf;
  padding: 0;
  margin: 5px;
  margin-top: 10px;
  float: left;
}
.bp1 {
  background-color: hsla(196, 100%, 48%, 1.00);
  background-image: -webkit-gradient(linear, left top, left bottom, color-stop(50%, rgba(255, 255, 255, .2)), color-stop(50%, transparent));
  background-image: -webkit-linear-gradient(rgba(255, 255, 255, .2) 50%, transparent 50%);
  background-image: -moz-linear-gradient(rgba(255, 255, 255, .2) 50%, transparent 50%);
  background-image: -o-linear-gradient(rgba(255, 255, 255, .2) 50%, transparent 50%);
  background-image: linear-gradient(rgba(255, 255, 255, .2) 50%, transparent 50%);
  -o-background-size: 60px 60px;
     background-size: 60px 60px;
}
.bp2 {
  background-image: -webkit-repeating-linear-gradient(hsla(39, 91%, 48%, 1.00), hsla(39, 91%, 48%, 1.00) 30px, hsla(39, 91%, 70%, 1.00) 30px, hsla(39, 91%, 65%, 1.00) 60px);
  background-image: -moz-repeating-linear-gradient(hsla(39, 91%, 48%, 1.00), hsla(39, 91%, 48%, 1.00) 30px, hsla(39, 91%, 70%, 1.00) 30px, hsla(39, 91%, 65%, 1.00) 60px);
  background-image: -o-repeating-linear-gradient(hsla(39, 91%, 48%, 1.00), hsla(39, 91%, 48%, 1.00) 30px, hsla(39, 91%, 70%, 1.00) 30px, hsla(39, 91%, 65%, 1.00) 60px);
  background-image: repeating-linear-gradient(hsla(39, 91%, 48%, 1.00), hsla(39, 91%, 48%, 1.00) 30px, hsla(39, 91%, 70%, 1.00) 30px, hsla(39, 91%, 65%, 1.00) 60px);
}
.bp3 {
  background-color: white;
  background-image: -webkit-repeating-linear-gradient(rgba(150, 0, 0, 0.5), rgba(150, 0, 0, 0.5) 30px, transparent 30px, transparent 60px), -webkit-repeating-linear-gradient(left, rgba(150, 0, 0, 0.5), rgba(150, 0, 0, 0.5) 30px, transparent 30px, transparent 60px);
  background-image: -moz-repeating-linear-gradient(rgba(150, 0, 0, 0.5), rgba(150, 0, 0, 0.5) 30px, transparent 30px, transparent 60px), -moz-repeating-linear-gradient(left, rgba(150, 0, 0, 0.5), rgba(150, 0, 0, 0.5) 30px, transparent 30px, transparent 60px);
  background-image: -o-repeating-linear-gradient(rgba(150, 0, 0, 0.5), rgba(150, 0, 0, 0.5) 30px, transparent 30px, transparent 60px), -o-repeating-linear-gradient(left, rgba(150, 0, 0, 0.5), rgba(150, 0, 0, 0.5) 30px, transparent 30px, transparent 60px);
  background-image: repeating-linear-gradient(rgba(150, 0, 0, 0.5), rgba(150, 0, 0, 0.5) 30px, transparent 30px, transparent 60px), repeating-linear-gradient(to right, rgba(150, 0, 0, 0.5), rgba(150, 0, 0, 0.5) 30px, transparent 30px, transparent 60px);
}
.bp4 {
  background-image: -webkit-repeating-linear-gradient(45deg, hsla(90, 80%, 50%, 1.00), hsla(90, 80%, 50%, 1.00) 30px, hsla(90, 96%, 75%, 1.00) 30px, hsla(90, 96%, 75%, 1.00) 60px);
  background-image: -moz-repeating-linear-gradient(45deg, hsla(90, 80%, 50%, 1.00), hsla(90, 80%, 50%, 1.00) 30px, hsla(90, 96%, 75%, 1.00) 30px, hsla(90, 96%, 75%, 1.00) 60px);
  background-image: -o-repeating-linear-gradient(45deg, hsla(90, 80%, 50%, 1.00), hsla(90, 80%, 50%, 1.00) 30px, hsla(90, 96%, 75%, 1.00) 30px, hsla(90, 96%, 75%, 1.00) 60px);
  background-image: repeating-linear-gradient(45deg, hsla(90, 80%, 50%, 1.00), hsla(90, 80%, 50%, 1.00) 30px, hsla(90, 96%, 75%, 1.00) 30px, hsla(90, 96%, 75%, 1.00) 60px);
}
.bp5 {
  background-color: #fff;
  -o-background-size: 60px 60px;
     background-size: 60px 60px;
  background-image: -webkit-linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000), -webkit-linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000);
  background-image: -moz-linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000), -moz-linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000);
  background-image: -o-linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000), -o-linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000);
  background-image: linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000), linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000);
  background-position: 0 0, 30px 30px;
}
.bp6 {
  background-color: #fff;
  -o-background-size: 60px 60px;
     background-size: 60px 60px;
  background-image: -webkit-linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000), -webkit-linear-gradient(315deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000);
  background-image: -moz-linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000), -moz-linear-gradient(315deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000);
  background-image: -o-linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000), -o-linear-gradient(315deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000);
  background-image: linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000), linear-gradient(135deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000);
}
.bp7 {
  background-color: white;
  background-image: -webkit-repeating-linear-gradient(transparent, transparent 31px, #77CEFF 31px, #77CEFF 32px), -webkit-linear-gradient(left, transparent 31px, red 31px, red 32px, transparent 32px, transparent 36px, red 36px, red 37px, transparent 37px, transparent);
  background-image: -moz-repeating-linear-gradient(transparent, transparent 31px, #77CEFF 31px, #77CEFF 32px), -moz-linear-gradient(left, transparent 31px, red 31px, red 32px, transparent 32px, transparent 36px, red 36px, red 37px, transparent 37px, transparent);
  background-image: -o-repeating-linear-gradient(transparent, transparent 31px, #77CEFF 31px, #77CEFF 32px), -o-linear-gradient(left, transparent 31px, red 31px, red 32px, transparent 32px, transparent 36px, red 36px, red 37px, transparent 37px, transparent);
  background-image: repeating-linear-gradient(transparent, transparent 31px, #77CEFF 31px, #77CEFF 32px), linear-gradient(to right, transparent 31px, red 31px, red 32px, transparent 32px, transparent 36px, red 36px, red 37px, transparent 37px, transparent);
}
.bp8 {
  background: -webkit-radial-gradient(circle, white 10%, transparent 10%), -webkit-radial-gradient(circle, white 10%, black 10%) -50px -50px;
  background: -moz-radial-gradient(circle, white 10%, transparent 10%), -moz-radial-gradient(circle, white 10%, black 10%) -50px -50px;
  background: -o-radial-gradient(circle, white 10%, transparent 10%), -o-radial-gradient(circle, white 10%, black 10%) -50px -50px;
  background: radial-gradient(circle, white 10%, transparent 10%), radial-gradient(circle, white 10%, black 10%) -50px -50px;
  -o-background-size: 100px 100px;
     background-size: 100px 100px;
}
.bp9 {
  background-color: white;
  -o-background-size: 30px 30px;
     background-size: 30px 30px;
  background-image: -webkit-radial-gradient(0 0, circle farthest-side, transparent 14px, hsla(270, 100%, 44%, 1.00) 15px, transparent 16px), -webkit-radial-gradient(100% 100%, circle farthest-side, transparent 14px, hsla(270, 100%, 44%, 1.00) 15px, transparent 16px);
  background-image: -moz-radial-gradient(0 0, circle farthest-side, transparent 14px, hsla(270, 100%, 44%, 1.00) 15px, transparent 16px), -moz-radial-gradient(100% 100%, circle farthest-side, transparent 14px, hsla(270, 100%, 44%, 1.00) 15px, transparent 16px);
  background-image: -o-radial-gradient(0 0, circle farthest-side, transparent 14px, hsla(270, 100%, 44%, 1.00) 15px, transparent 16px), -o-radial-gradient(100% 100%, circle farthest-side, transparent 14px, hsla(270, 100%, 44%, 1.00) 15px, transparent 16px);
  background-image: radial-gradient(circle farthest-side at 0 0, transparent 14px, hsla(270, 100%, 44%, 1.00) 15px, transparent 16px), radial-gradient(circle farthest-side at 100% 100%, transparent 14px, hsla(270, 100%, 44%, 1.00) 15px, transparent 16px);
}
.bp10 {
  background-color: hsla(93, 60%, 59%, 1.00);
  -o-background-size: 30px 30px;
     background-size: 30px 30px;
  background-image: -webkit-radial-gradient(0 50%, circle, transparent 14px, hsla(285, 100%, 50%, 1.00) 15px, transparent 16px), -webkit-radial-gradient(100% 0, circle, transparent 14px, hsla(285, 100%, 50%, 1.00) 15px, transparent 16px);
  background-image: -moz-radial-gradient(0 50%, circle, transparent 14px, hsla(285, 100%, 50%, 1.00) 15px, transparent 16px), -moz-radial-gradient(100% 0, circle, transparent 14px, hsla(285, 100%, 50%, 1.00) 15px, transparent 16px);
  background-image: -o-radial-gradient(0 50%, circle, transparent 14px, hsla(285, 100%, 50%, 1.00) 15px, transparent 16px), -o-radial-gradient(100% 0, circle, transparent 14px, hsla(285, 100%, 50%, 1.00) 15px, transparent 16px);
  background-image: radial-gradient(circle at 0 50%, transparent 14px, hsla(285, 100%, 50%, 1.00) 15px, transparent 16px), radial-gradient(circle at 100% 0, transparent 14px, hsla(285, 100%, 50%, 1.00) 15px, transparent 16px);
  background-position: 0 -50%, 0 0;
}
.bp11 {
  background-color: rgba(86, 64, 64, 1.00);
  /*rgba(255,173,208,1.00)*/
  background-image: -webkit-radial-gradient(rgba(255, 173, 208, 1) 7%, blue 8%, transparent 10%), -webkit-radial-gradient(rgba(255, 173, 208, 1) 7%, blue 8%, transparent 10%), -webkit-linear-gradient(45deg, transparent 49.4%, blue 50%, transparent 50.6%), -webkit-linear-gradient(315deg, transparent 49.4%, blue 50%, transparent 50.6%), -webkit-linear-gradient(45deg, transparent 49.4%, rgba(255, 255, 255, 0.5) 50%, transparent 50.6%), -webkit-linear-gradient(315deg, transparent 49.4%, rgba(255, 255, 255, 0.5) 50%, transparent 50.6%), -webkit-linear-gradient(45deg, transparent 49.6%, rgba(0, 0, 0, 0.3) 50%, transparent 50.4%), -webkit-linear-gradient(315deg, transparent 49.6%, rgba(0, 0, 0, 0.3) 50%, transparent 50.4%), -webkit-radial-gradient(rgba(255, 173, 208, 1.00) 38%, transparent), -webkit-radial-gradient(rgba(255, 173, 208, 1.00) 38%, transparent);
  background-image: -moz-radial-gradient(rgba(255, 173, 208, 1) 7%, blue 8%, transparent 10%), -moz-radial-gradient(rgba(255, 173, 208, 1) 7%, blue 8%, transparent 10%), -moz-linear-gradient(45deg, transparent 49.4%, blue 50%, transparent 50.6%), -moz-linear-gradient(315deg, transparent 49.4%, blue 50%, transparent 50.6%), -moz-linear-gradient(45deg, transparent 49.4%, rgba(255, 255, 255, 0.5) 50%, transparent 50.6%), -moz-linear-gradient(315deg, transparent 49.4%, rgba(255, 255, 255, 0.5) 50%, transparent 50.6%), -moz-linear-gradient(45deg, transparent 49.6%, rgba(0, 0, 0, 0.3) 50%, transparent 50.4%), -moz-linear-gradient(315deg, transparent 49.6%, rgba(0, 0, 0, 0.3) 50%, transparent 50.4%), -moz-radial-gradient(rgba(255, 173, 208, 1.00) 38%, transparent), -moz-radial-gradient(rgba(255, 173, 208, 1.00) 38%, transparent);
  background-image: -o-radial-gradient(rgba(255, 173, 208, 1) 7%, blue 8%, transparent 10%), -o-radial-gradient(rgba(255, 173, 208, 1) 7%, blue 8%, transparent 10%), -o-linear-gradient(45deg, transparent 49.4%, blue 50%, transparent 50.6%), -o-linear-gradient(315deg, transparent 49.4%, blue 50%, transparent 50.6%), -o-linear-gradient(45deg, transparent 49.4%, rgba(255, 255, 255, 0.5) 50%, transparent 50.6%), -o-linear-gradient(315deg, transparent 49.4%, rgba(255, 255, 255, 0.5) 50%, transparent 50.6%), -o-linear-gradient(45deg, transparent 49.6%, rgba(0, 0, 0, 0.3) 50%, transparent 50.4%), -o-linear-gradient(315deg, transparent 49.6%, rgba(0, 0, 0, 0.3) 50%, transparent 50.4%), -o-radial-gradient(rgba(255, 173, 208, 1.00) 38%, transparent), -o-radial-gradient(rgba(255, 173, 208, 1.00) 38%, transparent);
  background-image: radial-gradient(rgba(255, 173, 208, 1) 7%, blue 8%, transparent 10%), radial-gradient(rgba(255, 173, 208, 1) 7%, blue 8%, transparent 10%), linear-gradient(45deg, transparent 49.4%, blue 50%, transparent 50.6%), linear-gradient(135deg, transparent 49.4%, blue 50%, transparent 50.6%), linear-gradient(45deg, transparent 49.4%, rgba(255, 255, 255, 0.5) 50%, transparent 50.6%), linear-gradient(135deg, transparent 49.4%, rgba(255, 255, 255, 0.5) 50%, transparent 50.6%), linear-gradient(45deg, transparent 49.6%, rgba(0, 0, 0, 0.3) 50%, transparent 50.4%), linear-gradient(135deg, transparent 49.6%, rgba(0, 0, 0, 0.3) 50%, transparent 50.4%), radial-gradient(rgba(255, 173, 208, 1.00) 38%, transparent), radial-gradient(rgba(255, 173, 208, 1.00) 38%, transparent);
  -o-background-size: 100px 100px;
     background-size: 100px 100px;
  background-position: 0 0, 50px 50px, 0 0, 0 0, 2px 0px, 0 -2px, -2px 0, 0 2px, 50px 0, 0 -50px;
}
.bp12 {
  background-color: #333;
  background-image: -webkit-radial-gradient(circle, black 10%, transparent 17%), -webkit-radial-gradient(circle, black 10%, transparent 17%), -webkit-radial-gradient(circle, rgba(255, 255, 255, 0.5) 10%, transparent 17%), -webkit-radial-gradient(circle, rgba(255, 255, 255, 0.5) 10%, transparent 17%);
  background-image: -moz-radial-gradient(circle, black 10%, transparent 17%), -moz-radial-gradient(circle, black 10%, transparent 17%), -moz-radial-gradient(circle, rgba(255, 255, 255, 0.5) 10%, transparent 17%), -moz-radial-gradient(circle, rgba(255, 255, 255, 0.5) 10%, transparent 17%);
  background-image: -o-radial-gradient(circle, black 10%, transparent 17%), -o-radial-gradient(circle, black 10%, transparent 17%), -o-radial-gradient(circle, rgba(255, 255, 255, 0.5) 10%, transparent 17%), -o-radial-gradient(circle, rgba(255, 255, 255, 0.5) 10%, transparent 17%);
  background-image: radial-gradient(circle, black 10%, transparent 17%), radial-gradient(circle, black 10%, transparent 17%), radial-gradient(circle, rgba(255, 255, 255, 0.5) 10%, transparent 17%), radial-gradient(circle, rgba(255, 255, 255, 0.5) 10%, transparent 17%);
  -o-background-size: 30px 30px;
     background-size: 30px 30px;
  background-position: 0 0, 15px 15px, 0 1px, 15px 16px;
}
.bp13 {
  background-color: rgba(128, 31, 33, 1.00);
  background-image: -webkit-radial-gradient(circle, rgba(255, 124, 209, 1.00) 15px, transparent 16px), -webkit-radial-gradient(circle, rgba(255, 124, 209, 1.00) 15px, transparent 16px), -webkit-radial-gradient(circle, rgba(128, 31, 33, 1.00) 15px, transparent 16px), -webkit-radial-gradient(circle, rgba(128, 31, 33, 1.00) 15px, transparent 16px), -webkit-radial-gradient(circle, rgba(255, 124, 209, 1.00) 15px, transparent 16px), -webkit-radial-gradient(circle, rgba(255, 124, 209, 1.00) 15px, transparent 16px), -webkit-radial-gradient(circle, rgba(255, 124, 209, 1.00) 15px, transparent 16px), -webkit-radial-gradient(circle, rgba(128, 31, 33, 1.00) 15px, transparent 16px), -webkit-radial-gradient(circle, rgba(128, 31, 33, 1.00) 15px, transparent 16px), -webkit-radial-gradient(circle, rgba(255, 124, 209, 1.00) 15px, transparent 16px);
  background-image: -moz-radial-gradient(circle, rgba(255, 124, 209, 1.00) 15px, transparent 16px), -moz-radial-gradient(circle, rgba(255, 124, 209, 1.00) 15px, transparent 16px), -moz-radial-gradient(circle, rgba(128, 31, 33, 1.00) 15px, transparent 16px), -moz-radial-gradient(circle, rgba(128, 31, 33, 1.00) 15px, transparent 16px), -moz-radial-gradient(circle, rgba(255, 124, 209, 1.00) 15px, transparent 16px), -moz-radial-gradient(circle, rgba(255, 124, 209, 1.00) 15px, transparent 16px), -moz-radial-gradient(circle, rgba(255, 124, 209, 1.00) 15px, transparent 16px), -moz-radial-gradient(circle, rgba(128, 31, 33, 1.00) 15px, transparent 16px), -moz-radial-gradient(circle, rgba(128, 31, 33, 1.00) 15px, transparent 16px), -moz-radial-gradient(circle, rgba(255, 124, 209, 1.00) 15px, transparent 16px);
  background-image: -o-radial-gradient(circle, rgba(255, 124, 209, 1.00) 15px, transparent 16px), -o-radial-gradient(circle, rgba(255, 124, 209, 1.00) 15px, transparent 16px), -o-radial-gradient(circle, rgba(128, 31, 33, 1.00) 15px, transparent 16px), -o-radial-gradient(circle, rgba(128, 31, 33, 1.00) 15px, transparent 16px), -o-radial-gradient(circle, rgba(255, 124, 209, 1.00) 15px, transparent 16px), -o-radial-gradient(circle, rgba(255, 124, 209, 1.00) 15px, transparent 16px), -o-radial-gradient(circle, rgba(255, 124, 209, 1.00) 15px, transparent 16px), -o-radial-gradient(circle, rgba(128, 31, 33, 1.00) 15px, transparent 16px), -o-radial-gradient(circle, rgba(128, 31, 33, 1.00) 15px, transparent 16px), -o-radial-gradient(circle, rgba(255, 124, 209, 1.00) 15px, transparent 16px);
  background-image: radial-gradient(circle, rgba(255, 124, 209, 1.00) 15px, transparent 16px), radial-gradient(circle, rgba(255, 124, 209, 1.00) 15px, transparent 16px), radial-gradient(circle, rgba(128, 31, 33, 1.00) 15px, transparent 16px), radial-gradient(circle, rgba(128, 31, 33, 1.00) 15px, transparent 16px), radial-gradient(circle, rgba(255, 124, 209, 1.00) 15px, transparent 16px), radial-gradient(circle, rgba(255, 124, 209, 1.00) 15px, transparent 16px), radial-gradient(circle, rgba(255, 124, 209, 1.00) 15px, transparent 16px), radial-gradient(circle, rgba(128, 31, 33, 1.00) 15px, transparent 16px), radial-gradient(circle, rgba(128, 31, 33, 1.00) 15px, transparent 16px), radial-gradient(circle, rgba(255, 124, 209, 1.00) 15px, transparent 16px);
  background-position: 0 0, 30px 0, 0 32px, 30px 32px, 15px 15px, 60px 60px, 90px 60px, 60px 92px, 90px 92px, 75px 75px;
  -o-background-size: 120px 120px;
     background-size: 120px 120px;
}
.bp14 {
  background-color: rgba(150, 150, 150, 1.00);
  background-image: -webkit-linear-gradient(330deg, transparent 49.6%, white 50%, transparent 50.4%), -webkit-linear-gradient(30deg, transparent 49.6%, white 50%, transparent 50.4%), -webkit-linear-gradient(330deg, transparent 25%, rgba(82, 82, 82, 0.3) 25%, rgba(82, 82, 82, 0.3) 75%, transparent 75%), -webkit-linear-gradient(30deg, transparent 25%, rgba(82, 82, 82, 0.3) 25%, rgba(82, 82, 82, 0.3) 75%, transparent 75%);
  background-image: -moz-linear-gradient(330deg, transparent 49.6%, white 50%, transparent 50.4%), -moz-linear-gradient(30deg, transparent 49.6%, white 50%, transparent 50.4%), -moz-linear-gradient(330deg, transparent 25%, rgba(82, 82, 82, 0.3) 25%, rgba(82, 82, 82, 0.3) 75%, transparent 75%), -moz-linear-gradient(30deg, transparent 25%, rgba(82, 82, 82, 0.3) 25%, rgba(82, 82, 82, 0.3) 75%, transparent 75%);
  background-image: -o-linear-gradient(330deg, transparent 49.6%, white 50%, transparent 50.4%), -o-linear-gradient(30deg, transparent 49.6%, white 50%, transparent 50.4%), -o-linear-gradient(330deg, transparent 25%, rgba(82, 82, 82, 0.3) 25%, rgba(82, 82, 82, 0.3) 75%, transparent 75%), -o-linear-gradient(30deg, transparent 25%, rgba(82, 82, 82, 0.3) 25%, rgba(82, 82, 82, 0.3) 75%, transparent 75%);
  background-image: linear-gradient(120deg, transparent 49.6%, white 50%, transparent 50.4%), linear-gradient(60deg, transparent 49.6%, white 50%, transparent 50.4%), linear-gradient(120deg, transparent 25%, rgba(82, 82, 82, 0.3) 25%, rgba(82, 82, 82, 0.3) 75%, transparent 75%), linear-gradient(60deg, transparent 25%, rgba(82, 82, 82, 0.3) 25%, rgba(82, 82, 82, 0.3) 75%, transparent 75%);
  -o-background-size: 104px 180px;
     background-size: 104px 180px;
}
.bp15 {
  background-image: -webkit-radial-gradient(circle, transparent 100px, rgba(53, 50, 78, 1.00) 100px), -webkit-radial-gradient(150px 100px, circle, black 18px, white 18px, white 50px, transparent 50px), -webkit-radial-gradient(150px 200px, circle, white 18px, black 18px, black 50px, transparent 50px), -webkit-linear-gradient(left, transparent 50px, white 50px, white 150px, black 150px, black 250px, transparent 250px);
  background-image: -moz-radial-gradient(circle, transparent 100px, rgba(53, 50, 78, 1.00) 100px), -moz-radial-gradient(150px 100px, circle, black 18px, white 18px, white 50px, transparent 50px), -moz-radial-gradient(150px 200px, circle, white 18px, black 18px, black 50px, transparent 50px), -moz-linear-gradient(left, transparent 50px, white 50px, white 150px, black 150px, black 250px, transparent 250px);
  background-image: -o-radial-gradient(circle, transparent 100px, rgba(53, 50, 78, 1.00) 100px), -o-radial-gradient(150px 100px, circle, black 18px, white 18px, white 50px, transparent 50px), -o-radial-gradient(150px 200px, circle, white 18px, black 18px, black 50px, transparent 50px), -o-linear-gradient(left, transparent 50px, white 50px, white 150px, black 150px, black 250px, transparent 250px);
  background-image: radial-gradient(circle, transparent 100px, rgba(53, 50, 78, 1.00) 100px), radial-gradient(circle at 150px 100px, black 18px, white 18px, white 50px, transparent 50px), radial-gradient(circle at 150px 200px, white 18px, black 18px, black 50px, transparent 50px), linear-gradient(to right, transparent 50px, white 50px, white 150px, black 150px, black 250px, transparent 250px);
}
.bp16 {
  background-image: -webkit-radial-gradient(closest-side, transparent 98%, rgba(90, 24, 24, 1.00) 99%), -webkit-radial-gradient(closest-side, transparent 98%, rgba(90, 24, 24, 1.00) 99%);
  background-image: -moz-radial-gradient(closest-side, transparent 98%, rgba(90, 24, 24, 1.00) 99%), -moz-radial-gradient(closest-side, transparent 98%, rgba(90, 24, 24, 1.00) 99%);
  background-image: -o-radial-gradient(closest-side, transparent 98%, rgba(90, 24, 24, 1.00) 99%), -o-radial-gradient(closest-side, transparent 98%, rgba(90, 24, 24, 1.00) 99%);
  background-image: radial-gradient(closest-side, transparent 98%, rgba(90, 24, 24, 1.00) 99%), radial-gradient(closest-side, transparent 98%, rgba(90, 24, 24, 1.00) 99%);
  background-position: 0 0px, 40px 40px;
  -o-background-size: 80px 80px;
     background-size: 80px 80px;
}
.bp17 {
  border-radius: 50%;
  background: -webkit-radial-gradient(white 7px, #FF7E80 7px, #FF7E80 20px, #eee 21px, #FF7E80 22px, #FF7E80 25px, transparent 26px), -webkit-linear-gradient(130deg, transparent 31.5%, rgba(48, 48, 48, 0.8) 20%) no-repeat, -webkit-linear-gradient(310deg, transparent 31.5%, rgba(48, 48, 48, 0.8) 20%) no-repeat 0% 100%, -webkit-repeating-radial-gradient(#555, #555 4px, #ddd 5px, #ddd 6px);
  background: -moz-radial-gradient(white 7px, #FF7E80 7px, #FF7E80 20px, #eee 21px, #FF7E80 22px, #FF7E80 25px, transparent 26px), -moz-linear-gradient(130deg, transparent 31.5%, rgba(48, 48, 48, 0.8) 20%) no-repeat, -moz-linear-gradient(310deg, transparent 31.5%, rgba(48, 48, 48, 0.8) 20%) no-repeat 0% 100%, -moz-repeating-radial-gradient(#555, #555 4px, #ddd 5px, #ddd 6px);
  background: -o-radial-gradient(white 7px, #FF7E80 7px, #FF7E80 20px, #eee 21px, #FF7E80 22px, #FF7E80 25px, transparent 26px), -o-linear-gradient(130deg, transparent 31.5%, rgba(48, 48, 48, 0.8) 20%) no-repeat, -o-linear-gradient(310deg, transparent 31.5%, rgba(48, 48, 48, 0.8) 20%) no-repeat 0% 100%, -o-repeating-radial-gradient(#555, #555 4px, #ddd 5px, #ddd 6px);
  background: radial-gradient(white 7px, #FF7E80 7px, #FF7E80 20px, #eee 21px, #FF7E80 22px, #FF7E80 25px, transparent 26px), linear-gradient(-40deg, transparent 31.5%, rgba(48, 48, 48, 0.8) 20%) no-repeat, linear-gradient(140deg, transparent 31.5%, rgba(48, 48, 48, 0.8) 20%) no-repeat 0% 100%, repeating-radial-gradient(#555, #555 4px, #ddd 5px, #ddd 6px);
  -o-background-size: 100% 100%, 100% 50%, 100% 50%, 100% 100%;
     background-size: 100% 100%, 100% 50%, 100% 50%, 100% 100%;/*必须先定义background-image*/
}
</style>
