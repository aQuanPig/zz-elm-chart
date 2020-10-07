<template>
  <div>
    <!-- 导航 -->
    <tab-bar>
      <template #left>
        <van-icon class-prefix="iconfont" name="sousuo1" />
      </template>
      <template #center>
        <p>汇丰大酒店</p>
      </template>
      <template #right>
        <p>登录/注册</p>
      </template>
    </tab-bar>
    <!-- 轮播图 -->
    <van-swipe class="swiper"
              indicator-color="#3190e8">
      <van-swipe-item v-for="(item,index) in 2" :key="item" class="swiper-item">
        <div v-for="item1 in swiperInfo.slice(index*8,(index+1)*8)" :key="item1.id" class="item">
          <img v-lazy="baseUrl + item1.image_url" alt />
          <p class="title">{{item1.title}}</p>
        </div>
      </van-swipe-item>
    </van-swipe>
    <!-- 附近商家 -->
    <store-item></store-item>
  </div>
</template>

<script>
import TabBar from 'components/tabbar/TabBar'
import StoreItem from 'components/storeItem/StoreItem'

import swiper from '../../initData/entryPic'
export default {
  name: 'Home',
  components: {
    TabBar,
    StoreItem
  },
  data() {
    return {
      baseUrl: 'https://fuss10.elemecdn.com',
      swiperInfo: swiper,
    }
  },
}
</script>

<style lang="less" scoped>
.swiper {
  margin-top: 46px;
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
      color: #9195A3;
      font-size: 12px;
      margin-top: 6px;
    }
  }
}
</style>