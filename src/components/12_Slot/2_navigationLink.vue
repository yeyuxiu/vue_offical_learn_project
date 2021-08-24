<template>
    <div>
        <slot></slot>
        这是子作用域的url:{{url}}
    </div>
</template>

<script>
    export default {
        name: "navigationLink",
        props: ['url']
    }
</script>

<style scoped>

</style>