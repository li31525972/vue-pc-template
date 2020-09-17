/**
* @file 子菜单
* @date 2020-09-17
* @author Yahui Li
*/
<template>
    <el-menu-item
        :index="index"
        :route="route"
        :disabled="disabled"
        class="base_menu_item"
    >
        <i :class="[icon, 'menu_icon']"></i>
        <span slot="title" class="base_menu_title">{{ title }}</span>
    </el-menu-item>
</template>

<script>
export default {
    name: 'MunuItem',
    props: {
        index: String,
        route: {
            type: Object,
            default: () => null,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        icon: String,
        title: String,
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
