<template>
  <div>
    <tabbar>
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