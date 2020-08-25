import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  {
    path: '/1px',
    name: 'border1px',
    component: require('@/components/main/index').default
  },
  {
    path: '/text',
    name: 'text',
    component: require('@/components/main/text').default
  }
]

console.log('router base', process.env.BASE_URL)
const router = new Router({
  mode: 'hash',
  // base: process.env.BASE_URL,
  routes
})

export default router
