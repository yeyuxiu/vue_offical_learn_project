<template>
    <div>
        登录成功
    </div>
</template>

<script>
    export default {
        name: "showMe",
        created() {
            let session = window.sessionStorage;
            if (session.getItem('login') === 'true') {
                console.log(1)
            } else {
                alert('请登陆')
                this.$router.push({name: 'loginComponentLogin'})
            }


        }
    }
</script>

<style scoped>

</style>