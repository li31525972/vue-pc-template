<template>
    <el-select
            v-bind="$attrs"
            ref="select"
            :placeholder="options.placeholder || constant.selectStr(options.label)"
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
            :remoteMethod="value => options.remoteMethod.call(options, value, options)"
            :loading="options.loading"
            :loadingText="options.loadingText"
            :noMatchText="options.noMatchText"
            :noDataText="options.noDataText"
            :popperClass="options.popperClass"
            :reserveKeyword="options.reserveKeyword"
            :defaultFirstOption="options.defaultFirstOption"
            :popperAppendToBody="options.popperAppendToBody"
            :automaticDropdown="options.automaticDropdown"
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
                :key="item[options.props.value]"
                :label="item[options.props.label]"
                :value="item[options.props.value]"
                @click.native="event => $emit('select', { row: item, event })"
        >
        </el-option>
    </el-select>
</template>

<script>
import * as constant from '@/config/constant'
export default {
    name: 'NmSelect',
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
            this.$refs.select.focus()
        },
        blur() {
            this.$refs.select.blur()
        },
    },
}
</script>

<style scoped>

</style>
