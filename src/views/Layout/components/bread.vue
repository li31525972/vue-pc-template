/**
* @file 面包屑导航
* @date 2019-02-12
* @author YaHui Li
*/
<template>
    <el-breadcrumb separator="/">
        <!--<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>-->
        <el-breadcrumb-item v-for="item in route" :key="item.path" >{{ item.meta.title }}</el-breadcrumb-item>
    </el-breadcrumb>
</template>
<script>
export default {
    name: 'bread',
    data() {
        return {

        }
    },
    computed: {
        // 获取当前路由信息
        route() {
            return this.$route.matched.filter(item => item.meta && !item.meta.hidden)
        }
    }
}

</script>
<style lang="scss" scoped>
.el-breadcrumb {
    height: 100%;
}

.el-breadcrumb__item {
    height: 100%;
    line-height: 50px;
    font-size: 16px;
}

.el-breadcrumb__inner {
    cursor: pointer;

    &:hover {
        color: #409EFF;
    }
}

</style>
