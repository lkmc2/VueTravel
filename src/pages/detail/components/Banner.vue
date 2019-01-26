<template>
    <!--广告横幅-->
    <div>
      <div class="banner" @click="handleBannerClick">
        <img class="banner-img" :src="bannerImg">

        <div class="banner-info">
          <div class="banner-title">
            {{sightName}}
          </div>
          <div class="banner-number">
            <span class="iconfont banner-icon">&#xe692;</span>
            <!--画廊图片数-->
            {{this.galleryImgs.length}}
          </div>
        </div>
      </div>

      <!--为画廊组件设置动画，在fade-animation标签内的组件将会以插槽的形式放入fade-animation组件中-->
      <fade-animation>
        <!--为子组件传入画廊的图片，画廊默认是隐藏的，点击Banner时才弹出-->
        <!--Banner接收从子组件触发的close事件，调用handleGalleryClose方法处理-->
        <common-gallery
          :imgs="galleryImgs"
          v-show="showGallery"
          @close="handleGalleryClose"
        ></common-gallery>
      </fade-animation>
    </div>
</template>

<script>
import CommonGallery from '../../common/gallery/Gallery' // 画廊组件
import FadeAnimation from '../../common/fade/FadeAnimation' // 动画效果组件

export default {
  name: 'DetailBanner',
  // 从父组件中接收的属性
  props: {
    sightName: String,
    bannerImg: String,
    galleryImgs: Array
  },
  data () {
    return {
      showGallery: false // 是否显示画廊控件
    }
  },
  components: {
    CommonGallery,
    FadeAnimation
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
