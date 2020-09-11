import Vue from 'vue'
import Router from 'vue-router'

const SvgIndex = () =>
  import(/* webpackChunkName: "SvgIndex" */ '@/components/Svg/index')
const Svg2 = () =>
  import(/* webpackChunkName: "Svg2" */ '@/components/Svg/svg2')
const Svg3 = () => import(/* webpackChunkName: "Svg3" */ '@/components/Svg/s3')
Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'svgindex',
    component: SvgIndex
  },
  {
    path: '/s2',
    component: Svg2
  },
  {
    path: '/s3',
    component: Svg3
  }
]

const router = new Router({
  mode: 'hash',
  routes
})

export default router
