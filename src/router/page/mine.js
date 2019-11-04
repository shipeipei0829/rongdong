export default [ // 我的的路由
    {
        path: '/mine/index',
        name: '我的',
        component: () =>
            import ('@/view/mine/index'),
        meta: {
            title: '我的',
            keepAlive: true
        }
    },
    {
        path: '/setting/index',
        name: '设置',
        component: () =>
            import ('@/page/setting/index')
    },
    {
        path: '/setting/accountsetting',
        name: '账户设置',
        component: () =>
            import ('@/page/setting/accountsetting')
    },
    {
        path: '/setting/telsetting',
        name: '修改手机号',
        component: () =>
            import ('@/page/setting/telsetting')
    },
    {
        path: '/setting/pwdsetting',
        name: '修改登录密码',
        component: () =>
            import ('@/page/setting/pwdsetting')
    },
    {
        path: '/setting/personaldata',
        name: '个人资料', //修改个人资料，点击头像
        component: () =>
            import ('@/page/setting/personaldatasetting')
    },
    {
        path: '/setting/introsetting',
        name: '修改简介',
        component: () =>
            import ('@/page/setting/introsetting')
    },
    {
        path: '/setting/nicknamesetting',
        name: '修改昵称',
        component: () =>
            import ('@/page/setting/nicknamesetting')
    },
    {
        path: '/setting/labelsetting',
        name: '个性标签',
        component: () =>
            import ('@/page/setting/labelsetting')
    },
    {
        path: '/invoice/index',
        name: '开具发票',
        component: () =>
            import ('@/page/invoice/index')
    },
    {
        path: '/invoice/accommodation',
        name: '住宿发票',
        component: () =>
            import ('@/page/invoice/accommodation')
    },
    {
        path: '/invoice/fillinfo',
        name: '填写发票信息',
        component: () =>
            import ('@/page/invoice/fillinfo')
    },
    {
        path: '/invoice/moreinfo',
        name: '更多信息',
        component: () =>
            import ('@/page/invoice/moreinfo')
    },
    {
        path: '/vipcard/time',
        name: '储蓄时间',
        component: () =>
            import ('@/page/vipcard/time')
    },
    {
        path: '/vipcard/index',
        name: '商家储值卡',
        component: () =>
            import ('@/page/vipcard/index')
    },
    {
        path: '/vipcard/details',
        name: '商家储值卡详情',
        component: () =>
            import ('@/page/vipcard/details')
    },
    {
        path: '/vipcard/addcard',
        name: '添加会员卡',
        component: () =>
            import ('@/page/vipcard/addcard')
    },
    {
        path: '/vipcard/manage',
        name: '办理会员卡',
        component: () =>
            import ('@/page/vipcard/manage')
    },
    {
        path: '/merchant/index/:i',
        name: '商家结余',
        component: () =>
            import ('@/page/merchant/index')
    },
    {
        path: '/rule/index',
        name: '使用规则',
        component: () =>
            import ('@/page/rule/index')
    },
    {
        path: '/vipcard/record',
        name: '充值记录',
        component: () =>
            import ('@/page/vipcard/record')
    },
    {
        path: '/collect/index',
        name: '我的收藏',
        component: () =>
            import ('@/page/collect/index')
    },
    {
        path: '/contacts/index',
        name: '常用联系人',
        component: () =>
            import ('@/page/contacts/index')
    },
    {
        path: '/contacts/add/:i',
        name: '添加入住人',
        component: () =>
            import ('@/page/contacts/add')
    },
    {
        path: '/free/index',
        name: '押金',
        component: () =>
            import ('@/page/free/index')
    },
    {
        path: '/orderresult/result',
        name: '下单成功',
        component: () =>
            import ('@/page/orderresult/result')
    }
]