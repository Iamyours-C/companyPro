<template>
  <div>
    <!-- 顶部 -->
    <Top></Top>
    <div class="content register-content">
      <!-- 注册步骤条 -->
      <div class="register-step-box">
        <div class="register-steps">
          <!-- 第一步 -->
          <div class="register-step">
            <div class="register-step-outer">
              <div class="register-step-inner text-center">1</div>
            </div>
            <div class="link-line"></div>
          </div>
          <!-- 第二步 -->
          <div class="register-step">
            <div class="register-step-outer">
              <div class="register-step-inner text-center">2</div>
            </div>
            <div class="link-line"></div>
          </div>
          <!-- 第三步 -->
          <div class="register-step">
            <div class="register-step-outer">
              <div class="register-step-inner text-center is-check">3</div>
            </div>
          </div>
        </div>
      </div>
      <!-- 注册完成 -->
      <div class="register-step-detail text-center">
        <div class="register-step-finish">
          <div class="succuess-icon">
            <img src="../../img/gou.png" />
          </div>
        </div>
        <div class="font-24 text-color-6 font-bold mar-tb-40">注册成功!</div>
        <div class="register-next-btn text-center inline-block" @click="toLogin"><a class="font-20">立即登录</a></div>
      </div>
    </div>
    <!-- 底部 -->
    <Bottom></Bottom>
  </div>
</template>

<script>
import Top from '../login/Login-top.vue'
import Bottom from '../login/Login-bottom.vue'
export default {
  methods: {
    toLogin () {
      this.$router.replace('/login')
    }
  },
  components: {
    Top,
    Bottom
  }
}
</script>

<style lang="less">
@import '../../less/tregister.less';
</style>
