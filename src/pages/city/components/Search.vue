<template>
    <!--城市选择页面搜索框-->
    <div class="search">
      <input class="search-input" type="text" placeholder="输入城市名或拼音">
    </div>
</template>

<script>
export default {
  name: 'CitySearch'
}
</script>

<style lang="scss" scoped>
  @import '../../../assets/styles/variables';

  .search {
    height: .72rem;
    padding: 0 .1rem;
    background: $bgColor;

    .search-input {
      box-sizing: border-box;
      width: 100%;
      height: .62rem;
      padding: 0 .1rem;
      line-height: .62rem;
      text-align: center;
      border-radius: .06rem;
      color: #666;
    }
  }
</style>