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
    
    },
    mounted() {
    
    },
    methods: {
        handleAction({ name }) {
            this[name]()
        },
        handleNewBuild() {
            console.log(1);
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
