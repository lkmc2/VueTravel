<template>
     <!--热销推荐模块-->
    <div>
      <div class="title">热销推荐</div>
      <ul>
        <!--链接到详情页，router-link 默认生成a标签，可使用tag指定生成的标签形式为li-->
        <router-link
            tag="li"
            class="item border-bottom"
            v-for="item of list"
            :key="item.id"
            :to="'/detail/' + item.id"
        >
          <img class="item-img" :src="item.imgUrl">

          <div class="item-info">
            <p class="item-title">{{item.title}}</p>
            <p class="item-desc">{{item.desc}}</p>
            <button class="item-button">查看详情</button>
          </div>
        </router-link>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  // 接收父组件传来的数据到属性list中
  props: {
    list: Array
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
