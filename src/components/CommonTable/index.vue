<template>
    <div :class="['common-table', {
    'page-fixed': isFixed,
    'table-flex': isFlex,
    }]">
        <!--表格配置项按钮-->
        <!--<span v-if="setting" :class="['el-icon-setting', 'table-setting']" @click="isShowSetting = !isShowSetting"></span>-->

        <!--<div v-if="isShowSetting" :class="['setting-wrap']">-->
        <!--&lt;!&ndash;所有列表配置项&ndash;&gt;-->
        <!--<el-checkbox-group v-model="settingList">-->
        <!--<template v-for="(item, i) in options">-->
        <!--<el-checkbox :key="i" :label="item.label"></el-checkbox>-->
        <!--</template>-->

        <!--</el-checkbox-group>-->
        <!--</div>-->

        <el-table
                ref="commonTable"
                :data="data"
                :border="border"
                @select="handleSelection"
                :height="isFlex ? tableHeight : null"
                :style="'width:' + width">

            <el-table-column
                    v-if="isSelection || isRadio"
                    type="selection"
                    fixed
                    align="center"
                    width="40">
            </el-table-column>
            <el-table-column
                    v-if="isIndex"
                    label="序号"
                    type="index"
                    fixed
                    :index="indexMethod"
                    align="center"
                    width="60">
            </el-table-column>

            <template v-for="item in options">

                <el-table-column
                        :key="item.label"
                        :prop="item.prop"
                        :label="item.label"
                        :fixed="item.fixed"
                        :show-overflow-tooltip="tooltip"
                        :align="item.align || 'center'"
                        :min-width="item.width || '120'">

                    <template slot-scope="{ row, $index }">

                        <div :class="cellClassMethod(item, row, $index)" @click="onTdClick(item, row, $index)">
                            <!--时间格式化-->
                            <span v-if="item.type === 'date'">{{ row[item.prop] | dateformat(item.dateformat || 'YYYY-MM-DD') }}</span>

                            <!--需要格式化的-->
                            <span v-else-if="item.formatter">{{ item.formatter(row) }}</span>

                            <!--需要插槽-->
                            <slot v-else-if="item.slot" :slot="item.slot"></slot>
                            <!--不需要处理的-->
                            <span v-else>{{ row[item.prop] }}</span>
                        </div>

                    </template>
                </el-table-column>

            </template>

            <!--操作列-->
            <el-table-column
                    v-if="operArr.length"
                    :label="btnConfig.label || '操作'"
                    :fixed="btnConfig.fixed || 'right'"
                    :align="btnConfig.align || 'center'"
                    :width="operWidth || 100"
            >
                <template slot-scope="{ row, $index }">
                    <CommonBtnGroup ref="btnGroup" :options="operArr"
                                    @handleAction="(name) => $emit('handleOperClick', name, row, $index )"></CommonBtnGroup>
                </template>
            </el-table-column>

        </el-table>

        <!--分页组件-->
        <div class="common-page">
            <el-pagination
                    v-if="isPagination"
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage"
                    :page-sizes="PAGESIZES"
                    :page-size="currentSize"
                    :layout="LAYOUT"
                    :total="total || data.length">
            </el-pagination>
        </div>
    </div>
</template>

<script>
import { CommonBtnGroup } from '@/components'
import { PAGESIZES, LAYOUT } from '@/config/constant'

export default {
    props: {
        // 表格配置项
        options: {
            type: Array,
            default: () => []
        },
        // 表格配置项是否可修改
        setting: {
            type: Boolean,
            default: true,
        },
        // 表格数据
        data: {
            type: Array,
            default: () => []
        },
        // 表格宽度
        width: {
            type: String,
            default: '100%'
        },
        // 表格自定义高度
        height: {
            type: Number,
            default: 0
        },
        isFlex: {
            type: Boolean,
            default: false,
        },
        // 是否显示边框
        border: {
            type: Boolean,
            default: true
        },
        // 是否当内容过长被隐藏显示tooltip
        tooltip: {
            type: Boolean,
            default: true,
        },
        // 是否显示多选框
        isSelection: {
            type: Boolean,
            default: false
        },
        // 是否单选
        isRadio: {
            type: Boolean,
            default: false,
        },
        // 是否显示序列号
        isIndex: {
            type: Boolean,
            default: false,
        },
        // 操作列按钮配置
        operArr: {
            type: Array,
            default: () => []
        },
        // 操作列宽度
        operWidth: {
            type: Number,
        },
        // 操作类配置
        btnConfig: {
            type: Object,
            default: () => new Object()
        },
        // 是否显示表格分页
        isPagination: {
            type: Boolean,
            default: true
        },
        // 当前页码
        page: {
            type: Number,
            default: 1
        },
        // 当前页的条数
        size: {
            type: Number,
            default: 10,
        },
        // 表格数据总条数
        total: {
            type: Number,
            default: 0,
        }

    },
    components: {
        CommonBtnGroup,
    },
    data() {
        return {
            PAGESIZES,
            LAYOUT,

            currentPage: 1, // 当前页
            currentSize: 10, // 当前页条数

            isShowSetting: false, // 是否显示表格配置项
            settingList: [], // 表格配置项
            settingCheckList: [], // 表格选中配置项
            isFixed: true,
        }
    },
    computed: {
        // 表格配置项
        tableOptions() {
            return this.options.filter(item => this.settingList.includes(item.label))
        },
        // 表格高度
        tableHeight() {
            let height = 0
            if (this.height) {
                height = this.height
            } else if (this.isFlex) {
                let pagination = this.isPagination ? '52px' : '0px'
                height = `calc(100% - ${ pagination })`
            }
            console.log(height);
            return height
        },
        // 表格操作列默认宽度
        // operArrayLength() {
        //     let width = 0
        //     this.operArr.forEach(item => {
        //         let btnWidth = item.label && item.label.length * 15 || 30
        //         if (item.type && item.type !== 'text') {
        //
        //             width += 42 + btnWidth
        //
        //         } else {
        //             width += 10 + btnWidth
        //         }
        //     })
        //     return width
        // },
    },
    watch: {
        page: {
            handler() {
                this.currentPage = this.page
            },
            deep: true
        },
        size: {
            handler() {
                this.currentSize = this.size
            },
            deep: true
        },
        data: {
            deep: true
        },
        options: {
            handler() {
                this.options.forEach(item => {
                    this.settingList.push(item.label)
                })
            },
            deep: true
        }
    },
    created() {
        this.options.forEach(item => {
            this.settingList.push(item.label)
        })
    },
    mounted() {

    },
    methods: {
        // 表格序号
        indexMethod(index) {
            return (this.page - 1) * this.size + index + 1
        },
        // 单元格样式处理
        cellClassMethod(item, row, index) {
            let data = []
            // 当前列能够点击
            if (item.click) {
                // 单元格增加一个鼠标样式
                data.push('is-click')
                // 如果class为字符串，那么直接加到类名
                if (typeof item.class === 'string') {
                    data.push(item.class)
                    // 如果是个函数
                } else if (typeof item.class === 'function') {
                    data.push(item.class(row, index))
                }
            } else {
                // 如果不能点击
                // 如果class为字符串，那么直接加到类名
                if (typeof item.class === 'string') {
                    data.push(item.class)
                    // 如果是个函数
                } else if (typeof item.class === 'function') {
                    data.push(item.class(row, index))
                }
            }

            return data
        },

        // 多选框发生改变
        handleSelection(selection) {
            if (this.isRadio && selection.length > 1) {
                this.$refs.commonTable.clearSelection()
                this.$refs.commonTable.toggleRowSelection(selection.pop())
            }
            this.$emit('handleSelection', selection)
        },

        // 点击单元格
        onTdClick(item, row, index) {
            if (item.click) {
                this.$emit('onTdClick', row, index)
            } else {
                return false
            }
        },
        // 当前页条数改变
        handleSizeChange(val) {
            this.$emit('onPageChange', { page: this.currentPage, size: val })
        },
        // 页码改变
        handleCurrentChange(val) {
            this.$emit('onPageChange', { page: val, size: this.currentSize })
        },
    }
}
</script>
<style>
    .common-table .el-table thead th {
        background-color: #e2e6ea;
    }
</style>
<style lang="scss" scoped>
    @import '~@/assets/css/base.scss';

    .common-table {
        flex: 1;
        position: relative;

        /*表格设置按钮样式*/
        .table-setting {
            position: absolute;
            right: 0;
            top: -40px;
            width: 40px;
            height: 40px;
            line-height: 40px;
            font-size: 18px;
            text-align: center;
            cursor: pointer;
            &:hover {
                color: $themeColor;
            }
        }

        /*表格配置项盒子样式*/
        .setting-wrap {
            margin-bottom: 10px;
            padding: 10px;
            background-color: #fff;
            -webkit-border-radius: $boxRadius;
            -moz-border-radius: $boxRadius;
            border-radius: $boxRadius;
            transition: all 1s;

            .el-checkbox {
                height: 30px;
                line-height: 30px;
            }
        }
        /*表格有点击事件时*/
        .is-click {
            cursor: pointer;
        }

        & > .el-table {
            position: absolute;
        }

        .common-page {
            /*position: absolute;*/
            /*bottom: 0;*/
            /*right: 0;*/
            margin-top: 10px;
            height: 35px;

            .el-pagination {
                float: right;
            }
        }

    }

    .table-flex {
        position: relative;
        & > .el-table {
            position: absolute;
        }
        .common-page {
            position: absolute;
            bottom: 0;
            right: 0;
        }
    }
</style>
