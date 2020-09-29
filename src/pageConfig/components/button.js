/**
* @file 按钮配置项
* @date 2020-09-28
* @author Yahui Li
*/
/**
 * proxy: true, // 是否需要拦截按钮事件进行预处理
 * checkSelect: true, // 是否需要check表格是否选中数据，需要和 混入中的table配合使用
 * checkWarning: true, // 是否需要弹出警告框提示用户
 * checkProps: {}, 警告框的配置项，详见 MessageBox 配置项
 * module: '', // 调用全局共通模块
 */

export const buttonOptions = {
    0: {
        label: '新增',
        name: 'handleAdd',
    },
    1: {
        label: '查看',
        name: 'handleLook',
    },
    2: {
        label: '编辑',
        name: 'handleEdit',
    },
    3: {
        label: '删除',
        name: 'handleDelete',
        type: 'danger',
    },
    4: {
        label: '重置密码',
        name: 'handleResetPassword',
    },
    5: {
        label: '启用',
        name: 'handleUse',
    },
    6: {
        label: '禁用',
        name: 'handleDisabled',
        type: 'danger',
    },
}
