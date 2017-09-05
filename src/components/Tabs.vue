<template>
  <div>
    <tabbar>
      <tabbar-item :selected="route.path === '/home'" link="/home">
        <i slot="icon" class="icon wechart-icon icon-check"></i>
        <span slot="label">Home</span>
      </tabbar-item>
      <tabbar-item :selected="route.path === '/publish'" link="/publish">
        <img slot="icon" src="../assets/logo.png">
        <span slot="label">Publish</span>
      </tabbar-item>
      <tabbar-item :selected="route.path === '/task'" link="/task">
        <img slot="icon" src="../assets/logo.png">
        <span slot="label">Task</span>
      </tabbar-item>
      <tabbar-item :selected="route.path === '/user/info'" link="/user">
        <img slot="icon" src="../assets/logo.png">
        <span slot="label">User</span>
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
</style>
