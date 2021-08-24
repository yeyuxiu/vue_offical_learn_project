<template>
    <div>
        <h3b>1. 插件概述</h3b>
        <p>插件通常用来为 Vue 添加全局功能。插件的功能范围没有严格的限制——一般有下面几种：</p>
        <ol style="margin-left: 15px">
            <li>添加全局方法或者 property。如：vue-custom-element</li>
            <li> 添加全局资源：指令/过滤器/过渡等。如 vue-touch</li>
            <li>通过全局混入来添加一些组件选项。如 vue-router</li>
            <li>添加 Vue 实例方法，通过把它们添加到 Vue.prototype 上实现。</li>
            <li>一个库，提供自己的 API，同时提供上面提到的一个或多个功能。如 vue-router</li>
        </ol>

        <h3b>2. 使用插件</h3b>
        import ..
        Vue.use(myPlugin)
        Vue.use(MyPlugin, { someOption: true })

        <h3b>3. 开发插件</h3b>
        MyPlugin.install = function (Vue, options) {
            // 1. 添加全局方法或 property
            Vue.myGlobalMethod = function () {
            // 逻辑...
        }

        <h3b>4. Vue.use() 和 Vue.prototype.xxx 的区别</h3b>
        <h5b>Vue.use()</h5b>
        引入插件(vuex)

        <h5b>Vue.prototype.xxx </h5b>
        <p>实例上 挂载属性 或 方法(axios)</p>
        <p>每一个vue组件都是Vue的实例 所以组件内this可以拿到Vue.prototype的属性和方法</p>

    </div>
</template>

<script>
    export default {
        name: "plug",

    }
</script>

<style scoped lang="scss">
    @import "@/static/scss/20_Plug.scss";
</style>