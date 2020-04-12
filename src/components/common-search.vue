<template>
    <el-form :model="params" :rules="rules" :inline="true" ref="ruleForm" :label-width="labelWidth + 'px'" class="search-wrap">
        <el-form-item :class="'item-' + item.type" v-for="(item, i) in options" :key="i" :label="item.label" :prop="item.name" >
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
        
        <el-form-item class="search-button">
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
    },
    data() {
        return {
            params: {},
            rules: {},
        }
    },
    computed: {},
    watch: {},
    created() {
        this.init()
    },
    mounted() {
    
    },
    methods: {
        init() {
            this.options.map(async (item, i) => {
                // 获取下拉框的数据
                if (item.type === 'select' && item.method) {
                    // 开启loading
                    this.$set(this.options[i], 'loading', true)
                    await item.method().then(res => {
                        
                        this.$set(this.options[i], 'options', res)
                        // item.options = res
                        // 关闭loading
                        this.$set(this.options[i], 'loading', false)
                    })
                }
                // 默认值处理
                if (item.defaultValue) {
                    this.$set(this.params, item.name, item.defaultValue)
                }
                
                // 获取验证规则
                if (item.rules) {
                    // this.rules[item.name] = item.rules
                    this.$set(this.rules, item.name, item.rules)
                }
            })
        },
        // 重置
        handleReset(name) {
            this.$refs[name].resetFields();
            this.options.map(item => {
                if (item.defaultValue) {
                    this.$set(this.params, item.name, item.defaultValue)
                } else {
                    this.$set(this.params, item.name, undefined)
                }
            })
            
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
    .el-form-item .el-form-item__content {
        flex: 1;
        margin-left: 0;
    }
    .el-form-item .el-form-item__content .el-select,
    .el-form-item .el-form-item__content .el-date-editor {
        width: 100%;
    }
    .el-form-item__error {
        top: 90%;
    }
</style>

<style lang="scss" scoped>
    .search-wrap {
        display: flex;
        flex-wrap: wrap;
        background-color: #fff;
        padding: 20px;
        padding-bottom: 0;
        -webkit-border-radius: 8px;
        -moz-border-radius: 8px;
        border-radius: 8px;
        /*box-shadow: 0 15px 30px rgba(0,0,0, .1);*/
    
        label {
            cursor: pointer;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }
        
        .item-text,
        .item-select,
        .item-date {
            flex: 1;
            min-width: 25%;
            max-width: 25%;
            display: flex;
            height: 36px;
            line-height: 36px;
            margin-bottom: 15px;
            margin-right: 0;
            
            .el-input,
            .el-select {
                flex: 1;
            }
        }
        .item-daterange {
            display: flex;
            flex: 2;
            min-width: 50%;
            max-width: 50%;
            margin-right: 0;
        }
        
        .search-button {
            flex: 1;
            text-align: right;
        }
    }
</style>
