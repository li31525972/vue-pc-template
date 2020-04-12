/**
* @file 路由
* @date 2020-01-03
* @author Yahui Li
*/
import Layout from '@/views/Layout'

const routes = [
    {
        path: '/',
        redirect: '/index',
        component: Layout,
        meta: { title: '首页', icon: 'el-icon-s-home', level: 1 },
        children: [{
            path: 'index',
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
    },
    {
        path: '*',
        name: '404',
        component: () => import(/* webpackChunkName: '404' */ '@/views/Error/404.vue')
    }
]

export default routes
