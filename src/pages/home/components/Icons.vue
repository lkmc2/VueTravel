<template>
    <!--图标网格-->
    <div class="icons">
      <!--轮播图组件-->
      <swiper :options="swiperOption">
        <!--轮播图页面-->
        <swiper-slide v-for="(page, index) of pages" :key="index">
          <div class="icon" v-for="item of page" :key="item.id">
            <div class="icon-img">
              <img class="icon-img-content" :src="item.imgUrl">
            </div>
            <p class="icon-desc">{{item.desc}}</p>
          </div>
        </swiper-slide>
      </swiper>
    </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  // 接收父组件传来的数据到属性list中
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        autoplay: false
      }
    }
  },
  computed: {
    pages () {
      // pages存储每一页的的所有子项，每一页最多6项
      const pages = []
      this.list.forEach((item, index) => {
        // 计算该项所在的页数（向下取整）
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }

        // 向第i页添加添加数据
        pages[page].push(item)
      })
      return pages
    }
  }
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
  @import '../../../assets/styles/mixins';

  .icons {
    margin-top: .1rem;

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
        @include ellipsis;
      }
    }
  }
</style>
