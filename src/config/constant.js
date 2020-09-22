/**
 * @file 全局配置文件
 * @date 2020-09-18
 * @author Yahui Li
 */

// 当前环境
export const env = process.env

/**
 * 系统默认配置
 */
export const ISFIXEDHEADER = true // 是否固定头部
export const ISSHOWTAG = true // 是否固定头部




/**
 * 菜单配置
 * return {props}
 */
export const menuProps = () => {
    // 测试及生产环境配置
    if (env.NODE_ENV === 'test') {
        return {
            label: 'menuName', // 菜单名称key
            icon: 'menuIcon', // 菜单图标key
            path: 'router', // 菜单路径key
            route: 'name', // 以name作为跳转的key
            children: 'menuChild', // 子菜单key
        }
    }
    // 否则启用菜单组件默认配置
}

// 表格配置项
export const tableConfig = {
    border: true,
}


// 分页组件配置
export const PAGESIZES = [10, 20, 30, 50, 100] // 每页条数可选
export const LAYOUT = 'total, sizes, prev, pager, next, jumper' // 分页功能配置
export const PAGE = 1 // 当前页数
export const SIZE = 10 // 当前页条数

// 表单的提示内容 placeholder
export const inputStr = str => `请输入${ str }` // 输入框
export const selectStr = str => `请选择${ str }` // 选择框
