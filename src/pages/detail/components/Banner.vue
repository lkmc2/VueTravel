<template>
    <!--广告横幅-->
    <div>
      <div class="banner" @click="handleBannerClick">
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

      <!--为子组件传入画廊的图片，画廊默认是隐藏的，点击Banner时才弹出-->
      <!--Banner接收从子组件触发的close事件，调用handleGalleryClose方法处理-->
      <common-gallery
              :imgs="imgs"
              v-show="showGallery"
              @close="handleGalleryClose"
      ></common-gallery>
    </div>
</template>

<script>
import CommonGallery from '../../common/gallery/Gallery' // 画廊组件

export default {
  name: 'DetailBanner',
  data () {
    return {
      showGallery: false, // 是否显示画廊控件
      imgs: ['http://img1.qunarzz.com/sight/p0/201212/24/711e05d23489891893835fbb.png_r_800x800_0222ecaa.png', 'http://img1.qunarzz.com/sight/p0/1412/c6/b7291d0b777df685f63c9b1d0aa32ed8.water.jpg_r_800x800_7426da49.jpg']
    }
  },
  components: {
    CommonGallery
  },
  methods: {
    // 处理Banner被点击时的事件
    handleBannerClick () {
      // 显示画廊
      this.showGallery = true
    },
    // 处理画廊被点击时的事件
    handleGalleryClose () {
      // 隐藏画廊
      this.showGallery = false
    }
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
