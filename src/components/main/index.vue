<template>
  <div style="width: 160px; margin: 0 auto;">
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
    <h3>像素比: {{ radio }}</h3>
    <div class="button btn-border">四条边</div>
    <br />
    <div class="button btn-border-top">上</div>
    <br />
    <div class="button btn-border-right">右边</div>
    <br />
    <div class="button btn-border-bottom">下边</div>
    <br />
    <div class="button btn-border-left">左边</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      radio: window.devicePixelRatio
    }
  }
}
</script>
<style lang="scss">
$borderColor: #666;
$color: #666;
.button {
  box-sizing: border-box;
  text-align: center;
  display: block;
  padding: 8px;
  min-width: 100px;
  font-size: 16px;
  line-height: 1;
  color: $color;
  border: 1px solid $borderColor;
  background-color: #fff;
  border-radius: 2px;
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
    border-radius: 2px;
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

.btn-border {
  position: relative;
  border: none;
  @media (min-device-pixel-ratio: 2), (min-resolution: 2dppx) {
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
      border-radius: 2px;
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

  @media (min-device-pixel-ratio: 3), (min-resolution: 3dppx) {
    &::before {
      content: '';
      position: absolute;
      width: 300%;
      height: 300%;
      border: 1px solid $borderColor;
      transform: scale(0.333333, 0.333333);
      left: 0;
      top: 0;
      transform-origin: left top;
      border-radius: 2px;
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
        width: 300%;
        transform: scale(0.333333);
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
        width: 300%;
        transform: scale(0.333333, 0.333333);
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
        height: 300%;
        transform: scale(0.333333);
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
        height: 300%;
        transform: scale(0.333333);
        transform-origin: 0 0;
      }
    }
  }
}
</style>
