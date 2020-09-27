/**
* @file base 域接口
* @date 2020-09-28
* @author Yahui Li
*/
import axios from '@/utils/axios'
const baseURL = '/base'

// CodeMaster 接口
export const getCodeMaster = id => axios.post(`${baseURL}/dropDown/getCodeDropDown`, {codeId: id})
