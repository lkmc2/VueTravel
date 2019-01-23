<template>
    <!--图标网格-->
    <div class="icons">
      <!--轮播图组件-->
      <swiper>
        <!--轮播图页面1-->
        <swiper-slide>
          <div class="icon">
            <div class="icon-img">
              <img class="icon-img-content" src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png">
            </div>
            <p class="icon-desc">热门景点</p>
          </div>
        </swiper-slide>

        <!--轮播图页面2-->
        <swiper-slide>
          <div class="icon">
            <div class="icon-img">
              <img class="icon-img-content" src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png">
            </div>
            <p class="icon-desc">热门景点</p>
          </div>
        </swiper-slide>
      </swiper>
    </div>
</template>

<script>
export default {
  name: 'HomeIcons'
}
</script>

<!--全局样式，设置轮播图组件的高度与图标网格一样高-->
<style>
  .icons .swiper-container {
    height: 0;
    padding-bottom: 50%;
  }
</style>

<style lang="scss" scoped>
  @import '../../../assets/styles/variables';

  .icon {
    position: relative;
    overflow: hidden;
    float: left;
    width: 25%;
    height: 0;
    padding-bottom: 25%;

    .icon-img {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: .44rem;
      box-sizing: border-box;
      padding: .1rem;

      .icon-img-content {
        display: block;
        margin: 0 auto;
        height: 100%;
      }
    }

    .icon-desc {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      line-height: .44rem;
      text-align: center;
      color: $darkTextColor;
    }
  }
</style>
