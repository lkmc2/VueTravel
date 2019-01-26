<template>
    <!--详情页-->
    <div>
      <detail-banner
          :sightName="sightName"
          :bannerImg="bannerImg"
          :galleryImgs="galleryImgs"
      ></detail-banner>
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
import axios from 'axios' // 网络数据请求器

export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      sightName: '', // 景点名
      bannerImg: '', // 广告图片
      galleryImgs: [], // 画廊图片数组
      list: [] // 票据信息列表
    }
  },
  methods: {
    // 获取详情信息
    getDetailInfo () {
      axios.get('/api/detail.json', {
        params: {
          // 路由/detail/:id中的:id是动态参数，可以从this.$route.params中获取该值
          id: this.$route.params.id
        }
      }).then(this.handleGetDataSucc)
    },
    // 处理请求成功的数据
    handleGetDataSucc (res) {
      res = res.data

      if (res.ret && res.data) {
        const data = res.data

        this.sightName = data.sightName
        this.bannerImg = data.bannerImg
        this.galleryImgs = data.galleryImgs
        this.list = data.categoryList
      }
    }
  },
  mounted () {
    this.getDetailInfo()
  }
}
</script>

<style lang="scss" scoped>
  .content {
    height: 50rem;
  }
</style>
