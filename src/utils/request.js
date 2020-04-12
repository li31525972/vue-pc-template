/*
* @file ajax封装， 主要用于全局的错误拦截，loading加载，api节流
* @date 2020-04-08
* @author YaHui Li
*/
import axios from 'axios'
import Nprogress from 'nprogress'
import { Message, Notification } from 'element-ui'
import { type } from '@/constant/methods'
import { CODE } from '@/constant/httpCode'

Nprogress.configure({
    easing: 'ease',  // 动画方式
    speed: 500,  // 递增进度条的速度
    showSpinner: false, // 是否显示加载ico
    trickleSpeed: 200, // 自动递增间隔
    minimum: 0.3 // 初始化时的最小百分比
})

const service = axios.create({
    baseURL: '',
    headers: {
        post: {
            'Content-Type': 'application/json'
        }
    }
})

// 请求拦截
service.interceptors.request.use(config => {

    return config
}, error => {
    Nprogress.done()

    return Promise.resolve(error.response)
});


// 响应拦截
service.interceptors.response.use(response => {
    
    for (let key in CODE) {
        if (key === response.status) {
            return Message.error(CODE[key])
        }
    }

    return response.data
}, error => {
    Nprogress.done()

    return Promise.resolve(error.response)
})



// 当前正在请求的api
let api = []
// 当前需要loading的api
let loadingApi = []

const request = (url, data, method = 'POST', header = {}, options = {}, loading = true) => {
    
    // 处理axios配置项 判断axios.request({})自定义，不符合封装需求配置项
    let axiosOptions = {}
    if (type(url) === 'Object') {
        // 如果是完整的请求配置项
        axiosOptions = url
        
    } else {
        // 参数形式
        axiosOptions = {
            url,
            method,
            params: method.toUpperCase() === 'GET' ? data : null,
            data: method.toUpperCase() !== 'GET' ? data : null,
            headers: { ...header },
            ...options,
            loading,
        }
    }
    
    // loading处理，第一次进来并且需要loading时开启,
    if (axiosOptions.loading) {
        // 在第一个需要loading的api请求触发loading
        if (!loadingApi.length) {
            Nprogress.start()
        }
        
        // 记录需要loading的api
        loadingApi.push(axiosOptions.url + axiosOptions.method)
        
    }
    
    
    // 判断是否二次请求
    let flag = api.some(item => {
        return item === (axiosOptions.url + axiosOptions.method)
    })
    
    
    return new Promise((resolve) => {
        // 二次请求拦截
        if (!flag) {
            // 记录一次请求
            api.push(axiosOptions.url + axiosOptions.method)
        } else {
            // 二次请求提示
            return Notification.warning('正在加载中，请稍等...')
        }
        
        // 发送请求
        service.request(axiosOptions).then(response => {
            
            // 请求已经响应，删除请求记录
            api.splice(api.indexOf(axiosOptions.url + axiosOptions.method), 1)
            
            // 带有loading的请求响应，判断是否关闭loading
            if (axiosOptions.loading) {
                // 删除当前api记录
                loadingApi.splice(loadingApi.indexOf(axiosOptions.url + axiosOptions.method), 1)
                
                // 判断是否关闭
                if (!loadingApi.length) {
                    Nprogress.done()
                }
            }
            
            // 接口失败处理
            if (response.code === 0) {
                resolve(response.data)
            } else {
                Notification({
                    type: 'error',
                    title: '错误提示',
                    message: response.message,
                    duration: 5000,
                    showClose: true,
                })
            }
        })
    })
}

/**
 * request 使用方式
 * 1. request(url, data, method...)
 * 2. request({ url: 'xx', data: xx, method: 'xxx' .... })
 */

export default request
