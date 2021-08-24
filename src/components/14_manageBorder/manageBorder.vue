<template>
    <div>
        <h3b>1. 访问元素 & 组件</h3b>
        <h5b>访问根实例 this.$root</h5b>
        <ul>
            <li>获取根组件的数据: this.$root.foo</li>
            <li>写入根组件的数据: this.$root.foo = 2</li>
            <li>访问根组件的计算属性: this.$root.bar</li>
            <li>调用根组件的方法: this.$root.baz()</li>
        </ul>
        <br>
        <p>这是来自跟组件的foo: {{rootTest}}</p>
        <el-button @click="changeRootAttribute" type="warning">修改根属性foo</el-button>
        <p>对于小型项目推荐使用 对于中大型 使用vuex</p>
<!---->
        <h5b>(子)访问父级组件实例 this.$parent</h5b>
        <requestFather/>
        <p>他会很容易失控 还是用回 props 传参</p>
<!---->
        <h5b>(父)访问子组件实例或子元素 ref</h5b>
        <p>不太懂</p>
        <base-input ref="usernameInput"/>
        <p>$refs 只会在组件渲染完成之后生效，并且它们不是响应式的。这仅作为一个用于直接操作子组件的“逃生舱”——你应该避免在模板或计算属性中访问 $refs。</p>

        <h5b>依赖注入</h5b>
        <ul>
            <li>provide 选项允许我们指定我们想要提供给后代组件的数据/方法。</li>
            <li>使用 inject 选项来接收指定的我们想要添加在这个实例上的 property</li>
        </ul>
        <p>可以把依赖注入看作一部分“大范围有效的 prop”，除了：</p>
        <ul>
            <li>祖先组件不需要知道哪些后代组件使用它提供的 property</li>
            <li>后代组件不需要知道被注入的 property 来自哪里</li>
        </ul>
        <br>
        <p>相比于 $parent 依赖注入 不用暴露整个 父组件</p>

        <h3b>2. 程序化的事件侦听器</h3b>
        <ul>
            <li>通过 $on(eventName, eventHandler) 侦听一个事件</li>
            <li>通过 $once(eventName, eventHandler) 一次性侦听一个事件</li>
            <li>通过 $off(eventName, eventHandler) 停止侦听一个事件</li>
        </ul>

        <h3b>3. 循环利用</h3b>

        <h5b>递归组件</h5b>
        <p style="color: red">组件是可以被自己调用的 当name和模板中的标签name一致的时候</p>
        <!--
            name: 'stack-overflow',
            template: '<div><stack-overflow></stack-overflow></div>'
        -->
        <p style="color: red">这会导致出现 max stack size exceeded 错误</p>

        <h5b>组件之间的循环引用</h5b>
        <p>当你使用两个组件 A, B ( A组件里面使用了B组件 B组件里面使用了A组件 )</p>
        <p>解决办法:</p>
        <ul>
            <li>将A设置为一个点 B定为产生悖论的子组件 等到 beforeCreate的时候才去注册它 </li>
            <li>在本地注册组件的时候 使用webpack异步 import</li>
        </ul>

        <h3b>4. 模板定义的替代品</h3b>

        <h5b>内联模板</h5b>
<!--        <my-component inline-template>  -->
        <p>当 inline-template 这个特殊的 attribute 出现在一个子组件上时，这个组件将会使用其里面的内容作为模板，而不是将其作为被分发的内容。</p>

        <h5b>X-Template</h5b>
        <p>另一个定义模板的方式是在一个 script 元素中，并为其带上 text/x-template 的类型，然后通过一个 id 将模板引用过去。</p>

        <h3b>5. 控制更新</h3b>

        <h5b>强制更新</h5b>
        <p>使用 $forceUpdate</p>

        <h5b>通过 v-once 创建低开销的静态组件 </h5b>
        <p>渲染普通的 HTML 元素在 Vue 中是非常快速的，但有的时候你可能有一个组件，这个组件包含了大量静态内容。在这种情况下，你可以在根元素上添加 v-once attribute 以确保这些内容只计算一次然后缓存起来</p>
        <p>尽量少使用</p>
    </div>
</template>

<script>
    import requestFather from './1_requestFather'
    import baseInput from './1_baseInput'

    export default {
        name: "manageBorder",
        data() {
            return {
                name: 'yyx',
                sex: 'male'
            }
        },
        computed: {
            rootTest() {
                return this.$root.foo
            }
        },
        methods: {
            changeRootAttribute () {
                this.$root.foo = '被14.1 组件修改了'
            },
            focus () {
                this.$refs.usernameInput.focus()
            }
        },
        components: {
            requestFather,
            baseInput
        }
    }
</script>

<style scoped>

</style>