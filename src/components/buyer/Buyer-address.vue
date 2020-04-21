<template>
  <div>
    <div class="address-detail">
      <div class="add-address-btn mar-b-10">
        <a @click="dialogFormVisible = true">添加收货地址</a>
      </div>
      <!-- 地址列表 -->
      <el-table
        :data="tableData"
        border
        height="600"
        style="width: 100%">
        <el-table-column
          prop="name"
          label="收货人"
          width="180">
        </el-table-column>
        <el-table-column
          prop="origin"
          label="所在地区"
          width="181">
            <template slot-scope="scope">
              <span>{{scope.row.province}}{{scope.row.city}}{{scope.row.district}}</span>
            </template>
        </el-table-column>
        <el-table-column
          prop="address"
          label="详细地址">
        </el-table-column>
        <el-table-column
          prop="mobile"
          label="电话/手机">
        </el-table-column>
        <el-table-column
          prop="operate"
          label="操作">
            <template slot-scope="scope">
              <span
              class="address-change"
                @click="handleEdit(scope.row.userAddressId)">修改</span>
                <span>|</span>
              <span
              class="address-change"
                type="danger"
                @click="handleDelete(scope.row.userAddressId)">删除</span>
            </template>
        </el-table-column>
        <el-table-column
          label=""
          width="180">
          <template slot-scope="scope">
            <span class="address-change" v-if="scope.row.isDefault === 1">(默认地址)</span>
            <span class="address-change" @click="handleSet(scope.row.userAddressId)" v-else>设为默认</span>
          </template>
        </el-table-column>
      </el-table>
      <!-- 新增地址 -->
      <el-dialog class="address-form" title="收货地址" :visible.sync="dialogFormVisible">
        <el-form :model="form" ref="form">
          <el-form-item label="收货人姓名" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="所在区域" :label-width="formLabelWidth">
            <area-select v-model="selected" :data="pcaa" type="text" :level="2" size="small" @change="province($event)"></area-select>
          </el-form-item>
          <el-form-item label="详细地址" :label-width="formLabelWidth">
            <el-input v-model="form.address" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="电话/手机" :label-width="formLabelWidth">
            <el-input v-model="form.mobile" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="addAddress">确 定</el-button>
        </div>
      </el-dialog>
      <!-- 修改地址 -->
      <el-dialog class="address-form" title="收货地址" :visible.sync="dialogFormVisible1">
        <el-form :model="form">
          <el-form-item label="地址信息" :label-width="formLabelWidth">
            <area-select v-model="form.region" :data="pcaa" type="text" :level="2" size="small" @change="province($event)"></area-select>
          </el-form-item>
          <el-form-item label="详细地址" :label-width="formLabelWidth">
            <el-input v-model="form.address" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="收货人姓名" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="电话/手机" :label-width="formLabelWidth">
            <el-input v-model="form.mobile" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer text-center">
          <el-button type="primary" @click="updateAddressData">确 定</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import { pca, pcaa } from 'area-data'
import {
  getAddressList, getAddAddress,
  getSingleAddress, updateAddress,
  deleteAddress, setDefaultAddress
} from '../../common/sendAxios.js'
export default {
  data () {
    return {
      pca: pca,
      pcaa: pcaa,
      selected: [], // 初始化地址选择栏
      dialogFormVisible: false, // 添加地址弹框显示默认为false
      dialogFormVisible1: false, // 修改地址弹框显示默认为false
      form: { // 地址表单
        name: '', // 姓名 `
        mobile: '', // 电话号码
        province: '', // 省
        city: '', // 市
        district: '', // 区（县）
        origin: '', // 所在地区
        address: '', // 详细地址
        type: [],
        userAddressId: '', // 地址id
        region: [] // 修改地址接收省市区的初始化数组
      },
      formLabelWidth: '120px',
      tableData: [] // 地址列表表格
    }
  },
  methods: {
    // 查询收货地址列表请求
    getAddData () {
      // 获取本地存储的的info
      let token = window.localStorage.getItem('token')
      let info = JSON.parse(window.localStorage.getItem('info'))
      let id = ''
      if (token) {
        id = info.id
      }
      getAddressList({
        data: {
          uid: id
        },
        success: (res) => {
          if (res.code === 0) {
            this.tableData = res.data
            this.tableData.forEach(i => {
              this.form.userAddressId = i.userAddressId
            })
          }
        },
        error: (error) => {
          console.log(error)
        }
      })
    },
    // 添加收货地址请求
    addAddress () {
      this.dialogFormVisible = false
      this.resetForm('form')
      // 获取本地存储的的info
      let token = window.localStorage.getItem('token')
      let info = JSON.parse(window.localStorage.getItem('info'))
      let id = ''
      if (token) {
        id = info.id
      }
      getAddAddress({
        data: {
          uid: id,
          name: this.form.name,
          mobile: this.form.mobile,
          province: this.form.province,
          city: this.form.city,
          district: this.form.district,
          address: this.form.address
        },
        success: (res) => {
          if (res.code === 0) {
            this.getAddData()
          }
        },
        error: (error) => {
          console.log(error)
        }
      })
    },
    // 重置表单
    resetForm (form) {
      this.$refs[form].resetFields()
    },
    // 获取省-市-区
    province (e) {
      this.form.province = e[0]
      this.form.city = e[1]
      this.form.district = e[2]
    },
    // 编辑收货地址
    handleEdit (userAddressId) {
      this.dialogFormVisible1 = true
      // 获取单条地址数据
      getSingleAddress({
        data: {
          userAddressId
        },
        success: (res) => {
          if (res.code === 0) {
            this.form.userAddressId = res.data.userAddressId
            this.form.address = res.data.address
            this.form.region = [res.data.province, res.data.city, res.data.district]
            this.form.name = res.data.name
            this.form.mobile = res.data.mobile
          }
        },
        error: (error) => {
          console.log(error)
        }
      })
    },
    // 确认修改收货地址
    updateAddressData () {
      this.dialogFormVisible1 = false
      // 获取本地存储的的info
      let token = window.localStorage.getItem('token')
      let info = JSON.parse(window.localStorage.getItem('info'))
      let id = ''
      if (token) {
        id = info.id
      }
      // 修改收货地址请求
      updateAddress({
        data: {
          uid: id,
          userAddressId: this.form.userAddressId,
          name: this.form.name,
          mobile: this.form.mobile,
          province: this.form.province,
          city: this.form.city,
          district: this.form.district,
          address: this.form.address
        },
        success: (res) => {
          if (res.code === 0) {
            this.getAddData()
          }
        },
        error: (error) => {
          console.log(error)
        }
      })
    },
    // 删除收货地址
    handleDelete () {
      // 确认删除消息弹框
      this.$confirm('确认要删除这条收货地址么?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        deleteAddress({
          data: {
            userAddressId: this.form.userAddressId
          },
          success: (res) => {
            if (res.code === 0) {
              this.$message({
                type: 'success',
                message: '删除成功!'
              })
              this.getAddData()
            }
          },
          error: (error) => {
            console.log(error)
          }
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    // 设为默认地址
    handleSet (userAddressId) {
      // 获取本地存储的的info
      let token = window.localStorage.getItem('token')
      let info = JSON.parse(window.localStorage.getItem('info'))
      let id = ''
      if (token) {
        id = info.id
      }
      setDefaultAddress({
        data: {
          uid: id,
          userAddressId
        },
        success: (res) => {
          if (res.code === 0) {
            this.getAddData()
          }
        },
        error: (error) => {
          console.log(error)
        }
      })
    }
  },
  mounted () {
    this.getAddData()
  }
}
</script>

<style>
</style>
