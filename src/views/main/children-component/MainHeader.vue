<template>
  <div class="header">
    <div class="address">
      <div class="left">
        <i class="iconfont iconfont-ic_mode_map"></i>
        <p class="name text-nowrap">{{this.$store.state.currentAddress.address || '南昌市东湖区二七北路123号'}}</p>
      </div>
      <i class="iconfont iconfont-icon_notice"></i>
    </div>
    <div class="search-box">
      <input type="text" class="search" placeholder="♥ 搜索商家，商品名称" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainHeader',
}
</script>

<style lang="less" scoped>
.header {
  height: 70px;
  position: relative;
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
  top: 46px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  z-index: 9;
  .search {
    background-color: #fcfcfc;
    border-radius: 20px;
    width: 80vw;
    height: 40px;
    text-align: center;
    &::placeholder {
      color: #a39391;
    }
  }
}
</style>