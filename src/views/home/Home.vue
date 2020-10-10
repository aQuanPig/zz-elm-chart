<template>
  <div class="home">
    <scroll ref="wrapper" class="wrapper" :is-pulling-up="true" @onPullingUp="onPullingUp">
      <!-- 轮播图 -->
      <van-swipe class="swiper" indicator-color="#d75368">
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
      <store-item :shop-list="shopList" @loadImg="loadImg"></store-item>
    </scroll>
  </div>
</template>

<script>
import StoreItem from 'components/storeItem/StoreItem'
import Scroll from 'components/scroll/Scroll'
import swiper from '../../initData/entryPic'
import { getShoppingRestaurants } from 'service/shopping'
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
      shopList: [],
      offset: 20,
      page: 0,
      limit: 20
    }
  },
  methods: {
    getRestaurantsList(offset) {
      const { latitude, longitude } = this.$store.state.currentAddress
      getShoppingRestaurants(latitude, longitude,offset,this.limit).then((res) => {
        console.log(res)
        this.shopList.push(...this.shopList,...res)
        this.page += 1
        this.$refs.wrapper && this.$refs.wrapper.finishLoad()
      })
    },
    loadImg() {
      this.$refs.wrapper.refresh()
    },
    onPullingUp() {
      this.getRestaurantsList(this.offset * this.page)
    },
  },
  mounted() {
    this.getRestaurantsList(0)
  },
}
</script>

<style lang="less" scoped>
.home {
  margin-top: 82px;
  height: 100vh;
}
.wrapper {
  margin-top: 82px;
  height: calc(100% - 135px);
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