/*
* @file 对话框组件
* @date 2020-09-29
* @author YaHui Li
*/
<template>
    <el-dialog
            :title="title"
            :visible.sync="value"
            :width="width"
            :fullscreen="fullscreen"
            :top="top"
            :modal="modal"
            v-draggable-dialog="isDraggable"
            :modal-append-to-body="modalAppendToBody"
            :append-to-body="appendToBody"
            :close-on-click-modal="closeOnClickModal"
            :close-on-press-escape="closeOnPressEscape"
            :show-close="showClose"
            :destroy-on-close="destroyOnClose"
            :before-close="handleClose"
    >
        <slot></slot>
        <span slot="footer" class="dialog-footer">
            <el-button @click="handleClose">取 消</el-button>
            <el-button type="primary" @click="handleConfirm">确 定</el-button>
        </span>
    </el-dialog>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'CommonDialog',
    props: {
        value: {
            type: Boolean,
            default: false,
        },
        title: {
            type: String,
            default: '标题',
        },
        width: {
            type: String,
            default: '60%',
        },
        // 是否为全屏 Dialog
        fullscreen: Boolean,
        // Dialog CSS 中的 margin-top 值
        top: String,
        // 是否需要遮罩层
        modal: {
            type: Boolean,
            default: true,
        },
        // 遮罩层是否插入至 body 元素上，若为 false，则遮罩层会插入至 Dialog 的父元素上
        modalAppendToBody: {
            type: Boolean,
            default: true,
        },
        // Dialog 自身是否插入至 body 元素上。嵌套的 Dialog 必须指定该属性并赋值为 true
        appendToBody: {
            type: Boolean,
            default: false,
        },
        // 是否可以通过点击 modal 关闭 Dialog
        closeOnClickModal: {
            type: Boolean,
            default: false,
        },
        // 是否可以通过按下 ESC 关闭 Dialog
        closeOnPressEscape: {
            type: Boolean,
            default: true,
        },
        // 是否显示关闭按钮
        showClose: {
            type: Boolean,
            default: true,
        },
        // 关闭时销毁 Dialog 中的元素
        destroyOnClose: {
            type: Boolean,
            default: true,
        },
    },
    data() {
        return {

        }
    },
    created() {

    },
    computed: {
        ...mapGetters({
            isDraggable: 'isDraggable',// 弹出框是否可拖拽
        })
    },
    methods: {
        handleClose() {
            this.$emit('input', false)

        },
        handleConfirm() {
            this.$emit('handleClose')
        },
    },
}
</script>

<style scoped>

</style>
