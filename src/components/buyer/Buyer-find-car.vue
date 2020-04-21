<template>
  <div>
    <!-- 我要找车 -->
    <div class="contact-truck">
      <!-- 标题 -->
      <div class="contact-title font-20">
        <div class="contact-title-text text-center">发布货源</div>
      </div>
      <!-- 信息内容 -->
      <div class="upload-info">
        <el-form :label-position="labelPosition" label-width="120px" class="clearfix" :model="formLabelAlign" ref="formLabelAlign" :rules="rules">
          <el-form-item label="姓名：" class="upload-info-input" prop="people">
            <el-input v-model="formLabelAlign.people" placeholder="请输入真实姓名"></el-input>
          </el-form-item>
          <el-form-item label="联系方式：" class="upload-info-input" prop="mobile">
            <el-input v-model="formLabelAlign.mobile" placeholder="请输入联系方式"></el-input>
          </el-form-item>
          <div class="car-params">
            <span class="all-weight">总重量：</span>
            <div class="params-item">
              <el-form-item class="upload-info-input" prop="weight">
                <el-input class="weight" v-model="formLabelAlign.weight" placeholder="请输入重量"></el-input>
              </el-form-item>
              <div class="text-color-9 link-input">——</div>
              <el-form-item class="upload-info-input" prop="price">
                <el-input class="price" v-model="formLabelAlign.price" placeholder="请输入单价"></el-input>
              </el-form-item>
              <div class="text-color-9 link-input">——</div>
              <el-form-item class="upload-info-input" prop="unit">
                <el-input class="price" v-model="formLabelAlign.unit" placeholder="请输入单位"></el-input>
              </el-form-item>
            </div>
          </div>
          <el-form-item label="用车时间：" class="upload-info-input" prop="useTime">
            <el-date-picker
              v-model="formLabelAlign.useTime"
              type="datetime"
              placeholder="请选择用车时间"
              default-time="12:00:00">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="发货地址：" class="upload-info-input send-address" prop="start">
            <el-input v-model="formLabelAlign.start" placeholder="请输入发货地址"></el-input>
          </el-form-item>
          <el-form-item label="收货地址:" class="upload-info-input accept-address" prop="end">
            <el-input v-model="formLabelAlign.end" placeholder="请输入收货地址"></el-input>
          </el-form-item>
          <el-form-item label="描述：" class="upload-info-input" prop="memo">
            <el-input v-model="formLabelAlign.memo" placeholder="请输入描述内容"></el-input>
          </el-form-item>
        </el-form>
        <div class="text-center">
          <div class="release-info-btn font-30 font-bold cursor-pointer" @click="releaseGoods(formLabelAlign)">发  布</div>
        </div>
      </div>
      <!-- 信息结束 -->
    </div>
  </div>
</template>

<script>
import {releaseOrigin} from '../../common/sendAxios.js'
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
      labelPosition: 'left',
      value: '',
      sortvalue: '',
      isShow: false,
      formLabelAlign: {
        putId: '', // 发布人id
        people: '', // 姓名
        mobile: '', // 联系电话
        weight: '', // 重量
        price: '', // 价格
        unit: '', // 单位
        useTime: '', // 用车时间
        start: '', // 发货地址
        end: '', // 收货地址
        memo: '' // 描述
      },
      rules: {
        // people: [
        //   { required: true, message: '请输入真实姓名', trigger: 'blur' }
        // ],
        mobile: [
          { validator: checkTel, trigger: 'blur' }
        ]
        // weight: [
        //   { required: true, message: '请输入重量', trigger: 'blur' }
        // ],
        // price: [
        //   { required: true, message: '请输入价格', trigger: 'blur' }
        // ],
        // unit: [
        //   { required: true, message: '请选择单位', trigger: 'blur' }
        // ],
        // start: [
        //   { required: true, message: '请输入发货地址', trigger: 'blur' }
        // ],
        // end: [
        //   { required: true, message: '请输入收货地址', trigger: 'blur' }
        // ]
      },
      dropLists: [
        {
          name: 'T'
        },
        {
          name: 'KG'
        }
      ]
    }
  },
  methods: {
    dropToggle () { // 订单状态下拉列表
      this.isShow = !this.isShow
    },
    getValue (index, item) { // 双向绑定input框
      this.sortvalue = item.name
      this.isShow = false
    },
    releaseGoods (formLabelAlign) { // 发布货源
      let _this = this
      let moment = require('moment')
      let info = JSON.parse(window.localStorage.getItem('info'))
      _this.formLabelAlign.putId = info.id
      // 使用moment时间转换插件把时间戳转换成普通日期格式
      if (_this.formLabelAlign.useTime === '' || _this.formLabelAlign.useTime === null || _this.formLabelAlign.useTime === undefined) {
        _this.formLabelAlign.useTime = ''
      } else {
        _this.formLabelAlign.useTime = moment(_this.formLabelAlign.useTime).format('YYYY-MM-DD HH:mm:ss')
      }
      _this.$refs.formLabelAlign.validate((valid) => {
        if (valid) { // 表单验证成功才发送请求
          releaseOrigin({
            data: _this.formLabelAlign,
            success: (res) => {
              if (res.code === 0) {
                _this.$message({
                  message: res.msg,
                  type: 'success'
                })
                _this.resetForm()
              } else {
                _this.$message({
                  message: res.msg,
                  type: 'error'
                })
              }
            }
          })
        }
      })
    },
    resetForm (formLabelAlign) { // 重置表单内容
      if (this.$refs.formLabelAlign !== undefined) {
        this.$refs.formLabelAlign.resetFields()
      }
    }
  }
}
</script>

<style>

</style>
