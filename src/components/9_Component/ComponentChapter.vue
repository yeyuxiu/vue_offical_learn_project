<template>
    <div>
        <h3b>1. 父组件向子组件传递数据</h3b>
        <p>这是父组件拥有的data: {{fatherMsg}}</p>
        <SonOne :msg="fatherMsg"></SonOne>

        <h3b>2. 子组件向父组件传递数据</h3b>
        <SonTwo @sonUpfather="showSonMsg"></SonTwo>

        <h3b>3. 在组件上使用v-model</h3b>
<!--        -->
        <h5b>组件内的 input 注意点</h5b>
        <ul>
            <li>将其 <span>value</span> attribute 绑定到一个名叫 <span>value</span> 的 prop 上</li>
            <li>在其 <span>input</span> 事件被触发时，将新的值通过自定义的 <span>input</span> 事件抛出</li>
        </ul>
        <br>
        <label>这是子组件的输入框</label><inputSon v-model="searchText"/>
        <p>这是父组件的 p标签: {{ searchText }}</p>

        <h3b>4. 插槽</h3b>
        <slotDiv>
            <span>这是插在 slotDiv 组件的内容( html )</span>
        </slotDiv>

        <h3b>5. 动态组件</h3b>
        <p>不会</p>

        <h3b>6. 解析DOM模板的注意事项</h3b>
        <table>
            <tr>
                <th is="table-th">ISBN</th>
                <th is="table-th">Titit</th>
            </tr>
            <tr>
                <table-td>领领</table-td>
                <table-td>阿斯顿</table-td>
            </tr>
        </table>
        <br>
        <p>在 ul ol table select 里面要使用特定的标签 如果使用组件可能会报错</p>
        <p>所以就有了 is 这个属性来处理这种问题</p>
<!--        -->
        <h5b>限制条件不存在于下面这几种模板</h5b>
        <ul>
            <li>字符串( template: '...' )</li>
            <li>单文件组件( .vue )</li>
            <li>script type="text/x-template"</li>
        </ul>
    </div>
</template>

<script>

    import SonOne from "./1_SonOne";
    import SonTwo from "./2_SonTwo";
    import inputSon from "./3_inputSon";
    import slotDiv from "./4_slotDiv";
    import tableTd from "./6_tableTd";
    import tableTh from "./6_tableTh";

    export default {
        name: "ComponentChapter",
        data() {
            return {
                fatherMsg: 'fatherMsg',
                searchText: ''
            }
        },
        components: {
            SonOne,
            SonTwo,
            inputSon,
            slotDiv,
            tableTd,
            tableTh
        },
        methods: {
            showSonMsg(sonContent) {
                alert('这是在父组件触发的事件------>' + sonContent)
            }
        }

    }
</script>

<style scoped lang=scss>
    @import '@/static/scss/9_Component.scss'

</style>