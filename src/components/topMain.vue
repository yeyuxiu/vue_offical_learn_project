<template>
    <div>
        <header>
            <nav-header/>
        </header>
        <main>
            <router-view name="shop"/>
        </main>
        <footer>
            <intro-footer/>
        </footer>
    </div>
</template>

<script>
    import navHeader from "./navHeader";
    import introFooter from "./introFooter";

    var session = window.sessionStorage;

    export default {
        name: "topMain",
        data() {
            return {
                str: '1'
            }
        },
        components: {
            navHeader,
            introFooter
        },
        created() {
            session.removeItem('login')
        }
    }
</script>

<style scoped lang="scss">
    main {
        width: 1590px;
        margin: 0 auto;
        margin-top: 20px;
    }
    footer {
        margin-top: 60px;
    }
</style>