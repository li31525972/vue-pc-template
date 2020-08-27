<template>
    <el-autocomplete
            v-bind="$attrs"
            :placeholder="options.placeholder"
            :disabled="options.disabled"
            :valueKey="options.valueKey"
            :debounce="options.debounce"
            :placement="options.placement"
            :fetchSuggestions="options.fetchSuggestions"
            :popperClass="options.popperClass"
            :triggerOnFocus="options.triggerOnFocus"
            :name="options.name"
            :selectWhenUnmatched="options.selectWhenUnmatched"
            :label="options.label"
            :prefixIcon="options.prefixIcon"
            :suffixIcon="options.suffixIcon"
            :hideLoading="options.hideLoading"
            :popperAppendToBody="options.popperAppendToBody"
            :highlightFirstItem="options.highlightFirstItem"
            :focus="options.focus"
            @input="event => $emit('input', event)"
            @select="event => $emit('select', event)"
    >
        <slot name="prefix"></slot>
        <slot name="suffix"></slot>
        <slot name="prepend"></slot>
        <slot name="append"></slot>
    </el-autocomplete>
</template>

<script>
export default {
    name: 'NmAutocomplete',
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
