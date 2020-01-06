import Mock from 'mockjs'

Mock.setup({
    timeout: '200 - 500'
})

// 登录
Mock.mock('/login','post',(params) => {
    let body = JSON.parse(params.body)
    if (body.name === "admin") {
        if (body.password === '123456') {
            return {
                code: 0,
                data: {
                    name: '测试',
                    token: 'sdfdasdasadasdas'
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
