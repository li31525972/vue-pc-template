<template>
    <el-radio-group
            v-bind="$attrs"
            :size="options.size"
            :disabled="options.disabled"
            :textColor="options.textColor"
            :fill="options.fill"
            @input="value => $emit('input', value)"
            @change="value => $emit('change', value)"
    >
        <el-radio
                v-for="item in options.options"
                :key="item[options.valueKey]"
                :label="item[options.valueKey]"
                :disabled="item.disabled"
                :border="item.border"
                :size="item.size"
                :name="item.name"
        >
            {{ item[options.labelKey] }}
        </el-radio>
    </el-radio-group>
</template>

<script>
export default {
    name: 'NmRadio',
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
