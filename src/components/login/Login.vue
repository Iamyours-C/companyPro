<template>
  <div class="login-box">
    <Top></Top>
    <div class="login">
      <div class="content login-cont clearfix">
        <div class="login-detail fr bg-white">
          <div class="notice font-12 text-color-6 text-center">伍资不会以任何理由要求转账汇款，谨防诈骗</div>
          <div class="login-style text-center">
            <!-- <span class="code-login">扫码登录</span> -->
            <span class="account-login">账号登录</span>
          </div>
          <!-- 登录表单 -->
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm login-form">
            <el-form-item class="form-item" prop="username">
              <el-input type="username" class="form-input" v-model="ruleForm.username" placeholder="请输入手机号"
                        autocomplete="off"></el-input>
              <div class="left-icon el-icon-user-solid"></div>
            </el-form-item>
            <el-form-item class="form-item" prop="password">
              <el-input type="password" class="form-input" v-model="ruleForm.password" placeholder="密码" autocomplete="off" show-password></el-input>
              <div class="left-icon el-icon-lock"></div>
            </el-form-item>
          </el-form>
          <div class="text-right pad-r-20 mar-b-20">
            <span class="text-color-6 font-12 cursor-pointer" @click="toForget">忘记密码</span>
          </div>
          <!-- 登录按钮 -->
          <div class="login-btn-box cursor-pointer form-style text-center">
            <el-button class="text-white login-btn" @click="login(ruleForm)" :loading="loginLoading">登&nbsp;&nbsp;录
            </el-button>
          </div>
          <div class="login-way form-style clearfix">
            <!-- <div class="fl cursor-pointer">
              <span class="font-12 text-color-6">QQ</span>
              <span class="font-12 text-color-6">|</span>
              <span class="font-12 text-color-6">微信</span>
            </div> -->
            <div class="fr">
              <span class="font-12 text-color-6 iconfont icon-youjiantou3"></span>
              <span class="font-12 text-color-6 registe cursor-pointer" @click="toRegister">立即注册</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Bottom></Bottom>
  </div>
</template>

<script>
import Top from './Login-top.vue'
import Bottom from './Login-bottom.vue'
import {loginRequest} from '../../common/sendAxios.js'
export default {
  data () {
    return {
      loginLoading: false,
      ruleForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          {required: true, message: '请输入手机号', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'},
          {min: 6, max: 15, message: '密码长度不少于6-15之间', trigger: 'blur'}
        ]
      }
    }
  },
  components: {
    Top,
    Bottom
  },
  methods: {
    // 登录请求
    login (ruleForm) {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.loginLoading = true
          // this.$request 是因为把封装的request方法写到Vue的原型上了，存在this中
          loginRequest({
            data: {
              username: this.ruleForm.username,
              password: this.ruleForm.password,
              type: '1'
            },
            success: (res) => {
              this.loginLoading = false
              // 判断状态
              if (res.code === 0) {
                // 1.将拿到的数据存到localstorage中
                window.localStorage.setItem('token', res.data.accessToken)
                window.localStorage.setItem('info', JSON.stringify(res.data))
                this.$message({
                  message: '登录成功',
                  showClose: true,
                  type: 'success',
                  duration: 2000,
                  onClose: () => {
                    this.$router.push('/index')
                  }
                })
              } else {
                this.$message({
                  message: res.msg,
                  type: 'error',
                  duration: 3000,
                  showClose: true
                })
              }
            },
            error: (error) => {
              this.loginLoading = false
              console.log(error)
            }
          })
        }
      })
    },
    // 注册
    toRegister () {
      this.$router.push({path: '/register/first'})
    },
    // 忘记密码
    toForget () {
      this.$router.push({path: '/forget/first'})
    }
  }
}
</script>

<style lang="less">
  @import '../../less/tlogin.less';
</style>
