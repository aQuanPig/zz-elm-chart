<template>
  <div class="tabbar">
    <div class="item" v-for="(item,index) in titles" :key="item.id" @click="itemClick(item,index)">
      <span :class="{active:currentIndex === index}">{{item.title}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailTabBar',
  data() {
    return {
      titles: [
        { id: 0, title: '点餐', router: '/detail/shop' },
        { id: 1, title: '评价', router: '/detail/rating' },
        { id: 2, title: '商家', router: '/detail/store' },
      ],
      currentIndex: 0,
    }
  },
  methods: {
    itemClick(item,index) {
      this.currentIndex = index
      this.$emit("itemClick",item)
    },
  },
}
</script>

<style lang="less" scoped>
.tabbar {
  display: flex;
  text-align: center;
  padding: 10px 0;
  margin-top: 10px;
  .item {
    flex: 1;
    color: #666;
    font-size: 15px;
    span {
      padding-bottom: 6px;
    }
  }
  .active {
    color: #f06966;
    border-bottom: 2px solid;
  }
}
</style>