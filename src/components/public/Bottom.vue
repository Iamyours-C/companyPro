<template>
  <div>
    <router-view></router-view>
    <div class="bottom-lists">
      <div class="content clearfix">
       <!-- <div class="bottom-list">
          <p class="text-color-3 font-24">新手指南</p>
          <p class="text-color-6 font-18 pad-t-20">入驻标准</p>
          <p class="text-color-6 font-18">交易流程</p>
          <p class="text-color-6 font-18">常见问题</p>
        </div>
        <div class="bottom-list">
          <p class="text-color-3 font-24">质量保证</p>
          <p class="text-color-6 font-18 pad-t-20">生猪品质标准</p>
          <p class="text-color-6 font-18">保障金交易</p>
          <p class="text-color-6 font-18">违约处理</p>
        </div>
        <div class="bottom-list">
          <p class="text-color-3 font-24">支付帮助</p>
          <p class="text-color-6 font-18 pad-t-20">农行资保护介绍</p>
          <p class="text-color-6 font-18">支付结算流程</p>
        </div> -->
        <div class="bottom-list">
          <p class="text-color-3 font-24">伍资客服热线</p>
          <p class="text-color-6 font-18 pad-t-20">联系电话：18084268108</p>
          <p class="text-color-6 font-18">周一至周日：9:00-21:00</p>
          <p class="text-color-6 font-18 pad-t-34">
            <span class="iconfont icon-kefu"></span>
            <span>在线客服</span>
          </p>
        </div>
        <div class="bottom-list text-center">
          <div class="code-box inline-block">
            <img src="../../img/codes.png" alt="">
          </div>
          <p class="font-18 text-color-3">伍资APP下载</p>
        </div>
      </div>
    </div>
    <div class="footer text-center text-white">
     <!-- <p class="font-18 footer-item">关于我们</p>
      <p class="font-18 footer-item">联系我们</p>
      <p class="font-18 footer-item">风险提示</p> -->
      <div class="pad-t-30">Copyright 2019 - 2020 贵州新之道生物科技有限公司</div>
      <div class="mar-t-10">黔ICP备20002181</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: 'web-footer'
    }
  }
}
</script>

<style lang="less">
@import '../../less/tbottom.less';
</style>
