import Vue from 'vue'
import Router from 'vue-router'

const SvgIndex = () =>
  import(/* webpackChunkName: "SvgIndex" */ '@/components/Svg/index')

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'svgindex',
    component: SvgIndex
  }
]

const router = new Router({
  mode: 'hash',
  routes
})

export default router
