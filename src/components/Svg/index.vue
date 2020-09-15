<template>
  <div class="grid">
    <!-- <svg width="200" height="250" viewBox="0 0 64 80">
      <rect x="10" y="35" width="40" height="40"></rect>
      <polyline points="10 35, 30 10, 50 35" />
      <polyline points="25 75, 25 60, 35 60, 35 75" />
    </svg> -->
    <!-- <svg class="color-blue" width="200" height="250" viewBox="0 0 80 80">
      <rect x="10" y="35" width="40" height="40"></rect>
      <polyline points="10 35, 30 10, 50 35" />
      <polyline points="25 75, 25 60, 35 60, 35 75" />
    </svg>
    <div class="box"></div> -->
    <!-- 猫 -->
    <!-- <svg width="140" height="170">
      <title>Cat</title>
      <desc>这是一只猫呀</desc>
      <circle cx="70" cy="95" r="50" style="stroke: #000; fill: none;"></circle>
      <circle cx="55" cy="80" r="5" style="stroke: #000; fill: #339903;"></circle>
      <circle cx="85" cy="80" r="5" style="stroke: #000; fill: #339903;"></circle>
      <g id="whiskers">
        <line x1="75" y1="95" x2="135" y2="85" style="stroke: #000;"></line>
        <line x1="75" y1="95" x2="135" y2="105" style="stroke: #000;"></line>
      </g>
      <use xlink:href="#whiskers" transform="scale(-1 1) translate(-140 0)" />
      <polyline points="108 62, 90 10, 70 45, 50 10, 32 62" />
      <polyline points="35 110, 45 120, 95 120, 105, 110" />
      <path d="M 75 90 L 65 90 A 5 10 0 0 0 75 90" />
    </svg>

    <svg width="190px" height="160px" style="background-color: rgba(0,0,0,0.1)" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 10 C 20 20, 40 20, 50 10" stroke="black" />
      <path d="M70 10 C 70 20, 120 20, 120 10" stroke="black" />
      <path d="M130 10 C 120 20, 180 20, 170 10" stroke="black" />
      <path d="M10 60 C 20 80, 40 80, 50 60" stroke="black" />
      <path d="M70 60 C 70 80, 110 80, 110 60" stroke="black" />
      <path d="M130 60 C 120 80, 180 80, 170 60" stroke="black" />
      <path d="M10 110 C 20 140, 40 140, 50 110" stroke="black" />
      <path d="M70 110 C 70 140, 110 140, 110 110" stroke="black" />
      <path d="M130 110 C 120 140, 180 140, 170 110" stroke="black" />
    </svg> -->
    <!-- <svg style="stroke-width: 2px;" width="200" height="200" viewBox="0 0 200 300" xmlns="http://www.w3.org/2000/svg">
      <line stroke-dasharray="5, 5" x1="10" y1="10" x2="190" y2="10" />
      <text stroke-dasharray="50%, 50%" style="stroke: red; font-size: 100px;;" x="30" y="100">
        你i
      </text>
    </svg> -->
  </div>
</template>
<script>
export default {
  methods: {
    clickA(e) {
      console.log(e, 'e')
    }
  }
}
</script>
<style>
.box {
  position: relative;
  box-sizing: border-box;
  width: 40px;
  height: 40px;
  left: 10px;
  border: 1px solid #000;

  transform: scale(3.125);
  transform-origin: 0 0;
}
svg {
  stroke: rgb(0, 0, 0);
  stroke-width: 1px;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
}
.color-blue {
  color: rgb(5, 5, 85);
}
</style>
