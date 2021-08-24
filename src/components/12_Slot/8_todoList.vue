<template>
    <ul>
        <li
                v-for="todo in filteredTodos"
                :key="todo.id"
        >
            <!-- 我们为每个 todo 准备了一个插槽，将 `todo` 对象作为一个插槽的 prop 传入。-->
            <slot name="todo" :todo="todo">
                <!-- 后备内容 -->
                {{ todo.text }}
            </slot>
        </li>
    </ul>
</template>

<script>
    export default {
        name: "todoList",
        data() {
            return {
                filteredTodos: [
                    {id: 0, text: '默认内容一', isComplete: true},
                    {id: 1, text: '默认内容二', isComplete: true},
                    {id: 2, text: '默认内容三', isComplete: false},
                    {id: 3, text: '默认内容四', isComplete: false},
                    {id: 4, text: '默认内容五', isComplete: true}
                ]
            }
        }
    }
</script>

<style scoped>

</style>