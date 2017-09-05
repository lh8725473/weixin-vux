<template>
  <div class="full-height">
    <view-box ref="viewBox">
      <scroller lock-x scrollbar-y use-pullup height='100%' @on-pullup-loading="loadMore" ref="scroller" v-model="demo4Value">
        <div class="box2">
          <p v-for="address in addressList">{{address._id}}</p>
        </div>
        <!--pullup slot-->
        <div slot="pullup" class="xs-plugin-pullup-container xs-plugin-pullup-up" style="position: absolute; width: 100%; height: 40px; bottom: -40px; text-align: center;">
          <span v-show="demo4Value.pullupStatus === 'default'"></span>
          <span class="pullup-arrow" v-show="demo4Value.pullupStatus === 'default' || demo4Value.pullupStatus === 'up' || demo4Value.pullupStatus === 'down'" :class="{'rotate': demo4Value.pullupStatus === 'down'}">↑</span>
          <span v-show="demo4Value.pullupStatus === 'loading'"><spinner type="ios-small"></spinner></span>
        </div>
      </scroller>
      <Tabs></Tabs>
    </view-box>
  </div>
</template>

<script>
import { ViewBox, Scroller, Divider, Spinner, XButton, Group, Cell } from 'vux'
import Tabs from '@/components/Tabs'
import _ from 'lodash'

export default {
  created () {
    var that = this
    var params = {
      limit: that.limit,
      page: that.page
    }
  },
  components: {
    ViewBox,
    Tabs,
    Scroller,
    Divider,
    Spinner,
    XButton,
    Group,
    Cell
  },
  data () {
    return {
      demo4Value: {
        pullupStatus: 'default'
      },
      addressList: [],
      page: 1,
      limit: 10,
      n: 30,
      scrollTop: 0
    }
  },
  methods: {
    loadMore () {
      var that = this
      this.page = this.page + 1
      var params = {
        limit: this.limit,
        page: this.page
      }
      this.$http.get('/user-address/list', {params})
        .then(function (response) {
          setTimeout(function (argument) {
            that.$nextTick(function () {
              that.addressList = _.concat(that.addressList, response.data)
              that.$refs.scroller.reset()
              setTimeout(() => {
                that.$refs.scroller.donePullup()
              })
            })
          },1000)
        })


//      setTimeout(() => {
//        this.n += 10
//        setTimeout(() => {
//          this.$refs.scroller.donePullup()
//        }, 10)
//      }, 2000)
    }
  }
}
</script>

<style lang="less" scoped>
.box1 {
  height: 100px;
  position: relative;
  width: 1490px;
}
.box1-item {
  width: 200px;
  height: 100px;
  background-color: #ccc;
  display:inline-block;
  margin-left: 15px;
  float: left;
  text-align: center;
  line-height: 100px;
}
.box1-item:first-child {
  margin-left: 0;
}
.box2-wrap {
  height: 300px;
  overflow: hidden;
}
.box2 p{
  height: 80px;
}
</style>
