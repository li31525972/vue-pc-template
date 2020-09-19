/*
* @file 请求错误 -- 状态码
* @date 2020-04-08
* @author YaHui Li
*/
// 成功的状态码
export const SUCCESS = {
    key: 'code',
    value: 0,
}


// 系统错误状态码
export const CODE = {
    400: '客户端参数有误',
    401: '认证失败，请重新登录',
    404: '请求的地址不存在',
    405: '请求方式有误，不支持改方法',
    500: '服务器错误，请联系管理员',
    502: '服务器忙，请稍后重试',
}
