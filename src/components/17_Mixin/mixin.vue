<template>
    <div>
        <h3b>1. 选项合并</h3b>
        <h5b>混入和组件内的数据都会被引用 且 组件会覆盖同名数据</h5b>
        <el-button @click="showData" type="primary">看数据</el-button>
        <h5b>同名钩子函数将合并为一个数组，因此都将被调用。</h5b>
        <h5b>值为对象的选项，例如 methods、components 和 directives，将被合并为同一个对象。两个对象键名冲突时，取组件对象的键值对。</h5b>
        <el-button @click="conflicting" type="primary">conflicting</el-button>


        <h3b>2. 全局混入(尽量避免)</h3b>
        Vue.mixin({....})

        <h3b>3. 自定义选项合并策略</h3b>


    </div>
</template>

<script>
    // 混入 (mixin) 提供了一种非常灵活的方式，来分发 Vue 组件中的可复用功能。
    // 一个混入对象可以包含任意组件选项。当组件使用混入对象时，所有混入对象的选项将被“混合”进入该组件本身的选项。
    // 值为对象的选项，例如 methods、components 和 directives，将被合并为同一个对象。两个对象键名冲突时，取组件对象的键值对。

    var mixin = {
        data() {
            return {
                message: 'mixin中的message',
                foo: 'mixin中的foo'
            }
        },
        created () {
            console.log('混入对象的钩子被调用')
        },
        methods: {
            conflicting () {
                console.log('from mixin')
            }
        }
    }
    export default {
        name: "mixin",
        data () {
            return {
                message: '组件原身的message',
                bar: '组件原身的bar'
            }
        },
        created() {
            console.log('组件的钩子被调用')
        },
        methods: {
            showData() {
                console.log(this.$data)
                // { message: "组件原身的message", foo: "mixin中的foo", bar: "组件原身的bar" }
            },
            conflicting () {
                console.log('组件跟mixin具有同名函数 被本身的给替换了 from self')
            }
        },
        mixins: [mixin]
    }
</script>

<style scoped lang="scss">
    @import "@/static/scss/17_mixin.scss";
</style>