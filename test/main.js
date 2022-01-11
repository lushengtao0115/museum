import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'

let echarts = require('echarts')
Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
Vue.prototype.$http = axios

new Vue({
  render: h => h(App),
}).$mount('#app')
