<template>
  <div id="app">
    <h1>1px</h1>
    <div class="button">origin</div>
    <div class="button border-bottom">origin-bottom</div>
    <br />
    <div class="button border1px">全部200%</div>
    <br />
    <div class="button border1px-top">上</div>
    <br />
    <div class="button border1px-right">右边</div>
    <br />
    <div class="button border1px-bottom">下边</div>
    <br />
    <div class="button border1px-left">左边</div>

    <h1>文字</h1>
    <p>你的手机是{{ phoneType }}</p>
    <div class="row middle-xs between-xs" style="margin-bottom: 4px;">
      <div class="tag" style="font-size: 11px;">直播11</div>
      <div class="tag" style="font-size: 12px;">直播12</div>
      <div class="tag" style="font-size: 12.5px;">直播12.5</div>
      <div class="tag" style="font-size: 13px;">直播13</div>
    </div>
    <div class="row middle-xs between-xs">
      <div class="tag tag-zh" style="font-size: 11px;">直播11</div>
      <div class="tag tag-zh" style="font-size: 12px;">直播12</div>
      <div class="tag tag-zh" style="font-size: 12.5px;">直播12.5</div>
      <div class="tag tag-zh" style="font-size: 13px;">直播13</div>
    </div>
  </div>
</template>
<script>
const ua = window.navigator.userAgent
export default {
  data () {
    return {
      isAndroid: /Android[\s/][\d/]+/.test(ua),
      isIOS: /(iPhone|iPad|iPod)/.test(ua)
    }
  },
  computed: {
    phoneType () {
      return this.isAndroid ? '安卓' : this.isIOS ? '苹果' : ''
    }
  }
}
</script>
<style lang="scss">
$borderColor: #040ca3;
html,
body {
  padding: 0;
  margin: 0;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
}
h1 {
  font-size: 24px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 40px 20px;
}
.button {
  box-sizing: border-box;
  text-align: center;
  display: inline-block;
  padding: 4px 10px;
  min-width: 100px;
  font-size: 16px;
  line-height: 20px;
  color: $borderColor;
  border: 1px solid $borderColor;
  background-color: #fff;
  border-radius: 4px;
  margin: 0 auto 8px;
}
.border-bottom {
  border-width: 0;
  border-bottom: 1px solid $borderColor;
  border-radius: 0;
  margin-left: 1em;
}
.border1px {
  position: relative;
  border: none;
  &::before {
    content: '';
    position: absolute;
    width: 200%;
    height: 200%;
    border: 1px solid $borderColor;
    transform: scale(0.5, 0.5);
    left: 0;
    top: 0;
    transform-origin: left top;
    border-radius: 4px;
  }
  &-bottom {
    position: relative;
    border: none;
    &:after {
      content: '';
      position: absolute;
      border-bottom: 1px solid $borderColor;
      left: 0;
      bottom: 0;
      width: 200%;
      transform: scale(0.5);
      transform-origin: 0 bottom;
    }
  }
  &-top {
    position: relative;
    border: none;
    &:after {
      content: '';
      position: absolute;
      border-top: 1px solid $borderColor;
      left: 0;
      top: 0;
      width: 200%;
      transform: scale(0.5, 0.5);
      transform-origin: 0 top;
    }
  }
  &-right {
    position: relative;
    border: none;
    &:after {
      content: '';
      position: absolute;
      border-right: 1px solid $borderColor;
      right: 0;
      top: 0;
      height: 200%;
      transform: scale(0.5);
      transform-origin: 0 0;
    }
  }
  &-left {
    position: relative;
    border: none;
    &:after {
      content: '';
      position: absolute;
      border-left: 1px solid $borderColor;
      left: 0;
      top: 0;
      height: 200%;
      transform: scale(0.5);
      transform-origin: 0 0;
    }
  }
}

.tag {
  font-family: 'PingFang SC', Avenir, Helvetica, Arial, sans-serif;
  width: 60px;
  background-color: #396ce0;
  color: #fff;
  line-height: 1.4;
}
.tag-zh {
  font-family: miui, '黑体', 'PingFang SC', Avenir, Helvetica, Arial, sans-serif;
}
</style>
