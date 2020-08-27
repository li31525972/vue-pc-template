<template>
    <el-input
            v-bind="$attrs"
            :placeholder="options.placeholder"
            :type="options.type"
            :maxlength="options.maxlength"
            :minlength="options.minlength"
            :showWordLimit="options.showWordLimit"
            :clearable="options.clearable"
            :showPassword="options.showPassword"
            :disabled="options.disabled"
            :size="options.size"
            :prefixIcon="options.prefixIcon"
            :suffixIcon="options.suffixIcon"
            :rows="options.rows"
            :autosize="options.autosize"
            :autocomplete="options.autocomplete"
            :name="options.name"
            :readonly="options.readonly"
            :max="options.max"
            :min="options.min"
            :step="options.step"
            :resize="options.resize"
            :autofocus="options.autofocus"
            :form="options.form"
            :label="options.label"
            :tabindex="options.tabindex"
            :validateEvent="options.validateEvent"
            :focus="options.focus"
            :blur="options.blur"
            @input="value => $emit('input', value)"
            @blur="event => $emit('blur', event)"
            @focus="event => $emit('focus', event)"
            @clear="event => $emit('clear', event)"
    >
        <slot name="prefix"></slot>
        <slot name="suffix"></slot>
        <slot name="prepend"></slot>
        <slot name="append"></slot>
    </el-input>
</template>

<script>
export default {
    name: 'NmInput',
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
