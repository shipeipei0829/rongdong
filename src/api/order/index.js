import request from '../request'

//提交订单
export const submitResidents = (params) => {
    console.log(params)
    return request({
        url: '/order/hotelOrder/send',
        params,
        method: 'post'
    })
}

//入住人选择国籍信息
export const baseCountryList = ({
    paramss
}) => {
    var params = {}
    console.log(params)
    return request({
        url: '/base/baseCountry/list',
        params,
        method: 'post'
    })
}



// 添加入住人信息
export const saveResidents = (data) => {
    console.log(data)
    return request({
        url: '/base/residents/save',
        params: data,
        method: 'post',
    })
}

//查询入住人信息
export const listResidents = (params) => {
        console.log(params)
        return request({
            url: '/base/residents/list',
            params,
            method: 'get',
        })
    }
    //修改入住人，删除入住人
export const updateResidents = (params) => {
    console.log(params)
    return request({
        url: '/base/residents/update',
        params,
        method: 'post',
    })
}

//订单列表
//  参数： orderStatusStr  （0,1,2,4）待入住 （3,5）进行中  （6,7,8,9）完成& currentPage = 0 & limit = 100
//  参数：corderStatus （1） 转售中
export const findHotelOrderList = (params) => {
    console.log(params)
    return request({
        url: '/order/hotelOrder/findHotelOrderList',
        params,
        method: 'get',
    })
}

//订单详情
export const findHotleOrderInfo = (params) => {
    console.log(params)
    return request({
        url: '/order/hotelOrder/findHotleOrderInfo',
        params,
        method: 'get',
    })
}

// 订单列表按钮
//取消订单   参数：orderId:订单id  
// 待入住取消，orderStatus ：6
// 已入住：退房   orderStatus：8
// 已完成：删除订单：orderStatus：10
export const updateHotelOrder = (params) => {
    console.log(params)
    return request({
        url: '/order/hotelOrder/update',
        params,
        method: 'post',
    })
}

// // 转售续存@ApiImplicitParam(name = "precPay", value = "优惠前金额(原价)", required = true),
// @ApiImplicitParam(name = "leaveTime", value = "预计离店时间", required = true),
// @ApiImplicitParam(name = "hour", value = "入住小时数", required = true),
// @ApiImplicitParam(name = "reSaleStartTime", value = "转售开始时间", required = true),
// @ApiImplicitParam(name = "orderId", value = "订单id", required = true)
export const sendSubOrders = (params) => {
        console.log(params)
        return request({
            url: '/order/hotelOrder/sendSubOrders',
            params,
            method: 'post',
        })
    }
    // 支付  参数orderId：订单id，payType：支付方式，1支付宝，2微信，3时间账户
export const payServer = (params) => {
    console.log(params)
    return request({
        url: 'pay/payServer/pay',
        params,
        method: 'post',
    })
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//评论详情 orderId，commentId订单列表条详情  commentId=1;orderId 1,2,3,4可以查单条
export const hotelRoomComment = (params) => {
    console.log(params)
    return request({
        url: '/hotel/hotelRoomComment/get/comment',
        params,
        method: 'post',
    })
}


//查看评价   参数：commentId 
export const getHotelRoomComment = (params) => {
    console.log(params)
    return request({
        url: 'hotel/hotelRoomComment/get/comment',
        params,
        method: 'post',
    })
}

// 保存评价   
export const saveHotelRoomComment = (params) => {
    console.log(params)
    return request({
        url: '/hotelRoomComment/save',
        params,
        method: 'post',
    })
}

//微信支付
export const wechatPay = (params) => {
    console.log(params)
    return request({
        url: '/pay/wechat/wap/pay',
        params,
        method: 'post',
    })
}

//账户支付  cardCash  用户储值卡余额 hourCurrencyCash  用户时间账户余额
export const accountPay = (params) => {
    console.log(params)
    return request({
        url: '/hotel/pay/account',
        params,
        method: 'post',
    })
}