<template>
  <div class="header">
    <div class="address">
      <div class="left" @click="changeAddress">
        <i class="iconfont iconfont-ic_mode_map"></i>
        <p class="name text-nowrap">{{this.$store.state.currentAddress.address || '南昌市东湖区二七北路123号'}}</p>
      </div>
      <i class="iconfont iconfont-icon_notice"></i>
    </div>
    <div class="search-box">
      <i class="iconfont iconfont-sousuo1"></i>
      <input
        type="text"
        class="search"
        placeholder="搜索商家，商品名称"
        @input="changeInput"
        @keyup.enter="inputClick"
        v-model="value"
      />
      <i class="iconfont iconfont-quxiao1" v-show="isActive" @click="cancleClick"></i>
    </div>
  </div>
</template>

<script>
import { debounce } from 'utils'
export default {
  name: 'MainHeader',
  data() {
    return {
      isActive: false,
      value: '',
      deounce: null,
    }
  },
  created() {
    this.changeInput = debounce(this.changeInput, 400)
  },
  methods: {
    changeInput() {
      this.isActive = true
    },
    cancleClick() {
      this.value = ''
      this.isActive = false
    },
    changeAddress() {
      this.$router.push('/')
    },
    inputClick() {
      this.$router.push(`/main/search/${this.value}`)
      this.value = ''
    },
  }
}
</script>

<style lang="less" scoped>
.header {
  height: 82px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
  background: linear-gradient(to right, #fb7c75, #dd5a6a, #b7325d);
}
.address {
  display: flex;
  padding: 15px;
  justify-content: space-between;
  align-items: center;
  .left {
    color: #fefefe;
    display: flex;
    align-items: center;
    .name {
      margin-left: 5px;
      font-size: 18px;
      width: 280px;
    }
    .iconfont-ic_mode_map {
      font-size: 16px;
    }
  }
  .iconfont-icon_notice {
    font-size: 18px;
    color: #fefefe;
  }
}
.search-box {
  position: absolute;
  top: 55px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80vw;
  z-index: 9;
  background-color: #fcfcfc;
  border-radius: 20px;
  .search {
    background-color: #fcfcfc;
    width: 50vw;
    height: 40px;
    font-size: 15px;
    margin-left: 5px;
    &::placeholder {
      color: #a39391;
    }
  }
  .iconfont-quxiao1 {
    color: #bdb2b2;
    position: absolute;
    top: 11px;
    right: 22px;
  }
}
</style>