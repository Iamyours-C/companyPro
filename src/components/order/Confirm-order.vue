<template>
  <div class="confirm-box">
    <!-- LOGO -->
    <Logo></Logo>
    <!-- 确认订单 -->
    <div class="content">
      <!-- 选择收货地址 -->
      <div class="choose-address mar-t-40">
        <!-- 标题 -->
        <div class="choose-address-title text-color-6 font-18 font-bold">选择收货地址</div>
        <!-- 所有收货地址 -->
        <ul class="all-address">
          <!-- 默认地址 -->
          <li class="letter-box" v-for="(item, index) in addressLists" :key="index" :class="[{checked:cur===index}, cur===index ? 'active' : '']" @click="chooseAddress(item,index)">
            <div class="letter-border cursor-pointer">
              <p class="text-color-3 mar-b-10">{{item.province}}{{item.city}}{{item.district}}<span>({{item.name}})</span></p>
              <p class="text-color-6 mar-b-10">{{item.address}}{{phone}}</p>
              <p class="update-address" v-if="index === 0"><a @click="toAddressList">修改</a></p>
            </div>
            <!-- 默认地址标签 -->
            <div class="default-title text-white font-14" v-if="index === 0">默认地址</div>
            <!-- 地址选中 -->
            <span class="checked-status"><i class="el-icon-check"></i></span>
          </li>
        </ul>
        <div class="mar-t-34">
          <div class="show-address-btn"><a @click="manageAddress" v-show="show">显示全部地址</a></div>
          <!-- <div class="show-address-btn"><a v-show="!show">使用收货地址</a></div> -->
        </div>
      </div>
    </div>
    <!-- 全部商品 -->
    <div class="confirm-order">
      <div class="content">
        <!-- 标题 -->
        <div class="confirm-order-title font-24 font-bold">
          <span>全部商品</span>
          <span>20</span>
        </div>
      </div>
      <div class="split"></div>
    </div>
    <div class="content">
      <!-- 商品 -->
      <div class="confirm-order-goods font-18 clearfix">
        <!-- 商品参数说明 -->
        <ul class="confirm-order-describ text-color-6">
          <li class="confirm-order-label">商品信息</li>
          <li class="confirm-order-label">单价</li>
          <li class="confirm-order-label">数量</li>
          <li class="confirm-order-label">小计</li>
        </ul>
        <!-- 商品列表 -->
        <ul>
          <li class="mar-b-60" v-for="(item, index) in orderLists" :key="index">
            <div>
              <!-- 商品店铺名 -->
              <!-- <div class="text-color-6">
                <span class="el-icon-s-shop"></span>
                <span>{{item.storeName}}</span>
              </div> -->
              <!-- 商品具体内容 -->
              <div class="confirm-order-detail mar-t-12" v-for="(goods,i) in item.goodsList" :key="i">
                <div class="confirm-order-item">
                  <div class="confirm-order-img mar-lr-20">
                    <img :src="goods.imgUrl" class="img">
                  </div>
                   <p class="text-color-6 text-over-hidden-3 confirm-goods-mame mar-t-20">{{goods.title}}</p>
                </div>
                <div class="font-bold confirm-goods-price text-color-6 mar-t-20">￥{{goods.price}}</div>
                <div class="add-num pad-l-20 mar-t-20">
                  <span>{{goods.num}}</span>
                </div>
                <div class="font-bold need-money pad-l-60">￥{{goods.totalPrice}}</div>
              </div>
            </div>
          </li>
        </ul>
        <!-- 提交订单 -->
        <div class="fr">
          <div class="submit-confirm text-right">
            <div class="realy-pay-title">实支付：<span class="font-32 realy-pay font-bold">￥{{totalPrice}}</span></div>
            <div class="clearfix">
              <div class="fl">
                <span class="text-color-3">寄送至：</span>
                <span class="text-color-6">{{form.province}}{{form.city}}{{form.district}}</span>
              </div>
              <div class="fr text-color-6">{{form.address}}</div>
            </div>
            <div>
              <span class="text-color-3">收货人：</span>
              <span class="text-color-6">{{form.name}}</span>
              <span class="text-color-6 pad-l-10">{{form.mobile}}</span>
            </div>
          </div>
          <div class="text-right">
            <div class="back-cart font-26 inline-block pad-r-10">
              <span class="el-icon-d-arrow-left"></span>
              <a @click="toShopCart">返回购物车</a>
            </div>
            <div class="confirm-button font-26 text-white inline-block" @click="payFor"><a>提交订单</a></div>
          </div>
        </div>
      </div>
      <!-- 支付弹框 -->
      <el-dialog
        title="手机微信二维码支付"
        :visible.sync="dialogVisible"
        width="30%"
        class="text-center code"
        v-loading="loading"
        :before-close="handleClose"
        >
        <img :src="url" />
      </el-dialog>
    </div>
  </div>
</template>

<script>
import Logo from '../index/Module-logo.vue'
import { pca, pcaa } from 'area-data'
import {createOrder, getAddressList, getDefaultAddress, orderquery} from '../../common/sendAxios'
import Operation from '../public/Operation.js'
import QRCode from 'qrcode'
export default {
  data () {
    return {
      timer: '',
      pca: pca,
      pcaa: pcaa,
      code: '', // 二维码
      dialogVisible: false, // 支付弹框
      selected: [], // 初始化地址选择栏
      cur: 0,
      isChecked: false,
      show: true,
      // isChange: false, // 是否显示修改
      addressLists: [], // 初始化地址列表
      phone: '', // 初始化收货地址联系人手机号码
      dialogFormVisible: false, // 修改地址弹框显示默认为false
      obj: '', // 收货地址(右下角那个)
      form: { // 地址表单
        name: '', // 姓名 `
        mobile: '', // 电话号码
        province: '', // 省
        city: '', // 市
        district: '', // 区（县）
        origin: '', // 所在地区
        address: '', // 详细地址
        type: [],
        userAddressId: '', // 地址id
        region: [] // 修改地址接收省市区的初始化数组
      },
      formLabelWidth: '120px',
      orderLists: [], // 加购商品列表
      goodsList: [],
      totalPrice: 0, // 小计
      url: '', // 初始化生成二维码的图片地址
      addressId: '', // 初始化地址id
      loading: false, // 初始化页面加载
      wx_trade_no: '' // 初始化微信支付订单号
    }
  },
  created () {
    // 获取从购物车传过来的参数  接收的是数组
    // 需要现在购物车先加密数据 再在这个页面解密
    let list = this.$route.query.cartList
    console.log(list)
    this.orderLists = JSON.parse(decodeURIComponent(list))
    console.log(this.orderLists)
    this.orderLists.map(item => {
      item.goodsList.map(goods => {
        this.totalPrice = Operation.add(this.totalPrice, goods.totalPrice)
      })
    })
  },
  methods: {
    // 选择收货地址
    chooseAddress (item, index) {
      this.cur = index
      this.form.name = item.name
      this.form.mobile = item.mobile
      this.form.province = item.province
      this.form.city = item.city
      this.form.district = item.district
      this.form.address = item.address
      this.addressId = item.userAddressId
      // 是否显示修改
      this.isChange = !this.isChange
    },
    // 管理收货地址 若收货地址列表大于等于4则点击显示所有的地址
    manageAddress (e) {
      let showAddress = document.querySelector('.all-address')
      if (this.addressLists.length <= 4) {
        this.show = true
      } else {
        showAddress.style.minHeight = '320px'
      }
    },
    // 返回购物车
    toShopCart () {
      this.$router.replace('/shopcart')
    },
    // 查询收货地址列表请求
    getAddressData () {
      // 获取本地存储的info中的uid
      let token = window.localStorage.getItem('token')
      let info = JSON.parse(window.localStorage.getItem('info'))
      let id = ''
      let phone = ''
      if (token) {
        id = info.id
        phone = info.phone
        this.phone = phone
      }
      getAddressList({
        data: {
          uid: id
        },
        success: (res) => {
          if (res.code === 0) {
            this.addressLists = res.data
            this.addressLists.forEach(i => {
              this.form.userAddressId = i.userAddressId
            })
          }
        },
        error: (error) => {
          console.log(error)
        }
      })
    },
    // 提交订单 -->  支付
    payFor () {
      this.loading = true
      // 生成二维码
      let _this = this
      // 获取本地信息
      let token = window.localStorage.getItem('token')
      let info = JSON.parse(window.localStorage.getItem('info'))
      let buyId = ''
      if (token) {
        buyId = info.id
      }
      let orderBillList = []
      this.orderLists.map(item => {
        item.goodsList.map(goods => {
          orderBillList.push({
            sellerId: goods.businessId,
            goodsId: goods.id,
            num: goods.num,
            price: goods.price,
            title: goods.title,
            imgUrl: goods.imgUrl,
            unit: goods.unit,
            weight: goods.totleWeight
          })
        })
      })
      // 创建订单请求
      createOrder({
        data: {
          buyId: buyId,
          payType: 0,
          memo: '',
          addressId: this.addressId,
          orderBillList
        },
        success: (res) => {
          if (res.code === 0) {
            this.loading = false
            QRCode.toDataURL(res.data.code_url).then(url => {
              _this.url = url
              _this.dialogVisible = true
              _this.timer = window.setInterval(function () {
                orderquery({
                  data: {
                    sn: res.data.wx_trade_no
                  },
                  success: result => {
                    console.log(result)
                    if (result.code === 0) {
                      if (result.data.status === 200) {
                        _this.toPaySuccess(res.data.wx_trade_no)
                        _this.dialogVisible = false
                        window.clearInterval(_this.timer)
                      }
                    }
                  },
                  error: (error) => {
                    console.log(error)
                  }
                })
              }, 5000)
              // _this.toPaySuccess(res.data.wx_trade_no)
            }).catch(err => {
              console.error(err)
            })
          }
        },
        error: (error) => {
          console.log(error)
        }
      })
    },
    // dialog关闭，清除定时器
    handleClose () {
      window.clearInterval(this.timer)
      this.dialogVisible = false
      // TODO 去用户中心查看订单数据
      const {href} = this.$router.resolve({
        path: '/buyer/center'
      })
      window.open(href, '_blank')
    },
    // 支付成功就跳转支付成功页面
    toPaySuccess (sn) {
      this.$router.push({
        path: '/payfor',
        query: {sn}
      })
    },
    // 跳转收货地址修改地址
    toAddressList () {
      const {href} = this.$router.resolve({
        path: '/buyer'
      })
      window.open(href, '_blank')
    },
    // 获取默认收货地址
    getDefaultAdd () {
      // 获取本地存储的info中的uid
      let token = window.localStorage.getItem('token')
      let info = JSON.parse(window.localStorage.getItem('info'))
      let id = ''
      if (token) {
        id = info.id
      }
      getDefaultAddress({
        data: {
          uid: id
        },
        success: (res) => {
          if (res.code === 0) {
            this.obj = res.data
            let newObj = this.obj
            this.form.name = newObj.name
            this.form.mobile = newObj.mobile
            this.form.province = newObj.province
            this.form.city = newObj.city
            this.form.district = newObj.district
            this.form.address = newObj.address
            this.addressId = newObj.userAddressId
          }
        },
        error: (error) => {
          console.log(error)
        }
      })
    }
  },
  components: {
    Logo,
    QRCode
  },
  mounted () {
    this.getAddressData()
    this.getDefaultAdd()
  }
}
</script>

<style lang="less">
@import '../../less/tconforder.less';
</style>
