<template>
    <div>
        <router-view/>
        <router-view name="showMe"/>
    </div>
</template>

<script>

    export default {
        name: "LoginComponent",
        created() {
            let session = window.sessionStorage;
            session.setItem('login', false)
        }
    }
</script>

<style scoped lang="scss">
    @import "@/static/scss/27_LoginComponent.scss";

</style>