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
  data () {
    return {
      swiperOption: {
        autoplay: false
      },
      iconList: [
        {
          id: '0001',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          desc: '热门景点'
        },
        {
          id: '0002',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
          desc: '南宁必游'
        },
        {
          id: '0003',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
          desc: '一日游'
        },
        {
          id: '0004',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          desc: '游乐场'
        },
        {
          id: '0005',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/f5/a963333e1fa802.png',
          desc: '本地玩乐'
        },
        {
          id: '0006',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
          desc: '动植物园'
        },
        {
          id: '0007',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png',
          desc: '融晟海洋馆'
        },
        {
          id: '0008',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png',
          desc: '泡温泉'
        },
        {
          id: '0009',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/80/416c6ab3368d1f02.png',
          desc: '全部玩乐'
        }
      ]
    }
  },
  computed: {
    pages () {
      // pages存储每一页的的所有子项，每一页最多6项
      const pages = []
      this.iconList.forEach((item, index) => {
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
