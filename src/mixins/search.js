/**
 * 搜索组件mixin
 */
export default {
    data() {
        return {
            // 表单数据
            search: {},
            // 固定参数
            fixedParams: {},
            sortParams: {},
            selectData: [],
        }
    },
    methods: {
        handleSearch(data) {
            this.search = { ...data }
            // 重置分页
            this.page = 1
            this.selectData = []

            // 请求数据
            this.init()
        },

    }
}
