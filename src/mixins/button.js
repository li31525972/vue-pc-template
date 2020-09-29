/**
* @file 按钮混入
* @date 2020-09-28
* @author Yahui Li
*/
import btnProxy from '@/utils/btnProxy'
export default {
    data() {
        return {

        }
    },
    methods: {
        handleBtnClick(data) {
            let { row, $index, options } = data

            if (options.proxy) {
                btnProxy.call(this, data)
            } else {

                if (typeof this[options.name] === 'function') {
                    this[options.name](row, $index)

                } else {

                    console.log(options.name)
                }

            }

        }
    },
}
