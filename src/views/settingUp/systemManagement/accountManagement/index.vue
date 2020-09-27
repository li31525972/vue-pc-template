/**
* @file 账号管理
* @date 2020-09-27
* @author Yahui Li
*/
<template>
    <div>
        <CommonSearch
            :options="searchOptions"
        />
    
        <CommonBtnGroup
            :options="buttonGroupOptions"
        />
    
        <CommonTable
            :options="tableOptions"
        />
    </div>
</template>

<script>
import { CommonSearch, CommonBtnGroup, CommonTable } from '@/components'
import * as config from '@/pageConfig/settingUp/systemManagement/accountManagement'
export default {
    name: 'accountManagement',
    components: {
        CommonSearch,
        CommonBtnGroup,
        CommonTable,
    },
    data() {
        return {
            ...config,
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
    
    }
}
</script>

<style lang="scss" scoped>

</style>
