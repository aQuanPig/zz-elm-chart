<template>
  <div>
    <!-- 轮播图 -->
    <van-swipe class="swiper" indicator-color="#3190e8">
      <van-swipe-item v-for="(item,index) in 2" :key="item" class="swiper-item">
        <div v-for="item1 in swiperInfo.slice(index*8,(index+1)*8)" :key="item1.id" class="item">
          <img v-lazy="baseUrl + item1.image_url" alt />
          <p class="title">{{item1.title}}</p>
        </div>
      </van-swipe-item>
    </van-swipe>
    <!-- 附近商家 -->
    <div class="header">
      <van-icon class-prefix="iconfont" name="shangjia" />
      <span class="nearby">附近商家</span>
    </div>
    <store-item :shop-list="shopList"></store-item>
  </div>
</template>

<script>
import StoreItem from 'components/storeItem/StoreItem'

import swiper from '../../initData/entryPic'
import { getShoppingRestaurants } from 'service/shopping'
export default {
  name: 'Home',
  components: {
    StoreItem,
  },
  data() {
    return {
      baseUrl: 'https://fuss10.elemecdn.com',
      swiperInfo: swiper,
      shopList: [],
    }
  },
  methods: {
    getRestaurantsList() {
      const { latitude, longitude } = this.$store.state.currentAddress
      getShoppingRestaurants(latitude, longitude).then((res) => {
        console.log(res)
        this.shopList = res
      })
    },
  },
  mounted() {
    this.getRestaurantsList()
  },
}
</script>

<style lang="less" scoped>
.swiper {
  padding-top: 20px;
  background-color: #fff;
  display: flex;
  .swiper-item {
    display: flex;
    flex-wrap: wrap;
  }
  .item {
    width: 25%;
    text-align: center;
    padding: 5px 0 17px;
    img {
      width: 40px;
    }
    .title {
      color: #9195a3;
      font-size: 12px;
      margin-top: 6px;
    }
  }
}
.header {
  color: #afafaf;
  padding: 10px;
  .iconfont-shangjia {
    font-size: 15px;
  }
  .nearby {
    font-size: 12px;
    margin-left: 5px;
  }
}
</style>