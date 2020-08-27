<template>
    <el-select
            v-bind="$attrs"
            :placeholder="options.placeholder"
            :multiple="options.multiple"
            :disabled="options.disabled"
            :valueKey="options.valueKey"
            :size="options.size"
            :clearable="options.clearable"
            :collapseTags="options.collapseTags"
            :multipleLimit="options.multipleLimit"
            :name="options.name"
            :autocomplete="options.autocomplete"
            :filterable="options.filterable"
            :allowCreate="options.allowCreate"
            :filterMethod="options.filterMethod"
            :remote="options.remote"
            :remoteMethod="options.remoteMethod"
            :loading="options.loading"
            :loadingText="options.loadingText"
            :noMatchText="options.noMatchText"
            :noDataText="options.noDataText"
            :popperClass="options.popperClass"
            :reserveKeyword="options.reserveKeyword"
            :defaultFirstOption="options.defaultFirstOption"
            :popperAppendToBody="options.popperAppendToBody"
            :automaticDropdown="options.automaticDropdown"
            :focus="options.focus"
            :blur="options.blur"
            @input="value => $emit('input', value)"
            @change="value => $emit('change', value)"
            @visibleChange="value => $emit('visibleChange', value)"
            @removeTag="value => $emit('removeTag', value)"
            @clear="value => $emit('clear', value)"
            @blur="event => $emit('blur', event)"
            @focus="event => $emit('focus', event)"
    >
        <el-option
                v-for="item in options.options"
                :key="item[options.optionsKey[1]]"
                :label="item[options.optionsKey[0]]"
                :value="item[options.optionsKey[1]]"
                @click.native="event => $emit('select', { row: item, event })"
        >
        </el-option>
    </el-select>
</template>

<script>
export default {
    name: 'NmSelect',
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
