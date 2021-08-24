// 模块 state 是函数



export default {
    state: () => {

    },
    // mutation getter 接收的第一个参数是模块的局部状态对象
    mutations: {

    },
    // 对于模块内部的 getter，根节点状态会作为第三个参数暴露出来
    getters: {
        carBFirst(state, rootState) {
            console.log(state.ActionCount)
            console.log(rootState)
        },
        carBSec(state, getter, rootState) {
            console.log(getter.carBFirst)
            console.log(rootState)
        }

    },
    // 对于模块内部的 action，局部状态通过 context.state 暴露出来，根节点状态则为 context.rootState
    actions: {

    }


}