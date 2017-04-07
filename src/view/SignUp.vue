<template>
  <div>
    <group title="注册"> 
      <x-input title="手机号码" v-model="tel" name="mobile" placeholder="请输入手机号码" keyboard="number" is-type="china-mobile"></x-input>
      <x-input title="发送验证码" v-model="code" class="weui-vcode">
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
import { cookie, XInput, Group, XButton, Cell } from 'vux'

export default {
  created () {
    
  },
  data () {
    return {
      flag: false,
      tel: '',
      code: '',
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
      this.countDown()
    }
    ,
    signUp() {
      console.log('signUp')
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
