/**
* @file 按钮
* @date 2020-04-15
* @author Yahui Li [class, item.icon ? 'button-icon' : '']
*/
<template>
    <el-button
            :type="type"
            :size="size"
            :plain="plain"
            :round="round"
            :circle="circle"
            :disabled="disabled"
            :loading="loading"
            :autofocus="autofocus"
            :nativeType="nativeType"
            :class="{
                'button-icon': icon,
                btnClass
            }"
            :slot="btnSlot"
            :icon="icon"
            @click="event => $emit('handleClick', event)"
    >
        <span v-if="label">{{ label }}</span>
    </el-button>
</template>

<script>
export default {
    name: 'commonButton',
    props: {
        // 按钮类型
        type: {
            type: String,
            validator(value) {
                return ['primary', 'success', 'warning', 'danger', 'info', 'text'].indexOf(value) !== -1
            },
        },
        // 按钮大小
        size: {
            type: String,
            validator(value) {
                return ['medium', 'small', 'mini'].indexOf(value) !== -1
            },
            default: 'small',
        },
        // 是否朴素按钮
        plain: {
            type: Boolean,
            default: false,
        },
        // 是否圆角按钮
        round: {
            type: Boolean,
            default: false,
        },
        // 是否圆形按钮
        circle: {
            type: Boolean,
            default: false,
        },
        // 是否加载中状态
        loading: {
            type: Boolean,
            default: false,
        },
        // 是否加载中状态
        disabled: {
            type: Boolean,
            default: false,
        },
        // 图标类名
        icon: String,
        // 按钮类名
        btnClass: String,
        // 是否默认聚焦
        autofocus: {
            type: Boolean,
            default: false,
        },
        // 原生 type 属性
        nativeType: {
            type: String,
            validator(value) {
                return ['button', 'submit', 'reset'].indexOf(value) !== -1
            },
            default: 'button',
        },
        // 按钮名称
        label: {
            type: String,
        },
        btnSlot: String,
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

</style>
