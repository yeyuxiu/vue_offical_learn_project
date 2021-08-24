<template>
    <div>
        <h3b>1. 计算属性</h3b>
        <p>normal: {{ msg }}</p>
        <p>computed: {{ cMsg}}</p>

        <h3b>2. 计算属性 方法 缓存</h3b>
        <span>计算属性是基于它们的响应式依赖进行缓存的,只要 message 还没有发生改变，多次访问 reversedMessage 计算属性会立即返回之前的计算结果，而不必再次执行函数</span>

        <p>计算属性的调用没有运行函数只是返回了之前的值 : {{ cMsg }}</p>
        <p>方法的调用直接运行了整个函数 : {{ changeMsg() }}</p>

        <h3b>3. 计算属性的 setter </h3b>
        <p><span>通过setter修改过后的msg值</span>: {{ setterMsg}}</p>
        <el-button @click="setterMSG" type="primary">修改msg值</el-button>

        <h3b>4. 侦听器 ( 当要执行异步或者开销比较大的操作时使用 )</h3b>
        <label for="question">密钥: </label><el-input type="text"
                                                    v-model="question"
                                                    id="question"
                                                    maxlength="20"
                                                    show-word-limit
    ></el-input>
        <p>{{ answer }}</p>
    </div>
</template>

<script>
    export default {
        name: "ComputedWatch",
        data () {
            return {
                msg: 'String',
                setterMsg: 'setterMsg',
                question: '',
                answer: '请输入问题'
            }
        },
        // 观察计算属性和方法的引用
        computed: {
            cMsg () {
                console.log('Num2. 调用了computed');
                return this.msg.split('').reverse().join('');
            },
            MSG: {
                set(newValue) {
                    // 不知道怎么实现
                    this.setterMsg = 'setterMSG:' + newValue
                },
                get(){
                    return this.setterMsg
                }
            }
        },

        methods: {
            changeMsg() {
                console.log('Num2. 调用了method');
                return this.msg.split('').reverse().join('');
            },
            setterMSG () {
                    this.setterMsg = this.setterMsg + 'zzzz...';
            },
            getAnswer () {
                if (this.question.indexOf('?') === -1){
                    this.answer = '问题需要加问号'
                    return '';
                }
                this.answer = '思考中'
                var vm = this;
                this.$axios.get('https://yesno.wtf/api')
                    .then(function (response) {
                        vm.answer = response.data.answer;
                    })
                    .catch(function (error) {
                        vm.answer = error;
                    })
            }
        },

        watch: {
            question (newValue, oldValue) {
                this.answer = '等待输入';
                this.debouncedGetAnswer();
                console.log(newValue, oldValue)
            }
        },
        created() {
            this.debouncedGetAnswer = this._.debounce(this.getAnswer, 700);
        },

    }
</script>

<style lang="scss" scoped>
    @import '@/static/scss/3_ComputedWatch'
</style>