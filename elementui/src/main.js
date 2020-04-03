import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './assets/css/global.css'
import './assets/css/icon.css'

import axios from 'axios'
//配置请求根路径
// axios.default.baseURL='192.168'
//对请求进行处理
// axios.interceptors.request.use(config=>{
// 	console.log(config)
// 	config.headers.Authorization =window.sessionStorage.getItem('token')
// 	return config
// })
// Vue.prototype.$http =axios

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
