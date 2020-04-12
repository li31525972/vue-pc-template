import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter)


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
    document.title = to.meta.title
    if (to.name !== 'login') {
        
        if (!sessionStorage.getItem('token')) {
            next('/login')
        }
    }
    next()
})

export default router
