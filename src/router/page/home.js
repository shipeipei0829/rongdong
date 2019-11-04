import Home from '@/view/home/index'
export default [
    {
        path: '/home/index',
        name: '首页',
        component: Home,
        meta: {
            title: '首页',
            keepAlive: true
        }
    },
    {
        path: '/hotelimg/index',
        name: '酒店图片',
        component: () => import('@/page/hotelimg/index'),

    },
    {
        path: '/listhotel/index',
        name: '酒店列表',
        component: () => import('@/page/listhotel/index'),

    },    {
        path: '/listhot/index',
        name: '热门酒店列表',
        component: () => import('@/page/listhot/index'),

    },
    {
        path: '/timefilter/index',
        name: '时间筛选',
        component: () => import('@/page/timefilter/index'),

    },
    {
        path: '/ipregion/index',
        name: '选择地址',
        component: () => import('@/page/ipregion/index'),
        children: [
            {
                path: '/',
                name: '搜索地址-选择地址',
                component: () => import('@/page/ipregioncon/index'),
            },
            {
                path: '/ipregion/searchipcon/index',
                name: '搜索地址-搜索地址',
                component: () => import('@/page/searchip/index'),
            }
        ]
    },
    {
        path: '/searchip/index',
        name: '搜索地址',
        component: () => import('@/page/searchip/index'),
        

    },
    {
        path: '/hoteltype/index',
        name: '时段房、全日房、小时房',
        component: () => import('@/page/hoteltype/index'),

    },
    {
        path: '/searchipallday/index',
        name: '全日房搜索',
        component: () => import('@/page/searchipallday/index'),

    },
    {
        path: '/alldayip/index',
        name: '位置/地名',
        component: () => import('@/page/alldayip/index'),
        /** children: [
            {
                path: '/alldayip/searchipallday/index',
                name: '全日房-商圈推荐',
                component: () => import('@/page/searchipallday/index'),
            },
            {
                path: '/alldayip/searchipcon/index',
                name: '全日房-位置地名搜索',
                component: () => import('@/page/searchipcon/index'),
            }
        ]*/
    },
    {
        path: '/rmbstar/index',
        name: '价格星级',
        component: () => import('@/page/rmbstar/index'),

    },
    {
        path: '/filter/moreip/index',
        name: '价格星级',
        component: () => import('@/page/moreip/index'),

    },
    {
        path: '/hotelfilter/index',
        name: '酒店筛选',
        component: () => import('@/page/hotelfilter/index'),
    },
    {
        path: '/mapdetails/index',
        name: '地图详情',
        component: () => import('@/page/mapdetails/index'),

    },
    {  //下面所要跳转的路径
        path: '/details/index',
        name: '详情页',
        component: () =>
            import('@/page/details/index'),

    },
    {  //下面所要跳转的路径
        path: '/detailstwo/index',
        name: '详情页酒店详情设施',
        component: () =>
            import('@/page/detailstwo/index'),

    },
    {  //下面所要跳转的路径
        path: '/detailspush/index',
        name: '详情页',
        component: () =>
            import('@/page/detailspush/index'),

    },
    {
        path: '/comment/index',
        name: '评论',
        component: () =>
            import('@/page/comment/index'),

    },
    {
        path: '/shoporder/index',
        name: '订单页',
        component: () =>
            import('@/page/shoporder/index'),
    },

    {
        path: '/shoporder/myorder',
        name: '我的订单',
        component: () =>
            import('@/page/shoporder/myorder'),
    },
    {
        path: '/shoporder/applyrefund',
        name: '退款申请',
        component: () =>
            import('@/page/shoporder/applyrefund'),
    },
    {
        path: '/shoporder/refunddetails',
        name: '退款详情',
        component: () =>
            import('@/page/shoporder/refunddetails'),
    },
    {
        path: '/shoporder/paymentdetails',
        name: '房费支付明细',
        component: () =>
            import('@/page/shoporder/paymentdetails'),
    },
    {
        path: '/shoporder/shop',
        name: '购物车页',
        component: () =>
            import('@/page/shoporder/shop'),
    }

]
