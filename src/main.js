import Vue from 'vue'
import App from './App.vue'
// 导入全局样式
import './assets/css/global.css'
// 导入element插件
import './plugins/element.js'
// 导入路由
import router from './router'
// 导入echarts插件
// import echarts from 'echarts'
import * as echarts from 'echarts'
import Axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
Vue.prototype.$http = Axios

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
