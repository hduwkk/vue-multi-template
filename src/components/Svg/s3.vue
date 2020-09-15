<template>
  <div
    style="width: 100%; height: 100vh; box-sizing: border-box; padding-left: 10px; padding-top: 10px;"
  >
    <!-- <svg width="200" height="200" viewBox="0 0 200 200">
      <g id="square">
        <rect
          x="0"
          y="0"
          width="20"
          height="20"
          style="fill: #000; stroke-width: 1;"
        />
      </g>
      <use xlink:href="#square" x="50" y="50" />
    </svg> -->
    <!-- <svg width="300" height="300" viewBox="0 0 300 300">
      <path
        d="M 100, 100 A100,50 0 0, 0 255, 125 Z"
        style="fill: none;stroke: #000;"
      />
    </svg> -->
    <!-- <svg class="all">
      <ellipse cx="154" cy="154" rx="150" ry="120" style="fill: #999;" />
      <ellipse cx="152" cy="152" rx="150" ry="120" style="fill: #cceeff;" />
      <path d="M 302 152,A 150 120 0 1 0 2 152, A 75 60 0 1 0 152 152" style="fill: #ffcccc;" />
      <path d="M 152 152,A 75 60 0 1 1 302 152" style="fill: #cceeff;" />
    </svg> -->
    <!-- <svg @click="clickHandle" width="500" height="500" viewBox="0 0 500 500">
      <defs>
        <symbol id="circle" viewBox="0 0 8 8">
          <circle cx="4" cy="4" r="4" style="fill: #353434;" />
          <circle cx="4" cy="4" r="2" style="fill: red;" />
        </symbol>
      </defs>
      <path d="M30 75, Q240 30, 300 120" style="stroke: #000; fill: none;" />
      <line x1="30" y1="75" x2="240" y2="30" style="stroke: #000; stroke-width: 1px;" />
      <line x1="240" y1="30" x2="300" y2="120" style="stroke: #000; stroke-width: 1px;" />
      <use xlink:href="#circle" width="10" height="10" x="26" y="71" />
      <use xlink:href="#circle" width="10" height="10" x="236" y="26" />
      <use xlink:href="#circle" width="10" height="10" x="296" y="116" />
    </svg> -->
    <svg viewBox="0 0 300 200">
      <!-- <rect x="10" y="10" width="200" height="20" stroke="#000;" style="stroke: #000;fill: none;">
        <animate attributeName="width" attributeType="XML" from="200" to="20" begin="0s" dur="5s" fill="freeze" />
      </rect> -->
      <!-- 例子2 -->
      <!-- <rect x="10" y="10" width="20" height="20" style="stroke: #000; fill: #cfc;">
        <animate attributeName="width" attributeType="XML" begin="0" dur="8s" from="20" to="120" fill="freeze" />
        <animate attributeName="height" attributeType="XML" begin="0" dur="8s" from="20" to="120" fill="freeze" />
      </rect>
      <circle cx="70" cy="70" r="20" style="fill: #ccf; stroke: #000;">
        <animate attributeName="r" attributeType="XML" begin="2s" dur="4s" from="20" to="50" fill="freeze" />
      </circle> -->
      <!-- <circle cx="60" cy="60" r="30" style="fill: #f9f; stroke: gray;">
        <animate id="c1" attributeName="r" attributeType="XML" begin="0s" dur="4s" from="30" to="10" fill="freeze" />
      </circle>
      <circle cx="120" cy="60" r="10" style="fill: #9f9; stroke: gray;">
        <animate attributeName="r" attributeType="XML" repeatCount="3" dur="4s" from="10" to="30" fill="freeze" />
      </circle> -->
      <!-- 颜色渐变 -->
      <!-- <circle
        cx="60"
        cy="60"
        r="30"
        style="fill: #ff9; stroke: gray; stroke-width: 10;"
      >
        <animate
          attributeName="fill"
          begin="2s"
          dur="4s"
          from="#ff9"
          to="red"
          fill="freeze"
        />
        <animate
          attributeName="stroke"
          begin="2s"
          dur="4s"
          from="gray"
          to="blue"
          fill="freeze"
        />
      </circle> -->
      <!-- <polygon points="30 30 70 30 90 70 10 70" style="fill: #fcc; stroke: #000;">
        <animate attributeName="points" attributeType="XML" to="50 30 70 50 50 90 30 50" begin="0s" dur="5s" fill="freeze" />
      </polygon>
      <path d="M 15 50 Q 40 15, 50 50, 65 32, 100 40" style="fill: none; stroke: #000;" transform="translate(0, 50)">
        <animate attributeName="d" attributeType="XML" to="M 50 15 Q 15 40, 50 50, 30 30 80 40" begin="0" dur="3" fill="freeze" />
      </path>
      <path d="M 50 15 Q 15 40, 50 50, 30 30 80 40" style="fill: none; stroke: #000;" transform="translate(0, 200)"></path> -->
      <!-- set -->
      <!-- <circle cx="60" cy="60" r="30" style="fill: #ff9; stroke: gray;">
        <animate attributeName="r" attributeType="XML" from="30" to="0" begin="0" dur="3" fill="freeze" />
      </circle>
      <text text-anchor="middle" x="60" y="60" style="visibility: hidden; stroke: #000;">
        <set attributeName="visibility" attributeType="CSS" to="visible" begin="3.5s" dur="1" fill="freeze" />
        All gone!
      </text> -->
      <!-- 倒计时 -->
      <!-- <path
        id="path"
        fill="none"
        stroke="#1B8798"
        stroke-width="2px"
        d="M0,0 L50,0 L50,50 L50,100 L0,100 L0,25 L0,0"
      ></path> -->
      <!-- 文字 -->
      <symbol id="text">
        <text x="30%" y="35%" class="text">。iy</text>
        <text x="25%" y="70%" class="text">456</text>
      </symbol>
      <g>
        <use xlink:href="#text" class="use-text"></use>
        <use xlink:href="#text" class="use-text"></use>
        <use xlink:href="#text" class="use-text"></use>
        <use xlink:href="#text" class="use-text"></use>
        <use xlink:href="#text" class="use-text"></use>
      </g>
    </svg>
  </div>
</template>
<script>
/**
 * 圆弧命令七个参数的含义
 * ellipse
 * 1.点所在的椭圆的X半径和y半径
 * 2. 椭圆的x周旋转角度
 * 3. large-arc-flag: 1 or 0, 角度是否大于180度
 * 4. 是否需要以负角度绘制 1 or 0
 * 5. 终点坐标的 x与y
 */
export default {
  methods: {
    clickHandle(e) {
      console.log(e)
    }
  }
}
</script>
<style scoped>
.all {
  display: block;
  width: 100%;
  height: 100%;
}
.button {
  width: 120px;
  text-align: center;
  background: skyblue;
  color: #fff;
  padding: 20px 0;
  margin: 0 20px;
  transition: background 0.3s;
}
.button:hover {
  background-color: green;
}

/* svg {
  position: absolute;
  height: 200px;
  width: 200px;
  text-align: center;
  padding: 20px;
  top: 50%;
  left: 50%;
  transform: translateY(-50%);
}
#path {
  animation: animation 30s infinite cubic-bezier(0.34, 1.61, 0.7, 1);
}
@keyframes animation {
  0%,
  7% {
    d: path('M0,100 L50,100 L50,50 L50,0 L0,0 L0,50 L50,50');
  }
  11%,
  17% {
    d: path('M0,0 L50,0 L50,100 L0,100 L0,0 L0,50 L50,50');
  }
  21%,
  27% {
    d: path('M0,0 L50,0 L50,20 L50,40 L50,60 L50,80 L50,100');
  }
  31%,
  37% {
    d: path('M50,0 L0,0 L0,50 L0,100 L50,100, L50,50 L0,50');
  }
  41%,
  47% {
    d: path('M50,0 L0,0 L0,50 L25,50 L50,50 L50,100 L0,100');
  }
  51%,
  57% {
    d: path('M0,0 L0,50 L50,50 L50,0 L50,35 L50,70 L50,100');
  }
  61%,
  67% {
    d: path('M0,0 L50,0 L50,100 L0,100 L50,100 L50,50 L0,50');
  }
  71%,
  77% {
    d: path('M0,0 L50,0 L50,50 L25,50 L0,50 L0,100 L50,100');
  }
  81%,
  87% {
    d: path('M50,0 L50,15 L50,30 L50,45 L50,60 L50,75 L50,100');
  }
  91%,
  96% {
    d: path('M0,0 L50,0 L50,50 L50,100 L0,100 L0,25 L0,0');
  }
} */

.text {
  font-size: 100px;
  font-family: cursive;
}
svg {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #000;
}
.use-text {
  fill: none;
  stroke: white;
  stroke-dashoffset: 0;
  stroke-dasharray: 0 100%;
  stroke-width: 2px;
}
.use-text:nth-child(1) {
  stroke: #360745;
  animation: animation1 8s  ease-in-out forwards;
}
.use-text:nth-child(2) {
  stroke: #d61c59;
  animation: animation2 8s  ease-in-out forwards;
}
.use-text:nth-child(3) {
  stroke: #e7d84b;
  animation: animation3 8s  ease-in-out forwards;
}
.use-text:nth-child(4) {
  stroke: #efeac5;
  animation: animation4 8s  ease-in-out forwards;
}
.use-text:nth-child(5) {
  stroke: #1b8798;
  animation: animation5 8s  ease-in-out forwards;
}

@keyframes animation1 {
  50%,
  100% {
    stroke-dasharray: 7% 28%;
    stroke-dashoffset: 7%;
  }
}
@keyframes animation2 {
  50%,
  100% {
    stroke-dasharray: 7% 28%;
    stroke-dashoffset: 14%;
  }
}
@keyframes animation3 {
  50%,
  100% {
    stroke-dasharray: 7% 28%;
    stroke-dashoffset: 21%;
  }
}
@keyframes animation4 {
  50%,
  100% {
    stroke-dasharray: 7% 28%;
    stroke-dashoffset: 28%;
  }
}
@keyframes animation5 {
  50%,
  100% {
    stroke-dasharray: 7% 28%;
    stroke-dashoffset: 35%;
  }
}
</style>
