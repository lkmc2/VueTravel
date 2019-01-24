<template>
    <!--侧边栏字母表组件-->
    <ul class="list">
      <li
          class="item"
          v-for="(item, key) of cities"
          :key="key"
          @click="handleLetterClick">
        {{key}}
      </li>
    </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  // 从父组件传来的属性
  props: {
    cities: Object
  },
  methods: {
    // 处理侧边字母栏的点击事件
    handleLetterClick (event) {
      // Alphabet组件触发change事件，事件参数为点击的字母
      this.$emit('change', event.target.innerText)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../../assets/styles/variables';

  .list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    top: 1.58rem;
    right: 0;
    bottom: 0;
    width: .4rem;

    .item {
      text-align: center;
      line-height: .4rem;
      color: $bgColor;
    }
  }
</style>
