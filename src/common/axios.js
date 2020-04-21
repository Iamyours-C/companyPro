// 封装axios请求，axios请求是异步的，用promise方法来解决
import axios from 'axios'
import { api } from './api'
import router from '../router'
// import { MessageBox, Message } from 'element-ui'
// 引入qs使用序列化字符
// import qs from 'qs'
axios.defaults.headers['Content-Type'] = 'application/json;charset=UTF-8'

//  请求拦截
axios.interceptors.request.use(function (config) {
  let token = window.localStorage.getItem('token')
  if (token) {
    config.headers['authorization'] = token // 让每个请求携带自定义token 请根据实际情况自行修改
  }
  return config
}, function (error) {
  console.log(error)
})

// 响应拦截器
// axios.interceptors.response.use(res => {
//   const code = res.data.code
//   if (code === 4000020) {
//     MessageBox.confirm(
//       '登录状态已过期，您可以继续留在该页面，或者重新登录',
//       '系统提示',
//       {
//         confirmButtonText: '重新登录',
//         cancelButtonText: '取消',
//         type: 'warning'
//       }
//     ).then(() => {
//       router.push('/login')
//     })
//   }
// },
// error => {
//   console.log('err' + error)
//   Message({
//     message: error.message,
//     type: 'error',
//     duration: 5 * 1000
//   })
//   return Promise.reject(error)
// })

// post 和 get 请求都能发送的请求
let request = function (url, method = 'POST', data = {}) {
  return new Promise((resolve, reject) => {
    axios({
      url: api + url,
      method: method,
      // post
      data: data
    }).then((res) => {
      // 请求成功返回后台数据
      // 先判断当前token是否已经失效
      if (res.data.code === 4000020) {
        router.push('/login')
      } else {
        resolve(res.data)
      }
    }).catch((error) => {
      reject(error)
    })
  })
}

// get&post分开
// get请求
let get = function (url, data, headers = {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'}) {
  return new Promise((resolve, reject) => {
    axios.get(api + url, {
      params: data,
      headers
    }).then((res) => {
      resolve(res.data)
    }).catch((error) => {
      reject(error)
    })
  })
}
// post
// 在post请求里，用的data是一个字符串
let post = function (url, data) {
  return new Promise((resolve, reject) => {
    axios.post(api + url, data
    ).then((res) => {
      resolve(res.data)
    }).catch((error) => {
      reject(error)
    })
  })
}

// delete 请求(类似get请求)
let del = function (url, data) {
  return new Promise((resolve, reject) => {
    axios.delete(api + url, {
      params: data
    }).then((res) => {
      resolve(res.data)
    }).catch((error) => {
      reject(error)
    })
  })
}

// put 请求(类似post请求)
let put = function (url, data) {
  return new Promise((resolve, reject) => {
    axios.put(api + url, data
    ).then((res) => {
      resolve(res.data)
    }).catch((error) => {
      reject(error)
    })
  })
}

// patch请求 (类似post)
let patch = function (url, data) {
  return new Promise((resolve, reject) => {
    axios.patch(api + url, data
    ).then((res) => {
      resolve(res.data)
    }).catch((error) => {
      reject(error)
    })
  })
}

export {
  request,
  get,
  post,
  del,
  put,
  patch
}
