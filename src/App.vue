<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>

export default {
  name:"App",
  
}
</script>

<style lang="less">
@import "./assets/css/iconfont.css";
@import "./assets/css/reset.css";
#app {
  background-color: #f5f5f5;
  height: 100vh;
}
</style>
