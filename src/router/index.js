import VueRouter from 'vue-router'
import PageRouter from './page/' //总的路径
import loginrouter from './page/login' //登录注册
import homerouter from './page/home' //首页的路径
import msg from './page/msg' //首页的路径
import orderrouter from "./page/order"
import minerouter from './page/mine'
import { getToken } from '@/api/util'
let Router = new VueRouter({
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            if (from.meta.keepAlive) {
                from.meta.savedPosition = document.body.scrollTop
            }
            return {
                x: 0,
                y: to.meta.savedPosition || 0
            }
        }
    },
    routes: [].concat([])
})


let routers = [...PageRouter, ...loginrouter, ...homerouter, ...orderrouter, ...minerouter, ...msg]

Router.addRoutes(routers)
Router.beforeEach((to, from, next) => {
    if (getToken()) {
        next()
    } else {
        if (to.path == '/login/index' ||
            to.path == '/login/ringup' ||
            to.path == '/login/signin' ||
            to.path == '/login/forgetpswd' ||
            to.path == '/login/changepswd' ||
            to.path == '/login/setpswd'
        ) { //如果是登录页面路径，就直接next()
            next();
        } else { //不然就跳转到登录；
            next('/login/index');
        }
    }
})
export default Router