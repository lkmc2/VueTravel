<template>
    <!--城市选择页面-->
    <div>
      <city-header></city-header>
      <city-search></city-search>
      <city-list></city-list>
      <city-alphabet></city-alphabet>
    </div>
</template>

<script>
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
  }
}
</script>

<style lang="scss" scoped>

</style>
