let isWechat = () => {
  let ua = navigator.userAgent.toLowerCase()
  let flag = false
  // if(ua.match(/MicroMessenger/i) === "micromessenger"){
  if (ua.indexOf('micromessenger') > -1) {
    flag = true
  } else {
    flag = false
  }
  return flag
}

export default {
  isWechat
}
