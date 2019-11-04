const params = {
    precPay: '408.00', //优惠前金额(原价)
    checkInTime: '2019-08-19 12:00:00', //入住时间
    leaveTime: '2019-08-19 15:00:00', //预计离店时间
    hour: '48', //入住小时数
    isResale: '1', //是否存在转售 0不存在 1存在"
    reSaleStartTime: '2019-08-19 12:00:00', //转售开始时间
    checkIns: '1', //入住人信息id
    toShopTime: '2019-08-19 00:00:00', //预计到店时间
    payType: '2', //支付方式 1.在线支付 2.账户支付
    cardIds: '1', //会员卡id
    couponIds: '1', //优惠劵
    hourCurrencyIds: '1', //小时币
    depositStatus: '2', //押金类型，1线上，2线下，3免押金
    deposit: '99.9', //押金金额
    actualPay: 'actualPay', //实际支付金额
    roomIds: '1', //房间id
    roomType: '小时+时段+全日', //房间类型
    hotelId: '1', //酒店id
    reSaleDiscount: '1', //转售折扣
}
export default params;