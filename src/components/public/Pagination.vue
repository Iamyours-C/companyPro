<template>
  <div>
    <div class="page-cont">
      <!-- 分页按钮 -->
      <el-pagination
        background
        layout="pager, next"
        :total="100">
      </el-pagination>
      <!-- <el-pagination
      background
      layout="prev, pager, next"
      prev-text="上一页"
      next-text="下一页"
      :page-size="data_limit"
      @current-change="handleCurrentChange"
      :total="PageData">
    </el-pagination> -->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    PageData: Number
  }
}
</script>

<style lang="less">
@import './less/pagination.less';
</style>
