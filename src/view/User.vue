<template>
  <div class="user">
    <h2>
    	<router-link to="user/order-list">/parent/foo</router-link>
    </h2>
    <transition :name="transitionName">
	    <router-view class="child-view"></router-view>
	  </transition>
  </div>
</template>

<script>

export default {
	data () {
    return {
      transitionName: 'slide-left'
    }
  }
}
</script>
