<template>
    <div>
        <p>这里是子组件要展示的模板 : {{ msg }}</p>
    </div>
</template>

<script>
    export default {
        name: "Son",
        props: ['msg']
    }
</script>

<style scoped>

</style>