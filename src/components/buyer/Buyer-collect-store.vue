<template>
  <div>
    <div class="collect-box">
      <div class="collect-content">
        <!-- 店铺收藏 -->
        <div>
          <div class="collect-store-top clearfix">
            <div class="fl collect-store-title font-20">全部店铺</div>
            <!-- 按关键字搜索的搜索框 -->
            <div class="fr search-collect-name">
              <span class="el-icon-search search-key-icon"></span>
              <input type="text" class="search-collect-input" placeholder="请输入关键字">
            </div>
          </div>
          <!-- 收藏的店铺列表 -->
          <div class="collect-store-lists" v-if="storeLists.length > 0">
            <div class="collect-store-list" v-for="(item, index) in storeLists" :key="index">
              <!-- 店铺信息 -->
              <div class="collect-store-info cursor-pointer">
                <div class="store-info-item">
                  <!--  店铺头像-->
                  <div class="store-avatar">
                    <img :src="item.logo" />
                  </div>
                  <!-- 店铺名字 -->
                   <div class="store-name font-18 text-color-6">
                    <span class="iconfont icon-dianpu shop-icon"></span>
                    <span class="text-over-hidden-1" :title="item.name">{{item.name}}</span>
                    <span class="el-icon-delete delete-icon"></span>
                  </div>
                </div>
                <div class="look-store-goods" @click="intoStore">
                  <span>查看更多<i class="iconfont icon-youjiantou"></i></span>
                </div>
              </div>
              <!-- 店铺商品 -->
              <div class="collect-store-goods">
                <ul class="collect-goods-lists">
                  <li class="collect-goods-list" v-for="(i, ind) in item.goodsList" :key="ind">
                    <div class="goods-img-box" @click="showDetail(i.id)">
                      <img :src="i.imgUrl" class="img" />
                    </div>
                    <div class="text-center font-14 text-color-6 font-bold collect-goods-price">￥{{i.price}}/{{i.unit}}</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!-- 无收藏店铺时 -->
          <div v-if="storeLists.length == 0" class="show-icon text-center">
            <div class="show-box">
              <div class="inline-block icon-box">
                <img src="../../img/collect-null.png" />
              </div>
              <div class="warning-notice text-center">还没有您喜欢的店铺哦~快去收藏店铺吧</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {getFocusStore} from '../../common/sendAxios.js'
export default {
  data () {
    return {
      storeLists: [],
      businessId: '',
      shopId: ''
    }
  },
  methods: {
    // 查询已关注的店铺数据
    getStoreData () {
      // 获取前端localstorage存储的token值和info
      let token = window.localStorage.getItem('token')
      let info = JSON.parse(window.localStorage.getItem('info'))
      let id = '' // 初始化用户id
      if (token) { // 如果token值存在
        id = info.id
      }
      getFocusStore({
        data: {
          userId: id
        },
        success: (res) => {
          console.log(res)
          if (res.code === 0) {
            this.storeLists = res.data
            this.storeLists.forEach(i => {
              i.goodsList.forEach(goods => {
                this.businessId = goods.businessId
                this.shopId = goods.shopId
              })
            })
          }
        },
        error: (error) => {
          console.log(error)
        }
      })
    },
    showDetail (id) { // 点击跳转商品详情页面
      let goodsId = id
      this.$router.push({path: '/detail', query: {goodsId: goodsId}})
    },
    intoStore (id) { // 进入店铺
      this.$router.push({path: '/shopstore', query: {businessId: this.businessId, id: this.shopId}})
    }
  },
  mounted () {
    this.getStoreData()
  }
}
</script>

<style>
</style>
