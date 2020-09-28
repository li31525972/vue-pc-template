/*
* @file ajax封装， 主要用于全局的错误拦截，loading加载，api节流
* @date 2020-04-08
* @author YaHui Li
*/
import axios from 'axios'
import Nprogress from 'nprogress'
import { Message, Loading } from 'element-ui'
import { CODE } from '@/config/httpCode'

let loadingOptions = {
    text: '正在加载中...',
    background: 'rgba(0, 0, 0, 0.2)',
}

let loadingInstance = null

// // 当前正在请求的api
let loadingApi = []

Nprogress.configure({
    easing: 'ease',  // 动画方式
    speed: 500,  // 递增进度条的速度
    showSpinner: false, // 是否显示加载ico
    trickleSpeed: 200, // 自动递增间隔
    minimum: 0.3 // 初始化时的最小百分比
})

const service = axios.create({
    baseURL: process.env.VUE_APP_URL,
    headers: {
        post: {
            'Content-Type': 'application/json'
        }
    }
})

// 请求拦截
service.interceptors.request.use(config => {
    if (!config.loading) {
        loadingInstance = Loading.service(loadingOptions)

        loadingApi.push(config.url)
    }


    let token = sessionStorage.getItem('token');
    if (token) {
        config.headers.Authorization = 'Bearer ' + token;
    }

    return config
}, error => {
    return Promise.reject(error.response)
});


// 响应拦截
service.interceptors.response.use(response => {
    let { code, msg, data } = response.data

    if (!response.config.loading) {
        loadingApi.splice(loadingApi.indexOf(response.config.url), 1)

        if (!loadingApi.length) {
            loadingInstance.close()
        }
    }


    if (response.data.hasOwnProperty('code')) {
        if (code === 0 && msg) {
            Message.success(msg)
        }
        if (code !== 0) {
            Message.error(msg)
        }

    }

    if (response.config.nodeRoot) {
        return response
    }

    return data

}, error => {

    let response = error.response

    if (!response.config.loading) {
        loadingApi.splice(loadingApi.indexOf(response.config.url), 1)

        if (!loadingApi.length) {
            loadingInstance.close()
        }
    }

    // 判断是否关闭
    // if (!loadingApi.length) {
    //     Nprogress.done()
    // }
    for (let key in CODE) {
        if (key == response.status) {
            Message.error(CODE[key])
        }
    }
    return Promise.reject(error)
})

export default service


