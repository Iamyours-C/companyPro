<template>
  <div class="certify-truck finish-truck-info mar-t-20">
    <!-- 货车详细信息 -->
    <div class="info-header">
      <div class="content">货车详细信息</div>
    </div>
    <!-- 货车信息审核成功表单 -->
    <div class="content truck-info-box">
      <el-form :model="ruleForm">
        <el-form-item class="truck-form-item">
          <div class="truck-input-box">
            <span class="truck-input-title">标题：</span>
            <div class="truck-input-content">
              <input type="text" disabled />
            </div>
          </div>
        </el-form-item>
        <el-form-item class="truck-form-item">
          <div class="truck-input-box">
            <span class="truck-input-title">车辆类型：</span>
            <div class="truck-input-content">
              <input type="text" disabled />
            </div>
          </div>
        </el-form-item>
        <el-form-item class="truck-form-item" prop="tel">
          <div class="truck-input-box">
            <span class="truck-input-title">车牌类型：</span>
            <div class="truck-input-content">
              <input disabled type="text"/>
            </div>
          </div>
        </el-form-item>
        <el-form-item class="truck-form-item" prop="tel">
          <div class="truck-input-box">
            <span class="truck-input-title">车架号：</span>
            <div class="truck-input-content">
              <input disabled type="text"/>
            </div>
          </div>
        </el-form-item>
        <el-form-item class="truck-form-item" prop="tel">
          <div class="truck-input-box">
            <span class="truck-input-title">车牌号：</span>
            <div class="truck-input-content">
              <input disabled type="text" />
            </div>
          </div>
        </el-form-item>
        <el-form-item class="truck-form-item" prop="tel">
          <div class="uploader-transport">
            <span class="truck-input-title">行驶证图片：</span>
            <div class="truck-pass-img">
              <div class="pass-img-box"></div>
            </div>
          </div>
        </el-form-item>
        <el-form-item class="truck-form-item" prop="tel">
          <div class="uploader-transport">
            <span class="truck-input-title">货车图：</span>
            <div class="truck-pass-img">
              <div class="pass-img-box"></div>
            </div>
          </div>
        </el-form-item>
        <el-form-item class="truck-form-item" prop="tel">
          <div class="truck-input-box">
            <span class="truck-input-title">载重：</span>
            <div class="truck-input-content">
              <input disabled type="text"/>
            </div>
          </div>
        </el-form-item>
        <el-form-item class="truck-form-item" prop="tel">
          <div class="truck-input-box">
            <span class="truck-input-title">长宽高：</span>
            <div class="specify-truck">
              <div class="truck-input-content specify-truck-item">
                <input disabled type="text" />
              </div>
              <div class="truck-input-content specify-truck-item">
                <input disabled type="text" />
              </div>
              <div class="truck-input-content specify-truck-item">
                <input disabled type="text" />
              </div>
            </div>
          </div>
        </el-form-item>
        <el-form-item class="truck-form-item" prop="tel">
          <div class="truck-input-box">
            <span class="truck-input-title">载货体积：</span>
            <div class="truck-input-content">
              <input disabled type="text"/>
            </div>
          </div>
        </el-form-item>
        <el-form-item class="truck-form-item" prop="tel">
          <div class="truck-input-box">
            <span class="truck-input-title">起步价</span>
            <div class="truck-input-content">
              <input disabled type="text"/>
            </div>
          </div>
        </el-form-item>
        <el-form-item class="truck-form-item" prop="tel">
          <div class="truck-input-box">
            <span class="truck-input-title">起步公里：</span>
            <div class="truck-input-content">
              <input disabled type="text"/>
            </div>
          </div>
        </el-form-item>
        <el-form-item class="truck-form-item" prop="tel">
          <div class="truck-input-box">
            <span class="truck-input-title">第二阶段价格：</span>
            <div class="truck-input-content">
              <input disabled type="text"/>
            </div>
          </div>
        </el-form-item>
        <el-form-item class="truck-form-item" prop="tel">
          <div class="truck-input-box">
            <span class="truck-input-title">第二阶段公里：</span>
            <div class="truck-input-content">
              <input disabled type="text"/>
            </div>
          </div>
        </el-form-item>
        <el-form-item class="truck-form-item" prop="tel">
          <div class="truck-input-box">
            <span class="truck-input-title">第三阶段价格：</span>
            <div class="truck-input-content">
              <input disabled type="text" />
            </div>
          </div>
        </el-form-item>
        <el-form-item class="truck-form-item" prop="tel">
          <div class="truck-input-box">
            <span class="truck-input-title">第三阶段公里：</span>
            <div class="truck-input-content">
              <input disabled type="text" />
            </div>
          </div>
        </el-form-item>
        <el-form-item class="truck-form-item" prop="tel">
          <div class="truck-input-box">
            <span class="truck-input-title">经营地址</span>
            <div class="truck-input-content">
              <input disabled type="text"/>
            </div>
          </div>
        </el-form-item>
      </el-form>
      <!-- 操作按钮 -->
      <div class="operate-btns text-center">
        <div class="book-truck-btn" @click="dialogFormVisible = true">预约用车</div>
        <div class="use-truck-btn" @click="dialogUseVisible = true">现在用车</div>
      </div>
      <!-- 预约弹框 -->
      <el-dialog class="address-form" title="货车预约" :visible.sync="dialogFormVisible">
        <el-form>
          <el-form-item label="姓名：" :label-width="formLabelWidth">
            <el-input autocomplete="off" placeholder="请输入真实姓名"></el-input>
          </el-form-item>
          <el-form-item label="联系方式：" :label-width="formLabelWidth">
            <el-input autocomplete="off" placeholder="请输入联系方式"></el-input>
          </el-form-item>
          <el-form-item label="车牌号：" :label-width="formLabelWidth">
            <el-input autocomplete="off" placeholder="请输入车牌号"></el-input>
          </el-form-item>
          <el-form-item label="预约时间：" :label-width="formLabelWidth">
            <el-date-picker
              v-model="value"
              type="date"
              placeholder="请输入预约时间">
            </el-date-picker>
          </el-form-item>
          <el-form-item class="send-address" label="发货地址：" :label-width="formLabelWidth">
            <el-input autocomplete="off" placeholder="请输入发货地址"></el-input>
          </el-form-item>
          <el-form-item class="accept-address" label="收货地址：" :label-width="formLabelWidth">
            <el-input autocomplete="off" placeholder="请输入收货地址"></el-input>
          </el-form-item>
        </el-form>
        <div class="text-right choose-accept-add">
          <!-- 选择收货地址按钮 -->
          <el-button @click="toAcceptAddress">选择收货地址</el-button>
        </div>
        <div class="text-center">
          <div class="confirm-btn" @click="dialogFormVisible = false">确定</div>
        </div>
      </el-dialog>
      <!-- 现在用车弹框 -->
      <el-dialog class="address-form" title="货车预约" :visible.sync="dialogUseVisible">
        <el-form>
          <el-form-item label="姓名：" :label-width="formLabelWidth">
            <el-input autocomplete="off" placeholder="请输入真实姓名"></el-input>
          </el-form-item>
          <el-form-item label="联系方式：" :label-width="formLabelWidth">
            <el-input autocomplete="off" placeholder="请输入联系方式"></el-input>
          </el-form-item>
          <el-form-item label="车牌号：" :label-width="formLabelWidth">
            <el-input autocomplete="off" placeholder="请输入车牌号"></el-input>
          </el-form-item>
          <el-form-item class="send-address" label="发货地址：" :label-width="formLabelWidth">
            <el-input autocomplete="off" placeholder="请输入发货地址"></el-input>
          </el-form-item>
          <el-form-item class="accept-address" label="收货地址：" :label-width="formLabelWidth">
            <el-input autocomplete="off" placeholder="请输入收货地址"></el-input>
          </el-form-item>
        </el-form>
        <div class="text-right choose-accept-add cursor-pointer">
          <!-- 选择收货地址按钮 -->
          <el-button @click="toAcceptAddress">选择收货地址</el-button>
        </div>
        <div class="text-center cursor-pointer">
          <div class="confirm-btn" @click="dialogUseVisible = false">确定</div>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: '',
      dialogFormVisible: false,
      dialogUseVisible: false,
      formLabelWidth: '120px',
      ruleForm: {
        name: '',
        tel: ''
      }
    }
  },
  methods: {
    toAcceptAddress () {
      this.$router.replace('/buyer')
    },
    handleEdit (index, row) {
      console.log(index, row)
    },
    handleDelete (index, row) {
      console.log(index, row)
    }
  }
}
</script>

<style lang="less">
@import '../../less/ttruck.less';
</style>
