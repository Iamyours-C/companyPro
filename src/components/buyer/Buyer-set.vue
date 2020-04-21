<template>
  <div>
    <div class="info-set">
      <div class="set-box text-color-6">
        <!-- 修改密码 -->
        <div class="set-pass set-detail">
          <p class="font-20">修改密码</p>
          <ul class="font-18 set-item-lists clearfix">
            <li class="set-item">
              <span class="el-icon-unlock"></span>
              <span>登录密码</span>
            </li>
            <li class="set-item">已设置</li>
            <li class="set-item">
              <a class="set-btn" @click="changePass">修改</a>
            </li>
          </ul>
        </div>
        <!-- 修改手机号 -->
        <div class="set-tel set-detail">
          <p class="font-20">修改手机号</p>
          <ul class="font-18 set-item-lists clearfix">
            <li class="set-item">
              <span class="el-icon-mobile-phone"></span>
              <span>绑定手机</span>
            </li>
            <li class="set-item">183****7432</li>
            <li class="set-item">
              <a class="set-btn">修改</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    // 修改密码
    changePass () {
      this.$router.push('/forget/first')
    }
  }
}
</script>

<style>

</style>
