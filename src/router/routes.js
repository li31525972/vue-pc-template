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
        path: '/components',
        meta: {
            title: '组件',
            icon: 'el-icon-menu'
        },
        component: Layout,
        redirect: '',
        children: [
            {
                path: 'search',
                name: 'search',
                meta: {
                    title: '搜索'
                },
                component: () => import(/* webpackChunkName: 'search' */ '@/views/Components/Search')
            },
            {
                path: 'button',
                name: 'componentButton',
                meta: {
                    title: '按钮',
                },
                component: () => import(/* webpackChunkName: 'button' */ '@/views/Components/Button')
            },
            {
                path: 'table',
                name: 'componentTable',
                meta: {
                    title: '表格',
                },
                component: () => import(/* webpackChunkName: 'table' */ '@/views/Components/Table')
            },
            {
                path: 'countTo',
                name: 'countTo',
                meta: {
                    title: '数值动画',
                },
                component: () => import(/* webpackChunkName: 'countTo' */ '@/views/Components/CountTo')
            },
            {
                path: 'messageBox',
                name: 'messageBox',
                meta: {
                    title: '消息提示框'
                },
                component: () => import(/* webpackChunkName: 'messageBox' */ '@/views/Components/MessageBox')
            }
        ],
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
