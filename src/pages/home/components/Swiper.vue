<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- 遍历生成轮播图 -->
      <swiper-slide v-for="item of swiperList" :key="item.id">
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
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [
        {
          id: '0001',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1811/a8/cb43c4ac6c215d02.jpg_750x200_83dee994.jpg'
        }, {
          id: '0002',
          imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20191/e9b6ede83785c7673eb1bcda5a78f123.jpg_750x200_0e6d0de9.jpg'
        }
      ]
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
    padding-bottom: 27%;
    background: #ccc;

    .swiper-img {
      width: 100%;
    }
  }
</style>
