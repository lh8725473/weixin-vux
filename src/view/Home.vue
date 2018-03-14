<template>
  <div>
    <search
      @result-click="resultClick"
      @on-change="getResult"
      :results="results"
      v-model="value"
      position="fixed"
      
      auto-scroll-to-top top="0"
      @on-focus="onFocus"
      @on-cancel="onCancel"
      @on-submit="onSubmit"
      ref="search"></search>
    <swiper loop auto :list="swiper_List" :index="swiperIndex" @on-index-change="onIndexChange"></swiper>
    <div class="menu-type">
      <grid :cols="3">
        <grid-item :label="'Grid'" v-for="i in 3" :key="i">
          <img slot="icon" src="../assets/logo.png">
        </grid-item>
      </grid>
      <grid :cols="3">
        <grid-item :label="'Grid'" v-for="i in 3" :key="i">
          <img slot="icon" src="../assets/logo.png">
        </grid-item>
      </grid>
      <grid :cols="3">
        <grid-item :label="'Grid'" v-for="i in 3" :key="i">
          <img slot="icon" src="../assets/logo.png">
        </grid-item>
      </grid>
      <grid :cols="3">
        <grid-item :label="'Grid'" v-for="i in 3" :key="i">
          <img slot="icon" src="../assets/logo.png">
        </grid-item>
      </grid>
      <grid :cols="3">
        <grid-item :label="'Grid'" v-for="i in 3" :key="i">
          <img slot="icon" src="../assets/logo.png">
        </grid-item>
      </grid>
      <grid :cols="3">
        <grid-item :label="'Grid'" v-for="i in 3" :key="i">
          <img slot="icon" src="../assets/logo.png">
        </grid-item>
      </grid>
      <grid :cols="3">
        <grid-item :label="'Grid'" v-for="i in 3" :key="i">
          <img slot="icon" src="../assets/logo.png">
        </grid-item>
      </grid>
      <grid :cols="3">
        <grid-item :label="'Grid'" v-for="i in 3" :key="i">
          <img slot="icon" src="../assets/logo.png">
        </grid-item>
      </grid>

    </div>
  </div>
</template>

<script>

import Tabs from '@/components/Tabs'
import {ViewBox, Search, Swiper, Grid, GridItem, LoadMore} from 'vux'

const baseList = [{
  url: 'javascript:',
  img: 'https://static.vux.li/demo/1.jpg',
  title: '送你一朵fua'
}, {
  url: 'javascript:',
  img: 'https://static.vux.li/demo/2.jpg',
  title: '送你一辆车'
}, {
  url: 'javascript:',
  img: 'https://static.vux.li/demo/3.jpg',
  title: '送你一次旅行'
}]

const urlList = baseList.map((item, index) => ({
  url: 'http://m.baidu.com',
  img: item.img,
  title: `(可点击)${item.title}`
}))

export default {
  created () {
//    this.$http.get('http://localhost:3000/users/user-list?limit=3&page=1&keyword=abcd')
//      .then(function (response) {
//        console.log(response)
//      })
  },
  data () {
    return {
      results: [],
      value: 'test',
      swiperIndex: 0,
      swiper_List: urlList,
      showMain: true,
      dataList: [2, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 3, 4],
      moreData: true,
      busy: false
    }
  },
  methods: {
    loadMore: function () {
      if (this.dataList.length >= 40) {
        this.busy = true
        this.moreData = false
        return
      }
      console.log('loadMore')
      this.busy = true

      setTimeout(() => {
        for (var i = 0, j = 10; i < j; i++) {
          this.dataList.push(i + new Date())
        }
        this.busy = false
      }, 2000)
    },
    setFocus () {
      this.$refs.search.setFocus()
    },
    resultClick (item) {
      window.alert('you click the result item: ' + JSON.stringify(item))
    },
    getResult (val) {
      this.results = val ? getResult(this.value) : []
    },
    onSubmit () {
      this.$refs.search.setBlur()
      this.$vux.toast.show({
        type: 'text',
        position: 'top',
        text: 'on submit'
      })
    },
    onFocus () {
      console.log('on focus')
    },
    onCancel () {
      console.log('on cancel')
    },
    onIndexChange (index) {
      this.demo07_index = index
    }
  },
  components: {
    Search,
    ViewBox,
    Swiper,
    Grid,
    GridItem,
    LoadMore
  }
}

function getResult (val) {
  let rs = []
  for (let i = 0; i < 10; i++) {
    rs.push({
      title: `${val} result: ${i + 1} `,
      other: i
    })
  }
  return rs
}
</script>

<style lang="less">
.weui-cells.vux-search_show .weui-cell:last-child{
  margin-bottom: 100px;
}
.weui-cells.vux-search_show{
  height: 100%;
  max-height: 100% !important;
}
.vux-search-box{
  bottom: 53px;
}
  // .menu-type{
  //   margin-top: 5px;
  //   .weui-grids:before{
  //     border: none;
  //   }
  //   .weui-grid:before{
  //     border: none;
  //   }
  //   .weui-grid:after{
  //     border: none;
  //   }
  // }
</style>
