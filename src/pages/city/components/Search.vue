<template>
    <!--城市选择页面搜索框-->
    <div>
      <div class="search">
        <input v-model="keyword"
                class="search-input"
                type="text"
                placeholder="输入城市名或拼音">
      </div>

      <!--搜索结果显示框，让其的dom的引用被命名为search，当关键字非空时才显示-->
      <div class="search-content"
            ref="search"
            v-show="keyword">
        <ul>
          <!--显示搜索到的结果-->
          <li class="search-item border-bottom"
              v-for="item of list"
              :key="item.id"
              @click="handleCityClick(item.name)"
          >
            {{item.name}}
          </li>
          <!--搜索结果长度为0时才显示-->
          <li class="search-item border-bottom"
              v-show="hasNoData">
            没有找到匹配数据
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
import Bscroll from 'better-scroll' // 滚动插件

export default {
  name: 'CitySearch',
  // 从父组件接收的属性
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '', // 关键词
      list: [],
      timer: null // 定时器
    }
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
    }
  },
  computed: {
    // 列表是否非空
    hasNoData () {
      return !this.list.length
    }
  },
  watch: {
    // 监听keyword属性的变化
    keyword () {
      // 如果已存在定时器则清除
      if (this.timer) {
        clearTimeout(this.timer)
      }

      // 关键词为空时，清空显示内容
      if (!this.keyword) {
        this.list = []
        return
      }

      // 创建定时器，延迟100毫秒后执行，减少用户重复操作带来的资源浪费
      this.timer = setTimeout(() => {
        const result = []

        // 将符合关键词内容的城市名放入数组中
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 ||
              value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }

        this.list = result
      }, 100)
    }
  },
  mounted () {
    // 滚动插件的构造器传入搜索结果显示框的dom元素
    this.scroll = new Bscroll(this.$refs.search)
  }
}
</script>

<style lang="scss" scoped>
  @import '../../../assets/styles/variables';

  .search {
    height: .72rem;
    padding: 0 .1rem;
    background: $bgColor;

    .search-input {
      box-sizing: border-box;
      width: 100%;
      height: .62rem;
      padding: 0 .1rem;
      line-height: .62rem;
      text-align: center;
      border-radius: .06rem;
      color: #666;
    }
  }

  .search-content {
    z-index: 1;
    overflow: hidden;
    position: absolute;
    top: 1.58rem;
    left: 0;
    right: 0;
    bottom: 0;
    background: #eee;

    .search-item {
      line-height: .62rem;
      padding-left: .2rem;
      background: #fff;
      color: #666;
    }
  }
</style>
