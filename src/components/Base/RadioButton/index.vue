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
                :key="item[options.optionsKey[1]]"
                :label="item[options.optionsKey[1]]"
                :disabled="item.disabled"
                :border="item.border"
                :size="item.size"
                :name="item.name"
        >
            {{ item[options.optionsKey[1]] }}
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
