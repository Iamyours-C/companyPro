<template>
  <div>
    <!-- 右边内容开始 -->
    <div class="content-right">
      <!-- 顶部 -->
      <!-- <topMenu></topMenu> -->
      <!-- 商品列表 -->
      <div class="intro-title font-18">为你推荐，精选好货</div>
      <div class="introduce-box">
        <ul class="intro-lists">
          <!-- 1 begin -->
          <li class="intro-item cursor-pointer" v-for="(item, index) in introLists" :key="index" @click="goGoodsDetail(item)">
            <div class="intro-goods-img">
              <img :src="item.imgUrl.split(',')[0]" alt="">
            </div>
            <div class="intro-goods-price font-bold">￥{{item.price}}/{{item.unit}}</div>
            <p class="intro-goods-name text-over-hidden-1 text-color-6">{{item.title}}</p>
            <div class="text-color-9 clearfix intro-goods-store">
              <span class="iconfont icon-dianpu fl"></span>
              <span class="text-over-hidden-1 font-12 cursor-pointer" :title="item.businessVo ? item.businessVo.name : '贵州新之道生物科技有限公司'">{{item.businessVo ? item.businessVo.name : '贵州新之道生物科技有限公司'}}</span>
            </div>
          </li>
          <!-- 1 end -->
        </ul>
      </div>
    </div>
    <!-- 右边内容结束 -->
  </div>
</template>

<script>
import topMenu from './common/choice.vue'
// import Pagination from '../public/Pagination.vue'
import {getLike} from '../../common/sendAxios.js'
export default {
  data () {
    return {
      shopName: '', // 初始化店铺名称
      introLists: [] // 初始化商品列表
    }
  },
  methods: {
    goGoodsDetail (i) { // 跳转详情页
      let goodsId = i.id
      this.$router.push({path: '/detail', query: {goodsId}})
    }
  },
  components: {
    topMenu
    // Pagination
  },
  mounted () {
    getLike({
      data: {
        // pageNum: 1,
        // pageSize: 16
      },
      success: (res) => {
        if (res.code === 0) {
          console.log(res.data.list)
          this.introLists = res.data.list
        }
      },
      error: (error) => {
        console.log(error)
      }
    })
  }
}
</script>

<style lang="less">
@import '../../less/tlike.less';
</style>
