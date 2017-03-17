<template>
  <div id="app">
    <router-view></router-view>
    <Tabs></Tabs>
  </div>
	
</template>

<script>
import Tabs from './components/Tabs'

export default {
  name: 'app',
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
</style>
