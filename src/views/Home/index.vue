/**
* @file 首页
* @date 2020-01-05
* @author Yahui Li
*/
<template>
    <div>
        <NmInput v-model="value" :options="options" @change="onChange" @select="onSelect" />
    </div>
</template>

<script>
import NmInput from '@/components/Base/TimePicker'
export default {
    components: {
        NmInput,
    },
    data() {
        return {
            value: null,
            options: {
                optionsKey: ['label', 'value'],
                options: [
                    { label: '111', value: 1, children: [{ label: 'xa', value: 33 }] },
                    { label: '222', value: 2, children: [{ label: 'xa', value: 33 }] },
                    { label: '333', value: 3, children: [{ label: 'xa', value: 33 }] },
                    { label: '444', value: 4, children: [{ label: 'xa', value: 33 }] },
                    { label: '555', value: 5, children: [{ label: 'xa', value: 33 }] },
                    { label: '666', value: 6, children: [{ label: 'xa', value: 33 }] },
                    { label: '777', value: 7, children: [{ label: 'xa', value: 33 }] },
                    { label: '888', value: 8, children: [{ label: 'xa', value: 33 }] },
                    { label: '999', value: 9, children: [{ label: 'xa', value: 33 }] },
                    { label: '000', value: 0, children: [{ label: 'xa', value: 33 }] },
                ],
            },
        }
    },
    computed: {

    },
    watch: {

    },
    created() {

    },
    mounted() {

    },
    methods: {
        onChange(value) {
            console.log(value);
        },
        onSelect(value) {
            console.log(value);
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
