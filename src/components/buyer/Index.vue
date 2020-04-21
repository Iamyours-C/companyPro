<template>
  <div class="buyer-center">
    <!-- 标题样式开始 -->
     <div class="center-title">
      <div class="content">我的庄园</div>
    </div>
    <!-- 标题样式结束 -->
    <!-- 内容开始 -->
    <div class="content clearfix mar-t-10">
      <!-- 左边内容开始 -->
      <div class="content-left fl">
        <div class="left-top text-center">
          <div>
             <el-avatar class="left-top-avatar" :src="defaultImg"></el-avatar>
          </div>
          <div class="left-top-nickname mar-t-10">{{username}}</div>
          <div class="left-top-lists text-color-6">
            <div class="top-lists-item">
              <p class="font-14 text-color-6" @click="changeMain('RightCollectGoods')">收藏</p>
              <p class="font-12">{{collectGoodsNum}}</p>
            </div>
            <div class="top-lists-item">
              <p class="font-14 text-color-6" @click="toShopCart">购物车</p>
              <p class="font-12">{{goodsNum}}</p>
            </div>
            <div class="top-lists-item">
              <p class="font-14 text-color-6" @click="changeMain('RightCollectStore')">店铺</p>
              <p class="font-12">{{collectStoreNum}}</p>
            </div>
            <div class="top-lists-item">
              <p class="font-14 text-color-6">足迹</p>
              <p class="font-12">20</p>
            </div>
          </div>
        </div>
        <div class="left-bottom">
          <div class="text-color-3 font-20 mar-tb-10">全部功能</div>
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo sidebar-lists"
            background-color="#e0dfe5"
            text-color="#666"
            active-text-color="#01526d">
            <el-submenu index="1">
              <template slot="title">
                <span class="font-16">个人中心</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1" @click="changeMain('RightDetail')" class="font-16">个人资料</el-menu-item>
                <el-menu-item index="1-2" @click="changeMain('RightSet')" class="font-16">设置</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="2" class="shop-label">
              <span slot="title" @click="changeMain('RightOrder')" class="font-16">我的订单</span>
              <!-- <div class="num-show">7</div> -->
            </el-menu-item>
            <el-menu-item index="3">
              <span slot="title" @click="changeMain('RightAdd')" class="font-16">收货地址</span>
            </el-menu-item>
            <el-menu-item index="5">
              <span slot="title" @click="changeMain('RightBook')" class="font-16">货车预约</span>
            </el-menu-item>
            <el-menu-item index="6">
              <span slot="title" @click="changeMain('RightCar')" class="font-16">发布货源</span>
            </el-menu-item>
          </el-menu>
        </div>
      </div>
      <!-- 左边内容结束 -->
      <!-- 右边内容开始 -->
      <component :is="currentComponent"></component>
      <!-- 右边内容结束 -->
    </div>
    <!-- 内容结束 -->
  </div>
</template>

<script>
import RightIndex from './Buyer-index.vue'
import RightDetail from './Buyer-info.vue'
import RightSet from './Buyer-set.vue'
import RightAdd from './Buyer-address.vue'
import RightOrder from './Buyer-order.vue'
import RightCollectStore from './Buyer-collect-store.vue'
import RightCollectGoods from './Buyer-collect-goods.vue'
import RightCar from './Buyer-find-car.vue'
import RightBook from './Buyer-book.vue'
import {getInfoData, getSelect, getCollectData, getFocusStore} from '../../common/sendAxios.js'
export default {
  data () {
    return {
      username: '', // 初始化用户名
      phone: '', // 初始化手机号码
      defaultImg: require('../../img/avatar.png'),
      currentComponent: 'RightIndex',
      numshow: false,
      goodsNum: 0, // 购物车商品数量
      collectGoodsNum: 0, // 商品收藏数量
      collectStoreNum: 0 // 关注店铺数量
    }
  },
  components: {
    RightIndex,
    RightDetail,
    RightSet,
    RightAdd,
    RightOrder,
    RightCar,
    RightBook,
    RightCollectStore,
    RightCollectGoods
  },
  beforeRouteEnter: (to, from, next) => {
    // 组件内守卫
    next(vm => {
      // judge login
      let token = window.localStorage.getItem('token')
      if (to.meta.requireLogin && to.meta.requireLogin === 1) {
        if (token) {
          next()
        } else {
          next('/login')
        }
      } else if (to.meta.requireLogin && to.meta.requireLogin === 2) {
        if (token) {
          next('/index')
        } else {
          next()
        }
      } else {
        next()
      }
    })
  },
  methods: {
    changeMain (obj) { // 切换右边内容
      this.currentComponent = obj
    },
    toShopCart () { // 点击跳转购物车
      this.$router.replace('/shopcart')
    },
    getAvatar () { // 获取头像信息
      getInfoData({
        data: {},
        success: (res) => {
          if (res.code === 0) {
            let nickname = res.data.nickname
            let username = res.data.username
            if (nickname) {
              this.username = nickname
            } else {
              this.username = username
            }
          }
        },
        error: (error) => {
          console.log(error)
        }
      })
    },
    getCartNum () { // 获取购物车加购商品数量
      let info = JSON.parse(window.localStorage.getItem('info'))
      let id = info.id
      getSelect({
        data: {
          buyId: id
        },
        success: (res) => {
          if (res.code === 0) {
            this.goodsNum = res.data.length
          }
        },
        error: (error) => {
          console.log(error)
        }
      })
    },
    getCollect () { // 获取收藏商品数量
      let info = JSON.parse(window.localStorage.getItem('info'))
      let id = info.id
      getCollectData({
        data: {
          userId: id
        },
        success: (res) => {
          if (res.code === 0) {
            this.collectGoodsNum = res.data.list.length
          }
        },
        error: (error) => {
          console.log(error)
        }
      })
    },
    getFocusStore () { // 获取关注店铺数量
      let info = JSON.parse(window.localStorage.getItem('info'))
      let id = info.id
      getFocusStore({
        data: {
          userId: id
        },
        success: (res) => {
          if (res.code === 0) {
            this.collectStoreNum = res.data.length
          }
        },
        error: (error) => {
          console.log(error)
        }
      })
    }
  },
  mounted () {
    this.getAvatar()
    this.getCartNum()
    this.getCollect()
    this.getFocusStore()
  }
}
</script>

<style lang="less">
@import '../../less/tbuyer.less';
</style>
