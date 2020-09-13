<template>
    <el-upload
            v-bind="$attrs"
            ref="upload"
            :action="options.action || ''"
            :headers="options.headers"
            :multiple="options.multiple"
            :data="options.data"
            :name="options.name"
            :withCredentials="options.withCredentials"
            :showFileList="options.showFileList"
            :drag="options.drag"
            :accept="options.accept"
            :onPreview="options.onPreview"
            :onRemove="options.onRemove"
            :onSuccess="options.onSuccess"
            :onError="options.onError"
            :onProgress="options.onProgress"
            :onChange="onChange"
            :beforeUpload="options.beforeUpload"
            :beforeRemove="options.beforeRemove"
            :listType="options.listType"
            :autoUpload="options.autoUpload"
            :fileList="options.fileList"
            :httpRequest="options.httpRequest"
            :disabled="options.disabled"
            :limit="options.limit"
            :onExceed="options.onExceed"
    >
        <el-button size="small" type="primary">点击上传</el-button>
        <slot slot="trigger" name="trigger"></slot>
        <slot slot="tip" name="tip"></slot>
    </el-upload>
</template>

<script>
export default {
    name: 'NmUpload',
    props: {
        options: {
            type: Object,
            default: () => ({}),
        }
    },
    methods: {
        // 清空已上传的文件列表（该方法不支持在 before-upload 中调用）
        clearFiles() {
            this.$refs.upload.clearFiles()
        },
        // 取消上传请求
        abort(file) {
            this.$refs.upload.abort(file)
        },
        // 手动上传文件列表
        submit() {
            this.$refs.upload.submit()
        },
        onChange(file, fileList) {
            this.$emit('input', fileList)
            this.$emit('change', { file, fileList })
        },
    },
}
</script>

<style scoped>

</style>
