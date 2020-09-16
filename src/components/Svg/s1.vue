<template>
  <div
    class="container"
    :class="{ playing: isPlaying, paused: !isPlaying }"
    @click="clickHandle"
  >
    <svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
      <!-- <line x1="0" y1="10" x2="300" y2="10" />
      <line stroke-dasharray="10%" x1="0" y1="20" x2="300" y2="20" /> -->
      <symbol id="text0">
        <text x="0" y="35%">
          iab
        </text>
        <text x="0" y="70%">
          你好啊啊
        </text>
      </symbol>
      <g>
        <use class="text" xlink:href="#text0" />
        <use class="text" xlink:href="#text0" />
        <use class="text" xlink:href="#text0" />
        <use class="text" xlink:href="#text0" />
        <use class="text" xlink:href="#text0" />
      </g>
    </svg>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isPlaying: true
    }
  },
  methods: {
    clickHandle() {
      this.isPlaying = !this.isPlaying
    }
  }
}
</script>
<style>
.container {
  height: 100vh;
  user-select: none;
}
svg {
  width: 100%;
  height: 100%;
  stroke-width: 1px;
  fill: none;
  background-color: #000;
}
line {
  stroke: black;
  stroke-width: 1px;
}

text {
  font-size: 100px;
  font-family: cursive;
}
.text {
  fill: none;
  stroke: white;
  stroke-dashoffset: 0;
  stroke-dasharray: 0 100%;
  stroke-width: 1px;
}

.text:nth-child(1) {
  stroke: #360745;
  animation: dasharray1 8s ease-in-out forwards;
}
.text:nth-child(2) {
  stroke: #d61c59;
  animation: dasharray2 8s ease-in-out forwards;
}
.text:nth-child(3) {
  stroke: #e7d84b;
  animation: dasharray3 8s ease-in-out forwards;
}
.text:nth-child(4) {
  stroke: #efeac5;
  animation: dasharray4 8s ease-in-out forwards;
}
.text:nth-child(5) {
  stroke: #1b8798;
  animation: dasharray5 8s ease-in-out forwards;
}

.playing .text {
  animation-play-state: running;
}
.paused .text {
  animation-play-state: paused;
}

@keyframes dasharray {
  50%,
  70% {
    stroke-dasharray: 7% 28%;
  }
}
@keyframes dasharray1 {
  50%,
  70% {
    stroke-dasharray: 7% 28%;
    stroke-dashoffset: 7%;
  }
}
@keyframes dasharray2 {
  50%,
  70% {
    stroke-dasharray: 7% 28%;
    stroke-dashoffset: 14%;
  }
}
@keyframes dasharray3 {
  50%,
  70% {
    stroke-dasharray: 7% 28%;
    stroke-dashoffset: 21%;
  }
}
@keyframes dasharray4 {
  50%,
  70% {
    stroke-dasharray: 7% 28%;
    stroke-dashoffset: 28%;
  }
}
@keyframes dasharray5 {
  50%,
  70% {
    stroke-dasharray: 7% 28%;
    stroke-dashoffset: 35%;
  }
}
</style>
