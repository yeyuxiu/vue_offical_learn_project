<template>
    <div>
        <h3b>1. 过滤器用法</h3b>
        <p>过滤器可以用在 1.双花括号插值 2. v-bind表达式</p>
        <span>返回偶数:</span>
        <el-input v-model="value">返回偶数:</el-input>
        <p>{{ value | even}}</p>
        <h5b>过滤器放在v-bind 就是对属性过滤</h5b>
        <p v-text='"<div v-bind:id=\"rawId | formatId\"></div>"'></p>
        <h5b>过滤器也可以串联</h5b>
        <p v-text="'{{ message1 | filterA | filterB }}'"></p>
        <h5b>过滤器也可以接受参数</h5b>
        <p v-text="'{{ message | filterA(\'arg1\', arg2) }}'"></p>
    </div>
</template>

<script>
    export default {
        name: "filtrator",
        data() {
            return {
                value: '2',

            }
        },
        filters: {
            even (value) {
                if(!value) return ''
                let value_list = value.split('')
                let even_list = value_list.map((each) => {
                    let even_boolean =  Boolean(each%2 === 0)
                    if (even_boolean) return each
                })
                return even_list.join('')
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "@/static/scss/21_filtrator.scss";
</style>