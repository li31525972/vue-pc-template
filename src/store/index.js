import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
    plugins: [createPersistedState({
        storage: sessionStorage,
        reducer(val) {
            return {
                userInfo: val.userInfo
            }
        }
    })],
    state: {
        userInfo: {},
        isFixedHeader: false,
        isTagViews: false,
        tags: [],
    },
    mutations,
    actions,
    getters,
    modules: {}
})
