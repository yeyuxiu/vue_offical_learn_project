<template>
    <div>
        <el-button type="primary" @click="$emit('sonUpfather', sonData)">点我上传信息给父组件</el-button>
    </div>
</template>

<script>

    export default {
        name: "SonTwo",
        data() {
            return {
                sonData: '这是子组件里面的data信息:soncomponent'
            }
        },

    }
</script>

<style scoped>

</style>