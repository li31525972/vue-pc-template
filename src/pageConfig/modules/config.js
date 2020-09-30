/**
* @file 公共组件配置项
* @date 2020-09-29
* @author Yahui Li
*/
import api from '@/api'

export const approval = {
    options: [
        {
            label: '用户名',
            name: 'account',
            element: 'input',
            rules: [
                { required: true, message: '请输入用户名', trigger: 'blur' },
            ],
        },
        {
            label: '姓名',
            name: 'userName',
            element: 'input',
            rules: [
                { required: true, message: '请输入姓名', trigger: 'blur' },
            ],
        },
        {
            label: '是否管理员',
            name: 'isAdmin',
            element: 'select',
            options: [],
            method: api.base.getCodeMaster,
            params: '2',
            props: {
                label: 'dropDownValue',
                value: 'dropDownKey'
            },
            rules: [
                { required: true, message: '请选择是否管理员', trigger: 'blur' },
            ],
        },
        {
            label: '组织机构',
            name: 'orgId',
            element: 'select',
            options: [],
            rules: [
                { required: true, message: '请选择组织机构', trigger: 'blur' },
            ],
        },
    ],
    title: '新增',
}
