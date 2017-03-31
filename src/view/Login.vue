<template>
  <div>
    <group title="请登录">
      <x-input title="姓名" name="username" placeholder="请输入用户名" v-model="username"></x-input>
      <x-input title="请输入密码" type="password" placeholder="请输入密码" v-model="password"></x-input>
    </group>

    <div style="padding:15px;">
      <x-button @click.native="login" type="primary"> 登 录 </x-button>

    </div>
  </div>
</template>

<script>

import Tabs from '@/components/Tabs'
import router from '@/router/index.js'
import { cookie, XInput, Group, XButton, Cell } from 'vux'

export default {
  created () {
    
  },
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login () {
      console.log('login')
      var params = {
        username: this.username,
        password: this.password
      }
      var that = this
      this.$http.post('http://localhost:3000/users/login', params)
        .then(function (res) {
          if(res.success){
            cookie.set('token', res.token, {
              expires: 1
            })
            router.push('/publish')
          }else {
            that.$vux.toast.show({
              text: res.message,
              type: 'warn',
              position: 'top'
            })
          }
          
          
        })
        .catch(function (error) {
          
        })
    }
  },
  components: {
    XInput,
    XButton,
    Cell,
    Group
  }
}
</script>
