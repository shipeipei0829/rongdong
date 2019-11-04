import request from '@/api/request'

/**
 * 首页选房 小时房
 */
export const loadlistHour = (data) => {
  const params = data
  return request({
    url: '/hotel/roomInfo/oneHours',
    params,
    method: 'get'
  })
}

/**
 * 首页选房 时段房
 */
export const loadlistTimeframe = (data) => {
  data.beganTime = ''
  data.endTime = ''
  const params = data
  return request({
    url: '/hotel/roomInfo/screen-list',
    params,
    method: 'get'
  })
}



/**
 * 首页选房 全天房
 */
export const loadlistAllday = (data) => {
  data.beganTime = '2019-9-7 12:00:00'
  data.endTime = '2019-9-8 12:00:00'
  const params = data
  return request({
    url: '/hotel/roomInfo/screen-list',
    params,
    method: 'get'
  })
}



/**
 * 选择地址
 * 不需要参数直接请求
 */
export const hotCityList = () => {
  const params = {}
  return request({
    url: 'hotel/hotCity/findList',
    params,
    method: 'post'
  })
}        


/**
 * 热门
 * @limit 每页多少条
 * @currentPage 当前页 
 */
export const hotlist = (data) => {
  const params = data
  console.log(params)
  return request({
    url: 'hotel/hotel-top/top-show?',
    params,
    method: 'get'
  })
}        

/**
 * 猜你喜欢
 * @limit 每页多少条
 * @currentPage 当前页 
 * @lng 116.519222
 * @lat 39.798074
 */
export const linklist = (data) => {
  const params = data
  return request({
    url: 'hotel/guess/list?',
    params,
    method: 'get'
  })
}        
