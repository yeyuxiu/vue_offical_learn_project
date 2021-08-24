<template>
    <div>
        <span style="color: red">插槽有默认值: </span>
        <span><slot name="firstname" :user="user">{{user.firstName}}</slot></span>
        <span><slot :user="user">{{user.lastName}}</slot></span>
    </div>
</template>

<script>
    export default {
        name: "currentUser",
        data() {
            return {
                user: {
                    firstName: 'firstName---> y',
                    lastName: 'lastName---> yx'
                }
            }
        }
    }
</script>

<style scoped>

</style>