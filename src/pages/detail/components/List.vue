<template>
    <!--详情页列表-->
    <div>
      <div class="item"
           v-for="(item, index) of list"
           :key="index"
      >
        <div class="item-title border-bottom">
          <span class="item-title-icon"></span>
          {{item.title}}
        </div>

        <!--当列表元素存在子元素时，调用<detail-list>标签自身生成内容，即递归组件-->
        <div v-if="item.children" class="item-child">
          <!--将item的children的值传给<detail-list>组件的list属性-->
          <detail-list :list="item.children"></detail-list>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'DetailList',
  // 从父组件接收的属性
  props: {
    list: Array
  }
}
</script>

<style lang="scss" scoped>
  .item-title-icon {
    position: relative;
    left: .06rem;
    top: .06rem;
    display: inline-block;
    width: .36rem;
    height: .36rem;
    background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat;
    margin-right: .1rem;
    background-size: .4rem 3rem;
  }

  .item-title {
    line-height: .8rem;
    font-size: .32rem;
    padding: 0 .2rem;
  }

  .item-child {
    padding: 0 .2rem;
  }
</style>
