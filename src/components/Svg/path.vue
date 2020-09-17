<template>
  <div class="grid">
    <svg width="375" height="375" viewBox="0 0 375 375">
      <path d="M30 30, h 30 v 30 h-30 v-30" />
      <!-- https://developer.mozilla.org/zh-CN/docs/Web/SVG/Tutorial/Paths -->
      <!-- <path d="M100 100 a 10 10 0 0 0 10 10" stroke="#000" /> -->
      <path
        d="M75 30 l 20 0, a 5 5 0 0 1 5 5, l 0 20 a 5 5 0 0 1 -5 5 l -20 0 a 5 5 0 0 1 -5 -5 v-20  a 5 5 0 0 1 5 -5 "
        fill="#000"
      />
      <!-- 圆 -->
      <path d="M20 120 A 50 50 0 0 1 120 120" fill="#fff" />
      <path d="M20 120 A 50 50 0 0 0 120 120" fill="#fff" />
      <!-- 椭圆 -->
      <path
        fill="#fff"
        d="M 150 120 A 50 25 0 0 0 250 120 A 50 25 0 0 0 150 120"
      />
      <!-- 线段 -->
      <path d="M10 200, 310 200" stroke="#000" stroke-width="1" />
      <!-- 折线 -->
      <path
        fill="none"
        stroke="#000"
        stroke-width="1"
        d="M210 210 L 240 210, 260 260, 300 210"
      />
      <!-- 多边形 -->
      <path
        fill="none"
        stroke="#000"
        d="M50 210, 100 210, 110 230, 80 230, 60 250z"
      />
      <!-- <rect x="30" y="30" width="30" height="30" />
      <rect x="70" y="30" rx="10" ry="10" width="30" height="30" />
      <circle cx="70" cy="120" r="50" fill="#fff"></circle>
      <ellipse cx="200" cy="120" rx="50" ry="25" fill="#fff" />
      <line x1="10" x2="310" y1="200" y2="200" stroke="#000" stroke-width="1" />
      <polyline fill="none" stroke="#000" points="210 210, 240 210, 260 260, 300 210" />
      <polygon fill="none" stroke="#000" points="50 210, 100 210, 110 230, 80 230, 60 250" /> -->
    </svg>
  </div>
</template>
<style></style>
