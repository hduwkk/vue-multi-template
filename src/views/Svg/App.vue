<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<style>
html,
body {
  padding: 0;
  margin: 0;
  width: 100%;
  background: #e9e9e9;
}
body {
  margin: 0;
}
.grid {
  position: relative;
  box-sizing: border-box;
  width: 750px;
  height: 500px;
  margin: 0 auto;
  padding-top: 100px;
  padding-left: 100px;
  background-image: url('~@/components/Svg/imgs/grid.png');
}
.grid::before {
  content: '';
  pointer-events: none;
  box-sizing: border-box;
  border-left: 1px solid #7c7cea;
  position: absolute;
  top: 0;
  box-sizing: border-box;
  left: 100px;
  right: 0;
  height: 600px;
}
.grid::after {
  content: '';
  pointer-events: none;
  border-top: 1px solid #7c7cea;
  box-sizing: border-box;
  position: absolute;
  top: 100px;
  right: 0;
  left: 0;
  height: 500px;
}
</style>
