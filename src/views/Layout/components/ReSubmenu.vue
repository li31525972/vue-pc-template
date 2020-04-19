/**
* @file 递归菜单组件
* @date 2020-04-19
* @author Yahui Li
*/

<template>
    <!--有二级-->
    <el-submenu v-if="type(parent)" :key="index + parent.meta.title" :index="'' + _uid">
        <template slot="title">
            <i :class="parent.meta.icon"></i>
            <span slot="title">{{ parent.meta.title }}</span>
        </template>
        
        <template v-for="(nav, idx) in parent.children">
            
            <ReSubmenu :parent="nav" :key="idx + nav.path" :index="idx"/>
        
        </template>
    
    
    </el-submenu>
    <!--没二级-->
    <el-menu-item v-else :index="parent.path" @click="handleSetNav(parent)" :key="index + parent.meta.title">
        <i :class="parent.meta.icon"></i>
        <span slot="title">{{ parent.meta.title }}</span>
    </el-menu-item>
</template>

<script>
export default {
    name: 'ReSubmenu',
    props: {
        parent: {
            type: Object,
            default: () => ({})
        },
        index: Number,
    },
    data() {
        return {
        
        }
    },
    computed: {
        type() {
            return (data) => {
                let result = false
                if (data.children && Object.prototype.toString.call(data.children).slice(8, -1) === 'Array') {
                    result = true
                }
                return result
            }
        }
    },
    watch: {
    
    },
    created() {
    
    },
    mounted() {
    
    },
    methods: {
        handleSetNav() {
        
        },
    }
}
</script>

<style lang="scss" scoped>

</style>
