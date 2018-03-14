<template>
  <div>
    <group title="注册">
      <x-input title="用户名" v-model="username" name="username" placeholder="请输入用户名" required></x-input> 
      <x-input title="密码" v-model="password" name="password" placeholder="请输入密码" required></x-input> 
      <x-input title="手机号码" v-model="phone" name="mobile" placeholder="请输入手机号码" keyboard="number" is-type="china-mobile" required></x-input>
      <x-input title="发送验证码" v-model="code" class="weui-vcode" required>
        <x-button slot="right" type="primary" mini @click.native='sendCode()' :disabled="flag == true">{{time | change}}</x-button>
      </x-input>
    </group>

    <div style="padding:15px;">
      <x-button @click.native="signUp()" type="primary"> 注册 </x-button>
    </div>
  </div>
</template>

<script>
import router from '@/router/index.js'
import userService from '@/api/user.js'
import { cookie, XInput, Group, XButton, Cell } from 'vux'

export default {
  created () {
    
  },
  data () {
    return {
      username: '',
      password: '',
      phone: '',
      code: '',
      flag: false,
      time: '获取验证码'
    }
  },
  methods: {
    countDown () {
      var that = this
      that.flag = true
      this.time = 60;
      let timeInterval = setInterval(()=>{
        this.time --
        if(this.time == 0){
          this.time = '获取验证码'
          console.log(that.flag)
          that.flag = false
          clearInterval(timeInterval)
        }
      },1000)
    },
    sendCode() {
      if(!this.phone){
        this.$vux.alert.show({
          content: '请输入手机号',
          onShow () {
            console.log('Plugin: I\'m showing')
          },
          onHide () {
            console.log('Plugin: I\'m hiding now')
          }
        })
        return
      }
      userService.getVerificationCode({phone: this.phone})
        .then(response => {
          console.log(response)
          this.countDown()
        })
        .catch(error => {
          console.log(response)
        })
    }
    ,
    signUp() {
      var user = {
        username: this.username,
        password: this.password,
        phone: this.phone,
        code: this.code
      }
      userService.signUp(user)
        .then(response => {
          console.log(response)
          this.$vux.alert.show({
            content: '注册成功',
            onShow () {
              console.log('Plugin: I\'m showing')
            },
            onHide () {
              router.push('/login')
            }
          })
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  filters : {
    change (value) {
     if(!value) return ""
     if(!isNaN(value)){
       return value+'S后重发'
     }else{
       return value
     }
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
