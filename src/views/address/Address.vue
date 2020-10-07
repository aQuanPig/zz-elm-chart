<template>
  <div>
    <tab-bar>
      <template #left>
        <van-icon class-prefix="iconfont" name="zuojiantou" @click="back"/>
      </template>
      <template #center>
        <p>{{currentCity.name}}</p>
        <!-- <p>茂名</p> -->
      </template>
    </tab-bar>
    <!-- 搜索地址 -->
    <select-address @submit="submit"></select-address>
    <!-- 搜索列表 -->
    <address-list :query-list="queryList" :options-type="showAddress"></address-list>
  </div>
</template>

<script>
import TabBar from 'components/tabbar/TabBar'
import SelectAddress from './children-component/SelectAddress'
import AddressList from './children-component/AddressList'

import { searchAddress } from 'service/city'
export default {
  name: 'Address',
  components: {
    TabBar,
    SelectAddress,
    AddressList,
  },
  data() {
    return {
      currentCity: {},
      queryList:[],
      showAddress:true
    }
  },
  mounted() {
    this.currentCity = this.$store.state.currentCity
  },
  methods: {
    submit(keyword) {
      searchAddress(this.currentCity.id,keyword).then(res => {
        this.queryList = res
        this.showAddress = false
      })
    },
    back(){
      this.$router.go(-1)
    }
  },
}
</script>

<style lang="less" scoped>
</style>