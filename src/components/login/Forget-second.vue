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
        <div class="step text-center forget-step forget-step-active">
          <span>2</span>
          <span>重置密码</span>
          <div class="trangle-white"></div>
          <div class="trangle-blue"></div>
        </div>
        <div class="step text-center forget-step">
          <span>3</span>
          <span>找回密码完成</span>
        </div>
      </div>
      <!-- 找回密码第二步 -->
      <div class="second-content">
        <el-form class="form-sub" :label-position="labelPosition" label-width="140px" :model="ruleForm" :rules="rules" ref="ruleForm">
          <el-form-item class="form-pass" label="输入新密码" prop="pass">
            <el-input type="password" v-model="ruleForm.pass" show-password></el-input>
          </el-form-item>
          <el-form-item class="form-pass" label="确认新密码" prop="repassword">
            <el-input type="password" v-model="ruleForm.repassword"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <div class="next-btn" @click="resetPass">下一步</div>
    </div>
    <Bottom></Bottom>
  </div>
</template>

<script>
import Top from './Login-top.vue'
import Bottom from './Login-bottom.vue'
import {forgetPass} from '../../common/sendAxios.js'
export default {
  data () {
    let validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm.repassword !== '') {
          this.$refs.ruleForm.validateField('repassword')
        }
        callback()
      }
    }
    let validateRepass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('密码不一致'))
      } else {
        callback()
      }
    }
    return {
      labelPosition: 'right',
      mobile: '',
      ruleForm: {
        pass: '',
        repassword: ''
      },
      rules: {
        pass: [
          {
            validator: validatePass, trigger: 'blur'
          },
          {
            min: 6, max: 15, message: '密码长度不小于6-15之间', trigger: 'blur'
          }
        ],
        repassword: [
          {
            validator: validateRepass, trigger: 'blur'
          }
        ]
      }
    }
  },
  components: {
    Top,
    Bottom
  },
  created () {
    let _this = this
    _this.mobile = _this.$route.query.phone
    console.log(_this.mobile)
  },
  methods: {
    resetPass (ruleForm) {
      let _this = this
      _this.$refs.ruleForm.validate((valide) => {
        if (valide) {
          forgetPass({
            data: {
              password: _this.ruleForm.pass,
              phone: _this.mobile
            },
            success: (res) => {
              if (res.code === 0) {
                _this.$message({
                  message: '密码修改成功！',
                  type: 'success'
                })
                this.$router.replace('/forget/finish')
              } else {
                _this.$message({
                  message: '密码修改失败，请稍后重试！',
                  type: 'error'
                })
                return false
              }
            },
            error: (error) => {
              console.log(error)
            }
          })
        }
      })
    }
  }
}
</script>

<style lang="less">
@import './less/step.less';
</style>
