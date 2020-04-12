import request from '@/utils/request'

// 测试
export const getStatus = () => request('/getStatus', null, 'get')
