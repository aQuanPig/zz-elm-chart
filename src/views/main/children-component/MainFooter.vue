<template>
  <div class="footer">
    <Footer>
      <footer-item path="/main/home">
        <template #icon>
          <img src="../../../assets/img/icon/home.png" alt="">
        </template>
        <template #icon-active>
          <img src="../../../assets/img/icon/home_active.png" alt="">
        </template>
        <template #text>
          <p>首页</p>
        </template>
      </footer-item>
      <footer-item path="/main/search">
        <template #icon>
          <img src="../../../assets/img/icon/search.png" alt="">
        </template>
        <template #icon-active>
          <img src="../../../assets/img/icon/search_active.png" alt="">
        </template>
        <template #text>
          <p>搜索</p>
        </template>
      </footer-item>
      <footer-item path="/main/discover">
        <template #icon>
          <img src="../../../assets/img/icon/find.png" alt="">
        </template>
        <template #icon-active>
          <img src="../../../assets/img/icon/find_active.png" alt="">
        </template>
        <template #text>
          <p>发现</p>
        </template>
      </footer-item>
      <footer-item path="/main/order">
        <template #icon>
          <img src="../../../assets/img/icon/order.png" alt="">
        </template>
        <template #icon-active>
          <img src="../../../assets/img/icon/order_active.png" alt="">
        </template>
        <template #text>
          <p>订单</p>
        </template>
      </footer-item>
      <footer-item path="/main/person">
        <template #icon>
          <img src="../../../assets/img/icon/mine.png" alt="">
        </template>
        <template #icon-active>
          <img src="../../../assets/img/icon/mine_active.png" alt="">
        </template>
        <template #text>
          <p>我的</p>
        </template>
      </footer-item>
    </Footer>
  </div>
</template>

<script>
import FooterItem from 'components/footerTabBar/FooterItem'
import Footer from 'components/footerTabBar/Footer'
export default {
  name: 'MainFooter',
  components:{
    FooterItem,
    Footer
  }
}
</script>

<style lang="less" scoped>
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 52px;
  background-color: #fff;
  display: flex;
  align-items: center;
  .item {
    flex: 1;
    text-align: center;
  }
}
</style>