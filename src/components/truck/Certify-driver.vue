<template>
  <div class="certify-driver">
    <!-- 验证司机信息 -->
    <div class="info-header">
      <div class="content">司机基本信息</div>
    </div>
    <!-- 验证信息表单 -->
    <div class="content">
      <div class="driver-info-form pad-b-60">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
          <el-form-item class="info-form-item" prop="principal">
            <div class="input-box">
              <span class="input-box-name">姓名：</span>
              <el-input class="input-content" type="text" v-model="ruleForm.principal"></el-input>
            </div>
          </el-form-item>
          <el-form-item class="info-form-item" prop="principalMobile">
            <div class="input-box">
              <span class="input-box-tel">电话号码：</span>
              <el-input class="input-content" type="number" v-model="ruleForm.principalMobile"></el-input>
            </div>
          </el-form-item>
        </el-form>
        <!-- 上传证件图片 -->
        <div class="upload-id-img">
          <!-- 身份证正反面 -->
          <div>
            <div class="basic-info-label">
              <span class="basic-info-title text-color-6">上传法人身份证件：</span>
            </div>
            <!-- 正面 -->
            <div class="upload-img-box mar-t-30">
              <div class="upload-box text-center">
                <div class="upload-need-box cursor-pointer">
                  <el-upload
                    class="avatar-uploader"
                    :action="'https://api.wuziw.com/api-f/files'"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess"
                    :before-upload="beforeAvatarUpload">
                    <img v-if="ruleForm.imageUrl" :src="ruleForm.imageUrl" class="avatar">
                    <div v-else class="uploader-icon">
                      <img src="../../img/ID-zm.png" class="uploadr-logo">
                    </div>
                  </el-upload>
                </div>
                <div class="text-color-9 mar-t-10">上传身份证正面</div>
              </div>
              <div class="upload-box text-center">
                <div class="upload-demo-box">
                  <img src="../../img/demo2.png" class="img">
                </div>
                <div class="text-color-9 mar-t-10">身份证示例-正面</div>
              </div>
            </div>
            <!-- 反面 -->
            <div class="upload-img-box mar-t-30">
              <div class="upload-box text-center">
                <div class="upload-need-box cursor-pointer">
                  <el-upload
                    class="avatar-uploader"
                    :action="'https://api.wuziw.com/api-f/files'"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess1"
                    :before-upload="beforeAvatarUpload">
                    <img v-if="ruleForm.imageUrl1" :src="ruleForm.imageUrl1" class="avatar">
                    <div v-else class="uploader-icon">
                      <img src="../../img/ID-fm.png" class="uploadr-logo">
                    </div>
                  </el-upload>
                </div>
                <div class="text-color-9 mar-t-10">上传身份证反面</div>
              </div>
              <div class="upload-box text-center">
                <div class="upload-demo-box">
                  <img src="../../img/demo3.png" class="img">
                </div>
                <div class="text-color-9 mar-t-10">身份证示例-反面</div>
              </div>
            </div>
          </div>
          <!-- 驾驶证开始 -->
          <div>
            <div class="basic-info-label">
              <span class="basic-info-title text-color-6">上传法人驾驶证：</span>
            </div>
            <!-- 驾驶证 -->
            <div class="upload-img-box mar-t-30">
              <div class="upload-box text-center">
                <div class="upload-need-box cursor-pointer">
                  <el-upload
                    class="avatar-uploader"
                    :action="'https://api.wuziw.com/api-f/files'"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess2"
                    :before-upload="beforeAvatarUpload">
                    <img v-if="ruleForm.imageUrl2" :src="ruleForm.imageUrl2" class="avatar">
                    <div v-else class="uploader-icon">
                      <img src="../../img/driver-card.png" class="uploadr-logo">
                    </div>
                  </el-upload>
                </div>
                <div class="text-color-9 mar-t-10">上传驾驶证</div>
              </div>
              <div class="upload-box text-center">
                <div class="upload-demo-box">
                  <img src="../../img/driver-card-img.png" class="img">
                </div>
                <div class="text-color-9 mar-t-10">上传驾驶证示例</div>
              </div>
            </div>
            <!-- 手持身份证 -->
            <div class="upload-img-box mar-t-30">
              <div class="upload-box text-center">
                <div class="upload-need-box cursor-pointer">
                  <el-upload
                    class="avatar-uploader"
                    :action="'https://api.wuziw.com/api-f/files'"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess3"
                    :before-upload="beforeAvatarUpload">
                    <img v-if="ruleForm.imageUrl3" :src="ruleForm.imageUrl3" class="avatar">
                    <div v-else class="uploader-icon">
                      <img src="../../img/ID-zm.png" class="uploadr-logo">
                    </div>
                  </el-upload>
                </div>
                <div class="text-color-9 mar-t-10">上传手持身份证</div>
              </div>
              <div class="upload-box text-center">
                <div class="upload-demo-box">
                  <img src="../../img/demo3.png" class="img">
                </div>
                <div class="text-color-9 mar-t-10">上传手持身份证示例</div>
              </div>
            </div>
          </div>
          <!-- 驾驶证结束 -->
        </div>
        <!-- 下一步 -->
        <div class="text-center mar-t-60">
          <div class="basic-btn cursor-pointer text-center text-white" v-if="isPass == -1" @click="nextStep(ruleForm)">提 交</div>
          <div class="basic-btn cursor-pointer text-center text-white" v-if="isPass == 2" @click="updateInfoBtn(ruleForm)">提 交</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {driverJoin, updateInfo} from '../../common/sendAxios.js'
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
      id: '',
      userId: '',
      isPass: '', // 审核失败状态
      ruleForm: {
        principal: '', // 姓名
        principalMobile: '', // 电话
        imageUrl: '', // 身份证正面
        imageUrl1: '', // 身份证反面
        imageUrl2: '', // 驾驶证
        imageUrl3: '' // 手持身份证
      },
      data: '',
      rules: {
        principal: [
          { required: true, message: '请输入姓名', trigger: 'blur' }
        ],
        principalMobile: [
          { validator: checkTel, trigger: 'blur' }
        ]
      }
    }
  },
  created () {
    if (this.$route.query.data) {
      this.data = this.$route.query.data
      this.id = this.data.id
      this.userId = this.data.userId
      this.isPass = this.data.isPass
      this.ruleForm.imageUrl = this.data.cardJust
      this.ruleForm.imageUrl1 = this.data.cardAgainst
      this.ruleForm.imageUrl2 = this.data.driving
      this.ruleForm.imageUrl3 = this.data.cardHand
      this.ruleForm.principal = this.data.principal
      this.ruleForm.principalMobile = this.data.principalMobile
    } else {
      this.isPass = this.$route.query.isPass
    }
  },
  methods: {
    // 货车入驻申请 司机审核
    nextStep (ruleForm) {
      let _this = this
      _this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          driverJoin({
            data: {
              principal: _this.ruleForm.principal,
              principalMobile: _this.ruleForm.principalMobile,
              cardJust: _this.ruleForm.imageUrl,
              cardAgainst: _this.ruleForm.imageUrl1,
              driving: _this.ruleForm.imageUrl2,
              cardHand: _this.ruleForm.imageUrl3
            },
            success: (res) => {
              if (res.code === 0) {
                this.$message({
                  message: '提交成功，等待审核！',
                  type: 'success'
                })
                this.$router.replace('/certifyinfo/certifying')
              } else {
                this.$message({
                  message: res.msg,
                  type: 'error'
                })
              }
            },
            error: (error) => {
              console.log(error)
            }
          })
        } else {
          this.$message({
            message: '信息不能为空',
            type: 'warning'
          })
        }
      })
    },
    // 审核失败更新信息
    updateInfoBtn (ruleForm) {
      let _this = this
      _this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          updateInfo({
            data: {
              id: _this.id,
              userId: _this.userId,
              principal: _this.ruleForm.principal,
              principalMobile: _this.ruleForm.principalMobile,
              cardJust: _this.ruleForm.imageUrl,
              cardAgainst: _this.ruleForm.imageUrl1,
              driving: _this.ruleForm.imageUrl2,
              cardHand: _this.ruleForm.imageUrl3
            },
            success: (res) => {
              if (res.code === 0) {
                this.$message({
                  message: '提交成功，等待审核！',
                  type: 'success'
                })
                this.$router.replace('/certifyinfo/info')
              } else {
                this.$message({
                  message: res.msg,
                  type: 'error'
                })
              }
            },
            error: (error) => {
              console.log(error)
            }
          })
        } else {
          this.$message({
            message: '信息不能为空',
            type: 'warning'
          })
        }
      })
    },
    handleAvatarSuccess (res, file) {
      this.ruleForm.imageUrl = res.url
    },
    handleAvatarSuccess1 (res, file) {
      this.ruleForm.imageUrl1 = res.url
    },
    handleAvatarSuccess2 (res, file) {
      this.ruleForm.imageUrl2 = res.url
    },
    handleAvatarSuccess3 (res, file) {
      this.ruleForm.imageUrl3 = res.url
    },
    // 上传之前
    beforeAvatarUpload (file) {
      const isJPG = file.type === 'image/jpeg' || 'image/png'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    }
  }
}
</script>

<style lang="less">
@import '../../less/ttruck.less';
</style>
