<template>
  <div>
    <div class="like-goods-lists mar-t-20">
      <div class="goods-box cursor-pointer" v-for="(item, index) in pickerList" :key="index">
        <div class="like-goods-img" @click="toDetail(item)">
          <img :src="item.imgUrl.split(',')[0]" alt="">
        </div>
        <!-- 描述 -->
        <div class="goods-describ" @click="toDetail(item)">
          <p class="goods-price font-bold">￥{{item.price}}/袋</p>
          <p class="goods-name text-color-6 text-over-hidden-1">{{item.title}}</p>
          <div class="goods-store font-12 text-color-9 clearfix">
            <p class="fl pad-r-10 iconfont icon-dianpu"></p>
            <p class="text-over-hidden-1" :title="shopName">{{shopName}}</p>
          </div>
        </div>
        <!-- 买三送一标志 -->
        <div class="goods-mark-t"></div>
        <div class="goods-mark-c">买3送1</div>
        <div class="goods-mark-b"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pickerList: {
      type: Array,
      default: function () {
        let list = []
        return list
      }
    },
    shopName: {
      type: String
    }
  },
  data () {
    return {
      goodsLists: []
    }
  },
  methods: {
    toDetail (i) { // 点击跳转详情页
      let goodsId = i.id
      this.$router.push({path: '/detail', query: {goodsId}})
    }
  }
}
</script>

<style>

</style>
