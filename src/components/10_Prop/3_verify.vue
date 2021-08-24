<template>
    <p>这个会警告但仍然会显示( type: Number ) : {{testString}}</p>
</template>

<script>
    export default {
        name: "verify",
        props: {
            testString: {
                type: Number,
                required: true,
                default: 100
            }
        }
    }
</script>

<style scoped>

</style>