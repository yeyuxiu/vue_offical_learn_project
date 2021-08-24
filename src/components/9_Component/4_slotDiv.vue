<template>
    <div>
        <p>这是定义在 slotDiv 组件里面的内容 插入的内容以slot标签的位置来决定( 组件 )</p>
        <slot></slot>
    </div>

</template>

<script>
    export default {
        name: "slotDiv"
    }
</script>

<style scoped>

</style>