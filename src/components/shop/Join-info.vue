<template>
  <div>
    <!-- 企业入驻信息资料 -->
    <div class="join-info-box mar-t-20">
      <!-- 标题开始 -->
      <div class="join-info-title mar-b-10">
        <span class="font-20 text-color-6 font-bold">公司基本信息</span>
      </div>
      <!-- 标题结束 -->
      <el-form class="join-info-form text-color-6" :rules="rules" :model="ruleForm" ref="ruleForm">
        <!-- 基本信息 -->
        <div class="join-basic-info">
          <div class="basic-info-left">
            <!-- 公司名称 -->
            <div class="basic-company clearfix">
              <div class="fl">
                <div class="basic-info-label">
                  <span class="basic-info-title">
                    公司名称：
                    <i class="star-icon">*</i>
                  </span>
                </div>
              </div>
              <el-form-item class="basic-info-input fl" prop="name">
                <el-input class="input-info" type="text" v-model="ruleForm.name"></el-input>
                <div class="text-color-6 font-12 title-notice">请确保填写的与您的营业执照上的公司名称完全一致</div>
              </el-form-item>
            </div>
            <!-- 营业执照注册号 -->
            <div class="clearfix mar-t-34">
              <div class="fl">
                <div class="basic-info-label">
                  <span class="basic-info-title">
                    营业执照注册号：
                    <i class="star-icon">*</i>
                  </span>
                </div>
              </div>
              <el-form-item class="basic-info-input fl" prop="licenseNum">
                <el-input class="input-info" type="text" v-model="ruleForm.licenseNum"></el-input>
              </el-form-item>
            </div>
             <!-- 法人代表 -->
            <div class="clearfix mar-t-34">
              <div class="fl">
                <div class="basic-info-label">
                  <span class="basic-info-title">
                    法人代表：
                    <i class="star-icon">*</i>
                  </span>
                </div>
              </div>
              <el-form-item class="basic-info-input fl" prop="legal">
                <el-input class="input-info" type="text" v-model="ruleForm.legal"></el-input>
                <div class="text-color-6 font-12 title-notice">请确保与营业执照一致</div>
              </el-form-item>
            </div>
            <!-- 法人代表手机号 -->
            <div class="clearfix mar-t-34">
              <div class="fl">
                <div class="basic-info-label">
                  <span class="basic-info-title">
                    法人代表手机号：
                    <i class="star-icon">*</i>
                  </span>
                </div>
              </div>
              <el-form-item class="basic-info-input fl" prop="legalMobile">
                <el-input class="input-info" type="text" v-model="ruleForm.legalMobile"></el-input>
              </el-form-item>
            </div>
            <!-- 法人代表证件号 -->
            <div class="clearfix mar-t-34">
              <div class="fl">
                <div class="basic-info-label">
                  <span class="basic-info-title">
                    法人代表证件号：
                    <i class="star-icon">*</i>
                  </span>
                </div>
              </div>
              <el-form-item class="basic-info-input fl" prop="legalPapersNum">
                <el-input class="input-info" type="text" v-model="ruleForm.legalPapersNum"></el-input>
              </el-form-item>
            </div>
            <!-- 注册资本 -->
            <div class="clearfix mar-t-34">
              <div class="fl">
                <div class="basic-info-label">
                  <span class="basic-info-title">
                    注册资本：
                    <i class="star-icon">*</i>
                  </span>
                </div>
              </div>
              <el-form-item class="basic-info-input fl" prop="fund">
                <el-input class="input-info" type="text" v-model="ruleForm.fund"></el-input>
              </el-form-item>
            </div>
            <!-- 店铺名称 -->
            <div class="clearfix mar-t-34">
              <div class="fl">
                <div class="basic-info-label">
                  <span class="basic-info-title">
                    店铺名称：
                    <i class="star-icon">*</i>
                  </span>
                </div>
              </div>
              <el-form-item class="basic-info-input fl" prop="shopName">
                <el-input class="input-info" type="text" v-model="ruleForm.shopName"></el-input>
              </el-form-item>
            </div>
            <!-- 店铺备注 -->
            <div class="clearfix mar-t-34">
              <div class="fl">
                <div class="basic-info-label">
                  <span class="basic-info-title">
                    店铺备注：
                    <i class="star-icon">*</i>
                  </span>
                </div>
              </div>
              <el-form-item class="basic-info-input fl" prop="memo">
                <el-input class="input-info" type="text" v-model="ruleForm.memo"></el-input>
              </el-form-item>
            </div>
          </div>
          <div class="basic-info-right">
            <!-- 企业负责人 -->
            <div class="clearfix">
              <div class="fl">
                <div class="basic-info-label">
                  <span class="basic-info-title">
                    企业负责人：
                    <i class="star-icon">*</i>
                  </span>
                </div>
              </div>
              <el-form-item class="basic-info-input fl" prop="principal">
                <el-input class="input-info" type="text" v-model="ruleForm.principal"></el-input>
              </el-form-item>
            </div>
            <!-- 企业负责人手机号 -->
            <div class="clearfix mar-t-34">
              <div class="fl">
                <div class="basic-info-label">
                  <span class="basic-info-title">
                    企业负责人手机号：
                    <i class="star-icon">*</i>
                  </span>
                </div>
              </div>
              <el-form-item class="basic-info-input fl" prop="principalMobile">
                <el-input type="text" class="input-info" v-model="ruleForm.principalMobile"></el-input>
              </el-form-item>
            </div>
            <!-- 公司成立时间 -->
            <div class="clearfix mar-t-34">
              <div class="fl">
                <div class="basic-info-label">
                  <span class="basic-info-title">
                    公司成立时间：
                    <i class="star-icon">*</i>
                  </span>
                </div>
              </div>
              <div class="basic-info-input fl">
                <el-date-picker
                  v-model="ruleForm.inCreateTime"
                  type="date"
                  placeholder="选择日期">
                </el-date-picker>
              </div>
            </div>
            <!-- 公司注册地址 -->
            <div class="clearfix mar-t-34">
              <div class="fl">
                <div class="basic-info-label">
                  <span class="basic-info-title">
                    公司注册地址：
                    <i class="star-icon">*</i>
                  </span>
                </div>
              </div>
              <div class="info-address-box fl">
                <area-select v-model="selected" :data="pcaa" type="text" :level='2' size="small" @change="province($event)"></area-select>
              </div>
              <el-form-item class="basic-info-input info-address-input pad-l-10 fl" prop="inAddress">
                <el-input class="input-info" type="text" v-model="ruleForm.inAddress" placeholder="请填写与营业执照上相同的地址"></el-input>
              </el-form-item>
            </div>
            <!-- 公司经营地址 -->
            <div class="clearfix mar-t-34">
              <div class="fl">
                <div class="basic-info-label">
                  <span class="basic-info-title">
                    公司经营地址：
                    <i class="star-icon">*</i>
                  </span>
                </div>
              </div>
              <div class="info-address-box fl">
                <area-select v-model="selected1" :data="pcaa" type="text" :level='2' size="small" @change="province($event)"></area-select>
              </div>
              <el-form-item class="basic-info-input info-address-input pad-l-10 fl" prop="address">
                <el-input class="input-info" type="text" v-model="ruleForm.address" placeholder="请填写与营业执照上相同的地址"></el-input>
              </el-form-item>
            </div>
          </div>
        </div>
        <!-- 上传证件图片 -->
        <div class="upload-id-img">
          <!-- 营业执照 -->
          <div>
            <div class="basic-info-label">
              <span class="basic-info-title">
                上传营业执照：
                <i class="star-icon">*</i>
              </span>
            </div>
            <div class="upload-img-box mar-t-20">
              <div class="upload-box text-center">
                <div class="upload-need-box cursor-pointer">
                  <el-upload
                    ref="upload"
                    v-model="ruleForm.businessLicense"
                    class="avatar-uploader"
                    :action="'https://api.wuziw.com/api-f/files'"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess1"
                    :before-upload="beforeAvatarUpload">
                    <img v-if="imageUrl1" :src="imageUrl1" class="avatar">
                    <div v-else class="uploader-icon">
                      <img src="../../img/add-img.png" class="uploadr-logo" >
                    </div>
                  </el-upload>
                </div>
                <div class="text-color-9 mar-t-10">上传营业执照</div>
              </div>
              <div class="upload-box text-center">
                <div class="upload-demo-box">
                  <img src="../../img/demo1.png" class="img">
                </div>
                <div class="text-color-9 mar-t-10">营业执照示例</div>
              </div>
            </div>
          </div>
          <!-- 上传店铺头像 -->
          <div>
            <div class="basic-info-label">
              <span class="basic-info-title">
                上传店铺图片：
                <i class="star-icon">*</i>
              </span>
            </div>
            <div class="upload-img-box mar-t-20">
              <div class="upload-box text-center">
                <div class="upload-need-box cursor-pointer">
                  <el-upload
                    ref="upload"
                    v-model="ruleForm.logo"
                    class="avatar-uploader"
                    :action="'https://api.wuziw.com/api-f/files'"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess2"
                    :before-upload="beforeAvatarUpload">
                    <img v-if="imageUrl2" :src="imageUrl2" class="avatar">
                    <div v-else class="uploader-icon">
                      <img src="../../img/add-img.png" class="uploadr-logo" >
                    </div>
                  </el-upload>
                </div>
                <div class="text-color-9 mar-t-10">上传店铺图片</div>
              </div>
              <div class="upload-box text-center">
                <div class="upload-demo-box">
                  <img src="../../img/demo1.png" class="img">
                </div>
                <div class="text-color-9 mar-t-10">店铺照片示例</div>
              </div>
            </div>
          </div>
          <!-- 身份证正反面 -->
          <div>
            <div class="basic-info-label">
              <span class="basic-info-title">
                上传法人身份证件：
                <i class="star-icon">*</i>
              </span>
            </div>
            <!-- 正面 -->
            <div class="upload-img-box mar-t-30">
              <div class="upload-box text-center">
                <div class="upload-need-box cursor-pointer">
                  <el-upload
                    ref="upload"
                    v-model="ruleForm.cardJust"
                    class="avatar-uploader"
                    :action="'https://api.wuziw.com/api-f/files'"
                    :name="'file'"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess3"
                    :before-upload="beforeAvatarUpload">
                    <img v-if="imageUrl3" :src="imageUrl3" class="avatar">
                    <div v-else class="uploader-icon">
                      <img src="../../img/ID-zm.png" class="uploadr-logo" >
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
                    ref="upload"
                    v-model="ruleForm.cardAgainst"
                    class="avatar-uploader"
                    :action="'https://api.wuziw.com/api-f/files'"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess4"
                    :before-upload="beforeAvatarUpload">
                    <img v-if="imageUrl4" :src="imageUrl4" class="avatar">
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
        </div>
      </el-form>
      <!-- 提交按钮 -->
      <div class="submit-info-btn text-center" @click="joinStore">
        <a class="text-white">提交审核</a>
      </div>
    </div>
  </div>
</template>

<script>
import {getJoin, getStoreStatus, updateStore} from '../../common/sendAxios'
import { pca, pcaa } from 'area-data'
export default {
  data () {
    // 验证手机号
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
    // 验证身份证
    let checkID = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('请输入证件号'))
      } else {
        const reg = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/
        if (reg.test(value)) {
          callback()
        } else {
          return callback(new Error('请输入格式正确的证件号'))
        }
      }
    }
    return {
      pca: pca,
      pcaa: pcaa,
      selected: [], // 初始化地址选择栏
      selected1: [],
      imageUrl1: '',
      imageUrl2: '',
      imageUrl3: '',
      imageUrl4: '',
      value: '',
      // 验证
      ruleForm: {
        useId: '', // 用户ID 唯一标识
        name: '', // 公司名称
        licenseNum: '', // 营业执照编号
        legal: '', // 法人代表
        legalMobile: '', // 法人代表手机号
        legalPapersNum: '', // 法人证件号
        principal: '', // 企业负责人
        principalMobile: '', // 负责人手机号
        fund: '', // 注册资本
        inCreateTime: '', // 公司成立时间
        inAddress: '', // 注册地址
        address: '', // 经营地址
        province: '', // 省
        city: '', // 市
        district: '', // 区
        shopName: '', // 店铺名称
        memo: '', // 店铺备注
        businessLicense: '', // 营业执照
        cardJust: '', // 身份证正
        cardAgainst: '', // 身份证反
        logo: '' // 店铺Logo
      },
      rules: {
        legalMobile: [
          {validator: checkTel, trigger: 'blur'}
        ],
        principalMobile: [
          {validator: checkTel, trigger: 'blur'}
        ],
        legalPapersNum: [
          {validator: checkID, trigger: 'blur'}
        ]
      },
      data: {},
      hasData: false
    }
  },
  methods: {
    handleAvatarSuccess1 (res, file) {
      this.imageUrl1 = res.url
    },
    handleAvatarSuccess2 (res, file) {
      this.imageUrl2 = res.url
    },
    handleAvatarSuccess3 (res, file) {
      this.imageUrl3 = res.url
    },
    handleAvatarSuccess4 (res, file) {
      this.imageUrl4 = res.url
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
    // 获取省市区的value值
    province (e) {
      this.ruleForm.province = e[0]
      this.ruleForm.city = e[1]
      this.ruleForm.district = e[2]
    },
    // 请求添加店铺
    /**
     * this.ruleForm === null 添加请求
     * this.ruleForm !== null 修改请求
     */
    joinStore () {
      let id = ''
      let token = window.localStorage.getItem('token')
      let info = JSON.parse(window.localStorage.getItem('info'))
      if (token) {
        id = info.id
      }
      let shopId = this.ruleForm.id
      if (!this.hasData) {
        getJoin({
          data: {
            userId: id,
            name: this.ruleForm.name,
            licenseNum: this.ruleForm.licenseNum,
            legal: this.ruleForm.legal,
            legalPapersNum: this.ruleForm.legalPapersNum,
            principal: this.ruleForm.principal,
            principalMobile: this.ruleForm.principalMobile,
            fund: this.ruleForm.fund,
            inCreateTime: this.ruleForm.inCreateTime,
            inAddress: this.ruleForm.inAddress,
            address: this.ruleForm.address,
            province: this.ruleForm.province,
            city: this.ruleForm.city,
            area: this.ruleForm.district,
            businessLicense: this.imageUrl1,
            cardJust: this.imageUrl3,
            cardAgainst: this.imageUrl4,
            legalMobile: this.ruleForm.legalMobile,
            logo: this.imageUrl2,
            shopName: this.ruleForm.shopName,
            memo: this.ruleForm.memo
          },
          success: (res) => {
            if (res.code === 1) {
              this.$message({
                message: '提交成功',
                type: 'success'
              })
              this.$router.replace('/openindex/audit')
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
        updateStore({
          data: {
            id: shopId,
            userId: id,
            name: this.ruleForm.name,
            licenseNum: this.ruleForm.licenseNum,
            legal: this.ruleForm.legal,
            legalPapersNum: this.ruleForm.legalPapersNum,
            principal: this.ruleForm.principal,
            principalMobile: this.ruleForm.principalMobile,
            fund: this.ruleForm.fund,
            inCreateTime: this.ruleForm.inCreateTime,
            inAddress: this.ruleForm.inAddress,
            address: this.ruleForm.address,
            province: this.ruleForm.province,
            city: this.ruleForm.city,
            area: this.ruleForm.district,
            businessLicense: this.imageUrl1,
            cardJust: this.imageUrl3,
            cardAgainst: this.imageUrl4,
            legalMobile: this.ruleForm.legalMobile,
            logo: this.imageUrl2,
            shopName: this.ruleForm.shopName,
            memo: this.ruleForm.memo
          },
          success: (res) => {
            if (res.code === 0) {
              this.$message({
                message: '提交成功',
                type: 'success'
              })
              this.$router.replace('/openindex/audit')
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
    getStoreInfo () { // 审核失败后查询店铺信息
      let info = JSON.parse(window.localStorage.getItem('info'))
      let uid = info.id
      getStoreStatus({
        data: {
          uid
        },
        success: (res) => {
          if (res.code === 0) {
            if (res.data) {
              this.hasData = true
              this.ruleForm = res.data
              this.imageUrl1 = res.data.businessLicense
              this.imageUrl2 = res.data.cardJust
              this.imageUrl3 = res.data.cardAgainst
              this.imageUrl4 = res.data.logo
            }
          }
        },
        error: (error) => {
          console.log(error)
        }
      })
    }
  },
  mounted () {
    this.getStoreInfo()
  }
}
</script>

<style>
</style>
