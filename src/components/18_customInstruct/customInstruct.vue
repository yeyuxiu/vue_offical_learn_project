<template>
    <div>
        <h3b>1. 用法</h3b>
        <p>使用了v-focus自定义指令</p>
        <input type="text" v-focus>

        <h3b>2. 钩子函数</h3b>
        <p>一个指定定义对象可以提供几个钩子函数(均为可选):</p>
        <ul>
            <li>bind：只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。</li>
            <li>inserted：被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)。</li>
            <li>update：所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前。指令的值可能发生了改变，也可能没有。但是你可以通过比较更新前后的值来忽略不必要的模板更新 (详细的钩子函数参数见下)。</li>
            <li>componentUpdated：指令所在组件的 VNode 及其子 VNode 全部更新后调用。</li>
            <li>unbind：只调用一次，指令与元素解绑时调用。</li>
        </ul>
        
        <h3b>3. 钩子函数的参数</h3b>
        <p>指令钩子函数会被传入以下参数</p>
        <ul>
            <li>el：指令所绑定的元素，可以用来直接操作 DOM。</li>
            <li>binding：一个对象，包含以下 property:
                <ul style="margin-left: 20px">
                    <li>name：指令名，不包括 v- 前缀。</li>
                    <li>value：指令的绑定值，例如：v-my-directive="1 + 1" 中，绑定值为 2。</li>
                    <li>oldValue：指令绑定的前一个值，仅在 update 和 componentUpdated 钩子中可用。无论值是否改变都可用。</li>
                    <li>expression：字符串形式的指令表达式。例如 v-my-directive="1 + 1" 中，表达式为 "1 + 1"。</li>
                    <li>arg：传给指令的参数，可选。例如 v-my-directive:foo 中，参数为 "foo"。</li>
                    <li>modifiers：一个包含修饰符的对象。例如：v-my-directive.foo.bar 中，修饰符对象为 { foo: true, bar: true }。</li>
                </ul>
            </li>
            <li>vnode：Vue 编译生成的虚拟节点。</li>
            <li>oldVnode：上一个虚拟节点，仅在 update 和 componentUpdated 钩子中可用。</li>
        </ul>
        <p>除了 el 之外，其它参数都应该是只读的，切勿进行修改。如果需要在钩子之间共享数据，建议通过元素的 dataset 来进行。</p>

        <h5b>自定义钩子参数调用的例子</h5b>
        <div id="hook-arguments-example" v-demoO:foo.a.b="message"></div>

        <h5b>动态指令参数</h5b>


        <h3b>4. 函数简写</h3b>
        <p>没怎么看</p>
        <h3b>5. 对象字面量</h3b>
        <div v-demoT="{ color: 'white', text: 'hello!' }"></div>

    </div>
</template>

<script>
    export default {
        name: "customInstruct",
        data() {
            return{
                message: 'hello!'
            }
        },
        directives: {
            focus: {
                inserted (el) {
                    alert('自定义的focus 特别恶心')
                    el.focus()
                }
            },
            demoO: {
                bind (el, binding, vnode) {
                    let s = JSON.stringify;
                    el.innerHTML =
                        'name: '       + s(binding.name) + '<br>' +
                        'value: '      + s(binding.value) + '<br>' +
                        'expression: ' + s(binding.expression) + '<br>' +
                        'argument: '   + s(binding.arg) + '<br>' +
                        'modifiers: '  + s(binding.modifiers) + '<br>' +
                        'vnode keys: ' + Object.keys(vnode).join(', ')
                }
            },
            demoT: {
                bind(el, binding) {
                    console.log(binding.value.color) // => "white"
                    console.log(binding.value.text)  // => "hello!"
                }
            }
        },

    }
</script>

<style scoped lang="scss">
    @import "@/static/scss/18_customInstruct.scss";
</style>