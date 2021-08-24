<template>
    <input type="text" ref="input">
</template>

<script>
    export default {
        name: "baseInput",
        methods: {
            focus () {
                this.$refs.input.focus()
            }
        }
    }
</script>

<style scoped>

</style>