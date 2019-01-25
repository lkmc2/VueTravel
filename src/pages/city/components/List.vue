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
            <!--this.$store.state代表数据交换插件Vuex.Store存储的数据-->
            <div class="button">{{this.currentCity}}</div>
          </div>
        </div>
      </div>

      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper"
                v-for="item of hotCities"
                :key="item.id"
                @click="handleCityClick(item.name)"
          >
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>

      <!--使用ref绑定某个字母对应的区域，如：字母A对应的区域-->
      <div class="area"
            v-for="(item, key) of cities"
            :key="key"
            :ref="key"
      >
        <!--英文下标-->
        <div class="title border-topbottom">{{key}}</div>
        <!--下标对应的城市名数组-->
        <div class="item-list"
              v-for="innerItem of item"
             :key="innerItem.id"
             @click="handleCityClick(innerItem.name)"
        >
          <div class="item border-bottom">{{innerItem.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import { mapState } from 'vuex' // vuex状态获取器

export default {
  name: 'CityList',
  // 从父组件接收的属性
  props: {
    cities: Object,
    hotCities: Array,
    letter: String
  },
  methods: {
    // 城市点击事件
    handleCityClick (city) {
      // 一般是先触发action，然后在action再触发mutation数据转换操作
      // 触发全局数据交换插件Vuex.Store中名为changeCity的action动作，参数传入用户点击的城市
      // this.$store.dispatch('changeCity', city)

      // 这里为了简单直接触发mutation数据转换操作
      // 触发全局数据交换插件Vuex.Store中名为changeCity的mutation数据转换操作，参数传入用户点击的城市
      this.$store.commit('changeCity', city)

      // 通过代码执行页面跳转，跳转到首页
      this.$router.push('/')
    }
  },
  computed: {
    // 将获取城市信息的函数设置到计算属性中，然后可以直接使用this.currentCity获取城市信息
    ...mapState({
      currentCity: 'city'
    })
  },
  watch: {
    // 监听letter属性，当父组件传来侧边字母栏点击的字母时，会调用该方法
    letter () {
      if (this.letter) {
        // 获取当前字母对应的引用区域
        const element = this.$refs[this.letter][0]
        // 滑动到对应字母的区域
        this.scroll.scrollToElement(element)
      }
    }
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
