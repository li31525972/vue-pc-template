/**
* @file 搜索组件
* @date 2020-09-16
* @author Yahui Li
*/
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
                :class="['search-item-col', { 'no-rules-item': !rulesFlag} ]"
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
        
        </el-form-item>
        
        <el-form-item class="search-button" v-if="isShowSubmit">
            <el-button type="primary" @click="handleSearch('ruleForm')">搜索</el-button>
            <el-button @click="handleReset('ruleForm')">重置</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
import * as utils from '@/utils'
import { SUCCESSCODE } from '@/config/httpCode'
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
            },
            refs: {},
        }
    },
    computed: {
    
    },
    watch: {
        formData: {
            handler(val) {
                this.params = JSON.parse(JSON.stringify(val))
            },
            immediate: true,
            deep: true,
        }
    },
    created() {
    
    },
    mounted() {
    },
    methods: {
        // 初始化方法
        init() {
            // 获取表格数据
            this.options.forEach((item, i) => {
                
                // 默认获取配置项
                if (item.options && item.method) {
                    // 开启loading
                    this.$set(this.options[i], 'loading', true)
                    item.method(item.params).then(response => {
                        if (response[SUCCESSCODE.key] === SUCCESSCODE.value) {
                            let data = response.data || []
                            this.$set(this.options[i], 'options', data)
                            // 关闭loading
                            this.$set(this.options[i], 'loading', false)
                        }
                    })
                }
                
                // 自定义获取配置项
                
            })
            
            
            // this.options.map(async (item, i) => {
            //     // 获取下拉框的数据
            //     if (item.type === 'select' && item.method) {
            //         // 开启loading
            //         this.$set(this.options[i], 'loading', true)
            //         await item.method().then(res => {
            //
            //             this.$set(this.options[i], 'options', res ? res : [])
            //             // item.options = res
            //             // 关闭loading
            //             this.$set(this.options[i], 'loading', false)
            //         })
            //     }
            // })
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
        },
        // 修改表单中的值
        changeFormData(data) {
            if (utils.type(data) === 'Object') {
                for (let key in data) {
                    this.$set(this.params, key, data[key])
                }
            }
        },
    }
}
</script>

<style>



</style>

<style lang="scss" scoped>

</style>
