import { initState } from './index'
export default {
    // 重置store的数据
    RESET_STORE(state) {
        state = Object.assign(state, initState)
    },

    // 存储用户信息
    SET_USER(state, val) {
        state.userInfo = val
        state.menuList = val.menuInfoList || []
    },
    // 设置固定头部
    SET_HEADER(state, value) {
        state.isFixedHeader = value
    },
    RESET_TOKEN(state) {
        state.userInfo.token = null
    },
}
