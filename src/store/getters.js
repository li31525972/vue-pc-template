
export default {
    TOKEN: state => state.userInfo.token, // token
    menuList: state => state.menuList, // 菜单信息
    isTableFlex: state => state.isTableFlex, // 分页是否固定
    isDraggable: state => state.isDraggable, // 弹出框是否可拖拽
}
