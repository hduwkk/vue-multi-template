<template>
  <div style="padding: 20px;">
    <!-- <svg class="box" width="310" height="310" viewBox="0 0 310 310">
      <ellipse cx="154" cy="154" rx="150" ry="120" style="fill: #999;" />
      <ellipse cx="152" cy="152" rx="150" ry="120" style="fill: #cceeff;" />
      <image xlink:href="./imgs/aa.jpeg" x="72" y="70" width="160" />
    </svg>
    <div class=" box" style="padding: 20px">
      <img class="clip center" src="./imgs/aa.jpeg" style="width: 160px;" alt="" />
      <img class="clip2 center" src="./imgs/aa.jpeg" style="width: 160px;" alt="" />
      <img class="clip3 center" src="./imgs/aa.jpeg" style="width: 160px;" alt="" />
    </div> -->
    <svg>
      <path style="fill: none; stroke: #000;" d="M 0 0, 60 0, 60 60, 0 60 Z M 15 15, 45 15, 45 45, 15 45Z" />
    </svg>
  </div>
</template>
<style lang="scss" scoped>
.center {
  margin: 0 auto;
  display: block;
}
.box {
  display: block;
  margin: 0 auto;
}

.clip {
  clip-path: circle(50%);
}
.clip2 {
  clip-path: ellipse(150px 120px at 10% 20%);
}
.clip3 {
  clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
}
</style>
