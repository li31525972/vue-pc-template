import Mock from 'mockjs'

Mock.setup({
    timeout: '200 - 500'
})

// 菜单列表
let menu = [
    {
        path: '/index',
        meta: { title: '首页', icon: 'el-icon-s-home', level: 1 },
    },
    {
        path: '',
        meta: {
            title: '组件',
            icon: 'el-icon-menu'
        },
        children: [
            {
                path: '/components/search',
                meta: {
                    title: '搜索'
                },
            },
            {
                path: '/components/button',
                meta: {
                    title: '按钮',
                },
            },
            {
                path: '/components/table',
                meta: {
                    title: '表格',
                },
            },
            {
                path: '/components/countTo',
                meta: {
                    title: '数值动画',
                },
            }
        ],
    },
]

// 登录
Mock.mock('/login','post',(params) => {
    let body = JSON.parse(params.body)
    if (body.name === "admin") {
        if (body.password === '123456') {
            return {
                code: 0,
                data: {
                    name: '测试',
                    token: 'sdfdasdasadasdas',
                    menu,
                }
            }
        } else {
            return {
                code: 1,
                message: '密码错误'
            }
        }
    } else {
        return {
            code: 1,
            message: '账号不存在'
        }
    }
})


// 获取状态
Mock.mock('/getStatus', 'get', () => {
    return {
        code: 0,
        data: [
            { name: '完成中', key: 1 },
            { name: '未完成', key: 2 },
            { name: '已完成', key: 3 },
        ]
    }
})
