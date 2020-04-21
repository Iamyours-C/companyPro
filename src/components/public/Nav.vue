<template>
  <div class="text-color-6">
    <div class="top font-12">
      <div class="content clearfix" v-if="!token">
        <div class="top-box fl">
          <div class="cursor-pointer" @click="toLogin">你好，请登录！</div>
        </div>
        <div class="fr">
          <ul class="top-lists clearfix">
            <li class="top-list"><a @click="toIndex">商城首页</a></li>
            <li class="top-list"><a @click="toShopCart">购物车</a></li>
            <li class="top-list saler-center cursor-pointer">
              <a @click="toSalerCenter">卖家中心</a>
              <ul class="operate-lists text-color-6">
                <li class="operate-list" @click="freeOpenStore">免费开店</li>
                <li class="operate-list" @click="toSalerCenter">我的店铺</li>
              </ul>
            </li>
            <li class="top-list"><a @click="toTransport">运货</a></li>
          </ul>
        </div>
      </div>
      <!-- 登录后 -->
      <div class="content clearfix" v-if="token">
        <div class="top-box fl">
          <div class="nav-avatar" @click="toMyCenter">
            <img :src="avatar" />
          </div>
          <div class="nav-username pad-l-12 cursor-pointer">
            <span>{{username}}</span>
            <span class="el-icon-caret-bottom"></span>
            <ul class="operate-lists text-color-6">
              <li class="operate-list" @click="toMyCenter">个人中心</li>
              <li class="operate-list" @click="logOut">退出登录</li>
            </ul>
          </div>
        </div>
        <div class="fr">
          <ul class="top-lists clearfix">
            <li class="top-list"><a @click="toIndex">商城首页</a></li>
            <li class="top-list"><a @click="toShopCart">购物车</a></li>
            <li class="top-list saler-center cursor-pointer">
              <a @click="toSalerCenter">卖家中心</a>
              <ul class="operate-lists text-color-6">
                <li class="operate-list" @click="toSalerCenter">我的店铺</li>
              </ul>
            </li>
            <li class="top-list"><a @click="toTransport">运货</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {signOut} from '../../common/sendAxios.js'
export default {
  data () {
    return {
      isLogin: false,
      username: '', // 用户名
      token: '',
      avatar: require('../../img/avatar.png') // 头像
    }
  },
  methods: {
    getUserInfo () { // 判断用户是否登录 显示不同的导航条
      let token = window.localStorage.getItem('token')
      let info = JSON.parse(window.localStorage.getItem('info'))
      let nickname = ''
      let username = ''
      if (info) {
        nickname = info.nickname
        username = info.username
      }
      if (token) {
        this.token = token
        if (nickname) {
          this.username = nickname
        } else {
          this.username = username
        }
      }
    },
    toIndex () {
      // 跳转首页
      this.$router.replace('/index')
    },
    toShopCart () {
      // 跳转购物车
      // 判断用户是否是登录状态  是-->购物车  否-->登录界面
      let token = window.localStorage.getItem('token')
      if (token) {
        this.$router.replace('/shopcart')
      } else {
        this.$router.replace('/login')
      }
    },
    toTransport () {
      // 跳转运货
      this.$router.replace('/truck')
    },
    toStore () {
      // 跳转我的店铺
      this.$router.replace('/shopstore')
    },
    toLogin () {
      // 跳转登录
      this.$router.replace('/login')
    },
    // 跳转个人中心
    toMyCenter () {
      this.$router.push('/buyer/center')
    },
    // 跳转卖家中心
    toSalerCenter () {
      this.$router.push('/saler/center')
    },
    // 免费注册
    toRegister () {
      const {href} = this.$router.resolve({
        path: '/register/first'
      })
      window.open(href, '_blank')
    },
    // 手动退出登录
    logOut () {
      console.log(1111)
      signOut({
        data: {},
        success: (res) => {
          if (res.code === 0) {
            window.localStorage.removeItem('token')
            window.localStorage.removeItem('info')
            this.$message({
              message: '退出登录成功',
              type: 'success'
            })
            this.$router.go(0)
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
    toMyStore () { // 我的店铺
      this.$router.push('/shopstore')
    },
    freeOpenStore () { // 免费开店
      this.$router.push('/openindex')
    }
  },
  mounted () {
    this.getUserInfo()
  }
}
</script>

<style lang="less">
@import '../../less/theader.less';
</style>
