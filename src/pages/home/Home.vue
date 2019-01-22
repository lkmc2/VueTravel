<template>
  <!--template的根元素只能有一个-->
  <div>
    <div class="home">home</div>
    <!--跳转到/list对应路由的页面-->
    <router-link to="/list" class="home">跳转</router-link>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
  .home {
    font-size: 50px;
  }
</style>
