<template>
  <div class="container">
    <div>视图</div>
    <div style="overflow: hidden;">
      1.
      <svg class="fl" width="120" height="120" viewBox="0 0 120 120">
        <rect x="0" y="0" width="100" height="100" />
      </svg>
      <svg class="fl" width="100" height="100" viewBox="0 0 120 120">
        <rect x="0" y="0" width="100" height="100" />
      </svg>
      <svg class="fl" width="160" height="160" viewBox="0 0 120 120">
        <rect x="0" y="0" width="100" height="100" />
      </svg>
    </div>
    <hr />
    <div style="overflow: hidden;">
      2.
      <svg class="fl" width="200" height="120" viewBox="0 0 120 120">
        <rect x="0" y="0" width="100" height="100" />
      </svg>
      <svg
        class="fl"
        width="200"
        height="120"
        viewBox="0 0 120 120"
        preserveAspectRatio="xMinYMin meet"
      >
        <rect x="0" y="0" width="100" height="100" />
      </svg>
      <svg
        class="fl"
        width="200"
        height="120"
        viewBox="0 0 120 120"
        preserveAspectRatio="xMidYMid meet"
      >
        <rect x="0" y="0" width="100" height="100" />
      </svg>
      <svg
        class="fl"
        width="200"
        height="120"
        viewBox="0 0 120 120"
        preserveAspectRatio="xMaxYMax meet"
      >
        <rect x="0" y="0" width="100" height="100" />
      </svg>
    </div>
    <hr />
    <div style="overflow: hidden;">
      3.
      <svg class="fl" width="120" height="200" viewBox="0 0 120 120">
        <rect x="0" y="0" width="100" height="120" />
      </svg>
      <svg
        class="fl"
        width="120"
        height="200"
        viewBox="0 0 120 120"
        preserveAspectRatio="xMinYMin meet"
      >
        <rect x="0" y="0" width="100" height="120" />
      </svg>
      <svg
        class="fl"
        width="120"
        height="200"
        viewBox="0 0 120 120"
        preserveAspectRatio="xMinYMid meet"
      >
        <rect x="0" y="0" width="100" height="120" />
      </svg>
      <svg
        class="fl"
        width="120"
        height="200"
        viewBox="0 0 120 120"
        preserveAspectRatio="xMaxYMax meet"
      >
        <rect x="0" y="0" width="100" height="120" />
      </svg>
    </div>
    <hr />
    <div style="overflow: hidden;">
      4. slice
      <svg class="fl" width="120" height="120" viewBox="0 0 120 120">
        <circle cx="60" cy="60" r="50" fill="#000" />
      </svg>
      <svg
        class="fl"
        width="40"
        height="120"
        viewBox="0 0 120 120"
        preserveAspectRatio="xMinYMin slice"
      >
        <circle cx="60" cy="60" r="50" fill="#000" />
      </svg>
      <svg
        class="fl"
        width="40"
        height="120"
        viewBox="0 0 120 120"
        preserveAspectRatio="xMidYMid slice"
      >
        <circle cx="60" cy="60" r="50" fill="#000" />
      </svg>
      <svg
        class="fl"
        width="40"
        height="120"
        viewBox="0 0 120 120"
        preserveAspectRatio="xMaxYMax slice"
      >
        <circle cx="60" cy="60" r="50" fill="#000" />
      </svg>
      none
      <svg
        class="fl"
        width="40"
        height="120"
        viewBox="0 0 120 120"
        preserveAspectRatio="none"
      >
        <circle cx="60" cy="60" r="50" fill="#000" />
      </svg>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.container {
  padding: 10px;
  background-color: #fff;
  min-height: 100vh;
}
svg {
  background-color: #eee;
}
.fl {
  display: inline-block;
  margin-left: 10px;
}
</style>
