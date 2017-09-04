// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import { sync } from 'vuex-router-sync'
import router from './router/index.js'
import * as filters from './filters' // 全局vue filter
import store from './store/store.js' // 全局vue vuex
import App from './App'
import axios from 'axios'
import NProgress from 'nprogress'
import infiniteScroll from 'vue-infinite-scroll'
import './assets/icon-font/iconfont.css'


import { cookie, AjaxPlugin, AlertPlugin, ToastPlugin } from 'vux'

Vue.use(infiniteScroll)
Vue.use(AjaxPlugin)
Vue.use(AlertPlugin)
Vue.use(ToastPlugin)

NProgress.configure({ showSpinner: false }) // 进度条配置
FastClick.attach(document.body)

router.beforeEach((to, from, next) => {
  // console.log(to)
  // console.log(from)
  NProgress.start()
  next()
})

// 注册全局过滤器
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

router.afterEach(transition => {
  NProgress.done()
})

// 同步router变量
sync(store, router)

axios.defaults.baseURL = 'http://localhost:3000/'
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
  if (response.data.status) {
    if (response.data.status === 403) {
      router.push('/login')
    }
  } else if (!response.data.success) {
    return Promise.reject(response.data)
  }
  return response.data
}, function (error) {
  console.log(error)
  if (error.response.status === 403) {
    router.push('/login')
  }
  return Promise.reject(error)
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')
