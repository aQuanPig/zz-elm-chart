<template>
  <div class="search">
    <!-- 头部 -->
    <search-header @searchStart="searchStart"></search-header>
    <scroll class="wrapper" ref="wrapper">
      <!-- 搜索框 -->
      <search-list v-if="isShow"></search-list>
      <store-item v-else 
                  :shop-list="searchList" 
                  class="searchList"
                  @loadImg="loadImg"></store-item>
    </scroll>
  </div>
</template>

<script>
import SearchHeader from './children-component/SearchHeader'
import SearchList from './children-component/SearchList'
import Scroll from 'components/scroll/Scroll'
import StoreItem from 'components/storeItem/StoreItem'

import { getRestaurantsList } from 'service/shopping'
export default {
  name: 'Search',
  components: {
    SearchHeader,
    SearchList,
    Scroll,
    StoreItem
  },
  data() {
    return {
      isShow: true,
      geohash: '',
      searchList:[],
      index:1
    }
  },
  methods: {
    searchStart(value) {
      this.getSearchRestaurantsList(this.geohash, value)
    },
    getSearchRestaurantsList(geohash, keyword) {
      getRestaurantsList(geohash, keyword).then((res) => {
        this.searchList = res
        this.isShow = false
      })
    },
    loadImg(){
      this.$refs.wrapper.refresh()
      console.log('图片ing')
      
    }
  },
  mounted() {
    this.geohash = this.$store.state.currentAddress.geohash
  },
}
</script>

<style lang="less" scoped>
.search {
  height: 100vh;
}
.wrapper {
  height: calc(100vh - 193px);
  // height: 400px;
  overflow: hidden;
  .searchList {
    padding-top: 30px;
  }
}
</style>