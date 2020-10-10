/**
* @file 侧边栏
* @date 2020-01-05
* @author Yahui Li
*/

<template>
    <el-menu
            :default-active="path"
            :mode="mode"
            :backgroundColor="backgroundColor"
            :textColor="textColor"
            :activeTextColor="activeTextColor"
            :defaultOpeneds="defaultOpeneds"
            :uniqueOpened="uniqueOpened"
            :menuTrigger="menuTrigger"
            :router="router"
            :collapse="collapse"
            :collapseTransition="collapseTransition"
            class=""
    >

        <template v-for="(item, i) in data">
            {{ props.title }}
            <Submenu
                    v-if="item[props.children] && item[props.children].length"
                    :key="i"
                    :index="`${item[props.label] + i}`"
                    :icon="item[props.icon]"
                    :title="item[props.label]"
                    :props="props"
                    :children="item[props.children]"
            />
            <MenuItem
                    v-else
                    :key="i"
                    :index="item[props.path]"
                    :icon="item[props.icon]"
                    :route="item[props.route]"
                    :title="item[props.label]"
            />
        </template>

    </el-menu>
</template>

<script>
import Submenu from './Submenu'
import MenuItem from './MenuItem'

export default {
    name: 'Sidebar',
    components: {
        Submenu,
        MenuItem,
    },
    props: {
        // 菜单数据
        data: {
            type: Array,
            default: () => []
        },
        // 菜单使用的配置项
        props: {
            type: Object,
            default: () => {
                return {
                    label: 'title',
                    icon: 'icon',
                    path: 'path',
                    route: 'name',
                    children: 'children',
                }
            }
        },
        // 模式
        mode: String,
        // 是否水平折叠收起菜单（仅在 mode 为 vertical 时可用）
        collapse: {
            type: Boolean,
            default: false
        },
        // 菜单的背景色（仅支持 hex 格式）
        backgroundColor: {
            type: String,
            default: 'rgb(48, 65, 86)',
        },
        // 菜单的文字颜色（仅支持 hex 格式）
        textColor: {
            type: String,
            default: 'rgb(191, 203, 217)',
        },
        // 当前激活菜单的文字颜色（仅支持 hex 格式）
        activeTextColor: {
            type: String,
            default: '#ffd04b',
        },
        // 当前打开的 sub-menu 的 index 的数组
        defaultOpeneds: {
            type: Array,
            default: () => [],
        },
        // 是否只保持一个子菜单的展开
        uniqueOpened: {
            type: Boolean,
            default: true,
        },
        // 子菜单打开的触发方式(只在 mode 为 horizontal 时有效)
        menuTrigger: {
            type: String,
            default: 'hover',
        },
        // 是否使用 vue-router 的模式，启用该模式会在激活导航时以 index 作为 path 进行路由跳转
        router: {
            type: Boolean,
            default: true,
        },
        // 是否开启折叠动画
        collapseTransition: {
            type: Boolean,
            default: true,
        },
    },
    data() {
        return {

        }
    },
    computed: {
        // 获取当前的路由路径
        path() {
            if (process.env.NODE_ENV !== 'development') {
                return this.$route.path;
            }
            return this.$route.name;
        }
    },

    mounted() {

    },
    methods: {

    }
}
</script>
<style>

</style>
<style lang="scss" scoped>
.el-menu {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 999;
    height: 100%;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    width: 210px;
    overflow-x: hidden;
    overflow-y: auto;
    &.el-menu--collapse {
        width: 60px;
    }
}
</style>
