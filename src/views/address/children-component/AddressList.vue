<template>
  <div class="addressList">
    <p class="search">搜索历史</p>
    <div class="list">
      <div
        class="list-item"
        v-for="item in showAddress"
        :key="item.geohash"
        @click="clickAddress(item)"
        @keyup.enter="clickAddress(item)"
      >
        <p class="name">{{item.name}}</p>
        <p class="address">{{item.address}}</p>
      </div>
      <p class="clear" v-show="optionsType && addressList.length!== 0" @click="clearAll">清空所有</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddressList',
  props: {
    queryList: {
      type: Array,
      default() {
        return []
      },
    },
    optionsType: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      addressList: [],
    }
  },
  mounted() {
    this.addressList = JSON.parse(sessionStorage.getItem('address')) || []
  },
  methods: {
    clickAddress(address) {
      this.addressList.push(address)
      sessionStorage.setItem('address', JSON.stringify(this.addressList))
      this.$router.push("/home")
    },
    clearAll() {
      this.addressList = []
      sessionStorage.setItem('address', JSON.stringify(this.addressList))
    },
  },
  computed: {
    showAddress() {
      const result = this.optionsType
        ? JSON.parse(sessionStorage.getItem('address'))
        : this.queryList
      return result
    },
  },
}
</script>

<style lang="less" scoped>
.search {
  margin-top: 5px;
  color: #666;
  padding: 2px 10px;
  font-size: 13px;
  border-bottom: 1px solid #e4e4e4;
}
.list {
  background-color: #fff;
  padding: 0 10px 0;
  .list-item {
    border-bottom: 1px solid #e4e4e4;
    .name {
      font-size: 15px;
      color: #000;
      padding: 8px 0;
    }
    .address {
      padding: 0 0 10px;
      font-size: 11px;
      color: #9195a3;
    }
  }
  .clear {
    text-align: center;
    padding: 10px 0;
    font-size: 14px;
  }
}
</style>