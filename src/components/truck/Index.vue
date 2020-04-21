<template>
  <div class="truck-index">
    <!-- 货车首页 -->
    <!-- 第一部分 -->
    <div class="content truck-index-head">
      <!-- logo -->
      <div class="logo-box">
        <img src="../../img/logo.png" />
      </div>
      <!-- 入驻信息入口 -->
      <div>
        <div class="come-in">
          <div class="come-in-item font-32 text-color-6" @click="toJoin(-1)" v-if="isPass == -1">货车入驻</div>
          <div class="come-in-item font-32 text-color-6" @click="toJoin(0)" v-if="isPass == 0 || isPass == 2">入驻信息</div>
          <div class="come-in-item font-32 text-color-6" @click="toJoin(1)" v-if="isPass == 1">我的货车</div>
          <div class="come-in-item">
            <img src="../../img/collect.png">
          </div>
          <div class="come-in-item">
            <img src="../../img/msg.png">
          </div>
        </div>
      </div>
    </div>
    <!-- 第二部分 banner-->
    <div class="truck-banner mar-t-20">
      <!-- 可视盒子 -->
      <div class="truck-banner-box">
        <!-- 轮播盒子 -->
        <ul class="truck-banner-slider">
          <li class="truck-banner-item">
            <img src="../../img/truck-index.png" class="img">
          </li>
        </ul>
      </div>
    </div>
    <!-- 第三部分 -->
    <div class="truck-content mar-t-20">
      <div class="content">
        <!-- 找货车找货源切换 -->
        <ul class="truck-tabs clearfix">
          <li class="truck-tab pad-t-30 fl" v-for="(item, index) in tabLists" :key="index" @click="changeTab(index)" :class="{actives: cur==index}">
            <img :src="item.imgurl">
            <p class="find-truck text-white ">{{item.title}}</p>
          </li>
        </ul>
        <!-- 货车类型列表 -->
        <ul class="truck-type-lists" v-if="cur==0">
          <li class="truck-type-list text-center" v-for="(item, index) in truckTypeLists" :key="index" @click="chooseCar(index)" :class="{on: current==index}">
            <a class="text-white">{{item}}</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="content">
      <!-- 找货车 -->
      <div class="truck-info" v-if="cur==0">
        <!-- 货车信息 -->
        <ul class="truck-info-lists">
          <li class="truck-info-list" v-for="(item, index) in truckInfoLists" :key="index">
            <div class="truck-info-img">
              <img :src="item.img" class="img">
            </div>
            <div class="truck-info-box">
              <div class="text-color-6 font-18 text-over-hidden-1">{{item.title}}</div>
              <!-- 车辆详细信息 -->
              <div class="font-14 truck-info-detail">
                <div class="info-detail-item">
                  <span class="text-color-6">姓名：</span>
                  <span class="text-color-9">{{item.principal}}</span>
                </div>
                <div class="info-detail-item">
                  <span class="text-color-6">载重：</span>
                  <span class="text-color-9">{{item.freiLoad}}</span>
                </div>
                <div class="info-detail-item">
                  <span class="text-color-6">载货体积：</span>
                  <span class="text-color-9">{{item.bulk}}</span>
                </div>
                <div class="info-detail-item">
                  <span class="text-color-6">长：</span>
                  <span class="text-color-9">{{item.longth}}</span>
                </div>
                <div class="info-detail-item">
                  <span class="text-color-6">宽：</span>
                  <span class="text-color-9">{{item.wide}}</span>
                </div>
                <div class="info-detail-item">
                  <span class="text-color-6">高：</span>
                  <span class="text-color-9">{{item.height}}</span>
                </div>
              </div>
              <div class="font-14 pad-b-6">
                <span class="auto-position el-icon-location"></span>
                <span class="text-color-9">{{item.address}}</span>
              </div>
              <div class="font-14 pad-b-6">
                <span class="text-color-6">起步公里：</span>
                <span class="text-color-9">{{item.startKilometre}}</span>
              </div>
              <div class="font-14">
                <span class="text-color-6">起步价：</span>
                <span class="font-18 text-color-9 start-price">￥{{item.startPrice}}</span>
              </div>
              <div class="clearfix mar-t-30">
                <div class="book-truck-btn fl" @click="centerDialogVisible = true"><a>预约</a></div>
                <div class="use-truck-btn fr"><a @click="centerDialogVisible1 = true">立即用车</a></div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <!-- 预约用车开始 -->
      <el-dialog
        title="货车预约"
        class="book-window"
        :visible.sync="centerDialogVisible"
        width="40%"
        center>
        <el-form :label-position="labelPosition" label-width="80px" :model="ruleForm">
          <el-form-item label="姓名:">
            <el-input v-model="ruleForm.people"></el-input>
          </el-form-item>
          <el-form-item label="联系方式:">
            <el-input v-model="ruleForm.mobile"></el-input>
          </el-form-item>
          <el-form-item label="预约时间:">
            <el-date-picker
              v-model="ruleForm.useTime"
              type="datetime"
              placeholder="选择日期时间"
              default-time="12:00:00">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="发货地址:">
            <el-input v-model="ruleForm.start"></el-input>
          </el-form-item>
          <el-form-item label="收货地址:">
            <el-input v-model="ruleForm.end" disabled="disabled"></el-input>
          </el-form-item>
          <el-form-item class="text-right">
            <el-button @click="chooseAddress">选择收货地址</el-button>
          </el-form-item>
        </el-form>
        <el-dialog
          width="30%"
          class="text-color-6"
          title="收货地址列表"
          :visible.sync="innerVisible"
          append-to-body>
          <div class="text-right">
            <span class="el-icon-plus pad-r-10"></span>
            <span class="cursor-pointer" @click="addNewAddress">新增收货地址</span>
          </div>
          <ul class="mar-t-20 address-lists" v-for="(item, index) in addressLists" :key="index">
            <li class="cursor-pointer" :class="isSelected ? 'is-selected' : ''" @click="chooseAddressData(item)">
              <span>{{item.name}}</span>
              <span>{{item.mobile}}</span>
              <span>{{item.province}}</span>
              <span> {{item.city}}</span>
              <span>{{item.district}}</span>
              <span>{{item.address}}</span>
              <span>{{isSelected ? '✔️' : ''}}</span>
            </li>
          </ul>
        </el-dialog>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="bookCar">预 约</el-button>
        </span>
      </el-dialog>
      <!-- 预约用车结束 -->
      <!-- 现在用车开始 -->
      <el-dialog
        title="货车预约"
        class="book-window"
        :visible.sync="centerDialogVisible1"
        width="40%"
        center>
        <el-form :label-position="labelPosition" label-width="80px" :model="ruleForm">
          <el-form-item label="姓名:">
            <el-input v-model="ruleForm.people"></el-input>
          </el-form-item>
          <el-form-item label="联系方式:">
            <el-input v-model="ruleForm.mobile"></el-input>
          </el-form-item>
          <el-form-item label="发货地址:">
            <el-input v-model="ruleForm.start"></el-input>
          </el-form-item>
          <el-form-item label="收货地址:">
            <el-input v-model="ruleForm.end" disabled="disabled"></el-input>
          </el-form-item>
          <el-form-item class="text-right">
            <el-button @click="chooseAddress1">选择收货地址</el-button>
          </el-form-item>
        </el-form>
        <el-dialog
          width="30%"
          class="text-color-6"
          title="收货地址列表"
          :visible.sync="innerVisible1"
          append-to-body>
          <div class="text-right">
            <span class="el-icon-plus pad-r-10"></span>
            <span class="cursor-pointer" @click="addNewAddress">新增收货地址</span>
          </div>
          <ul class="mar-t-20 address-lists" v-for="(item, index) in addressLists" :key="index">
            <li class="cursor-pointer" :class="isSelected ? 'is-selected' : ''" @click="chooseAddressData1(item)">
              <span>{{item.name}}</span>
              <span>{{item.mobile}}</span>
              <span>{{item.province}}</span>
              <span> {{item.city}}</span>
              <span>{{item.district}}</span>
              <span>{{item.address}}</span>
              <span>{{isSelected ? '✔️' : ''}}</span>
            </li>
          </ul>
        </el-dialog>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="useTruck">立 即 用 车</el-button>
        </span>
      </el-dialog>
      <!-- 现在用车结束 -->
      <!-- 找货源 -->
      <div class="find-origin" v-if="cur==1">
        <ul class="find-origin-lists">
          <li class="find-origin-list font-18 text-color-6" v-for="(item, index) in findOriginLists" :key="index">
            <div class="origin-img">
              <img src="../../img/origin-icon.png">
            </div>
            <div class="find-origin-info">
              <div class="origin-info-name">
                <span class="info-name-item">姓名：{{item.people}}</span>
                <span class="info-name-item">联系方式：{{item.mobile}}</span>
              </div>
              <div class="origin-info-name">
                <span class="info-name-item">总重量：{{item.weight}}{{item.unit}}</span>
                <span class="info-name-item">单价：{{item.price}}元/吨</span>
              </div>
              <div>用车时间：{{item.useTime}}</div>
              <div>
                <span class="send-address">发货地址：</span>
                <span>{{item.start}}</span>
              </div>
              <div>
                <span class="accept-address">收货地址：</span>
                <span>{{item.end}}</span>
              </div>
              <div class="text-over-hidden-1">描述：{{item.memo}}</div>
            </div>
            <div class="origin-item-btn text-right" v-if="item.isPass == 0" @click="takeOrigins(item)">
              <a class="take-order-btn have-chance">抢单</a>
            </div>
            <div class="origin-item-btn text-right" v-if="item.isPass == 1">
              <a class="take-order-btn have-order">已抢单</a>
            </div>
            <div class="origin-item-btn text-right" v-if="item.isPass == 2">
              <a class="take-order-btn">被抢单</a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// 引入翻页按钮
import {truckLists, getOriginLists, getAddressList, bookTruck, takeOrders} from '../../common/sendAxios.js'
export default {
  data () {
    return {
      address: {},
      isSelected: false, // 选择地址
      cur: 0,
      current: 0,
      isPass: -1, // 是否审核
      data: '',
      labelPosition: 'right',
      ruleForm: {
        people: '', // 联系人
        mobile: '', // 电话
        start: '', // 起点位置
        end: '', // 重点位置
        useTime: '', // 用车时间
        type: '', // 预约1现在用车0
        truckId: ''
      },
      centerDialogVisible: false,
      innerVisible: false, // 地址列表弹框
      centerDialogVisible1: false,
      innerVisible1: false, // 地址列表弹框
      tabLists: [
        {
          imgurl: require('../../img/truck-icon.png'),
          title: '找货车'
        }, {
          imgurl: require('../../img/goods-origin.png'),
          title: '找货源'
        }
      ],
      truckTypeLists: [
        '小面包车', '小货车', '中货车', '大货车', '特大货车'
      ],
      truckInfoLists: [], // 货车列表
      findOriginLists: [], // 货源列表
      addressLists: [] // 地址列表
    }
  },
  methods: {
    changeTab (ind) {
      // 找货车和找货源切换
      this.cur = ind
      switch (ind) {
        case 0:
          this.findCar()
          break
        default:
          this.findOrigin()
      }
    },
    findCar () { // 找货车
      this.getSmall()
    },
    findOrigin () { // 找货源
      getOriginLists({
        data: {},
        success: (res) => {
          if (res.code === 0) {
            this.findOriginLists = res.data
          }
        },
        error: (error) => {
          console.log(error)
        }
      })
    },
    // 分类请求货车
    chooseCar (num) {
      this.current = num
      switch (num) {
        case 0:
          this.getSmall()
          break
        case 1:
          this.getSmallTruck()
          break
        case 2:
          this.getMiddleTruck()
          break
        case 3:
          this.getBigTruck()
          break
        default:
          this.getBiggerTruck()
      }
    },
    // 请求货车列表
    // 默认小面包
    getLists (data = {
      type: '1'
    }) {
      truckLists({
        data,
        success: (res) => {
          if (res.code === 0) {
            this.truckInfoLists = res.data.list
            this.isPass = res.data.isPass
            this.data = res.data
          }
        },
        error: (error) => {
          console.log(error)
        }
      })
    },
    // 小面包
    getSmall () {
      this.getLists({
        type: 1
      })
    },
    // 小货车
    getSmallTruck () {
      this.getLists({
        type: 2
      })
    },
    // 中货车
    getMiddleTruck () {
      this.getLists({
        type: 3
      })
    },
    // 大货车
    getBigTruck () {
      this.getLists({
        type: 4
      })
    },
    // 特大货车
    getBiggerTruck () {
      this.getLists({
        type: 5
      })
    },
    toJoin (isPass) {
      // 跳转入驻信息
      if (this.isPass === -1) { // 未入驻 isPass=-1
        this.$router.push({path: '/truck/driverinfo', query: {isPass: this.isPass}})
      } else if (this.isPass === 0) { // isPass = 0 表示提交入驻申请但还未审核
        this.$router.replace('/certifyinfo/certifying')
      } else if (this.isPass === 1) { // 成功
        this.$router.replace('/truckmanage')
      } else if (this.isPass === 2) { // 审核失败，驳回申请
        this.$router.replace('/certifyinfo/failed')
      }
    },
    addNewAddress () { // 新增收货地址
      this.$router.replace('/buyer/center')
    },
    chooseAddress () { // 选择预约用车收货地址列表
      this.innerVisible = true
      let token = window.localStorage.getItem('token')
      let info = JSON.parse(window.localStorage.getItem('info'))
      let userId = ''
      if (token) {
        userId = info.id
      }
      getAddressList({
        data: {
          uid: userId
        },
        success: (res) => {
          console.log(res)
          if (res.code === 0) {
            this.addressLists = res.data
          }
        }
      })
    },
    chooseAddress1 () { // 选择立即用车收货地址列表
      this.innerVisible1 = true
      let token = window.localStorage.getItem('token')
      let info = JSON.parse(window.localStorage.getItem('info'))
      let userId = ''
      if (token) {
        userId = info.id
      }
      getAddressList({
        data: {
          uid: userId
        },
        success: (res) => {
          console.log(res)
          if (res.code === 0) {
            this.addressLists = res.data
          }
        }
      })
    },
    chooseAddressData (item) { // 选择预约用车地址数据
      this.isSelected = !this.isSelected
      this.innerVisible = false
      this.ruleForm.people = item.name
      this.ruleForm.mobile = item.mobile
      this.ruleForm.end = item.province + ' ' + item.city + ' ' + item.district + ' ' + item.address
    },
    chooseAddressData1 (item) { // 选择预约用车地址数据
      this.isSelected = !this.isSelected
      this.innerVisible1 = false
      this.ruleForm.people = item.name
      this.ruleForm.mobile = item.mobile
      this.ruleForm.end = item.province + ' ' + item.city + ' ' + item.district + ' ' + item.address
    },
    changeTime () { // 将时间戳格式转成普通日期格式
      let moment = require('moment')
      if (this.ruleForm.useTime === '' || this.ruleForm.useTime === null || this.ruleForm.useTime === undefined) {
        this.ruleForm.useTime = ''
      } else {
        this.ruleForm.useTime = moment(this.ruleForm.useTime).format('YYYY-MM-DD HH:mm:ss')
      }
    },
    bookCar () { // 预约货车请求
      this.ruleForm.type = 1
      this.truckInfoLists.forEach(i => {
        this.ruleForm.truckId = i.id
      })
      this.changeTime()
      bookTruck({
        data: this.ruleForm,
        success: (res) => {
          if (res.code === 0) {
            this.$message({
              message: res.msg,
              type: 'success'
            })
            this.centerDialogVisible = false
          } else {
            this.$message({
              message: res.msg,
              type: 'error'
            })
          }
        }
      })
    },
    useTruck () { // 现在用车
      this.ruleForm.type = 0
      this.truckInfoLists.forEach(i => {
        this.ruleForm.truckId = i.id
      })
      bookTruck({
        data: this.ruleForm,
        success: (res) => {
          if (res.code === 0) {
            this.$message({
              message: res.msg,
              type: 'success'
            })
            this.centerDialogVisible1 = false
          } else {
            this.$message({
              message: res.msg,
              type: 'error'
            })
          }
        }
      })
    },
    takeOrigins (item) { // 抢单
      takeOrders({
        data: {
          id: item.id,
          isPass: 1
        },
        success: (res) => {
          if (res.code === 0) {
            this.$message({
              message: res.msg,
              type: 'success'
            })
            this.findOrigin()
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
    this.getSmall()
  }
}
</script>

<style lang="less">
@import '../../less/ttruck.less';
</style>
