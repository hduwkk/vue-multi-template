<template>
  <div style="width: 100%; height: 100vh;">
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
    <svg @click="clickHandle" width="500" height="500" viewBox="0 0 500 500">
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
</style>
