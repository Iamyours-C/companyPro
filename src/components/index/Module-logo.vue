<template>
  <div>
    <!-- 通用顶部Logo，搜索框部分 -->
    <div class="content clearfix">
      <div class="logo-box fl">
        <a @click="to_index">
          <img src="../../img/logo.png" alt="">
        </a>
      </div>
      <div class="search-box fl font-14">
        <div class="input-box">
          <input type="text" class="pad-l-24" v-model="keyword" placeholder="商品 / 店铺名称" @keyup.enter="getSearchData">
          <i class="iconfont icon-sousuo icon"></i>
        </div>
        <div class="search-btn search-goods" @click="getSearchData">搜商品</div>
        <!-- <div class="search-btn search-store">搜店铺</div> -->
      </div>
      <div class="shop-cart fl text-color-6 cursor-pointer">
        <span class="iconfont icon-qicheqianlian-"></span>
        <span class="font-12" @click="toShopCart">购物车</span>
        <span class="font-12 goods-num text-center">{{goodsNum}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import {getCartNum} from '../../common/sendAxios.js'
export default {
  data () {
    return {
      buyId: '',
      keyword: '', // 关键字
      goodsNum: 0 // 购物车数量
    }
  },
  methods: {
    getSearchData () { // 跳转搜索页面
      this.$emit('search')
      this.$router.push({
        path: '/search',
        query: {
          keyword: this.keyword
        }
      })
    },
    to_index () { // 返回首页
      this.$router.replace('/index')
    },
    toShopCart () { // 去购物车
      this.$router.push('/shopcart')
    },
    getGoodsNum () { // 查询购物车加购商品数量
      let info = JSON.parse(window.localStorage.getItem('info'))
      if (info) {
        this.buyId = info.id
      }
      getCartNum({
        data: {
          buyId: this.buyId
        },
        success: (res) => {
          if (res.code === 0) {
            this.goodsNum = res.data
          }
        },
        error: (e) => {
          console.log(e)
        }
      })
    }
  },
  mounted () {
    this.getGoodsNum()
  }
}
</script>

<style lang="less">
  @import '../../less/common-module.less';
</style>
