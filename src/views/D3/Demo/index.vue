/*
* @file demo
* @date 2020-10-15
* @author YaHui Li
*/
<template>
    <div class="wrap">
        <!--<svg style="display: none;">-->
            <!--<defs>-->
                <!--<linearGradient id="linearGradient" x1="0%" x2="0%" y1="100%" y2="0%">-->
                    <!--<stop offset="0%" stop-color="#f00"></stop>-->
                    <!--<stop offset="100%" stop-color="#00f"></stop>-->
                <!--</linearGradient>-->
                <!--<linearGradient id="linearGradient2" x1="100%" x2="0%" y1="0%" y2="0%">-->
                    <!--<stop offset="0%" stop-color="#f00"></stop>-->
                    <!--<stop offset="100%" stop-color="#00f"></stop>-->
                <!--</linearGradient>-->
            <!--</defs>-->
        <!--</svg>-->
        <p>111</p>
        <p>222</p>
        <p>333</p>

        <svg style="flex: 1;" class="svg_wrap">
            
            <!--<rect x="0" y="0" width="50%" height="100%"   style="fill: #000"></rect>-->
            <!--<rect x="50%" y="0" width="50%" height="100%" style="fill: #999"></rect>-->
        </svg>
        
    </div>
</template>

<script>
import * as d3 from 'd3'
export default {
    name: 'D3Demo',
    data() {
        return {

        }
    },
    mounted() {
        let list = d3.range(10)
        let list1 = d3.range(2,10)
        let list2 = d3.range(2,10,2)
        console.log(list);
        console.log(list1);
        console.log(list2);
    }
}
</script>

<style lang="scss" scoped>
.svg_wrap {
    display: flex;
    rect {
        flex: 1;
    }
}
</style>
