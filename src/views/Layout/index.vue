/**
* @file 系统布局
* @date 2019-02-12
* @author YaHui Li
*/
<template>
    <div class="nm-layout-wrap">
        <!--左侧菜单栏-->
        <Sidebar
                class="nm-layout-sidebar"
                :class="{ 'is-collapse': isCollapse }"
                :collapse="isCollapse"
                :data="routes"
                :props="menuProps"
        />

        <div class="nm-layout-container" :class="{ 'is-collapse': isCollapse }">
            <div class="navbar" :class="{ 'is-collapse': isCollapse }">
                <div class="hamburger" @click="handleCollapse"
                     :class="[ isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold']"></div>
                <div class="content">
                    <!--面包屑导航-->

                    <BreadCrumbs class="bread"></BreadCrumbs>

                    <div class="right-menu">
                        <el-tooltip class="item" effect="dark" content="错误信息" placement="bottom">
                            <el-badge :value="456" :max="999" class="item">
                                <i class="el-icon-warning-outline"
                                   @click="() => $router.push({ name: 'errorLog' })"></i>
                            </el-badge>
                        </el-tooltip>

                        <el-tooltip class="item" :disabled="isOpen" effect="dark" content="系统设置"
                                    placement="bottom">
                            <i @click="openRight" class="setting-btn el-icon-setting"></i>
                        </el-tooltip>
                        <el-tooltip class="item" effect="dark" content="全屏" placement="bottom">
                            <i @click="handleFullScreen" class="el-icon-full-screen screen-full"></i>
                        </el-tooltip>


                        <el-dropdown @command="handleCommand" trigger="click">
            <span class="el-dropdown-link">
            <el-avatar shape="square" size="medium" :src="circleUrl"></el-avatar>
            <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item command="handleSynopsis">个人中心</el-dropdown-item>
                                <el-dropdown-item command="handleSignOut">退出登录</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </div>
                </div>
            </div>
            <transition name="fade-transform" mode="out-in">
                <router-view class="nm-layout-content"/>
            </transition>
        </div>

        <el-drawer title="系统布局配置" size="20%" wrapperClosable :show-close="false" :visible.sync="isOpen"
                   direction="rtl" :before-close="handleClose">
            <ul class="drawer-list">
                <li>
                    <span>固定 分页</span>
                    <el-switch v-model="FlexTable"></el-switch>
                </li>
                <li>
                    <span>弹出框拖拽</span>
                    <el-switch v-model="Draggable"></el-switch>
                </li>
            </ul>
        </el-drawer>
    </div>

    <!--<div class="l-container">-->
    <!--&lt;!&ndash;左侧菜单栏&ndash;&gt;-->
    <!--<Sidebar-->
    <!--:collapse="isCollapse"-->
    <!--:data="routes"-->
    <!--:props="menuProps"-->
    <!--/>-->
    <!--<div class="content" :class="{ 'fixed-header': FixedHeader, 'is-collapse': isCollapse }">-->
    <!--<header :class="{ 'fixed-header': FixedHeader }">-->
    <!--<div class="navbar">-->
    <!--<div class="hamburger" @click="handleCollapse"-->
    <!--:class="[ isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold']"></div>-->
    <!--<div class="content">-->
    <!--&lt;!&ndash;面包屑导航&ndash;&gt;-->
    <!---->
    <!--<BreadCrumbs class="bread"></BreadCrumbs>-->
    <!---->
    <!--<div class="right-menu">-->
    <!--<el-tooltip class="item" effect="dark" content="错误信息" placement="bottom">-->
    <!--<el-badge :value="456" :max="999" class="item">-->
    <!--<i class="el-icon-warning-outline"-->
    <!--@click="() => $router.push({ name: 'errorLog' })"></i>-->
    <!--</el-badge>-->
    <!--</el-tooltip>-->
    <!---->
    <!--<el-tooltip class="item" :disabled="isOpen" effect="dark" content="系统设置"-->
    <!--placement="bottom">-->
    <!--<i @click="openRight" class="setting-btn el-icon-setting"></i>-->
    <!--</el-tooltip>-->
    <!--<el-tooltip class="item" effect="dark" content="全屏" placement="bottom">-->
    <!--<i @click="handleFullScreen" class="el-icon-full-screen screen-full"></i>-->
    <!--</el-tooltip>-->
    <!---->
    <!---->
    <!--<el-dropdown @command="handleCommand" trigger="click">-->
    <!--<span class="el-dropdown-link">-->
    <!--<el-avatar shape="square" size="medium" :src="circleUrl"></el-avatar>-->
    <!--<i class="el-icon-arrow-down el-icon&#45;&#45;right"></i>-->
    <!--</span>-->
    <!--<el-dropdown-menu slot="dropdown">-->
    <!--<el-dropdown-item command="handleSynopsis">个人中心</el-dropdown-item>-->
    <!--<el-dropdown-item command="handleSignOut">退出登录</el-dropdown-item>-->
    <!--</el-dropdown-menu>-->
    <!--</el-dropdown>-->
    <!--</div>-->
    <!--</div>-->
    <!--</div>-->
    <!---->
    <!--</header>-->
    <!--<main :class="{ 'main': FixedHeader }">-->
    <!--<transition name="fade-transform" mode="out-in">-->
    <!--<router-view class="wrap"/>-->
    <!--</transition>-->
    <!--</main>-->
    <!--<el-drawer title="系统布局配置" size="20%" wrapperClosable :show-close="false" :visible.sync="isOpen"-->
    <!--direction="rtl" :before-close="handleClose">-->
    <!--<ul class="drawer-list">-->
    <!--<li>-->
    <!--<span>固定 Header</span>-->
    <!--<el-switch v-model="FixedHeader">-->
    <!--</el-switch>-->
    <!--</li>-->
    <!--</ul>-->
    <!--</el-drawer>-->
    <!--</div>-->
    <!--</div>-->

</template>
<script>
import screenFull from 'screenfull'
import { mapGetters, mapActions } from 'vuex'
import Sidebar from './components/Sidebar'
import BreadCrumbs from './components/bread.vue'
import * as constant from '@/config/constant'

export default {
    name: 'layout',
    components: {
        Sidebar,
        BreadCrumbs,
    },
    data() {
        return {
            // 菜单配置项
            menuProps: constant.menuProps(),

            isCollapse: true,
            isOpen: false,
            circleUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
            isShow: false,
        }
    },
    computed: {
        ...mapGetters({
            isTableFlex: 'isTableFlex', // 分页是否可拖拽
            menuList: 'menuList', // 菜单信息
            isDraggable: 'isDraggable', // 弹出框是否可拖拽
        }),
        // 过滤菜单
        routes() {
            if (process.env.NODE_ENV !== 'development') {
                return this.menuList
            }
            return this.getMenu()
        },
        // 分页
        FlexTable: {
            get() {
                return this.isTableFlex
            },
            set(newValue) {
                this.$store.commit('SET_FLEXTABLE', newValue)
            }
        },
        // 拖拽
        Draggable: {
            get() {
                return this.isDraggable
            },
            set(newValue) {
                this.$store.commit('SET_DRAGGABLE', newValue)
            }
        },
    },
    watch: {},
    created() {

    },
    mounted() {
    },
    methods: {
        ...mapActions([
            'changeHeader',
        ]),

        // 获取菜单信息
        getMenu() {
            let { routes } = this.$router.options

            return routes.filter(item => {
                return item.meta && !item.meta.hidden
            })

        },


        // 全屏
        handleFullScreen() {
            if (!screenFull.isEnabled) {
                this.$message({
                    message: '不支持全屏',
                    type: 'warning'
                })
                return false
            }
            screenFull.toggle()
        },

        // 侧边栏显示
        handleCollapse() {
            this.isCollapse = !this.isCollapse;
        },
        // 打开右边的弹出框
        openRight() {
            this.isOpen = !this.isOpen
        },
        // 关闭设置
        handleClose(done) {
            done()
        },

        handleCommand(name) {
            this[name]()
        },

        // 个人中心
        handleSynopsis() {
            console.log(2);
        },

        // 退出登录
        handleSignOut() {
            this.$store.commit('RESET_STORE')
            sessionStorage.clear()
            this.$router.replace({ name: 'login' })
        },
    }
}

</script>
<style>


    .right-menu .el-badge__content.is-fixed {
        top: 12px;
        right: 18px;
    }

    .right-menu .el-badge__content {
        height: 12px;
        line-height: 12px;
        font-size: 10px;
        padding: 0 2px;
    }

</style>


<style lang="scss" scoped>
    @import '~@/assets/css/base.scss';
    /*最外层盒子*/

    .nm-layout-wrap {
        height: 100%;

        .nm-layout-container {
            position: relative;
            overflow-x: hidden;
            height: 100%;
            width: calc(100% - 210px);
            margin-left: 210px;
            transition: all $transition;

            &.is-collapse {
                margin-left: 60px;
                width: calc(100% - 60px);
                transition: all $transition;
            }

            .navbar {
                position: fixed;
                left: 210px;
                top: 0;
                z-index: 998;
                width: calc(100% - 210px);
                height: 50px;
                display: flex;
                box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12);
                background-color: #fff;
                transition: all $transition;
                &.is-collapse {
                    left: 60px;
                    width: calc(100% - 60px);
                    transition: all $transition;
                }

                .hamburger {
                    width: 50px;
                    line-height: 50px;
                    text-align: center;
                    font-size: 22px;
                    cursor: pointer;

                    &:hover {
                        color: #409EFF;
                    }
                }

                .content {
                    flex: 1;
                    display: flex;
                    justify-content: space-between;

                    .right-menu {
                        height: 100%;
                        margin-right: 10px;
                        display: flex;
                        align-items: center;

                        /deep/ .el-badge__content.is-fixed {
                            top: 5px;
                            right: 20px;
                        }

                        .el-dropdown {
                            cursor: pointer;
                            height: 100%;

                            .el-dropdown-link.el-dropdown-selfdefine {
                                display: flex;
                                height: 100%;
                                align-items: center;
                            }
                        }

                        i {
                            margin-right: 10px;
                            height: 30px;
                            width: 30px;
                            line-height: 30px;
                            font-size: 20px;
                            font-weight: 700;
                            text-align: center;
                            cursor: pointer;
                        }
                    }
                }
            }

            .nm-layout-content {
                min-height: 100%;
                display: flex;
                flex-direction: column;
                box-sizing: border-box;
                padding: 60px 10px 10px 10px;
            }
        }
    }

    .drawer-list {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        height: 100%;
        padding: 0 20px;

        li {
            display: flex;
            align-items: center;
            height: 30px;
            margin-bottom: 10px;
            justify-content: space-between;
        }
    }

    // fade
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 0.28s;
    }

    .fade-enter,
    .fade-leave-active {
        opacity: 0;
    }

    // fade-transform
    .fade-transform-leave-active,
    .fade-transform-enter-active {
        transition: all .5s;
    }

    .fade-transform-enter {
        opacity: 0;
        transform: translateX(-30px);
    }

    .fade-transform-leave-to {
        opacity: 0;
        transform: translateX(30px);
    }

</style>
