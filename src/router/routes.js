/**
* @file 路由
* @date 2020-01-03
* @author Yahui Li
*/
import Layout from '@/views/Layout'

const routes = [
    {
        path: '/',
        redirect: '/homePage',
        component: Layout,
        title: '首页',
        icon: 'el-icon-s-home',
        meta: { title: '首页', icon: 'el-icon-s-home' },
        children: [{
            path: 'homePage',
            name: 'homePage',
            title: '首页',
            meta: { title: '首页' },
            component: () => import( /* webpackChunkName: "home" */ '@/views/Home')
        }]
    },
    {
        path: '/components',
        title: '组件',
        icon: 'el-icon-menu',
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
                title: '搜索',
                meta: {
                    title: '搜索'
                },
                component: () => import(/* webpackChunkName: 'search' */ '@/views/Components/Search')
            },
            {
                path: 'button',
                name: 'componentButton',
                title: '按钮',
                meta: {
                    title: '按钮',
                },
                component: () => import(/* webpackChunkName: 'button' */ '@/views/Components/Button')
            },
            {
                path: 'table',
                name: 'componentTable',
                title: '表格',
                meta: {
                    title: '表格',
                },
                component: () => import(/* webpackChunkName: 'table' */ '@/views/Components/Table')
            },
            {
                path: 'countTo',
                name: 'countTo',
                title: '数值动画',
                meta: {
                    title: '数值动画',
                },
                component: () => import(/* webpackChunkName: 'countTo' */ '@/views/Components/CountTo')
            },
            {
                path: 'messageBox',
                name: 'messageBox',
                title: '消息提示框',
                meta: {
                    title: '消息提示框'
                },
                component: () => import(/* webpackChunkName: 'messageBox' */ '@/views/Components/MessageBox')
            },
        ],
    },
    {
        path: '/settingUp',
        component: Layout,
        title: '设置',
        meta: {
            title: '设置'
        },
        icon: 'el-icon-s-home',
        children: [
            {
                path: 'systemManagement',
                component: () => import('@/views/settingUp/systemManagement'),
                title: '系统设置',
                meta: {
                    title: '系统设置'
                },
                children: [
                    {
                        path: 'accountManagement',
                        name: 'accountManagement',
                        component: () => import('@/views/settingUp/systemManagement/accountManagement'),
                        title: '账号管理',
                        meta: {
                            title: '账号管理'
                        },
                    }
                ],
            }
        ],
    },
    {
        path: '/login',
        name: 'login',
        title: '登录',
        meta: { title: '登录', hidden: true },
        component: () => import(/* webpackChunkName: "login" */ '@/views/Login')
    },
    {
        path: '/error',
        redirect: '/error/error-log',
        meta: { title: '错误', hidden: true },
        component: Layout,
        children: [
            {
                path: 'error-log',
                name: 'errorLog',
                title: '错误日志',
                meta: { title: '错误日志' },
                component: () => import(/* webpackChunkName: '404' */ '@/views/Error/ErrorLog.vue')
            },
            {
                path: 'statistics',
                name: 'statistics',
                title: '错误统计',
                meta: { title: '错误统计' },
                component: () => import(/* webpackChunkName: '404' */ '@/views/Error/Statistics.vue')
            },
        ],
    },
    {
        path: '*',
        name: '404',
        component: () => import(/* webpackChunkName: '404' */ '@/views/Error/404.vue')
    }
]

export default routes
