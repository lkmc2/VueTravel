<template>
  <!--城市选择列表-->
  <!--使用ref获取该节点的dom-->
  <div class="list" ref="wrapper">
    <!--滚动框架是在div中有一个单独的节点，该节点中的节点才可以滚动-->
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item of hotCities" :key="item.id">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item, key) of cities" :key="key">
        <!--英文下标-->
        <div class="title border-topbottom">{{key}}</div>
        <!--下标对应的城市名数组-->
        <div class="item-list" v-for="innerItem of item" :key="innerItem.id">
          <div class="item border-bottom">{{innerItem.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: 'CityList',
  // 从父组件接收的属性
  props: {
    cities: Object,
    hotCities: Array
  },
  mounted () {
    // 从引用数组$refs获取名为wrapper的引用的dom节点
    this.scroll = new BScroll(this.$refs.wrapper)
  }
}
</script>

<style lang="scss" scoped>
  .border-topbottom {
    &:before {
      border-color: #ccc;
    }
    &:after {
      border-color: #ccc;
    }
  }

  .border-bottom {
    &:before {
      border-color: #ccc;
    }
  }

  .list {
    overflow: hidden;
    position: absolute;
    top: 1.58rem;
    left: 0;
    right: 0;
    bottom: 0;

    .title {
      line-height: .54rem;
      background: #eee;
      padding-left: .2rem;
      color: #666;
      font-size: .26rem;
    }

    .button-list {
      overflow: hidden;
      padding: .1rem .6rem .1rem .1rem;

      .button-wrapper {
        float: left;
        width: 33.33%;

        .button {
          margin: .1rem;
          padding: .1rem 0;
          text-align: center;
          border: .02rem solid #ccc;
          border-radius: .06rem;
        }
      }
    }

    .item-list {
      .item {
        line-height: .76rem;
        color: #666;
        padding-left: .2rem;
      }
    }
  }
</style>
