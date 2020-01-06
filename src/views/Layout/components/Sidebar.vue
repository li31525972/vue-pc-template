/**
* @file 侧边栏
* @date 2020-01-05
* @author Yahui Li
*/

<template>
        <el-menu :default-active="path" class="el-menu-vertical-demo" background-color="#1f2d3d" text-color="rgb(191, 203, 217)" active-text-color="rgb(24, 144, 255)" :collapse="isCollapse" unique-opened router>
            <el-submenu :index="i+''" v-for="(item,i) in routes" :key="i">
                <template slot="title">
                    <i :class="'el-icon-' + item.meta.icon"></i>
                    <span slot="title">{{ item.meta.title }}</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item @click="handleSetNav(item,route)" v-for="(route, key) in item.children" :key="i + '' + key" :index="item.path + '/' + route.path">{{
                                                                                                                                                                     route.meta.title }}
                    </el-menu-item>
                </el-menu-item-group>
            </el-submenu>
        </el-menu>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'Sidebar',
    props: {
        routes: {
            type: Array,
            default: () => []
        },
        isCollapse: {
            type: Boolean,
            default: false
        },
    },
    data() {
        return {
        
        }
    },
    computed: {
        ...mapGetters(['Tags']),
        // 获取当前的路由路径
        path() {
            return this.$route.path;
        }
    },
    watch: {},
    created() {
    
    },
    mounted() {
    
    },
    methods: {
        handleSetNav(prev, cur) {
    
            let path = prev.path + '/' + cur.path
            let title = cur.meta.title
    
            this.$store.commit('SET_TAGS', { path, title })
            
        }
    }
}
</script>
<style>
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
        height: 100%;
        min-height: 400px;
        overflow-y: auto;
    }
    
    .el-menu--collapse {
        height: 100%;
    }

    .el-submenu__title {
        height: 45px;
        line-height: 45px;
    }
    .el-menu-item-group__title {
        padding: 0;
    }
    .el-submenu .el-menu-item {
        height: 45px;
        line-height: 45px;
    }
</style>
<style lang="scss" scoped>

</style>
