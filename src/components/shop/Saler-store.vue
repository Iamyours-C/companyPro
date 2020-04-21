<template>
  <div class="salering-box"
  v-loading.fullscreen.lock="fullscreenLoading"
  >
    <!-- 仓库中的宝贝 -->
    <!-- 第二部分 -->
    <!-- <div class="index-input-box mar-t-30">
      <div class="index-input-item mar-r-26">
        <input type="text" class="index-input" placeholder="商品ID">
      </div>
      <div class="index-input-item mar-r-26">
        <input type="text" class="index-input" placeholder="买家昵称">
      </div>
      <div class="index-input-item mar-r-26">
        <input type="text" class="index-input" placeholder="订单编号">
      </div>
      <div class="index-input-item">
        <input type="text" v-model="sortvalue" disabled class="index-input" placeholder="商品状态">
        <div class="drop-down-btn cursor-pointer" @click="dropToggle">
          <span class="el-icon-caret-bottom"></span>
        </div>
        <ul class="drop-down-lists" v-show="isShow">
          <li class="drop-item" v-for="(item, index) in dropLists" :key="index" @click="getValue(index, item)">
            <a>{{item.name}}</a>
          </li>
        </ul>
      </div>
      <div class="search-order-btn text-center inline-block mar-t-20 cursor-pointer">搜索订单</div>
    </div> -->
    <!-- 第三部分 -->
     <div class="operate-btns clearfix" v-if="storeLists > 0">
       <div class="operate-goods-btn fl mar-r-40"><a @click="deleteAll">批量删除</a></div>
       <div class="operate-goods-btn fl mar-r-40"><a @click="isUpAll">批量上架</a></div>
     </div>
     <!-- 第四部分 -->
     <div v-if="storeLists > 0">
       <ul class="order-describ-box text-center text-color-6 clearfix">
        <li class="fl describ-name check-all-box">
          <span>商品名称</span>
          <div class="check-all-order clearfix">
            <input type="checkbox" class="fl" v-model="checkAll" @click="checkedAll">
            <span class="fl pad-l-8">全选</span>
          </div>
        </li>
        <li class="fl describ-item">
          <span>价格</span>
          <span class="describ-item-split">|</span>
        </li>
        <li class="fl describ-item">
          <span>库存</span>
          <span class="describ-item-split">|</span>
        </li>
        <li class="fl describ-item">
          <span>销量</span>
          <span class="describ-item-split">|</span>
        </li>
        <li class="fl describ-item">
          <span>创建时间</span>
          <span class="describ-item-split">|</span>
        </li>
        <li class="fl describ-item">
          <span>发布时间</span>
          <span class="describ-item-split">|</span>
        </li>
        <li class="fl describ-item">
          <span>操作</span>
          <span class="describ-item-split">|</span>
        </li>
      </ul>
     </div>
      <!-- 仓库中的宝贝 -->
     <div class="salering-goods-box" v-if="storeLists > 0">
       <ul v-for="(item, index) in storeLists" :key="index">
          <li>
            <div>
              <!-- 订单抬头 -->
              <div class="order-head salering-head">
                <input type="checkbox" v-model="item.status" @click="singleCheck">
              </div>
              <!-- 订单商品 -->
              <div class="order-body text-color-6">
                <div class="order-body-img">
                  <img :src="item.imgUrl" class="img">
                </div>
                <div class="order-body-text">
                  <p class="mar-t-40 text-left text-over-hidden-3">{{item.title}}</p>
                </div>
                <div class="order-body-text">
                  <p class="mar-t-40">￥{{item.price}}</p>
                  <p class="order-body-split"></p>
                </div>
                <div class="order-body-text">
                  <p class="mar-t-40">{{item.remNum}}</p>
                  <p class="order-body-split"></p>
                </div>
                <div class="order-body-text">
                  <p class="mar-t-40">{{item.sellNum}}</p>
                  <p class="order-body-split"></p>
                </div>
                <div class="order-body-text time">
                  <p class="mar-t-40">{{item.createTime}}</p>
                  <p class="order-body-split"></p>
                </div>
                <div class="order-body-text time">
                  <p class="mar-t-40 text-left">{{item.updateTime}}</p>
                  <p class="order-body-split"></p>
                </div>
                <div class="order-body-text">
                  <p class="order-body-split"></p>
                  <div class="mar-t-40 salering-operate-text">
                    <p class="pad-tb-4" v-if="item.isUp === '0'"><a @click="isUpGoods">上架</a></p>
                    <p><a @click="sigleDelete(item)">删除</a></p>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
     </div>
     <!-- 无数据时显示 -->
     <div class="show-icon" v-if="storeLists.length == 0">
       <div class="show-box">
         <div class="icon-box">
           <img src="../../img/order.png" />
         </div>
         <div class="warning-notice text-center">仓库暂无商品！</div>
       </div>
     </div>
     <!-- 分页按钮 -->
     <div class="text-center">
       <!-- <Pagination></Pagination> -->
     </div>
  </div>
</template>

<script>
import Pagination from '../public/Pagination.vue'
import {getGoodsStore, deleteData, getGoodsStatus} from '../../common/sendAxios.js'
export default {
  data () {
    return {
      cur: 2,
      isShow: false,
      fullscreenLoading: false, // 页面加载
      goodsId: '', // 初始化商品id
      checkAll: false, // 初始化全选
      checknum: 0, // 初始化选中的数量
      sortvalue: '',
      text: '',
      dropLists: [
        {
          name: '已上架'
        },
        {
          name: '已下架'
        },
        {
          name: '待上架'
        }
      ],
      storeLists: []
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
    // 仓库中的宝贝请求
    getStoreGoods () {
      getGoodsStore({
        data: {
          isUp: '0'
        },
        success: (res) => {
          if (res.code === 0) {
            let _this = this
            _this.fullscreenLoading = false
            _this.storeLists = res.data.list
          }
        },
        error: (error) => {
          console.log(error)
        }
      })
    },
    // 全选
    checkedAll () {
      let _this = this
      _this.storeLists.forEach(i => {
        i.status = !i.status
      })
    },
    // 单选
    singleCheck (item) {
      let _this = this
      item.status = !item.status
      let checknum = _this.checknum
      if (item.status) {
        checknum = checknum + 1
      } else {
        checknum = checknum - 1
      }
      _this.checknum = checknum
      if (_this.checknum === _this.storeLists.length) {
        _this.checkAll = true
      } else {
        _this.checkAll = false
      }
    },
    // 单条数据删除
    sigleDelete (item) {
      this.goodsId = item.id
      this.$confirm('此操作将永久删除该商品，是否继续？', '提示', {
        confirButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        deleteData({
          data: {
            ids: this.goodsId
          },
          success: (res) => {
            console.log(res)
            if (res.code === 0) {
              this.$message({
                type: 'success',
                message: '删除成功！'
              })
              this.getStoreGoods()
            } else {
              return false
            }
          },
          error: (error) => {
            console.log(error)
          }
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除操作'
        })
      })
    },
    // 批量删除
    deleteAll () {
      let list = this.storeLists
      let arr = []
      list.forEach(i => {
        if (i.status) {
          arr.push(i.id)
        }
      })
      if (arr.length === 0) {
        return this.$message({
          message: '请至少选择一条数据',
          type: 'warning'
        })
      }
      deleteData({
        data: {
          ids: arr.join(',')
        },
        success: (res) => {
          if (res.code === 0) {
            this.$message({
              type: 'success',
              message: '删除成功!'
            })
            this.getStoreGoods()
          } else {
            return false
          }
        },
        error: (error) => {
          console.log(error)
        }
      })
    },
    // 上架商品请求
    isUpGoods () {
      let _this = this
      _this.storeLists.forEach(i => {
        _this.goodsId = i.id
      })
      getGoodsStatus({
        data: {
          id: [_this.goodsId],
          isUp: '1'
        },
        success: (res) => {
          if (res.code === 0) {
            this.$message({
              message: '上架成功',
              type: 'success'
            })
            this.getStoreGoods()
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
    // 批量上架
    isUpAll () {
      let list = this.storeLists
      let arr = []
      list.forEach(i => {
        if (i.status) {
          arr.push(i.id)
        }
      })
      if (arr.length === 0) {
        return this.$message({
          message: '请至少选择一条数据',
          type: 'warning'
        })
      }
      getGoodsStatus({
        data: {
          id: arr,
          isUp: '1'
        },
        success: (res) => {
          if (res.code === 0) {
            this.$message({
              type: 'success',
              message: '上架成功!'
            })
            this.getSaleringGoods()
          } else {
            this.$message({
              type: 'error',
              message: res.msg
            })
          }
        },
        error: (error) => {
          console.log(error)
        }
      })
    }
  },
  components: {
    Pagination
  },
  mounted () {
    this.getStoreGoods()
  }
}
</script>

<style>

</style>
