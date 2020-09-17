import Vue from 'vue'
import Router from 'vue-router'

const SvgIndex = () =>
  import(/* webpackChunkName: "SvgIndex" */ '@/components/Svg/index')
const Svg2 = () =>
  import(/* webpackChunkName: "Svg2" */ '@/components/Svg/svg2')
const Svg3 = () => import(/* webpackChunkName: "Svg3" */ '@/components/Svg/s3')
const S1 = () => import(/* webpackChunkName: "S1" */ '@/components/Svg/s1')
const Path = () =>
  import(/* webpackChunkName: "spath" */ '@/components/Svg/path')
const Ratio = () =>
  import(/* webpackChunkName: "ratio" */ '@/components/Svg/ratio')
const Group = () =>
  import(/* webpackChunkName: "Group" */ '@/components/Svg/group')
const Anime0 = () =>
  import(/* webpackChunkName: "Anime0" */ '@/components/Svg/anime-0')
const Anime1 = () =>
  import(/* webpackChunkName: "Anime1" */ '@/components/Svg/anime-1')
Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'svgindex',
    component: SvgIndex
  },
  {
    path: '/ratio',
    component: Ratio
  },
  {
    path: '/group',
    component: Group
  },
  {
    path: '/anime0',
    component: Anime0
  },
  {
    path: '/anime1',
    component: Anime1
  },
  {
    path: '/s2',
    component: Svg2
  },
  {
    path: '/s3',
    component: Svg3
  },
  {
    path: '/s1',
    component: S1
  },
  {
    path: '/path',
    component: Path
  }
]

const router = new Router({
  mode: 'hash',
  routes
})

export default router
