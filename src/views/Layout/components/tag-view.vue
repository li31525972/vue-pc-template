/**
* @file tag-view 顶部路由标签
* @date 2019-02-12
* @author YaHui Li
*/
<template>
    <div>
        <el-tag v-for="(tag, i) in Tags" :key="tag.title" closable size="small" :effect="tag.path === path ? 'dark' :
        'plain'" @click="_handleSkip(tag.path)" @close="_handleClose(i)" type="">
            {{tag.title}}
        </el-tag>
    </div>
</template>
<script>
import { mapMutations, mapGetters } from 'vuex'

export default {
    name: 'tagViews',
    data() {
        return {}
    },
    computed: {
        ...mapGetters([
            'Tags'
        ]),
        path() {
            return this.$route.path
        }
    },
    mounted() {
        let { meta, path } = this.$route.matched[this.$route.matched.length - 1]
        this.SET_TAGS({ title: meta.title, path })
    },
    methods: {
        ...mapMutations([
            'SET_TAGS',
            'REMOVE_TAG'
        ]),
        // 移除标签页
        _handleClose(i) {
            this.REMOVE_TAG(i)
            if (this.Tags.length) {
                let length = this.Tags.length
                let nav = this.Tags[length - 1]
                this.$router.replace({ path: nav.path })
            } else {
                this.$router.replace({ path: '/' })
            }
        },

        // 点击跳转
        _handleSkip(path) {
            this.$router.push({ path })
        }
    }
}

</script>
<style lang="scss" scoped>
.el-tag {
    margin-left: 5px;
    cursor: pointer;
}

</style>
