<template>
    <!--城市选择页面-->
    <div>
      <city-header></city-header>
      <city-search></city-search>
      <!--将请求到的城市数据传给子组件-->
      <city-list :cities="cities" :hotCities="hotCities"></city-list>
      <city-alphabet :cities="cities"></city-alphabet>
    </div>
</template>

<script>
import axios from 'axios' // 网络请求工具
import CityHeader from './components/Header' // 页面头部
import CitySearch from './components/Search' // 搜索框
import CityList from './components/List' // 城市选择列表
import CityAlphabet from './components/Alphabet' // 侧边栏字母表组件

export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data () {
    return {
      cities: { },
      hotCities: []
    }
  },
  methods: {
    // 请求获取json数据
    getCityInfo () {
      axios.get('/api/city.json')
        .then(this.handleGetCityInfoSucc)
    },
    // 处理json数据
    handleGetCityInfoSucc (res) {
      res = res.data

      if (res.ret && res.data) {
        const data = res.data
        this.cities = data.cities
        this.hotCities = data.hotCities

        console.log(this.cities)
      }
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>

<style lang="scss" scoped>

</style>
