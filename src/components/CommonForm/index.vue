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
                v-for="(item, i) in currentOptions"
                :key="i"
                v-if="!item.hidden"
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
            <slot :name="item.beforeSlot" :options="item" :value="params[item.name]"></slot>
            <component
                    :is="element[item.element]"
                    :ref="item.name"
                    :options="item"
                    v-model="params[item.name]"
                    @input="value => $emit('input', { name: item.name, value: value })"
                    @change="value => $emit('change', { name: item.name, value: value })"
                    @blur="value => $emit('blur', { name: item.name, value: value })"
                    @focus="value => $emit('focus', { name: item.name, value: value })"
                    @select="currentOptions => $emit('select', { name: item.name, value: params[item.name], options: currentOptions
                     })"
                    @clear="value => $emit('clear', { name: item.name, value: value })"
                    @expandChange="value => $emit('expandChange', { name: item.name, value: value })"
                    @activeChange="value => $emit('activeChange', { name: item.name, value: value })"
            >
            </component>
            <slot :name="item.afterSlot" :options="item" :value="params[item.name]"></slot>
        </el-form-item>

    </el-form>
</template>

<script>
import * as utils from '@/utils'
import { SUCCESS } from '@/config/httpCode'
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
            default: () => ({})
        },
        // 用于开启表单的联动效果
        linkage: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            currentOptions: {},
            params: {},
            defaultParams: {},
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
            disabledOptions: [],
        }
    },
    computed: {

    },
    watch: {
        params: {
            handler(val) {
                if (this.linkage) {
                    for (let name in val) {
                        this.$emit('input', { name, value: val[name] })
                    }
                }
            },
        },
    },
    created() {
        // this.initParams()
        this.init()
    },
    mounted() {
    },
    methods: {
        // 初始化默认值
        initParams() {
            let params = {}
            this.options.forEach(item => {
                this.$set(this.defaultParams, item.name, this.formData[item.name] || item.defaultValue)
                params[item.name] = this.formData[item.name] || item.defaultValue
            })
            this.$set(this, 'params', params)
        },

        // 初始化获取数据方法
        init() {
            let currentOptions = {}, params = {}

            // 配置项
            this.options.forEach((item, i) => {
                // 判断是否有验证规则(用于样式)
                if (item.rules) {
                    this.rulesFlag = true
                }
                // 存储当前配置项
                currentOptions[item.name] = item

                params[item.name] = this.formData[item.name] || item.defaultValue

                // 默认获取配置项
                if (item.method) {
                    // 开启loading
                    this.$set(this.options[i], 'loading', true)
                    item.method(item.params).then(response => {

                        this.$set(this.options[i], 'options', response)
                        // 关闭loading
                        this.$set(this.options[i], 'loading', false)
                    })
                }

                // 自定义获取配置项
                if (item.customMethod) {
                    // 开启loading
                    this.$set(this.options[i], 'loading', true)
                    item.customMethod.call(item, item).then(response => {
                        this.$set(this.options[i], 'options', response)
                        // 关闭loading
                        this.$set(this.options[i], 'loading', false)
                    })
                }

            })
            this.$set(this, 'params', params)
            this.$set(this, 'currentOptions', currentOptions)
        },

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

        // 获取表单中的值
        getFormData(isDefault) {
            // 是否需要返回默认值中没有用到的值, 默认不返回
            if (isDefault) {
                return Object.assign({}, this.formData, this.params)
            }
            return this.params
        },

        // 修改表单中的值
        changeFormData(data) {
            if (utils.type(data) === 'Object') {
                for (let key in data) {
                    this.$set(this.params, key, data[key])
                }
            }
        },

        // 修改表单配置项
        changeForm(data) {
            if (utils.type(data) === 'Object') {
                for (let key in data) {
                    this.$set(this.currentOptions, key, data[key])
                }
            }
        },

        // 表单验证
        submitForm() {
            let isPass = false
            this.$refs.ruleForm.validate((valid, data) => {

                if (valid) {
                    isPass = true
                } else {

                    let messageArr = Object.values(data).flat()
                    let message = ''
                    messageArr.forEach(item => {
                        message += `<p>${item.message}</p>`
                    })

                    this.$notify({
                        title: '验证失败！',
                        dangerouslyUseHTMLString: true,
                        message,
                        type: 'warning',
                    })
                    isPass = false
                }
            })
            return isPass
        },
    }
}
</script>

<style lang="scss" scoped>

</style>
