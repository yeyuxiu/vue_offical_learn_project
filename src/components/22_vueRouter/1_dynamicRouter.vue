<template>
    <div>
       用户push: {{ this.$route.params.user }}

        <el-button @click="jump('goRouterPlay')">玩游戏</el-button>

        <el-button disabled>不玩游戏</el-button>
        <router-view name="a"/>
    </div>
</template>

<script>
    export default {
        name: "dynamicRouter",
        methods: {
            jump(routerName) {
                this.$router.push({name: routerName})
            }
        },
        beforeRouteUpdate(to, from, next) {
            console.log(to)
            console.log(from)
            next();
        }

    }
</script>

<style scoped>

</style>