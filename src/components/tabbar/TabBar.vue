<template>
  <div class="tabbar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center text-nowrap">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name:"TabBar"
}
</script>

<style lang="less" scoped>
  .tabbar {
    height: 46px;
    background-color: #3190e8;
    display: flex;
    align-items: center;
    color: #fff;
    padding: 0 10px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99;
    .left,
    .right {
      width: 80px;
    }
    .right {
      font-size: 13px;
      text-align: center;
    }
    .center {
      flex: 1;
      text-align: center;
      font-weight: 600;
      font-size: 18px;
    }
  }
</style>