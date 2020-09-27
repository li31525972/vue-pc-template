/**
* @file upms 域接口
* @date 2020-09-27
* @author Yahui Li
*/
import axios from '@/utils/axios'
const baseURL = '/upms'

// 获取账号列表
export const getAccountList = data => axios.post(`${baseURL}/account/getAccountList`, data)
