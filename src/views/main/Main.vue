<template>
  <div>
    <!-- 头部 -->
    <main-header v-show="$route.path === '/main/home'? true :false"></main-header>
    
    <router-view></router-view>
    <!-- 底部 -->
    <main-footer></main-footer>
  </div>
</template>

<script>
import MainFooter from './children-component/MainFooter'
import MainHeader from './children-component/MainHeader'
export default {
  name: 'Main',
  components: {
    MainFooter,
    MainHeader
  },
}
</script>