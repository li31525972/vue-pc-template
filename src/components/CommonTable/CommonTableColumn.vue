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
            :minWidth="options.minWidth || minWidth"
            :fixed="options.fixed"
            :renderHeader="options.renderHeader"
            :sortable="options.sortable"
            :sortMethod="options.sortMethod"
            :sortBy="options.sortBy"
            :sortOrders="options.sortOrders"
            :resizable="options.resizable"
            :formatter="options.formatter"
            :showOverflowTooltip="options.showOverflowTooltip"
            :align="options.align || 'center'"
            :headerAlign="options.headerAlign"
            :className="options.className"
            :labelClassName="options.labelClassName"
            :filters="options.filters"
            :filterPlacement="options.filterPlacement"
            :filterMultiple="options.filterMultiple"
            :filterMethod="options.filterMethod"
            :filteredValue="options.filteredValue"
    >
        <template slot-scope="{ row, $index }">
            <slot :name="options.slot" :row="row" :index="$index" :options="options">{{ row[options.prop] }}</slot>
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
            minWidth: 120,
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
