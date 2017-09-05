<template>
  <div class="full-height user-order-list">
    <tab :line-width="1">
      <tab-item selected @on-item-click="loadOrderList(1)">代付款</tab-item>
      <tab-item @on-item-click="loadOrderList(2)">已发货</tab-item>
      <tab-item @on-item-click="loadOrderList(3)">待评价</tab-item>
      <tab-item @on-item-click="loadOrderList(0)">全部订单</tab-item>
    </tab>
    <div class="order-list">
      <scroller lock-x scrollbar-y use-pullup height="100%" @on-pullup-loading="loadMore" ref="scroller">
      <div class="box2">
        <p v-for="address in addressList">{{address._id}}</p>
      </div>

    </scroller>
    </div>

  </div>
</template>

<script>
  import { Tab, TabItem, Sticky, Scroller } from 'vux'

  export default {
    created () {
      var that = this
      var params = {
        limit: that.limit,
        page: that.page
      }
      console.log(params)
//      this.$http.get('/user-address/list', {params})
//        .then(function (response) {
//          that.addressList = response.data
//        })
    },
    data () {
      return {
        addressList: [],
        page: 1,
        limit: 10,
        n: 30,
        scrollTop: 0
      }
    },
    methods: {
      loadOrderList (status) {
        console.log(status)
      },
      loadMore () {
        var that = this
        this.page = this.page + 1
        var params = {
          limit: this.limit,
          page: this.page
        }
      }
    },
    components: {
      Tab,
      TabItem,
      Sticky,
      Scroller
    }
  }
</script>

<style lang="less" scoped>
.order-list{
  position: absolute;
  left: 0;
  bottom: 0;
  top: 44px;
  right: 0;
}
.box2 p{
  height: 80px;
}
</style>
