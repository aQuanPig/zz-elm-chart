<template>
  <div class="footer">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:"Footer"
}
</script>

<style lang="less" scoped>
.footer {
  display: flex;
  border-top: 1px solid #6464641c;
}
</style>