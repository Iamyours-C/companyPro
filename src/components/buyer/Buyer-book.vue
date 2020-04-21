<template>
  <!-- 货车预约 -->
  <div class="book-truck">
    <!-- 预约头部 -->
    <ul class="book-title text-color-6 font-20">
      <li class="book-status" v-for="(item, index) in statusTitle" :key="index" @click="changeTab(index)">
        <a :class="{activing:cur==index}">{{item}}</a>
        <span class="status-split pad-lr-30">|</span>
      </li>
    </ul>
    <!-- 预约车辆信息内容 -->
    <div class="book-content" v-if="bookLists.length > 0">
      <div class="book-cont-detail text-color-6 font-18" v-for="(item, index) in bookLists" :key="index">
        <div class="book-car-img">
          <img :src="item.img" class="img">
        </div>
        <div class="book-info">
          <div>
            <p>姓名：{{item.people}}</p>
            <p>联系方式：{{item.mobile}}</p>
            <p>车牌号：{{item.plateNo}}</p>
            <p>
              时间：
              <span>{{item.useTime}}</span>
            </p>
            <p>
              <span  class="send-address">发货地址：</span>
              <span>{{item.start}}</span>
            </p>
            <p>
              <span  class="accept-address">收货地址：</span>
              <span>{{item.end}}</span>
            </p>
          </div>
        </div>
        <!-- 操作按钮 -->
        <div class="book-operate-btn" v-if="cur==0" :class="{accept:cur==0}" @click="cancelRelease(item)"><a>取消</a></div>
        <div class="book-operate-btn" v-if="cur==1" :class="{'book-operate-btn':cur==1}"><a>已接单</a></div>
        <div class="book-operate-btn" v-if="cur==2" :class="{'book-operate-btn':cur==2}"><a>已拒绝</a></div>
      </div>
    </div>
    <!-- 若无订单数据 -->
    <div v-if="bookLists.length == 0" class="show-icon text-center">
      <div class="show-box">
        <div class="inline-block icon-box">
          <img src="../../img/order.png" />
        </div>
        <div class="warning-notice text-center">还没有订单哦~</div>
      </div>
    </div>
    <!-- 分页列表 -->
    <div class="text-center">
      <!-- <Pagination></Pagination> -->
    </div>
  </div>
</template>

<script>
import Pagination from '../public/Pagination.vue'
import {getBookLists, cancelOrigin} from '../../common/sendAxios.js'
// import {axios} from 'axios'
// import {api} from '../../common/api.js'
export default {
  data () {
    return {
      cur: 0,
      statusTitle: [
        '待接单', '已接单', '拒接单'
      ],
      bookLists: []
    }
  },
  methods: {
    changeTab (ind) {
      this.cur = ind
      switch (ind) {
        case 0:
          this.getWait()
          break
        case 1:
          this.getAlready()
          break
        default:
          this.getRefuse()
      }
    },
    getLists (data = {
      isPass: 0,
      page: 1,
      rows: 10
    }) { // 获取预约记录列表 默认isPass=0
      getBookLists({
        data,
        success: (res) => {
          if (res.code === 0) {
            this.bookLists = res.data.list
          }
        },
        error: (error) => {
          console.log(error)
        }
      })
    },
    getWait () { // 待接单
      this.getLists({
        isPass: 0,
        page: 1,
        rows: 10
      })
    },
    getAlready () { // 已接单
      this.getLists({
        isPass: 1,
        page: 1,
        rows: 10
      })
    },
    getRefuse () { // 拒接单
      this.getLists({
        isPass: 2,
        page: 1,
        rows: 10
      })
    },
    cancelRelease (item) { // 取消发布
      cancelOrigin({
        data: {
          id: item.id
        },
        success: (res) => {
          if (res.code === 0) {
            this.$message({
              message: res.msg,
              type: 'success'
            })
            this.getLists()
          } else {
            this.$message({
              message: res.msg,
              type: 'error'
            })
          }
        },
        error: (error) => {
          console.log(error)
        }
      })
    }
  },
  mounted () {
    this.getLists()
  },
  components: {
    Pagination
  }
}
</script>

<style>

</style>
