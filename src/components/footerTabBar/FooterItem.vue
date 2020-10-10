<template>
  <div class="footer-item" @click="changePath">
    <slot name="icon" v-if="!isActive"></slot>
    <slot name="icon-active" v-else></slot>
    <div :class="isActive?'active-text':'text'">
      <slot name="text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterItem',
  props: {
    path: {
      type: String,
      default: '',
    },
  },
  methods: {
    changePath() {
      this.$router.push(this.path)
    },
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path) === -1 ? false : true
    }
  }
}
</script>

<style lang="less" scoped>
.footer-item {
  flex: 1;
  text-align: center;
  .text {
    color: #8a8a8a;
    font-size: 12px;
    font-weight: 600;
  }
  .active-text {
    color: #d75368;
    font-size: 12px;
    font-weight: 600;
  }
  img {
    width: 28px;
    height: 28px;
  }
}
</style>