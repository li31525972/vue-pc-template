import { login } from '@/api/user'

export default {
    async login({ commit }, val) {
        let data = await login(val)
        commit('SET_USER', data)
    },
    // 固定头部改变
    changeHeader({ commit }, value) {
        commit('SET_HEADER', value)
    },
    // 固定导航标签改变
    changeTagView({ commit }, value) {
        commit('SET_SHOW_TAGVIEWS', value)
    },
}
