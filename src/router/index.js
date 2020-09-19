import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import { env, menuProps } from '@/config/constant'

Vue.use(VueRouter)


const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    // 实现原生浏览器的前进后退的滚动条位置不变
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    }
})

router.beforeEach((to, from, next) => {
    if (env === 'test') {
        let props = menuProps()
        document.title = props.label
    } else {
        document.title = to.meta.title
    }

    if (to.name !== 'login') {
        let token = sessionStorage.getItem('token')

        if (!token) {
            return next({ path: '/login' })

        }
    }
    next()
})


export default router
