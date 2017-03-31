<template>
  <div>
    <group title="use is-link to show arrow">
      <cell title="order-list" link="/user/order-list" is-link></cell>
      <cell title="task-list" link="/user/task-list" is-link></cell>
    </group>
    <Tabs></Tabs>
  </div>
</template>

<script>

import Tabs from '@/components/Tabs'
import { Cell, Group } from 'vux'

export default {
  created () {
    this.$http.get('http://localhost:3000/users/user-list?limit=3&page=1&keyword=abcd')
      .then(function (response) {
        console.log(response)
      })
  },
  data () {
    return {
      showMain: true
    }
  },
  components: {
    Cell,
    Group,
    Tabs
  }
}
</script>
