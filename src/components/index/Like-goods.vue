<template>
  <div>
    <!-- 猜你喜欢 -->
    <Logo></Logo>
    <div class="content">
      <div class="general-btn like-btn mar-t-20">猜你喜欢</div>
    </div>
    <div class="like-line"></div>
    <!-- 猜你喜欢商品列表 -->
    <div class="content">
      <GoodsPart :pickerList="goodsLists" :shopName="store"></GoodsPart>
      <!-- 分页按钮 -->
    </div>
  </div>
</template>

<script>
import Logo from '../index/Module-logo.vue'
import GoodsPart from './Module-like.vue'
import Pagination from '../public/Pagination.vue'
import {getLike} from '../../common/sendAxios'
export default {
  data () {
    return {
      goodsLists: [],
      page: 0,
      store: ''
    }
  },
  components: {
    Logo,
    GoodsPart,
    Pagination
  },
  mounted () {
    getLike({
      data: {
        pageNum: 1,
        pageSize: 20
      },
      success: (res) => {
        console.log(res)
        if (res.code === 0) {
          this.goodsLists = res.data.list
          this.goodsLists.forEach((i) => {
            this.store = i.businessVo.name
          })
        }
      },
      error: (error) => {
        console.log(error)
      }
    })
  }
}
</script>

<style lang="less">
@import '../../less/tlike.less';
</style>
