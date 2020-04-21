// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import Router1 from 'vue-router'
import store from './store'
import './less/public.less'
import './less/reset.less'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './font/iconfont.css'
import {request, get, post} from './common/axios'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import './common/dist/css/swiper.css'
import VueAreaLinkage from 'vue-area-linkage'
import 'vue-area-linkage/dist/index.css'
import Moment from 'moment'

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
Vue.use(ElementUI)
Vue.use(VueAreaLinkage)

// 把axios请求写到vue的原型上
Vue.prototype.$request = request
Vue.prototype.$get = get
Vue.prototype.$post = post
Vue.prototype.moment = Moment

router.beforeEach((to, from, next) => {
  // 路由发生变化修改页面title  (打开新窗口)
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

// 重写路由的push方法
// const routerPush = Router1.prototype.push
// Router1.prototype.push = function push (location) {
//   return routerPush.call(this, location).catch(error => error)
// }

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App }
})
