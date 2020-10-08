<template>
  <div class="search">
    <!-- 头部 -->
    <search-header></search-header>
    <scroll class="wrapper" ref="wrapper">
      <!-- 搜索框 -->
      <search-list></search-list>
    </scroll>
  </div>
</template>

<script>
import SearchHeader from './children-component/SearchHeader'
import SearchList from './children-component/SearchList'
import Scroll from 'components/scroll/Scroll'
export default {
  name: 'Search',
  components: {
    SearchHeader,
    SearchList,
    Scroll,
  },
}
</script>

<style lang="less" scoped>
.search {
  height: 100vh;
}
.wrapper {
  height: calc(100vh - 193px);
  // height: 400px;
  overflow: hidden;
}
</style>