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
        <el-radio-button
                v-for="item in options.options"
                :key="item[options.props.value]"
                :label="item[options.props.label]"
                :disabled="item.disabled"
                :border="item.border"
                :size="item.size"
                :name="item.name"
        >
            {{ item[options.props.label] }}
        </el-radio-button>
    </el-radio-group>
</template>

<script>
export default {
    name: 'NmRadioButton',
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
