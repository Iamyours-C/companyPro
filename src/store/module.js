// 确认订单选择地址数据
let state = {
  tabIndex: 0,
  modulelist: [{
    name: '吴**',
    address: '贵州省贵阳市',
    detailAdd: '观山湖区金融城二期A5组团',
    id: 1
  }, {
    name: '张**',
    address: '贵州省贵阳市',
    detailAdd: '观山湖区金融城二期A5组团',
    id: 2
  }, {
    name: '李**',
    address: '贵州省贵阳市',
    detailAdd: '观山湖区金融城二期A5组团',
    id: 3
  }],
  checkedModule: [],
  chooseModules: []
}

let mutations = {
  changeTabIndex (state, index) {
    state.tabIndex = parseInt(index)
  },
  changeCheckedModule (state, module) {
    state.checkedModule = module
  },
  changeModuleList (state, data) {
    state.modulelist[data.index] = data.module
  },
  changeAlreadyChecked (state, module) {
    state.chooseModules = module
  }
}

let actions = {
  commitModuleList ({commit}, modulelist) {
    commit('changeModuleList', modulelist)
  }
}

export default {
  state,
  mutations,
  actions
}
