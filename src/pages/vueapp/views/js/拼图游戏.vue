<template>
  <div id="jigsaw">
    <canvas id="canvas"></canvas>
    <h3>原图</h3>
    <img src="/webdoc/img/animal-1850210.jpg" alt="原图" />
  </div>
</template>
<script>
export default {
  methods: {
    gaming() {
      var img = new Image();
      img.src = "/webdoc/img/animal-1850210.jpg";
      //var canvasSize = 600;
      var canvas = document.getElementById("canvas");
      var gtx = canvas.getContext("2d");
      var pic = 3; //横、列片数
      //var ttt;
      img.onload = function() {
        //设置画板大小
        if (
          img.width / img.height >
          (window.innerWidth - 30) / (window.innerHeight - 30)
        ) {
          canvas.width = window.innerWidth - 30;
          canvas.height = (img.height * (window.innerWidth - 30)) / img.width;
        } else {
          canvas.height = window.innerHeight - 30;
          canvas.width = (img.width * (window.innerHeight - 30)) / img.height;
        }
        //每块大小
        var blockOption = {
          width: canvas.width / pic,
          height: canvas.height / pic
        };
        canvas.height = blockOption.height * (pic + 1);
        //怎么自动响应屏幕大小？
        /*gtx.drawImage(img,0,0,img.width,img.height,0,0,pic*blockOption.width,pic*blockOption.height);
			for(let i=0;i<pic;i++){
				for(let j=0;j<pic;j++){
					gtx.lineWidth=1;
					gtx.strokeStyle="#DFE572";		gtx.strokeRect(i*blockOption.width,j*blockOption.height,blockOption.width,blockOption.height);
				}
			}*/
        var canvasView = {
          drawBlock: function(block) {
            var x = block.imgIndex % pic;
            var y = Math.floor(block.imgIndex / pic);
            var dx = block.drawIndex % pic;
            var dy = Math.floor(block.drawIndex / pic);
            gtx.drawImage(
              img,
              (x * img.width) / pic,
              (y * img.height) / pic,
              img.width / pic,
              img.height / pic,
              dx * blockOption.width,
              dy * blockOption.height,
              blockOption.width,
              blockOption.height
            );
            gtx.lineWidth = 1;
            gtx.strokeStyle = "white";
            gtx.strokeRect(
              dx * blockOption.width,
              dy * blockOption.height,
              blockOption.width,
              blockOption.height
            );
          },
          drawBorder: function() {
            gtx.beginPath();
            gtx.moveTo(0, 0);
            gtx.lineTo(blockOption.width * pic, 0);
            gtx.lineTo(blockOption.width * pic, blockOption.height * pic);
            gtx.lineTo(blockOption.width, blockOption.height * pic);
            gtx.lineTo(blockOption.width, blockOption.height * (pic + 1));
            gtx.lineTo(0, blockOption.height * (pic + 1));
            gtx.lineTo(0, 0);
            gtx.strokeStyle = "black";
            gtx.stroke();
          },
          clearBlock: function(drawIndex) {
            var dx = drawIndex % pic;
            var dy = Math.floor(drawIndex / pic);
            gtx.clearRect(
              dx * blockOption.width,
              dy * blockOption.height,
              blockOption.width,
              blockOption.height
            );
            gtx.lineWidth = 1;
            gtx.strokeStyle = "white";
            gtx.strokeRect(
              dx * blockOption.width,
              dy * blockOption.height,
              blockOption.width,
              blockOption.height
            );
          }
        };
        var blockData = blockDataRandomBuild1();
        blockData[pic * pic - pic].drawIndex = pic * pic;
        canvasView.drawBorder();
        for (let block of blockData) {
          canvasView.drawBlock(block);
        }

        var img1 = document.querySelector("img");
        img1.height = (canvas.height / 4) * 3;
        img1.width = canvas.width;

        canvas.addEventListener("click", function(event) {
          var x = event.offsetX;
          var y = event.offsetY;
          var clickBlock = findDrawBlock(x, y);
          if (clickBlock == null) return;
          var drawIndex = clickBlock.drawIndex;
          if (moveBlock(clickBlock)) {
            canvasView.clearBlock(drawIndex);
            canvasView.drawBlock(clickBlock);
          }

          //根据坐标找到当前的block
          function findDrawBlock(x, y) {
            var dx = Math.floor(x / blockOption.width);
            var dy = Math.floor(y / blockOption.height);
            var drawIndex = dy * pic + dx;
            for (var block of blockData) {
              if (block.drawIndex === drawIndex) {
                return block;
              }
            }
            return null;
          }
          function moveBlock(block) {
            var di = block.drawIndex;
            var up = di - pic;
            var left = di - 1;
            var right = di + 1;
            var down = di + pic;
            var rowCurrent = Math.ceil((block.drawIndex + 1) / pic);
            var rowLeft = Math.ceil((left + 1) / pic);
            var rowRight = Math.ceil((right + 1) / pic);
            if (rowLeft !== rowCurrent) left = -1;
            if (rowRight !== rowCurrent) right = -1;
            var directArray = [up, left, right, down];
            var drawIndexArray = [];
            for (let b of blockData) {
              drawIndexArray.push(b.drawIndex);
            }
            for (let d of directArray) {
              if (d >= 0 && d <= pic * pic) {
                //var bool=drawIndexArray.includes(d);
                if (!drawIndexArray.includes(d)) {
                  block.drawIndex = d;
                  return true;
                }
              }
            }
            return false;
          }
        });
      };
      //块格式：{图片原块，画的块}
      function block(imgIndex, drawIndex) {
        this.imgIndex = imgIndex;
        this.drawIndex = drawIndex;
      }
      /*
      function blockDataRandomBuild() {
        var blockData = [];
        var indexArray = [];
        for (let i = 0; i < pic * pic; i++) {
          indexArray[i] = i;
        }
        randomArray(indexArray);
        for (let i = 0; i < pic * pic; i++) {
          blockData[i] = new block(i, indexArray[i]);
        }
        return blockData;
      }*/
      function blockDataRandomBuild1() {
        var blockData = [];
        //var indexArray = [];
        for (let i = 0; i < pic * pic; i++) {
          blockData[i] = new block(i, i);
        }
        //最后一行左边往下画，移出位置
        blockData[pic * pic - pic].drawIndex = pic * pic;
        var d = pic * pic - pic; //空位块下标

        for (let i = 0; i < pic * pic * 10; i++) {
          var block1 = getNeighbourBlock(d);
          [d, block1.drawIndex] = [block1.drawIndex, d];
        }
        return blockData;
        //随机获取一个周围的有效块
        function getNeighbourBlock(index) {
          var up = index - pic;
          var left = index - 1;
          var right = index + 1;
          var down = index + pic;
          var rowCurrent = Math.ceil((block.drawIndex + 1) / pic);
          var rowLeft = Math.ceil((left + 1) / pic);
          var rowRight = Math.ceil((right + 1) / pic);
          if (rowLeft !== rowCurrent) left = -1;
          if (rowRight !== rowCurrent) right == -1;
          var directArray = [up, left, right, down].filter(
            item => item !== -1 && item < pic * pic && item >= 0
          );
          var randomIndex =
            directArray[Math.floor(Math.random() * directArray.length)];
          var block1 = blockData.find(item => item.drawIndex === randomIndex);
          return block1;
        }
      }
      /*
      function randomArray(arr) {
        for (let i = arr.length - 1; i >= 0; i--) {
          let n = Math.floor(Math.random() * (i + 1));
          [arr[i], arr[n]] = [arr[n], arr[i]];
        }
      }*/
    }
  },
  mounted() {
    this.gaming();
  }
};
</script>
<style scoped>
canvas {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  box-sizing: content-box;
}
img {
  opacity: 0.8;
  display: block;
  margin: 0% auto;
}
h3 {
  display: block;
  text-align: center;
}
</style>
