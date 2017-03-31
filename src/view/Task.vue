<template>
  <div>
    <h1>task</h1>
    <Tabs></Tabs>
  </div>
</template>

<script>

import Tabs from '@/components/Tabs'

export default {
  created () {
    this.$http.get('http://localhost:3000/users/user-list?limit=3&page=1&keyword=abcd&token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE0OTA4Njc2MjIsImRhdGEiOnsidXNlcm5hbWUiOiJsaXVoYW8xMjMiLCJwYXNzd29yZCI6IjEyMzQ1NiJ9LCJpYXQiOjE0OTA4NjQwMjJ9.pnZZnULNLavEKpBYc-8fInIEGgbvrlTVA6KYDS3zJVY')
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
    Tabs
  }
}
</script>
