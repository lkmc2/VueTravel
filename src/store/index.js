import Vue from 'vue'
import Vuex from 'vuex' // 模块数据交换插件

// 启用Vuex插件
Vue.use(Vuex)

// 导出Vuex的存储数据
export default new Vuex.Store({
  state: {
    city: '北京'
  }
})
