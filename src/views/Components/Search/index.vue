<template>
    <div>
        <Search :options="searchOptions" :labelWidth="80" :flex="4" @handleSearch="handleSearch"></Search>
    </div>
</template>

<script>
import Search from 'components/common-search.vue'
import { search, table } from '@/mixins'
import { getStatus } from '@/api/test'

export default {
    name: 'search',
    mixins: [search, table],
    components: {
        Search,
    },
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
                    type: 'select',
                    method: getStatus,
                    options: [],
                    optionsLabel: 'name',
                    optionsValue: 'key',
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
                    flex: 1,
                    clear: true,
                }
            ],
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
        // handleSearch(data) {
        //     console.log(data);
        //     getStatus().then(res => {
        //         console.log(res);
        //     })
        // }

        init(data) {
            console.log(this.page);
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
