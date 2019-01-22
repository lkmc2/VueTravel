<template>
    <!--页面顶部搜索框-->
    <div class="header">
      <div class="header-left">
        <!--使用图标字体来显示图标-->
        <div class="iconfont back-icon">&#xe624;</div>
      </div>
      <div class="header-input">
        <span class="iconfont">&#xe632;</span>
        输入城市/景点/游玩主题
      </div>
      <div class="header-right">
        城市
        <span class="iconfont arrow-icon">&#xe64a;</span>
      </div>
    </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<!--使用scss编写样式，1rem = 50px-->
<style lang="scss" scoped>
  @import '../../../assets/styles/variables';

  .header {
    display: flex;
    line-height: .86rem;
    background-color: $bgColor;
    color: #fff;

    .header-left {
      width: .64rem;
      float: left;
      .back-icon {
        text-align: center;
        font-size: .4rem;
      }
    }

    .header-input {
      flex: 1;
      height: .64rem;
      line-height: .64rem;
      margin-top: .12rem;
      margin-left: .2rem;
      padding-left: 0.2rem;
      background: #fff;
      border-radius: .1rem;
      color: #ccc;
    }

    .header-right {
      width: 1.24rem;
      float: right;
      text-align: center;
      .arrow-icon {
        margin-left: -.04rem;
        font-size: .24rem;
      }
    }
  }
</style>
