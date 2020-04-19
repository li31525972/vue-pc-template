/**
* @file 数值动画案例
* @date 2020-04-16
* @author Yahui Li
*/

<template>
    <div>
        <CountTo :endValue="number"/>
        <button @click="handleUpdeta">更新</button>
    </div>
</template>

<script>
import CountTo from '_c/CountTo'
export default {
    components: {
        CountTo,
    },
    data() {
        return {
            number: 1000
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
        handleUpdeta() {
            this.number += Math.random() * 1000
        },
    }
}
</script>

<style lang="scss" scoped>

</style>
