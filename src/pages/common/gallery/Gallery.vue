<template>
  <!--画廊组件-->
  <div class="container" @click="handleGalleryClick">
    <div class="wrapper">
      <!--轮播图控件-->
      <swiper :options="swiperOptions">
        <!-- 遍历生成轮播图 -->
        <swiper-slide v-for="(item, index) of imgs" :key="index">
          <img class="gallery-img" :src="item">
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
  // 以下是从父组件接收的属性
  props: {
    imgs: {
      type: Array,
      // 当父组件没有传递type属性的值时，使用如下默认值
      default () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination', // 分页指示器组件的类名
        paginationType: 'fraction', // 显示成数字指示器
        observeParents: true, // 当父元素变化时刷新控件
        observer: true // 当自身元素发生变化时刷新控件
      }
    }
  },
  methods: {
    // 处理画廊被点击时的事件
    handleGalleryClick () {
      // 触发close事件给父组件接收
      this.$emit('close')
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
        bottom: -3rem;
      }
    }
  }
</style>
