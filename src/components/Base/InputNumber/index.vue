<template>
    <el-input-number
            v-bind="$attrs"
            ref="inputNumber"
            :min="options.min"
            :max="options.max"
            :step="options.step"
            :stepStrictly="options.stepStrictly"
            :precision="options.precision"
            :size="options.size"
            :disabled="options.disabled"
            :controls="options.controls"
            :controlsPosition="options.controlsPosition"
            :name="options.name"
            :label="options.label"
            :placeholder="options.placeholder"
            @input="value => $emit('input', value)"
            @change="value => $emit('change', value)"
            @blur="value => $emit('blur', value)"
            @focus="value => $emit('focus', value)"
    >

    </el-input-number>
</template>

<script>
export default {
    name: 'NmInputNumber',
    props: {
        options: {
            type: Object,
            default: () => ({}),
        }
    },
    methods: {
        focus() {
            this.$refs.inputNumber.focus()
        },
        select() {
            this.$refs.inputNumber.select()
        },
    },
}
</script>

<style scoped>

</style>
