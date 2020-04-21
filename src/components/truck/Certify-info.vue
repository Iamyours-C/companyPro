<template>
  <div class="certify-box"
  v-loading="loading"
  element-loading-text="拼命加载中"
  element-loading-spinner="el-icon-loading"
  element-loading-background="rgba(0, 0, 0, 0.8)"
  >
    <!-- 入驻审核失败 -->
    <div class="info-header">
      <div class="content">信息审核</div>
    </div>
    <!-- 审核状态 -->
    <div class="content">
      <div class="certify-status">
        <!--基本信息审核状态 -->
        <div class="certify-status-notice">
          <div class="certify-status-title font-24 text-color-6">基本信息</div>
        </div>
        <!-- 状态标志 -->
        <div class="certify-status-logo text-center">
          <!-- 失败 -->
          <div class="failed-circle">
            <img src="../../img/certifying.png" v-if="data.isPass == 0">
            <img src="../../img/success.png" v-if="data.isPass == 1">
            <img src="../../img/failed.png" v-if="data.isPass == 2">
          </div>
          <!-- 待审核信息 -->
          <div class="font-20 waiting-text mar-tb-40" v-if="data.isPass == 0">待审核</div>
          <!-- 成功信息 -->
          <div class="font-20 success-text mar-tb-40" v-if="data.isPass == 1">审核成功</div>
          <!-- 不通过信息 -->
          <div class="font-20 failed-text mar-tb-40" v-if="data.isPass == 2">审核不通过</div>
          <!-- 驳回原因 -->
          <div class="font-18 refuse-reason text-left" v-if="data.isPass == 2">
            <span class="failed-text">驳回原因:</span>
            <span class="text-color-9">{{message}}</span>
          </div>
          <!-- 待审核 -->
          <div class="text-center" v-if="data.isPass == 0">
            <div class="return-btn cursor-pointer text-color-6" @click="returnTruckInfo">
              <span class="el-icon-back"></span>
              <span>返回首页</span>
            </div>
          </div>
          <!-- 成功 -->
          <div class="text-center mar-t-60" v-if="data.isPass == 1">
            <div class="return-btn cursor-pointer text-center text-color-6 mar-r-20">我的货车</div>
            <div class="return-btn cursor-pointer text-color-6 mar-l-20" @click="returnTruckInfo">
              <span class="el-icon-back"></span>
              <span>返回首页</span>
            </div>
          </div>
          <!-- 失败 -->
          <div class="text-center mar-t-60" v-if="data.isPass == 2">
            <div class="return-btn failed-btn mar-r-20" @click="returnSubmitInfo">
              <a class="text-center text-white">编辑信息</a>
            </div>
            <div class="return-btn cursor-pointer text-color-6 mar-l-20" @click="returnTruckInfo">
              <span class="el-icon-back"></span>
              <span>返回首页</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {basicInfoCertigy} from '../../common/sendAxios.js'
export default {
  data () {
    return {
      message: '',
      loading: true,
      data: {
        isPass: ''
      }
    }
  },
  methods: {
    // 获取审核状态
    getCertifyStatus () {
      basicInfoCertigy({
        data: {},
        success: (res) => {
          this.loading = false
          if (res.code === 0) {
            this.data = res.data
            this.message = res.data.passFeedback
            this.data.isPass = parseInt(res.data.isPass)
          }
        },
        error: (error) => {
          console.log(error)
        }
      })
    },
    // 返回提交身份信息
    returnSubmitInfo () {
      this.$router.push({name: 'editInfo', query: {data: this.data}})
    },
    // 返回货车首页
    returnTruckInfo () {
      this.$router.replace('/truck')
    }
  },
  mounted () {
    this.getCertifyStatus()
  }
}
</script>

<style lang="less">
@import '../../less/ttruck.less';
</style>
