<template>
    <p>{{objectTest}}</p>
</template>

<script>
    export default {
        name: "object",
        props: {
            objectTest: {
                type: Object,
                default () {
                    return { message: 'heelop'}
            }
            }
        }
    }
</script>

<style scoped>

</style>