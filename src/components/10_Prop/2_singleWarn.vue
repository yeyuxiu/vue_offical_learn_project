<template>
    <div>
        <p>不应该在子组件修改父组件传过来的 props (使用同名的computed会报错 )</p>

        <p>如果要修改或者要一个初始值可以再在子组件定义另一个属性: {{ sonWarn }}</p>
    </div>
</template>

<script>
    export default {
        name: "singleWarn",
        props: ['warning'],
        data() {
            return {
                sonWarn: this.warning + 'ajsido',
            }
        }
    }
</script>

<style scoped>

</style>