<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
  </div>
</template>

<script>
// 引入局部组件
import HomeHeader from './components/Header' // 页面头部
import HomeSwiper from './components/Swiper' // 轮播图
import HomeIcons from './components/Icons' // 图标网格

export default {
  name: 'Home',
  // 声明组件到Vue中
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons
  }
}
</script>

<style scoped>

</style>
