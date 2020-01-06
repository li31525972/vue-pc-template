import axios from 'axios'
import Nprogress from 'nprogress'
import { Notification } from "element-ui";
import store from '../store'

const root = process.env.VUE_APP_API_ROOT

Nprogress.configure({
    easing: 'ease', // 动画方式
    speed: 500, // 递增进度条的速度
    showSpinner: false, // 是否显示加载ico
    trickleSpeed: 200, // 自动递增间隔
    minimum: 0.3 // 初始化时的最小百分比
})


let server = axios.create({
    baseURL: '',
    timeout: 1000
})

server.interceptors.request.use(config => {
    Nprogress.start()
    if (config.url !== '/login') {
        // 在请求头中添加 Authorization
        // 进行局部设置
        config.headers['Authorization'] = store.getters.TOKEN
    }
    
    return config
    
}, error => {
    Nprogress.done()
    return Promise.resolve(error.response)
})

server.interceptors.response.use(response => {
    Nprogress.done()
    // 系统状态码判断、处理出错信息
    if (response.status === 200) {
        return response.data
    } else {
        Notification({
            title: '错误提示',
            message: '请求地址 ' + response.config.url + '  ' + response.status + ' ' + response.statusText,
            type: 'error',
            duration: 10000,
            showClose: true
        })
    }
}, error => {
    Nprogress.done()
    return Promise.resolve(error.response)
})


const request = (url, data, method = 'POST', header = {}, options = {}) => {
    return new Promise((resolve) => {
        server({
            url,
            method,
            params: method.toUpperCase() === 'GET' ? data : null,
            data: method.toUpperCase() !== 'GET' ? data : null,
            header: { ...header },
            ...options,
        }).then(response => {
            // 处理后端自定义的状态码以及报错信息
            if (response.code === 0) {
                resolve(response.data)
            } else {
                Notification({
                    title: '错误提示',
                    message: response.message,
                    type: 'error',
                    duration: 10000,
                    showClose: true
                })
            }
        })
    })
}

export default request
