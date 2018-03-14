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
import userService from '@/api/user.js'
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
      userService.login(params)
        .then(response => {
          console.log(response)
          cookie.set('token', response.token, {
            expires: 1
          })
          router.push('/publish')
        })
        .catch(error => {
          console.log('_______________')
          console.log(error)
          // this.$vux.toast.show({
          //   text: error.message,
          //   type: 'warn',
          //   position: 'top'
          // })
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
