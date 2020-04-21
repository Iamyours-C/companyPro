<template>
  <div id="app">
    <Header></Header>
    <!-- <keep-alive>
      <router-view></router-view>
    </keep-alive> -->
    <Footer></Footer>
    <BackTop></BackTop>
  </div>
</template>

<script>
import Header from './components/public/Nav.vue'
import Footer from './components/public/Bottom.vue'
import BackTop from '../src/components/public/Back-top.vue'
export default {
  name: 'App',
  data () {
    return {
      header_show: true,
      footer_show: true
    }
  },
  components: {
    // 'web-header': Header,
    // 'web-footer': Footer
    Header,
    Footer,
    BackTop
  },
  methods: {
    header (bool) {
      // 是否显示头部
      // let _this = this
      // _this.header_show = bool
    },
    footer (bool) {
      // 是否显示底部
      // let _this = this
      // _this.footer_show = bool
    }
  }
}
</script>

<style>

</style>
