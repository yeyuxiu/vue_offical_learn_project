// mutations 只修改数据 const mutations = {里面的内容}
// 更改 mutation 的状态唯一方法提交 mutation
// 类似于 methods
// 注重原本数据的修改

export default {
    //    {id: 1, text: '95分', show: true, name: 'yyx'},
    addStudent (state, payload) {
        let lastID;
        try {
            lastID = state.todos[state.todos.length-1].id;
        } catch (e) {
            console.log('找不到id自动替换成0')
        }

        let id = 0;
        if (lastID === 0 || lastID) id = ++lastID;

        let grade = Math.round(Math.random() * 100)
        let text = grade + '分';

        let show = true;
        if (grade <= 60 ) show = false

        let getName = function () {
            let nameList = [];
            for(let i=0; i< 4; i++) {
                let randomAl = Math.ceil(Math.random() * 25);
                nameList.push(String.fromCharCode(65+randomAl));
            }
            return nameList.join('')
        }
        let vip = false;
        if (payload.vip) vip = true

        let name = getName();
        let studentDict = {
            id,
            text,
            show,
            name,
            vip
        }

        state.todos.push(studentDict)

    },
    // Actions
    addOne(state, payload) {
        if(payload.num) {
            state.ActionCount += payload.num
        }else {
            state.ActionCount++
        }
    },
    asyncAddOne(state) {
        state.ActionCount++
    },

    // 在vuex中使用 v-model
    updateMessage (state, message) {
        state.obj.message = message
    }
}