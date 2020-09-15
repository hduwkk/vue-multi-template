<template>
  <div>
    <svg class="s1" width="700" height="700" viewBox="0 0 400 400"
      xmlns="http://www.w3.org/2000/svg">
      <line x1="50" y1="10" x2="250" y2="10" />
      <line stroke-dasharray="10%" x1="0" y1="20" x2="500" y2="20" />
      <def>
        <text id="text0" x="30" y="100">
          我你爹
        </text>
      </def>
      <g id="bbq">
        <use class="text ta" xlink:href="#text0" />
        <use class="text tb" xlink:href="#text0" />
        <use class="text tc" xlink:href="#text0" />
        <use class="text td" xlink:href="#text0" />
        <use class="text te" xlink:href="#text0" />
      </g>
      <!-- <use xlink:href="#bbq" x="30" y="100" /> -->
    </svg>
  </div>
</template>
<script>
export default {
  data() {
    return {
      offset: 942.4777
    }
  },
  created() {
    window.cc = this
  }
}
</script>
<style>
html,
body {
  background-color: #fff;
}
.s1 {
  stroke-width: 1px;
  fill: none;
  background-color: #eee;
}
line {
  stroke: black;
  stroke-width: 2;
}

.text {
  font-size: 100px;
  font-family: cursive;
  fill: none;
  stroke: white;
  stroke-dashoffset: 0;
  stroke-dasharray: 0 100%;
  stroke-width: 2px;
}
.ta {
  stroke: #360745;
  stroke-dasharray: 10px 40px;
}
.tb {
  stroke: #d61c59;
  stroke-dasharray: 10px 40px;
  stroke-dashoffset: 10px;
}
.tc {
  stroke: #e7d84b;
  stroke-dasharray: 10px 40px;
  stroke-dashoffset: 20px;
}
.td {
  stroke: #efeac5;
  stroke-dasharray: 10px 40px;
  stroke-dashoffset: 30px;
}
.te {
  stroke: #1b8798;
  stroke-dasharray: 10px 40px;
  stroke-dashoffset: 40px;
}
@keyframes abc {
  50%,
  70% {
    stroke-dasharray: 10 10;
    stroke-dashoffset: 10;
  }
}
</style>
