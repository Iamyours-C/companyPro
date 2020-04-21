<template>
  <div class="saler-shop"
  v-loading="loading"
  element-loading-text="拼命加载中"
  element-loading-spinner="el-icon-loading"
  element-loading-background="rgba(0, 0, 0, 0.8)"
  >
    <div class="content shop-name flex-row">
      <!-- 店铺logo -->
      <div class="shop-logos">
        <div class="shop-logo-box">
          <img :src="shop.logo" />
        </div>
      </div>
      <!-- 店铺信息 -->
      <div class="shop-titles text-color-6 pad-l-20">
        <div class="font-22">
          <span>店铺：</span>
          <span>{{shop.name}}</span>
        </div>
        <div class="shop-name-bottom flex-row">
          <div>店铺开店时间：2020-02-02</div>
          <div class="describ-detail flex-row pad-l-40">
            <span class="pad-l-10">描述：4.5</span>
            <span class="pad-l-10">服务：5.5</span>
            <span class="pad-l-10">物流：5.5</span>
          </div>
        </div>
      </div>
    </div>
    <div class="space-line"></div>
    <!-- 我的店铺 -->
     <!-- logo部分 -->
    <!-- <div class="content mar-t-20">
      <div class="shop-logo text-center">
        <div class="logo-img">
          <img :src="shop.logo" />
        </div>
      </div>
    </div> -->
    <!-- 导航 -->
    <div class="shop-navigation mar-t-20">
      <div class="content shop-navigation-lists font-20">
        <div class="shop-navigation-list">所有商品</div>
        <div class="shop-navigation-list">首页</div>
      </div>
    </div>
    <!-- 我的店铺内容开始 -->
    <!-- banner -->
    <swiper class="shop-banner-box mar-t-10" :options="swiperOptions" v-if="bannerLists.length > 0">
      <swiper-slide v-for="(item, index) in bannerLists" :key="index">
        <div class="shop-banner">
          <img class="img" :src="item.img" v-if="index === 0 || index === (bannerLists.length - 1)" style="opacity: 1;">
          <img class="img" :src="item.img" v-else style="opacity: 1;">
        </div>
        <!-- <div class="buy-now font-24 font-bold cursor-pointer">立即抢购</div> -->
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <!-- 导航 -->
    <!-- <div class="shop-nav">
      <div class="content">
        <ul class="shop-nav-lists">
          <li class="shop-nav-list" v-for="(item, index) in navLists" :key="index">
            <a class="text-white" @click="changeTabs(index)" :class="{active:cur === index}">{{item.name}}</a>
          </li>
        </ul>
      </div>
    </div> -->
    <!-- 商品开始 -->
    <div class="content">
      <!-- 第一部分 -->
       <div class="shop-goods-top" >
         <div class="goods-top-detail" v-for="(item, index) in topGoodsLists" :key="index">
           <div class="goods-top-img">
             <img class="img" :src="item.imgUrl">
           </div>
           <div class="goods-top-describ mar-t-10">
             <div class="goods-title text-over-hidden-1">{{item.title}}</div>
              <div class="goods-price mar-t-8">
                <span class="font-18">价格：</span>
                <span class="font-24 font-bold">{{item.price}}元</span>
              </div>
             <div class="buy-now-btn">
               <span @click="toConfirmOrder(item)">立即购买</span>
               <span>>></span>
             </div>
           </div>
         </div>
       </div>
       <!-- 第二部分 -->
       <div class="shop-goods-special">
         <swiper :options="swiperOptions1">
           <swiper-slide class="special-goods text-center" v-for="(item, index) in specialLists" :key="index">
             <div class="special-goods-img">
               <img class="img" :src="item.imgurl">
             </div>
             <div class="special-goods-name font-20 mar-t-16 cursor-pointer">{{item.title}}</div>
           </swiper-slide>
          <!-- <div class="swiper-button-prev"></div>
           <div class="swiper-button-next"></div> -->
         </swiper>
       </div>
       <!-- 第三部分 -->
       <div class="shop-goods-feed mar-b-50">
         <!-- 标题线 -->
         <div class="feed-line">
           <div class="feed-name-box text-center">
              <p class="feed-name">猪饲料</p>
              <p class="font-20">
                <span class="el-icon-arrow-left"></span>
                <span class="english-name">PIGFEED</span>
                <span class="el-icon-arrow-right"></span>
              </p>
             <div class="feed-name-shape shape-left"></div>
             <div class="feed-name-shape shape-right"></div>
           </div>
         </div>
         <!-- 猪饲料商品 -->
         <div class="feed-goods clearfix">
           <div class="feed-big-box fl">
             <img src="../../img/discount_bg_2.jpg" class="img">
           </div>
           <div class="fr">
             <div class="feed-goods-card clearfix">
               <div class="goods-card-left fl">
                 <p class="card-left-name font-24">快大壮</p>
                 <p>
                   <span class="font-24 card-goods-text">价格:</span>
                   <span class="font-42 font-bold card-goods-price">145.99元</span>
                 </p>
               </div>
              <div class="buy-now-btn fr">
                <span>立即购买</span>
                <span>>></span>
              </div>
             </div>
             <div class="feed-goods-small mar-t-30">
               <img src="../../img/banner_bg_2.jpg" class="img">
             </div>
           </div>
         </div>
       </div>
       <!-- 第四部分 -->
       <div class="shop-goods-series mar-t-30">
         <!-- 饲料系列产品抬头 -->
         <div class="goods-series-head text-white">
           <span>|</span>
           <span>所</span>
           <span>|</span>
           <span>有</span>
           <span>|</span>
           <span>商</span>
           <span>|</span>
           <span>品</span>
           <span>|</span>
         </div>
         <!-- 商品内容 -->
         <div class="goods-series-body">
           <div class="goods-series-lists mar-t-20">
             <div class="goods-box" v-for="(item, index) in goodsLists" :key="index">
               <div class="goods-series-img">
                 <img :src="item.imgUrl" alt="">
               </div>
               <!-- 描述 -->
               <div class="goods-describ">
                 <p class="goods-price font-bold">￥{{item.price}}/袋</p>
                 <p class="goods-name text-color-6 text-over-hidden-1">{{item.title}}</p>
                 <div class="goods-store font-12 text-color-9 clearfix">
                   <p class="fl pad-r-10 iconfont icon-dianpu"></p>
                   <p class="text-over-hidden-1" :title="item.businessVo ? item.businessVo.name : '贵州新之道生物科技有限公司'">{{item.businessVo ? item.businessVo.name : '贵州新之道生物科技有限公司'}}</p>
                 </div>
               </div>
               <!-- 买三送一标志 -->
               <div class="goods-mark-t"></div>
               <div class="goods-mark-c">买3送1</div>
               <div class="goods-mark-b"></div>
             </div>
           </div>
         </div>
       </div>
      <!-- 分页按钮 -->
      <div class="text-center">
        <el-pagination
        :total="total"
        :page-size="20"
        v-show="total ===0 ? false : true"
        background
        layout="prev, pager, next"
        @current-change="handleCurrentChange"
        ></el-pagination>
      </div>
    </div>
    <!-- 商品结束 -->
  </div>
</template>

<script>
import Logo from '../index/Module-logo.vue'
import Goods from '../index/Module-like.vue'
import {getStoreData, Banner, getSalerCategary, getIndexLists} from '../../common/sendAxios.js'
import {swiper, swiperSlide} from 'vue-awesome-swiper'
import Operation from '../public/Operation.js'
export default {
  data () {
    return {
      shop: {}, // 初始化店铺信息
      total: 0, // 总商品条数
      loading: true, // 页面加载
      cur: 0, // 默认首页
      shopId: '', // 初始化商家Id
      businessId: '',
      swiperOptions: {
        pagination: { // 显示分页
          el: '.swiper-pagination',
          // 圆点点击
          clickable: true
        },
        autoplay: true
      },
      swiperOptions1: {
        autoplay: true,
        // speed: 2500,
        slidesPerView: 4,
        spaceBetween: 30,
        // centeredSlides : true,
        // watchSlidesProgress: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      bannerLists: [
        {
          img: require('../../img/timg.jpg')
        }, {
          img: require('../../img/timg1.jpg')
        }
      ],
      navLists: [
        '首页', '饲料系列', '兽药系列', '特产系列', '生鲜系列'
      ],
      topGoodsLists: [],
      specialLists: [
        {
          imgurl: require('../../img/hot-goods2.png'),
          title: '饲料'
        },
        {
          imgurl: require('../../img/hot-goods3.png'),
          title: '兽药'
        },
        {
          imgurl: require('../../img/hot-goods4.png'),
          title: '特产'
        },
        {
          imgurl: require('../../img/hot-goods5.png'),
          title: '生鲜'
        }
      ],
      goodsLists: []
    }
  },
  components: {
    Logo,
    Goods,
    swiper,
    swiperSlide
  },
  created () {
    this.shopId = this.$route.query.id
    this.businessId = this.$route.query.businessId
  },
  methods: {
    changeTabs (num) { // 导航切换
      this.cur = num
    },
    getData () { // 获取banner
      Banner({
        data: {},
        success: (res) => {
          if (res.code === 0) {
            this.loading = false
            this.bannerLists = res.data.list
          }
        },
        error: (error) => {
          console.log(error)
        }
      })
    },
    getStoreInfo () { // 获取店铺数据
      getStoreData({
        data: {
          id: this.shopId
        },
        success: (res) => {
          if (res.code === 0) {
            this.shop = res.data.shop
            let goodsList = []
            res.data.goods.map(item => {
              if (item.isTop === '1') {
                goodsList.push(item)
              }
            })
            this.topGoodsLists = goodsList.slice(0, 3)
          }
        },
        error: (error) => {
          console.log(error)
        }
      })
    },
    getCategary () { // 获取商家商品分类
      getSalerCategary({
        data: {
          businessId: this.businessId
        },
        success: (res) => {
          console.log(res)
          if (res.code === 0) {
            this.navLists = res.data
          }
        },
        error: (error) => {
          console.log(error)
        }
      })
    },
    getGoodsLists (pageNum = 1, pageSize = 20, businessId = this.businessId) { // 请求商品列表
      getIndexLists({
        data: {
          pageNum,
          pageSize,
          businessId
        },
        success: (res) => {
          if (res.code === 0) {
            this.goodsLists = res.data.list
            this.total = res.data.total
          }
        },
        error: (error) => {
          console.log(error)
        }
      })
    },
    handleCurrentChange (val) { // 分页请求
      this.pageNum = val
      this.getGoodsLists(this.pageNum, this.pageSize)
    },
    toConfirmOrder (goods) { // 立即购买
      goods.num = 1
      goods.totalPrice = Operation.mul(goods.price, 1)
      const {href} = this.$router.resolve({
        path: '/confirmgoods',
        query: {
          goods: encodeURIComponent(JSON.stringify(goods))
        }
      })
      window.open(href, '_blank')
    }
  },
  mounted () {
    this.getData()
    this.getStoreInfo()
    this.getCategary()
    this.getGoodsLists()
  }
}
</script>

<style lang="less">
@import '../../less/common-module.less';
@import '../../less/tshop.less';
</style>
