/**
 * 表格配置方法
 */
import { PAGE, SIZE } from '@/config/constant'

export default {
    data() {
        return {
            page: PAGE,
            size: SIZE,
            selectData: [],
        }
    },
    methods: {
        onPageChange({ page, size }) {
            this.page = page
            this.size = size

            this.init()
        },
    
        // 表格多选框改变
        onSelectChange(data) {
            this.selectData = data
        },
    },
}
