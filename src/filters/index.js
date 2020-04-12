import moment from 'moment'

// 时间格式化
export const dateformat = (dateStr, pattern = 'YYYY-MM-DD HH:mm:ss') => {
    return dateStr ? moment(dateStr).format(pattern) : ''
}
