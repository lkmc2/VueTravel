<template>
    <!--广告横幅-->
    <div>
      <div class="banner">
        <img class="banner-img" src="//img1.qunarzz.com/sight/p0/201212/24/711e05d23489891893835fbb.png_600x330_10f147c1.png">

        <div class="banner-info">
          <div class="banner-title">
            南宁海底世界(AAAA景区)
          </div>
          <div class="banner-number">
            <span class="iconfont banner-icon">&#xe692;</span>39
          </div>
        </div>
      </div>

      <common-gallery></common-gallery>
    </div>
</template>

<script>
import CommonGallery from '../../common/gallery/Gallery' // 画廊组件

export default {
  name: 'DetailBanner',
  components: {
    CommonGallery
  }
}
</script>

<style lang="scss" scoped>
  .banner {
    position: relative;
    overflow: hidden;
    height: 0;
    padding-bottom: 55%;

    .banner-img {
      width: 100%;
    }

    .banner-info {
      display: flex;
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      line-height: .6rem;
      color: #fff;
      /* 从上到下从透明到黑色线性过渡 */
      background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));

      .banner-title {
        flex: 1;
        font-size: .32rem;
        padding: 0 .2rem;
      }

      .banner-number {
        padding: 0 .4rem;
        margin-top: .14rem;
        height: .32rem;
        line-height: .32rem;
        border-radius: .2rem;
        background: rgba(0, 0, 0, .8);
        font-size: .24rem;

        .banner-icon {
          font-size: .24rem;
          padding-right: .1rem;
        }
      }
    }
  }
</style>
