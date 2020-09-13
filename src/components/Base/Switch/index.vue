<template>
    <el-switch
            v-bind="$attrs"
            :disabled="options.disabled"
            :width="options.width"
            :activeIconClass="options.activeIconClass"
            :inactiveIconClass="options.inactiveIconClass"
            :activeText="options.activeText"
            :inactiveText="options.inactiveText"
            :activeValue="options.activeValue"
            :inactiveValue="options.inactiveValue"
            :activeColor="options.activeColor"
            :inactiveColor="options.inactiveColor"
            :name="options.name"
            :validateEvent="options.validateEvent"
            @input="value => $emit('input', value)"
            @change="value => $emit('change', value)"
    >
    </el-switch>
</template>

<script>
export default {
    name: 'NmSwitch',
    props: {
        options: {
            type: Object,
            default: () => ({}),
        }
    },
    methods: {
        focus() {
            this.$refs.switch.focus()
        },
    },
}
</script>

<style scoped>

</style>
