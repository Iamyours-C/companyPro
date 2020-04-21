<template>
  <div>
    <!-- 找回密码 -->
    <top></top>
    <div class="content">
      <div class="clearfix step-lists mar-t-30">
        <!-- 步骤条 -->
        <div class="step text-center forget-step">
          <span>1</span>
          <span>确认账号</span>
          <span class="trangle"></span>
          <div class="trangle-white"></div>
          <div class="trangle-blue change-shape"></div>
        </div>
        <div class="step text-center forget-step">
          <span>2</span>
          <span>重置密码</span>
          <div class="trangle-white"></div>
          <div class="trangle-blue change-shape"></div>
        </div>
        <div class="step text-center forget-step forget-step-active">
          <span>3</span>
          <span>找回密码完成</span>
        </div>
      </div>
      <!-- 找回密码第三步 -->
      <div class="third-content">
        <div class="finish">icon</div>
        <div class="text-center">
          <div class="finish-text">
            <p class="font-24 font-bold text-color-6">修改密码成功</p>
            <p class="font-18 pad-t-20 text-color-6">
              80%用户安全首选，保护账号不被盗一键改密更方便
            </p>
          </div>
        </div>
      </div>
      <div class="text-center">
        <div @click="toLogin" class="next-btn submit-btn">立即登录</div>
      </div>
    </div>
    <Bottom></Bottom>
  </div>
</template>

<script>
import Top from './Login-top.vue'
import Bottom from './Login-bottom.vue'
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
@import './less/step.less';
</style>
