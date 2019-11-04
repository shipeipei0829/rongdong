export default [ // 订单的路由
    {
        path: '/order/index',
        name: '订单',
        component: () =>
            import ('@/view/order/index'),
        meta: {
            title: '订单',
            keepAlive: true
        }
    },
    { //跳转到详情XXXX
        path: '/page/jump/Stay/',
        name: '订单详情',
        component: () =>
            import ('@/page/jump/Stay'),
    },
    { //订单详情
        path: '/page/jump/details',
        name: "我的订单",
        component: () =>
            import ('@/page/jump/details'),
    },
    { //跳转的路径
        path: '/page/jump/refund',
        name: '申请退款',
        component: () =>
            import ('@/page/jump/refund'),
    },
    { // 跳转到酒店详情页
        path: '/page/jump/application',
        name: '酒店',
        component: () =>
            import ('@/page/jump/application'),
    },
    { // 续住
        path: '/page/jump/continue',
        name: '续住',
        component: () =>
            import ('@/page/jump/continue'),
    },
    { // 申请续住
        path: '/page/jump/residence',
        name: '申请续住',
        component: () =>
            import ('@/page/jump/residence'),
    },
    { // 评价
        path: '/page/jump/checkout',
        name: '评价',
        component: () =>
            import ('@/page/jump/checkout'),
    },
    { // 转存续售
        path: '/page/jump/residtwo',
        name: '转存续售',
        component: () =>
            import ('@/page/jump/residtwo'),
    },
    // { // 转存续售
    //     path: '/page/jump/alisttime',
    //     name: '房间剩余时间转售',
    //     component: () =>
    //         import ('@/page/jump/alisttime'),
    // },
    { // 支付打扫费
        path: '/page/jump/determine',
        name: '支付打扫费',
        component: () =>
            import ('@/page/jump/determine'),
    },
    { // 订单跟踪
        path: '/page/jump/track',
        name: '订单跟踪',
        component: () =>
            import ('@/page/jump/track'),
    },
    { // 请选择支付方式
        path: '/page/jump/payment',
        name: '请选择支付方式',
        component: () =>
            import ('@/page/jump/payment'),
    },
    { // 请选择入住人
        path: '/page/checkin/index',
        name: '选择入住人',
        component: () =>
            import ('@/page/checkin/index'),
    },
    // { // 房间剩余时间转售
    //     path: '/page/resale/index',
    //     name: '选房间剩余时间转售',
    //     component: () =>
    //         import ('@/page/resale/index'),
    // },
    { // 选择会员卡
        path: '/page/hotelcard/index',
        name: '选择会员卡',
        component: () =>
            import ('@/page/hotelcard/index'),
    },
    { // 优惠券
        path: '/page/coupon/index',
        name: '选择优惠券',
        component: () =>
            import ('@/page/coupon/index'),
    },
    { // 商家优惠
        path: '/page/business/index',
        name: '选择商家优惠',
        component: () =>
            import ('@/page/business/index'),
    },
    { // 房间剩余时间转售
        path: '/page/surpluss/index',
        name: '房间剩余时间转售',
        component: () =>
            import ('@/page/surplus/index'),
    },
    { // 订房必读
        path: '/page/homeRule/reserveHomeRule',
        name: '订房必读',
        component: () =>
            import ('@/page/homeRule/reserveHomeRule'),
    },
    { // 入住协议
        path: '/page/homeRule/protocolCheckIn',
        name: '入住协议',
        component: () =>
            import ('@/page/homeRule/protocolCheckIn'),
    },
    { // 酒店服务协议
        path: '/page/homeRule/protocolServe',
        name: '酒店服务协议',
        component: () =>
            import ('@/page/homeRule/protocolServe'),
    },
    { // 客房规则
        path: '/page/homeRule/ruleRoom',
        name: '客房规则',
        component: () =>
            import ('@/page/homeRule/ruleRoom'),
    },
]