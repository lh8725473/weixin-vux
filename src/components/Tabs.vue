<template>
  <div>
    <tabbar>
      <tabbar-item :selected="route.path === '/home'" link="/home">
        <i slot="icon" class="icon iconfont mall-shouye"></i>
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item :selected="route.path === '/publish'" link="/publish">
        <i slot="icon" class="icon iconfont mall-fenlei"></i>
        <span slot="label">分类</span>
      </tabbar-item>
      <tabbar-item :selected="route.path === '/user'" link="/user">
        <i slot="icon" class="icon iconfont mall-wode"></i>
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vux'
import { mapState, mapActions } from 'vuex'

export default {
  components: {
    Tabbar,
    TabbarItem
  },
  computed: {
    ...mapState({
      route: state => state.route
    })
  }
}
</script>

<style lang="less" scope>
.vux-demo {
  text-align: center;
}
.logo {
  width: 100px;
  height: 100px
}
.weui-tabbar__icon{
  line-height: 27px;
}
</style>
