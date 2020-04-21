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
          <div class="certify-status-title font-24 text-color-6">店铺入驻信息</div>
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
            <span class="text-color-9">{{data.passFeedback}}</span>
          </div>
          <!-- 待审核 -->
          <div class="text-center" v-if="data.isPass == 0">
            <div class="return-btn cursor-pointer text-color-6" @click="backIndex">
              <span class="el-icon-back"></span>
              <span>返回首页</span>
            </div>
          </div>
          <!-- 成功 -->
          <div class="text-center mar-t-60" v-if="data.isPass == 1">
            <div class="return-btn cursor-pointer text-center text-color-6 mar-r-20">我的店铺</div>
            <div class="return-btn cursor-pointer text-color-6 mar-l-20" @click="backSalerCenter">
              <span class="el-icon-back"></span>
              <span>返回首页</span>
            </div>
          </div>
          <!-- 失败 -->
          <div class="text-center mar-t-60" v-if="data.isPass == 2">
            <div class="return-btn failed-btn mar-r-20" @click="returnSubmitInfo">
              <a class="text-center text-white">编辑信息</a>
            </div>
            <div class="return-btn cursor-pointer text-color-6 mar-l-20" @click="backIndex">
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
import {getStoreStatus} from '../../common/sendAxios.js'
export default {
  data () {
    return {
      loading: true,
      data: {
        isPass: 0, // 审核状态
        passFeedback: '' // 驳回原因
      }
    }
  },
  methods: {
    getCertifyStatus () { // 查询店铺入驻审核状态
      let info = JSON.parse(window.localStorage.getItem('info'))
      let uid = info.id
      getStoreStatus({
        data: {
          uid
        },
        success: (res) => {
          if (res.code === 0) {
            this.data = res.data
            this.data.isPass = parseInt(res.data.isPass)
            this.loading = false
          }
        },
        error: (error) => {
          console.log(error)
        }
      })
    },
    backIndex () { // 返回上传首页
      this.$router.replace('/index')
    },
    backSalerCenter () { // 审核成功 返回卖家中心
      this.$router.replace('/saler/center')
    },
    returnSubmitInfo () { // 申请被驳回  返回申请页面继续走流程
      this.$router.push({path: '/openindex/info'})
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
