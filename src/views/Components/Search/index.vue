<template>
    <div>
        <CommonForm
                :options="searchOptions"
                ref="form"
                :formData="searchParams"
                @change="onChange"
                :labelWidth="80"
                :flex="4"
                :linkage="true"
                @handleSearch="handleSearch"
                @input="onSearchSelect"
        >
            <template v-slot:name="{ options, value }">
                <el-button @click="handleClickName(options, value)">{{ options.label }}</el-button>
            </template>
        </CommonForm>
    </div>
</template>

<script>
import { CommonSearch, CommonForm } from '@/components'
import { search, table } from '@/mixins'
import * as api from '@/api/test'

export default {
    name: 'search',
    mixins: [search, table],
    components: {
        CommonSearch,
        CommonForm,
    },
    data() {
        return {
            searchOptions: [
                {
                    label: '姓名',
                    name: 'name',
                    element: 'input',
                    clearable: true,
                    rules: [],
                    defaultValue: '小明',
                    afterSlot: 'name',
                    // rules: [
                    //     {
                    //         required: true,
                    //         message: '请输入姓名',
                    //         trigger: 'blur'
                    //     }
                    // ]
                },
                {
                    label: '年龄',
                    name: 'age',
                    element: 'datePicker',
                },
                {
                    label: '姓名1',
                    name: 'name1',
                    options: [],
                    element: 'autocomplete',
                    fetchSuggestions(str, callback) {
                        console.log(str, this);
                    },
                }, {
                    label: '姓名2',
                    name: 'name2',
                    element: 'timeSelect',
                }, {
                    label: '姓名3',
                    name: 'name3',
                    element: 'input',
                },
                // {
                //     label: '姓名4',
                //     name: 'name4',
                //     type: 'text',
                // },
                // {
                //     label: '年龄1',
                //     name: 'age1',
                //     defaultValue: '18',
                //     type: 'text',
                // },
                {
                    label: '状态',
                    name: 'status',
                    element: 'select',
                    method: api.getStatus,
                    params: '63',
                    afterSlot: 'name',
                    props: {
                        label: 'dropDownValue',
                        value: 'dropDownKey',
                    },
                },
                // {
                //     label: '开始时间',
                //     name: 'date',
                //     type: 'date',
                //     clear: true,
                // },
                {
                    label: '时间',
                    name: 'daterange',
                    element: 'datePicker',
                    flex: 1,
                    clear: true,
                }
            ],
            searchParams: {
                name: '张三',
                age: 18,
                status: '5',
            },
        }
    },
    computed: {},
    watch: {},
    created() {
    
    },
    mounted() {
        // setTimeout(() => {
        //     // this.$refs.form.changeFormData({ status: ["110000", "110100", "110101"] })
        //     this.$refs.form.params.status = ['110000', '110100', '110101']
        // }, 3000)
        // setTimeout(() => {
        //     console.log(this.$refs.form.params);
        // }, 5000)
    },
    methods: {
        handleSearch(data) {
            console.log(data);
            console.log(this.$refs.form.$refs);
            // getStatus().then(res => {
            //     console.log(res);
            // })
            
        },
        
        init(data) {
            console.log(this.page);
        },
        onChange({ name, value }) {
            console.log(name, ':', value);
        },
        
        handleClickName(options, val) {
            console.log(options, val);
        },
    
        onSearchSelect({ name, value }) {
            
            let element = this.$refs.form
            if (name === 'status') {
                if (value == 5) {
                    this.$set(element.currentOptions.name, 'disabled', true)
                } else {
                    this.$set(element.currentOptions.name, 'disabled', false)
                }
                
            }
        },
    }
}
</script>

<style lang="scss" scoped>

</style>
