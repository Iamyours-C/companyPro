<template>
  <!-- 新闻首页 -->
  <div class="news-box">
    <!-- Logo Start -->
    <Logo></Logo>
    <!-- Logo End -->
    <!-- Nav Start -->
    <Nav></Nav>
    <!-- Nav End -->
    <!-- banner Start -->
    <div class="news-banner mar-t-20"></div>
    <!-- banner End -->
    <!-- content Start -->
    <div class="content">
      <div class="news-content">
        <ul class="news-lists">
          <li class="news-list pad-l-20 text-color-6" v-for="(i, ind) in newsList" :key="ind" @click="newsDetail(i)">
            <div class="news-list-text text-over-hidden-1">{{i.title}}</div>
            <div class="news-list-date text-center">{{i.inDate}}</div>
            <span class="news-dot"></span>
          </li>
        </ul>
      </div>
      <!-- 分页 -->
      <div class="text-center mar-t-30">
        <el-pagination
        class="el-page"
        :total="total"
        :page-size="20"
        v-show="total ===0 ? false : true"
        @current-change="handleCurrentChange"
        background
        layout="prev, pager, next"
        ></el-pagination>
      </div>
    </div>
    <!-- content End -->
  </div>
</template>

<script>
import Logo from './Module-logo.vue'
import Nav from './Nav-index.vue'
import {getNewsLists} from '../../common/sendAxios.js'
export default {
  data () {
    return {
      total: 0, // 初始化总条数
      newsList: [] // 新闻数组
    }
  },
  components: {
    Logo,
    Nav
  },
  methods: {
    getData (page = 1, rows = 20) { // 获取新闻列表
      getNewsLists({
        data: {
          page,
          rows
        },
        success: (res) => {
          if (res.code === 0) {
            this.newsList = res.data.list
            this.total = res.data.total
          }
        },
        error: (error) => {
          console.log(error)
        }
      })
    },
    handleCurrentChange (val) { // 分页请求数据
      this.page = val
      this.getData(this.page, this.rows)
    },
    newsDetail (item) { // 跳转新闻详情
      this.$router.push({path: '/news_detail', query: {id: item.id}})
    }
  },
  mounted () {
    this.getData()
  }
}
</script>

<style lang="less">
@import '../../less/tnews.less';
</style>
