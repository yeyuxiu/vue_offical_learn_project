// actions 只提交数据 这里就等同于 const actions = {里面的内容}
//

export default {
    // {commit} 是一种缩写 等同于 context.commit('方法名', '参数')
    AsyncOne({commit}, payload) {
        setTimeout(() => {
            commit('addOne', {
                num: payload.num
            })
        }, payload.time)

    },
    async AsyncOneAnd({commit}) {
        await new Promise((resolve) => {
            setTimeout(() => {
                commit('asyncAddOne')
                resolve();
            }, 1000)
        })
    },
    async AsyncAndTwo({dispatch, commit}) {
        await dispatch('AsyncOneAnd').then(() => {
            setTimeout(() => {
                commit('asyncAddOne')
            }, 2000)
        })
    }

}