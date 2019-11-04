import request from '@/api/request'


/**
 * 酒店详情
 * @hotelId 酒店ID
 * @lng 经度
 * @lat 纬度
 */
export const loaddDetails = (data) => {
  const params = data
  return request({
    url: '/hotel/hotel/appDetails',
    params,
    method: 'get'
  })
}

/**
 * 酒店详情  优惠券显示
 * @hotelId 酒店ID
 * @limit 每页显示多少条
 * @page 第几页
 */
export const loadcouponlist = (data) => {
  const params = data
  return request({
    url: '/hotel/coupon/hotel/pageList',
    params,
    method: 'post'
  })
}





/**
 * 酒店详情  优惠券领取
 * @couponId 优惠券id
 */
export const getcoupon = (data) => {
  const params = data
  return request({
    url: '/hotel/coupon/user/add',
    params,
    method: 'post'
  })
}



/**
 * 酒店详情  位置周边
 * @cityId
 * @hotelId   酒店id
 * @type  1。医院 2.学校 3.地铁站 4.商圈
 * @lat 
 * @lng 
 * @limit 
 * @currentPage
 */
export const getIpCon = (data) => {

  const params = data
  return request({
    url: '/hotel/hotel/around',
    params,
    method: 'get'
  })
}



/**
 * 酒店详情 -- 房间列表
 * @hotelId 酒店ID
 * @beganTime 开始时间
 * @endTime 结束时间
 * @earlyDeparture 是否支持续存
 * @maxPeople 最大人数
 * @roomPrice 结束金额
 * @sRoomPrice 起始金额
 * @bottomRoom 是否是底价房
 * @limit 每页多少条
 * @currentPage 当前页
 */
export const loaddDetailsRoom = (data) => {
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
 * 酒店详情 -- 房间详情
 * @hotelId 酒店ID
 * @roomType 开始时间

 */
export const loadRoomDetail = (data) => {
  const params = data
  return request({
    url: '/hotel/roomInfo/details-type',
    params,
    method: 'get'
  })
}

/**
 * 酒店详情 -- 酒店评论
 * @hotelId        酒店id
 * @roomId         房间id
 * @onlyShowImg    只显示图片评论
 */
export const loadHotelcomment = (data) => {
  const params = data
  return request({
    url: '/hotel/hotelRoomComment/pageList',
    params,
    method: 'post'
  })
}
 
