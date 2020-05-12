import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import store from '../store'

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
    document.title = to.meta.title
    let token = store.getters.TOKEN
    if (to.name !== 'login') {

        if (!token) {
            return next({ path: '/login' })

        }
    }
    next()
})


export default router
