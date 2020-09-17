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
