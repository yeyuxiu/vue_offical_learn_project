<template>
    <div class="container">
        <header>
            header标签内容(name: header) 只有在 template标明 v-slot:header 子组件的slot才会给替换
            <slot name="header"></slot>
        </header>
        <main>
            main标签内容(name: default)
            <slot></slot>
        </main>
        <footer>
            footer标签内容(name: footer)
            <slot name="footer"></slot>
        </footer>
    </div>
</template>

<script>
    export default {
        name: "baseLayout"
    }
</script>

<style scoped>

</style>