/**
* @file 数值动画组件
* @date 2020-04-16
* @author Yahui Li
*/

<template>
    <span :id="eleId">111</span>
</template>

<script>
import CountUp from 'countup'

export default {
    name: 'CountTo',
    props: {
        // 起始值
        startValue: {
            type: Number,
            default: 0
        },
        // 结束值 必传
        endValue: {
            type: Number,
            required: true,
        },
        // 保留几位小数
        decimals: {
            type: Number,
            default: 0
        },
        // 动画时长, 单位s
        duration: {
            type: Number,
            default: 1,
        },
        // 是否使用变速
        ease: {
            type: Boolean,
            default: true,
        },
        // 数值是否分组，如：1,111,222
        group: {
            type: Boolean,
            default: true
        },
        // 分隔符
        separator: {
            type: String,
            default: ','
        },
        // 小数点分隔符
        decimal: {
            type: String,
            default: '.'
        },
    },
    data() {
        return {
            count: {},
        }
    },
    computed: {
        eleId() {
            return `element${ this._uid }`
        },
    },
    watch: {
        endValue(val) {
            this.count.update(val)
        }
    },
    created() {
    
    },
    mounted() {
        this.$nextTick(() => {
            this.count = new CountUp(this.eleId, this.startValue, this.endValue, this.decimals, this.duration, {
                useEasing: this.ease,
                useGrouping: this.group,
                separator: this.separator,
                decimal: this.decimal,
            })
            // 开始
            this.count.start()
        })
    },
    methods: {
    
    }
}
</script>

<style lang="scss" scoped>

</style>
