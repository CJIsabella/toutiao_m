import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'
import 'vant/lib/index.css'
// 注：自己写的style样式要加到vant样式的后面
import './style/index.less'
import 'amfe-flexible'
import './style/iconfont.less'
import $api from '@/api'

Vue.use(Vant)
Vue.config.productionTip = false
Vue.prototype.$api = $api

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
