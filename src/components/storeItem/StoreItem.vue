<template>
  <div class="store">
    <div class="header">
      <van-icon class-prefix="iconfont" name="shangjia" />
      <span class="nearby">附近商家</span>
    </div>
    <div class="list">
      <div class="list-item">
        <img src="https://cube.elemecdn.com/2/C3/2DB0BBC14484DA1581E4368D789EBpng.png?x-oss-process=image/format,webp/resize,w_64,h_64,m_fixed" alt="">
        <div>
          <div class="top">
            <div>
              <span>品牌</span>
              <span>bigbang韩国炸鸡(.....)</span>
            </div>
            <span>票</span>
          </div>
          <div class="center">
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StoreItem',
  data() {
    return {
      baseUrl:"https://fuss10.elemecdn.com/"
    }
  },
}
</script>

<style lang="less" scoped>
.store {
  margin-top: 10px;
  background-color: #fff;
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