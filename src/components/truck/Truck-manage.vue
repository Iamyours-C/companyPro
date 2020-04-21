<template>
  <div class="truck-center">
    <!-- 我的货车(来源货车首页点击进入或者审核成功后直接点击进入) -->
    <!-- 空白 -->
    <div class="truck-center-space"></div>
    <!-- tab切换菜单 -->
    <div class="truck-center-tab">
      <div class="content clearfix">
        <div class="fl">
          <ul class="truck-tab-lists">
            <li class="truck-tab-list" v-for="(item, index) in tabLists" :key="index" @click="tabChange(index)" :class="{actived:cur==index}">
              <a>{{item}}</a>
            </li>
          </ul>
        </div>
        <div class="fr"><a @click="addTruck">添加货车</a></div>
      </div>
    </div>
    <!-- 货车内容 -->
    <div class="content">
      <div class="truck-center-cont">
        <!-- 货车管理 -->
        <div v-if="cur==0">
          <ul class="truck-manage-lists">
            <li class="truck-manage-list" v-for="(item, index) in truckLists" :key="index">
              <div class="truck-info-show">
                <div class="mar-r-56 truck-img-box">
                  <img :src="item.img">
                </div>
                <div class="truck-status-info">
                  <div class="manage-truck-info font-18 text-color-6">
                    <p>姓名：{{item.principal}}</p>
                    <p>车名称：{{item.title}}</p>
                    <p>载重：{{item.freiLoad}}吨</p>
                    <p>长 宽 高：{{item.longth}} * {{item.wide}} * {{item.height}}米</p>
                  </div>
                  <div class="manage-btn certify-status-btn mar-t-60" v-if="item.isPass == 0">待 审 核</div>
                  <div class="manage-btn certify-status-btn mar-t-60" v-if="item.isPass == 1">审 核 成 功</div>
                  <div class="manage-btn certify-status-btn mar-t-60" v-if="item.isPass == 2">审 核 失 败</div>
                </div>
              </div>
              <div class="manage-btns">
                <div class="manage-btn edit-btn" @click="returnEdit(item.trucksId)">编 辑</div>
                <div class="manage-btn delete-btn mar-t-18" @click="deleteCar(item.trucksId)">删 除</div>
              </div>
            </li>
          </ul>
        </div>
        <!-- 预约管理 -->
        <div v-if="cur==1">
          <ul class="book-manage-lists">
            <li class="book-manage-list clearfix" v-for="(item, index) in bookLists" :key="index">
              <div class="fl mar-r-56 book-manage-img">
                <img :src="item.img">
              </div>
              <div class="book-truck-info fl font-18 text-color-6">
                <p>姓名：{{item.people}}</p>
                <p>联系方式：{{item.mobile}}</p>
                <p>车牌号：{{item.plateNo}}</p>
                <p>时间：{{item.useTime}}</p>
                <p>
                  <span class="send-address">发货地址：</span>
                  <span class="address-info">{{item.start}}</span>
                </p>
                <p>
                  <span class="accept-address">收货地址：</span>
                  <span class="address-info">{{item.end}}</span>
                </p>
              </div>
              <div class="manage-btns fr">
                <div class="manage-btn accept-btn" @click="acceptBook(item)">接单</div>
                <div class="manage-btn refuse-btn mar-t-18" @click="refuseBook(item)">拒接</div>
              </div>
            </li>
          </ul>
        </div>
        <!-- 我的抢单 -->
        <div v-if="cur==2">
          <ul class="take-oreder-lists" v-for="(item, index) in takeOrderLists" :key="index">
            <li class="take-oreder-list font-18 text-color-6">
              <div>
                <img src="../../img/origin-icon.png">
              </div>
              <div class="take-oreder-info">
                <div class="take-info-name">
                  <span class="info-name-item">姓名：{{item.people}}</span>
                  <!-- <span class="info-name-item">联系方式：{{item.mobile}}</span> -->
                </div>
                <div class="take-info-name">
                  <span class="info-name-item">联系方式：{{item.mobile}}</span>
                </div>
                <div class="take-info-name">
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
              <div class="take-order-btn"><a>已完成</a></div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  getTruckLists, getTruckDetail,
  deleteTrcuk, bookListsManage,
  myTakeOrder, operateBookOrder
} from '../../common/sendAxios.js'
export default {
  data () {
    return {
      cur: 0,
      tabLists: [
        '货车管理', '预约管理', '我的抢单'
      ],
      // 货车管理
      truckLists: [],
      isPass: '', // 是否审核
      trucksId: '', // 货车id
      bookLists: [], // 预约管理
      takeOrderLists: [] // 我的抢单
    }
  },
  methods: {
    tabChange (num) {
      this.cur = num
      switch (num) {
        case 0:
          this.getStatus()
          break
        case 1:
          this.bookTruckList()
          break
        default:
          this.takeOrders()
      }
    },
    // 添加货车请求
    addTruck () {
      this.$router.replace('/truck/truckinfo')
    },
    // 获取货车列表
    getStatus () {
      getTruckLists({
        data: {},
        success: (res) => {
          if (res.code === 0) {
            this.truckLists = res.data
            this.truckLists.forEach(i => {
              this.isPass = parseInt(i.isPass)
              this.trucksId = i.trucksId
            })
          }
        },
        error: (error) => {
          console.log(error)
        }
      })
    },
    // 审核失败，跳转货车信息提交页面
    returnEdit (trucksId) {
      getTruckDetail({
        data: {
          id: trucksId
        },
        success: (res) => {
          if (res.code === 0) {
            this.$router.push({name: 'editCar', query: {data: res.data}})
          }
        },
        error: (error) => {
          console.log(error)
        }
      })
    },
    // 删除货车
    deleteCar (trucksId) {
      this.$confirm('此操作将永久删除这辆车, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        deleteTrcuk({
          data: {
            id: trucksId
          },
          success: (res) => {
            if (res.code === 0) {
              this.$message({
                type: 'success',
                message: '删除成功!'
              })
              this.getStatus()
            }
          }
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    bookTruckList () { // 预约管理
      bookListsManage({
        data: {},
        success: (res) => {
          if (res.code === 0) {
            this.bookLists = res.data
          }
        },
        error: (error) => {
          console.log(error)
        }
      })
    },
    takeOrders () { // 我的抢单
      myTakeOrder({
        data: {},
        success: (res) => {
          if (res.code === 0) {
            this.takeOrderLists = res.data
          }
        },
        error: (error) => {
          console.log(error)
        }
      })
    },
    acceptBook (item) { // 接单
      operateBookOrder({
        data: {
          id: item.id,
          isPass: 1 // isPass = 1 接受
        },
        success: (res) => {
          if (res.code === 0) {
            this.$message({
              message: res.msg,
              type: 'success'
            })
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
    },
    refuseBook (item) { // 拒绝
      operateBookOrder({
        data: {
          id: item.id,
          isPass: 2 // isPass = 2 拒绝
        },
        success: (res) => {
          if (res.code === 0) {
            this.$message({
              message: res.msg,
              type: 'success'
            })
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
    this.getStatus()
  }
}
</script>

<style lang="less">
@import '../../less/ttruck.less';
</style>
