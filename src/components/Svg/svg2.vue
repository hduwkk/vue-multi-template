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
    </div>-->
    <!-- <svg>
      <path style="fill: none; stroke: #000;" d="M 0 0, 60 0, 60 60, 0 60 Z M 15 15, 45 15, 45 45, 15 45Z" />
    </svg>-->
    <svg width="188" height="188" viewBox="0 0 188 188">
      <defs>
        <linearGradient
          id="linear-g0"
          x1="94"
          y1="40.02"
          x2="94"
          y2="86.22"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#6edaff" />
          <stop offset="1" stop-color="#4291cc" />
        </linearGradient>
        <linearGradient
          id="linear-fire"
          x1="94"
          y1="115.05"
          x2="94"
          y2="150.15"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#ffd7a3" />
          <stop offset="1" stop-color="#ff9d5a" />
        </linearGradient>
        <linearGradient
          id="linear-fire-inner"
          x1="94"
          y1="109.89"
          x2="94"
          y2="130.77"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#ffd" />
          <stop offset="1" stop-color="#ffda88" />
        </linearGradient>
      </defs>
          <path id="left-wing" d="M81.91 109.21a16.12 16.12 0 1 0-32.24 0v22.91z" />
          <path id="right-wing" d="M106.09 109.21a16.12 16.12 0 1 1 32.24 0v22.91z" />
          <path
            id="robot-head"
            d="M94 34.7S69.95 47.47 69.95 85.76v2.8a21.28 21.28 0 0 1 16.59 19.25 1.62 1.62 0 0 0 1.62 1.51h11.7a1.62 1.62 0 0 0 1.62-1.51 21.28 21.28 0 0 1 16.59-19.25v-2.8C118.05 47.47 94 34.7 94 34.7zM94 72a9.16 9.16 0 1 1 9.16-9.16A9.16 9.16 0 0 1 94 72z"
          />
          <path
            d="M103.35 116.86a16.62 16.62 0 0 0-18.7 0c-3.52 2.42-6.69 6.57-6.69 13.7 0 16 16 28.47 16 28.47s16-12.44 16-28.47c.04-7.13-3.09-11.29-6.61-13.7z"
            id="fire"
          />
          <path
            d="M98.86 118.07a8.63 8.63 0 0 0-9.71 0 8.08 8.08 0 0 0-3.47 7.11C85.67 133.52 94 140 94 140s8.33-6.46 8.33-14.79a8.08 8.08 0 0 0-3.47-7.14z"
            id="fire-inner"
          />
    </svg>
  </div>
</template>
<style>
#robot-head {
  fill: url(#linear-g0);
}
#left-wing,
#right-wing {
  fill: #4291cc;
}
#fire {
  fill: url(#linear-fire);
}
#fire-inner {
  fill: url(#linear-fire-inner);
}
</style>
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
