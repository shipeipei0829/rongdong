import request from '@/api/request'

/**
 * 酒店列表
 */
export const loadlist = (data) => {
  data.beganTime = '2019-9-7 12:00:00'
  data.endTime = '2019-9-8 12:00:00'
  const params = data
  return request({
    url: '/hotel/hotel/list',
    params,
    method: 'get'
  })
}


/**
 * 收藏列表
 */
export const loadcollectlist = (data) => {
  const params = data
  return request({
    url: '/hotel/hotel-collection/appList',
    params,
    method: 'get'
  })
}


/**
 * 个人转售  接口1
 */
export const loadlistprice = (data) => {
  data.beganTime = '2019-9-7 12:00:00'
  data.endTime = '2019-9-8 12:00:00'
  const params = data
  console.log(params)
  return request({
    url: '/order/hotelOrder/suborders',
    params,
    method: 'get'
  })
}


/**
 * 底价房  接口2
 */
export const loadlistpricetwo = (data) => {
  data.beganTime = '2019-9-7 12:00:00'
  data.endTime = '2019-9-8 12:00:00'
  const params = data
  console.log(params)
  return request({
    url: '/hotel/roomInfo/bottom',
    params,
    method: 'get'
  })
}


/**
 * 列表收藏or取消收藏
 * @deleteState 当前状态
 * @hotelId  酒店id
 */

export const collectStatus = ({hotelId,deleteState})=>{
  const params = {hotelId:hotelId,deleteState:deleteState}
  return request({
    url: 'hotel/hotel-collection/heart',
    params,
    method: 'post'
  })
}
