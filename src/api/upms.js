/**
* @file upms 域接口
* @date 2020-09-27
* @author Yahui Li
*/
import axios from '@/utils/axios'
const baseURL = '/upms'

// 获取账号列表
export const getAccountList = data => axios.post(`${baseURL}/account/getAccountList`, data)

// 新增账号
export const addAccount = data => axios.post(`${baseURL}/account/addAccount`, data)

// 删除账号
export const deleteAccount = data => axios.post(`${baseURL}/account/deleteAccount`, data)

// 账号启用、禁用
export const updateStatus = data => axios.post(`${baseURL}/account/updateStatus`, data)

// 获取所属公司树形下拉框
export const getOrgDropDown = data => axios.post(`${baseURL}/org/getOrgDropDown`, data)
