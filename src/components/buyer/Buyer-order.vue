<template>
  <div>
    <div class="order-content">
      <!-- top开始 -->
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="全部订单" name="first">
          <!-- 标签列表开始 -->
          <div class="order-label clearfix">
            <div class="fl label-name">商品</div>
            <ul class="label-lists fr">
              <li v-for="(item, index) in labelLists" :key="index" class="status-lists">
                <span class="label-split">|</span>
                <span class="pad-lr-4">{{item}}</span>
              </li>
            </ul>
          </div>
          <!-- 标签列表结束 -->
          <!-- 待支付商品开始 -->
          <div class="wait-pay">
            <!-- 待付款订单样式 -->
            <div class="all-check-box clearfix pad-l-10" v-if="orderList.length > 0">
              <input type="checkbox" class="wait-pay-input fl">
              <span class="fl pad-l-10 text-color-6">全选</span>
            </div>
            <!-- 订单列表开始 -->
            <ul class="order-lists">
              <li class="order-list" v-for="(order,index) in orderList" :key="index">
                <!-- 订单信息 -->
                <div class="order-info pad-l-10">
                  <input type="checkbox" class="wait-pay-input">
                  <span class="order-create-date pad-l-8">{{order.createTime}}</span>
                  <span class="order-serial-number">订单号: {{order.orderNum}}</span>
                  <span class="order-submit-date">提交时间: {{order.updateTime}}</span>
                </div>
                <!-- 商品信息 -->
                <ul class="wait-pay-lists text-color-6" v-for="(goods,i) in order.orderBillList" :key="i">
                  <li class="clearfix pay-item">
                    <div class="pad-lr-20">
                      <div class="wait-pay-goods fl mar-l-10">
                        <img :src="goods.imgUrl" alt="">
                      </div>
                      <div class="wait-goods-name fl pad-t-30">{{goods.title}}</div>
                    </div>
                  </li>
                  <li class="pay-item">
                    <div class="pad-t-30 pad-lr-20">{{goods.price}}元/{{goods.unit}}</div>
                  </li>
                  <li class="pay-item">
                    <div class="pad-t-30 pad-lr-20">{{goods.num}}</div>
                  </li>
                  <li class="pay-item">
                    <div class="pad-t-30 pad-lr-20">￥{{goods.price}}</div>
                  </li>
                  <li class="pay-item">
                    <div class="pad-t-30 pad-lr-20">￥{{order.payPrice}}</div>
                  </li>
                  <li class="pay-item">
                    <div class="pad-t-30 pad-lr-20">{{order.ispay === '0' ? '待付款' : order.ispay === '1'&& order.isship
                      === '0' ? '待发货' : order.ispay === '1'&& order.isship === '1' ? '已发货' : order.ispay === '1'&&
                      order.isship === '1' && order.isreceipt === '0' ? '待收货' : '已收货'}}
                    </div>
                  </li>
                </ul>
                <!-- 操作按钮 -->
                <div class="text-right order-btns mar-t-20">
                  <template v-if="order.ispay === '0'">
                    <p class="order-operate-btn mar-tb-4" @click="payAgain(order.id)">立即付款</p>
                    <p class="cancel-order-btn" @click="cancelOrder(order.id)">取消订单</p>
                  </template>
                  <template v-if="order.ispay === '1'&& order.isship === '0'">
                    <p class="order-operate-btn mar-tb-4" @click="reminderShipment(order.id)">提醒发货</p>
                  </template>
                  <template v-if="order.ispay === '1'&& order.isship === '1' && order.isreceipt === '0'">
                    <p class="order-operate-btn mar-tb-4" @click="confirmOrder(order.id)">确认收货</p>
                  </template>
                </div>
              </li>
            </ul>
            <el-dialog
              title="手机微信二维码支付"
              :visible.sync="dialogVisible"
              width="30%"
              class="text-center code"
              v-loading="loading"
              :before-close="handleClose"
            >
              <img :src="url"/>
            </el-dialog>
          </div>
          <!-- 没有数据时显示 -->
          <div v-if="orderList.length == 0" class="show-icon text-center">
             <div class="show-box">
               <div class="inline-block icon-box">
                 <img src="../../img/order.png" />
               </div>
               <div class="warning-notice text-center">暂无订单数据~</div>
             </div>
           </div>
          <!-- 待支付商品结束 -->
          <div class="text-center">
            <el-pagination
              :total="total"
              v-show="total ===0 ? false : true"
              background
              layout="prev, pager, next"
              @current-change="handleCurrentChange"
            ></el-pagination>
          </div>
        </el-tab-pane>
        <el-tab-pane label="待付款" name="second">
          <!-- 标签列表开始 -->
          <div class="order-label clearfix">
            <div class="fl label-name">商品</div>
            <ul class="label-lists fr">
              <li v-for="(item, index) in labelLists" :key="index" class="status-lists">
                <span class="label-split">|</span>
                <span class="pad-lr-4">{{item}}</span>
              </li>
            </ul>
          </div>
          <!-- 标签列表结束 -->
          <!-- 待支付商品开始 -->
          <div class="wait-pay">
            <!-- 待付款订单样式 -->
            <div class="all-check-box clearfix pad-l-10"  v-if="orderList.length > 0">
              <input type="checkbox" class="wait-pay-input fl">
              <span class="fl pad-l-10 text-color-6">全选</span>
            </div>
            <!-- 订单列表开始 -->
            <ul class="order-lists">
              <li class="order-list" v-for="(order,index) in orderList" :key="index">
                <!-- 订单信息 -->
                <div class="order-info pad-l-10">
                  <input type="checkbox" class="wait-pay-input">
                  <span class="order-create-date pad-l-8">{{order.createTime}}</span>
                  <span class="order-serial-number">订单号: {{order.orderNum}}</span>
                  <span class="order-submit-date">提交时间: {{order.updateTime}}</span>
                </div>
                <!-- 商品信息 -->
                <ul class="wait-pay-lists text-color-6" v-for="(goods,i) in order.orderBillList" :key="i">
                  <li class="clearfix pay-item">
                    <div class="pad-lr-20">
                      <div class="wait-pay-goods fl mar-l-10">
                        <img :src="goods.imgUrl" alt="">
                      </div>
                      <div class="wait-goods-name fl pad-t-30">{{goods.title}}</div>
                    </div>
                  </li>
                  <li class="pay-item">
                    <div class="pad-t-30 pad-lr-20">{{goods.price}}元/{{goods.unit}}</div>
                  </li>
                  <li class="pay-item">
                    <div class="pad-t-30 pad-lr-20">{{goods.num}}</div>
                  </li>
                  <li class="pay-item">
                    <div class="pad-t-30 pad-lr-20">￥{{goods.price}}</div>
                  </li>
                  <li class="pay-item">
                    <div class="pad-t-30 pad-lr-20">￥{{goods.price}}</div>
                  </li>
                  <li class="pay-item">
                    <div class="pad-t-30 pad-lr-20">{{order.ispay === '0' ? '待付款' : order.ispay === '1'&& order.isship
                      === '0' ? '待发货' : order.ispay === '1'&& order.isship === '1' ? '已发货' : order.ispay === '1'&&
                      order.isship === '1' && order.isreceipt === '0' ? '待收货' : '已收货'}}
                    </div>
                  </li>
                </ul>
                <!-- 操作按钮 -->
                <div class="text-right order-btns mar-t-20">
                  <p class="order-operate-btn mar-tb-4" @click="payAgain(order.id)">立即付款</p>
                  <p class="cancel-order-btn" @click="cancelOrder(order.id)">取消订单</p>
                </div>
              </li>
            </ul>
          </div>
          <!-- 没有数据时显示 -->
          <div v-if="orderList.length == 0" class="show-icon text-center">
             <div class="show-box">
               <div class="inline-block icon-box">
                 <img src="../../img/order.png" />
               </div>
               <div class="warning-notice text-center">暂无订单数据~</div>
             </div>
           </div>
          <!-- 待支付商品结束 -->
          <div class="text-center">
            <el-pagination
              :total="total"
              v-show="total ===0 ? false : true"
              background
              layout="prev, pager, next"
              @current-change="handleCurrentChange"
            ></el-pagination>
          </div>
          <!-- 待支付商品结束 -->
        </el-tab-pane>
        <el-tab-pane label="待发货" name="third">
          <!-- 标签列表开始 -->
          <div class="order-label clearfix">
            <div class="fl label-name">商品</div>
            <ul class="label-lists fr">
              <li v-for="(item, index) in labelLists" :key="index" class="status-lists">
                <span class="label-split">|</span>
                <span class="pad-lr-4">{{item}}</span>
              </li>
            </ul>
          </div>
          <!-- 标签列表结束 -->
          <!-- 待支付商品开始 -->
          <div class="wait-pay">
            <!-- 待付款订单样式 -->
            <div class="all-check-box clearfix pad-l-10" v-if="orderList.length > 0">
              <input type="checkbox" class="wait-pay-input fl">
              <span class="fl pad-l-10 text-color-6">全选</span>
            </div>
            <!-- 订单列表开始 -->
            <ul class="order-lists">
              <li class="order-list" v-for="(order,index) in orderList" :key="index">
                <!-- 订单信息 -->
                <div class="order-info pad-l-10">
                  <input type="checkbox" class="wait-pay-input">
                  <span class="order-create-date pad-l-8">{{order.createTime}}</span>
                  <span class="order-serial-number">订单号: {{order.orderNum}}</span>
                  <span class="order-submit-date">提交时间: {{order.updateTime}}</span>
                </div>
                <!-- 商品信息 -->
                <ul class="wait-pay-lists text-color-6" v-for="(goods,i) in order.orderBillList" :key="i">
                  <li class="clearfix pay-item">
                    <div class="pad-lr-20">
                      <div class="wait-pay-goods fl mar-l-10">
                        <img :src="goods.imgUrl" alt="">
                      </div>
                      <div class="wait-goods-name fl pad-t-30">{{goods.title}}</div>
                    </div>
                  </li>
                  <li class="pay-item">
                    <div class="pad-t-30 pad-lr-20">{{goods.price}}元/{{goods.unit}}</div>
                  </li>
                  <li class="pay-item">
                    <div class="pad-t-30 pad-lr-20">{{goods.num}}</div>
                  </li>
                  <li class="pay-item">
                    <div class="pad-t-30 pad-lr-20">￥{{goods.price}}</div>
                  </li>
                  <li class="pay-item">
                    <div class="pad-t-30 pad-lr-20">￥{{goods.price}}</div>
                  </li>
                  <li class="pay-item">
                    <div class="pad-t-30 pad-lr-20">{{order.ispay === '0' ? '待付款' : order.ispay === '1'&& order.isship
                      === '0' ? '待发货' : order.ispay === '1'&& order.isship === '1' ? '已发货' : order.ispay === '1'&&
                      order.isship === '1' && order.isreceipt === '0' ? '待收货' : '已收货'}}
                    </div>
                  </li>
                </ul>
                <!-- 操作按钮 -->
                <div class="text-right order-btns mar-t-20">
                  <p class="order-operate-btn mar-tb-4" @click="reminderShipment(order.id)">提醒发货</p>
                </div>
              </li>
            </ul>
          </div>
         <div v-if="orderList.length == 0" class="show-icon text-center">
            <div class="show-box">
              <div class="inline-block icon-box">
                <img src="../../img/order.png" />
              </div>
              <div class="warning-notice text-center">暂无订单数据~</div>
            </div>
          </div>
          <!-- 待支付商品结束 -->
          <div class="text-center">
            <el-pagination
              :total="total"
              v-show="total ===0 ? false : true"
              background
              layout="prev, pager, next"
              @current-change="handleCurrentChange"
            ></el-pagination>
          </div>
        </el-tab-pane>
        <el-tab-pane label="待收货" name="fourth">
          <!-- 标签列表开始 -->
          <div class="order-label clearfix">
            <div class="fl label-name">商品</div>
            <ul class="label-lists fr">
              <li v-for="(item, index) in labelLists" :key="index" class="status-lists">
                <span class="label-split">|</span>
                <span class="pad-lr-4">{{item}}</span>
              </li>
            </ul>
          </div>
          <!-- 标签列表结束 -->
          <!-- 待支付商品开始 -->
          <div class="wait-pay">
            <!-- 待付款订单样式 -->
            <div class="all-check-box clearfix pad-l-10" v-if="orderList.length > 0">
              <input type="checkbox" class="wait-pay-input fl">
              <span class="fl pad-l-10 text-color-6">全选</span>
            </div>
            <!-- 订单列表开始 -->
            <ul class="order-lists">
              <li class="order-list" v-for="(order,index) in orderList" :key="index">
                <!-- 订单信息 -->
                <div class="order-info pad-l-10">
                  <input type="checkbox" class="wait-pay-input">
                  <span class="order-create-date pad-l-8">{{order.createTime}}</span>
                  <span class="order-serial-number">订单号: {{order.orderNum}}</span>
                  <span class="order-submit-date">提交时间: {{order.updateTime}}</span>
                </div>
                <!-- 商品信息 -->
                <ul class="wait-pay-lists text-color-6" v-for="(goods,i) in order.orderBillList" :key="i">
                  <li class="clearfix pay-item">
                    <div class="pad-lr-20">
                      <div class="wait-pay-goods fl mar-l-10">
                        <img :src="goods.imgUrl" alt="">
                      </div>
                      <div class="wait-goods-name fl pad-t-30">{{goods.title}}</div>
                    </div>
                  </li>
                  <li class="pay-item">
                    <div class="pad-t-30 pad-lr-20">{{goods.price}}元/{{goods.unit}}</div>
                  </li>
                  <li class="pay-item">
                    <div class="pad-t-30 pad-lr-20">{{goods.num}}</div>
                  </li>
                  <li class="pay-item">
                    <div class="pad-t-30 pad-lr-20">￥{{goods.price}}</div>
                  </li>
                  <li class="pay-item">
                    <div class="pad-t-30 pad-lr-20">￥{{goods.price}}</div>
                  </li>
                  <li class="pay-item">
                    <div class="pad-t-30 pad-lr-20">{{order.ispay === '0' ? '待付款' : order.ispay === '1'&& order.isship
                      === '0' ? '待发货' : order.ispay === '1'&& order.isship === '1' ? '已发货' : order.ispay === '1'&&
                      order.isship === '1' && order.isreceipt === '0' ? '待收货' : '已收货'}}
                    </div>
                  </li>
                </ul>
                <!-- 操作按钮 -->
                <div class="text-right order-btns mar-t-20">
                  <p class="order-operate-btn mar-tb-4" @click="confirmOrder(order.id)">确认收货</p>
                </div>
              </li>
            </ul>
          </div>
          <!-- 没有数据时显示 -->
          <div v-if="orderList.length == 0" class="show-icon text-center">
             <div class="show-box">
               <div class="inline-block icon-box">
                 <img src="../../img/order.png" />
               </div>
               <div class="warning-notice text-center">暂无订单数据~</div>
             </div>
           </div>
          <!-- 待支付商品结束 -->
          <div class="text-center">
            <el-pagination
              :total="total"
              v-show="total ===0 ? false : true"
              background
              layout="prev, pager, next"
              @current-change="handleCurrentChange"
            ></el-pagination>
          </div>
        </el-tab-pane>
      </el-tabs>
      <!-- top结束 -->
    </div>
  </div>
</template>

<script>
import topMenu from './common/choice.vue'
import Pagination from '../public/Pagination'
import {
  userOrderList,
  orderToNativePay,
  orderquery,
  cancelOrder,
  reminderShipment,
  confirmOrder
} from '../../common/sendAxios.js'
import QRCode from 'qrcode'
export default {
  data () {
    return {
      timer: '',
      labelLists: [
        '规格', '数量', '单价', '实付金额', '订单状态', '操作'
      ],
      activeName: 'first',
      buyId: '', // 卖家标识
      page: 1, // 页码
      rows: 10, // 页数
      orderList: [], // 用户订单数据
      total: 0, // 用户订单数据总条数
      dialogVisible: false, // 支付弹框
      url: '', // 初始化生成二维码的图片地址
      loading: false, // 初始化页面加载
      level: 0
    }
  },
  mounted () {
    let user = JSON.parse(localStorage.getItem('info'))
    this.buyId = user.id
    this.getUserOrder(user.id)
  },
  methods: {
    // 订单数据切换
    handleClick (tab) {
      this.level = tab.index
      this.getUserOrder(this.buyId, 1, 10, tab.index)
    },

    // 获取订单数据
    getUserOrder (buyId, page = 1, rows = 10, level = 0, kind = 2) {
      userOrderList({
        data: {
          buyId,
          level,
          page,
          rows,
          kind
        },
        success: (res) => {
          if (res.code === 0) {
            this.total = res.data.total
            this.orderList = res.data.list
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

    // 更新分页
    handleCurrentChange (page) {
      this.page = page
      this.getUserOrder(this.buyId, this.page)
      console.log(this.total)
    },

    // 用户再次支付（待付款订单）
    payAgain (id) {
      let _this = this
      orderToNativePay({
        data: {
          id
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
            }).catch(err => {
              console.error(err)
            })
          } else {
            return this.$message({
              message: res.msg,
              type: 'warning'
            })
          }
        },
        error: (error) => {
          console.log(error)
        }
      })
    },

    // 支付成功就跳转支付成功页面
    toPaySuccess (sn) {
      this.$router.push({
        path: '/payfor',
        query: {sn}
      })
    },

    // 用户取消订单
    cancelOrder (id) {
      this.$confirm('此操作将取消用户订单, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        cancelOrder({
          data: {
            id
          },
          success: res => {
            if (res.code === 0) {
              this.getUserOrder(this.buyId, this.page, this.rows, this.level)
              return this.$message({
                type: 'success',
                message: res.msg
              })
            } else {
              return this.$message({
                type: 'error',
                message: res.msg
              })
            }
          },
          error: e => {
            return this.$message({
              type: 'error',
              message: '系统异常!'
            })
          }
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '未操作'
        })
      })
    },
    // 提醒发货
    reminderShipment (id) {
      reminderShipment({
        data: {
          id
        },
        success: res => {
          if (res.code === 0) {
            return this.$message({
              type: 'success',
              message: res.data
            })
          }
        },
        error: e => {
          return this.$message({
            type: 'error',
            message: '系统异常!'
          })
        }
      })
    },

    // 用户确认收货
    confirmOrder (id) {
      this.$confirm('确认收货吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        confirmOrder({
          data: {
            id
          },
          success: res => {
            if (res.code === 0) {
              this.getUserOrder(this.buyId, this.page, this.rows, this.level)
              return this.$message({
                type: 'success',
                message: res.msg
              })
            } else {
              return this.$message({
                type: 'error',
                message: res.msg
              })
            }
          },
          error: e => {
            return this.$message({
              type: 'error',
              message: '系统异常!'
            })
          }
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消操作'
        })
      })
    }
  },
  components: {
    topMenu,
    Pagination
  }
}
</script>

<style>
</style>
