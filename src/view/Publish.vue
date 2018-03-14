<template>
  <div class="classification full-height">
    <div class="sider full-height">
      <ul>
        <li :class="{active: activeClassification == i}" class="classification-item" @click="changeClassification(i)"  v-for="i in 30" :key="i">产品{{i}}</li>
      </ul>
    </div>
    
    
    <!--<div class="infinite-scroll-div" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">-->
      <!--<p v-for="data in dataList">-->
        <!--<a :href="'#' + data" :name="data">{{data}}</a>-->
      <!--</p>-->
      <!--<load-more :tip="'正在加载'" v-show="busy && moreData"></load-more>-->
    <!--</div>-->
  </div>
</template>

<script>
import Tabs from '@/components/Tabs'
import { ViewBox, LoadMore} from 'vux'

export default {
  created () {
//    this.$http.get('http://localhost:3000/users/user-list?limit=3&page=1&keyword=abcd')
//      .then(function (response) {
//        console.log(response)
//      })
  },
  data () {
    return {
      showMain: true,
      dataList: [2,1,2,3,4,1,2,3,4,1,2,3,4,3,4],
      moreData: true,
      busy: false,
      activeClassification: 1
    }
  },
  methods: {
    changeClassification: function(i){
      this.activeClassification = i
    },
    loadMore: function() {
      if(this.dataList.length >= 40){
        this.busy = true
        this.moreData = false
        return
      }
      console.log('loadMore')
      this.busy = true;

      setTimeout(() => {
        for (var i = 0, j = 10; i < j; i++) {
          this.dataList.push(i + new Date());
        }
        this.busy = false;
      }, 2000);
    }
  },
  components: {
    Tabs,
    ViewBox,
    LoadMore
  }
}
</script>

<style lang="less">
  .classification{
    .sider{
      width: 100px;
      background-color: #ffffff;
      overflow-y: auto;
      .classification-item{
        text-align: center;
        padding: 5px 5px;
        border-bottom: 1px solid #f5f5f5;
        &.active{
          border-left: 4px solid #09BB07;
          color: #09BB07;
          background-color: #f5f5f5;
        }
      }
    }
  }
</style>
