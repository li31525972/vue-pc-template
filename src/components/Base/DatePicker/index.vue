<template>
    <el-date-picker
            v-bind="$attrs"
            :readonly="options.readonly"
            :disabled="options.disabled"
            :editable="options.editable"
            :clearable="options.clearable"
            :size="options.size"
            :placeholder="options.placeholder || constant.selectStr(options.label)"
            :startPlaceholder="options.startPlaceholder"
            :endPlaceholder="options.endPlaceholder"
            :type="options.type"
            :format="options.format"
            :align="options.align"
            :popperClass="options.popperClass"
            :pickerOptions="options.pickerOptions"
            :rangeSeparator="options.rangeSeparator"
            :defaultValue="options.defaultValue"
            :defaultTime="options.defaultTime"
            :valueFormat="options.valueFormat"
            :name="options.name"
            :unlinkPanels="options.unlinkPanels"
            :prefixIcon="options.prefixIcon"
            :clearIcon="options.clearIcon"
            :validateEvent="options.validateEvent"
            @input="value => $emit('input', value)"
            @change="value => $emit('change', value)"
            @blur="value => $emit('blur', value)"
            @focus="value => $emit('focus', value)"
    ></el-date-picker>
</template>

<script>
import * as constant from '@/config/constant'
export default {
    name: 'NmDatePicker',
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
            this.$refs.datePicker.focus()
        },
    },
}
</script>

<style scoped>

</style>
