// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper' // 轮播图组件
import './assets/styles/reset.css' // 页面重置样式
import './assets/styles/border.css' // 防止1像素边框问题
import './assets/styles/iconfont.css' // 图标字体
import 'swiper/dist/css/swiper.css' // 轮播图组件的样式

Vue.config.productionTip = false
// 启用fastClick，解决点击事件300毫秒延迟问题
fastClick.attach(document.body)

// 启用轮播图组件
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
