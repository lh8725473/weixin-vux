<template>
  <div class="user">
    <transition :name="transitionName" mode="out-in">
      <router-view class="child-view"></router-view>
    </transition>
  </div>
</template>

<script>

import { Cell, Group } from 'vux'

export default {
	data () {
    return {
      transitionName: 'slide-left'
    }
  },
  watch: {
    '$route' (to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    }
  },
  components: {
    Cell,
    Group
  }
}
</script>
