import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Vant from 'vant' // 加载 Vant 核心组件库
import 'vant/lib/index.css' // 加载 Vant 全局样式
import 'amfe-flexible' // 加载动态设置Rem基准值

import './styles/index.less' // 加载全局样式

Vue.use(Vant) // 注册使用 Vant 组件库

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
