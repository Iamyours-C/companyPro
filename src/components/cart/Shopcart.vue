<template>
  <div>
    <!-- 公共部分引入 -->
    <div class="shop-cart-box">
      <Logo></Logo>
    </div>
    <!-- 顶部title部分 -->
    <div class="content">
      <div class="cart-box clearfix">
        <!-- 购物车标题部分 -->
        <div class="cart-title font-24 font-bold fl">
          <span>全部商品</span>
          <span>30</span>
        </div>
        <div class="cart-choose font-16 text-color-6 fr">
          <span>已选商品（不含运费）</span>
          <span class="all-price">￥{{totalMoney}}元</span>
          <span class="pay-top text-white" @click="topConfirmOrder">结算</span>
        </div>
      </div>
    </div>
    <!-- 分割线 -->
    <div class="cart-line"></div>
    <!-- 加购商品部分 -->
    <div class="cart-goods content" v-show="goodsLists.length > 0">
      <!-- 商品全选 数量部分 -->
      <div class="checked-title pad-l-10 clearfix">
        <div class="check-box fl">
          <input type="checkbox" class="checked-input" v-model="checkedAll" @click="checkAll">
          <span class="pad-l-10">全选</span>
        </div>
        <div class="cart-title">商品信息</div>
        <div>
          <span class="cart-operate">单价</span>
          <span class="cart-operate">数量</span>
          <span class="cart-operate">金额</span>
          <span class="cart-operate">操作</span>
        </div>
      </div>
      <div class="mar-t-20 mar-b-40">
        <!-- 店铺名称 -->
        <div v-for="(item, index) in goodsLists" :key="index">
          <!-- <div class="cart-store-name pad-l-10 mar-t-20">
            <input type="checkbox" class="checked-input" v-model="item.checked" @click="checkStoreAll(item)">
            <span class="pad-l-10">{{item.name}}</span>
          </div> -->
          <!-- 商品列表 -->
          <div class="add-goods hide-border clearfix" v-for="(subItem, ind) in item.goodsList" :key="ind">
            <input type="checkbox" v-model="subItem.status" class="fl" @click="singleCheck(item)">
            <div class="fl add-goods-img">
              <img :src="subItem.imgUrl.split(',')[0]">
            </div>
            <div class="fl goods-info text-over-hidden-2">{{subItem.title}}</div>
            <div class="fl font-bold unit-price">{{subItem.price}}</div>
            <div class="fl add-num clearfix">
              <span class="cut-plus fl" v-if="subItem.num > 1" @click="cutNum(subItem)" :goodsIndex="ind">{{cut}}</span>
              <span class="cut-plus fl" v-else></span>
              <span class="plus-num fl">
                <input type="text" :value="subItem.num" disabled class="plus-input">
              </span>
              <span class="add-plus fl" @click="addNUm(subItem,ind)" :goodsIndex="ind">{{add}}</span>
            </div>
            <div class="plus-price fl font-bold">{{subItem.totalPrice}}</div>
            <div class="fr add-operate">
              <!-- <p><a>移入收藏夹</a></p> -->
              <p><a @click="deleteData(item)">删除</a></p>
            </div>
          </div>
        </div>
        <!-- 2 -->
      </div>
      <!-- 加购底部 -->
      <div class="cart-bottom clearfix">
        <input type="checkbox" class="checked-input" v-model="checkedAll" @click="checkAll">
        <div class="bottom-operate">
          <span class="mar-r-40">全选</span>
          <span class="mar-r-40" @click="delAll">删除</span>
          <span class="mar-r-40">移入收藏夹</span>
          <span class="mar-r-40">分享</span>
        </div>
         <div class="fr">
          <span>已选商品1件</span>
          <span>合计（不含运费）：&nbsp;&nbsp;&nbsp;￥</span>
          <span class="font-28 font-bold sub-price">{{totalMoney}}元</span>
          <span class="submit-price cursor-pointer" @click="topConfirmOrder">结算</span>
        </div>
      </div>
    </div>
    <!-- 购物车数据 -->
    <div class="content cart-show" v-if="goodsLists.length == 0">
      <div class="cart-icon-box">
        <div class="cart-icon">
          <img src="../../img/cart.png" />
        </div>
        <div class="warning-notice">购物车空空如也~快去商城选购吧！</div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '../index/Module-logo.vue'
import {getSelect, deleteGoods} from '../../common/sendAxios'
import Operation from '../public/Operation.js'
export default {
  data () {
    return {
      checkedAll: false, // 控制全选/反选
      checkLen: 0, // 初始化选中长度
      cut: '-', // 初始化减少按钮文字
      add: '+', // 初始化添加按钮文字
      checkNum: 0, // 初始化选中数量
      totalPrice: '', // 初始化总价格
      num: 0, // 初始化总数量
      totalMoney: 0, // 已选商品总计
      chooseStore: false, // 初始化店铺全选
      goodsLists: [],
      cartList: []
    }
  },
  methods: {
    // 点击增加数量
    addNUm (cart) {
      let num = cart.num
      cart.num = num + 1
      cart.totalPrice = Operation.mul(cart.price, cart.num)
      if (cart.status) { // 判断是否是选中状态
        this.totalMoney = Operation.add(this.totalMoney, cart.price)
      }
    },
    // 点击减少数量
    cutNum (cart) {
      let num = cart.num
      cart.num = num - 1
      cart.totalPrice = Operation.sub(cart.totalPrice, Operation.mul(cart.price, 1))
      if (cart.status) { // 判断是否选中当前商品
        this.totalMoney = Operation.sub(this.totalMoney, cart.price)
      }
    },
    // 全选/反选
    checkAll () {
      this.cartList = []
      this.totalMoney = 0
      this.goodsLists.forEach((i) => {
        i.checked = !this.checkedAll
        if (i.goodsList) {
          i.goodsList.forEach((subItem) => {
            subItem.status = !this.checkedAll
            this.checkNum = this.goodsLists.length
            if (subItem.status) {
              this.totalMoney = Operation.add(this.totalMoney, Operation.mul(subItem.price, subItem.num))
              this.cartList.push(i)
            } else {
              this.checkNum = 0
              this.totalMoney = 0
            }
          })
        }
      })
    },
    // 单选
    singleCheck (item1) {
      this.cartList = []
      let goodsList = item1.goodsList
      goodsList.map(item => {
        item.status = !item.status
        let checkNum = this.checkNum
        if (item.status) {
          checkNum = checkNum + 1
          this.totalMoney = Operation.add(this.totalMoney, Operation.mul(item.num, item.price))
          this.cartList.push(item1)
        } else {
          checkNum = checkNum - 1
          this.totalMoney = Operation.sub(this.totalMoney, Operation.mul(item.num, item.price))
        }
        this.checkNum = checkNum
        if (this.checkNum === this.goodsLists.length) {
          this.checkedAll = true
        } else {
          this.checkedAll = false
        }
      })
    },
    // 查询用户添加到购物车的数据请求
    selectData () {
      // 从本地获取用户id
      let token = window.localStorage.getItem('info')
      let info = JSON.parse(window.localStorage.getItem('info'))
      let id = ''
      if (token) {
        id = info.id
      }
      getSelect({
        data: {
          buyId: id
        },
        success: (res) => {
          if (res.code === 0) {
            let self = this
            let cartList = res.data
            cartList.map(item => {
              item.goodsList.map(goods => {
                goods.totalPrice = Operation.mul(goods.price, goods.num)
              })
            })
            self.goodsLists = cartList
          }
        },
        error: (error) => {
          console.log(error)
        }
      })
    },
    // 单个删除购物车商品
    deleteData (item) {
      this.$confirm('此操作将永久删除该商品, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        let cartId = item.cartId
        deleteGoods({
          data: {
            ids: cartId
          },
          success: (res) => {
            if (res.code === 0) {
              this.$message({
                type: 'success',
                message: '删除成功!'
              })
              this.selectData()
            }
          },
          error: (error) => {
            console.log(error)
          }
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    // 批量删除购物车商品
    delAll () {
      let list = this.goodsLists
      let arr = []
      list.map(item => {
        item.goodsList.map(goods => {
          if (goods.status) {
            arr.push(item.cartId)
          }
        })
      })
      if (arr.length === 0) {
        return this.$message({
          message: '请至少选择一条数据',
          type: 'warning'
        })
      }
      deleteGoods({
        data: {
          ids: arr.join(',')
        },
        success: (res) => {
          if (res.code === 0) {
            this.$message({
              type: 'success',
              message: '删除成功!'
            })
            this.selectData()
          } else {
            return false
          }
        },
        error: (error) => {
          console.log(error)
        }
      })
    },
    // 确认订单
    topConfirmOrder () {
      let _this = this
      if (_this.cartList.length === 0) {
        this.$message({
          message: '请选择至少一件商品',
          type: 'warning'
        })
        return false
      } else {
        const {href} = _this.$router.resolve({
          path: '/conforder',
          query: {
            cartList: encodeURIComponent(JSON.stringify([...new Set(_this.cartList)]))
          }
        })
        window.open(href, '_blank')
      }
    }
  },
  components: {
    Logo
  },
  mounted () {
    this.selectData()
  }
}
</script>

<style lang="less">
@import '../../less/tshopcart.less';
</style>
