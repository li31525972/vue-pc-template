<template>
    <div >
        <!--<CommonSearch :options="searchOptions" :labelWidth="80" flex="4" @handleSearch="handleSearch"></CommonSearch>-->
        <CommonBtnGroup :options="options1" @handleAction="handleAction"/>
        <CommonTable
                :options="options"
                :data="data"
        >
        </CommonTable>
    </div>
</template>

<script>
import { CommonTable, CommonBtnGroup, CommonSearch } from '@/components'
import { search, table } from '@/mixins'
import * as api from '@/api/test'
export default {
    name: 'compomentTable',
    components: {
        CommonTable,
        CommonBtnGroup,
        CommonSearch,
    },
    mixins: [search, table],
    data() {
        return {
            searchOptions: [
                {
                    label: '姓名',
                    name: 'name',
                    type: 'text',
                    clear: true,
                    rules: [
                        {
                            required: true,
                            message: '请输入姓名',
                            trigger: 'blur'
                        }
                    ]
                },
                {
                    label: '年龄',
                    name: 'age',
                    defaultValue: '18',
                    type: 'text',
                },
                {
                    label: '姓名1',
                    name: 'name1',
                    type: 'text',
                },{
                    label: '姓名2',
                    name: 'name2',
                    type: 'text',
                },{
                    label: '姓名3',
                    name: 'name3',
                    type: 'text',
                },{
                    label: '姓名4',
                    name: 'name4',
                    type: 'text',
                },
                {
                    label: '年龄1',
                    name: 'age1',
                    defaultValue: '18',
                    type: 'text',
                },
                {
                    label: '状态',
                    name: 'status',
                    type: 'select',
                    method: api.getStatus,
                    params: '63',
                    optionsLabel: 'name',
                    optionsValue: 'key',
                    optionsKey: ['name', 'key'],
                    filter: true,
                    multiple: true,
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
                    type: 'daterange',
                    clear: true,
                }
            ],
            options: [
                {
                    label: '姓名1111111',
                    prop: 'name',
                    fixed: 'left',
                },
                {
                    label: '年龄2222222',
                    prop: 'age',
                },
                {
                    label: '时间2222222222',
                    prop: 'date',
                    slot: true,
                    type: 'date',
                },
                {
                    label: '性别',
                    prop: 'sex',
                    formatter: (row) => {
                        if (row['sex'] === 1) {
                            return '男'
                        } else if (row['sex'] === 2) {
                            return '女'
                        }
                    },
                    class: row => {
                        if (row.sex === 1) {
                            return 'blue'
                        } else if (row.sex === 2) {
                            return 'red'
                        }
                    },
                    click: true,
                },
            ],
            data: [
                {
                    name: '小明',
                    age: 18,
                    sex: 1,
                    date: new Date().getTime(),
                },
                {
                    name: '小明1111111111111111111111111',
                    age: 19,
                    sex: 2,
                    date: new Date().getTime(),
                },
                {
                    name: '小明',
                    age: 17,
                    sex: 1,
                    date: new Date().getTime(),
                },
            ],
            BtnOptions: [
                {
                    label: '查看',
                    // type: 'primary',
                    name: 'handleLook'
                },
                {
                    label: '编辑',
                    // type: 'primary',
                    upload: true,
                    name: 'handleEdit',
                },
                {
                    // label: '删除',
                    icon: 'el-icon-delete',
                    // type: 'primary',
                    name: 'handleDelete'
                }
            ],
            operWidth: 180,
            options1: [
                {
                    label: '新建',
                    name: 'handleNewBuild',
                    size: 'medium',
                    type: 'primary'
                },
                {
                    label: '删除',
                    name: 'handleDelete',
                    size: 'small',
                    type: 'success',
                },
                {
                    label: '上传',
                    name: 'handleUpload',
                    upload: true,
                    type: 'primary',
                    action: 'https://jsonplaceholder.typicode.com/posts/',
                    onError: () => {
                        // console.log(this);
                        this.handleNewBuild()
                    },
                    onSuccess: () => {
                        // console.log(this);
                        this.handleNewBuild()
                    }
                }
            ]
        }
    },
    computed: {

    },
    watch: {

    },
    created() {
        console.log(process.env.NODE_ENV)
    },
    mounted() {

    },
    methods: {
        onTdClick(row, index) {
            console.log(row, index);
        },
        handleOperClick( name, row, index ) {
            console.log(name);
            console.log(row);
            console.log(index);
        },
        onPageChange(data) {
            console.log(data);
        },
        handleAction() {

        },

        handleSelection(data) {
            console.log(data);
        },
    }
}
</script>

<style lang="scss" scoped>

</style>
