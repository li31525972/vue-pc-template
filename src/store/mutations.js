export default {
    // 重置store的数据
    RESET_STORE(state, data = {}) {
        state = data
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
}
