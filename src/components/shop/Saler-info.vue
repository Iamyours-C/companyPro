<template>
  <div class="saler-center-info">
    <!-- 头像框 -->
    <div class="saler-avatar-box text-center">
      <div class="saler-info-avatar inline-block">
        <img :src="ruleForm.logo" />{{ruleForm.logo}}
      </div>
      <div class="change-title mar-t-10 cursor-pointer" @click="centerDialogVisible = true">修改店铺头像</div>
      <!-- 修改店铺头像弹框 -->
      <el-dialog
        title="修改店铺头像"
        :visible.sync="centerDialogVisible"
        width="30%"
        center>
        <el-upload
          class="avatar-uploader text-center"
          :action="'https://api.wuziw.com/api-f/files'"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload">
          <img v-if="imageUrl" :src="imageUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="changeLogo">确 定 修 改</el-button>
        </span>
      </el-dialog>
    </div>
    <!-- 表单 -->
    <el-form :label-position="labelPosition" label-width="80px" :model="ruleForm" ref="ruleForm" class="form-box mar-t-30">
      <el-form-item label="店铺昵称 :" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="手机号码 :" prop="legalMobile">
        <el-input v-model="ruleForm.legalMobile"></el-input>
      </el-form-item>
      <el-form-item label="所在地 :" prop="address">
        <el-input v-model="ruleForm.address"></el-input>
      </el-form-item>
      <el-form-item class="text-center mar-t-60">
        <div class="inline-block change-btn font-18 cursor-pointer" @click="changeInfo">修改</div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {updateStoreInfo, getStoreStatus} from '../../common/sendAxios.js'
export default {
  data () {
    return {
      labelPosition: 'right', // label位置
      centerDialogVisible: false, // 修改头像弹框
      imageUrl: '',
      ruleForm: {
        name: '', // 初始化店铺昵称
        legalMobile: '', // 初始化手机号
        address: '', // 初始化地址
        logo: require('../../img/timg.jpg') // 店铺头像
      }
    }
  },
  methods: {
    handleAvatarSuccess (res, file) { // 头像上传成功
      this.imageUrl = res.url
      console.log(res)
    },
    beforeAvatarUpload (file) { // 上传之前校验图片格式
      console.log(file)
      const isJPG = file.type === 'image/jpeg' || 'image/png'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    },
    selectInfo () { // 查询店铺信息
      let info = JSON.parse(window.localStorage.getItem('info'))
      let uid = info.id
      getStoreStatus({
        data: {
          uid
        },
        success: (res) => {
          if (res.code === 0) {
            this.ruleForm = res.data
            // console.log("ruleForm", this.ruleForm)
          }
        },
        error: (error) => {
          console.log(error)
        }
      })
    },
    changeLogo () { // 修改头像
      this.ruleForm.logo = this.imageUrl
      this.centerDialogVisible = !this.centerDialogVisible
    },
    changeInfo () { // 修改信息
      updateStoreInfo({
        data: {
          id: this.ruleForm.id,
          legalMobile: this.ruleForm.legalMobile,
          address: this.ruleForm.address,
          logo: this.imageUrl,
          name: this.ruleForm.name
        },
        success: (res) => {
          if (res.code === 0) {
            this.$message({
              message: res.msg,
              type: 'success'
            })
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
    }
  },
  mounted () {
    this.selectInfo()
  }
}
</script>

<style lang="less">
@import '../../less/tsaler.less';
</style>
