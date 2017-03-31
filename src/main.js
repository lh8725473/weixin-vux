// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import router from './router/index.js'
import App from './App'
import axios from 'axios'
import { cookie, AjaxPlugin, AlertPlugin, ToastPlugin } from 'vux'

Vue.use(AjaxPlugin)
Vue.use(AlertPlugin)
Vue.use(ToastPlugin)

FastClick.attach(document.body)

router.beforeEach((to, from, next) => {
  // console.log(to)
  // console.log(from)
  next()
})

// Add a request interceptor
axios.interceptors.request.use(function (request) {
  let token = cookie.get('token')
  if (token) {
    request.headers['x-access-token'] = token
  }
  // Do something before request is sent
  return request
}, function (error) {
  console.log(error)
  // Do something with request error
  return Promise.reject(error)
})

// 剖析数据
axios.interceptors.response.use(function (response) {
  // Do something with response data
  if (response.data.status === 403) {
    router.push('/login')
  }
  return response.data
}, function (error) {
  console.log(error.response.status)
  if (error.response.status === 403) {
    router.push('/login')
  }
  // return Promise.reject(error)
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
