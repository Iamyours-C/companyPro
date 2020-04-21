// 商家入驻提交信息缓存
let state = {
  storeinfo: {}
}
let mutations = {
  keepInfo (state, data) {
    state.storeinfo = data.storeinfo
  }
}
export default {
  state,
  mutations
}
