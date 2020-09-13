<template>
    <el-form
            ref="ruleForm"
            :model="params"
            :rules="rules"
            :inline="inline"
            :labelPosition="labelPosition"
            :labelSuffix="labelSuffix"
            :hideRequiredAsterisk="hideRequiredAsterisk"
            :showMessage="showMessage"
            :inlineMessage="inlineMessage"
            :statusIcon="statusIcon"
            :validateOnRuleChange="validateOnRuleChange"
            :size="size"
            :disabled="disabled"
            :labelWidth="labelWidth + 'px'"
            class="search-wrap">
        <el-form-item
                v-for="(item, i) in options"
                :key="i"
                :class="['search-item', { 'no-rules-item': !rulesFlag} ]"
                :style="styleObject(item)"
                :prop="item.name"
                :label="item.label"
                :labelWidth="item.labelWidth"
                :required="item.required"
                :rules="item.rules"
                :error="item.error"
                :showMessage="item.showMessage"
                :inlineMessage="item.inlineMessage"
                :size="item.size"
        >
            <slot name="label"></slot>
            <component
                    :is="element[item.element]"
                    :ref="item.name"
                    :options="item"
                    v-model="params[item.name]"
                    @input="value => $emit('input', { name: item.name, value: value })"
                    @change="value => $emit('change', { name: item.name, value: value })"
                    @blur="value => $emit('blur', { name: item.name, value: value })"
                    @focus="value => $emit('focus', { name: item.name, value: value })"
                    @select="value => $emit('select', { name: item.name, value: value })"
                    @clear="value => $emit('clear', { name: item.name, value: value })"
                    @expandChange="value => $emit('expandChange', { name: item.name, value: value })"
                    @activeChange="value => $emit('activeChange', { name: item.name, value: value })"
            >
            </component>
            <!--<el-input v-if="item.type === 'text' || !item.type"-->
                      <!--v-model="params[item.name]"-->
                      <!--:clearable="item.clear"-->
                      <!--@input="value => $emit('inputChange', { name: item.name, value })"-->
                      <!--:placeholder="'请输入'+ item.label"></el-input>-->

            <!--&lt;!&ndash;下拉框&ndash;&gt;-->
            <!--<el-select v-else-if="item.type === 'select'"-->
                       <!--v-model="params[item.name]"-->
                       <!--@change="value => $emit('selectChange', { name: item.name, value })"-->
                       <!--:filterable="item.filter"-->
                       <!--:multiple="item.multiple"-->
                       <!--:clearable="item.clear"-->
                       <!--:loading="item.loading || false"-->
                       <!--:placeholder="'请选择' + item.label">-->
                <!--<el-option-->
                <!--v-for="item1 in item.options"-->
                <!--:key="item.optionsValue ? item1[item.optionsValue] : item1.value"-->
                <!--:label="item.optionsLabel ? item1[item.optionsLabel] : item1.label"-->
                <!--:value="item.optionsValue ? item1[item.optionsValue] : item1.value">-->
                <!--</el-option>-->
            <!--</el-select>-->

            <!--&lt;!&ndash;date时间&ndash;&gt;-->
            <!--<el-date-picker-->
                    <!--v-else-if="item.type === 'date'"-->
                    <!--v-model="params[item.name]"-->
                    <!--type="date"-->
                    <!--:clearable="item.clear"-->
                    <!--:format="item.format ? item.format : 'yyyy-MM-dd'"-->
                    <!--:value-format="item.valueFormat ? item.valueFormat : 'yyyy-MM-dd'"-->
                    <!--@change="value => $emit('dateChange', { name: item.name, value })"-->
                    <!--:placeholder="'请选择' + item.label">-->
            <!--</el-date-picker>-->

            <!--&lt;!&ndash;日期范围&ndash;&gt;-->
            <!--<el-date-picker-->
                    <!--v-else-if="item.type === 'daterange'"-->
                    <!--v-model="params[item.name]"-->
                    <!--:format="item.format ? item.format : 'yyyy-MM-dd'"-->
                    <!--:value-format="item.valueFormat ? item.valueFormat : 'yyyy-MM-dd'"-->
                    <!--type="daterange"-->
                    <!--:clearable="item.clear"-->
                    <!--@change="value => $emit('dateChange', { name: item.name, value })"-->
                    <!--:range-separator="item.separator ? item.separator : '-'"-->
                    <!--:start-placeholder="item.placeholder ? item.placeholder[0] : '开始日期'"-->
                    <!--:end-placeholder="item.placeholder ? item.placeholder[1] : '结束日期'">-->
            <!--</el-date-picker>-->

        </el-form-item>

        <el-form-item class="search-button" v-if="isShowSubmit">
            <el-button type="primary" @click="handleSearch('ruleForm')">搜索</el-button>
            <el-button @click="handleReset('ruleForm')">重置</el-button>
        </el-form-item>
    </el-form>
</template>

<script>

const NmAutocomplete = () =>  import('@/components/Base/Autocomplete')
const NmCascader = () =>  import('@/components/Base/Cascader')
const NmColorPicker = () =>  import('@/components/Base/ColorPicker')
const NmDatePicker = () =>  import('@/components/Base/DatePicker')
const NmInput = () =>  import('@/components/Base/Input')
const NmInputNumber = () =>  import('@/components/Base/InputNumber')
const NmRadio = () =>  import('@/components/Base/Radio')
const NmRadioButton = () =>  import('@/components/Base/RadioButton')
const NmRate = () =>  import('@/components/Base/Rate')
const NmSelect = () =>  import('@/components/Base/Select')
const NmSlider = () =>  import('@/components/Base/Slider')
const NmSwitch = () =>  import('@/components/Base/Switch')
const NmTimePicker = () =>  import('@/components/Base/TimePicker')
const NmTimeSelect = () =>  import('@/components/Base/TimeSelect')
const NmUpload = () =>  import('@/components/Base/Upload')

export default {
    components: {
        NmAutocomplete,
        NmCascader,
        NmColorPicker,
        NmDatePicker,
        NmInput,
        NmInputNumber,
        NmRadio,
        NmRadioButton,
        NmRate,
        NmSelect,
        NmSlider,
        NmSwitch,
        NmTimePicker,
        NmTimeSelect,
        NmUpload,
    },
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
        // 行内表单模式
        inline: {
            type: Boolean,
            default: false,
        },
        // 表单域标签的位置，如果值为 left 或者 right 时，则需要设置 label-width
        labelPosition: {
            type: String,
            default: 'right',
        },
        // 表单域标签的后缀
        labelSuffix: String,
        // 是否显示必填字段的标签旁边的红色星号
        hideRequiredAsterisk: {
            type: Boolean,
            default: false,
        },
        // 是否显示校验错误信息
        showMessage: {
            type: Boolean,
            default: true,
        },
        // 是否以行内形式展示校验信息
        inlineMessage: {
            type: Boolean,
            default: false,
        },
        // 是否在输入框中显示校验结果反馈图标
        statusIcon: {
            type: Boolean,
            default: false,
        },
        // 是否在 rules 属性改变后立即触发一次验证
        validateOnRuleChange: {
            type: Boolean,
            default: true,
        },
        // 用于控制该表单内组件的尺寸
        size: String,
        // 是否禁用该表单内的所有组件。若设置为 true，则表单内组件上的 disabled 属性不再生效
        disabled: {
            type: Boolean,
            default: false,
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
            element: {
                input: 'NmInput',
                cascader: 'NmCascader',
                colorPicker: 'NmColorPicker',
                datePicker: 'NmDatePicker',
                autocomplete: 'NmAutocomplete',
                inputNumber: 'NmInputNumber',
                radio: 'NmRadio',
                radioButton: 'NmRadioButton',
                rate: 'NmRate',
                select: 'NmSelect',
                slider: 'NmSlider',
                switch: 'NmSwitch',
                timePicker: 'NmTimePicker',
                timeSelect: 'NmTimeSelect',
                upload: 'NmUpload',
            }
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
        // this.init()
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
