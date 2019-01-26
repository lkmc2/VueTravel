<template>
    <!--详情页-->
    <div>
      <detail-banner></detail-banner>
      <detail-header></detail-header>

      <div class="content">
        <!--向子组件传递票据信息-->
        <detail-list :list="list"></detail-list>
      </div>
    </div>
</template>

<script>
import DetailBanner from './components/Banner' // 横幅广告组件
import DetailHeader from './components/Header' // 头部组件
import DetailList from './components/List' // 详情列表

export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      list: [
        {
          title: '成人票',
          children: [
            {
              title: '成人三馆联票',
              children: [
                { title: '成人三馆联票 - 大连连锁店销售' }
              ]
            },
            {
              title: '成人五馆联票'
            }
          ]
        },
        { title: '学生票' },
        { title: '儿童票' },
        { title: '特惠票' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .content {
    height: 50rem;
  }
</style>
