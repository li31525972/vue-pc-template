import Vue from 'vue'
import 'babel-polyfill';
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
import * as directives from '@/directives'
import api from '@/api'

// require('../mock')

Vue.use(Element,{ size: 'small' })
Vue.config.productionTip = false
Vue.prototype.$api = api
// 全局过滤器
Object.keys(filters).forEach(item => {
    Vue.filter(item, filters[item])
})
// 自定义指令
Object.keys(directives).forEach(item => {
    Vue.directive(item, directives[item])
})


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
