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
      <div class="history" v-if="historyList.length !== 0">
        <!-- <p class="list-item" v-for="(item,index) in hotList" :key="index">{{item}}</p> -->
        <div class="item" v-for="(item,index) in historyList" :key="index">
          <van-tag
            round
            closeable
            size="large"
            color="#ededed"
            text-color="#6c8eb7"
            @close="closeTag(index)"
          >{{item}}</van-tag>
        </div>
      </div>
      <div v-else class="noHistory">
        <van-tag mark color="#ffe1e1" text-color="#ad0000">暂时还没有搜索记录哦~( ･´ω`･ )</van-tag>
      </div>
    </div>
  </div>
</template>

<script>
import { Dialog } from 'vant'
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
      ],
      historyList: [],
    }
  },
  mounted() {
    this.historyList = JSON.parse(sessionStorage.getItem('historySearch')).slice(0,9) || []
  },
  methods: {
    closeTag(index) {
      console.log('关闭啦')
      Dialog.confirm({
        message: '确认删除该记录',
      })
        .then(() => {
          this.historyList.splice(index, 1)
          
          // 引入 Toast 组件后，会自动在 Vue 的 prototype 上挂载 $toast 方法，便于在组件内调用。
          this.$toast({
            message: '删除成功',
            position: 'top',
          })
          sessionStorage.setItem("historySearch",JSON.stringify(this.historyList))
        })
        .catch(() => {
          this.$toast({
            message: '取消删除',
            position: 'top',
          })
        })
    },
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
      margin: 5px;
      background-color: #ededed;
      padding: 5px 15px;
      color: #23bfb2;
      border-radius: 20px;
      font-size: 14px;
    }
  }
  .history {
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;
    padding: 0 10px;
    .item {
      margin: 5px;
    }
  }
  .noHistory {
    margin: 10px;
    padding: 0 10px;
    span {
      width: 100%;
      padding: 5px;
      font-size: 14px;
    }
  }
}
</style>