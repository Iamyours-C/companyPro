<template>
  <div>
    <!-- 系列 -->
    <div v-for="(item, index) in categoryLists" :key="index">
      <!-- 产品导航 START -->
      <div class="nav-bar mar-tb-10 clearfix">
        <div class="sl-logo">
          <img :src="item.img" alt="">
        </div>
        <div class="pad-l-10 nav-bar-title font-18">{{item.name}}</div>
        <ul class="nav-bar-lists">
          <li class="nav-bar-list text-white font-14" v-for="(subitem, i) in item.subCategories" :key="i">
            <a  @click="changeTab(index, subitem.id)" :class="{active:cur === i}">{{subitem.name}}</a>
          </li>
        </ul>
       <!-- <div class="text-white look-more pad-r-22 font-14">
          <span>更多</span>
          <span>></span>
        </div> -->
      </div>
      <!--   产品导航END  -->

      <!-- 产品内容 START -->
      <div class="product-box mar-b-20 bg-white clearfix">
        <div class="product-main fl">
          <img src="../../img/sl-goods1.png" alt="">
        </div>
        <div class="other-products fr">
          <div class="product-list" v-for="(item, index) in goodsList" :key="index">
            <div class="img-box">
              <img :src="item.imgUrl.split(',')[0]" alt="">
            </div>
            <p class="goods-price font-14 pad-t-10">￥{{item.price}}/{{item.unit}}</p>
            <p class="goods-title font-12 text-color-6 pad-t-10">{{item.title}}</p>
            <p class="goods-title font-12 text-color-6 pad-t-10">{{item.memo}}</p>
          </div>
        </div>
      </div>
      <!--   产品内容 END   -->
    </div>
  </div>
</template>

<script>
import {categoryData, getIndexLists} from '../../common/sendAxios'
export default {
  data () {
    return {
      cur: 0,
      categoryLists: [],
      goodsList: [] // 商品列表
    }
  },
  methods: {
    changeTab (index, id) {
      // console.log(this.categoryLists[index].subCategories[i].name===name)
      // if (this.categoryLists[index].subCategories[i].name === name) {
      //   this.cur = i
      // }
      this.cur = index
      console.log(id)
      this.getGoodsData(id)
    },
    getCategary () { // 请求商品分类
      categoryData({
        success: (res) => {
          if (res.code === 0) {
            this.categoryLists = res.data
          }
        },
        error: (error) => {
          console.log(error)
        }
      })
    },
    getGoodsData (goodsTypeId) { // 分类请求商品列表
      // getSubLists({
      //   data: {
      //     pid
      //   },
      //   success: (res) => {
      //     if (res.data === 0) {
      //       this.goodsList = res.data.data
      //       console.log(this.goodsList)
      //     }
      //   },
      //   error: (e) => {
      //     console.log(e)
      //   }
      // })
      getIndexLists({
        data: {
          goodsTypeId
        },
        success: (res) => {
          if (res.code === 0) {
            let data = res.data.list
            let newLists = data.splice(0, data.length - 2)
            this.goodsList = newLists
          }
        },
        error: (error) => {
          console.log(error)
        }
      })
    }
  },

  mounted () {
    this.getCategary()
    this.getGoodsData()
  }
}
</script>
<style lang="less">
@import '../../less/common-module.less';
</style>
