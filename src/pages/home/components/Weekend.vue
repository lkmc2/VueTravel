<template>
     <!--周末去哪儿模块-->
    <div>
      <div class="title">周末去哪儿</div>
      <ul>
        <li class="item border-bottom" v-for="item of list" :key="item.id">
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
  // 接收父组件传来的数据到属性list中
  props: {
    list: Array
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
    padding-bottom: 37.09%;
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
