/**
* @file 路由
* @date 2020-01-03
* @author Yahui Li
*/
import Layout from '@/views/Layout'

const routes = [
    {
        path: '/',
        redirect: '/index/subIndex'
    },
    {
        path: '/index',
        component: Layout,
        meta: { title: '首页', icon: 's-home' },
        children: [{
            path: 'subIndex',
            name: 'home',
            meta: { title: '首页' },
            component: () => import( /* webpackChunkName: "home" */ '@/views/Home')
        }]
    },
    {
        path: '/login',
        name: 'login',
        meta: { title: '登录', hidden: true },
        component: () => import(/* webpackChunkName: "login" */ '@/views/Login')
    }
]

export default routes
