import router from '@/router'
import store from '@/store' // progress bar style
import axios from 'axios'
axios.defaults.timeout = 30000
// 返回其他状态吗
axios.defaults.validateStatus = function (status) {
  return status >= 200 && status <= 500 // 默认的
}
// 跨域请求，允许保存cookie
axios.defaults.withCredentials = true
let requestSuc = config => {
  const isToken = (config.headers || {}).isToken === false
  let token = store.getters.access_token
  if (token && !isToken) {
    config.headers['Authorization'] = 'Bearer ' + token // token
  }

  return config
}
let requestErr = error => {
  return Promise.reject(error)
}
let responseSuc = easyResult => {
  return res => {
    const status = Number(res.status) || 200
    const message = res.data.msg
    if (status === 401) {
      store.dispatch('FedLogOut').then(() => {
        router.push({ path: '/login' })
      })
      return
    }
    if (status !== 200 || res.data.code === 1) {
      return Promise.reject(new Error(message))
    }
    let result = res
    if (easyResult) {
      result = res.data.data
    }
    return result
  }
}
let responseErr = error => {
  return Promise.reject(new Error(error))
}
// HTTPrequest拦截
axios.interceptors.request.use(requestSuc, requestErr)
// HTTPresponse拦截
axios.interceptors.response.use(responseSuc(), responseErr)
export default axios
