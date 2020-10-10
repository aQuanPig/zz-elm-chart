<template>
  <div ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'
import PullUp from '@better-scroll/pull-up'
BScroll.use(PullUp)
export default {
  name: 'Scroll',
  data() {
    return {
      scroll: null,
    }
  },
  props: {
    isPullingUp: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        pullUpLoad: true,
      })
      console.log(this.scroll)
      if (this.isPullingUp) {
        this.scroll.on('pullingUp', () => {
          this.$emit('onPullingUp')
        })
      }
    })
  },
  methods: {
    refresh() {
      this.scroll && this.scroll.refresh()
    },
    finishLoad() {
      this.scroll && this.scroll.finishPullUp()
    },
  },
}
</script>