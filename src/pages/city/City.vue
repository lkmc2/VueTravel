<template>
    <!--城市选择页面-->
    <div>
      <city-header></city-header>
      <city-search></city-search>
      <!--将请求到的城市数据传给子组件，并将侧边字母栏所点击的字母传给子组件-->
      <city-list
        :cities="cities"
        :hotCities="hotCities"
        :letter="letter"></city-list>
      <!--City监听子组件触发的change事件，由City组件的handleLetterChange方法处理-->
      <city-alphabet
        :cities="cities"
        @change="handleLetterChange"></city-alphabet>
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
      cities: { }, // 所有城市
      hotCities: [], // 热门城市
      letter: '' // 侧边字母栏点击的字母
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
      }
    },
    // 处理侧边字母栏组件触发的change事件
    handleLetterChange (letter) {
      this.letter = letter
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>

<style lang="scss" scoped>

</style>
