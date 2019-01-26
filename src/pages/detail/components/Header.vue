<template>
    <!--头部组件，默认隐藏，下滑到一定程度自动显示-->
    <div>
      <!--设置链接到首页，router-link默认是a标签，通过tag设置显示为div-->
      <router-link
          tag="div"
          to="/"
          class="header-abs"
          v-show="showAbs"
      >
        <!--使用图标字体来显示返回图标-->
        <div class="iconfont header-abs-back">&#xe624;</div>
      </router-link>

      <!--默认不显示顶部文字，页面向下滑动一定程度才显示-->
      <div class="header-fixed"
            v-show="!showAbs"
           :style="opacityStyle"
      >
        <!--跳转到首页的页面-->
        <router-link to="/">
          <!--使用图标字体来显示图标-->
          <div class="iconfont header-fixed-back">&#xe624;</div>
        </router-link>
        景点详情
      </div>
    </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true, // 是否展示顶部画廊
      opacityStyle: { // 透明度样式
        opacity: 0
      }
    }
  },
  methods: {
    // 处理页面滚动事件
    handleScroll () {
      // 获取画廊组件距离顶部的距离
      const top = document.documentElement.scrollTop

      // 画廊向下滑动超过60像素则隐藏画廊，显示顶部文字信息
      if (top > 60) {
        // 根据滚动距离计算透明度，当透明度小于1时（即滑动距离处于60到140之间），设置透明度
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity

        // 设置新的透明度样式（对象中键和值相等时，可以值写键）
        this.opacityStyle = { opacity }

        // 隐藏顶部画廊
        this.showAbs = false
      } else {
        // 显示顶部画廊
        this.showAbs = true
      }
    }
  },
  // 页面被激活时调用此函数
  activated () {
    // 监听页面滚动事件
    window.addEventListener('scroll', this.handleScroll)
  },
  // 页面关闭时调用此函数
  deactivated () {
    // 移除对页面滚动事件的监听，防止对其他页面造成影响
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="scss" scoped>
  @import '../../../assets/styles/variables';

  .header-abs {
    position: absolute;
    left: .2rem;
    top: .2rem;
    width: .8rem;
    height: .8rem;
    line-height: .8rem;
    border-radius: .4rem;
    background: rgba(0, 0, 0, .8);
    text-align: center;

    .header-abs-back {
      color: #fff;
      font-size: .4rem;
    }
  }

  .header-fixed {
    z-index: 2;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: $headerHigh;
    line-height: $headerHigh;
    text-align: center;
    color: #fff;
    background: $bgColor;
    font-size: .32rem;

    .header-fixed-back {
      position: absolute;
      width: .64rem;
      top: 0;
      left: 0;
      text-align: center;
      font-size: .4rem;
      color: #fff;
    }
  }
</style>
