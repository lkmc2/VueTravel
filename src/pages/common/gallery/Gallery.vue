<template>
  <!--画廊组件-->
  <div class="container">
    <div class="wrapper">
      <!--轮播图控件-->
      <swiper :options="swiperOptions">
        <!-- 遍历生成轮播图 -->
        <swiper-slide>
          <img class="gallery-img" src="http://img1.qunarzz.com/sight/p0/201212/24/711e05d23489891893835fbb.png_r_800x800_0222ecaa.png">
        </swiper-slide>

        <swiper-slide>
          <img class="gallery-img" src="http://img1.qunarzz.com/sight/p0/1412/c6/b7291d0b777df685f63c9b1d0aa32ed8.water.jpg_r_800x800_7426da49.jpg">
        </swiper-slide>

        <!-- Optional controls -->
        <!--分页指示器-->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonGallery',
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination', // 分页指示器组件的类名
        paginationType: 'fraction' // 显示成数字指示器
      }
    }
  }
}
</script>

全局样式
<style lang="scss">
  .container .swiper-container {
    overflow: inherit;
  }
</style>

<style lang="scss" scoped>
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 99;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: #000;

    .wrapper {
      height: 0;
      width: 100%;
      padding-bottom: 66%;

      .gallery-img {
        width: 100%;
      }

      .swiper-pagination {
        color: #fff;
        bottom: -1rem;
      }
    }
  }
</style>
