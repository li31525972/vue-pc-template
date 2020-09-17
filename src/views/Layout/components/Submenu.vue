/**
* @file 菜单
* @date 2020-09-17
* @author Yahui Li
*/
<template>
    <el-submenu
            :index="index"
            :popperClass="popperClass"
            :showTimeout="showTimeout"
            :hideTimeout="hideTimeout"
            :disabled="disabled"
            :popperAppendToBody="popperAppendToBody"
    >
        <template slot="title">
            <i :class="[icon, 'menu_icon']"></i>
            <span slot="title" class="base_menu_title">{{ title }}</span>
        </template>
    
        <template v-for="(item, i) in children">
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
                    :title="item[props.label]"
            />
        </template>
        
    </el-submenu>
</template>

<script>
import MenuItem from './MenuItem'
export default {
    name: 'Submenu',
    components: {
        MenuItem,
    },
    props: {
        // 子菜单数据
        children: {
            type: Array,
            default: () => [],
        },
        // 唯一标志
        index: {
            type: String,
            default: null,
        },
        // 弹出菜单的自定义类名
        popperClass: String,
        // 展开 sub-menu 的延时
        showTimeout: {
            type: Number,
            default: 300,
        },
        // 收起 sub-menu 的延时
        hideTimeout: {
            type: Number,
            default: 300,
        },
        // 是否禁用
        disabled: {
            type: Boolean,
            default: false,
        },
        popperAppendToBody: Boolean,
        icon: String,
        title: String,
        // 菜单使用的配置项
        props: {
            type: Object,
            default: () => {
                return {
                    label: 'title',
                    icon: 'icon',
                    path: 'path',
                    children: 'children',
                }
            }
        },
    },
    data() {
        return {
        
        }
    },
    methods: {
    
    }
}
</script>

<style lang="scss" scoped>

</style>
