import { Notification } from 'element-ui'

/**
 * 前端的错误处理没有地方去存，就页面message显示，统一显示10秒
 */
// 全局捕获错误
export const errorHandler = (err, vm, info) => {
    Notification({
        title: '错误提示',
        message: vm.$options.name + '组件 in ' + info + '  ' + err,
        type: 'error',
        duration: 0,
        showClose: true
    })
}
// 全局捕获Vue warning
export const warnHandler = (msg, vm, trace) => {
    Notification({
        title: '警告',
        message: vm.$options.name + '组件 in ' + msg + ' ' + trace,
        type: 'warning',
        duration: 5000,
        showClose: true
    })
}
