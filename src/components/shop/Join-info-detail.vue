<template>
  <div>
    <!-- 企业入驻信息资料 -->
    <div class="join-info-box">
      <!-- 标题开始 -->
      <div class="join-info-title mar-b-10">
        <span class="font-20 text-color-6 font-bold">公司基本信息</span>
      </div>
      <!-- 标题结束 -->
      <el-form class="join-info-form text-color-6" :model="ruleForm">
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
              <el-form-item class="basic-info-input look-info fl" prop="name">
                <el-input disabled class="input-info" type="text" v-model="ruleForm.name"></el-input>
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
              <el-form-item class="basic-info-input look-info fl" prop="licenseNum">
                <el-input disabled class="input-info" type="text" v-model="ruleForm.licenseNum"></el-input>
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
              <el-form-item class="basic-info-input look-info fl" prop="legal">
                <el-input disabled class="input-info" type="text" v-model="ruleForm.legal"></el-input>
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
              <el-form-item class="basic-info-input look-info fl" prop="legalMobile">
                <el-input disabled class="input-info" type="text" v-model="ruleForm.legalMobile"></el-input>
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
              <el-form-item class="basic-info-input look-info fl" prop="legalPapersNum">
                <el-input disabled class="input-info" type="text" v-model="ruleForm.legalPapersNum"></el-input>
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
              <el-form-item class="basic-info-input look-info fl" prop="fund">
                <el-input disabled class="input-info" type="text" v-model="ruleForm.fund"></el-input>
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
              <el-form-item class="basic-info-input look-info fl" prop="memo">
                <el-input disabled class="input-info" type="text" v-model="ruleForm.memo"></el-input>
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
              <el-form-item class="basic-info-input look-info fl" prop="principal">
                <el-input disabled class="input-info" type="text" v-model="ruleForm.principal"></el-input>
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
              <el-form-item class="basic-info-input look-info fl" prop="principalMobile">
                <el-input disabled type="text" class="input-info" v-model="ruleForm.principalMobile"></el-input>
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
              <div class="basic-info-input look-info fl">
                <el-input disabled class="input-info" type="text" v-model="ruleForm.inCreateTime"></el-input>
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
              <div class="basic-info-input look-info fl" prop="inAddress">
                <el-input disabled class="input-info" type="text" v-model="ruleForm.inAddress"></el-input>
              </div>
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
              <div class="basic-info-input look-info fl" prop="address">
                <el-input disabled class="input-info" type="text" v-model="ruleForm.address"></el-input>
              </div>
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
              <el-form-item class="basic-info-input look-info fl" prop="shopName">
                <el-input disabled class="input-info" type="text" v-model="ruleForm.shopName"></el-input>
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
                营业执照：
                <i class="star-icon">*</i>
              </span>
            </div>
            <div class="upload-img-box mar-t-20">
              <div class="upload-box text-center">
                <div class="upload-demo-box">
                  <img :src="ruleForm.businessLicense" class="img">
                </div>
                <div class="text-color-9 mar-t-10">营业执照示例</div>
              </div>
            </div>
          </div>
          <!-- 上传店铺头像 -->
          <div>
            <div class="basic-info-label">
              <span class="basic-info-title">
                店铺图片：
                <i class="star-icon">*</i>
              </span>
            </div>
            <div class="upload-img-box mar-t-20">
              <div class="upload-box text-center">
                <div class="upload-demo-box">
                  <img :src="ruleForm.logo" class="img">
                </div>
                <div class="text-color-9 mar-t-10">店铺照片示例</div>
              </div>
            </div>
          </div>
          <!-- 身份证正反面 -->
          <div>
            <div class="basic-info-label">
              <span class="basic-info-title">
                法人身份证件：
                <i class="star-icon">*</i>
              </span>
            </div>
            <!-- 正面 -->
            <div class="upload-img-box mar-t-30">
              <div class="upload-box text-center">
                <div class="upload-demo-box">
                  <img :src="ruleForm.cardJust" class="img">
                </div>
                <div class="text-color-9 mar-t-10">身份证示例-正面</div>
              </div>
            </div>
            <!-- 反面 -->
            <div class="upload-img-box mar-t-30">
              <div class="upload-box text-center">
                <div class="upload-demo-box">
                  <img :src="ruleForm.cardAgainst" class="img">
                </div>
                <div class="text-color-9 mar-t-10">身份证示例-反面</div>
              </div>
            </div>
          </div>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
import {selectStoreInfo} from '../../common/sendAxios.js'
export default {
  data () {
    return {
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
        shopName: '', // 店铺名称
        memo: '', // 店铺备注
        businessLicense: '', // 营业执照
        cardJust: '', // 身份证正
        cardAgainst: '', // 身份证反
        logo: '' // 店铺Logo
      }
    }
  },
  mounted () {
    selectStoreInfo({
      data: {},
      success: (res) => {
        if (res.code === 0) {
          this.ruleForm = res.data
        }
      },
      error: (error) => {
        console.log(error)
      }
    })
  }
}
</script>

<style lang="less">
@import '../../less/topenstore.less';
</style>
