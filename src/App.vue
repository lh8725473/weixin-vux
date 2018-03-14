<template>
  <div id="app" class="full-height" :class="{'no-tabs': !showTabs}">
    <view-box ref="viewBox">
      <transition :name="transitionName" mode="out-in">
        <router-view></router-view>
      </transition>
      <Tabs v-show="showTabs" slot="bottom"></Tabs>
    </view-box>
  </div>

</template>

<script type="text/babel">

import _ from 'lodash'
import Tabs from './components/Tabs'
import { ViewBox } from 'vux'
import { mapState, mapActions } from 'vuex'

const baseRouter = ['Home', 'Publish', 'Task', 'UserInfo']

export default {
  name: 'app',
  data () {
    return {
      transitionName: 'fade'
    }
  },
  beforeRouteEnter (to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当钩子执行前，组件实例还没被创建
    next(vm => {
      // 通过 `vm` 访问组件实例
      if (_.indexOf(baseRouter, to.name) > -1) {
        vm.showTabs = true
      } else {
        vm.showTabs = false
      }
      console.log(vm.showTabs)
    })
  },
  computed: {
    ...mapState({
      route: state => state.route
    }),
		showTabs () {
      return _.indexOf(baseRouter, this.route.name) > -1
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
