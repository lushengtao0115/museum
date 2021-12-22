import Vue from 'vue'
import App from './App.vue'
// 导入全局样式
import './assets/css/global.css'
// 导入element插件
import './plugins/element.js'
// 导入路由
import router from './router'
// import less from 'less'
// Vue.use(less)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
