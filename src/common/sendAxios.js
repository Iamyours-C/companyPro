// 存放所有的aixos请求，将其集中到这里来发送

import {get, post, del, put, patch} from './axios'

// 登录请求
let loginRequest = (params) => {
  post('api-u/users/login', params.data).then((res) => {
    params.success(res)
  }).catch((error) => {
    params.error(error)
  })
}

// 退出登录请求
let signOut = (params) => {
  get('api-u/users/logout', params.data).then((res) => {
    params.success(res)
  }).catch((error) => {
    params.error(error)
  })
}

// 注册请求
let registerRequest = (params) => {
  post('api-u/users/register', params.data).then((res) => {
    params.success(res)
  }).catch((error) => {
    params.error(error)
  })
}

// 创建订单请求
let createOrder = (params) => {
  post('api-pay/pay/nativeCreateOrder', params.data).then((res) => {
    params.success(res)
  }).catch((error) => {
    params.error(error)
  })
}

// 支付成功数据
let paySuccess = (params) => {
  get('api-order/order/success', params.data).then((res) => {
    params.success(res)
  }).catch((error) => {
    params.error(error)
  })
}

// 详清页请求
let getGoodsDetail = (params) => {
  get('api-s/goods/detail', params.data).then((res) => {
    params.success(res)
  }).catch((error) => {
    params.error(error)
  })
}

// 店铺管理请求
let getStoreManage = (params) => {
  get('api-m/merchant/queryall', params.data).then((res) => {
    params.success(res)
  }).catch((error) => {
    params.error(error)
  })
}

// 我的订单请求
let getOrders = (params) => {
  get('api-m/merchant/order', params.data).then((res) => {
    params.success(res)
  }).catch((error) => {
    params.error(error)
  })
}

// 店铺入驻信息请求
let getStoreJoin = (params) => {
  get('api-m/merchant/shop', params.data).then((res) => {
    params.success(res)
  }).catch((error) => {
    params.error(error)
  })
}

// 订单管理请求
let getOrderManage = (params) => {
  get('api-m/merchant/orderlist', 'get', params.data).then((res) => {
    params.success(res)
  }).catch((error) => {
    params.error(error)
  })
}

// 查询订单状态数据请求
let getOrderStatus = (params) => {
  get('api-m/merchant/orders', 'get', params.data).then((res) => {
    params.success(res)
  }).catch((error) => {
    params.error(error)
  })
}

// 查询订单详情请求
let getOrderDetail = (params) => {
  get('api-m/merchant/details', 'get', params.data).then((res) => {
    params.success(res)
  }).catch((error) => {
    params.error(error)
  })
}

// 添加商品请求
let addGoods = (params) => {
  post('api-m/merchant/addOrder', 'post', params.data).then((res) => {
    params.success(res)
  }).catch((error) => {
    params.error(error)
  })
}

// 请求商城首页轮播
let Banner = (params) => {
  get('api-s/carousel/list', params.data).then((res) => {
    params.success(res)
  }).catch((error) => {
    params.error(error)
  })
}

// 请求搜索框数据
let searchData = (params) => {
  get('api-search/v1/search/goods', params.data).then((res) => {
    params.success(res)
  }).catch((error) => {
    params.error(error)
  })
}

// 搜索页搜索词条请求
let getSrearchTips = (params) => {
  get('api-search/v1/recent', params.data).then((res) => {
    params.success(res)
  }).catch((error) => {
    params.error(error)
  })
}

// 请求商品分类数据
let categoryData = (params) => {
  get('api-s/platform/categories', params.data).then((res) => {
    params.success(res)
  }).catch((error) => {
    params.error(error)
  })
}

// 请求商品列表数据
let getIndexLists = (params) => {
  get('api-s/goods/list', params.data).then((res) => {
    params.success(res)
  }).catch((error) => {
    params.error(error)
  })
}

// 根据父节点请求数据
let getSubLists = (params) => {
  get('api-s/platform/categories/pid', params.data).then((res) => {
    params.success(res)
  }).catch((error) => {
    params.error(error)
  })
}

// 请求新品发布
let getRelease = (params) => {
  get('api-s/goods/new', params.data).then((res) => {
    params.success(res)
  }).catch((error) => {
    params.error(error)
  })
}

// 猜你喜欢请求
let getLike = (params) => {
  get('api-s/goods/guess', params.data).then((res) => {
    params.success(res)
  }).catch((error) => {
    params.error(error)
  })
}

// 请求用户添加购物车数据
let getShopCart = (params) => {
  post('api-car/car/add', params.data).then((res) => {
    params.success(res)
  }).catch((error) => {
    params.error(error)
  })
}

// 查询用户购物车信息数据请求
let getSelect = (params) => {
  get('api-car/car/list', params.data).then((res) => {
    params.success(res)
  }).catch((error) => {
    params.error(error)
  })
}

// 删除购物车加购商品请求
let deleteGoods = (params) => {
  del('api-car/car/delete', params.data).then((res) => {
    params.success(res)
  }).catch((error) => {
    params.error(error)
  })
}

// 新增店铺信息请求
let getJoin = (params) => {
  post('api-settled/settled/add', params.data).then((res) => {
    params.success(res)
  }).catch((error) => {
    params.error(error)
  })
}

// 查询店铺入驻详细信息
let selectStoreInfo = (params) => {
  get('api-settled/settled/sellerInfo', params.data).then((res) => {
    params.success(res)
  }).catch((error) => {
    params.error(error)
  })
}

// 查询店铺入驻审核状态
let getStoreStatus = (params) => {
  get('api-settled/settled/shopStatus', params.data).then((res) => {
    params.success(res)
  }).catch((e) => {
    params.error(e)
  })
}

// 申请失败  更新入驻店铺请求
let updateStore = (params) => {
  put('api-settled/settled/update', params.data).then(res => {
    params.success(res)
  }).catch(e => {
    params.error(e)
  })
}

// 修改店铺资料
let updateStoreInfo = (params) => {
  put('api-settled/sellted/updatePcSeller', params.data).then(res => {
    params.success(res)
  }).catch(e => {
    params.error(e)
  })
}

// 用户关注店铺请求
let getFocus = (params) => {
  post('api-attention/attention/add', params.data).then((res) => {
    params.success(res)
  }).catch((error) => {
    params.error(error)
  })
}

// 查询已关注店铺请求
let getFocusStore = (params) => {
  get('api-attention/attention/pclist', params.data).then((res) => {
    params.success(res)
  }).catch((error) => {
    console.log((error))
  })
}

/**
 * 校验用户是否关注店铺
 */
let isAttentionShop = params => {
  get('api-attention/attention/isAttentionShop', params.data).then((res) => {
    params.success(res)
  }).catch((error) => {
    console.log((error))
  })
}

// 用户收藏商品请求
let collectGoods = (params) => {
  post('api-collect/collect/add', params.data).then((res) => {
    params.success(res)
  }).catch((error) => {
    params.error(error)
  })
}

// 查询用户收藏
let getCollectData = (params) => {
  get('api-collect/collect/list', params.data).then((res) => {
    params.success(res)
  }).catch((error) => {
    params.error(error)
  })
}

// 查询收货地址列表请求
let getAddressList = (params) => {
  get('/api-addr/addr/list', params.data).then((res) => {
    params.success(res)
  }).catch((error) => {
    params.error(error)
  })
}

// 添加收货地址请求
let getAddAddress = (params) => {
  post('api-addr/addr/add', params.data).then((res) => {
    params.success(res)
  }).catch((error) => {
    params.error(error)
  })
}

// 请求单条地址信息请求
let getSingleAddress = (params) => {
  get('api-addr/addr/getAddress', params.data).then((res) => {
    params.success(res)
  }).catch((error) => {
    params.error(error)
  })
}

// 修改收货地址请求
let updateAddress = (params) => {
  put('api-addr/addr/update', params.data).then((res) => {
    params.success(res)
  }).catch((error) => {
    params.error(error)
  })
}

// 删除收货地址请求
let deleteAddress = (params) => {
  get('api-addr/addr/delete', params.data).then((res) => {
    params.success(res)
  }).catch((error) => {
    params.error(error)
  })
}

// 设为默认地址请求
let setDefaultAddress = (params) => {
  put('api-addr/addr/setDefault', params.data).then((res) => {
    params.success(res)
  }).catch((error) => {
    params.error(error)
  })
}

// 确认订单默认地址请求
let getDefaultAddress = (params) => {
  get('api-addr/addr/getUserDefaultAddress', params.data).then((res) => {
    params.success(res)
  }).catch((error) => {
    params.error(error)
  })
}

// 查询个人资料请求(买家中心)
let getInfoData = (params) => {
  get('api-u/users/userInfo', params.data).then((res) => {
    params.success(res)
  }).catch((error) => {
    params.error(error)
  })
}

// 修改个人资料请求
let getChangeInfo = (params) => {
  patch('api-u/users/updatePcInfo', params.data).then((res) => {
    params.success(res)
  }).catch((error) => {
    params.error(error)
  })
}

// 找回密码请求
let forgetPass = (params) => {
  put('api-u/users/findPassword', params.data).then((res) => {
    params.success(res)
  }).catch((error) => {
    params.error(error)
  })
}

// 找回密码发送验证码请求
let getCodeData = (params) => {
  get('api-n/notification-anon/codes', params.data).then((res) => {
    params.success(res)
  }).catch((error) => {
    params.error(error)
  })
}

// 校验验证码接口请求
let checkCode = (params) => {
  get('api-u/users/checkCode', params.data).then((res) => {
    params.success(res)
  }).catch((error) => {
    params.error(error)
  })
}

// 卖家中心请求开始
// 商品库请求
let getGoodsStore = (params) => {
  get('api-m/merchant/goodslist', params.data).then((res) => {
    params.success(res)
  }).catch((error) => {
    params.error(error)
  })
}

// 删除商品请求
let deleteData = (params) => {
  del('api-m/merchant', params.data).then((res) => {
    params.success(res)
  }).catch((error) => {
    params.error(error)
  })
}

// 商家发布商品请求
let releaseNewGoods = (params) => {
  post('api-m/merchant/addOrder', params.data).then((res) => {
    params.success(res)
  }).catch((error) => {
    params.error(error)
  })
}

// 订单管理请求
let orderLists = (params) => {
  get('api-m/merchant/orderlist', params.data).then((res) => {
    params.success(res)
  }).catch((error) => {
    params.error(error)
  })
}

// 查询订单状态请求
let orderStatus = (params) => {
  get('api-m/merchant/orders', params.data).then((res) => {
    params.success(res)
  }).catch((error) => {
    params.error(error)
  })
}

// 商品上下架请求
let getGoodsStatus = (params) => {
  put('api-m/merchant/goodsStatus2', params.data).then((res) => {
    params.success(res)
  }).catch((error) => {
    params.error(error)
  })
}

// 商家订单请求
let getOrder = (params) => {
  get('api-m/merchant/order', params.data).then((res) => {
    params.success(res)
  }).catch((error) => {
    params.error(error)
  })
}

// 司机信息申请请求
let driverJoin = (params) => {
  post('api-m/merchant/trucks', params.data).then((res) => {
    params.success(res)
  }).catch((error) => {
    params.error(error)
  })
}

// 货车入驻申请
let truckJoin = (params) => {
  post('api-m/merchant/addtruck', params.data).then((res) => {
    params.success(res)
  }).catch((error) => {
    params.error(error)
  })
}

// 所有的图片上传请求接口
let imgUpload = (params) => {
  post('api-f/files', params.data).then((res) => {
    params.success(res)
  }).catch((error) => {
    params.error(error)
  })
}

// 货车首页列表请求
let truckLists = (params) => {
  get('api-m/merchant/list', params.data).then((res) => {
    params.success(res)
  }).catch((error) => {
    params.error(error)
  })
}

// 基本信息审核请求
let basicInfoCertigy = (params) => {
  get('api-m/merchant/trucks/124', params.data).then((res) => {
    params.success(res)
  }).catch((error) => {
    params.error(error)
  })
}

// 更新车主入驻基本信息请求
let updateInfo = (params) => {
  put('api-m/merchant/basic', params.data).then((res) => {
    params.success(res)
  }).catch((error) => {
    params.error(error)
  })
}

// 货车信息审核是否通过
let truckInfoCertify = (params) => {
  get('api-m/merchant/basic/125', params.data).then((res) => {
    params.success(res)
  }).catch((error) => {
    params.error(error)
  })
}

// 我的货车列表请求
let getTruckLists = (params) => {
  get('api-m/merchant/truckslist', params.data).then((res) => {
    params.success(res)
  }).catch((error) => {
    params.error(error)
  })
}

// 货车详情请求
let getTruckDetail = (params) => {
  get('api-m/merchant/detailslist/' + params.data.id).then((res) => {
    params.success(res)
  }).catch((error) => {
    params.error(error)
  })
}

// 删除货车
let deleteTrcuk = (params) => {
  del('api-m/merchant/trucks/' + params.data.id).then((res) => {
    params.success(res)
  }).catch((error) => {
    params.error(error)
  })
}

// 更新货车信息请求
let updateTruckInfo = (params) => {
  put('api-m/merchant/trucks', params.data).then((res) => {
    params.success(res)
  }).catch((error) => {
    params.error(error)
  })
}

// 货源列表请求
let getOriginLists = (params) => {
  get('api-m/merchant/cargo', params.data).then((res) => {
    params.success(res)
  }).catch((error) => {
    params.error(error)
  })
}

// 货车预约请求
let bookTruck = (params) => {
  post('api-m/merchant/forward', params.data).then((res) => {
    params.success(res)
  }).catch((error) => {
    params.error(error)
  })
}

// 货车预约记录列表请求
let getBookLists = (params) => {
  get('api-m/freight/order/list', params.data).then((res) => {
    params.success(res)
  }).catch((error) => {
    params.error(error)
  })
}

// 发布货源请求
let releaseOrigin = (params) => {
  post('api-m/merchant/publish', params.data).then((res) => {
    params.success(res)
  }).catch((error) => {
    params.error(error)
  })
}

// 取消发布货源请求
let cancelOrigin = (params) => {
  // 重写请求头 默认是Json请求
  let formData = new FormData()
  for (let key in params.data) {
    formData.append(key, params.data[key])
  }
  put('api-m/freight/order/cancel', formData).then((res) => {
    params.success(res)
  }).catch((error) => {
    params.error(error)
  })
}

// 抢单请求
let takeOrders = (params) => {
  put('api-m/merchant/takeover', params.data).then((res) => {
    params.success(res)
  }).catch((error) => {
    params.error(error)
  })
}

// 预约管理请求
let bookListsManage = (params) => {
  get('api-m/merchant/forward', params.data).then((res) => {
    params.success(res)
  }).catch((error) => {
    params.error(error)
  })
}

// 我的抢单请求
let myTakeOrder = (params) => {
  get('api-m/merchant/myorder', params.data).then((res) => {
    params.success(res)
  }).catch((error) => {
    params.error(error)
  })
}

// 拒绝/接受预约订单请求
let operateBookOrder = (params) => {
  put('api-m/merchant/orderReceiving', params.data).then((res) => {
    params.success(res)
  }).catch((error) => {
    params.error(error)
  })
}

// 查询商户平台订单数据
let orderquery = params => {
  get('api-pay/pay/orderquery', params.data).then((res) => {
    params.success(res)
  }).catch((error) => {
    params.error(error)
  })
}

// 查询用户订单数据
let userOrderList = params => {
  get('api-order/order/list', params.data).then((res) => {
    params.success(res)
  }).catch((error) => {
    params.error(error)
  })
}

// 再次支付（Native）
let orderToNativePay = params => {
  post('api-pay/pay/orderToNativePay', params.data).then((res) => {
    params.success(res)
  }).catch((error) => {
    params.error(error)
  })
}

// 用户取消订单
let cancelOrder = params => {
  put('api-order/order/cancel', params.data).then(res => {
    params.success(res)
  }).catch(e => {
    params.error(e)
  })
}

// 提醒发货
let reminderShipment = params => {
  get('api-order/order/reminderShipment', params.data).then(res => {
    params.success(res)
  }).catch(e => {
    params.error(e)
  })
}

// 用户确认收货
let confirmOrder = params => {
  put('api-order/order/confirm', params.data).then(res => {
    params.success(res)
  }).catch(e => {
    params.error(e)
  })
}

// 排行榜请求
let getRankLists = (params) => {
  get('api-s/goods/ranking', params.data).then((res) => {
    params.success(res)
  }).catch((error) => {
    params.error(error)
  })
}

// 我的店铺数据请求
let getStoreData = (params) => {
  get('api-settled/settled/myShop', params.data).then(res => {
    params.success(res)
  }).catch(e => {
    params.error(e)
  })
}

// 商家商品分类请求
let getSalerCategary = (params) => {
  get('api-s/business/categories', params.data).then(res => {
    params.success(res)
  }).catch(e => {
    params.error(e)
  })
}

// 新闻资讯请求
let getNewsLists = (params) => {
  get('api-s/index/news/list', params.data).then(res => {
    params.success(res)
  }).catch(e => {
    params.error(e)
  })
}

// 新闻资讯详情请求
let getNewsDetail = (params) => {
  get('api-s/index/news/detail', params.data).then(res => {
    params.success(res)
  }).catch(e => {
    params.error(e)
  })
}

// 店铺商品列表请求
let getShopList = (params) => {
  get('api-order/shop/order/list', params.data).then(res => {
    params.success(res)
  }).catch(e => {
    params.error(e)
  })
}

// 首页请求购物车数据
let getCartNum = (params) => {
  get('api-car/car/userCarTotal', params.data).then(res => {
    params.success(res)
  }).catch(e => {
    params.error(e)
  })
}

export {
  loginRequest, signOut, registerRequest, getAddressList,
  getAddAddress, Banner, searchData, categoryData, getIndexLists,
  getRelease, getShopCart, getSelect, getStoreManage, deleteGoods,
  getOrders, getStoreJoin, getOrderManage, getOrderStatus,
  getOrderDetail, addGoods, getLike, createOrder,
  getGoodsDetail, getJoin, getFocus, getFocusStore,
  collectGoods, getCollectData, getSingleAddress, updateAddress,
  deleteAddress, setDefaultAddress, getDefaultAddress, paySuccess,
  getInfoData, getChangeInfo, forgetPass, getCodeData, checkCode,
  getGoodsStore, deleteData, releaseNewGoods, orderLists, orderStatus,
  selectStoreInfo, getGoodsStatus, getOrder, driverJoin, truckJoin,
  imgUpload, truckLists, basicInfoCertigy, updateInfo, truckInfoCertify,
  getTruckLists, getTruckDetail, deleteTrcuk, updateTruckInfo, getOriginLists,
  bookTruck, getBookLists, releaseOrigin, cancelOrigin, takeOrders, bookListsManage,
  myTakeOrder, operateBookOrder, getRankLists, orderquery, userOrderList,
  orderToNativePay, cancelOrder, reminderShipment, confirmOrder, getStoreData,
  getSubLists, getSrearchTips, getSalerCategary, getNewsLists, getNewsDetail,
  getShopList, isAttentionShop, getCartNum, getStoreStatus, updateStore, updateStoreInfo
}
