import { initState } from './index'
export default {
    // 重置store的数据
    RESET_STORE(state) {
        console.log(initState);
        state = Object.assign({}, initState)
        console.log(state);
    },

    // 存储用户信息
    SET_USER(state, val) {
        state.userInfo = val
    },
    // 添加快捷导航栏
    SET_TAGS(state, val) {
        let flag = state.tags.some(item => {
            return item.path === val.path
        })
        if (!flag) {
            state.tags.push(val)
        }
    },
    // 移除快捷导航
    REMOVE_TAG(state, i) {
        state.tags.splice(i, 1)
    },
    // 设置固定头部
    SET_HEADER(state, value) {
        state.isFixedHeader = value
    },
    SET_SHOW_TAGVIEWS(state, value) {
        state.isTagViews = value
    },
    RESET_TOKEN(state) {
        state.userInfo.token = null
    },
}
