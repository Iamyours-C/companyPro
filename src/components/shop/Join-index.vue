<template>
  <div>
    <!-- 入驻信息首页 -->
    <div class="content">
      <!-- 入驻信息抬头开始 -->
      <div class="join-head text-center">
        <div class="join-head-step">
          <a class="font-18 text-color-9 on">①提交入驻信息</a>
          <p class="step-link-line"></p>
        </div>
        <div class="join-head-step">
          <a class="font-18 text-color-9">②等待审核</a>
        </div>
      </div>
      <!-- 入驻信息抬头结束 -->
      <!-- 等待审核 -->
      <component :is="currentComponent"></component>
    </div>
  </div>
</template>

<script>
import Info from './Join-info.vue'
import Audit from './Audit.vue'
export default {
  data () {
    return {
      currentComponent: 'Info'
    }
  },
  components: {
    Info,
    Audit
  },
  methods: {
  }
}
</script>

<style lang="less">
@import '../../less/topenstore.less';
</style>
