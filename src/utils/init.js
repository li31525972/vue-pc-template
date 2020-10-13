/*
* @file 各种初始化方法
* @date 2020-10-13
* @author YaHui Li
*/

// 数据缓存
let keepData = {}

// 搜索条件及表单下拉框初始化获取数据方法
export function initOptions() {
    this.options.forEach((item, i) => {


        // 默认获取配置项
        if (item.method) {

            if (keepData[`${item.method.name}${item.params ? item.params : ''}`]) {
                this.$set(this.options[i], 'options', keepData[`${item.method.name}${item.params ? item.params : ''}`])
            } else {

                // 开启loading
                this.$set(this.options[i], 'loading', true)
                item.method(item.params).then(response => {
                    let data = response || []

                    if (!item.keepAlive) {
                        keepData[`${item.method.name}${item.params ? item.params : ''}`] = data
                    }


                    this.$set(this.options[i], 'options', data)
                    // 关闭loading
                    this.$set(this.options[i], 'loading', false)
                })

            }

        }

        // 自定义获取配置项
        if (item.customMethod) {

            if (keepData[`${item.customMethod.name}${item.params ? item.params : ''}`]) {
                this.$set(this.options[i], 'options', keepData[`${item.customMethod.name}${item.params ? item.params : ''}`])
            } else {

                // 开启loading
                this.$set(this.options[i], 'loading', true)
                item.customMethod.call(item, item).then(response => {

                    if (!item.keepAlive) {
                        keepData[`${item.customMethod.name}${item.params ? item.params : ''}`] = response
                    }

                    this.$set(this.options[i], 'options', response)
                    // 关闭loading
                    this.$set(this.options[i], 'loading', false)
                })

            }


        }

    })
}














