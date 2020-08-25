<template>
  <div>
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
  data() {
    return {
      isAndroid: /Android[\s/][\d/]+/.test(ua),
      isIOS: /(iPhone|iPad|iPod)/.test(ua)
    }
  },
  computed: {
    phoneType() {
      return this.isAndroid ? '安卓' : this.isIOS ? '苹果' : ''
    }
  }
}
</script>
<style lang="scss">
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
