<template>
  <div ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'
export default {
  name: 'Scroll',
  data() {
    return {
      scroll: null,
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
      })
      console.log(this.scroll)
    })
  },
  methods: {
    refresh() {
      this.scroll && this.scroll.refresh()
      console.log('kkkk')
    },
  },
}
</script>