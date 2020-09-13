<template>
    <el-color-picker
            v-bind="$attrs"
            :disabled="options.disabled"
            :size="options.size"
            :showAlpha="options.showAlpha"
            :colorFormat="options.colorFormat"
            :popperClass="options.popperClass"
            :predefine="options.predefine"
            @input="value => $emit('input', value)"
            @change="value => $emit('change', value)"
            @activeChange="value => $emit('activeChange', value)"
    ></el-color-picker>
</template>

<script>
export default {
    name: 'NmColorPicker',
    props: {
        options: {
            type: Object,
            default: () => ({}),
        }
    },
}
</script>

<style scoped>

</style>
