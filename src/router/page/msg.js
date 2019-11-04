export default [{
    path: '/listfriend/index',
    name: '好友列表',
    component: () =>
        import('@/page/listfriend/index'),

},
{
    path: '/listmsg/index',
    name: '信息(聊天室)',
    component: () =>
        import('@/page/listmsg/index'),

},
{
    path: '/service/window',
    name: '聊天页面',
    component: () =>
        import('@/page/service/window'),

},
// {
//     path: '/home/index',
//     name: '官方客服',
//     component: () =>
//         import ('@/view/home/index'),

// },
{
    path: '/service/index',
    name: '消息中心',
    component: () =>
        import('@/page/service/index'),

},

{
    path: '/page/goodfriend/index',
    name: '好友申请',
    component: () => import('@/page/goodfriend/index'),

},
{
    path: '/page/newfriends/index',
    name: '新的朋友',
    component: () => import('@/page/newfriends/index'),

},
{
    path: '/page/apply/index',
    name: '新的朋友',
    component: () => import('@/page/apply/index'),

},
{
    path: '/page/quitelot/index',
    name: '新的朋友',
    component: () => import('@/page/quitelot/index'),
    children: [
        {
            path: '/quitelot/quitelotone/index ',
            name: '已发送请求等待验证',
            component: () => import('@/page/quitelotone/index'),
        },
        {
            path: '/quitelot/quitelottwo/index ',
            name: '搜索结果',
            component: () => import('@/page/quitelottwo/index'),
        }
    ]

},



]