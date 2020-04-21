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
              <div class="register-step-inner text-center is-check">2</div>
            </div>
            <div class="link-line"></div>
          </div>
          <!-- 第三步 -->
          <div class="register-step">
            <div class="register-step-outer">
              <div class="register-step-inner text-center">3</div>
            </div>
          </div>
        </div>
      </div>
      <!-- 注册信息内容 -->
       <!-- 注册第二步 -->
      <div class="register-step-detail">
        <div class="register-form">
          <div class="mar-b-40 font-22 text-color-6">请设置登录密码</div>
          <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="demo-ruleForm">
            <el-form-item class="register-form-item" prop="password">
              <el-input type="password" class="register-form-input" v-model="ruleForm.password" autocomplete="off" placeholder="请输入密码" show-password></el-input>
            </el-form-item>
            <el-form-item class="register-form-item" prop="verifyPassword">
              <el-input type="password" class="register-form-input" v-model="ruleForm.verifyPassword" autocomplete="off" placeholder="请确认密码"></el-input>
            </el-form-item>
          </el-form>
        </div>
        <!-- 下一步按钮 -->
        <div class="register-next-btn text-center" @click="nextStep(ruleForm)"><a class="font-20">下一步</a></div>
      </div>
    </div>
    <!-- 底部 -->
    <Bottom></Bottom>
  </div>
</template>

<script>
import Top from '../login/Login-top.vue'
import Bottom from '../login/Login-bottom.vue'
import {registerRequest} from '../../common/sendAxios.js'
export default {
  data () {
    let validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm.verifyPassword !== '') {
          this.$refs.ruleForm.validateField('verifyPassword')
        }
        callback()
      }
    }
    let validateRepass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm.password) {
        callback(new Error('输入的密码不一致'))
      } else {
        callback()
      }
    }
    return {
      ruleForm: {
        password: '',
        phone: '',
        verifyPassword: '',
        code: '',
        key: ''
      },
      rules: {
        password: [
          {
            validator: validatePass, trigger: 'blur'
          },
          {
            min: 6, max: 15, message: '请输入6-15个数字或字母', trigger: 'blur'
          }
        ],
        verifyPassword: [
          {
            validator: validateRepass, trigger: 'blur'
          }
        ]
      }
    }
  },
  created () {
    let _this = this
    _this.ruleForm.code = _this.$route.query.code
    _this.ruleForm.key = _this.$route.query.key
  },
  methods: {
    nextStep (ruleForm) {
      let _this = this
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          registerRequest({
            data: {
              password: _this.ruleForm.password,
              verifyPassword: _this.ruleForm.verifyPassword,
              code: _this.ruleForm.code,
              key: _this.ruleForm.key
            },
            success: (res) => {
              if (res.code === 0) {
                this.$router.replace('/register/finish')
              } else {
                _this.$message({
                  message: res.msg,
                  showClose: true,
                  type: 'error',
                  duration: 2000
                })
              }
            },
            error: (error) => {
              console.log(error)
            }
          })
        } else {
          return false
        }
      })
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
