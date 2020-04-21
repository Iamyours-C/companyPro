<template>
   <div class="right-top">
      <div class="right-top-item" v-for="(item, index) in rightMenuLists" :key="index">
        <span @click="changeTab(index)" :class="{on:cur === index}">{{item.name}}</span>
        <span @click="changeTab(index)" :class="{on:cur === index}" v-if="index == 0" class="all">{{item.num}}</span>
        <span @click="changeTab(index)" :class="{on:cur === index}" v-if="index == 1" class="text-color-6">{{item.num}}</span>
        <span @click="changeTab(index)" :class="{on:cur === index}" v-if="index == 2" class="send">{{item.num}}</span>
        <span @click="changeTab(index)" :class="{on:cur === index}" v-if="index == 3" class="wait">{{item.num}}</span>
        <span @click="changeTab(index)" :class="{on:cur === index}" v-if="index == 4" class="evaluation">{{item.num}}</span>
      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      cur: 0,
      rightMenuLists: [
        {
          name: '全部订单',
          num: 3
        },
        {
          name: '待付款',
          num: 0
        },
        {
          name: '待发货',
          num: 4
        },
        {
          name: '待收货',
          num: 4
        },
        {
          name: '待评价',
          num: 3
        },
        {
          name: '退款'
        }
      ]
    }
  },
  methods: {
    // 点击切换状态
    changeTab (num) {
      this.cur = num
    }
  }
}
</script>

<style lang="less">
@import './public.less';
</style>
