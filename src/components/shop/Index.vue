<template>
  <div>
    <!-- 开店(入驻)首页 -->
    <div class="open-index">
      <div class="open-samll-title text-white font-32">
        <span>**名称</span>
        <span>|</span>
        <span>企业入驻</span>
      </div>
      <div class="open-big-title text-white text-center">
        <p class="pad-tb-24 font-36">每天数十万需求等你来接单</p>
        <p class="font-20 join-title">加入****，共享****全球电商+享受农业互联网</p>
        <p class="font-18 advantage-title mar-tb-20">我们的优势</p>
        <p class="free-open-btn font-18"><a @click="toInfo">免费激活店铺</a></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toInfo () {
      // 进入提交入驻信息页面
      this.$router.push('/openindex/info')
    }
  }
}
</script>

<style lang="less">
@import '../../less/topenstore.less';
</style>
