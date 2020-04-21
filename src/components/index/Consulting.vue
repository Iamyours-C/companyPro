<template>
  <div class="consulting-box">
    <!-- logo Start -->
    <Logo></Logo>
    <!-- logo End -->
    <!-- Nav Start -->
    <Nav></Nav>
    <!-- Nav End -->
    <!-- banner Start -->
    <div class="banner-box mar-t-20"></div>
    <!-- banner End -->
    <!-- content Start -->
    <div class="content">
      <!-- content -->
      <div class="consulting-box-text">
        <!-- title -->
        <div class="consulting-box-title font-24 text-center">咨询中心</div>
        <div class="consulting-box-cont text-color-6 text-center">
          <div>
            <span>联系电话：</span>
            <span>18084268108</span>
          </div>
          <div>
            <span>电子邮箱：</span>
            <span>1066224646@qq.com</span>
          </div>
          <div>
            <span>公司名称：</span>
            <span>贵州新之道生物科技有限公司</span>
          </div>
          <div>
            <span>公司地址：</span>
            <span>贵州省贵阳市修文县久长镇兴隆村</span>
          </div>
        </div>
      </div>
    </div>
    <!-- content End -->
  </div>
</template>

<script>
import Logo from './Module-logo.vue'
import Nav from './Nav-index.vue'
export default {
  components: {
    Logo,
    Nav
  }
}
</script>

<style lang="less">
@import '../../less/tconsulting.less';
</style>
