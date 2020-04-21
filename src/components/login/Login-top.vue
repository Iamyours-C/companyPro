<template>
  <div>
    <div class="content">
      <div class="logo cursor-pointer" @click="toIndex">
        <img src="../../img/logo.jpg">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toIndex () {
      this.$router.replace('/index')
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../less/tlogin.less';
</style>
