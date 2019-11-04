export default [
  {
    path: '/login/index',
    name: '登录/注册',
    component: () => import('@/login/index'),
  },
  {
    path: '/login/ringup',
    name: '登录',
    component: () => import('@/login/ringup'),
  },
  {
    path: '/login/signin',
    name: '注册',
    component: () => import('@/login/signin'),
  },
  {
    path: '/login/forgetpswd',
    name: '忘记密码',
    component: () => import('@/login/forgetpswd'),
  },
  {
    path: '/login/changepswd',
    name: '修改密码',
    component: () => import('@/login/changepswd'),
  },
  {
    path: '/login/setpswd',
    name: '设置密码',
    component: () => import('@/login/setpswd'),
  },

]
