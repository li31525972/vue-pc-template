<template>
    <el-rate
            v-bind="$attrs"
            :max="options.max"
            :disabled="options.disabled"
            :allowHalf="options.allowHalf"
            :lowThreshold="options.lowThreshold"
            :highThreshold="options.highThreshold"
            :colors="options.colors"
            :voidColor="options.voidColor"
            :disabledVoidColor="options.disabledVoidColor"
            :iconClasses="options.iconClasses"
            :voidIconClass="options.voidIconClass"
            :disabledVoidIconClass="options.disabledVoidIconClass"
            :showText="options.showText"
            :showScore="options.showScore"
            :textColor="options.textColor"
            :texts="options.texts"
            :scoreTemplate="options.scoreTemplate"
            @input="value => $emit('input', value)"
            @change="value => $emit('change', value)"
    ></el-rate>
</template>

<script>
export default {
    name: 'NmRate',
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
