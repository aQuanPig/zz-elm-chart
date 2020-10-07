<template>
  <div class="select-address">
    <van-field v-model="value" placeholder="输入学校、商务楼、地址" />
    <button class="btn" @click="submit">提交</button>
  </div>
</template>

<script>
export default {
  name: 'SelectAddress',
  data() {
    return {
      value: '',
    }
  },
  methods:{
    submit(){
      this.$emit('submit',this.value)
      this.value = ""
    }
  }
}
</script>

<style lang="less" scoped>
.select-address {
  margin-top: 46px;
  background-color: #fff;
  padding: 10px;
}
.btn {
  margin-top: 10px;
  background-color: #3190e8;
  color: #fff;
  width: 100%;
  height: 30px;
}
</style>