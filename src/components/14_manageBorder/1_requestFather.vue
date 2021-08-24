<template>
    <div>
        <p>这是父组件中的属性name: {{ father_name }}</p>
        <p>这是父组件中的属性sex: {{ father_sex }}</p>

    </div>
</template>

<script>
    export default {
        name: "requestFather",
        data() {
            return {
                father_name: this.$parent.name,
                father_sex: this.$parent.sex
            }
        }
    }
</script>

<style scoped>

</style>