<template>
    <el-drawer
            ref="drawer"
            :appendToBody="appendToBody"
            :closeOnPressEscape="closeOnPressEscape"
            :customClass="`base_drawer ${customClass || ''}`"
            :destroyOnClose="destroyOnClose"
            :modal="modal"
            :modalAppendToBody="modalAppendToBody"
            :direction="direction"
            :showClose="showClose"
            :size="size"
            :title="title"
            :visible.sync="visible"
            :beforeClose="beforeClose || defaultBeforeClose"
            :wrapperClosable="wrapperClosable"
            :withHeader="withHeader"
            @open="value => $emit('open', value)"
            @opened="value => $emit('opened', value)"
            @close="value => $emit('close', value)"
            @closed="value => $emit('closed', value)"
    >
        <template v-slot:title>
            <slot name="title"></slot>
        </template>
        <div class="base_drawer_content">
            <slot></slot>
        </div>
        <div class="base_drawer_footer" v-if="showFooterBtn">
            <slot name="footer">11111</slot>
        </div>
    </el-drawer>
</template>

<script>
export default {
    name: 'CommonDrawer',
    props: {
        // Drawer 自身是否插入至 body 元素上。嵌套的 Drawer 必须指定该属性并赋值为 true
        appendToBody: {
            type: Boolean,
            default: true,
        },
        // 关闭前的回调，会暂停 Drawer 的关闭
        beforeClose: {
            type: Function,
            default: null,
        },
        // 是否可以通过按下 ESC 关闭 Drawer
        closeOnPressEscape: {
            type: Boolean,
            default: true,
        },
        // Drawer 的自定义类名
        customClass: String,
        // 控制是否在关闭 Drawer 之后将子元素全部销毁
        destroyOnClose: {
            type: Boolean,
            default: true,
        },
        // 是否需要遮罩层
        modal: {
            type: Boolean,
            default: true,
        },
        // 遮罩层是否插入至 body 元素上，若为 false，则遮罩层会插入至 Drawer 的父元素上
        modalAppendToBody: {
            type: Boolean,
            default: true,
        },
        // Drawer 打开的方向
        direction: {
            type: String,
            default: 'rtl',
        },
        // 是否显示关闭按钮
        showClose: {
            type: Boolean,
            default: true,
        },
        // Drawer 窗体的大小, 当使用 number 类型时, 以像素为单位, 当使用 string 类型时, 请传入 'x%', 否则便会以 number 类型解释
        size: {
            type: [String, Number],
            default: '30%',
        },
        // Drawer 的标题，也可通过具名 slot 传入
        title: {
            type: String,
            default: '标题',
        },
        // 是否显示 Drawer，支持 .sync 修饰符
        visible: {
            type: Boolean,
            default: false,
        },
        // 点击遮罩层是否可以关闭 Drawer
        wrapperClosable: {
            type: Boolean,
            default: true,
        },
        // 控制是否显示 header 栏, 默认为 true, 当此项为 false 时, title attribute 和 title slot 均不生效
        withHeader: {
            type: Boolean,
            default: true,
        },
        // 是否显示底部按钮
        showFooterBtn: {
            type: Boolean,
            default: true,
        },
    },
    data() {
        return {}
    },
    methods: {
        closeDrawer() {
            this.$refs.drawer.closeDrawer()
        },

        // 默认关闭
        defaultBeforeClose(done) {
            this.$emit('update:visible', false)
            // done()
        },
    }
}
</script>

<style lang="scss" scoped>

</style>
