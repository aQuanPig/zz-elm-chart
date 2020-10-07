<template>
  <div class="city">
    <!-- 头部 -->
    <tab-bar>
      <template #left>
        <h3>zz-elm</h3>
      </template>
    </tab-bar>
    <!-- 当前定位城市 -->
    <current-city :current-city="currentCity"></current-city>
    <!-- 城市列表 -->
    <city-list :hot-city-list="hotCity" title="热门城市" />
    <city-list :all-city-list="allCity"></city-list>
  </div>
</template>

<script>
import TabBar from 'components/tabbar/TabBar'
import CurrentCity from './children-component/CurrentCity'
import CityList from './children-component/CityList'

import { getCityInfo } from 'service/city'
export default {
  name: 'City',
  components: {
    TabBar,
    CurrentCity,
    CityList,
  },
  data() {
    return {
      hotCity: [],
      allCity: {},
      currentCity: {},
    }
  },
  methods: {
    getHotCityName() {
      getCityInfo('hot').then((res) => {
        this.hotCity = res
      })
    },
    getAllCityName() {
      getCityInfo('group').then((res) => {
        this.allCity = res
      })
    },
    getCurrentCity() {
      getCityInfo('guess').then((res) => {
        this.currentCity = res
      })
    },
  },
  mounted() {
    this.getHotCityName()
    this.getAllCityName()
    this.getCurrentCity()
  },
}
</script>

<style lang="less" scoped>
.city {
  margin-top: 46px;
}
.wrapper {
  overflow: hidden;
  position: absolute;
  top: 46px;
  right: 0;
  left: 0;
  bottom: 0;
}
</style>