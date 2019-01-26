import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home', // 主页
      component: Home
    },
    {
      path: '/city',
      name: 'City', // 城市信息页
      component: City
    },
    {
      // 动态路由，:id表示该值可变
      path: '/detail/:id',
      name: 'Detail', // 详情页
      component: Detail
    }
  ],
  // 设置页面切换时，始终回到页面顶部，防止页面联动时的影响
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
