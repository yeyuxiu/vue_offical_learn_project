<template>
    <div>
        <h3b>1. v-once 文本 插值模板</h3b>
        <span class="point-span">{{ msg }}</span>
        <p v-once>用了v-once <span class="point-span">{{ msg }}</span></p>
        <el-button @click="msgChange" type="primary">改变msg</el-button>
        <h3b>2. Attribute 动态参数</h3b>
        <p :class="handsome">handsome属性</p>
        <p :class=[attributeName]>{{ attributeName }}</p>
        <label for="attr">修改上面的属性 : </label><el-input id="attr" type="text"
                                                      v-model="attributeName"
                                                      placeholder="red or green"
                                                      clearable
                                                      autofocus=true
    ></el-input>
        <h3b>3. 指令( v-if v-show v-html v-on v-bind )</h3b>

        <h3b>4. 修饰符 v-on:submit.prevent</h3b>
    </div>
</template>

<script>
    export default {
        name: "ModuleSyntax",
        data () {
            return {
                msg: 'data中编写的文本内容',
                handsome: 'handsome',
                attributeName: 'focus'
            }
        },
        methods: {
            msgChange () {
                this.msg = '方法改变文本内容'
            }
        },
        computed: {
            randomNum () {
                return Math.random() * 10;
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '@/static/scss/2_ModuleSyntax.scss'
</style>