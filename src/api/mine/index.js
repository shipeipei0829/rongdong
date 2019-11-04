import request from '../request'

//app用户基本信息
export const infoAppuser = (params) => {
        console.log(params)
        return request({
            url: '/base/user/app/info',
            params,
            method: 'post'
        })
    }
    //个性标签列表
export const listTag = (params) => {
    console.log(params)
    return request({
        url: '/base/tag/list',
        params,
        method: 'post'
    })
}

// 省市区
export const listArea = (data) => {
    console.log(data)
    return request({
        url: '/base/baseArea/find/list',
        params: data,
        method: 'post',
    })
}

//用户修改资料
export const updateAppuser = (params) => {
        console.log(params)
        return request({
            url: '/base/user/app/update',
            params,
            method: 'post',
        })
    }
    //标签修改/base/userTag/saveTags
export const saveTags = (params) => {
    console.log(params)
    return request({
        url: '/base/userTag/save',
        params,
        method: 'post',
    })
}

//app用户其他信息
export const modelAppuser = (params) => {
    console.log(params)
    return request({
        url: '/base/user/app/model',
        params,
        method: 'post',
    })
}

//用户预存酒店时间分页列表
export const userSaveHour = (params) => {
    console.log(params)
    return request({
        url: '/hotel/userSaveHour/page',
        params,
        method: 'post',
    })
}

//用户预存酒店时间详情
export const findSaveHour = (params) => {
    console.log(params)
    return request({
        url: '/hotel/userSaveHour/findById',
        params,
        method: 'post',
    })
}


//用户领取优惠券列表
export const userCouponlist = (params) => {
    console.log(params)
    return request({
        url: '/hotel/coupon/user/list',
        params,
        method: 'post',
    })
}

//用户领取优惠券详情
export const findcoupon = (params) => {
    console.log(params)
    return request({
        url: '/hotel/coupon/user/findById',
        params,
        method: 'post',
    })
}


//小时币列表
export const hourCurrencySell = (params) => {
    console.log(params)
    return request({
        url: '/hotel/hourCurrencySell/info',
        params,
        method: 'post',
    })
}

//充值明细
export const tradingHourCurrency = (params) => {
    console.log(params)
    return request({
        url: '/pay/tradingHourCurrency/page',
        params,
        method: 'post',
    })
}



//+++++++++++++++++++++++++++++++++++++++++++++++++++++==

//添加储值卡

// 用户储值卡列表
export const userCardsList = (params) => {
    console.log(params)
    return request({
        url: '/hotel/card/user/list',
        params,
        method: 'post',
    })
}

// 用户储值卡详情
export const userCardDetail = (params) => {
    console.log(params)
    return request({
        url: '/hotel/card/detail',
        params,
        method: 'post',
    })
}

// 储值卡分页列表 cityId 城市id
export const userCardsHotel = (params) => {
    console.log(params)
    return request({
        url: '/hotel/card/param',
        params,
        method: 'post',
    })
}

// 储值卡城市 level = 2 name="北京市"
export const userCardsBaseArea = (params) => {
    console.log(params)
    return request({
        url: '/base/baseArea/find/level',
        params,
        method: 'post',
    })
}