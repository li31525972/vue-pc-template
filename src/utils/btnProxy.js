/*
* @file 全局按钮事件拦截处理
* @date 2020-09-29
* @author YaHui Li
*/
import { Notification, MessageBox } from 'element-ui';
import message from '@/config/message'
import dialog from '@/pageConfig/modules/dialog'
import * as moduleConfig from '@/pageConfig/modules/config'


export default function btnProxy(data) {
    let { options } = data

    // 是否需要经过拦截处理
    if (options.checkSelect || options.checkWarning) {
        btnProxy.check.call(this, data)

        // 不需要拦截处理
    } else if (options.module) {
        btnProxy.module.call(this, data)
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
    let { options } = data

    // 所有的模块
    let moduleOptions = {
        dialog,
    }

    // 使用哪个模块，默认为dialog
    let status = options.moduleType || 'dialog'

    // 当前模块配置项
    let currentOptions = moduleConfig[options.module] || {}

    // 调用当前模块
    moduleOptions[status](currentOptions, (params, close) => {

        btnProxy.confirm.call(this, data, params, close)
    })
},


// 最终确认调用按钮事件
btnProxy.confirm = function (data, params, close) {
    let { row, $index, options } = data
    /**
     * 如果没有当前行的数据  模块数据 关闭事件 配置项
     */
    

    if (typeof this[options.name] === 'function') {
        
        if (!row) {
            // 不是行内操作
            
            if (params) {
                // 模块操作
                this[options.name](params, close)
            } else {
                // 非调用模块操作
                this[options.name]()
            }
            
        } else {
            // 行内操作
    
            this[options.name]({ row, $index }, params, close)
        }

    } else {

        console.log(options.name)
    }
}
