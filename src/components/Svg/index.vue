<template>
  <div class="grid">
    <svg width="200" height="250" viewBox="0 0 64 80">
      <rect x="10" y="35" width="40" height="40"></rect>
      <polyline points="10 35, 30 10, 50 35" />
      <polyline points="25 75, 25 60, 35 60, 35 75" />
    </svg>
    <svg class="color-blue" width="200" height="250" viewBox="0 0 80 80">
      <rect x="10" y="35" width="40" height="40"></rect>
      <polyline points="10 35, 30 10, 50 35" />
      <polyline points="25 75, 25 60, 35 60, 35 75" />
    </svg>
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
  width: 100px;
  height: 100px;
  border: 1px solid #000;
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
