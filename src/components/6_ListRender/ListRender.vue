<template>
    <div>
        <h3b>1. v-for</h3b>
        <ul>
            <li v-for="(item, index) in items"
                :key="index"
            >{{item}} - {{index}}</li>
        </ul>

        <h3b>2. 对象形式</h3b>
        <ul>
            <li v-for="(value, key, index) in object"
                :key=index
            >
                {{ value }} - {{ key }} - {{ index }}
            </li>
        </ul>

        <h3b>3. 维护状态</h3b>
        <p>在v-for中尽量使用 :key</p>

        <h3b>4. 数组更新检测</h3b>
        <h5b>变更方法</h5b>
        <h5b>替换数组</h5b>

        <h3b>5. 显示过滤/排序后的结果</h3b>
        <ul>
            <li v-for="(item, index) in evenNumber" :key="index">
                {{ item }}
            </li>
        </ul>

        <h3b>6. 不推荐v-for 和 v-if 一起使用</h3b>
        <p>因为v-for的优先级 会比 v-if高 所以每一次循环都会执行一遍v-if ( 可以将v-if置于v-for外面使用 )</p>
        <ul v-if="items.length < 1">
            <li v-for="(item, index) in items" :key="index">
                {{ item }}
            </li>
        </ul>

        <h3b>7. 简单的 todo 列表例子</h3b>
        <div id="todo-list-example">
            <form action="#" @submit.prevent="addNewTodo">
                <label for="new-todo">Add a todo</label>
                <el-input type="text"
                       id="new-todo"
                       v-model="newTodoText"
                       placeholder="输入标签信息"

                ></el-input>
                <el-button type="success" @click="addNewTodo">Add</el-button>
            </form>
            <ul>
                <li is="todo-item"
                    v-for="(todo, index) in todos"
                    :key="todo.id"
                    :title="todo.title"
                    @remove="todos.splice(index, 1)"
                    style="margin-top: 10px"
                ></li>
            </ul>
        </div>
    </div>
</template>

<script>
    import todoItem from "./todoItem";
    export default {
        name: "FListRender",
        data () {
            return {
                items: ['fir', 'sec'],
                object: {
                    title: 'vue show',
                    author: 'yyx'
                },
                filter_items: [1, 2, 3, 4, 5],

                newTodoText: '',
                todos: [
                    { id: 1, title: 'i dont know'},
                    { id: 2, title: 'what is your name'}
                ],
                nextTodoId: 3
            }
        },
        computed: {
            evenNumber () {
                return this.filter_items.filter(function (number) {
                    return number % 2 === 0;
                })
            }
        },
        methods: {
            addNewTodo () {
                this.todos.push({
                    id: this.nextTodoId++,
                    title: this.newTodoText
                })
                this.newTodoText = ''
            }
        },
        components: {
            todoItem
        }
    }
</script>

<style scoped lang="scss">
    @import '@/static/scss/6_ListRender.scss'

</style>