<template>
     <!--热销推荐模块-->
    <div>
      <div class="title">热销推荐</div>
      <ul>
        <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
          <img class="item-img" :src="item.imgUrl">

          <div class="item-info">
            <p class="item-title">{{item.title}}</p>
            <p class="item-desc">{{item.desc}}</p>
            <button class="item-button">查看详情</button>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [
        {
          id: '0001',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/201212/24/711e05d23489891893835fbb.png_200x200_cc12b84a.png',
          title: '南宁海底世界',
          desc: '畅享海洋奥秘，聆听内心深处的向往'
        },
        {
          id: '0002',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1412/6d/98c8bda75e9db134b30f1a61d159e2eb.water.jpg_200x200_facf38f2.jpg',
          title: '南宁大明山',
          desc: '山高坡陡，沟谷幽深，溪流纵横，林木茂盛'
        },
        {
          id: '0003',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/201301/18/34bb0214c74bd06f93835fbb.jpg_200x200_e0c5eef4.jpg',
          title: '凤岭欢乐世界',
          desc: '心怀童真，轻羽飞扬'
        },
        {
          id: '0004',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/201403/07/045ded30b601a305c5d6abd559c9adc9.jpg_200x200_ef532008.jpg',
          title: '嘉和城温泉谷',
          desc: '沐浴自然山泉，感受人文魅力'
        },
        {
          id: '0005',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/201403/07/7e560111eddbf0e966159d48d88d3ac1.jpg_200x200_de43bc7f.jpg',
          title: '南宁龙虎山',
          desc: '竹排观光、猕猴水上狂欢，千万不要错过'
        },
        {
          id: '0006',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1505/58/58afeca9771b4234.water.jpg_200x200_91a76ffd.jpg',
          title: '青秀山旅游区',
          desc: '被誉为“南宁市的巨肺”'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../../assets/styles/mixins';

  .title {
    margin-top: .25rem;
    line-height: .48rem;
    background: #ccc;
    text-indent: .2rem;
  }

  .item {
    overflow: hidden;
    display: flex;
    height: 1.9rem;

    .item-img {
      width: 1.7rem;
      height: 1.7rem;
      padding: .1rem;
    }

    .item-info {
      flex: 1;
      padding: .1rem;
      min-width: 0;

      .item-title {
        line-height: .54rem;
        font-size: .32rem;
        @include ellipsis;
      }

      .item-desc {
        line-height: .4rem;
        color: #ccc;
        @include ellipsis;
      }

      .item-button {
        line-height: .44rem;
        margin-top: .16rem;
        background: #ff9300;
        padding: 0 .1rem;
        border-radius: .06rem;
        color: #fff;
      }
    }
  }
</style>
