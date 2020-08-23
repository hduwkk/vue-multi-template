import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
function cc() {
  return 1
}
console.log(cc, 'cc')
new Vue({
  render: h => h(App)
}).$mount('#app')
