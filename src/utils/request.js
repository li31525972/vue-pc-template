/*
* @file ajax
* @date 2020-04-08
* @author YaHui Li
*/
import axios from 'axios'
import Nprogress from 'nprogress'
import { Message } from 'element-ui'
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
    Nprogress.start()

    return config
}, error => {
    Nprogress.done()

    return Promise.resolve(error.response)
});


// 响应拦截
service.interceptors.response.use(response => {
    Nprogress.done()
    console.log(response);
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



let allAPI = [] // 所有api记录

/**
 * 二次封装ajax请求, 用于全局处理错误、处理axios传参方式, 主要用来处理全局错误，api节流(节流和防抖个人觉得节流好一点)
 * @param url
 * @param data
 * @param method
 * @param header
 * @param options
 * @returns {Promise<any>}
 */
const request = (url, data, method = 'POST', header = {}, options = {}) => {

    // 一次请求
    if (!allAPI.length || !allAPI.includes(url + method)) {
        allAPI.push(url + method)

        // 接收请求参数
        let params = {}

        // 判断传参的数据类型
        if (type(url) === 'Object') {
            params = url

        } else {
            params = {
                url,
                method,
                params: method.toUpperCase() === 'GET' ? data : null,
                data: method.toUpperCase() !== 'GET' ? data : null,
                header: { ...header },
                ...options,
            }

        }
        return new Promise((resolve) => {

            service(params).then(response => {

                allAPI.splice(allAPI.indexOf(url + method), 1)
                // 处理后端自定义的状态码以及报错信息
                if (response.code === 0) {
                    resolve(response.data)
                } else {
                    Message({
                        message: response.message,
                        type: 'error',
                        duration: 10000,
                        showClose: true
                    })
                }
            })
        })

    } else if (allAPI.length && allAPI.includes(url + method)) {



    }
}

export default request
