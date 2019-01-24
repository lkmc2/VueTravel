<template>
    <div>
      <city-header></city-header>
      <city-search></city-search>
    </div>
</template>

<script>
import CityHeader from './components/Header' // 页面头部
import CitySearch from './components/Search' // 搜索框

export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch
  }
}
</script>

<style lang="scss" scoped>

</style>
