<template>
  <div>
    <!-- 商品详情页 -->
    <div class="detail-box">
      <!-- Logo -->
      <Logo></Logo>
      <!-- 当前位置索引 -->
      <div class="position-index mar-t-20">
        <div class="content">
          <a>饲料系列</a>
          <span class="el-icon-arrow-right"></span>
          <a>猪用饲料</a>
          <span class="el-icon-arrow-right"></span>
          <a>酒糟料</a>
        </div>
      </div>
      <!-- 改版后 -->
      <div class="detai-shop-logo content text-center">
        <div class="detai-shop-avatar inline-block" @click="intoStore">
          <img :src="logo" />
        </div>
        <div class="space-line"></div>
      </div>
      <div class="detail-position mar-t-20">
        <div class="content">
          <div class="position-item cursor-pointer" @click="intoStore">所有商品</div>
        </div>
      </div>
      <!-- 商品详情 -->
      <div class="goods-detail content">
        <!-- 商品详情图 -->
        <div class="goods-detail-box clearfix">
          <!-- 左 -->
          <div class="show-img-box fl">
            <!-- 图片显示大 -->
            <div class="detail-img-big">
             <!-- <img :src="ImgUrl" v-if="imgUrls.length == 0" class="img">
              <img :src="imgUrls[index]" v-if="imgUrls.length > 0" class="img"> -->
              <img :src="ImgUrl" class="img">
            </div>
            <!-- 小图列表 -->
            <div class="little-img">
              <ul class="little-img-lists" v-for="(item, index) in imgUrls" :key="index">
                <li class ="little-img-list" @click="getLittle(index)">
                  <img :src="item" class="img">
                </li>
              </ul>
            </div>
          </div>
          <!-- 右 -->
          <div class="happy-buy-box fl">
            <div class="font-20 font-bold text-color-3 mar-b-16">{{title}}</div>
            <!-- 狂欢框 -->
            <div class="happy-bonus-box">
              <div class="happy-active-title text-white">
                <!-- <img src="../../img/happy-bg.png" class="bonus-title-img img"> -->
                <div class="happy-bonus-notice">
                  <span class="font-18 pad-l-20">天猫购物狂欢节</span>
                  <span class="font-14 pad-l-40">此商品在12月11日开售，请提前加入购物车</span>
                </div>
              </div>
              <!-- 狂欢价 -->
              <div class="happy-active-price mar-t-10">
                <div class="bonus-notice">
                  <div class="pad-l-10 bonus-img-notice">
                    <img src="../../img/bonus.png">
                    <span class="font-12 text-color-6 pad-l-6">领津贴每满400减50</span>
                  </div>
                  <div class="get-bonus font-14">
                    领取
                    <span class="el-icon-arrow-right arrow-right"></span>
                  </div>
                </div>
                <!-- 价格 -->
                <div class="mar-t-24">
                  <div class="bonus-bonus-price">
                    <span class="font-16 happy-price-text">价格：</span>
                    <span class="active-price font-28">￥</span>
                    <span class="old-price font-40 font-bold">{{price}}</span>
                    <span class="active-price font-28">元</span>
                  </div>
                  <!-- <div class="bonus-bonus-price mar-t-8">
                    <span class="font-16 happy-price-text">双十二狂欢价：</span>
                    <span class="active-price font-28">￥125.99</span>
                  </div> -->
                </div>
              </div>
            </div>
            <!-- 配送地址 -->
            <!-- <div class="deliver-address font-14 mar-t-20">
              <div class="text-color-9">配送</div>
              <div class="deliver-detail">
                <div>江苏南京至</div>
                <div class="pad-l-8">
                  <span>重庆<i class="el-icon-arrow-down pad-lr-2"></i></span>
                </div>
                <div>
                  <span>万州区<i class="el-icon-arrow-down pad-lr-2"></i></span>
                </div>
                <div>快递：0.00</div>
              </div>
            </div> -->
            <!-- 销量统计 -->
            <!-- <div class="sale-count font-12 text-color-9 mar-t-20">
              <div class="sale-count-item">
                <span>月销量</span>
                <span class="month-sale-num">20+</span>
                <span class="sale-count-split">|</span>
              </div>
              <div class="sale-count-item">
                <span>累计评价</span>
                <span class="count-evaluation-num">333+</span>
                <span class="sale-count-split">|</span>
              </div>
              <div class="sale-count-item">
                <span>购物积分</span>
                <span class="shopping-integral-num">333</span>
              </div>
            </div> -->
            <!-- 数量 -->
            <div class="buy-it-num font-14 text-color-9 mar-t-30">
              <div>数量</div>
              <div class="num-operate mar-l-40">
                <div class="num-input mar-r-4">
                  <input type="text" :value="goodsNum" class="pad-l-6">
                </div>
                <div class="arrow-btns mar-r-10">
                  <div class="el-icon-arrow-up arrow-btn cursor-pointer" @click="numAdd"></div>
                  <div class="el-icon-arrow-down arrow-btn cursor-pointer" @click="numCut"></div>
                </div>
                <div class="mar-r-20">件</div>
                <div class="pad-r-10">库存130件</div>
              </div>
            </div>
            <!-- 花呗分期 -->
            <div class="money-installment font-14">
              <!-- <div class="text-color-9">花呗分期</div> -->
              <div class="installment-detail-box mar-l-20">
                <!-- notice -->
                <!-- <div class="text-color-9 mar-b-10">
                  <span class="notice-text" @click="toLogin">登录</span>
                  <span>后确认是否享有该服务</span>
                  <span class="notice-text">什么是花呗分期</span>
                </div>
                <div class="installment-type text-color-6">
                  <div class="installment-type-item" v-for="(item, index) in installmentLists" :key="index" :class="{'active-type':cur==index}" @click="chooseType(index)">
                    <p>￥{{item.price}}x{{item.period}}期</p>
                    <p class="pad-t-4">({{item.text}})</p>
                  </div>
                </div> -->
              </div>
            </div>
            <!-- 购买&加入购物车按钮 -->
            <div class="detail-btns mar-t-40">
              <div class="buy-it-btn mar-r-10 cursor-pointer" @click="toConfirmOrder">立即购买</div>
              <div class="add-shopcart-btn" @click="addShopCart">加入购物车</div>
            </div>
            <!-- 条款列表 -->
            <div class="service-terms text-color-9 font-14 mar-t-30">
              <ul class="terms-lists">
                <li class="terms-list" v-for="(item, index) in termsLists" :key="index">{{item}}</li>
              </ul>
              <div>
                <div class="cursor-pointer">
                  <span>支付方式</span>
                  <span class="el-icon-arrow-down"></span>
                </div>
              </div>
            </div>
          </div>
          <!-- 新之道旗舰店 -->
          <div class="flagship-box fl">
            <!-- 名称 -->
            <div class="text-center flagship-title">{{name}}</div>
            <!-- 内容 -->
            <div class="flagship-content font-14">
              <!-- 服务评价 -->
              <div class="service-evaluation">
                <div class="service-item pad-tb-10">
                  <span>商品服务</span>
                  <span class="service-level">9.28高</span>
                </div>
                <div class="service-item pad-tb-10">
                  <span>物流服务</span>
                  <span class="service-level">9.28高</span>
                </div>
                <div class="service-item pad-tb-10">
                  <span>售后服务</span>
                  <span class="service-level">9.28高</span>
                </div>
              </div>
              <!-- 进店&关注 -->
              <div class="store-choose pad-tb-10 font-14">
                <div class="into-store cursor-pointer" @click="intoStore">进店逛逛</div>
                <div class="into-store cursor-pointer" @click="getFoucusStore(goods.shopVo.id)">{{isAttention == false ? '关注店铺' : '已关注'}}</div>
                <div class="into-store cursor-pointer mar-t-10" @click="collectData">{{goods.isCollection == 0 ? '收藏商品' : '已收藏'}}</div>
                <div class="into-store cursor-pointer mar-t-10">联系客服</div>
              </div>
              <!-- 信息 -->
              <div class="flagship-info font-14 text-color-9">
                <div class="pad-tb-12">
                  <span>商家认证：</span>
                  <span>已认证</span>
                </div>
                <div class="pad-tb-12">
                  <span>所在地区：</span>
                  <span>贵州贵阳</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 收藏商品（人气） -->
        <div class="collect-popular font-14 text-color-9">
          <div>
            <span>收藏商品</span>
            <span>(880人气)</span>
          </div>
          <div>举报</div>
        </div>
        <!-- 店长推荐轮播 -->
        <!-- <div class="manager-recomm"> -->
          <!-- <div class="manager-title">
            <div class="manager-title-box font-20 font-bold">店长推荐</div>
          </div> -->
          <!-- 商品轮播 -->
          <!-- <div class="mar-t-20">
            <swiper :options="swiperOption" class="slide-lists">
              <swiper-slide class="slide-list" v-for="(item, index) in bannerLists" :key="index">
               <div class="slide-list-item">
                 <div class="slide-list-img">
                   <img :src="item.img" class="img">
                 </div>
                  <div class="circle-img"><img src="../../img/deitail-circle.png"></div>
                  <div class="get-price text-white text-center">
                    <p class="font-12">到手价：</p>
                    <p>
                      <span>120</span>
                      <span class="font-12">/元</span>
                    </p>
                  </div>
               </div>
                <div class="banner-goods-price font-18 text-center">￥19.99</div>
              </swiper-slide>
            </swiper>
          </div> -->
        <!-- </div> -->
        <!-- 本店搜索&宝贝分类&商品详情 -->
        <div class="goods-detail-bottom clearfix">
          <!-- 本店搜索&宝贝分类 -->
          <div class="detail-bottom-left fl">
            <!-- 本店搜索开始 -->
            <div class="inner-search">
              <div class="search-title font-14 font-bold">本店搜索</div>
              <div class="search-tool">
                <div class="keyword-search">
                  <span class="search-text font-14 text-color-6">关键字</span>
                  <div class="key-input mar-l-24"><input type="text"></div>
                </div>
                <!-- <div class="price-search mar-t-20">
                  <span class="search-text font-14 text-color-6">价格</span>
                  <div class="price-input-box mar-l-24">
                    <div class="start-price"><input type="text" value="￥"></div>
                    <div class="pad-lr-4 text-color-6">-</div>
                    <div class="end-price"><input type="text" value="￥"></div>
                  </div>
                </div> -->
                <div class="text-center mar-t-20">
                  <div class="search-tool-btn">
                    <span class="el-icon-search"></span>
                  </div>
                </div>
              </div>
            </div>
            <!-- 本店搜索结束 -->
            <!-- 宝贝分类开始 -->
            <div class="goods-classify mar-t-20">
              <div class="classify-title font-14 font-bold">宝贝分类</div>
              <!-- <div class="look-all-goods font-14 font-bold">查看所有宝贝</div> -->
              <!-- <div class="classify-type-box">
                <ul class="text-color-6 font-14">
                  <li class="classify-type text-center">
                    <a class="mar-l-4">按综合</a>
                    <a>按销量</a>
                    <a>按分类</a>
                    <span class="dot"></span>
                  </li>
                </ul>
              </div> -->
              <!-- 按系列分 -->
              <div>
                <div class="series-classify font-14 font-bold">按系列分</div>
                <ul class="classify-lists font-14 text-color-9">
                  <li class="classify-list" v-for="(item, index) in seriesLists" :key="index">
                    <a class="series-name">{{item.name}}</a>
                    <span class="dot"></span>
                  </li>
                </ul>
              </div>
              <!-- 按饲料分 -->
              <!-- <div class="mar-t-20">
                <div class="feed-classify font-14 font-bold">按饲料分</div>
                <ul class="classify-lists font-14 text-color-9">
                  <li class="classify-list" v-for="(item, index) in classifyLists" :key="index">
                    <a class="series-name">{{item.name}}</a>
                    <span class="dot"></span>
                  </li>
                </ul>
              </div> -->
              <!-- 查看更多宝贝 -->
              <div class="look-more-box mar-t-20">
                <div class="look-more-btn text-center font-14" @click="intoStore">
                  <span>查看更多宝贝</span>
                  <span class="iconfont icon-youjiantou3"></span>
                </div>
              </div>
            </div>
            <!-- 宝贝分类结束 -->
          </div>
          <!-- 商品详情&累计评价 -->
          <div class="detail-bottom-right">
            <!-- tab切换 -->
            <div class="bottom-tab cursor-pointer" v-for="(item, index) in tabItems" :key="index">
              <div class="tab-text text-center" @click="clickDtail">{{item.detail}}</div>
              <div class="pad-l-44 fl eval">
                <span  @click="clickDtail">{{item.evaluation}}</span>
                <span class="pad-l-12">{{item.num}}</span>
              </div>
            </div>
            <!-- 参数详情 -->
            <div class="params-detail font-14">
              <div class="text-color-6 param-title">品牌名称：快大壮</div>
              <div class="text-color-9 mar-t-40">
                <div>产品参数</div>
                <div class="params-item">
                  <span class="label-param">生产许可证编号：</span>
                  <span class="label-param">厂名：</span>
                  <span class="label-param">厂址：</span>
                </div>
                <div class="params-item">
                  <span class="label-param">厂家联系方式</span>
                  <span class="label-param">配料表：</span>
                  <span class="label-param">储藏方法：</span>
                </div>
                <div class="params-item">
                  <span class="label-param">保质期：</span>
                  <span class="label-param">品牌：</span>
                  <span class="label-param">系列：</span>
                </div>
                <div class="params-item">
                  <span class="label-param">规格：</span>
                  <span class="label-param">产地：中国大陆</span>
                  <span class="label-param">省份：</span>
                </div>
                <div class="params-item">
                  <span class="label-param">城市：</span>
                  <span class="label-param">净含量：</span>
                  <span class="label-param">包装方式：</span>
                </div>
              </div>
            </div>
            <!-- 生产详情 -->
            <div class="production-detail font-14 text-color-6">
              <span class="pad-l-30">生产详情：2020-02-02 至 2020-09-09</span>
            </div>
            <!-- 狂欢放肆购 -->
            <div class="happy-shopping">
              <!-- 标题 -->
              <div class="happy-shopping-title">
                <img src="../../img/detail-bg.png" class="happy-img img">
                <div class="happy-shopping-text">狂欢放肆购</div>
              </div>
              <!-- 开抢时间 -->
              <div class="font-32 text-white text-center take-time">11月10日0点开抢</div>
              <!-- 抢购商品 -->
              <div class="happy-take">
                <div v-html="goods.info">{{goods.info}}</div>
              </div>
            </div>
          </div>
        </div>
        <!-- 商品评价 -->
        <div class="goods-evolution">
          <!-- 标题 -->
          <div class="goods-evolution-title text-white pad-l-30">商品评价</div>
          <div class="evalution-box">
            <div class="evalution-num font-24 text-color-6">
              <span>商品评价</span>
              <span>(1234)</span>
            </div>
            <!-- 好评&差评 -->
            <div class="evolution-type pad-l-30">
              <div class="evolution-type-btn mar-r-30" @click="clickEvalution(index)" v-for="(item, index) in evalutionBtn" :key="index" :class="{on:ind==index}">
                {{item}}
              </div>
            </div>
            <!-- 评价内容 -->
            <div class="evalution-content pad-l-30 clearfix mar-t-24">
              <!-- 用户头像 -->
              <div class="evalution-avatar fl">
                <div class="user-info">
                  <!-- 头像 -->
                  <div class="user-avatar">
                    <img src="../../img/timg.jpg" class="img">
                  </div>
                  <!-- 昵称 -->
                  <div class="mar-l-20 font-14 text-color-6 mar-t-10">匆匆那年匆匆那年</div>
                </div>
                <div class="plus-center mar-t-10 font-12">PLUS会员</div>
              </div>
              <!-- 评论内容 -->
              <div class="evalution-detail font-14 fl mar-l-40">
                <!-- 评论星级 -->
                <div class="star-num">
                  <span class="el-icon-star-on"></span>
                  <span class="el-icon-star-on"></span>
                  <span class="el-icon-star-on"></span>
                </div>
                <!-- 评论内容 -->
                <div class="evalution-text mar-t-20 text-color-3">
                  这是评论这是评论这是评论这是评论这是评论这是评论这是评论这是评论这是评论这是评论这是评论
                  这是评论这是评论这是评论这是评论这是评论这是评论这是评论这是评论这是评论这是评论这是评论
                  这是评论这是评论这是评论这是评论这是评论这是评论这是评论这是评论这是评论这是评论这是评论
                </div>
                <!-- 评论时间 -->
                <div class="evalution-date text-color-6 mar-t-40">
                  <div>
                    <span>快大壮浓缩饲料</span>
                    <span class="pad-l-60">2019-12-11 10:29</span>
                  </div>
                  <div class="cursor-pointer">
                    <span class="pad-r-20">举报</span>
                    <span class="el-icon-thumb pad-r-20">2</span>
                    <span class="el-icon-chat-dot-round pad-r-20">1</span>
                  </div>
                </div>
                <!-- 追评 -->
                <div class="add-evalution">
                  <div class="text-color-6 mar-tb-14">[购买20天后追评]</div>
                  <div class="text-color-3">
                    这是追评这是追评这是追评这是追评这是追评这是追评这是追评这是追评这是追评这是追评这是追评
                    这是追评这是追评这是追评这是追评这是追评这是追评这是追评这是追评这是追评这是追评这是追评
                  </div>
                </div>
                <!-- 商家回复 -->
                <div class="saler-evalution">
                  <div>
                    买家您好！很高兴您对我们的商品满意，您的满意将是我们继续向前的动力，感谢您的支持和厚爱,
                    买家您好！很高兴您对我们的商品满意，您的满意将是我们继续向前的动力，感谢您的支持和厚爱,
                    买家您好！很高兴您对我们的商品满意，您的满意将是我们继续向前的动力，感谢您的支持和厚爱,
                    买家您好！很高兴您对我们的商品满意，您的满意将是我们继续向前的动力，感谢您的支持和厚爱
                  </div>
                  <div class="text-color-9 mar-t-14">2020.01.01</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 商品评价结束 -->
      </div>
    </div>
  </div>
</template>

<script>
import Logo from './Module-logo.vue'
import {getGoodsDetail, getFocus, collectGoods, getShopCart, categoryData, isAttentionShop} from '../../common/sendAxios'
import {swiper, swiperSlide} from 'vue-awesome-swiper'
import Operation from '../public/Operation.js'
export default {
  data () {
    return {
      cur: -1,
      ind: 0,
      index: 0,
      name: '', // 店铺名称
      goodsNum: 1, // 初始化购买数量
      focusText: '关注店铺', // 关注店铺
      alreadyText: '已关注', // 取消关注
      color: '#ff4800',
      swiperOption: {
        slidesPerView: 5,
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        autoplay: {
          delay: 2000
        },
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev'
      },
      goodsId: '', // 初始化商品id
      price: '', // 初始化价格
      title: '', // 初始化商品名称
      shopId: '', // 初始化店铺Id
      salerId: '', // 进店逛逛需要的商家id
      businessId: '', // 初始化商家标识
      // 小图列表
      imgUrls: [],
      // 默认显示的第一张大图
      ImgUrl: '',
      installmentLists: [
        {
          price: 190.61,
          text: '含手续费',
          period: 3
        }, {
          price: 97.35,
          text: '含手续费',
          period: 6
        }, {
          price: 50.07,
          text: '含手续费',
          period: 12
        }
      ],
      termsLists: [
        '服务承诺', '破损包退', '正品保证', '急速退款', '七天无理由退换'
      ],
      classifyLists: [
        '猪用饲料', '家禽饲料', '牛羊饲料', '反刍饲料', '多维产品', '添加剂', '微量元素', '其他饲料', '饲料原料'
      ],
      seriesLists: [
        '饲料系列', '兽药系列', '特产系列', '生鲜系列'
      ],
      tabItems: [
        {
          detail: '商品详情',
          evaluation: '累计评价',
          num: '123456'
        }
      ],
      takeImgLists: [
        {
          imgUrl: require('../../img/hot-goods2.png')
        }, {
          imgUrl: require('../../img/hot-goods4.png')
        }
      ],
      takePriceLists: [
        {
          price: 145
        }, {
          price: 280
        }
      ],
      evalutionBtn: [
        '好评', '差评'
      ],
      bannerLists: [
        // 轮播列表
        {
          img: require('../../img/timg.jpg')
        }, {
          img: require('../../img/hot-goods2.png')
        }, {
          img: require('../../img/timg2.jpeg')
        }, {
          img: require('../../img/timg3.jpeg')
        }, {
          img: require('../../img/timg4.jpeg')
        }, {
          img: require('../../img/timg2.jpeg')
        }
      ],
      logo: '',
      goods: {}, // 商品数据
      isAttention: false
    }
  },
  beforeEach: (to, from, next) => {
    if (to.meta.title) {
      document.title = to.meta.title
    }
    next()
  },
  created () {
    this.goodsId = this.$route.query.goodsId
    this.shopId = this.$route.query.shopId
    // console.log(this.shopId)
    let user = JSON.parse(localStorage.getItem('info'))
    this.getDetailData(this.goodsId, user.id)
  },
  methods: {
    // 点击按钮数量增加
    numAdd () {
      this.goodsNum++
    },
    // 点击按钮数量减少
    numCut () {
      this.goodsNum--
      if (this.goodsNum < 1) {
        this.goodsNum = 1
      }
    },
    // 点击小图片时将路径复制给大图的路径
    getLittle (index) {
      // this.ImgUrl = imgUrl
      this.index = index
    },
    // 选择分期类型
    chooseType (ind) {
      this.cur = ind
    },
    toLogin () {
      // 跳转登录
      this.$router.push('/login')
    },
    // 改变商品详情和累计评价字体颜色
    clickDtail (e) {
      let detail = document.querySelector('.tab-text')
      let evalution = document.querySelector('.eval')
      if (e.target.innerText === '商品详情') {
        detail.style.color = this.color
        evalution.style.color = '#7d7d7d'
      } else if (e.target.innerText === '累计评价') {
        evalution.style.color = this.color
        detail.style.color = '#7d7d7d'
      }
    },
    clickEvalution (num) {
      // 切换好评和差评
      this.ind = num
    },
    // 立即购买跳转确认订单
    toConfirmOrder () {
      this.goods.num = this.goodsNum
      this.goods.totalPrice = Operation.mul(this.goods.price, this.goodsNum)
      const {href} = this.$router.resolve({
        path: '/confirmgoods',
        query: {
          goods: encodeURIComponent(JSON.stringify(this.goods))
        }
      })
      window.open(href, '_blank')
    },
    getDetailData (goodsId, userId) {
      // 请求商品详情数据
      getGoodsDetail({
        data: {
          goodsId,
          userId
        },
        success: (res) => {
          if (res.code === 0) {
            this.goods = res.data
            this.price = res.data.price
            this.title = res.data.title
            this.businessId = res.data.businessId
            this.imgUrls = res.data.imgUrlList
            if (this.imgUrls.length === 0) {
              this.ImgUrl = res.data.imgUrl
            } else {
              this.ImgUrl = res.data.imgUrl
            }
            // 店铺名称
            this.name = res.data.shopVo.name
            this.salerId = res.data.shopVo.id
            this.logo = this.goods.shopVo.logo
            let user = JSON.parse(localStorage.getItem('info'))
            if (user) {
              this.isAttentionShop(user.id, this.salerId)
            }
          }
        },
        error: (error) => {
          console.log(error)
        }
      })
    },
    getBanner () {
      // 请求店长推荐轮播
      let Banner = this.bannerLists
      let newBanner = Banner.slice(0, 4)
      Banner = Banner.concat(newBanner)
    },
    // 关注店铺请求后台数据
    getFoucusStore (shopId) {
      // 获取localstorage里存储的userId
      let id = ''
      let token = window.localStorage.getItem('token')
      let info = JSON.parse(window.localStorage.getItem('info'))
      if (token) {
        id = info.id
      }
      getFocus({
        data: {
          userId: id,
          shopId
        },
        success: (res) => {
          if (res.code === 0) {
            this.isAttention = true
          } else {
            this.isAttention = false
          }
        },
        error: (error) => {
          console.log((error))
        }
      })
    },
    // 收藏商品请求接口
    collectData () {
      // 获取前端localstorage存储的token值和info
      let token = window.localStorage.getItem('token')
      let info = JSON.parse(window.localStorage.getItem('info'))
      let id = '' // 初始化用户id
      if (token) { // 如果token值存在
        id = info.id
      }
      collectGoods({
        data: {
          userId: id,
          goodsId: this.goodsId
        },
        success: (res) => {
          if (res.data === 0) {
            this.goods.isCollection = 0
          }
          if (res.data === 1) {
            this.goods.isCollection = 1
          }
        },
        error: (error) => {
          console.log(error)
        }
      })
    },
    // 加入购物车请求
    addShopCart () {
      // 获取本地存储的token 判断用户是否登录 以便获取用户Id
      let token = window.localStorage.getItem('token')
      let info = JSON.parse(window.localStorage.getItem('info'))
      let userId = ''
      if (token) {
        userId = info.id
      }
      getShopCart({
        data: {
          sellId: this.businessId,
          buyId: userId,
          price: this.price,
          goodsId: this.goodsId,
          num: this.goodsNum
        },
        success: (res) => {
          if (res.code === 0) {
            this.$router.go(0)
          }
        },
        error: (error) => {
          console.log(error)
        }
      })
    },
    intoStore () { // 进店逛逛
      this.$router.push({path: '/shopstore', query: {id: this.salerId, businessId: this.businessId}})
    },
    getCategary () { // 获取商品分类
      categoryData({
        success: (res) => {
          if (res.code === 0) {
            // 按系列分
            this.seriesLists = res.data
          }
        },
        error: (error) => {
          console.log(error)
        }
      })
    },
    // 校验用户是否关注店铺
    isAttentionShop (userId, shopId) {
      isAttentionShop({
        data: {
          userId,
          shopId
        },
        success: res => {
          if (res.code === 0) {
            this.isAttention = res.data
          } else {
            this.isAttention = false
          }
        },
        error: e => {
          console.log(e)
        }
      })
    }
  },
  components: {
    Logo,
    swiper,
    swiperSlide
  },
  mounted () {
    this.getBanner()
    this.getCategary()
  }
}
</script>

<style lang="less">
@import '../../less/tdetail.less';
</style>
