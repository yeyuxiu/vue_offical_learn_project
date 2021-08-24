<template>
    <div>
        用户(props) : {{ user }}
    </div>
</template>

<script>
    export default {
        name: "propsRouter",
        props: ['user']
    }
</script>

<style scoped>

</style>