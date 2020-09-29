/**
* @file 表格组件
* @date 2020-09-22
* @author Yahui Li
*/
<template>
    <div class="nm-common-table" :class="{
                    'is-flex': isTableFlex && !height && !maxHeight,
                    'is-page': isShowPage
                }">
        <el-table
                ref="commonTable"
                :data="data"
                :height="height"
                :maxHeight="maxHeight"
                :stripe="stripe"
                :border="border"
                :fit="fit"
                :showHeader="showHeader"
                :highlightCurrentRow="highlightCurrentRow"
                :currentRowKey="currentRowKey"
                :rowClassName="rowClassName"
                :rowStyle="rowStyle"
                :cellClassName="cellClassName"
                :cellStyle="cellStyle"
                :headerRowClassName="headerRowClassName"
                :headerRowStyle="headerRowStyle"
                :headerCellClassName="headerCellClassName"
                :headerCellStyle="headerCellStyle"
                :rowKey="rowKey"
                :emptyText="emptyText"
                :defaultExpandAll="defaultExpandAll"
                :expandRowKeys="expandRowKeys"
                :defaultSort="defaultSort"
                :tooltipEffect="tooltipEffect"
                :showSummary="showSummary"
                :sumText="sumText"
                :summaryMethod="summaryMethod"
                :spanMethod="spanMethod"
                :selectOnIndeterminate="selectOnIndeterminate"
                :indent="indent"
                :lazy="lazy"
                :load="load"
                :treeProps="treeProps"
                style="width: 100%"
                @select="(selection, row) => $emit('select', selection, row)"
                @selectAll="(selection) => $emit('selectAll', selection)"
                @selectionChange="(selection) => $emit('selectionChange', selection)"
                @cellMouseEnter="(row, column, cell, event) => $emit('cellMouseEnter', row, column, cell, event)"
                @cellMouseLeave="(row, column, cell, event) => $emit('cellMouseEnter', row, column, cell, event)"
                @cellClick="(row, column, cell, event) => $emit('cellClick', row, column, cell, event)"
                @cellDblclick="(row, column, cell, event) => $emit('cellDblclick', row, column, cell, event)"
                @rowClick="(row, column, event) => $emit('rowClick', row, column, event)"
                @rowContextmenu="(row, column, event) => $emit('rowContextmenu', row, column, event)"
                @rowDblclick="(row, column, event) => $emit('rowDblclick', row, column, event)"
                @headerClick="(column, event) => $emit('headerClick', column, event)"
                @headerContextmenu="(column, event) => $emit('headerContextmenu', column, event)"
                @sortChange="props => $emit('sortChange', props)"
                @filterChange="props => $emit('filterChange', props)"
                @currentChange="(currentRow, oldCurrentRow) => $emit('currentChange', currentRow, oldCurrentRow)"
                @headerDragend="(newWidth, oldWidth, column, event) => $emit('headerDragend', newWidth, oldWidth, column, event)"
                @expandChange="(row, expandedRows) => $emit('expandChange', row, expandedRows)"
        >
            <el-table-column
                    v-if="isShowSelection"
                    fixed
                    type="selection"
                    align="center"
                    width="50">
            </el-table-column>

            <CommonTableColumn
                    v-for="item in options"
                    :key="item.prop"
                    :options="item"
            />
            <template v-slot:append="scoped">
                <slot name="append" :scoped="scoped"></slot>
            </template>

            <el-table-column
                    v-if="btnOptions"
                    fixed="right"
                    align="center"
                    label="操作"
                    :width="currentOperateWidth"
            >
                <template v-slot:default="{ row, $index }">
                    <CommonButton
                        v-for="item in btnOptions"
                        :key="item.label"
                        :label="item.label"
                        :disabled="onBtnDisabled(row, $index, item)"
                        type="text"
                        @handleClick="event => $emit('handleBtnClick', { row, $index, options: item })"
                    />
                </template>
            </el-table-column>
        </el-table>

        <div class="nm-common-pagination" v-if="isShowPage">
            <el-pagination
                    @size-change="onSizeChange"
                    @current-change="onPageChange"
                    :current-page="page"
                    :page-sizes="PAGESIZES"
                    :page-size="size"
                    :layout="LAYOUT"
                    :total="total">
            </el-pagination>
        </div>
    </div>
</template>

<script>
import CommonButton from '@/components/CommonButton'
import CommonTableColumn from './CommonTableColumn'
import { PAGESIZES, LAYOUT, SIZE, PAGE } from '@/config/constant'
import { mapGetters } from 'vuex'

export default {
    name: 'CommonTable',
    components: {
        CommonTableColumn,
        CommonButton,
    },
    props: {
        // 表格显示的数据
        data: {
            type: Array,
            default: () => []
        },
        // 表格行配置项
        options: {
            type: Array,
            default: () => [],
        },
        btnOptions: Array,
        // Table 的高度，默认为自动高度。如果 height 为 number 类型，单位 px；如果 height 为 string 类型，则这个高度会设置为 Table 的 style.height 的值，Table 的高度会受控于外部样式。
        height: [String, Number],
        // Table 的最大高度。合法的值为数字或者单位为 px 的高度。
        maxHeight: [String, Number],
        // 是否为斑马纹 table
        stripe: {
            type: Boolean,
            default: false,
        },
        // 是否带有纵向边框
        border: {
            type: Boolean,
            default: true,
        },
        // 列的宽度是否自撑开
        fit: {
            type: Boolean,
            default: true,
        },
        // 是否显示表头
        showHeader: {
            type: Boolean,
            default: true,
        },
        // 是否要高亮当前行
        highlightCurrentRow: {
            type: Boolean,
            default: false,
        },
        // 当前行的 key，只写属性
        currentRowKey: [String, Number],
        // 行的 className 的回调方法，也可以使用字符串为所有行设置一个固定的 className。
        rowClassName: Function,
        // 行的 style 的回调方法，也可以使用一个固定的 Object 为所有行设置一样的 Style。
        rowStyle: Function,
        // 单元格的 className 的回调方法，也可以使用字符串为所有单元格设置一个固定的 className。
        cellClassName: Function,
        // 单元格的 style 的回调方法，也可以使用一个固定的 Object 为所有单元格设置一样的 Style。
        cellStyle: Function,
        // 表头行的 className 的回调方法，也可以使用字符串为所有表头行设置一个固定的 className。
        headerRowClassName: Function,
        // 表头行的 style 的回调方法，也可以使用一个固定的 Object 为所有表头行设置一样的 Style。
        headerRowStyle: Function,
        // 表头单元格的 className 的回调方法，也可以使用字符串为所有表头单元格设置一个固定的 className。
        headerCellClassName: Function,
        // 表头单元格的 style 的回调方法，也可以使用一个固定的 Object 为所有表头单元格设置一样的 Style。
        headerCellStyle: Function,
        // 行数据的 Key，用来优化 Table 的渲染；在使用 reserve-selection 功能与显示树形数据时，该属性是必填的。类型为 String 时，支持多层访问：user.info.id，但不支持 user.info[0].id，此种情况请使用 Function。
        rowKey: [String, Function],
        // 空数据时显示的文本内容，也可以通过 slot="empty" 设置
        emptyText: String,
        // 是否默认展开所有行，当 Table 包含展开行存在或者为树形表格时有效
        defaultExpandAll: {
            type: Boolean,
            default: false,
        },
        // 可以通过该属性设置 Table 目前的展开行，需要设置 row-key 属性才能使用，该属性为展开行的 keys 数组。
        expandRowKeys: Array,
        // 默认的排序列的 prop 和顺序。它的prop属性指定默认的排序的列，order指定默认排序的顺序
        defaultSort: {
            type: Object,
            default: () => ({})
        },
        // tooltip effect 属性
        tooltipEffect: {
            type: String,
            default: 'dark',
        },
        // 是否在表尾显示合计行
        showSummary: {
            type: Boolean,
            default: false,
        },
        // 合计行第一列的文本
        sumText: String,
        // 自定义的合计计算方法
        summaryMethod: Function,
        // 合并行或列的计算方法
        spanMethod: Function,
        // 在多选表格中，当仅有部分行被选中时，点击表头的多选框时的行为。若为 true，则选中所有行；若为 false，则取消选择所有行
        selectOnIndeterminate: {
            type: Boolean,
            default: true,
        },
        // 展示树形数据时，树节点的缩进
        indent: Number,
        // 是否懒加载子节点数据
        lazy: Boolean,
        // 加载子节点数据的函数，lazy 为 true 时生效，函数第二个参数包含了节点的层级信息
        load: Function,
        // 渲染嵌套数据的配置选项
        treeProps: Object,
        // 当前页
        page: {
            type: Number,
            default: PAGE,
        },
        // 当前页条数
        size: {
            type: Number,
            default: SIZE,
        },
        // 总条数
        total: {
            type: Number,
            default: 0,
        },
        // 是否显示分页
        isShowPage: {
            type: Boolean,
            default: true,
        },
        // 是否显示多选框
        isShowSelection: {
            type: Boolean,
            default: true,
        },
        // 表格操作列宽度
        operateWidth: Number,
    },
    data() {
        return {
            PAGESIZES,
            LAYOUT,
        }
    },
    computed: {
        ...mapGetters({
            isTableFlex: 'isTableFlex',
        }),

        currentOperateWidth() {
            let width = 0
            if (this.operateWidth) {
                width = this.operateWidth
            }
            this.btnOptions.forEach(item => {
                if (item.label) {
                    width += item.label.length * 25
                }
                if (item.icon) {
                    width += 20
                }
            })

            return width
        },
    },
    watch: {},
    created() {

    },
    mounted() {

    },
    methods: {
        // 用于多选表格，清空用户的选择
        clearSelection() {
            this.$refs.commonTable.clearSelection()
        },
        // 用于多选表格，切换某一行的选中状态，如果使用了第二个参数，则是设置这一行选中与否（selected 为 true 则选中）
        toggleRowSelection(row, selected) {
            this.$refs.commonTable.toggleRowSelection(row, selected)
        },
        // 用于多选表格，切换所有行的选中状态
        toggleAllSelection() {
            this.$refs.commonTable.toggleAllSelection()
        },
        // 用于可展开表格与树形表格，切换某一行的展开状态，如果使用了第二个参数，则是设置这一行展开与否（expanded 为 true 则展开）
        toggleRowExpansion(row, expanded) {
            this.$refs.commonTable.toggleRowExpansion(row, expanded)
        },
        // 用于单选表格，设定某一行为选中行，如果调用时不加参数，则会取消目前高亮行的选中状态。
        setCurrentRow(row) {
            this.$refs.commonTable.setCurrentRow(row)
        },
        // 用于清空排序条件，数据会恢复成未排序的状态
        clearSort() {
            this.$refs.commonTable.clearSort()
        },
        // 不传入参数时用于清空所有过滤条件，数据会恢复成未过滤的状态，也可传入由columnKey组成的数组以清除指定列的过滤条件
        clearFilter(columnKey) {
            this.$refs.commonTable.clearFilter(columnKey)
        },
        // 对 Table 进行重新布局。当 Table 或其祖先元素由隐藏切换为显示时，可能需要调用此方法
        doLayout() {
            this.$refs.commonTable.doLayout()
        },
        // 手动对 Table 进行排序。参数prop属性指定排序列，order指定排序顺序。
        sort(row, expanded) {
            this.$refs.commonTable.sort(row, expanded)
        },


        // 分页改变
        onSizeChange(size) {
            this.$emit('onPageChange', { page: this.page, size })
        },
        onPageChange(page) {
            this.$emit('onPageChange', { page, size: this.size })
        },

        // 表格按钮禁用
        onBtnDisabled(row, index, options) {
            if (typeof options.disabled === 'boolean') {
                return options.disabled
            } else if (typeof options.disabled === 'function') {
                return options.disabled(row, index)
            }
            return false
        },
    }
}
</script>

<style lang="scss" scoped>

</style>
