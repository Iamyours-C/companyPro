<template>
  <!-- 支付成功页面 -->
  <div class="content">
    <div class="pay-success-page">
      <!-- 支付成功标题 -->
      <div class="success-title" v-if="order.ispay === '1'">
        <div class="success-notice">
          <span class="el-icon-check font-60"></span>
        </div>
        <div class="font-32 text-color-3">恭喜您！支付成功！</div>
      </div>
      <div class="success-title" v-else>
        <div class="success-notice">
          <span class="el-icon-close font-60"></span>
        </div>
        <div class="font-32 text-color-3">支付失败！</div>
      </div>
      <!-- 支付描述 -->
      <div class="pay-success-descirb text-color-3">
        <div class="descirb-item">
          <span class="pay-label">订单号</span>
          <span>{{order.orderNum}}</span>
        </div>
        <div class="descirb-item">
          <span class="pay-label">支付方式</span>
          <span>{{order.payType === '0' ? '微信支付' : '支付宝支付'}}</span>
        </div>
        <div class="descirb-item">
          <span class="pay-label">订单金额</span>
          <span>￥{{order.payPrice}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {paySuccess} from '../../common/sendAxios.js'
export default {
  data () {
    return {
      status: 0,
      sn: '', // 初始化订单编号
      order: {} // 订单数据
    }
  },
  created () {
    this.sn = this.$route.query.sn
    console.log(this.$route.query.sn)
    this.getPayData(this.$route.query.sn)
  },
  methods: {
    getPayData (sn) {
      paySuccess({
        data: {
          sn
        },
        success: (res) => {
          if (res.code === 0) {
            this.order = res.data
          }
        },
        error: (error) => {
          console.log(error)
        }
      })
    }
  }
}
</script>

<style lang="less">
@import '../../less/tconforder.less';
</style>
