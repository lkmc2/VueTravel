<template>
    <!--城市选择页面-->
    <div>
      <city-header></city-header>
      <city-search></city-search>
      <city-list></city-list>
    </div>
</template>

<script>
import CityHeader from './components/Header' // 页面头部
import CitySearch from './components/Search' // 搜索框
import CityList from './components/List' // 城市选择列表

export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList
  }
}
</script>

<style lang="scss" scoped>

</style>
