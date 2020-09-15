import Vue from 'vue'
import App from './App.vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/css/reset.css'
import '@/assets/css/base.scss'
import '@/assets/css/common.scss'
import 'nprogress/nprogress.css'
import router from './router'
import store from './store'
import * as filters from '@/filters'

// require('../mock')

Vue.use(Element,{ size: 'small' })
Vue.config.productionTip = false

// 全局过滤器
Object.keys(filters).forEach(item => {
    Vue.filter(item, filters[item])
})


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
