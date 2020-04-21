<template>
  <div class="about-us">
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
      <div class="about-us-box">
        <!-- title -->
        <div class="about-us-title font-24 text-center">企业介绍</div>
        <!-- introduce content -->
        <div class="text-color-3 about-us-text">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;贵州新之道生物科技有限公司办公室地址位于 贵州省贵阳市修文县久长镇兴隆村，于2012年01月05日在工商局注册成立，注册资本为1000 万人民币元(万元)，在公司发展壮大的8年里，我们始终为客户提供最好的产品、良好的技术支持、健全的售后服务，我公司主要经营法律、法规、国务院决定规定禁止的不得经营；法律、法规、国务院决定规定应当许可（审批）的，经审批机关批准后凭许可（审批）文件经营;法律、法规、国务院决定规定无需许可（审批）的，市场主体自主选择经营。(生产、销售：浓缩饲料。销售：预混饲料、添加剂、饲料。我们有最好的产品和专业的销售和技术团队，我公司是生物制品公司行业内知名企业，如果您对我公司的产品服务有兴趣，期待您在线留言或者来电咨询。
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
@import  '../../less/tabout-us.less';
</style>
