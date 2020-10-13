<template>
  <div class="header clearfix">
    <div
      class="bg"
      style="background-image:url('https://cube.elemecdn.com/4/23/67bef2c1046ec8857706ddc50d6a0png.png?x-oss-process=image/format,webp/resize,w_750')"
    ></div>
    <div class="info">
      <img
        src="https://cube.elemecdn.com/4/67/C4BA065804D3C82B8F2ED172E9D0Bpng.png?x-oss-process=image/format,webp/resize,w_150"
        alt
        class="logo"
      />
      <h3 class="title">华辉拉肠（远景店）</h3>
      <div class="detail-info">
        <span class="info-item">评价4.5</span>
        <span class="info-item">月售1405单</span>
        <span class="info-item">蜂鸟专送约20分钟</span>
      </div>
      <div class="active">
        <div class="left">
          <span class="active-item">28减3</span>
          <span class="active-item">38减3</span>
          <span class="active-item">68减30</span>
        </div>
        <div class="right">3个优惠</div>
      </div>
      <div class="notice text-nowrap">公告：欢迎光临，用餐高峰请提前下单，谢谢</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
}
</script>

<style lang="less" scoped>
.header {
  position: relative;
  background-color: #fff;
}
.bg {
  height: 100px;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  // 图片水平和垂直居中。
  background-position: 50%;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height: 100px;
    background: linear-gradient(0deg, hsla(0, 0%, 100%, 0), rgba(0, 0, 0, 0.5));
  }
}
.info {
  margin-top: -62px;
  .logo {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    width: 75px;
    height: 75px;
    z-index: 9;
    box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.2);
  }
  .title {
    display: flex;
    justify-content: center;
    font-size: 21px;
    margin-top: 15px;
    &::after {
      position: relative;
      top: 7px;
      left: 16px;
      content: '';
      width: 0;
      height: 0;
      border-top: 6px solid transparent;
      border-bottom: 6px solid transparent;
      border-left: 6px solid #545454;
      border-right: 6px solid transparent;
    }
  }
  .detail-info {
    display: flex;
    justify-content: center;
    margin: 10px 10px;
    .info-item {
      color: #666;
      font-size: 12px;
      margin-left: 10px;
    }
  }
  .active {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 34px;
    margin: 5px 0 12px;
    .left {
      .active-item {
        border: 1px solid rgb(255, 201, 193);
        color: rgb(255, 75, 51);
        padding: 1px 4px;
        font-size: 11px;
        margin-right: 7px;
      }
    }
    .right {
      color: #999;
      font-size: 12px;
      &::after {
        position: relative;
        top: 8px;
        left: 4px;
        content: '';
        width: 0;
        height: 0;
        border-top: 4px solid #999;
        border-bottom: 4px solid transparent;
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;
      }
    }
  }
  .notice {
    width: 70vw;
    color: #999;
    font-size: 11px;
    padding: 0 34px;
  }
}
</style>