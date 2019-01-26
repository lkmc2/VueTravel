<template>
    <!--详情页-->
    <div>
      <detail-banner></detail-banner>
      <detail-header></detail-header>

      <div class="content"></div>
    </div>
</template>

<script>
import DetailBanner from './components/Banner' // 横幅广告组件
import DetailHeader from './components/Header' // 头部组件

export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader
  }
}
</script>

<style lang="scss" scoped>
  .content {
    height: 50rem;
  }
</style>
