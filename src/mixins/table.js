/**
 * 表格配置方法
 */
import { PAGE, SIZE } from '@/config/constant'

export default {
    data() {
        return {
            page: PAGE,
            size: SIZE,
        }
    },
    methods: {
        onPageChange({ page, size }) {
            this.page = page
            this.size = size

            this.init()
        },
    },
}
