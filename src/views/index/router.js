import Vue from 'vue'
import Router from 'vue-router'

const Broder1px = () =>
  import(/* webpackChunkName: "Broder1px" */ '@/components/main/index')

const Text = () =>
  import(/* webpackChunkName: "Text" */ '@/components/main/text')

Vue.use(Router)

const routes = [
  {
    path: '/1px',
    name: 'border1px',
    // component: require('@/components/main/index').default
    component: Broder1px
  },
  {
    path: '/text',
    name: 'text',
    // component: require('@/components/main/text').default
    component: Text
  }
]

console.log('router base', process.env.BASE_URL)
const router = new Router({
  mode: 'hash',
  // base: process.env.BASE_URL,
  routes
})

export default router
