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
        <span slot="title">
            <slot name="title"></slot>
        </span>
        <slot></slot>
    </el-submenu>
</template>

<script>
export default {
    name: 'Submenu',
    props: {
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
    },
    data() {
        return {
        
        }
    },
    computed: {
    
    },
    watch: {
    
    },
    created() {
    
    },
    mounted() {
    
    },
    methods: {
    
    }
}
</script>

<style lang="scss" scoped>

</style>
