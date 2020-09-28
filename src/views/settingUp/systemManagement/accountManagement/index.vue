/**
* @file 账号管理
* @date 2020-09-27
* @author Yahui Li
*/
<template>
    <div>
        <CommonSearch
            :options="searchOptions"
            @handleSearch="handleSearch"
        />

        <CommonBtnGroup
            :options="buttonGroupOptions"
        />

        <CommonTable
            :options="tableOptions"
            :data="data"
            :total="total"
            @onPageChange="onPageChange"
        />
    </div>
</template>

<script>
import { CommonSearch, CommonBtnGroup, CommonTable } from '@/components'
import * as config from '@/pageConfig/settingUp/systemManagement/accountManagement'
import { search, table } from '@/mixins'
export default {
    name: 'accountManagement',
    mixins: [search, table],
    components: {
        CommonSearch,
        CommonBtnGroup,
        CommonTable,
    },
    data() {
        return {
            ...config,
            data: [],
            total: 0,
        }
    },
    computed: {

    },
    watch: {

    },
    created() {
        this.init()
    },
    mounted() {

    },
    methods: {
        init() {
            let params = {
                pageNum: this.page,
                pageSize: this.size,
                ...this.search,
                ...this.fixedParams,
                ...this.sortParams,
            }
            this.$api.upms.getAccountList(params).then(response => {
                this.data = response.list
                this.total = response.total
            })
        },
    }
}
</script>

<style lang="scss" scoped>

</style>
