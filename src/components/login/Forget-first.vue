<template>
  <div>
    <!-- 找回密码 -->
    <top></top>
    <div class="content">
      <div class="clearfix step-lists mar-t-30">
        <!-- 步骤条 -->
        <div class="step text-center forget-step forget-step-active">
          <span>1</span>
          <span>确认账号</span>
          <span class="trangle"></span>
          <div class="trangle-white"></div>
          <div class="trangle-blue"></div>
        </div>
        <div class="step text-center forget-step">
          <span>2</span>
          <span>重置密码</span>
          <div class="trangle-white"></div>
          <div class="trangle-blue change-shape"></div>
        </div>
        <div class="step text-center forget-step">
          <span>3</span>
          <span>找回密码完成</span>
        </div>
      </div>
      <!-- 找回密码第一步 -->
      <div class="first-content">
        <div class="operate-notice font-18">请填写你要找回的密码</div>
        <!-- 表单验证 -->
        <el-form class="form-info" :model="ruleForm" :rules="rules" ref="ruleForm">
          <el-form-item prop="mobile">
            <el-input placeholder="请输入手机号" v-model="ruleForm.mobile"></el-input>
          </el-form-item>
          <el-form-item class="form-item clearfix" prop="code"
          :rules="[
            { required: true, message: '验证码不能为空'}
          ]">
            <el-input class="fl" v-model="ruleForm.code" placeholder="请输入验证码"></el-input>
            <div class="check-code text-color-9 fl" v-if="show" @click="getCode">获取验证码</div>
            <div class="check-code text-color-9 fl" v-else>{{this.time}}秒后重发</div>
          </el-form-item>
          <div class="express pad-l-20 mar-t-30">
            <span class="circle-express">·</span>
            <span>不区分大小写</span>
          </div>
        </el-form>
      </div>
      <div class="next-btn" @click="nextStep">下一步</div>
    </div>
    <Bottom></Bottom>
  </div>
</template>

<script>
import Top from './Login-top.vue'
import Bottom from './Login-bottom.vue'
import {getCodeData, checkCode} from '../../common/sendAxios.js'
export default {
  data () {
    let checkTel = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('请输入手机号!'))
      } else {
        const reg = /^[1][3,4,5,7,8][0-9]\d{8}$/
        if (reg.test(value)) {
          callback()
        } else {
          return callback(new Error('请输入格式正确的手机号'))
        }
      }
    }
    return {
      show: true,
      time: 0,
      ruleForm: {
        mobile: '',
        code: ''
      },
      rules: {
        mobile: [
          {
            validator: checkTel, trigger: 'blur'
          }
        ]
      }
    }
  },
  components: {
    Top,
    Bottom
  },
  methods: {
    // 获取验证码接口
    getCode () {
      getCodeData({
        data: {
          mobile: this.ruleForm.mobile
        },
        success: (res) => {
          let _this = this
          if (res.code === 0) {
            _this.nextStep()
          }
        },
        error: (error) => {
          console.log(error)
        }
      })
      // 点击获取验证码按钮倒计时
      this.show = false
      let timer = 60
      this.time = timer
      let clock = setInterval(() => {
        this.time = timer
        timer--
        if (timer <= 0) {
          this.show = true
          this.time = 60
          clearInterval(clock)
        }
      }, 1000)
    },
    // 下一步
    nextStep (ruleForm) {
      this.$refs.ruleForm.validate((valide) => {
        if (valide) {
          checkCode({
            data: {
              mobile: this.ruleForm.mobile,
              code: this.ruleForm.code
            },
            success: (res) => {
              if (res.code === 0) {
                this.$router.replace('/forget/second')
                const {href} = this.$router.resolve({
                  path: '/forget/second',
                  query: {
                    phone: this.ruleForm.mobile
                  }
                })
                window.open(href)
              } else {
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
