<template>
    <div>
        <h3b>1. 插槽内容</h3b>
        <abandonSlot>
            这是html内容
        </abandonSlot>

        <h3b>2. 编译作用域</h3b>
        <p style="color: red">规则:父级模板里的所有内容都是在父级作用域中编译的；子模板里的所有内容都是在子作用域中编译的。</p>
        <navigation-link :url="'/profile'">
            <p>这是父作用域的url: {{url}}</p>
        </navigation-link>

        <h3b>3. 后备内容</h3b>
        <backupContent/>

        <h3b>4. 具名插槽</h3b>
        <p>语法 v-slot: name |<span style="color:red">v-slot只能用在 template上</span></p>

        <base-layout>
            <template #default>
                <h1>Here might be a page title</h1>
            </template>

            <template #default>
                <p>A paragraph for the main content.</p>
                <p>And another one.</p>
            </template>

            <template #default>
                <p>Here's some contact info</p>
            </template>
        </base-layout>

        <h3b>5. 作用域插槽</h3b>
        <p>有时候，我们在父组件使用插槽时需要访问子组件中的数据，这时候就需要使用作用域插槽。</p>
        <current-user>
            <template #default="slotProps">
                {{ slotProps.user.lastName }}
            </template>
        </current-user>

        <h5b>不要使用混合 作用域插槽会报错</h5b>
        <p>注释了报错内容</p>
<!--
        <current-user v-slot:default="slotProps">
            {{slotProps.user.lastName}}
            <template v-slot:firstname="slotProp">
                {{slotProp.user.firstName}}
            </template>
        </current-user>
        -->

        <h5b>如果有多个插槽 尽量为所有的插槽使用完整的 template 语法</h5b>
        <current-user>
            <template #firstname="slotProp">
                {{slotProp.user.firstName}}
            </template>
            <template #default="slotProps">
                {{slotProps.user.lastName}}
            </template>
        </current-user>

        <h5b>解构插槽 Prop</h5b>
        <p>没看</p>

        <h5b>与具名插槽的区别</h5b>
            <p>具名插槽: v-slot: name</p>
            <p>作用域插槽: v-slot: name="needData"</p>

        <h3b>6. 动态插槽名</h3b>
<!--        <label for="first">changeHeader : </label><input type="radio" id="first"-->
<!--                                                        :value="dynamicSlotName.header"-->
<!--                                                        v-model="showSlot">-->
        <el-radio :label="dynamicSlotName.header" v-model="showSlot">changeHeader:</el-radio>
        <el-radio :label="dynamicSlotName.footer" v-model="showSlot">changeFooter:</el-radio>
<!--        <label for="last">changeFooter : </label><input type="radio" id="last"-->
<!--                                                      v-model="showSlot"-->
<!--                                                      :value="dynamicSlotName.footer">-->
        <br>
        <base-layout>
            <template #[showSlot]>
                <h2 style="color: darkmagenta">切换就移动</h2>
            </template>
        </base-layout>

        <h3b>7. 具名插槽缩写</h3b>
        <p>参照上面的例子</p>

        <h3b>8. 其他示例(子组件的slot向父组件传递todos)</h3b>
        <todo-list :todos="todos">
            <template #todo="{ todo }">
                <span v-if="todo.isComplete">✓</span>
                {{ todo.text }}
            </template>
        </todo-list>
    </div>
</template>

<script>
    import abandonSlot from './1_abandonSlot'
    import navigationLink from './2_navigationLink'
    import backupContent from './3_backupContent'
    import baseLayout from './4_baseLayout'
    import currentUser from './5_currentUser'
    import todoList from './8_todoList'

    export default {
        name: "SlotComponent",
        data() {
            return {
                showSlot: 'default',
                dynamicSlotName: {
                    header: 'header',
                    default: 'default',
                    footer: 'footer'
                }
            }
        },
        components: {
            abandonSlot,
            navigationLink,
            backupContent,
            baseLayout,
            currentUser,
            todoList
        }
    }
</script>

<style scoped>

</style>