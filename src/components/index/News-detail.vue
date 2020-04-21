<template>
  <!-- 新闻详情 -->
  <div class="content">
    <div class="news-detail-box">
      <!-- 面包屑 -->
      <div class="bread-head font-14 text-color-3">
        <span class="cursor-pointer" @click="returIndex">首页</span>
        <span class="el-icon-arrow-right"></span>
        <span class="cursor-pointer" @click="returnNews">资讯新闻</span>
        <span class="el-icon-arrow-right"></span>
        <span>{{obj.title}}</span>
      </div>
      <!-- 内容开始 -->
      <div class="news-detail-title text-center">
        <div class="font-30 top-title">{{obj.title}}</div>
        <div class="font-18 mar-t-10">发布日期：{{obj.inDate}}</div>
      </div>
      <div class="news-line"></div>
      <!-- 新闻内容 -->
      <div class="news-detail-text text-color-6">
        <div v-html="obj.info">{{obj.info}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import {getNewsDetail} from '../../common/sendAxios.js'
export default {
  data () {
    return {
      id: '', // 新闻id
      obj: {} // 接收新闻信息
    }
  },
  created () {
    this.id = this.$route.query.id
  },
  methods: {
    getDetail () { // 获取新闻详情
      getNewsDetail({
        data: {
          id: this.id
        },
        success: (res) => {
          if (res.code === 0) {
            this.obj = res.data
          }
        },
        error: (error) => {
          console.log(error)
        }
      })
    },
    returIndex () { // 返回首页
      this.$router.push('/index')
    },
    returnNews () { // 返回新闻资讯
      this.$router.push('/news')
    }
  },
  mounted () {
    this.getDetail()
  }
}
</script>

<style lang="less">
@import '../../less/tnews.less';
</style>
