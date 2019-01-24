<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <home-recommend></home-recommend>
    <home-weekend></home-weekend>
  </div>
</template>

<script>
// 引入局部组件
import HomeHeader from './components/Header' // 页面头部
import HomeSwiper from './components/Swiper' // 轮播图
import HomeIcons from './components/Icons' // 图标网格
import HomeRecommend from './components/Recommend' // 热销推荐模块
import HomeWeekend from './components/Weekend' // 周末去哪儿模块
import axios from 'axios' // 网络请求工具，统一在首页请求数据，然后传到子组件中

export default {
  name: 'Home',
  // 声明组件到Vue中
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json')
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      console.log(res)
    }
  },
  mounted () {
    this.getHomeInfo()
  }
}
</script>

<style scoped>

</style>
