<template>
  <div id="app" class="full-height" :class="{'no-tabs': showTabs}">
    <transition :name="transitionName" mode="out-in">
      <router-view></router-view>
    </transition>
    <Tabs v-show="showTabs"></Tabs>
  </div>

</template>

<script>

import _ from 'lodash'
import Tabs from './components/Tabs'
import { ViewBox } from 'vux'

const baseRouter = ['Home', 'Publish', 'Task', 'UserInfo']

export default {
  name: 'app',
  data () {
    return {
      showTabs: true,
      transitionName: 'fade'
    }
  },
  beforeRouteEnter (to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当钩子执行前，组件实例还没被创建
    next(vm => {
      // 通过 `vm` 访问组件实例
      if(_.indexOf(baseRouter, to.name) > -1){
        vm.showTabs = true
      }else {
        vm.showTabs = false
      }
      console.log('beforeRouteEnter')
      console.log(vm.showTabs)
    })
  },
  // dynamically set transition based on route change
  watch: {
    '$route' (to, from) {
      if(_.indexOf(baseRouter, to.name) > -1){
        this.showTabs = true
      }else {
        this.showTabs = false
      }
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
      if(_.indexOf(baseRouter, to.name) > -1 && _.indexOf(baseRouter, from.name)> -1){
        this.transitionName = 'fade'
      }
    }
  },
  components: {
    Tabs,
    ViewBox
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
@import '~nprogress/nprogress.css';

html, body {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
}

body {
  background-color: #fbf9fe;
}

.full-height{
  height: 100%;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s ease;
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
.child-view {
  transition: all .5s cubic-bezier(0,0,.1,1);
}
.slide-left-enter, .slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(100px, 0);
  transform: translate(100px, 0);
}
.slide-left-leave-active, .slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-100px, 0);
  transform: translate(-100px, 0);
}
.no-tabs{
  .weui-tab{
    .weui-tab__panel{
      padding-bottom: 0;
    }
  }
}
</style>
