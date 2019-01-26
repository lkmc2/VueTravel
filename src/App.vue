<template>
  <div id="app">
    <!--当路由上的内容被加载过之后，放入内存中，
    下一次在打开该路由，不需要重新加载组件，防止每次切换路由都进行ajax请求-->
    <!--让Detail组件不进行页面缓存-->
    <keep-alive exclude="Detail">
      <!-- router-view显示的是当前地址所对应的内容 -->
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>
