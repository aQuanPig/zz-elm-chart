<template>
  <div class="current-city">
    <div class="desc">
      <p class="left">当前定位城市：</p>
      <span class="right">定位不准时，请在城市列表中选择</span>
    </div>
    <div class="city" @click="selectAddress">
      <p class="left">{{currentCity.name}}</p>
      <p class="iconfont icon-youjiantou"></p>
    </div>
  </div>
</template>

<script>
import { GETCURRENTCITY } from 'store/constants'
export default {
  name: 'CurrentCity',
  props: {
    currentCity: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  methods: {
    selectAddress() {
      this.$store.commit(GETCURRENTCITY, this.currentCity)
      this.$router.push('/address')
    },
  },
}
</script>

<style lang="less" scoped>
.current-city {
  background-color: #fff;
  margin: 14px 0;
  .desc {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #e4e4e4;
    .left {
      color: #666;
      font-size: 13px;
    }
    .right {
      color: #9f9f9f;
      font-weight: 700;
      font-size: 11px;
    }
  }
  .city {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 2px solid #e4e4e4;
    height: 30px;
    .left {
      color: #e05e6b;
      font-weight: 600;
      font-size: 14px;
      padding-left: 10px;
    }
  }
}
</style>