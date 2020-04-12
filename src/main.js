import Vue from 'vue'
import App from './App.vue'
import 'normalize.css'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import store from './store'
import * as filters from '@/filters'
import { errorHandler, warnHandler } from '@/utils/error'

require('../mock')

Vue.use(Element,{ size: 'small' })
Vue.config.productionTip = false

// 全局过滤器
Object.keys(filters).forEach(item => {
    Vue.filter(item, filters[item])
})


// 全局捕获错误
Vue.config.errorHandler = errorHandler
// 全局捕获Vue warning
Vue.config.warnHandler = warnHandler

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
