<template>
  <div class="release-box text-color-6"
  v-loading.fullscreen.lock="fullscreenLoading"
  >
    <!-- 发布商品 -->
    <!-- 标题 -->
    <div class="release-title flex">
      <span class="label-text-title">标题:</span>
      <div class="release-title-input mar-l-4"><input type="text" v-model="title"></div>
    </div>
    <!-- 促销信息 -->
    <div class="release-promotion flex mar-t-20">
      <span class="label-text-title">商品简介:</span>
      <div class="release-promotion-info mar-l-4"><textarea class="info-area" v-model="memo"></textarea></div>
    </div>
    <!-- 促销价格 -->
    <div class="release-price mar-t-20 flex">
      <span class="label-text-title">价格:</span>
      <div class="index-input-item release-goods-price mar-l-4 mar-r-26">
        <input type="text" class="index-input" v-model="price">
        <span class="release-price-text">元</span>
      </div>
    </div>
    <!-- 商品分类 -->
    <div class="release-classify mar-t-20">
      <span class="label-text-title">商品分类:</span>
      <div class="index-input-item">
        <input type="text" v-model="goodsTypeId" class="index-input" placeholder="请选择分类">
        <!-- 下拉菜单 -->
        <!-- <div class="drop-down-btn cursor-pointer" @click="dropToggle1">
          <span class="el-icon-caret-bottom"></span>
        </div>
        <ul class="drop-down-lists" v-show="isShow">
          <li class="drop-item" v-for="(item, index) in goodsClassify" :key="index" @click="getGoodsValue(index, item)">
            <a>{{item.classifyName}}</a>
          </li>
        </ul> -->
      </div>
    </div>
    <!-- 商品单位 -->
    <div class="release-store-num mar-t-20">
      <span class="label-text-title">商品单位:</span>
      <div class="index-input-item mar-r-26">
        <input type="text" class="index-input" placeholder="请输入单位">
      </div>
    </div>
    <!-- 是否免运费  -->
    <!-- <div class="release-free mar-t-20">
      <span class="label-text-title">是否免运费:</span>
      <el-switch
        v-model="value"
        active-text="是"
        inactive-text="否">
      </el-switch>
    </div> -->
    <!-- 规格分类 -->
    <div class="release-specification mar-t-20">
      <span class="label-text-title">规格分类:</span>
      <div class="index-input-item">
        <input type="text" v-model="standard" class="index-input" placeholder="请输入规格">
        <!-- 下拉菜单 -->
        <!-- <div class="drop-down-btn cursor-pointer" @click="dropToggle2">
          <span class="el-icon-caret-bottom"></span>
        </div>
        <ul class="drop-down-lists" v-show="show">
          <li class="drop-item" v-for="(item, index) in goodsSpecifyLists" :key="index" @click="getSpecifyValue(index, item)">
            <a>{{item.specifyName}}</a>
          </li>
        </ul> -->
      </div>
    </div>
    <!-- 规格参数 -->
    <div class="release-store-num mar-t-20">
      <span class="label-text-title">规格参数:</span>
      <div class="index-input-item mar-r-26">
        <input type="text" class="index-input" placeholder="请输入规格参数" v-model="argument">
      </div>
    </div>
    <!-- 库存数量 -->
    <div class="release-store-num mar-t-20">
      <span class="label-text-title">库存数量:</span>
      <div class="index-input-item mar-r-26">
        <input type="text" class="index-input" v-model="remNum">
      </div>
    </div>
    <!-- 宝贝图片 -->
    <div class="release-goods-img mar-t-20 flex">
      <span class="label-text-title">宝贝图片:</span>
      <div>
        <el-upload
        class="mar-l-4"
        :action="'https://api.wuziw.com/api-f/files'"
        list-type="picture-card"
        :on-preview="handlePictureCardPreview"
        :on-remove="handleRemove">
        <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
        <div class="mar-t-20">最多可上传十张图片，图片每张不超过5M</div>
      </div>
    </div>
    <!-- 宝贝描述 -->
    <div class="release-describ mar-t-30 flex">
      <span class="label-text-title">宝贝描述:</span>
      <div class="release-goods-describ mar-l4">
        <div class="release-describ-title clearfix">
          <span class="fl pad-l-16 title-detail">选填，描述语任意写</span>
          <!-- <p class="fr">
            还可以输入
            <span class="title-detail">2000</span>
            个字
          </p> -->
        </div>
        <textarea class="goods-describ-box font-14 text-color-6" v-model="info" placeholder="商品描述"></textarea>
      </div>
    </div>
    <!-- 发布按钮 -->
    <div class="release-btn text-center mar-t-60" @click="releaseData"><a class="text-white">立即发布</a></div>
  </div>
</template>

<script>
import {releaseNewGoods} from '../../common/sendAxios.js'
export default {
  data () {
    return {
      value: '',
      isShow: false,
      show: false,
      value1: '',
      value2: '',
      dialogImageUrl: '',
      dialogVisible: false,
      fullscreenLoading: true, // 页面加载
      title: '', // 标题
      memo: '', // 商品简介
      price: '', // 商品价格
      goodsTypeId: '', // 商品分类
      argument: '', // 规格参数
      picture: '', // 商品图片
      standard: '', // 商品规格
      info: '', // 商品描述详情
      remNum: '', // 库存数量
      goodsClassify: [
        // 商品分类列表
        {
          classifyName: '饲料'
        }, {
          classifyName: '生鲜'
        }, {
          classifyName: '特产'
        }, {
          classifyName: '生鲜'
        }
      ],
      goodsSpecifyLists: [
        // 规格分类列表
        {
          specifyName: '件'
        }, {
          specifyName: '袋'
        }
      ]
    }
  },
  methods: {
    dropToggle1 () {
      // 商品分类下拉列表
      this.isShow = !this.isShow
    },
    dropToggle2 () {
      // 商品分类下拉列表
      this.show = !this.show
    },
    getGoodsValue (index, item) {
      // 双向绑定input框 商品分类
      this.value1 = item.classifyName
      this.isShow = false
    },
    getSpecifyValue (index, item) {
      // 双向绑定input框 规格分类
      this.value2 = item.specifyName
      this.show = false
    },
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    // 添加商品请求
    releaseData () {
      let _this = this
      releaseNewGoods({
        data: {
          title: _this.title,
          memo: _this.memo,
          picture: ['http://img0.imgtn.bdimg.com/it/u=1011976465,2796928397&fm=26&gp=0.jpg'],
          goodsTypeId: _this.goodsTypeId,
          unit: _this.unit,
          standard: _this.standard,
          arguments: _this.argument,
          remNum: _this.remNum,
          price: _this.price,
          info: _this.info
        },
        success: (res) => {
          if (res.code === 0) {
            this.$message({
              message: '添加成功',
              type: 'success'
            })
          } else {
            return false
          }
        },
        error: (error) => {
          console.log(error)
        }
      })
    }
  },
  mounted () {
    this.fullscreenLoading = false
  }
}
</script>

<style>

</style>
