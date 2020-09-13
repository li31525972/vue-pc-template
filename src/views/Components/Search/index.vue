<template>
    <div>
        <CommonForm :options="searchOptions" ref="form" :formData="searchParams" @change="onChange" :labelWidth="80"
                    :flex="4"
                    @handleSearch="handleSearch"></CommonForm>
    </div>
</template>

<script>
import { CommonForm } from '@/components'
import { search, table } from '@/mixins'
import { getStatus } from '@/api/test'

export default {
    name: 'search',
    mixins: [search, table],
    components: {
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
                    element: 'input',
                },
                {
                    label: '姓名1',
                    name: 'name1',
                    element: 'input',
                },{
                    label: '姓名2',
                    name: 'name2',
                    element: 'datePicker',
                },{
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
                    method: getStatus,
                    optionsLabel: 'name',
                    optionsValue: 'key',
                    filter: true,
                    // multiple: true,
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
            },
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
    }
}
</script>

<style lang="scss" scoped>

</style>
