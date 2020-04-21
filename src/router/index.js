import Vue from 'vue'
import Router from 'vue-router'
const App = () => import('../App.vue')
const Index = () => import('../components/index/Index.vue') // 首页
const Like = () => import('../components/index/Like-goods.vue') // 猜你喜欢
const Login = () => import('../components/login/Login.vue') // 登录
const ForgetFirst = () => import('../components/login/Forget-first.vue') // 找回密码步骤1
const ForgetSecond = () => import('../components/login/Forget-second.vue') // 找回密码步骤2
const ForgetThird = () => import('../components/login/Forget-third.vue') // 找回密码步骤3
const Shop = () => import('../components/cart/Shopcart.vue') // 购物车
const Buyer = () => import('../components/buyer/Index.vue') // 买家中心首页
const Rank = () => import('../components/rank/Rank-index.vue') // 排行榜
const RegisterFirst = () => import('../components/register/Step-first.vue') // 注册第一步
const RegisterSecond = () => import('../components/register/Step-second.vue') // 注册第二步
const RegisterFinish = () => import('../components/register/Step-third.vue') // 注册完成
const Open = () => import('../components/shop/Index.vue') // 店铺入驻首页
const Join = () => import('../components/shop/Join-index.vue') // 店铺入驻信息表单
const Audit = () => import('../components/shop/Audit.vue') // 店铺入驻审核
const Store = () => import('../components/shop/Shop-store.vue') // 我的店铺
const Saler = () => import('../components/shop/Saler-center.vue') // 卖家中心首页
const ShopInfo = () => import('../components/shop/Join-info-detail.vue') // 查看店铺入驻详细信息
const Confirm = () => import('../components/order/Confirm-order.vue') // 确认订单
const CofirmNow = () => import('../components/order/Goods-confirm-oreder.vue') // 详情页立即购买确认订单
const Payfor = () => import('../components/order/Payfor-success.vue') // 支付成功或失败页面
const New = () => import('../components/index/New-release.vue') // 新品发布
const Search = () => import('../components/index/Search-page.vue') // 搜索页面
const Detail = () => import('../components/index/Goods-detail.vue') // 商品详情
const Truck = () => import('../components/truck/Index.vue') // 货车入驻首页
const Driver = () => import('../components/truck/Certify-driver.vue') // 司机信息审核
const TruckInfo = () => import('../components/truck/Certify-truck.vue') // 货车信息审核
const InfoDetail = () => import('../components/truck/Truck-info.vue') // 货车详情页
const CertifyInfo = () => import('../components/truck/Certify-info.vue') // 司机入驻审核
const CertifyTruck = () => import('../components/truck/Certify-truckInfo') // 货车入驻审核
const MyTruck = () => import('../components/truck/Truck-manage.vue') // 货车管理
const About = () => import('../components/index/About-us.vue') // 关于我们
const Consulting = () => import('../components/index/Consulting.vue') // 咨询中心
const News = () => import('../components/index/News.vue') // 新闻资讯
const NewsDetail = () => import('../components/index/News-detail.vue') // 新闻资讯详情
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: App,
      redirect: '/index',
      children: [
        {
          path: '/index',
          component: Index,
          meta: {
            requireLogin: 1
          }
        },
        {
          path: '/like',
          component: Like
        },
        {
          path: '/shopcart',
          component: Shop
        },
        {
          path: '/buyer/center',
          component: Buyer,
          meta: {
            requireLogin: 1
          }
        },
        {
          path: '/ranking',
          component: Rank
        },
        {
          path: '/saler/center',
          component: Saler
        },
        {
          path: '/shopstore',
          component: Store
        },
        {
          path: '/openindex',
          component: Open
        },
        {
          path: '/openindex/info',
          component: Join
        },
        {
          path: '/openindex/audit',
          component: Audit
        },
        {
          path: '/open/detailinfo',
          component: ShopInfo
        },
        {
          path: '/conforder',
          component: Confirm
        },
        {
          path: '/confirmgoods',
          component: CofirmNow
        },
        {
          path: '/payfor',
          component: Payfor
        },
        {
          path: '/release',
          component: New
        },
        {
          path: '/search',
          component: Search
        },
        {
          path: '/detail',
          component: Detail
        },
        {
          path: '/truck',
          component: Truck
        },
        {
          path: '/truck/driverinfo',
          name: 'editInfo',
          component: Driver
        },
        {
          path: '/truck/truckinfo',
          name: 'editCar',
          component: TruckInfo
        },
        {
          path: '/truck/infodetail',
          component: InfoDetail
        },
        {
          path: '/certifyinfo/info',
          component: CertifyInfo
        },
        {
          path: '/certifyinfo/truck',
          name: 'editTruckInfo',
          component: CertifyTruck
        },
        {
          path: '/truckmanage',
          component: MyTruck
        },
        {
          path: '/about_us',
          component: About
        },
        {
          path: '/consulting',
          component: Consulting
        },
        {
          path: '/news',
          component: News
        },
        {
          path: '/news_detail',
          component: NewsDetail
        }
      ]
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register/first',
      component: RegisterFirst
    },
    {
      path: '/register/second',
      name: 'second',
      component: RegisterSecond
    },
    {
      path: '/register/finish',
      component: RegisterFinish
    },
    {
      path: '/forget/first',
      component: ForgetFirst
    },
    {
      path: '/forget/second',
      component: ForgetSecond
    },
    {
      path: '/forget/finish',
      component: ForgetThird
    }
  ],
  mode: 'history'
})
