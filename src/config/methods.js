/*
* @file 常用方法
* @date 2020-04-08
* @author YaHui Li
*/
import { MessageBox } from 'element-ui';

// 精确判断数据类型
export const type = data => Object.prototype.toString.call(data).slice(8, -1)


// MessageBox提示框弹框封装 --- 目前只用于提示框
export const check = (message = '是否继续？', title = '提示', { status = 'warning', showBtn = true, showCancelBtn = true, isThen = true, isCatch = false, confirmButtonText = '确定', cancelButtonText = '取消' } = {}) => {

    return new Promise((resolve, reject) => {

        MessageBox.confirm(message, title, {
            confirmButtonText: showBtn && confirmButtonText,
            cancelButtonText: showCancelBtn && cancelButtonText,
            type: status,
        }).then(() => {
            isThen && resolve()
        }).catch(() => {
            isCatch && reject()
        });

    })
}
