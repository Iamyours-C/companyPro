<template>
  <div>
    <div class="collect-box">
      <div class="collect-type pad-l-20">
        <span class="text-color-3 font-20 collect-name">已收藏商品</span>
      </div>
      <div class="collect-content" v-if="collectLists.length > 0">
        <!-- 商品收藏 -->
        <div>
          <!-- 收藏日期 -->
          <!-- <div class="collect-date">
            <div class="collect-date-split">
              <span class="detail-date font-18 text-color-6">{{item.date}}</span>
            </div>
          </div> -->
          <!-- 收藏商品列表 -->
          <ul class="collect-lists">
            <li class="collect-list-box" v-for="(item, index) in collectLists" :key="index">
              <div class="collect-list text-center">
                <div class="collect-goods-img">
                  <img :src="item.imgUrl" alt="">
                  <!-- <div class="search-same font-12 text-color-9">
                    <span class="el-icon-search"></span>
                    <span>查找相似</span>
                  </div> -->
                </div>
                <div class="collect-goods-describ text-left clearfix cursor-pointer">
                  <p class="collect-goods-price">￥{{item.price}}/{{item.unit}}</p>
                  <p class="text-color-6 text-over-hidden-1" :title="item.name">{{item.title}}</p>
                  <p class="font-12 text-color-9 fr">月销：{{item.sellNum}}</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <!-- 收藏商品列表结束 -->
      </div>
      <div v-if="collectLists.length == 0" class="show-icon text-center">
        <div class="show-box">
          <div class="inline-block icon-box">
            <img src="../../img/collect-null.png" />
          </div>
          <div class="warning-notice text-center">还没有您喜欢的商品哦哦~快去收藏一个吧！</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {getCollectData} from '../../common/sendAxios.js'
export default {
  data () {
    return {
      cur: 0,
      collectTime: [
        {
          date: '2.24'
        },
        {
          date: '2.22'
        }
      ],
      collectLists: [], // 收藏商品列表
      newLists: []
    }
  },
  methods: {
    // 获取用户收藏商品数据接口
    getGoodsData () {
      // 获取本地存储的info和token
      let token = window.localStorage.getItem('token')
      let info = JSON.parse(window.localStorage.getItem('info'))
      // 初始化用户Id
      let id = ''
      if (token) {
        id = info.id
      }
      getCollectData({
        data: {
          userId: id
        },
        success: (res) => {
          if (res.code === 0) {
            let list = res.data.list
            list.map(goods => {
              if (goods.imgUrl) {
                goods.imgUrl = goods.imgUrl.split(',')[0]
              }
            })
            this.collectLists = list
          }
        },
        error: (error) => {
          console.log(error)
        }
      })
    },
    intoDetail () { // 去详情页
      // this.$router.push({path:})
    }
  },
  mounted () {
    this.getGoodsData()
  }
}
</script>

<style>
</style>
