<template>
  <div id="snake">
    <canvas id="canvas"></canvas>
  </div>
</template>
<script>
export default {
  methods: {
    gaming() {
      var canvas = document.getElementById("canvas");
      var canvasSize = 300;
      canvas.height = canvas.width = canvasSize;
      var gtx = canvas.getContext("2d");
      var blockSize = 10;
      var blockArray = new Array(canvasSize / blockSize);
      for (let i = 0; i < canvasSize / blockSize; i++) {
        blockArray[i] = new Array(canvasSize / blockSize);
        for (let j = 0; j < canvasSize / blockSize; j++) {
          blockArray[i][j] = new block(i, j);
        }
      }

      var snake = {
        body: [new block(0, 10), new block(1, 10), new block(2, 10)],
        direction: "right",
        move: function() {
          var x = this.body[this.body.length - 1].x;
          var y = this.body[this.body.length - 1].y;
          if (this.direction === "right") {
            x++;
          } else if (this.direction === "left") {
            x--;
          } else if (this.direction === "up") {
            y--;
          } else if (this.direction === "down") {
            y++;
          }
          if (
            x < 0 ||
            x >= canvasSize / blockSize ||
            y < 0 ||
            y >= canvasSize / blockSize ||
            this.body.includes(blockArray[x][y])
          ) {
            gameOver();
            return;
          } else {
            this.body.push(blockArray[x][y]);
            blockArray[x][y].draw();
          }
          if (blockArray[x][y] !== apple) {
            let shiftBlock = this.body.shift();
            shiftBlock.clearDraw();
          } else {
            apple = appleRandomBuild();
            apple.draw();
          }
        },
        draw: function() {
          for (let item of this.body) {
            item.draw();
          }
        }
      };
      var apple = appleRandomBuild();
      apple.draw();
      snake.draw();
      window.addEventListener("keydown", function(event) {
        if (event.key === "ArrowRight") {
          if (snake.direction === "left") {
            return;
          }
          snake.direction = "right";
        } else if (event.key === "ArrowDown") {
          if (snake.direction === "up") {
            return;
          }
          snake.direction = "down";
        } else if (event.key === "ArrowLeft") {
          if (snake.direction === "right") {
            return;
          }
          snake.direction = "left";
        } else if (event.key === "ArrowUp") {
          if (snake.direction === "down") {
            return;
          }
          snake.direction = "up";
        }
      });
      var speed = 300;
      var over = window.setInterval(function() {
        snake.move();
      }, speed);

      function block(x, y) {
        this.x = x;
        this.y = y;
        this.size = blockSize;
        this.clearDraw = function() {
          gtx.clearRect(
            this.x * this.size,
            this.y * this.size,
            this.size,
            this.size
          );
        };
        this.draw = function() {
          gtx.fillRect(
            this.x * this.size,
            this.y * this.size,
            this.size,
            this.size
          );
        };
      }

      function appleRandomBuild() {
        var _blockArrayRest = [];
        for (var i = 0; i < canvasSize / blockSize; i++) {
          for (var j = 0; j < canvasSize / blockSize; j++) {
            if (!snake.body.includes(blockArray[i][j])) {
              _blockArrayRest.push(blockArray[i][j]);
            }
          }
        }
        var index = Math.floor(Math.random() * _blockArrayRest.length);
        return _blockArrayRest[index];
      }
      function gameOver() {
        gtx.font = "30px serif";
        gtx.textAlign = "center";
        gtx.textBaseline = "middle";
        gtx.fillText("Gamve Over!", canvas.width / 2, canvas.height / 2);
        window.clearInterval(over);
      }
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
  margin: auto;
  border: solid 2px #161325;
  box-sizing: content-box;
} 
</style>
