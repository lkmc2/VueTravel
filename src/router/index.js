import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 路由控制器
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home', // 主页
      // () => import('组件路径')表示加载异步组件，
      // 可以让项目按需加载组件，而不是一次性加载所有组件，
      // 从而达到减少生成的js文件的体积
      component: () => import('@/pages/home/Home')
    },
    {
      path: '/city',
      name: 'City', // 城市信息页
      component: () => import('@/pages/city/City')
    },
    {
      // 动态路由，:id表示该值可变
      path: '/detail/:id',
      name: 'Detail', // 详情页
      component: () => import('@/pages/detail/Detail')
    }
  ],
  // 设置页面切换时，始终回到页面顶部，防止页面联动时的影响
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
