<template>
    <div>

        <h3b>1. v-if</h3b>
        <p v-if="awesome">Vue is what</p>
        <p v-else>Vue is awesome</p>
        <el-button @click="uCanSee = !uCanSee" type="danger">隐藏/显示</el-button>
        <div class="see-box">
            <div v-if="uCanSee">
                <h1>while ... is nothing</h1>
                <p>模板上使用可以将整个模板作为母体</p>
            </div>
            <div v-else>
                <h1>not bad!</h1>
            </div>
        </div>

        <h3b>2. v-if v-else-if v-else</h3b>
        <p>Change the mode : <el-button @click="ChangeMode" type="primary">点我改变字体</el-button></p>
        <div class="see-box">
            <h1 v-if="randomNum >= 7" class="ms">
                大于七
            </h1>
            <h1 v-else-if="randomNum <= 3" class="lt">
                小于三
            </h1>
            <h1 v-else class="num-mid">
                中间数
            </h1>
        </div>

        <h3b>3. v-show</h3b>

    </div>
</template>

<script>
    export default {
        name: "ConditionRender",
        data () {
            return {
                awesome: true,
                uCanSee: false,
                randomNum: 0
            }
        },
        methods: {
            ChangeMode () {
                this.randomNum =  Math.random() * 10;
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '@/static/scss/5_ConditionRender'
</style>