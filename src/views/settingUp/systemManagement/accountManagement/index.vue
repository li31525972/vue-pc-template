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
            @handleBtnClick="handleBtnClick"
        />

        <CommonTable
            :options="tableOptions"
            :btnOptions="tableBtnOptions"
            :data="data"
            :total="total"
            @handleBtnClick="handleBtnClick"
            @onPageChange="onPageChange"
            @select="onSelectChange"
        />

        <CommonDialog v-model="isShow" >
            111
        </CommonDialog>
    </div>
</template>

<script>
import { CommonSearch, CommonBtnGroup, CommonTable, CommonDialog } from '@/components'
import * as config from '@/pageConfig/settingUp/systemManagement/accountManagement'
import { search, table, button } from '@/mixins'
export default {
    name: 'accountManagement',
    mixins: [search, table, button],
    components: {
        CommonSearch,
        CommonBtnGroup,
        CommonTable,
        CommonDialog,
    },
    data() {
        return {
            ...config,
            data: [],
            total: 0,
            isShow: false,
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

        // 新增
        handleAdd() {
            console.log('新增----------')
        },
        // 删除
        handleDelete() {
            this.isShow = true
        },

        // 禁用
        handleDisabled(row) {
            this.$api.upms.updateStatus({ userId: row.userId, status: '1' }).then(() => {
                this.init()
            })
        },

        // 启用
        handleUse(row) {
            this.$api.upms.updateStatus({ userId: row.userId, status: '0' }).then(() => {
                this.init()
            })
        },
    }
}
</script>

<style lang="scss" scoped>

</style>
