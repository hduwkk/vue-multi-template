<template>
  <div>
    <svg>
      <path fill="none" stroke="#000" d="M50,125 C 100,25 150,225, 200, 125" />
      <polygon points="15 0, 30 30, 0 30">
        <animateMotion
          path="M50,125 C 100,25 150,225, 200, 125"
          dur="6s"
          fill="freeze"
        />
      </polygon>
    </svg>
    <svg>
      <path fill="none" stroke="#000" d="M50,125 C 100,25 150,225, 200, 125" />
      <rect x="0" y="0" width="30" height="30" style="fill: #ccc;">
        <animateMotion
          path="M50,125 C 100,25 150,225, 200, 125"
          dur="6s"
          fill="freeze"
        />
      </rect>
    </svg>
    <svg>
      <path
        d="M10,110 A120,120 -45 0,1 110 10 A120,120 -45 0,1 10,110"
        stroke="lightgrey"
        stroke-width="2"
        fill="none"
        id="theMotionPath"
      />
      <circle cx="10" cy="110" r="3" fill="lightgrey" />
      <circle cx="110" cy="10" r="3" fill="lightgrey" />

      <circle r="5" fill="red">
        <!-- Define the motion path animation -->
        <animateMotion dur="6s" repeatCount="indefinite">
          <mpath xlink:href="#theMotionPath" />
        </animateMotion>
      </circle>
    </svg>
    <svg>
      <path
        id="cc"
        d="M50 125,C100,25 150,225 200,125"
        style="fill:none;stroke: blue;"
      />
      <path d="M-10,-3 L10,-3 L0,-25z" style="fill:yellow;stroke: red;">
        <animateMotion dur="6s" rotate="auto" fill="freeze">
          <mpath xlink:href="#cc" />
        </animateMotion>
      </path>
    </svg>
  </div>
</template>
<style scoped>
svg {
  width: 300px;
  height: 200px;
  background-color: #fff;
  margin-right: 10px;
}
</style>
