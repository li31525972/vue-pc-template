<template>
    <el-time-select
            v-bind="$attrs"
            :readonly="options.readonly"
            :disabled="options.disabled"
            :editable="options.editable"
            :clearable="options.clearable"
            :size="options.size"
            :placeholder="options.placeholder || constant.selectStr(options.label)"
            :align="options.align"
            :defaultValue="options.defaultValue"
            :pickerOptions="options.pickerOptions"
            :name="options.name"
            :prefixIcon="options.prefixIcon"
            :clearIcon="options.clearIcon"
            @input="value => $emit('input', value)"
            @change="value => $emit('change', value)"
            @blur="value => $emit('blur', value)"
            @focus="value => $emit('focus', value)"
    ></el-time-select>
</template>

<script>
import * as constant from '@/config/constant'
export default {
    name: 'NmTimeSelect',
    props: {
        options: {
            type: Object,
            default: () => ({}),
        }
    },
    data() {
        return {
            constant,
        }
    },
    methods: {
        focus() {
            this.$refs.timeSelect.focus()
        },
    },
}
</script>

<style scoped>

</style>
