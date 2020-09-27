/**
* @file 账号管理配置项
* @date 2020-09-28
* @author Yahui Li
*/
import api from '@/api'
import { buttonOptions } from '@/pageConfig/components/button';


// 搜索条件配置项
export const searchOptions = [
    {
        label: '用户名',
        name: 'account',
        element: 'input',
    },
    {
        label: '姓名',
        name: 'userName',
        element: 'input',
    },
    {
        label: '状态',
        name: 'status',
        element: 'select',
        options: [],
        method: api.base.getCodeMaster,
        params: '41',
        props: {
            label: 'dropDownValue',
            value: 'dropDownKey',
        },
    },
]

// 按钮配置项
export const buttonGroupOptions = [
    buttonOptions['0'],
    buttonOptions['3'],
]

// 表格配置项
export const tableOptions = [
    {
        label: '姓名',
        prop: 'userName',
    },
    {
        label: '用户名',
        prop: 'account',
    },
    {
        label: '所属公司',
        prop: 'technicalComName',
    },
    {
        label: '是否管理员',
        prop: 'isAdminName',
    },
    {
        label: '状态',
        prop: 'statusName',
    },
]
