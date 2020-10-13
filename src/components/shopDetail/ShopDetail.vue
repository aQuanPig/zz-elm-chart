<template>
  <div class="detail">
    <detail-header></detail-header>
    <detail-tab-bar @itemClick="itemClick"></detail-tab-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import DetailHeader from './children-components/DetailHeader'
import DetailTabBar from './children-components/DetailTabBar'
import {getRestaurantDeatil} from 'service/shopping'
export default {
  name:"ShopDetail",
  props:["id"],
  components:{
    DetailHeader,
    DetailTabBar
  },
  data() {
    return {
      shopDetail:{}
    }
  },
  methods:{
    getRestaurantDeatil(){
      getRestaurantDeatil(this.id).then(res=>{
        this.shopDetail = res
      })
    },
    itemClick(item){
      this.$router.push(`${item.router}/${this.id}`)
    }
  },
  mounted() {
    this.getRestaurantDeatil()
  },
}
</script>

<style lang="less" scoped>
.detail {
  background-color: #fff;
}
</style>