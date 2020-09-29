/*
* @file 全局按钮事件拦截处理
* @date 2020-09-29
* @author YaHui Li
*/
import { Notification, MessageBox } from 'element-ui';
import message from '@/config/message'

export default function btnProxy(data) {
    let { row, $index, options } = data

    // 是否需要经过拦截处理
    if (options.checkSelect || options.checkWarning) {
        btnProxy.check.call(this, data)

        // 不需要拦截处理
    }

}

// 按钮check处理
btnProxy.check = function (data) {
    let { options } = data
    let that = this

    /**
     * 警告信息默认配置项
     */
    let defaultOptions = {
        title: '提示',
        message: `此操作将不可逆转, 是否${options.label}?`,
        type: 'warning',
        showClose: true,
        showCancelButton: true,
        showConfirmButton: true,
        callback(action) {

            if (action === 'confirm') {
                if (options.module) {
                    return btnProxy.module.call(that, data)
                }
                return btnProxy.confirm.call(that, data)
            }
        }
    }



    // 表格按钮是否选中
    if(options.checkSelect && !this.selectData.length) {
        return Notification.warning(message['1'])
    }

    // 警告提示
    if (options.checkWarning) {

        let props = Object.assign({}, defaultOptions, options.checkProps)

        return MessageBox(props)

    }

}


// 按钮调用的共通组件
btnProxy.module = function (data) {
    console.log(data);
},


// 最终确认调用按钮事件
btnProxy.confirm = function (data) {
    let { row, $index, options } = data

    if (typeof this[options.name] === 'function') {
        this[options.name](row, $index)

    } else {

        console.log(options.name)
    }
}
