<template>
    <el-form
            :model="params"
            :rules="rules"
            ref="ruleForm"
            :label-width="labelWidth + 'px'"
            class="search-wrap">
        <el-form-item :class="['search-item', { 'no-rules-item': !rulesFlag} ]" :style="styleObject(item)" v-for="(item, i) in options" :key="i" :label="item.label" :prop="item.name" >
            <el-input v-if="item.type === 'text' || !item.type"
                      v-model="params[item.name]"
                      :clearable="item.clear"
                      @input="value => $emit('inputChange', { name: item.name, value })"
                      :placeholder="'请输入'+ item.label"></el-input>

            <!--下拉框-->
            <el-select v-else-if="item.type === 'select'"
                       v-model="params[item.name]"
                       @change="value => $emit('selectChange', { name: item.name, value })"
                       :filterable="item.filter"
                       :multiple="item.multiple"
                       :clearable="item.clear"
                       :loading="item.loading || false"
                       :placeholder="'请选择' + item.label">
                <el-option
                v-for="item1 in item.options"
                :key="item.optionsValue ? item1[item.optionsValue] : item1.value"
                :label="item.optionsLabel ? item1[item.optionsLabel] : item1.label"
                :value="item.optionsValue ? item1[item.optionsValue] : item1.value">
                </el-option>
            </el-select>

            <!--date时间-->
            <el-date-picker
                    v-else-if="item.type === 'date'"
                    v-model="params[item.name]"
                    type="date"
                    :clearable="item.clear"
                    :format="item.format ? item.format : 'yyyy-MM-dd'"
                    :value-format="item.valueFormat ? item.valueFormat : 'yyyy-MM-dd'"
                    @change="value => $emit('dateChange', { name: item.name, value })"
                    :placeholder="'请选择' + item.label">
            </el-date-picker>

            <!--日期范围-->
            <el-date-picker
                    v-else-if="item.type === 'daterange'"
                    v-model="params[item.name]"
                    :format="item.format ? item.format : 'yyyy-MM-dd'"
                    :value-format="item.valueFormat ? item.valueFormat : 'yyyy-MM-dd'"
                    type="daterange"
                    :clearable="item.clear"
                    @change="value => $emit('dateChange', { name: item.name, value })"
                    :range-separator="item.separator ? item.separator : '-'"
                    :start-placeholder="item.placeholder ? item.placeholder[0] : '开始日期'"
                    :end-placeholder="item.placeholder ? item.placeholder[1] : '结束日期'">
            </el-date-picker>

        </el-form-item>

        <el-form-item class="search-button" v-if="isShowSubmit">
            <el-button type="primary" @click="handleSearch('ruleForm')">搜索</el-button>
            <el-button @click="handleReset('ruleForm')">重置</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
export default {
    props: {
        // 搜索组件配置
        options: {
            type: Array,
            default: () => []
        },
        // 表单label宽度
        labelWidth: {
            type: [Number, String],
            default: 100,
        },
        // 每行显示几个
        flex: {
            type: [Number, String],
            default: 4,
        },
        // 表单默认数据
        formData: {
            type: Object,
            default: () => {}
        },
        // 是否显示提交按钮
        isShowSubmit: {
            type: Boolean,
            default: true,
        },
    },
    data() {
        return {
            params: {},
            rules: {},
            rulesFlag: false,
        }
    },
    computed: {
    
    },
    watch: {
        formData: {
            handler(val) {
                this.params = { ...val }
            },
            deep: true,
        }
    },
    created() {
        
        this.params = { ...this.formData }
        this.init()
    },
    mounted() {

    },
    methods: {
        // 计算宽度
        styleObject(row) {
            let flex = Number(this.flex)
            let width = 100 / flex * (row.flex ? Number(row.flex) : 1) + '%'
            return {
                width,
                minWidth: width,
                maxWidth: width,
            }

        },
        // 初始化方法
        init() {
            this.options.map(async (item, i) => {
                // 获取下拉框的数据
                if (item.type === 'select' && item.method) {
                    // 开启loading
                    this.$set(this.options[i], 'loading', true)
                    await item.method().then(res => {

                        this.$set(this.options[i], 'options', res ? res : [])
                        // item.options = res
                        // 关闭loading
                        this.$set(this.options[i], 'loading', false)
                    })
                }

                // 获取验证规则
                if (item.rules) {
                    this.rulesFlag = true
                    // this.rules[item.name] = item.rules
                    this.$set(this.rules, item.name, item.rules)
                }
            })
        },
        // 重置
        handleReset(name) {
            this.$refs[name].resetFields();
            this.params = { ...this.formData }

            this.$emit('handleReset', this.params)
        },
        // 点击搜索
        handleSearch(name) {
            this.$refs[name].validate(valid => {
                if (valid) {
                    this.$emit('handleSearch', this.params)
                } else {
                    return false
                }
            })
        }
    }
}
</script>

<style>
    .search-item .el-form-item__content {
        display: flex;
    }

    .search-item label {
        cursor: pointer;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .el-form-item__content .el-input,
    .el-form-item__content .el-select,
    .el-form-item__content .el-date-editor {
        width: 100%;
    }

</style>

<style lang="scss" scoped>
    .search-wrap {
        display: flex;
        flex-wrap: wrap;
        padding: 10px;
        padding-bottom: 0;
        .no-rules-item {
            margin-bottom: 10px;
        }
        .el-form-item {
            flex: 1;
        }
        .search-button {
            text-align: right;
        }
    }
    .el-col {
        background-color: red;
    }
</style>
