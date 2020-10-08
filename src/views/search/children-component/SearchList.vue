<template>
  <div class="searchInput">
    <div class="hot">
      <div class="hotSearch">
        <i class="iconfont iconfont-remen"></i>
        <span>热门搜索</span>
      </div>
      <div class="hotList">
        <p class="list-item" v-for="(item,index) in hotList" :key="index">{{item}}</p>
      </div>
      <div class="hotSearch history">
        <i class="iconfont iconfont-lishijilu"></i>
        <span>历史搜索</span>
      </div>
      <div class="hotList">
        <p class="list-item" v-for="(item,index) in hotList" :key="index">{{item}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchInput',
  data() {
    return {
      hotList: [
        '火锅',
        '烤肉',
        '拉面',
        '烧烤',
        '饭',
        '兰州拉面',
        '饭',
        '兰州拉面',
        '饭',
        '兰州拉面',
      ],
    }
  },
}
</script>

<style lang="less" scoped>
.searchInput {
  margin-top: 46px;
  padding: 10px;
  position: relative;
}
.hot {
  width: 100%;
  position: absolute;
  top: -16px;
  left: 50%;
  transform: translateX(-50%);
  .hotSearch {
    display: flex;
    justify-content: center;
    align-items: center;
    .iconfont-remen,
    .iconfont-lishijilu {
      color: #d75368;
      font-size: 16px;
    }
    span {
      margin-left: 3px;
      font-size: 15px;
      color: #000;
    }
  }
  .hotList {
    width: 100%;
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 0 10px;
    display: flex;
    flex-wrap: wrap;
    .list-item {
      margin-left: 10px;
      margin-top: 5px;
      background-color: #ededed;
      padding: 5px 15px;
      color: #23bfb2;
      border-radius: 20px;
    }
  }
  .history {
    margin-top: 14px;
  }
}
</style>