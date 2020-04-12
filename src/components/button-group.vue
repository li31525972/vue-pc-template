<template>
    <div class="button-group">
        <template v-for="(item, i) in options">
            <!--上传按钮-->
            <el-upload
                    v-if="item.upload"
                    :key="item.label"
                    class="upload-demo"
                    :action="item.action"
                    :headers="item.headers || {}"
                    :data="item.data || {}"
                    :name="item.fileName || 'file'"
                    :accept="item.accept"
                    :multiple="item.multiple"
                    :on-success="item.onSuccess"
                    :on-error="item.onError"
                    :show-file-list="false"
                    :limit="item.limit">
                <el-button :size="item.size" :type="item.type || 'text'">{{ item.label }}</el-button>
            </el-upload>
            
            <el-button
                    v-else
                    :key="item.label"
                    :type="item.type || 'text'"
                    :size="item.size"
                    :plain="item.plain"
                    :round="item.round"
                    :circle="item.circle"
                    :disabled="item.disabled"
                    :icon="item.icon"
                    @click="() => $emit('handleAction', item.name)"
            >
                <span>{{ item.label }}</span>
            </el-button>
        </template>
    </div>
</template>

<script>
export default {
    props: {
        options: {
            type: Array,
            default: () => []
        }
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
.button-group {
    padding: 10px 0;
    .upload-demo {
        display: inline-block;
    }
    .upload-demo + button {
        margin-left: 10px;
    }
    button + .upload-demo {
        margin-left: 10px;
    }
}
</style>
