<template>
    <!--侧边栏字母表组件，ref表示当前dom的引用名称-->
    <ul class="list">
      <li
          class="item"
          v-for="item of letters"
          :key="item"
          :ref="item"
          @touchstart="handleTouchStart"
          @touchmove="handleTouchMove"
          @touchend="handleTouchEnd"
          @click="handleLetterClick">
        {{item}}
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
  data () {
    return {
      touchStatus: false // 触摸状态
    }
  },
  computed: {
    // 获取侧边栏出现的字母数组
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  methods: {
    // 处理侧边字母栏的点击事件
    handleLetterClick (event) {
      // Alphabet组件触发change事件，事件参数为点击的字母
      this.$emit('change', event.target.innerText)
    },
    // 侧边栏触摸起始事件
    handleTouchStart () {
      this.touchStatus = true
    },
    // 侧边栏触摸移动事件
    handleTouchMove (event) {
      if (this.touchStatus) {
        // 获取A字母距离Alphabet组件顶部的纵坐标
        const startY = this.$refs['A'][0].offsetTop
        // 获取触摸屏幕时，距离Alphabet组件顶部的纵坐标，
        // 79是Header和Search组件的高，因为触摸事件是算整个屏幕的
        const touchY = event.touches[0].clientY - 79

        // 字母的下标，20是每个字母的高度
        const index = Math.floor((touchY - startY) / 20)

        // 下标范围需在26个字母的范围内
        if (index >= 0 && index < this.letters.length) {
          // 触发change事件给父组件接收，参数为下标对应的字母
          this.$emit('change', this.letters[index])
        }
      }
    },
    // 侧边栏触摸结束事件
    handleTouchEnd () {
      this.touchStatus = false
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
