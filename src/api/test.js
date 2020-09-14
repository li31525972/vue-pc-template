import axios from '@/utils/axios'

// 测试
export const getStatus = () => axios.get('/getStatus')
// 获取省地址
export const getProvinceDropDown = data => axios.post('/base/dropDown/getProvinceDropDown', data)
// 获取下级地址
export const getAreaDropDown = valueId => axios.post('/base/dropDown/getAreaDropDown', { valueId })
