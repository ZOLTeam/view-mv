// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Vuex from 'vuex'
import store from './store'
import echarts from 'echarts'
Vue.prototype.$echarts = echarts
// import ECharts from 'vue-echarts'
// Vue.component('v-chart', ECharts)
// Vue.prototype.echartsResize = function (ref) {
//   setInterval(() => {
//     window.onresize = function () {
//       ref.resize()
//     }
//   }, 100)
// }
Vue.use(ElementUI)
Vue.use(Vuex)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})
