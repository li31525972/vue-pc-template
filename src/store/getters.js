
export default {
    TOKEN: state => state.userInfo.token,
    menuList: state => state.userInfo.menuInfoList,
    isFixedHeader: state => state.isFixedHeader,
    isTagViews: state => state.isTagViews,
    Tags: state => state.tags,
}
