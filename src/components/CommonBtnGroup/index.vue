<template>
    <div class="button-group">
        <template v-for="(item, i) in options">

            <template v-if="item.tips">
                <el-popconfirm
                        :key="i"
                        class="btn-tips"
                        @onConfirm="() => handleBtnClick(item)"
                        @onCancel="handleClickCancel"
                        :title="item.tipsText || '确定要继续操作吗？'"
                >
                    <CommonButton
                            :type="item.type"
                            :size="item.size"
                            :plain="item.plain"
                            :round="item.round"
                            :circle="item.circle"
                            :disabled="item.disabled"
                            :btnClass="item.class"
                            :loading="item.loading"
                            :icon="item.icon"
                            :label="item.label"
                            slot="reference"
                    >
                    </CommonButton>
                </el-popconfirm>
            </template>

            <template v-else>
                <el-upload
                        v-if="item.upload"
                        :key="i"
                        class="upload-demo"
                        :action="item.action || ''"
                        :headers="item.headers || {}"
                        :data="item.data || {}"
                        :name="item.fileName || 'file'"
                        :accept="item.accept"
                        :multiple="item.multiple"
                        :before-upload="() => handleBeforeUpload(item)"
                        :on-success="() => onSuccess(item)"
                        :on-error="() => onError(item)"
                        :show-file-list="false"
                        :limit="item.limit">
                    <CommonButton
                            :type="item.type"
                            :size="item.size"
                            :plain="item.plain"
                            :round="item.round"
                            :circle="item.circle"
                            :disabled="item.disabled"
                            :btnClass="item.class"
                            :loading="item.loading"
                            :icon="item.icon"
                            :label="item.label"
                    >
                    </CommonButton>
                </el-upload>

                <CommonButton
                        v-else
                        :key="i"
                        :type="item.type || 'text'"
                        :size="item.size"
                        :plain="item.plain"
                        :round="item.round"
                        :circle="item.circle"
                        :disabled="item.disabled"
                        :btnClass="item.class"
                        :loading="item.loading"
                        :icon="item.icon"
                        :label="item.label"
                        @handleClick="event => handleBtnClick(item)"
                >
                </CommonButton>
            </template>

        </template>
    </div>
</template>

<script>
import { CommonButton } from '@/components'
export default {
    components: {
        CommonButton,
    },
    props: {
        options: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {

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
        handleBtnClick(data) {
            data.loading = data.hasOwnProperty('loading') && data.loading == false
            this.$emit('handleAction', data)
        },
        handleClickCancel() {

        },

        handleBeforeUpload(data) {
            console.log(2);
            data.loading = data.hasOwnProperty('loading') && data.loading == false
        },

        onSuccess(data) {
            data.loading = !(data.hasOwnProperty('loading') && data.loading == true)
        },

        onError(data) {
            data.loading = !(data.hasOwnProperty('loading') && data.loading == true)
        },
    }
}
</script>

<style lang="scss" scoped>
.button-group {
    padding: 0 0 10px 0;
    .upload-demo {
        display: inline-block;
    }
    .btn-tips + button {
        margin-left: 10px;
    }
    .btn-tips + button,
    button + .btn-tips,
    .upload-demo + .btn-tips,
    .btn-tips + .upload-demo,
    button + .upload-demo,
    .upload-demo + button {
        margin-left: 10px;
    }
    .button-icon {
        font-size: 16px;
    }
}
</style>
