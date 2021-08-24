<template>
    <div>
        <h3b>1. 事件名</h3b>
        <h5b>始终建议使用 kabab-case 起事件名</h5b>

        <h3b>2. 自定义组件的v-model</h3b>
        <vModel v-model.trim="lovingVue"/>
<!--    <vModel :value="lovingVue" @change="this.lovingVue=$event.target.value"/>    -->

        <h3b>3. 将原生事件绑定到组件</h3b>
        <p>想要在一个组件的根元素上直接监听一个原生事件 可以使用 v-on的 .native </p>
        <h5b>使用 $listeners (不懂)</h5b>
        <baseInput  :fatherToSonMsg="'子组件的input(但调用的时候就具备了一模一样的input功能):'"/>

        <h3b>4. .sync 修饰符</h3b>
        <text-document
            v-bind.sync="doc"
        >

        </text-document>
    </div>
</template>

<script>
    import vModel from './2_vModel'
    import baseInput from './3_baseInput'
    import textDocument from './4_textDocument'

    export default {
        name: "CustomEvent",
        data() {
            return {
                lovingVue: true,
                doc: {
                    title: '异步',
                    content: '修饰符'
                }
            }
        },
        components: {
            vModel,
            baseInput,
            textDocument
        }
    }
</script>

<style scoped lang="scss">
    @import '@/static/scss/11_CustomEvent.scss'
</style>