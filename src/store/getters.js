
export default {
    TOKEN: state => state.userInfo.token,
    menuList: state => state.userInfo.menu,
    isFixedHeader: state => state.isFixedHeader,
    isTagViews: state => state.isTagViews,
    Tags: state => state.tags,
}
