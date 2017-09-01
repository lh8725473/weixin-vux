<template>
  <div>
    <tabbar>
      <tabbar-item link="/home">
        <i slot="icon" class="icon wechart-icon icon-check"></i>
        <span slot="label">Home</span>
      </tabbar-item>
      <tabbar-item link="/publish">
        <img slot="icon" src="../assets/logo.png">
        <span slot="label">Wechat</span>
      </tabbar-item>
      <tabbar-item link="/task">
        <img slot="icon" src="../assets/logo.png">
        <span slot="label">Message</span>
      </tabbar-item>
      <tabbar-item selected link="/user/info">
        <img slot="icon" src="../assets/logo.png">
        <span slot="label">Explore</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vux'

export default {
  components: {
    Tabbar,
    TabbarItem
  },
  watch: {
    '$route' (to, from) {
      console.log(to)
      console.log(from)
    }
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
