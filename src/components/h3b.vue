<template>
    <div>
        <h3>
            <slot></slot>
        </h3>
        <br>
    </div>
</template>

<script>
    export default {
        name: "h3b"
    }
</script>

<style scoped>
    h3 {
        color: #ff9900 !important;
        font-weight: bold;
        font-size: 23px;
        margin: 10px 0;
    }
</style>