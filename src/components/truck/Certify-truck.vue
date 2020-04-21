<template>
  <div class="certify-truck">
    <!-- 编辑货车入驻审核信息 -->
    <div class="info-header">
      <div class="content">货车信息</div>
    </div>
    <!-- 货车信息审核表单 -->
    <div class="content truck-info-box">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
        <el-form-item class="truck-form-item" prop="title">
          <div class="truck-input-box">
            <span class="truck-input-title">标题：</span>
            <div class="truck-input-content">
              <el-input placeholder="请输入标题" type="text" v-model="ruleForm.title"></el-input>
            </div>
          </div>
        </el-form-item>
        <el-form-item class="truck-form-item" prop="type">
          <div class="truck-input-box">
            <span class="truck-input-title">车辆类型：</span>
            <div class="truck-input-content">
              <el-input placeholder="请选择货车类型" type="text" disabled v-model="ruleForm.value"></el-input>
              <!-- 类型下拉菜单 -->
              <div class="drop-down-btn cursor-pointer" @click="dropToggle">
                <span class="el-icon-arrow-down font-32"></span>
              </div>
              <ul class="drop-down-lists" v-show="show">
                <li class="drop-item" v-for="(item, index) in carTypeLists" :key="index" @click="getValue(index, item)">
                  <a>{{item.value}}</a>
                </li>
              </ul>
            </div>
          </div>
        </el-form-item>
        <el-form-item class="truck-form-item" prop="plateTyle">
          <div class="truck-input-box">
            <span class="truck-input-title">车牌类型：</span>
            <div class="truck-input-content">
              <el-input placeholder="请选择车牌类型" disabled v-model="ruleForm.plateTyle" type="text"></el-input>
              <!-- 类型下拉菜单 -->
              <div class="drop-down-btn cursor-pointer" @click="licenseType">
                <span class="el-icon-arrow-down font-32"></span>
              </div>
              <ul class="drop-down-lists" v-show="show1">
                <li class="drop-item" v-for="(item, index) in licenseTypeLists" :key="index" @click="getValue1(index, item)">
                  <a>{{item.title}}</a>
                </li>
              </ul>
            </div>
          </div>
        </el-form-item>
        <el-form-item class="truck-form-item" prop="frameNum">
          <div class="truck-input-box">
            <span class="truck-input-title">车架号：</span>
            <div class="truck-input-content">
              <el-input placeholder="请输入车架号,由数字和字母组成" type="text" v-model="ruleForm.frameNum"></el-input>
            </div>
          </div>
        </el-form-item>
        <el-form-item class="truck-form-item" prop="plateNo">
          <div class="truck-input-box">
            <span class="truck-input-title">车牌号：</span>
            <div class="truck-input-content">
              <el-input type="text" placeholder="请输入车牌号" v-model="ruleForm.plateNo"></el-input>
            </div>
          </div>
        </el-form-item>
        <el-form-item class="truck-form-item" prop="drivingImg">
          <div class="uploader-transport">
            <span class="truck-input-title">行驶证图片：</span>
            <el-upload
              class="avatar-uploader"
              :action="'https://api.wuziw.com/api-f/files'"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload">
              <img v-if="ruleForm.drivingImg" :src="ruleForm.drivingImg" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              <!-- <span class="uploader-text font-20 text-color-9">添加图片</span> -->
            </el-upload>
          </div>
        </el-form-item>
        <el-form-item class="truck-form-item" prop="img">
          <div class="uploader-transport">
            <span class="truck-input-title">货车正面图：</span>
            <el-upload
              class="avatar-uploader"
              :action="'https://api.wuziw.com/api-f/files'"
              :show-file-list="false"
              :on-success="handleAvatarSuccess1"
              :before-upload="beforeAvatarUpload">
              <img v-if="ruleForm.img" :src="ruleForm.img" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              <!-- <span class="uploader-text font-20 text-color-9">添加图片</span> -->
            </el-upload>
          </div>
        </el-form-item>
        <el-form-item class="truck-form-item" prop="freiLoad">
          <div class="truck-input-box">
            <span class="truck-input-title">载重：</span>
            <div class="truck-input-content">
              <el-input placeholder="t" type="text" v-model="ruleForm.freiLoad"></el-input>
            </div>
          </div>
        </el-form-item>
        <div class="truck-form-item mar-b-40">
          <div class="truck-input-box">
            <span class="truck-input-title">长宽高：</span>
            <!-- 长 -->
            <div class="specify-truck">
              <el-form-item class="truck-params" prop="longth">
                 <div class="truck-input-content specify-truck-item">
                   <el-input type="text" placeholder="长 m" v-model="ruleForm.longth"></el-input>
                 </div>
               </el-form-item>
               <!-- 宽 -->
               <el-form-item class="truck-params" prop="wide">
                 <div class="truck-input-content specify-truck-item">
                   <el-input type="text" placeholder="宽 m" v-model="ruleForm.wide"></el-input>
                 </div>
               </el-form-item>
               <!-- 高 -->
              <el-form-item class="truck-params" prop="height">
                 <div class="truck-input-content specify-truck-item">
                   <el-input type="text" placeholder="高 m" v-model="ruleForm.height"></el-input>
                 </div>
               </el-form-item>
            </div>
          </div>
        </div>
        <!-- 载货体积 -->
        <el-form-item class="truck-form-item" prop="bulk">
          <div class="truck-input-box">
            <span class="truck-input-title">载货体积：</span>
            <div class="truck-input-content">
              <el-input placeholder="方" type="text" v-model="ruleForm.bulk"></el-input>
            </div>
          </div>
        </el-form-item>
        <el-form-item class="truck-form-item" prop="startPrice">
          <div class="truck-input-box">
            <span class="truck-input-title">起步价</span>
            <div class="truck-input-content">
              <el-input placeholder="元" type="text" v-model="ruleForm.startPrice"></el-input>
            </div>
          </div>
        </el-form-item>
        <el-form-item class="truck-form-item" prop="startKilometre">
          <div class="truck-input-box">
            <span class="truck-input-title">起步公里：</span>
            <div class="truck-input-content">
              <el-input placeholder="公里" type="text" v-model="ruleForm.startKilometre"></el-input>
            </div>
          </div>
        </el-form-item>
        <el-form-item class="truck-form-item" prop="twoPrice">
          <div class="truck-input-box">
            <span class="truck-input-title">第二阶段价格：</span>
            <div class="truck-input-content">
              <el-input type="text" placeholder="元" v-model="ruleForm.twoPrice"></el-input>
            </div>
          </div>
        </el-form-item>
        <el-form-item class="truck-form-item" prop="twoKilometre">
          <div class="truck-input-box">
            <span class="truck-input-title">第二阶段公里：</span>
            <div class="truck-input-content">
              <el-input placeholder="公里" type="text" v-model="ruleForm.twoKilometre"></el-input>
            </div>
          </div>
        </el-form-item>
        <el-form-item class="truck-form-item" prop="threePrice">
          <div class="truck-input-box">
            <span class="truck-input-title">第三阶段价格：</span>
            <div class="truck-input-content">
              <el-input type="text" placeholder="元" v-model="ruleForm.threePrice"></el-input>
            </div>
          </div>
        </el-form-item>
        <el-form-item class="truck-form-item" prop="threeKilometre">
          <div class="truck-input-box">
            <span class="truck-input-title">第三阶段公里：</span>
            <div class="truck-input-content">
              <el-input type="text" placeholder="公里" v-model="ruleForm.threeKilometre"></el-input>
            </div>
          </div>
        </el-form-item>
        <el-form-item class="truck-form-item" prop="address">
          <div class="truck-input-box">
            <span class="truck-input-title">经营地址</span>
            <div class="truck-input-content">
              <el-input type="text" placeholder="请输入经营地址" v-model="ruleForm.address"></el-input>
            </div>
          </div>
        </el-form-item>
      </el-form>
      <div class="text-center submit-certify">
        <div class="submit-certify-btn cursor-pointer" @click="toCertify(ruleForm)">提交审核</div>
      </div>
    </div>
  </div>
</template>

<script>
import {truckJoin, updateTruckInfo} from '../../common/sendAxios.js'
export default {
  data () {
    // 正则验证车架号
    let checkCarId = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('请输入车架号'))
      } else {
        const reg = /^[A-HJ-NPR-Z\d]{17}$/
        if (reg.test(value)) {
          callback()
        } else {
          return callback(new Error('请输入正确格式的车架号, 由17位字母和数字组成'))
        }
      }
    }
    // 正则验证车牌号 包括新能源汽车
    let checkCarNum = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('请输入车牌号'))
      } else {
        const reg = /^(([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-Z](([0-9]{5}[DF])|([DF]([A-HJ-NP-Z0-9])[0-9]{4})))|([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-Z][A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳使领]))$/
        if (reg.test(value)) {
          callback()
        } else {
          return callback(new Error('请输入正确格式的车牌号'))
        }
      }
    }
    return {
      show: false,
      show1: false,
      isPass: -1,
      ruleForm: {
        title: '', // 货车标题
        type: '', // 货车类型
        value: '', // type对应的value值
        plateTyle: '', // 车牌类型
        frameNum: '', // 车架号
        plateNo: '', // 车牌号
        drivingImg: '', // 行驶证
        img: '', // 车子正面图
        freiLoad: '', // 载重
        longth: '', // 长
        wide: '', // 宽
        height: '', // 高
        bulk: '', // 载货体积
        startPrice: '', // 起步价
        startKilometre: '', // 起步公里
        twoPrice: '', // 第二阶段价格
        twoKilometre: '', // 第二阶段公里
        threePrice: '', // 第三阶段价格
        threeKilometre: '', // 第三阶段公里
        address: '' // 经营地址
      },
      // 验证规则
      rules: {
        title: [
          { required: true, message: '请输入标题', trigger: 'blur' }
        ],
        type: [
          { required: true, message: '请选择车辆类型', trigger: 'blur' }
        ],
        plateType: [
          { required: true, message: '请选择车牌类型', trigger: 'blur' }
        ],
        frameNum: [
          { validator: checkCarId, trigger: 'blur' }
        ],
        plateNo: [
          { validator: checkCarNum, trigger: 'blur' }
        ],
        freiLoad: [
          { required: true, message: '请输入车辆载重量', trigger: 'blur' }
        ],
        longth: [
          { required: true, message: '请输入车辆长度', trigger: 'blur' }
        ],
        wide: [
          { required: true, message: '请输入车辆宽度', trigger: 'blur' }
        ],
        height: [
          { required: true, message: '请输入车辆高度', trigger: 'blur' }
        ],
        bulk: [
          { required: true, message: '请输入车辆载货体积', trigger: 'blur' }
        ],
        startPrice: [
          { required: true, message: '请输入车辆起步价', trigger: 'blur' }
        ],
        startKilometre: [
          { required: true, message: '请输入车辆起步公里', trigger: 'blur' }
        ],
        twoPrice: [
          { required: true, message: '请输入车辆第二阶段价格', trigger: 'blur' }
        ],
        twoKilometre: [
          { required: true, message: '请输入车辆第二阶段公里', trigger: 'blur' }
        ],
        threePrice: [
          { required: true, message: '请输入车辆第三阶段价格', trigger: 'blur' }
        ],
        threeKilometre: [
          { required: true, message: '请输入车辆第三阶段公里', trigger: 'blur' }
        ],
        address: [
          { required: true, message: '请输入经营地址', trigger: 'blur' }
        ]
      },
      // 货车类型
      carTypeLists: [
        {
          key: 1,
          value: '小面包车'
        }, {
          key: 2,
          value: '小货车'
        }, {
          key: 3,
          value: '中货车'
        }, {
          key: 4,
          value: '大货车'
        }, {
          key: 5,
          value: '特大货车'
        }
      ],
      // 车牌类型
      licenseTypeLists: [
        {
          title: '蓝'
        }, {
          title: '黄'
        }, {
          title: '白'
        }, {
          title: '黑'
        }, {
          title: '绿'
        }
      ]
    }
  },
  created () {
    if (this.$route.query.data) {
      this.ruleForm = this.$route.query.data
      this.isPass = this.$route.query.data.isPass
      this.carTypeLists.map(item => {
        this.ruleForm.type = item.key
        this.ruleForm.value = item.value
      })
    }
  },
  methods: {
    // 提交审核
    toCertify (ruleForm) {
      let _this = this
      _this.carTypeLists.forEach(i => {
        _this.ruleForm.type = i.key
      })
      _this.$refs.ruleForm.validate((valid) => {
        if (valid) { // 如果验证通过
          if (_this.isPass === -1) { // 第一次入驻
            truckJoin({
              data: _this.ruleForm,
              success: (res) => {
                if (res.code === 0) {
                  _this.$message({
                    message: '提交成功，等待审核！',
                    type: 'success'
                  })
                  _this.$router.replace('/certifyinfo/truck')
                } else {
                  _this.$message({
                    message: res.msg,
                    type: 'error'
                  })
                }
              }
            })
          } else {
            // 只要isPass不等于-1就走更新接口
            updateTruckInfo({
              data: _this.ruleForm,
              success: (res) => {
                if (res.code === 0) {
                  _this.$message({
                    message: '更新成功',
                    type: 'success'
                  })
                  _this.$router.replace('/certifyinfo/truck')
                } else {
                  _this.$message({
                    message: res.msg,
                    type: 'error'
                  })
                }
              }
            })
          }
        } else {
          this.$message({
            message: '入驻信息不能为空',
            type: 'warning'
          })
        }
      })
    },
    dropToggle () {
      // 车型类型下拉列表
      this.show = !this.show
    },
    getValue (index, item) {
      this.ruleForm.type = item.key
      this.ruleForm.value = item.value
      this.show = false
    },
    licenseType () {
      // 车牌类型下拉列表
      this.show1 = !this.show
    },
    getValue1 (index, item) {
      this.ruleForm.plateTyle = item.title
      this.show1 = false
    },
    handleAvatarSuccess (res, file) { // 行驶证
      let _this = this
      _this.ruleForm.drivingImg = res.url
    },
    handleAvatarSuccess1 (res, file) { // 车子正面图
      let _this = this
      _this.ruleForm.img = res.url
    },
    beforeAvatarUpload (file) {
      // 图片类型判断
      const isJPG = file.type === 'image/jpeg' || 'image/png'
      const isLt2M = file.size / 1024 / 1024 < 2
      // 图片大小限制
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
