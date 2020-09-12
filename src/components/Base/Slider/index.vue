<template>
    <el-slider
        v-bind="$attrs"
        :min="options.min"
        :max="options.max"
        :disabled="options.disabled"
        :step="options.step"
        :showInput="options.showInput"
        :showInputControls="options.showInputControls"
        :inputSize="options.inputSize"
        :showStops="options.showStops"
        :showTooltip="options.showTooltip"
        :range="options.range"
        :vertical="options.vertical"
        :height="options.height"
        :label="options.label"
        :debounce="options.debounce"
        :tooltipClass="options.tooltipClass"
        :marks="options.marks"
        @input="value => $emit('input', value)"
        @change="value => $emit('change', value)"
    ></el-slider>
</template>

<script>
export default {
    name: 'NmSlider',
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
