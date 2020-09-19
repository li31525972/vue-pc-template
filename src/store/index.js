import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import * as constant from '@/config/constant'
/**
 * vuex 的持久化插件，是一个函数，
 * 参数：  1. 对象options
 *        2. storage，默认为options.storage || (window && window.localStorage)
 *        3. key 默认为 options.key || 'vuex'
 */
import createPersistedState from 'vuex-persistedstate'

// 下面为手动实现的持久化插件
// import saveLocal from './plugins'

Vue.use(Vuex)

export const initState = {
    userInfo: {}, // 用户信息
    isFixedHeader: constant.ISFIXEDHEADER, // 是否固定头部
    isTagViews: constant.ISSHOWTAG, // 是否显示tab栏
    tags: [],
    menuList: [], // 菜单数据
}

export default new Vuex.Store({
    strict: process.env.NODE_ENV === 'development', // 开发环境下开启严格模式，严格不能在mutaitions之外修改state的状态
    /**
     * plugins: 是一个数组，里面的元素为函数，该函数有一个默认参数store，
     *      vuex-persistedstate这个插件的实现 (options, storage, key) => store => {} 这是一个函数，直接调用，返回一个函数实现传参的效果
     */
    // 插件实现持久化
    plugins: [
        createPersistedState({
            // 会话存储 - 用于存储当前登陆者的信息
            storage: sessionStorage,
            reducer(val) {
                return {
                    userInfo: val.userInfo,
                    menuList: val.menuList,
                }
            },
        }),
        createPersistedState({
            // 永久存储 - 用于存储用户本地设置
            storage: localStorage,
            reducer(val) {
                return {
                    isFixedHeader: val.isFixedHeader,
                    isTagViews: val.isTagViews,
                }
            },
        })
    ],
    /**
     * 下面为手动实现的vuex的持久化插件、弱化版
     *
     */
    // plugins: [saveLocal()],
    state: JSON.parse(JSON.stringify(initState)),
    mutations,
    actions,
    getters,
    modules: {}
})
