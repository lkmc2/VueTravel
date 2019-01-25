import Vue from 'vue'
import Vuex from 'vuex' // 模块数据交换插件
import state from './state' // 状态信息文件
import action from './action' // 用户触发的动作
import mutations from './mutations' // 数据转变操作

// 启用Vuex插件
Vue.use(Vuex)

// Vuex数据改变流程：
// 想要改变state的数据，需要先通过this.$store.dispatch方法触发action，
// 然后在action中使用ctx.commit方法触发mutation，
// 然后在mutation使用state对象对数据进行更改

// ps：也可以直接通过$this.$store.commit触发mutation，跳过action

// 导出Vuex的存储数据
export default new Vuex.Store({
  // state中的数据每次刷新页面都会重置，所以需要保存数据到本地存储
  state: state,
  // 用户触发的动作
  actions: action,
  // 数据转变操作
  mutations: mutations
})
