<template>
    <div>
        <p v-for="(item, index) in doc" :key="index">{{ item }}</p>
    </div>

</template>

<script>
    export default {
        name: "textDocument",
        props: ['doc']

    }
</script>

<style scoped>

</style>