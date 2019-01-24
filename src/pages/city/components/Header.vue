<template>
    <!--城市选择页面Header-->
    <div class="header">
      城市选择
      <!--跳转到首页的页面-->
      <router-link to="/">
        <!--使用图标字体来显示图标-->
        <div class="iconfont header-back">&#xe624;</div>
      </router-link>
    </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="scss" scoped>
  @import '../../../assets/styles/variables';

  .header {
    position: relative;
    overflow: hidden;
    height: .86rem;
    line-height: $headerHigh;
    text-align: center;
    color: #fff;
    background: $bgColor;
    font-size: .32rem;

    .header-back {
      position: absolute;
      width: .64rem;
      top: 0;
      left: 0;
      text-align: center;
      font-size: .4rem;
      color: #fff;
    }
  }
</style>
