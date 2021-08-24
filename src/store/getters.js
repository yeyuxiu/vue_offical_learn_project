// Getters 有时我们需要在state中派生出一些状态 例如过滤并计数 const Getters = {里面的内容}
// 注重原本数据的不修改 只是筛选

export default {
    showGradeList: state => {
        return state.todos.filter(todo => todo.show)
    },
    // 可以接受其他getters 作为第二参数
    showGradeListCount: (state, getters) => {
        return getters.showGradeList.length;
    },
    // 传入参数访问
    getTodoById: (state) => (id) => {
        return state.todos.find(todo => todo.id === id)
    }
}