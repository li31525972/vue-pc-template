/**
* @file 侧边栏
* @date 2020-01-05
* @author Yahui Li
*/

<template>
    <el-menu :default-active="path"
             class="el-menu-vertical-demo"
             background-color="#545c64"
             text-color="#fff"
             active-text-color="#409EFF"
             router
             :collapse="isCollapse">
        <template v-for="(item, i) in menu">
            <!--&lt;!&ndash;菜单有二级&ndash;&gt;-->
            <el-submenu :key="i" v-if="item.meta.level !== 1" :index="'a' + i">
                <template slot="title">
                    <i :class="item.meta.icon"></i>
                    <span slot="title">{{ item.meta.title }}</span>
                </template>
                
                <template v-for="(nav, index) in item.children">
                    
                    <!--菜单有三级-->
                    <el-submenu v-if="nav.children" :key="index + 'a'">
                        <template slot="title">{{ nav.meta.title }}</template>
                        <el-menu-item v-for="(subnav, idx) in nav.children" :key="idx" @click="handleSetNav(item, nav, subnav)" :index="item.path + '/' +
                        nav.path + '/' + subnav.path">{{ subnav.meta.title }}
                        </el-menu-item>
                    </el-submenu>
                    
                    <el-menu-item :key="index + 'a'" @click="handleSetNav(item, nav)"  :index="item.path + '/' + nav.path">{{ nav.meta.title
                                                                                         }}</el-menu-item>
                
                </template>
            
            
            </el-submenu>
            <!--菜单没二级-->
            <el-menu-item v-else @click="handleSetNav(item)" :index="item.redirect" :key="i">
                <i :class="item.meta.icon"></i>
                <span slot="title">{{ item.meta.title }}</span>
            </el-menu-item>

            <!--<ReSubmenu :parent="item" :index="i" :key="i"/>-->
        </template>
    </el-menu>
</template>

<script>
import { mapGetters } from 'vuex'
import ReSubmenu from './ReSubmenu'
export default {
    name: 'Sidebar',
    components: {
        ReSubmenu,
    },
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
            menu: []
        }
    },
    computed: {
        ...mapGetters(['Tags', 'menuList']),
        // 获取当前的路由路径
        path() {
            return this.$route.path;
        }
    },
    watch: {},
    created() {
        this.getMenu()
    },
    mounted() {
    
    },
    methods: {
        handleSetNav(prev, cur) {
            // TODO 三级没有处理
            if (!cur) {
                this.$store.commit('SET_TAGS', { path: prev.redirect, title: prev.meta.title })
            } else {
                // 二级菜单
                if (prev.path !== '/') {
                    this.$store.commit('SET_TAGS', { path: prev.path + '/' + cur.path, title: cur.meta.title })
                } else {
                    this.$store.commit('SET_TAGS', { path: '/' + cur.path, title: cur.meta.title })
                }
                
            }
            
        },
    
        // 获取菜单信息
        getMenu() {
            let { routes } = this.$router.options
            
            this.menu = routes.filter(item => {
                return item.meta && !item.meta.hidden
            })
        
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
