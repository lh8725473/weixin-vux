<template>
  <div class="user">
    <transition name="fade" mode="out-in">
	    <router-view></router-view>
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
  components: {
    Cell,
    Group
  }
}
</script>
