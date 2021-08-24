<template>
    <div>
        <h3b>1. Prop类型</h3b>
<!--
        props: {
        title: String,
        likes: Number,
        isPublished: Boolean,
        commentIds: Array,
        author: Object,
        callback: Function,
        contactsPromise: Promise // or any other constructor
        }
-->
        <h3b>2. 单向数据流</h3b>
        <h5b>不应该在子组件中修改父组件传过来的 props</h5b>
        <singleWarn :warning="ttitle"></singleWarn>
        <h5b>I. 利用这个Pro派来传递初始值 子组件用本地新建值进行修改</h5b>
        <code>
            props: ['initialCounter'],
            data: function () {
                return {
                    counter: this.initialCounter
                }
            }
        </code>
        <h5b>II.如果prop需要转换 最好利用computed</h5b>
        <code>
            props: ['size'],
            computed: {
            normalizedSize: function () {
            return this.size.trim().toLowerCase()
            }
            }
        </code>
        <h5b>III. 如果要改变这个值同时父组件也要接受到</h5b>
        <p>可以在父组件中 使用子组件的时候 在子组件身上加v-model</p>
        <h5b>也可以使用 watch 监控父组件传进来的 props</h5b>


        <h3b>3. Prop验证</h3b>
        <verify :testString="'asd'"></verify>
        <p>使用默认值的对象要返回函数返回值才可以</p>
        <objectTest/>

        <h3b>4. 类型检查</h3b>
         <p>type可以是下列原生构造函数中的一个</p>
        <ul>
            <li>String</li>
            <li>Number</li>
            <li>Boolean</li>
            <li>Array</li>
            <li>Object</li>
            <li>Date</li>
            <li>Function</li>
            <li>Symbol</li>
        </ul>
        <br>
        <p>type也可以是自定义的构造函数 通过 instanceof 来进行检查确认</p>

        <h3b>5. 非 Prop 的 Attribute</h3b>
        <h5b>这个地方不太熟</h5b>
        <p>因为显式定义的 prop 适用于向一个子组件传入信息，然而组件库的作者并不总能预见组件会被用于怎样的场景。这也是为什么组件可以接受任意的 attribute，而这些 attribute 会被添加到这个组件的根元素上</p>

        <h5b>替换/合并已有的 Attribute</h5b>

        <h5b>禁用 Attribute</h5b>
        <p>设置一个不继承组件的根元素不会继承 attribute</p>
    </div>
</template>

<script>
    import singleWarn from './2_singleWarn'
    import verify from './3_verify'
    import objectTest from './3_object'

    export default {
        name: "PropChapter",
        data() {
            return {
                ttitle: '传入字符串',
            }
        },
        components: {
            singleWarn,
            verify,
            objectTest
        }

    }
</script>

<style scoped lang="scss">
    @import '@/static/scss/10_Prop.scss'
</style>