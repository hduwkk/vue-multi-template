import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'flexboxgrid/dist/flexboxgrid.min.css'
Vue.config.productionTip = false

console.log(process.env.VUE_APP_MODE_ENV, 'env .. ..')
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
