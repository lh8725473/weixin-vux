<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
	
</template>

<script>
import Tabs from './components/Tabs'

export default {
  name: 'app',
  data () {
    return {
      showTabs: true
    }
  },
  beforeRouteEnter (to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当钩子执行前，组件实例还没被创建
    next(vm => {
      // 通过 `vm` 访问组件实例
      if(to.name === 'UserInfo' || to.name === 'Publish' || to.name === 'Task'){
        vm.showTabs = true
      }else {
        vm.showTabs = false
      }
    })
  },
  // dynamically set transition based on route change
  watch: {
    '$route' (to, from) {
      if(to.name === 'UserInfo' || to.name === 'Publish' || to.name === 'Task'){
        this.showTabs = true
      }else {
        this.showTabs = false
      }
    }
  },
  components: {
    Tabs
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

body {
  background-color: #fbf9fe;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s ease;
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
.child-view {
  position: absolute;
  transition: all .5s cubic-bezier(.55,0,.1,1);
}
.slide-left-enter, .slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(30px, 0);
  transform: translate(30px, 0);
}
.slide-left-leave-active, .slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-30px, 0);
  transform: translate(-30px, 0);
}
</style>
