/**
* @file 表格行组件
* @date 2020-09-23
* @author Yahui Li
*/
<template>
    <el-table-column
            :index="options.index"
            :columnKey="options.columnKey"
            :label="options.label"
            :prop="options.prop"
            :width="options.width"
            :minWidth="options.minWidth"
            :fixed="options.fixed"
            :renderHeader="options.renderHeader"
            :sortable="options.sortable"
            :sortMethod="options.sortMethod"
            :sortBy="options.sortBy"
            :sortOrders="options.sortOrders"
            :resizable="options.resizable"
            :formatter="options.formatter"
            :showOverflowTooltip="options.showOverflowTooltip"
            :align="options.align"
            :headerAlign="options.headerAlign"
            :className="options.className"
            :labelClassName="options.labelClassName"
            :filters="options.filters"
            :filterPlacement="options.filterPlacement"
            :filterMultiple="options.filterMultiple"
            :filterMethod="options.filterMethod"
            :filteredValue="options.filteredValue"
    >
    
        <template v-slot:header="scoped">
            <slot name="header" :scoped="scoped"></slot>
        </template>
        <template v-slot:default="scoped">
            <slot :scoped="scoped"></slot>
        </template>
        
    </el-table-column>
</template>

<script>
export default {
    name: 'CommonTableColumn',
    props: {
        options: {
            type: Object,
            default: () => ({})
        },
    },
    data() {
        return {
        
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
    
    }
}
</script>

<style lang="scss" scoped>

</style>
