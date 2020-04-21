<template>
  <div>
    <!-- logo -->
    <Logo></Logo>
    <!-- 排行榜首页开始 -->
    <!-- 顶部导航 -->
    <div class="nav-rank">
      <div class="content clearfix">
        <ul class="nav-rank-lists fl cursor-pointer">
          <li class="inline-block nav-rank-list text-center"
          v-for="(item, index) in navLists" :key="index"
          @click="changeTabs(index)" :class="{checked:cur === index}"
          >
            <p>
              <img :src="item.imgurl" alt="">
            </p>
            <p>{{item.navName}}</p>
            <p class="checked-shape"></p>
            <p class="checked-trangle"></p>
          </li>
        </ul>
        <div class="fr all-classify-btn cursor-pointer">全部分类</div>
      </div>
    </div>
    <!-- 顶部导航结束 -->
    <!-- 内容开始 -->
    <div class="content">
       <!-- 分类导航开始 -->
       <div class="nav-classify mar-t-10 clearfix">
         <div class="nav-classify-title fl">
           <img src="../../img/sl-classify.png" class="ranking-logo">
           <span class="font-bold font-18">饲料分类</span>
          </div>
          <ul class="fl nav-classify-lists">
            <li class="nav-classify-item"
            v-for="(item, index) in navClassifyLists" :key="index"
            @click="clickClssify(index)" :class="{on:id===index}"
            >
              <a>{{item}}</a>
            </li>
          </ul>
       </div>
       <!-- 分类导航结束 -->
       <!-- 商品列表开始 -->
       <div class="rank-goods-lists">
         <div class="rank-goods-list" v-for="(item, index) in goodsLists" :key="index">
           <div class="rank-goods-img">
             <img :src="item.imgurl">
             <div class="position-img">
               <img src="../../img/rank-icon.png" alt="">
             </div>
             <span class="position-text text-white">买三送一</span>
           </div>
           <div class="rank-goods-describ">
             <p class="font-bold rank-goods-price">￥{{item.price}}/袋</p>
             <p class="text-color-6 font-12 text-over-hidden-2 mar-tb-8">{{item.name}}</p>
             <p class="text-color-6 font-12">
               <span class="ic"></span>
               <span>{{item.store}}</span>
             </p>
           </div>
           <div class="hot-fire">
             <img src="../../img/hot-fire.png" alt="">
           </div>
         </div>
       </div>
       <!-- 商品列表结束 -->
    </div>
    <!-- 排行榜首页结束 -->
  </div>
</template>

<script>
import Logo from '../index/Module-logo.vue'
export default {
  data () {
    return {
      cur: 0,
      id: 0,
      navLists: [
        {
          imgurl: require('../../img/sl-logo.png'),
          navName: '饲料系列'
        },
        {
          imgurl: require('../../img/medicine.png'),
          navName: '兽药系列'
        },
        {
          imgurl: require('../../img/special-goods.png'),
          navName: '特产系列'
        },
        {
          imgurl: require('../../img/fresh.png'),
          navName: '生鲜系列'
        }
      ],
      navClassifyLists: [
        '猪用饲料', '家禽饲料', '牛羊饲料', '水产饲料', '反刍饲料', '多维产品', '添加剂', '微量元素', '其他饲料', '饲料原料'
      ],
      goodsLists: [
        {
          imgurl: require('../../img/hot-goods4.png'),
          price: 145.98,
          name: '快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮',
          store: '贵州新之道生物科技有限公司'
        },
        {
          imgurl: require('../../img/hot-goods4.png'),
          price: 145.98,
          name: '快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮',
          store: '贵州新之道生物科技有限公司'
        },
        {
          imgurl: require('../../img/hot-goods4.png'),
          price: 145.98,
          name: '快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮',
          store: '贵州新之道生物科技有限公司'
        },
        {
          imgurl: require('../../img/hot-goods4.png'),
          price: 145.98,
          name: '快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮',
          store: '贵州新之道生物科技有限公司'
        },
        {
          imgurl: require('../../img/hot-goods4.png'),
          price: 145.98,
          name: '快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮',
          store: '贵州新之道生物科技有限公司'
        },
        {
          imgurl: require('../../img/hot-goods4.png'),
          price: 145.98,
          name: '快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮',
          store: '贵州新之道生物科技有限公司'
        },
        {
          imgurl: require('../../img/hot-goods4.png'),
          price: 145.98,
          name: '快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮',
          store: '贵州新之道生物科技有限公司'
        },
        {
          imgurl: require('../../img/hot-goods4.png'),
          price: 145.98,
          name: '快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮',
          store: '贵州新之道生物科技有限公司'
        },
        {
          imgurl: require('../../img/hot-goods4.png'),
          price: 145.98,
          name: '快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮',
          store: '贵州新之道生物科技有限公司'
        },
        {
          imgurl: require('../../img/hot-goods4.png'),
          price: 145.98,
          name: '快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮',
          store: '贵州新之道生物科技有限公司'
        },
        {
          imgurl: require('../../img/hot-goods4.png'),
          price: 145.98,
          name: '快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮',
          store: '贵州新之道生物科技有限公司'
        },
        {
          imgurl: require('../../img/hot-goods4.png'),
          price: 145.98,
          name: '快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮',
          store: '贵州新之道生物科技有限公司'
        },
        {
          imgurl: require('../../img/hot-goods4.png'),
          price: 145.98,
          name: '快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮',
          store: '贵州新之道生物科技有限公司'
        },
        {
          imgurl: require('../../img/hot-goods4.png'),
          price: 145.98,
          name: '快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮',
          store: '贵州新之道生物科技有限公司'
        },
        {
          imgurl: require('../../img/hot-goods4.png'),
          price: 145.98,
          name: '快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮',
          store: '贵州新之道生物科技有限公司'
        },
        {
          imgurl: require('../../img/hot-goods4.png'),
          price: 145.98,
          name: '快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮',
          store: '贵州新之道生物科技有限公司'
        },
        {
          imgurl: require('../../img/hot-goods4.png'),
          price: 145.98,
          name: '快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮',
          store: '贵州新之道生物科技有限公司'
        },
        {
          imgurl: require('../../img/hot-goods4.png'),
          price: 145.98,
          name: '快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮',
          store: '贵州新之道生物科技有限公司'
        },
        {
          imgurl: require('../../img/hot-goods4.png'),
          price: 145.98,
          name: '快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮',
          store: '贵州新之道生物科技有限公司'
        },
        {
          imgurl: require('../../img/hot-goods4.png'),
          price: 145.98,
          name: '快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮',
          store: '贵州新之道生物科技有限公司'
        },
        {
          imgurl: require('../../img/hot-goods4.png'),
          price: 145.98,
          name: '快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮',
          store: '贵州新之道生物科技有限公司'
        },
        {
          imgurl: require('../../img/hot-goods4.png'),
          price: 145.98,
          name: '快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮',
          store: '贵州新之道生物科技有限公司'
        },
        {
          imgurl: require('../../img/hot-goods4.png'),
          price: 145.98,
          name: '快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮',
          store: '贵州新之道生物科技有限公司'
        },
        {
          imgurl: require('../../img/hot-goods4.png'),
          price: 145.98,
          name: '快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮',
          store: '贵州新之道生物科技有限公司'
        },
        {
          imgurl: require('../../img/hot-goods4.png'),
          price: 145.98,
          name: '快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮',
          store: '贵州新之道生物科技有限公司'
        },
        {
          imgurl: require('../../img/hot-goods4.png'),
          price: 145.98,
          name: '快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮',
          store: '贵州新之道生物科技有限公司'
        },
        {
          imgurl: require('../../img/hot-goods4.png'),
          price: 145.98,
          name: '快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮',
          store: '贵州新之道生物科技有限公司'
        },
        {
          imgurl: require('../../img/hot-goods4.png'),
          price: 145.98,
          name: '快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮',
          store: '贵州新之道生物科技有限公司'
        },
        {
          imgurl: require('../../img/hot-goods4.png'),
          price: 145.98,
          name: '快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮',
          store: '贵州新之道生物科技有限公司'
        },
        {
          imgurl: require('../../img/hot-goods4.png'),
          price: 145.98,
          name: '快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮快大壮',
          store: '贵州新之道生物科技有限公司'
        }
      ]
    }
  },
  components: {
    Logo
  },
  methods: {
    changeTabs (num) {
      this.cur = num
    },
    clickClssify (ind) {
      this.id = ind
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../less/trank.less';
</style>
