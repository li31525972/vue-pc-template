/**
* @file 公共组件配置项
* @date 2020-09-29
* @author Yahui Li
*/

export const approval = {
    options: [
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
            label: '是否管理员',
            name: 'isAdmin',
            element: 'select',
            options: [],
        },
        {
            label: '组织机构',
            name: 'orgId',
            element: 'select',
            options: [],
        },
    ],
    config: {
    
    },
}
