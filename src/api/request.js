import axios from 'axios';
import qs from 'qs'
import config from '@/api/config'
import { getToken } from '@/api/util'
import { Notify } from 'vant';
const baseUrl = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro; //区分正式环境还是测试环境

/**
 * 创建axios实例
 * @type {AxiosInstance}
 */
const service = axios.create({
        baseURL: baseUrl, // api的base_url
        timeout: 30000 // 设置请求超时时间30s
    })
    /**
     * 请求参数处理
     */
service.interceptors.request.use((config) => {
        config.method === 'post' ?
            config.data = qs.stringify({...config.data }) :
            config.params = {...config.params }
        const token = getToken()
            // alert(token)
        if (token) {
            config.headers['Authorization'] = 'Bearer ' + token
        }
        return config
    })
    /**
     * 响应结果处理
     */
service.interceptors.response.use(
    (response) => {

        if (response.data.code === 0 || response.status === 200) {
            // 服务端定义的响应code码为0时请求成功
            // 使用Promise.resolve 正常响应
            return Promise.resolve(response.data)
        } else {
            // 使用Promise.reject 响应
            Notify({ type: 'warning', message: response.data.message });
            //Message.error({content: response.data.message})
            return Promise.reject(response.data)
        }
    }, error => {
        let message = ''

        if (error && error.response) {
            switch (error.response.status) {
                case 401:
                    //location.reload()
                    return
                case 403:
                    message = error.response.data.path + ',' + error.response.data.message
                    break
                case 502:
                    message = '连接服务器失败'
                    break
                default:
                    message = error.response.data.message ? error.response.data.message : '服务器错误'
                    break
            }
            Notify({ type: 'warning', message: message });
            //Message.error({content: message})
            // 请求错误处理
            return Promise.reject(error)
        } else {
            message = '连接服务器失败'
            Notify({ type: 'warning', message: message });
            //Message.error({content: message})
            return Promise.reject(error)
        }
    }
)

export default service