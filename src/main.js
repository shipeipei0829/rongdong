import Vue from 'vue'
import axios from './router/axios'
import VueAxios from 'vue-axios'
import App from './App'
import router from './router'
import store from './store'
import './styles/common.scss'
import './styles/font/iconfont.css'
import Vant from 'vant';
import 'vant/lib/index.css';
import { Lazyload } from 'vant';
import {localIp} from '@/api/date/init'//共用函数方法文件
import AMap from "vue-amap";


// 全局注册

window.eventBus = new Vue()
setTimeout(() => {
    window.onresize = function () {
        window.eventBus.$emit('RESIZE')
    }
}, 2000)
localIp()
// 监听鼠标滚轮滚动事件
function scrollFunc(event) {
    if (event.wheelDelta) {
        window.eventBus.$emit('MOUSESCROLL', event.wheelDelta / -120)
    }
    if (event.detail) {
        window.eventBus.$emit('MOUSESCROLL', event.detail / 3)
    }
}
window.addEventListener('DOMMouseScroll', scrollFunc, false)
window.onmousewheel = document.onmousewheel = scrollFunc
Vue.use(Vant);

Vue.use(Lazyload);
Vue.use(router)
Vue.use(VueAxios, axios)
Vue.use(AMap);
// 初始化vue-amap
AMap.initAMapApiLoader({
    // 高德key
    key: 'c936d34e6bf01501380b475bb9a3caee',
    // 插件集合 （插件按需引入）
    plugin: ['AMap.Geolocation']
});

new Vue({
    router,
    store,
    watch:{
        '$route' (to, from) {
            const toDepth = to.path.split('/').length
            const fromDepth = from.path.split('/').length

            this.transitionName = toDepth < fromDepth ? 'transitionRight' : 'transitionLeft'
          }
    },
    render: h => h(App)
}).$mount('#app')