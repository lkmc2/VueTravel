<template>
  <div>
    <!--将Home页面请求到的数据传给子组件-->
    <home-header></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend :list="weekendList"></home-weekend>
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
  data () {
    return {
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  methods: {
    getHomeInfo () {
      // axios请求json数据，然后将数据传给getHomeInfoSucc方法
      axios.get('/api/index.json')
        .then(this.getHomeInfoSucc)
    },
    // 处理json数据
    getHomeInfoSucc (res) {
      res = res.data

      if (res.ret && res.data) {
        const data = res.data

        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
    }
  },
  mounted () {
    this.getHomeInfo()
  }
}
</script>

<style scoped>

</style>
