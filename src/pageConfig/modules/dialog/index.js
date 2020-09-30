/*
* @file dialog 弹窗
* @date 2020-09-29
* @author YaHui Li
*/
import Vue from 'vue'
import CommonDialog from './main'

let DialogConstructor = Vue.extend(CommonDialog)


let instance = null, current = null

let defaultOptions = {
    value: false,
    title: '标题',
    width: '400px',
    modal: true,
    showClose: true,
    destroyOnClose: true,
    flex: 1,
}

function dialog(options, callback) {
    options = options || {}

    if (!callback && options.callback) {
        callback = options.callback
    }

    current = {
        options: Object.assign({}, defaultOptions, options),
        callback,
    }

    showDialog()
}

// 打开弹出框
function showDialog() {

    if (!instance) {
        initDialog()
    }

    if (!instance.value) {
        let options = current.options

        for (let key in options) {
            if (options.hasOwnProperty(key)) {
                instance[key] = options[key]
            }
        }


        instance.$mount()
        document.body.appendChild(instance.$el)

        Vue.nextTick(() => {
            instance.value = true
        })
    }
}


// 初始化弹出框
function initDialog() {
    instance = new DialogConstructor()
    instance.callback = defaultCallback
}

// 默认回调函数
function defaultCallback(action, data) {
    if (current) {
        if (!action) {
            close()
        } else {
            let callback = current.callback

            if (typeof callback === 'function') {
                callback(data, close)
            }
        }
    }

}


// 关闭
function close() {
    instance.value = false
    current = null
}




export default dialog
