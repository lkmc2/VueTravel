<template>
     <!--周末去哪儿模块-->
    <div>
      <div class="title">周末去哪儿</div>
      <ul>
        <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
          <div class="item-img-wrapper">
            <img class="item-img" :src="item.imgUrl">
          </div>

          <div class="item-info">
            <p class="item-title">{{item.title}}</p>
            <p class="item-desc">{{item.desc}}</p>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      recommendList: [
        {
          id: '0001',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1511/bd/c3c1145e1f7102.jpg_r_640x214_b9969c68.jpg',
          title: '广西温泉圣地',
          desc: '冬天里的风情，广西泡温泉的好去处'
        },
        {
          id: '0002',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1505/91/8bb1616704e022.jpg_r_640x214_609800b7.jpg',
          title: '南宁必打卡',
          desc: '青山塔影、南湖情韵、邕江春泛'
        },
        {
          id: '0003',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1810/8f/b84d8f5c5b7fc7.jpg_r_640x214_fcad9ea7.jpg',
          title: '泡泡温泉',
          desc: '具有民族风情和地方特色的温泉生态，让肌肤自由呼吸，让心灵肆意旅行。'
        },
        {
          id: '0004',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1509/b0/83481d0d95a39b.jpg_r_640x214_7dc3d605.jpg',
          title: '秘境广西',
          desc: '想知道真实的桂林之景和作者笔下的桂林有差别吗？快来揭晓你心中那个未知之谜吧'
        },
        {
          id: '0005',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1507/98/1b8d44654e4235.jpg_r_640x214_f82c5d33.jpg',
          title: '广西热门取景地',
          desc: '不走寻常路，到明星们走过的地儿走走逛逛，感受这里的青山绿水好风光'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../../assets/styles/mixins';

  .title {
    line-height: .48rem;
    background: #ccc;
    text-indent: .2rem;
  }

  .item-img-wrapper {
    overflow: hidden;
    height: 0;
    padding-bottom: 33.9%;
    .item-img {
      width: 100%;
    }
  }

  .item-info {
    padding: .1rem;

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
  }
</style>
