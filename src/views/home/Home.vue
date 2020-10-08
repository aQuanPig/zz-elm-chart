<template>
  <div class="home">
    <scroll ref="wrapper" class="wrapper">
    <!-- 轮播图 -->
    <van-swipe class="swiper" indicator-color="#d75368">
      <van-swipe-item v-for="(item,index) in 2" :key="item" class="swiper-item">
        <div v-for="item1 in swiperInfo.slice(index*8,(index+1)*8)" :key="item1.id" class="item">
          <img v-lazy="baseUrl + item1.image_url" alt @load="loadImg"/>
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
  </scroll>
  </div>
</template>

<script>
import StoreItem from 'components/storeItem/StoreItem'
import Scroll from 'components/scroll/Scroll'
import swiper from '../../initData/entryPic'
import { getShoppingRestaurants } from 'service/shopping'
import { debounce } from 'utils'
export default {
  name: 'Home',
  components: {
    StoreItem,
    Scroll,
  },
  data() {
    return {
      baseUrl: 'https://fuss10.elemecdn.com',
      swiperInfo: swiper,
      shopList: []
    }
  },
  methods: {
    getRestaurantsList() {
      const { latitude, longitude } = this.$store.state.currentAddress
      getShoppingRestaurants(latitude, longitude).then((res) => {
        this.shopList = res
        this.$nextTick(()=>{
          this.$refs.wrapper.refresh()
        })
      })
    },
    loadImg(){
      debounce(this.$refs.wrapper.refresh,800)
    }
  },
  mounted() {
    this.getRestaurantsList()
  },
}
</script>

<style lang="less" scoped>
.home {
  height: 100vh;
}
.wrapper {
  height: calc(100% - 123px);
  // height: 400px;
  overflow: hidden;
}
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