<template>
    <!--实现动画效果的组件-->
    <!--使用了transition标签后，Vue会在特定时间点往元素插入特定的类名，从而实现动画效果-->
    <transition>
      <!--使用插槽，该组件可以从父组件获取写在该组件中的元素，插入slot位置-->
      <slot></slot>
    </transition>
</template>

<script>
export default {
  name: 'FadeAnimation'
}
</script>

<style lang="scss" scoped>
  .v-enter, .v-leave-to {
    opacity: 0;
  }

  .v-enter-active, .v-leave-active {
    transition: opacity .5s;
  }
</style>
