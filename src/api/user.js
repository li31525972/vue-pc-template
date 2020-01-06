import request from '@/utils/request'

// 登录
export const login = data => request('/login', data, 'POST')
