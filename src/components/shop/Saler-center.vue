<template>
  <div class="saler-center-box content">
    <!-- 侧边栏开始 -->
    <div class="content sidbar-cont mar-t-20 clearfix">
      <!-- 店铺信息 -->
      <div class="saler-info text-center mar-b-20">
        <div class="saler-logo-box inline-block">
          <!-- 头像 -->
          <div class="saler-avatar inline-block">
            <img src="../../img/banner_bg_2.jpg" />
          </div>
          <!-- 昵称 -->
          <div class="saler-nickname mar-t-10">店铺</div>
        </div>
        <!-- 操作 -->
        <div class="saler-center-operate flex text-color-6 text-left">
          <p class="cursor-pointer" @click="changeMain('RightInfo')">设置</p>
          <p class="cursor-pointer" @click="changeMain('RightDetailInfo')">入驻信息</p>
        </div>
      </div>
      <!-- 侧边栏 -->
      <ul class="saler-sidebar-lists">
        <li class="saler-sidebar-list">
          <a class="saler-sidebar-text font-18 font-bold text-color-6">
            交易管理
            <!-- 圆点 -->
            <span class="circle-dot"></span>
          </a>
        </li>
        <li class="saler-sidebar-list">
          <a class="saler-sidebar-text saled text-color-6" @click="changeMain('RightIndex')">已卖出的宝贝</a>
        </li>
        <li class="saler-sidebar-list mar-t-46">
          <a class="saler-sidebar-text font-18 font-bold text-color-6">
            宝贝管理
            <!-- 圆点 -->
            <span class="circle-dot"></span>
          </a>
        </li>
        <li class="saler-sidebar-list">
          <a class="saler-sidebar-text release text-color-6" @click="changeMain('RightNew')">发布商品</a>
        </li>
        <li class="saler-sidebar-list">
          <a class="saler-sidebar-text saleing text-color-6" @click="changeMain('RightSale')">出售中的宝贝</a>
        </li>
        <li class="saler-sidebar-list">
          <a class="saler-sidebar-text store text-color-6" @click="changeMain('RightStore')">仓库中的宝贝</a>
        </li>
        <li class="saler-sidebar-list mar-t-20">
          <a class="saler-sidebar-text font-18 font-bold text-color-6">
            客服服务
            <!-- 圆点 -->
            <span class="circle-dot"></span>
          </a>
        </li>
      </ul>
    </div>
    <!-- 右边内容 -->
    <div class="saler-cont-right mar-t-20">
      <component :is="currentComponent"></component>
    </div>
    <!-- 侧边栏结束 -->
  </div>
</template>

<script>
import RightIndex from './Saler-index.vue'
import RightNew from './Saler-new.vue'
import RightStore from './Saler-store.vue'
import RightSale from './Salering.vue'
import RightInfo from './Saler-info.vue'
import RightDetailInfo from './Join-info-detail.vue'
export default {
  data () {
    return {
      currentComponent: 'RightIndex',
      color: '#d51919',
      selected: false
    }
  },
  components: {
    RightIndex,
    RightNew,
    RightStore,
    RightSale,
    RightInfo,
    RightDetailInfo
  },
  methods: {
    changeMain (obj) {
      // 切换右边内容
      this.currentComponent = obj
    },
    // 查看店铺入驻具体信息
    lookStoreInfo () {
      const {href} = this.$router.resolve({
        path: '/open/detailinfo'
      })
      window.open(href, '_blank')
    }
  }
}
</script>

<style lang="less">
@import '../../less/tsaler.less';
</style>
