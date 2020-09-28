import axios from '@/utils/axios'

// 认证
export const authToken = data => axios.post('/auth/oauth/token', data, { headers: { Authorization: 'Basic d2ViOjAwMDAwMA==' },  nodeRoot: true })
// 登录
export const login = data => axios.post('/auth/authentication/user', data)
