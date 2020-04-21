<template>
  <div class="new-release"
    v-loading="loading"
    element-loading-text="拼命加载中"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)"
  >
    <!-- 新品上市 -->
    <!-- logo -->
    <Logo></Logo>
    <!-- 标题 -->
    <div class="content new-release-title clearfix">
      <div class="general-btn new-btn fl mar-t-20">新品发布</div>
      <ul class="new-nav-lists fl mar-t-20">
        <li v-for="(item, index) in newNavLists" :key="index" class="new-nav-list fl">
            <a class="font-16 text-color-6" @click="changeTab(index, item.id)" :class="{active:cur===index}">{{item.name}}</a>
        </li>
      </ul>
    </div>
    <!-- 分割线 -->
    <div class="new-line"></div>
    <!-- 内容开始 -->
    <div class="new-release-box content mar-t-20">
      <div class="new-release-cont">
        <!-- banner -->
        <div class="pro-banner">
          <!-- 轮播盒子 -->
          <swiper :options="swiperOption" class="slide-lists">
            <swiper-slide class="new-slide-list cursor-pointer" v-for="(item, index) in releaseLists" :key="index">
              <div class="new-list-img" @click="intoDetail(item)">
                <!-- <img :src="item.img" class="img"> -->
                <img :src="item.imgUrl" class="img">
              </div>
              <div class="new-goods-describ text-left text-color-6" @click="intoDetail(item)">
                <!-- 价格 -->
                <div class="new-goods-price font-20 mar-tb-14">￥<span class="font-24 font-bold">{{item.price}}</span>/{{item.unit}}</div>
                <!-- 名字 -->
               <div class="new-goods-name .text-over-hidden-2 font-18">{{item.title}}</div>
                <div class="el-icon-s-shop mar-t-12 new-goods-store font-14">{{item.businessVo.name}}</div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
        <!-- 商品内容 -->
        <div class="new-goods-lists">
          <div class="new-goods-box text-center" v-for="(item, index) in newGoodsLists" :key="index">
            <div class="new-goods-img" @click="intoDetail(item)">
              <img :src="item.imgUrl" class="img">
            </div>
            <!-- 描述 -->
            <div class="new-goods-describ text-left" @click="intoDetail(item)">
              <div class="new-goods-price font-bold">
                <span>￥{{item.price}}/{{item.unit}}</span>
              </div>
              <div class="new-goods-name text-color-6 text-over-hidden-1">{{item.title}}</div>
              <div class="new-goods-store font-12 text-color-9 clearfix">
                <span class="el-icon-s-shop"></span>
                <p class="text-over-hidden-1" :title="item.businessVo.name">{{item.businessVo.name}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from './Module-logo.vue'
import {swiper, swiperSlide} from 'vue-awesome-swiper'
import {getRelease, getIndexLists, categoryData} from '../../common/sendAxios'
export default {
  data () {
    return {
      cur: 0, // 默认首页
      loading: true, // 页面加载
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 30,
        autoplay: {
          delay: 5000
        }
      },
      goodsTypeId: null,
      newNavLists: [
        '饲料系列', '兽药系列', '特产系列', '生鲜系列'
      ],
      newGoodsLists: [], // 商品列表
      bannerOneLists: [
        {
          img: require('../../img/timg.jpg')
        }, {
          img: require('../../img/timg1.jpg')
        }, {
          img: require('../../img/timg3.jpeg')
        }, {
          img: require('../../img/timg2.jpeg')
        }, {
          img: require('../../img/timg4.jpeg')
        }
      ],
      releaseLists: []
    }
  },
  components: {
    Logo,
    swiper,
    swiperSlide
  },
  methods: {
    changeTab (index, id) {
      this.cur = index
      this.goodsTypeId = id
      this.getDataLists()
    },
    getDataLists () {
      // 获取商品列表
      getIndexLists({
        data: {
          goodsTypeId: this.goodsTypeId
        },
        success: (res) => {
          if (res.code === 0) {
            this.loading = false
            this.newGoodsLists = res.data.list
          }
        },
        error: (error) => {
          console.log(error)
        }
      })
    },
    getCategry () {
      // 获取分类   （系列）
      categoryData({
        data: {},
        success: (res) => {
          if (res.code === 0) {
            let data = res.data
            // let newData = data.splice(0, data.length - 5)
            this.newNavLists = data
          }
        },
        error: (error) => {
          console.log(error)
        }
      })
    },
    banner () { // 轮播
      getRelease({
        data: {},
        success: (res) => {
          if (res.code === 0) {
            this.releaseLists = res.data.list
          }
        },
        error: (error) => {
          console.log(error)
        }
      })
    },
    intoDetail (i) { // 跳转详情页
      let goodsId = i.id
      this.$router.push({path: '/detail', query: {goodsId}})
    }
  },
  mounted () {
    this.getCategry()
    this.getDataLists()
    this.banner()
  },
  created () {
    this.banner()
  }
}
</script>

<style lang="less">
@import '../../less/tnew.less';
</style>
