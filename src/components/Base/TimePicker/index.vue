<template>
    <el-time-picker
            v-bind="$attrs"
            :readonly="options.readonly"
            :disabled="options.disabled"
            :editable="options.editable"
            :clearable="options.clearable"
            :size="options.size"
            :placeholder="options.placeholder || constant.selectStr(options.label)"
            :startPlaceholder="options.startPlaceholder || constant.selectStr('开始时间')"
            :endPlaceholder="options.endPlaceholder || constant.selectStr('结束时间')"
            :isRange="options.isRange"
            :popperClass="options.popperClass"
            :rangeSeparator="options.rangeSeparator"
            :align="options.align"
            :defaultValue="options.defaultValue"
            :pickerOptions="options.pickerOptions"
            :valueFormat="options.valueFormat"
            :name="options.name"
            :prefixIcon="options.prefixIcon"
            :clearIcon="options.clearIcon"
            @input="value => $emit('input', value)"
            @change="value => $emit('change', value)"
            @blur="value => $emit('blur', value)"
            @focus="value => $emit('focus', value)"
    ></el-time-picker>
</template>

<script>
import * as constant from '@/config/constant'
export default {
    name: 'NmTimePicker',
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
            this.$refs.timePicker.focus()
        },
    },
}
</script>

<style scoped>

</style>
