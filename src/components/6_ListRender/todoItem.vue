<template>
    <li>
        {{ title }}
        <el-button @click="$emit('remove')" type="danger" size="mini">移除</el-button>
    </li>
</template>

<script>
    export default {
        name: "todoItem",
        props: ['title']
    }
</script>

<style scoped>

</style>