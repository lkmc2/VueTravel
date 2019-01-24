<template>
  <!--轮播图-->
  <div class="wrapper">
    <!--为了防止未请求到数据时以空数组渲染组件，使用v-if判断，当数组非空时才创建轮播图组件-->
    <swiper :options="swiperOption" v-if="showSwiper">
      <!-- 遍历生成轮播图 -->
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl">
      </swiper-slide>

      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  // 接收父组件传来的数据到属性list中
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      }
    }
  },
  computed: {
    showSwiper () {
      // 判断数组是否为空
      return this.list.length
    }
  }
}
</script>

<!--声明全局样式，覆盖轮播图组件的指示点颜色-->
<style>
  .wrapper .swiper-pagination-bullet-active {
    background: #fff;
  }
</style>

<style lang="scss" scoped>
  .wrapper {
    overflow: hidden;
    width: 100%;
    height: 0;
    padding-bottom: 26.5%;
    background: #ccc;

    .swiper-img {
      width: 100%;
    }
  }
</style>
