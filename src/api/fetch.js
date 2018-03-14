import axios from 'axios'
import Vue from 'vue'
// import Cookies from 'js-cookie'
// import { Message } from 'element-ui'
// import store from '.././store'

// 创建axios实例
const service = axios.create({
  baseURL: 'http://localhost:3000/', // api的base_url
  timeout: 10000                  // 请求超时时间
})

// request拦截器
service.interceptors.request.use(config => {
  // Do something before request is sent
  // console.log(store.state.user.userName)
  // var token = Cookies.get('token')
  // if (token) {
  //   config.data.token = token
  // }
  return config
}, error => {
  // Do something with request error
  console.log(error) // for debug
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
  response => {
    return response.data
    // if (response.data.success) {
    //   return response.data
    // } else {
    //   return Promise.reject(response.data)
    // }
  },
  error => {
    console.log('err' + error)// for debug
    Vue.$vux.toast.show({
      text: error.response.data.message,
      type: 'warn',
      position: 'top'
    })
    // Vue.$vux.alert.show({
    //   title: 'Vux is Cool',
    //   content: error.response.data.message,
    //   onShow () {
    //     console.log('Plugin: I\'m showing')
    //   },
    //   onHide () {
    //     console.log('Plugin: I\'m hiding')
    //   }
    // })
    return Promise.reject(error)
  }
)

export default service
