<template>
  <div class="index-box"
   v-loading.fullscreen.lock="fullscreenLoading"
  >
    <!-- 卖家中心首页 -->
    <!-- 第一部分 -->
    <!-- <div class="index-input-box">
      <div class="index-input-item mar-r-26">
        <input type="text" class="index-input" placeholder="商品ID">
      </div>
      <div class="index-input-item mar-r-26">
        <input type="text" class="index-input" placeholder="宝贝名称">
      </div>
      <div class="index-input-item mar-r-26">
        <input type="text" class="index-input" placeholder="买家昵称">
      </div>
      <div class="index-input-item">
        <input type="text" v-model="sortvalue" disabled class="index-input" placeholder="订单状态">
        <div class="drop-down-btn cursor-pointer" @click="dropToggle">
          <span class="el-icon-caret-bottom"></span>
        </div>
        <ul class="drop-down-lists" v-show="isShow">
          <li class="drop-item" v-for="(item, index) in dropLists" :key="index" @click="getValue(index, item)">
            <a>{{item.name}}</a>
          </li>
        </ul>
      </div>
      <div class="index-input-item mar-t-22">
        <input type="text" class="index-input" placeholder="订单编号">
      </div>
      <div class="search-order-btn text-center inline-block mar-l-26 cursor-pointer">搜索订单</div>
    </div> -->
    <!-- 第二部分 -->
    <ul class="status-box" v-if="orderLists.length > 0">
      <li class="status-item text-center cursor-pointer">
        <span @click="selectAll1">全部订单</span>
        <span class="status-num pad-l-6">{{status.orderAll}}</span>
      </li>
      <li class="status-item text-center cursor-pointer">
        <span @click="selectPaying">待付款</span>
        <span class="status-num pad-l-6">{{status.unpaid}}</span>
      </li>
      <li class="status-item text-center cursor-pointer">
        <span @click="selectWaitDeliver">待发货</span>
        <span class="status-num pad-l-6">{{status.paid}}</span>
      </li>
      <li class="status-item text-center cursor-pointer">
        <span @click="selectHasDeliver">交易成功</span>
        <span class="status-num pad-l-6">{{status.shipments}}</span>
      </li>
      <!-- <li class="status-item text-center cursor-pointer">
        <span>交易成功</span>
        <span class="status-num pad-l-6">{{status.accomplish}}</span>
      </li> -->
      <!-- <li class="status-item text-center cursor-pointer">
        <span>交易关闭</span>
        <span class="status-num pad-l-6">{{}}</span>
      </li> -->
    </ul>
    <!-- 第三部分 -->
    <ul class="order-describ-box text-center text-color-6 clearfix" v-if="orderLists.length > 0">
      <li class="fl describ-name">
        <span>商品</span>
      </li>
      <li class="fl describ-item">
        <span>规格</span>
        <span class="describ-item-split">|</span>
      </li>
      <li class="fl describ-item">
        <span>数量</span>
        <span class="describ-item-split">|</span>
      </li>
      <li class="fl describ-item">
        <span>支付方式</span>
        <span class="describ-item-split">|</span>
      </li>
      <li class="fl describ-item">
        <span>订单金额</span>
        <span class="describ-item-split">|</span>
      </li>
      <li class="fl describ-item">
        <span>订单状态</span>
        <span class="describ-item-split">|</span>
      </li>
      <li class="fl describ-item">
        <span>操作</span>
        <span class="describ-item-split">|</span>
      </li>
    </ul>
    <!-- 第四部分 -->
    <!-- 全部订单 -->
    <div v-if="orderLists.length > 0">
      <!-- <p class="mar-t-40 order-operate-btn"><a>立即发货</a></p> -->
      <ul v-for="(item, index) in orderLists" :key="index">
        <li>
          <div>
            <!-- 订单抬头 -->
            <div class="order-head text-white">
              <span class="order-create-date mar-r-20">创建时间：{{item.createTime}}</span>
              <span class="order-head-number mar-r-20 ">订单号：{{item.orderNum}}</span>
              <span  class="order-submit-date">提交时间：{{item.updateTime}}</span>
            </div>
            <!-- 订单商品 -->
            <div class="order-body text-color-6" v-for="(subItem, ind) in item.orderBillList" :key="ind">
              <div class="order-body-img">
                <img :src="subItem.imgUrl" class="img">
              </div>
              <div class="order-body-text">
                <p class="mar-t-40 text-left text-over-hidden-3">{{subItem.title}}</p>
              </div>
              <div class="order-body-text">
                <p class="mar-t-40">{{subItem.price}}元/{{subItem.unit}}</p>
                <p class="order-body-split"></p>
              </div>
              <div class="order-body-text">
                <p class="mar-t-40">{{subItem.num}}</p>
                <p class="order-body-split"></p>
              </div>
              <div class="order-body-text">
                <p class="mar-t-40" v-if="item.payType == '0'">微信支付</p>
                <p class="mar-t-40" v-if="item.payType == '1'">支付宝</p>
                <p class="order-body-split"></p>
              </div>
              <div class="order-body-text">
                <p class="mar-t-40">￥{{item.payPrice}}</p>
                <p class="order-body-split"></p>
              </div>
              <div class="order-body-text">
                <p class="mar-t-40 text-left" v-if="item.ispay == 0">待付款</p>
                <p class="mar-t-40 text-left" v-if="item.isship == 0 && item.ispay == 1">待发货</p>
                <p class="mar-t-40 text-left" v-if="item.ispay == 1 && item.isreceipt == 0">待收货</p>
                <p class="mar-t-40 text-left" v-if="item.isreceipt == 1 && item.ispay == 1">交易成功</p>
                <p class="order-body-split"></p>
              </div>
              <div class="order-body-text">
                <p class="order-body-split"></p>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="show-icon" v-if="orderLists.length == 0">
      <div class="show-box">
        <div class="icon-box">
          <img src="../../img/order.png" />
        </div>
        <div class="warning-notice text-center">暂无订单数据！</div>
      </div>
    </div>
    <!-- 分页按钮 -->
    <div class="text-center">
     <!-- <el-pagination
      :total="total"
      ></el-pagination> -->
    </div>
  </div>
</template>

<script>
import Pagination from '../public/Pagination.vue'
import {orderLists, getOrder} from '../../common/sendAxios.js'
export default {
  data () {
    return {
      cur: 0,
      isShow: false,
      sortvalue: '',
      fullscreenLoading: false, // 页面加载
      status: '', // 订单状态
      dropLists: [
        {
          name: '待付款'
        },
        {
          name: '待发货'
        },
        {
          name: '已发货'
        },
        {
          name: '交易成功'
        },
        {
          name: '交易关闭'
        }
      ],
      orderLists: [],
      ispay: ''
    }
  },
  methods: {
    lookOrder (ind) {
      // 查看订单类型
      this.cur = ind
    },
    dropToggle () {
      // 订单状态下拉列表
      this.isShow = !this.isShow
    },
    getValue (index, item) {
      // 双向绑定input框
      this.sortvalue = item.name
      this.isShow = false
    },
    // 订单列表
    selectOrderList () {
      orderLists({
        data: {},
        success: (res) => {
          if (res.code === 0) {
            this.status = res.data
          }
        },
        error: (error) => {
          console.log(error)
        }
      })
    },
    // 获取全部订单请求
    selectAll (data = {page: 1,
      rows: 10,
      type: 0,
      kind: 2}) {
      getOrder({
        data,
        success: (res) => {
          if (res.code === 0) {
            this.orderLists = res.data.list
            this.fullscreenLoading = false
            this.orderLists.forEach(i => {
              this.ispay = i.ispay
            })
          }
        },
        error: (error) => {
          console.log(error)
        }
      })
    },
    selectAll1 () {
      this.selectAll({
        page: 1,
        rows: 10,
        type: 0,
        kind: 2})
    },
    // 待付款
    selectPaying () {
      this.selectAll({
        page: 1,
        rows: 10,
        type: 1,
        kind: 2})
    },
    // 待发货
    selectWaitDeliver () {
      this.selectAll({
        page: 1,
        rows: 10,
        type: 2,
        kind: 2})
    },
    // 已发货
    selectHasDeliver () {
      this.selectAll({
        page: 1,
        rows: 10,
        type: 3,
        kind: 2})
    }
  },
  components: {
    Pagination
  },
  mounted () {
    this.selectOrderList()
    this.selectAll()
  }
}
</script>

<style>

</style>
