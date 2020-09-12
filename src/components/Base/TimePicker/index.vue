<template>
    <el-time-picker
            v-bind="$attrs"
            :readonly="options.readonly"
            :disabled="options.disabled"
            :editable="options.editable"
            :clearable="options.clearable"
            :size="options.size"
            :startPlaceholder="options.startPlaceholder"
            :endPlaceholder="options.endPlaceholder"
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
            :focus="options.focus"
            @input="value => $emit('input', value)"
            @change="value => $emit('change', value)"
            @blur="value => $emit('blur', value)"
            @focus="value => $emit('focus', value)"
    ></el-time-picker>
</template>

<script>
export default {
    name: 'NmTimePicker',
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
