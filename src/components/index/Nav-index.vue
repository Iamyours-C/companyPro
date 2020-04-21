<template>
  <div>
    <div class="index-content mar-t-20">
      <div class="content">
        <!-- 导航列表开始 -->
        <ul class="nav-lists text-white text-center clearfix">
          <li class="nav-list on">
            <a>快捷入口</a>
          </li>
          <li class="nav-list">
            <a @click="to_index">首页</a>
            <span class="split-dot">·</span>
          </li>
          <li class="nav-list">
            <a @click="toTruck">运货</a>
            <span class="split-dot">·</span>
          </li>
          <li class="nav-list">
            <a @click="toNewsCenter">新闻资讯</a>
            <span class="split-dot">·</span>
          </li>
          <!-- <li class="nav-list">
            <a>交易规则</a>
            <span class="split-dot">·</span>
          </li> -->
          <li class="nav-list">
            <a @click="toConsulting">咨询中心</a>
            <span class="split-dot">·</span>
          </li>
          <li class="nav-list">
            <a @click="toAboutUs">关于我们</a>
          </li>
        </ul>
      </div>
      <!-- 导航列表结束 -->
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toTruck () {
      // 跳转货车首页
      this.$router.replace('/truck')
    },
    to_index () {
      if (this.$route.path === '/index') { // 判断当前页面的路由是否是Index 是 刷新页面 否  跳转首页
        this.$router.go(0)
      } else {
        this.$router.push('/index')
      }
    },
    toAboutUs () { // 关于我们
      if (this.$route.path === '/about_us') { // 判断当前页面的路由是否是Index 是 刷新页面 否  跳转首页
        this.$router.go(0)
      } else {
        this.$router.push('/about_us')
      }
    },
    toConsulting () { // 咨询中心
      if (this.$route.path === '/consulting') { // 判断当前页面的路由是否是Index 是 刷新页面 否  跳转首页
        this.$router.go(0)
      } else {
        this.$router.push('/consulting')
      }
    },
    toNewsCenter () {
      if (this.$route.path === '/news') { // 判断当前页面的路由是否是Index 是 刷新页面 否  跳转首页
        this.$router.go(0)
      } else {
        this.$router.push('/news')
      }
    }
  }
}
</script>

<style lang="less">
@import './less/nav-index.less';
</style>
