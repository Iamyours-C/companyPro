<template>
  <div>
    <div class="info-detail">
      <div class="info-box">
        <div class="info-box-top">
          <div>
            <el-avatar class="info-box-avatar" :src="formLabelAlign.headimgurl"></el-avatar>
          </div>
          <div class="change-avatar pad-tb-10 inline-block" @click="changeAvatar">修改头像</div>
          <!-- 修改头像弹框 -->
          <el-dialog
            title="自定义头像"
            :visible.sync="centerDialogVisible"
            width="30%"
            center>
            <el-upload
              class="avatar-uploader"
              ref="upload"
              :action="'https://api.wuziw.com/api-f/files'"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload">
              <img v-if="imageUrl" :src="imageUrl" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
            <span slot="footer" class="dialog-footer">
              <el-button type="primary" @click="submitUpload">确 定 修 改</el-button>
            </span>
          </el-dialog>
        </div>
        <el-form class="info-box-form" :label-position="labelPosition" label-width="120px" :model="formLabelAlign">
          <el-form-item class="info-item" label="用户名：" prop="username">
            <span></span>
            <el-input v-model="formLabelAlign.username"></el-input>
          </el-form-item>
          <el-form-item class="info-item" label="昵称：" prop="nickname">
            <el-input v-model="formLabelAlign.nickname"></el-input>
          </el-form-item>
          <el-form-item class="info-item" label="性别：" prop="sex" >
            <!-- <span>未设置</span> -->
            <el-radio v-model="formLabelAlign.sex" label="1">男</el-radio>
            <el-radio v-model="formLabelAlign.sex" label="0">女</el-radio>
          </el-form-item>
        </el-form>
        <div class="text-center mar-t-40" @click="changeInfo">
          <a class="change-info-btn font-20 cursor-pointer" >修改</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {getInfoData, getChangeInfo} from '../../common/sendAxios.js'
export default {
  data () {
    return {
      imageUrl: '',
      centerDialogVisible: false,
      labelPosition: 'right',
      formLabelAlign: {
        username: '', // 初始化用户名
        nickname: '', // 初始化昵称
        sex: '', // 性别默认为男
        headimgurl: require('../../img/avatar.png')
      }
    }
  },
  methods: {
    // 查询用户信息
    selectInfo () {
      getInfoData({
        data: {},
        success: (res) => {
          let data = res.data
          this.formLabelAlign.username = data.username
          this.formLabelAlign.nickname = data.nickname
          this.formLabelAlign.sex = data.sex + ''
        },
        error: (error) => {
          console.log(error)
        }
      })
    },
    // 显示修改头像弹框
    changeAvatar () {
      this.centerDialogVisible = true
    },
    handleAvatarSuccess (res, file) {
      this.imageUrl = res.url
      console.log(res.url)
      console.log(this.imageUrl)
    },
    // 图片上传前
    beforeAvatarUpload (file) {
      const isJPG = file.type === 'image/jpeg' || 'image/png' || 'image/jpg'
      const isLt2M = file.size / 1024 / 1024 < 2
      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    },
    // 修改用户信息
    changeInfo () {
      getChangeInfo({
        data: {
          username: this.formLabelAlign.username,
          nickname: this.formLabelAlign.nickname,
          sex: parseInt(this.formLabelAlign.sex),
          headimgurl: this.imageUrl
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
    },
    // 手动上传头像
    submitUpload () {
      this.formLabelAlign.headimgurl = this.imageUrl
      console.log(this.formLabelAlign.headimgurl)
      this.centerDialogVisible = !this.centerDialogVisible
    }
  },
  mounted () {
    this.selectInfo()
  }
}
</script>

<style>
</style>
