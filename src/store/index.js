import Vue from 'vue'
import Vuex from 'vuex' // 模块数据交换插件

// 启用Vuex插件
Vue.use(Vuex)

// Vuex数据改变流程：
// 想要改变state的数据，需要先通过this.$store.dispatch方法触发action，
// 然后在action中使用ctx.commit方法触发mutation，
// 然后在mutation使用state对象对数据进行更改

// ps：也可以直接通过$this.$store.commit触发mutation，跳过action

// 默认城市信息
let defaultCity = '上海'

// 为了防止浏览器关闭缓存功能，使用try..catch获取本地存储的城市信息
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) { }

// 导出Vuex的存储数据
export default new Vuex.Store({
  // state中的数据每次刷新页面都会重置，所以需要保存数据到本地存储
  state: {
    // 默认城市优先从本地储存中获取，否则就是北京
    city: defaultCity
  },
  // 用户触发的动作
  actions: {
    // 用户点击城市（上下文，动作传入的参数）
    changeCity (ctx, city) {
      // 上下文调用commit方法，触发名为changeCity的mutation（数据转变操作），
      // 并传入用户点击的城市名
      ctx.commit('changeCity', city)
    }
  },
  // 数据转变操作
  mutations: {
    // 用户点击城市（state对象，commit方法传入的参数）
    changeCity (state, city) {
      // 修改state对象中的city数据
      state.city = city

      // 为了防止浏览器关闭缓存功能，使用try..catch设置本地存储的城市信息
      try {
        // 在本地存储中保存city数据
        localStorage.city = city
      } catch (e) { }
    }
  }
})
