<template>
    <div>
        <ButtonGroup :options="options" @handleAction="handleAction"/>
    </div>
</template>

<script>
import ButtonGroup from '@/components/button-group'
export default {
    name: 'componentButton',
    components: {
        ButtonGroup,
    },
    data() {
        return {
            options: [
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
                },
                {
                    label: '删除',
                    name: 'handleDelete',
                    size: 'small',
                    type: 'success',
                    loading: false,
                },
                {
                    label: '新建',
                    name: 'handleNewBuild',
                    size: 'medium',
                    type: 'primary',
                    tips: true,
                },
            ]
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
        handleAction(data) {
            console.log(data);
            setTimeout(() => {
                this[data.name](data)
            }, 2000)
            data.type = 'danger'
        },
        handleNewBuild() {
            console.log(1);
        },
        handleDelete(btn) {
            console.log('删除----', btn);
            btn.loading = false
        },
    }
}
</script>

<style lang="scss" scoped>

</style>
