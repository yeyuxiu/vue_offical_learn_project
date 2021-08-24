<template>
    <div>
        {{ userPwd }} 登录成功
        <el-button type="danger" :disabled="save" @click="save=true">保存</el-button>
    </div>
</template>

<script>
    export default {
        name: "loginDemo1",
        props: ['userPwd'],
        data() {
            return {
                save: false
            }
        },
        // 导航离开该组件的对应路由时调用
        beforeRouteLeave(to, from, next) {
            if (this.save) {
                next();
            } else {
                alert('请保存');
                next(false);
            }

        }
    }
</script>

<style scoped>

</style>