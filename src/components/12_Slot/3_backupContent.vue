<template>
    <div>
        <slot>这是后备内容 如果父那边没有写内容 默认就是我这个</slot>
    </div>
</template>

<script>
    export default {
        name: "backupContent"
    }
</script>

<style scoped>

</style>