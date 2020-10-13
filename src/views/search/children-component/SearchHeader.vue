<template>
  <div class="searchHeader">
    <div class="header">
      <div class="bg"></div>
      <div class="bg-cover"></div>
    </div>
    <div class="input">
      <i class="iconfont iconfont-sousuo1"></i>
      <input
        v-model="value"
        type="text"
        placeholder="请输入商家或美食名称"
        class="search"
        @input="inputChange"
        @keyup.enter="inputClick"
      />
      <i class="iconfont iconfont-quxiao1" v-show="isActive" @click="cancleValue"></i>
    </div>
  </div>
</template>

<script>
import { debounce } from 'utils'
export default {
  name: 'SearchHeader',
  props: ['keyword'],
  data() {
    return {
      value: '',
      isActive: false,
      historySearch: null,
    }
  },
  mounted() {
    this.historySearch =
      JSON.parse(sessionStorage.getItem('historySearch')) || []
    debounce(this.inputChange, 400)
  },
  created() {
    this.$route.params.keyword && (this.value = this.$route.params.keyword)
  },
  methods: {
    inputChange() {
      this.isActive = true
    },
    cancleValue() {
      this.value = ''
      this.isActive = false
    },
    inputClick() {
      this.historySearch.push(this.value)
      sessionStorage.setItem(
        'historySearch',
        JSON.stringify(this.historySearch)
      )
      this.$emit("searchStart",this.value)
    },
  },
}
</script>

<style lang="less" scoped>
.searchHeader {
  height: 140px;
}
.header {
  width: 100vw;
  height: 140px;
  position: relative;
  .bg {
    height: 100%;
    background: url('../../../assets/img/mount.jpg') no-repeat center center;
  }
  .bg-cover {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #b72a3c40;
  }
}
.input {
  position: absolute;
  top: 112px;
  left: 50%;
  transform: translateX(-50%);
  width: 70vw;
  height: 20px;
  background-color: #fff;
  padding: 10px 15px;
  border-radius: 20px;
  .iconfont-sousuo1 {
    color: #d75368;
  }
  .search {
    width: 84%;
    background-color: #fff;
    margin-left: 5px;
    z-index: 9;
  }
  .iconfont-quxiao1 {
    color: #bdb2b2;
  }
}
</style>