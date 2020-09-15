<template>
    <el-cascader
            v-bind="$attrs"
            :options="options.options"
            :props="options.props"
            :size="options.size"
            :placeholder="options.placeholder || constant.selectStr(options.label)"
            :disabled="options.disabled"
            :clearable="options.clearable"
            :showAllLevels="options.showAllLevels"
            :collapseTags="options.collapseTags"
            :separator="options.separator"
            :filterable="options.filterable"
            :filterMethod="options.filterMethod"
            :debounce="options.debounce"
            :beforeFilter="options.beforeFilter"
            :popperClass="options.popperClass"
            :getCheckedNodes="options.getCheckedNodes"
            @change="value => $emit('change', value)"
            @input="value => $emit('input', value)"
            @expandChange="value => $emit('expandChange', value)"
            @blur="value => $emit('blur', value)"
            @focus="value => $emit('focus', value)"
            @visibleChange="value => $emit('visibleChange', value)"
            @removeTag="value => $emit('removeTag', value)"
    >
        <template v-slot="{ node, data }" >
            <slot :node="node" :data="data"></slot>
        </template>
    </el-cascader>
</template>

<script>
import * as constant from '@/config/constant'
export default {
    name: 'NmInput',
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
    
    },
}
</script>

<style scoped>

</style>
