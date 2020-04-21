<template>
  <div>
    <!-- logo -->
    <Logo @click.native="search"></Logo>
    <!-- 导航 -->
    <Nav></Nav>
    <!-- 内容开始 -->
    <div class="content">
      <!-- 第一部分 -->
      <div class="search-header clearfix">
        <!-- 搜索快捷菜单 -->
        <!-- <ul class="search-menu-lists fl">
          <li class="search-menu-list clearfix" v-for="(item, index) in menuLists" :key="index">
            <div class="font-20 main-title fl">{{item.mainTitle}}</div>
            <ul class="search-vice-menu fr text-color-6 font-14">
              <li v-for="(subitem, index) in item.viceTitle" :key="index">
                <a>{{subitem}}</a>
                <span>/</span>
              </li>
            </ul>
          </li>
        </ul> -->
        <!-- 热门推荐 -->
        <div class="search-hot fl">
          <!-- 热门推荐标题 -->
          <!-- <div class="search-hot-title font-16 font-bold">热门推荐</div>
          <ul class="search-hot-lists">
            <li class="search-hot-list" v-for="(item, index) in hotGoodsLists" :key="index">
              <div class="search-hot-cont clearfix">
                <div class="hot-release-img fl">
                  <img :src="item.imgurl.split(',')[0]" class="img">
                </div>
                <div class="mar-l-10 fl hot-release-detail">
                  <div class="font-14 text-color-6 text-over-hidden-1">{{item.title}}</div>
                  <div class="mar-t-18">
                    <span class="font-14 text-color-6">促销价：</span>
                    <span class="font-14 hot-release-icon">￥</span>
                    <span class="font-18 font-bold hot-release-price">{{item.price}}</span>
                    <span class="font-14 hot-release-unit">/袋</span>
                  </div>
                  <div class="look-more-btn mar-t-26 text-center cursor-pointer">
                    <span class="font-14 text-white">去看看</span>
                  </div>
                </div>
              </div>
            </li>
          </ul> -->
        </div>
      </div>
      <!-- 第二部分 推荐搜索热词和价格范围-->
      <div class="search-recommend mar-t-20">
        <!-- 词条 -->
        <div class="search-tips text-color-9 clearfix">
          <div class="fl pad-l-16">你是不是想找：</div>
          <ul class="search-tip-lists fl">
            <li v-for="(item, index) in hotTips" :key="index" class="font-14">
              <a>{{item}}</a>
            </li>
          </ul>
        </div>
        <!-- 价格范围 -->
        <div class="search-scope clearfix text-color-9">
          <div class="fl pad-l-20 font-14">价格：</div>
          <div class="search-scope-price inline-block clearfix">
            <div class="search-price-input fl">
              <input type="text" value="￥">
            </div>
            <div class="fl">-</div>
            <div class="search-price-input fl">
              <input type="text" value="￥">
            </div>
          </div>
        </div>
      </div>
      <!-- 第三部分 商品 -->
      <div class="search-goods-lists mar-t-20">
        <div class="search-goods-box" v-for="(item, index) in goodsLists" :key="index">
          <div class="search-goods-img">
            <img :src="item.imgUrl" class="img">
          </div>
          <!-- 描述 -->
          <div class="search-goods-describ">
            <div class="search-goods-price font-bold">
              <span>￥{{item.price}}/{{item.unit}}</span>
              <!-- 包邮 -->
              <span class="package-mail text-white font-12">包邮</span>
            </div>
            <div class="search-goods-name text-color-6 text-over-hidden-1" :title="item.title">{{item.title}}</div>
            <div class="search-goods-store font-12 text-color-9">
             <p class="text-over-hidden-1" :title="item.businessVo ? item.businessVo.name : '贵州新之道生物科技有限公司'">{{item.businessVo ? item.businessVo.name : '贵州新之道生物科技有限公司'}}</p>
            </div>
            <div class="clearfix text-color-6 font-12 mar-t-4">
              <div class="fl">{{item.sellNum}}人付款</div>
              <div class="fr realy-describ">
                <span>如实描述</span>
                <span class="realy-describ-percent">48</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 分页 -->
      <div class="text-center">
        <!-- <Pagination></Pagination> -->
        <el-pagination
          :total="total"
          :page-size="20"
          v-show="total ===0 ? false : true"
          @current-change="handleCurrentChange"
          background
          layout="prev, pager, next"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from './Module-logo.vue'
import Nav from './Nav-index.vue'
// import Pagination from '../public/Pagination.vue'
import {searchData, getSrearchTips} from '../../common/sendAxios'
export default {
  data () {
    return {
      total: 0, // 总页数
      userId: '', // 初始化用户ID
      menuLists: [
        {
          mainTitle: '饲料',
          viceTitle: [
            '猪用饲料', '家禽饲料', '牛羊饲料', '水产饲料', '反刍饲料', '添加剂'
          ]
        }, {
          mainTitle: '动保',
          viceTitle: [
            '猪用兽药', '家禽饲料', '牛羊饲料'
          ]
        }, {
          mainTitle: '特产',
          viceTitle: [
            '华东特产', '西北特产', '威宁特产', '铜仁特产', '兴义特产'
          ]
        }, {
          mainTitle: '生鲜',
          viceTitle: [
            '时令生鲜', '新鲜水果', '海鲜水产', '美味蔬菜', '新鲜肉类', '锅物料理', '禽蛋'
          ]
        }
      ],
      hotGoodsLists: [
        {
          imgurl: require('../../img/hot-goods4.png'),
          title: '仔猪浓缩饲料S400-40',
          price: 267.99
        },
        {
          imgurl: require('../../img/hot-goods4.png'),
          title: '仔猪浓缩饲料S400-40仔猪浓缩饲料S400-40仔猪浓缩饲料S400-40',
          price: 267.99
        },
        {
          imgurl: require('../../img/hot-goods4.png'),
          title: '仔猪浓缩饲料S400-40',
          price: 267.99
        },
        {
          imgurl: require('../../img/hot-goods4.png'),
          title: '仔猪浓缩饲料S400-40',
          price: 267.99
        },
        {
          imgurl: require('../../img/hot-goods4.png'),
          title: '仔猪浓缩饲料S400-40',
          price: 267.99
        },
        {
          imgurl: require('../../img/hot-goods4.png'),
          title: '仔猪浓缩饲料S400-40',
          price: 267.99
        }
      ],
      hotTips: [
        '猪用饲料', '家禽饲料', '牛羊饲料', '水产饲料', '反刍饲料', '多维饲料', '添加剂', '微量元素', '饲料原料', '其他饲料'
      ],
      goodsLists: [],
      keyword: '', // 关键字
      goodsTypeId: '' // 分类id
    }
  },
  created: function () {
    this.keyword = this.$route.query.keyword
    this.goodsTypeId = this.$route.query.goodsTypeId
    this.getSearch(this.keyword, this.goodsTypeId)
  },
  components: {
    Logo,
    Nav
    // Pagination
  },
  methods: {
    search () { // 接收搜索方法
      this.keyword = this.$route.query.keyword
      this.getSearch(this.keyword, this.goodsTypeId)
    },
    getSearch (keyword, goodsTypeId = '', pageNum = 1, pageSize = 20, userId = '') { // 关键字搜索
      searchData({
        data: {
          keyword,
          userId,
          goodsTypeId,
          pageNum,
          pageSize
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
    handleCurrentChange (val) { // 请求分页
      this.pageNum = val
      this.getSearch(this.keyword, this.goodsTypeId, val)
    },
    getWordTips () { // 搜索词条推荐
      let token = window.localStorage.getItem('token')
      let info = JSON.parse(window.localStorage.getItem('info'))
      if (token) {
        this.userId = info.id
      }
      let pre = this.keyword.substring(0, 1)
      getSrearchTips({
        data: {
          userId: this.userId,
          pre
        },
        success: (res) => {
          console.log(res)
        },
        error: (error) => {
          console.log(error)
        }
      })
    }
  },
  mounted () {
    this.getSearch(this.keyword, this.goodsTypeId)
  }
}
</script>

<style lang="less">
@import '../../less/tsearch.less';
</style>
