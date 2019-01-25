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
import { mapState } from 'vuex' // Vuex状态获取器

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
      lastCity: '', // 上一次选择的城市
      swiperList: [], // 轮播图列表
      iconList: [], // 图标网格列表
      recommendList: [], // 推荐列表
      weekendList: [] // 周末去哪儿列表
    }
  },
  computed: {
    // 将Vuex中state的city的获取方法设置到计算属性中，可以直接使用this.city获取当前城市信息
    ...mapState(['city'])
  },
  methods: {
    // 请求首页数据
    getHomeInfo () {
      // axios请求json数据，然后将数据传给getHomeInfoSucc方法
      axios.get('/api/index.json?city' + this.city)
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
    // 记录本次选择的城市为上一次的城市
    this.lastCity = this.city
    this.getHomeInfo()
  },
  // 当App.vue中使用了<keep-alive>标签时，将可以使用activated
  // 当页面进行切换，重新执行的时候，将会调用activated函数
  activated () {
    // 当上一次选择的城市与本次不相等时，重新请求首页数据
    if (this.lastCity !== this.city) {
      // 记录本次选择的城市为上一次的城市
      this.lastCity = this.city
      this.getHomeInfo()
    }
  }
}
</script>

<style scoped>

</style>
