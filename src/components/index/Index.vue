<template>
  <div
  v-loading="loading"
  element-loading-text="拼命加载中"
  element-loading-spinner="el-icon-loading"
  element-loading-background="rgba(0, 0, 0, 0.8)"
  >
    <!-- 商城首页 -->
    <!-- Logo部分开始 -->
    <Logo></Logo>
    <!-- Logo部分结束 -->
    <!-- 内容开始 -->
    <!-- 导航 -->
    <Nav></Nav>
    <div class="content">
      <!-- 轮播部分 -->
      <div class="banner-part">
        <!-- 二级菜单 -->
        <ul class="vice-nav-lists text-color-6">
          <li class="vice-nav-list" v-for="(item, index) in viceMenuLists" :key="index">
            <a class="index-first-name">※ {{item.name}}</a>
            <ul class="index-classify-lists">
              <li class="index-classify-list" v-for="(i, ind) in item.subCategories" :key="ind" @click="getSearchData(i)">
                {{i.name}}
              </li>
            </ul>
          </li>
        </ul>
        <swiper :options="swiperOption" v-if="bannerOneLists.length > 0" class="banner-box mar-lr-10">
          <!--轮播盒子-->
          <swiper-slide v-for="(item, index) in bannerOneLists" :key="index" class="banner-slider">
            <img :src="item.img" v-if="index === 0 || index === (bannerOneLists.length - 1)">
            <img :src="item.img" v-else>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
        <!-- 文章列表 -->
        <div class="artical">
          <!-- 头像信息 -->
          <div class="avatar-box text-center mar-t-10 cursor-pointer">
            <p class="avatar" @click="toCenter">
              <img :src="headimgurl">
            </p>
            <p class="msg text-color-69 font-14 pad-t-4" v-show="isLogin">你好，{{username}}</p>
          </div>
          <!-- 按钮组 -->
          <div class="text-center mar-t-20">
            <span class="normal-btn" @click="toLogin" v-if="!isLogin"><i class="iconfont icon-dengluyemianyonghuming pad-r-6"></i>登录</span>
            <span class="normal-btn" @click="toRegister" v-if="!isLogin"><i class="iconfont icon-zhuce pad-r-6"></i>注册</span>
            <span class="normal-btn" @click="toOpen"><i class="iconfont icon-kaidianchenggong pad-r-6"></i>{{store ? '我的店铺' :'开店'}}</span>
           <!-- <span class="normal-btn" @click="toSalerCenter" v-if="store"><i class="iconfont icon-kaidianchenggong pad-r-6"></i>我的店铺</span> -->
          </div>
          <!-- 公告新闻 -->
          <div class="artical-news">
            <!-- 标题 -->
            <div class="clearfix pad-b-10 news-title">
              <span class="fl text-color-69">公告新闻</span>
              <span class="fr text-color-69 cursor-pointer" @click="toNews">更多<i class="iconfont icon-youjiantou"></i></span>
            </div>
            <!-- 内容 -->
            <div class="news-cont text-color-9 font-12 cursor-pointer" @click="toNewsDetail(i)" v-for="i in newsArr" :key="i.id">{{i.title}}</div>
          </div>
        </div>
      </div>
      <!-- 轮播结束 -->
      <!-- 大轮播开始 -->
      <div class="mar-tb-20">
        <ul>
          <li class="pig-foods" v-for="(item, index) in bannerTwoLists" :key="index">
            <img :src="item.imgurl" alt="">
          </li>
        </ul>
      </div>
      <!-- 大轮播结束 -->
      <!-- 热销推荐开始 -->
      <div class="hot-sale bg-white clearfix mar-b-20">
        <div class="hot-main fl" @click="toLike">
          <img src="../../img/hot-main.png" alt="">
        </div>
        <div class="hot-sale-box fl">
          <div class="hot-sale-lists" @click="toGoodsDetail(item)" v-for="(item, index) in hotSaleLists" :key="index">
            <div class="hot-sale-list" v-if="index%2 != 0">
              <div class="list-box text-center">
                <img :src="item.imgUrl.split(',')[0]" alt="">
              </div>
              <p class="font-14 goods-name pad-t-10">{{item.title}}</p>
            </div>
            <div class="hot-sale-list" v-if="index%2 == 0">
              <p class="font-14 goods-name pad-b-10">{{item.title}}</p>
              <div class="list-box text-center">
                <img :src="item.imgUrl" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 热销推荐结束 -->
      <!-- 新品发布开始 -->
      <div class="new-sale mar-b-10 clearfix">
        <div class="new-left fl bg-white">
          <div class="new-title">
            <span class="font-16 text-color-3">新品发布</span>
            <span class="iconfont icon-youjiantou3"></span>
          </div>
          <el-carousel :interval="4000" type="card" height="300px" indicator-position="none">
              <el-carousel-item class="banner-new-list" v-for="(item, index) in releaseLists" :key="index">
                <div class="banner-item" @click="toNewDetail">
                  <img :src="item.imgUrl.split(',')[0]" />
                </div>
                <div class="banner-item-describ text-color-6 text-center">
                  <p class="mar-b-4">{{item.title}}</p>
                  <p class="new-goods-price font-bold">￥{{item.price}}</p>
                </div>
              </el-carousel-item>
          </el-carousel>
        </div>
        <div class="new-right fr bg-white">
          <div class="new-title">
            <span class="font-16 text-color-3">排行榜</span>
            <span class="iconfont icon-youjiantou3"></span>
          </div>
          <!-- 排行榜按钮组 -->
          <div class="ranking-btns mar-tb-10">
            <div class="ranking-btn" v-for="(i, ind) in rankingText" :key="ind" :class="{'is-actived':cur == ind}" @click="changeRank(ind)">{{i}}</div>
          </div>
          <!-- 排行榜产品 -->
          <div class="rank-lists mar-t-40 mar-b-20">
            <!-- 排行名称 -->
           <div class="rank-call mar-b-20 inline-block clearfix cursor-pointer" v-for="(item, index) in rankLists" :key="index">
              <div class="text-center icon-img pad-l-4">
                <img :src="item.rankIcon">
                <p class="font-24 font-bold rank-num">{{item.rankNum}}</p>
              </div>
              <div class="rank-detail">
                <div class="goods-image" @click="toGoodsDetail(item)">
                  <img :src="item.imgUrl" />
                </div>
                <div class="rank-goods">{{item.title}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 新品发布结束 -->
      <!-- 精选好货开始 -->
      <div class="special-goods">
        <!-- title图 -->
        <div class="title-img"><img src="../../img/jx-bg.png" alt=""></div>
        <!-- 商品列表 -->
        <ul class="index-goods-lists mar-t-20">
          <li class="index-goods-list mar-b-20" v-for="(i, ind) in newGoodsList" :key="ind">
            <div class="list-goods-img" @click="toGoodsDetail(i)">
              <img :src="i.imgUrl" />
            </div>
            <div class="index-goods-describ cursor-pointer" @click="toGoodsDetail(i)">
              <div class="font-18 list-goods-price font-bold">￥{{i.price}}/袋</div>
              <div class="text-over-hidden-1 font-14 text-color-6" :title="i.title">{{i.title}}</div>
            </div>
          </li>
        </ul>
      </div>
      <!-- 精选好货结束 -->
    </div>
    <!-- 内容结束 -->
  </div>
</template>

<script>
import Logo from './Module-logo.vue'
// import GoodsList from './General-module.vue'
import Nav from './Nav-index.vue'
import {swiper, swiperSlide} from 'vue-awesome-swiper'
import {Banner, getRelease, getLike, getRankLists, categoryData, getNewsLists, getStoreStatus} from '../../common/sendAxios.js'
export default {
  data () {
    return {
      cur: 0, // 排行榜默认显示饲料
      isActive: false, // 是否选中当前排行商品按钮
      rankingText: ['饲料', '动保', '添加剂', '种子苗木'], // 排行榜按钮
      isLogin: false, // 初始状态是未登录
      username: '请登录', // 初始化用户名
      headimgurl: require('../../img/avatar.png'), // 用户头像
      swiperOption: {
        // 显示分页
        pagination: {
          el: '.swiper-pagination',
          // 圆点点击
          clickable: true
        },
        // 自动轮播
        autoplay: {
          delay: 2000
        },
        // 开启循环模式
        loop: true
      },
      rankLists: [],
      rankLists1: [ // 徽章列表
        {
          rankIcon: require('../../img/king.png'),
          rankNum: '01'
        },
        {
          rankIcon: require('../../img/Ag.png'),
          rankNum: '02'
        },
        {
          rankIcon: require('../../img/bj.png'),
          rankNum: '03'
        },
        {
          rankIcon: require('../../img/qt.png'),
          rankNum: '04'
        }
      ],
      viceMenuLists: [],
      bannerOneLists: [], // 顶部轮播图数据
      indexData: {}, // 首页商品数据相关
      bannerTwoLists: [
        {
          imgurl: require('../../img/banner1.png')
        }
      ],
      hotSaleLists: [], // 热销列表
      releaseLists: [], // 新品发布
      loading: true, // 页面加载
      newGoodsList: [],
      newsArr: [], // 初始化新闻标题
      store: {} // 店铺入驻信息
    }
  },
  components: {
    Logo,
    Nav,
    swiper,
    swiperSlide
  },
  methods: {
    toLogin () { // 跳转登录
      this.$router.replace('/login')
    },
    // 跳转注册
    toRegister () {
      this.$router.replace('/register/first')
    },
    // 跳转个人中心
    toCenter () {
      this.$router.replace('/buyer/center')
    },
    // 跳转新品发布页面
    toNewDetail () {
      this.$router.replace('/release')
    },
    // 跳转入驻首页
    toOpen () {
      if (!this.store) {
        return this.$router.push('/openindex')
      }
      switch (this.store.isPass) {
        case '0':
          this.$router.push('/openindex/audit')
          break
        case '1':
          this.$router.push('/saler/center')
          break
        case '2':
          this.$router.push('/openindex/audit')
          break
        default:
          this.$router.replace('/openindex')
      }
    },
    // 跳转排行榜
    toRank () {
      this.$router.replace('/ranking')
    },
    // 跳转猜你喜欢
    toLike () {
      this.$router.replace('/like')
    },
    // 跳转商品详情
    toGoodsDetail (items) {
      let goodsId = items.id
      const {href} = this.$router.resolve({
        path: '/detail',
        query: {
          goodsId
        }
      })
      window.open(href, '_blank')
    },
    // 获取顶部轮播数据
    getBanner () {
      Banner({
        data: {},
        success: (res) => {
          this.loading = false
          if (res.code === 0) {
            this.bannerOneLists = res.data.list
          }
        },
        error: (error) => {
          console.log(error)
        }
      })
    },
    // 获取新品发布接口数据
    getReleaseData () {
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
    // 获取猜你喜欢接口数据
    getLikeData () {
      getLike({
        data: {
          pageNum: 1,
          pageSize: 5
        },
        success: (res) => {
          if (res.code === 0) {
            this.hotSaleLists = res.data.list
          }
        },
        error: (error) => {
          console.log(error)
        }
      })
    },
    // 获取精选好货数据
    getSpecialGoods () {
      getLike({
        data: {
          pageNum: 1,
          pageSize: 20
        },
        success: (res) => {
          if (res.code === 0) {
            this.newGoodsList = res.data.list
          }
        },
        error: (error) => {
          console.log(error)
        }
      })
    },
    // 获取用户信息
    getUserInfo () {
      let token = window.localStorage.getItem('token')
      let info = JSON.parse(window.localStorage.getItem('info'))
      let nickname = ''
      let username = ''
      if (info) {
        nickname = info.nickname
        username = info.username
      }
      if (token) {
        this.isLogin = !this.isLogin
        if (nickname) {
          this.username = nickname
        } else {
          this.username = username
        }
      }
    },
    changeRank (ind) { // 排行榜榜单切换
      this.cur = ind
      switch (ind) {
        case 0:
          this.getFeed()
          break
        case 1:
          this.getAnimal()
          break
        case 2:
          this.getAdditive()
          break
        default:
          this.getPlant()
      }
    },
    // 获取排行榜数据
    getRanking (data = {
      goodsTypeId: 1
    }) {
      getRankLists({
        data,
        success: (res) => {
          if (res.code === 0) {
            this.rankLists = res.data.list
            if (this.rankLists.length <= 4) {
              this.rankLists = res.data.list
            } else {
              this.rankLists = res.data.list.slice(0, 4)
            }
            // 利用原型方法  eg. let obj = {} obj.a = 1 原型上会有一个 c: 1
            let rankLists1 = this.rankLists1
            rankLists1.map((item, index) => {
              if (this.rankLists.length > 0) {
                this.rankLists[index].rankIcon = item.rankIcon
                this.rankLists[index].rankNum = item.rankNum
              }
            })
          }
        },
        error: (error) => {
          console.log(error)
        }
      })
    },
    // 获取饲料排行
    getFeed () {
      this.getRanking({
        goodsTypeId: 1
      })
    },
    // 获取动保排行
    getAnimal () {
      this.getRanking({
        goodsTypeId: 2
      })
    },
    // 获取添加剂排行
    getAdditive () {
      this.getRanking({
        goodsTypeId: 3
      })
    },
    // 获取种子苗木系列
    getPlant () {
      this.getRanking({
        goodsTypeId: 4
      })
    },
    getSeries () { // 获取系列分类
      categoryData({
        success: (res) => {
          if (res.code === 0) {
            this.viceMenuLists = res.data
          }
        },
        error: (error) => {
          console.log(error)
        }
      })
    },
    getSearchData (item) { // 点击子分类跳转商品搜索列表页
      let keyword = item.name
      let goodsTypeId = item.id
      console.log(goodsTypeId)
      this.$router.push({
        path: '/search',
        query: {
          keyword,
          goodsTypeId
        }
      })
    },
    getNewsData () { // 获取新闻
      getNewsLists({
        data: {
          page: 1,
          rows: 1
        },
        success: (res) => {
          if (res.code === 0) {
            this.newsArr = res.data.list
          }
        },
        error: (error) => {
          console.log(error)
        }
      })
    },
    toNews () { // 跳转新闻资讯
      this.$router.push('/news')
    },
    toNewsDetail (i) { // 跳转新闻详情
      this.$router.push({path: '/news_detail', query: {id: i.id}})
    },
    // 跳转卖家中心
    toSalerCenter () {
      this.$router.push('/saler/center')
    },
    getStoreStatus () { // 查询店铺审核状态
      let info = JSON.parse(window.localStorage.getItem('info'))
      let uid = info.id
      getStoreStatus({
        data: {
          uid
        },
        success: (res) => {
          if (res.code === 0) {
            this.store = res.data
          }
        },
        error: (error) => {
          console.log(error)
        }
      })
    }
  },
  mounted () {
    this.getBanner()
    this.getReleaseData()
    this.getLikeData()
    this.getUserInfo()
    this.getRanking()
    this.getSpecialGoods()
    this.getSeries()
    this.getNewsData()
    this.getStoreStatus()
  }
}
</script>

<style lang="less">
@import '../../less/index.less';
</style>
