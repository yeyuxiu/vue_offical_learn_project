<template>
    <div>
        <h3b>1. State ( 类似vue中的data )</h3b>
        <p>showState: {{ normalStoreData }}</p>

        <h5b>mapState辅助函数</h5b>
        <p>简单的手法: {{simpleStoreData}}</p>
        <p>组件内的data与state数据结合 : {{countPlusLocalState}}</p>

        <h3b>2. Getters</h3b>
        <p>合格人数: {{showGradeListCount}}</p>
        <ul>
            <li v-for="grade in showGradeList"
                :key="grade.id"
                v-show="grade.show"
            >{{grade.name}} + {{ grade.text }}</li>
        </ul>
        <el-input placeholder="输入学生id" v-model.number="studentID"></el-input>
        <p>学生详细消息 + {{detail(studentID)}}</p>

        <h3b>3. Mutations</h3b>
        <h5b>注意事项:</h5b>
        <ul>
            <li>最好提前在你的 store 中初始化好所有所需属性。</li>
            <li>必须是同步函数</li>
        </ul>

        <h5b>提交载荷 ( Payload )</h5b>
        <p>是否为vip:</p>
        <el-radio v-model="vip" :label=true>是</el-radio>
        <el-radio v-model="vip" :label=false>否</el-radio>
        <el-button @click="addStudent(vip)" type="success" >增加</el-button>

        <ul>
            <li v-for="todo in todos"
                :key="todo.id"
            >{{todo}}
                <el-button @click="deleteStudent(todo.id)" type="danger">删除</el-button>
            </li>
        </ul>

        <h3b>4. Actions</h3b>
        <p>Action类似于mutation 不同在于</p>
        <ul>
            <li>Action 提交的是 mutation，而不是直接变更状态。</li>
            <li>Action 可以包含任意异步操作。</li>
        </ul>

        <h5b>分发Action</h5b>
        <p>{{ ActionCount }}</p>
        <el-button @click="addAnyAsyncOne" type="primary">一秒后+1</el-button>
        <el-button @click="addAnyAsyncOne(5)" type="danger">一秒后+5</el-button>
        <el-button @click="AsyncOneAndTwo">一秒后+1 两秒后+1</el-button>

        <h3b>5. Modules</h3b>
        <h5b>命名空间</h5b>
        <p>可以通过 namespaced: true 使其成为带命名空间的模块</p>

        <h3b>6. 插件</h3b>
        <p>可以在store中 plugins: [myPlugin]</p>
        <p>vuex的插件就是一个函数 他接收唯一参数 就是 state</p>
        <p>插件快照仅在开发环境中使用</p>

        <h3b>7. 严格模式</h3b>
        <p>通过在 store 中开启 strict: true</p>
        <p>不要在发布环境下启用严格模式！严格模式会深度监测状态树来检测不合规的状态变更——请确保在发布环境下关闭严格模式，以避免性能损失。</p>

        <h3b>8. 表单处理</h3b>
        <p>在属于Vuex的state上使用 v-model 需要一些技巧</p>
        <label>在vuex中使用了v-model:</label><el-input v-model="message"></el-input>
        <p>{{ message }}</p>

        <h3b>9. 测试 </h3b>

        <h3b>10. 热重载</h3b>

    </div>

</template>

<script>
    import { mapState } from 'vuex'
    import { mapGetters } from 'vuex'

    export default {
        name: "StoreComponent",
        data() {
            return {
                move: '+这是组件本地的数据',
                studentID: 1,
                vip: false
            }
        },
        computed: {
            // State
            normalStoreData() {
                return this.$store.state.stateDataTest
            },
            ...mapState({
                    simpleStoreData : 'stateDataTest',
                    // 为了能够使用 `this` 获取局部状态，必须使用常规函数
                    countPlusLocalState (state) { return state.stateDataTest + this.move },
                    todos: 'todos',
                    // Actions
                    ActionCount: 'ActionCount'
            }),


            // Getters
            ...mapGetters([
                'showGradeList',
                'showGradeListCount'
            ]),

            // 在vuex中使用v-model
            message: {
                get () {
                    return this.$store.state.obj.message
                },
                set (value) {
                    this.$store.commit('updateMessage', value)
                }
            }


        },
        methods: {
            // Getters
            detail(id) {
                return this.$store.getters.getTodoById(id)
            },

            // Mutations
            addStudent(vip) {
                this.$store.commit('addStudent', {
                    vip
                })
            },
            deleteStudent(id) {
                let todos = this.$store.state.todos;
                for (let i=0; i< todos.length; i++) {
                    if (id === todos[i].id) {
                        todos.splice(i, 1)
                    }
                }
            },

            // Actions
            addAnyAsyncOne(number) {
                let num;
                if (typeof number === "number") num = number;
                else num = 1;
                this.$store.dispatch({
                    type: 'AsyncOne',
                    time: 1000,
                    num
                })
            },
            AsyncOneAndTwo() {
                this.$store.dispatch({
                    type: 'AsyncAndTwo'
                })
            }
        }
    }
</script>

<style scoped lang="scss">
    @import '@/static/scss/25_StoreComponent.scss'

</style>