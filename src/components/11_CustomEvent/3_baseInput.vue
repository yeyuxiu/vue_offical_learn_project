<template>
    <label for="baseinput">
        父组件写给子组件->{{fatherToSonMsg}}
        <input type="text"
               v-bind="$attrs"

               @="inputListeners"
               id="baseinput"
        >
<!--               :value="value"-->

    </label>
</template>

<script>
    export default {
        name: "baseInput",
        props: ['fatherToSonMsg'],
        computed: {
            inputListeners() {
                let vm = this;
                // `Object.assign` 将所有的对象合并成一个新对象
                return Object.assign({},
                    // 我们从父级添加所有的监听器
                    this.$listeners,
                    // 然后我们添加自定义监听器，
                    // 或覆写一些监听器的行为
                    {
                        // 这里确保组件配合 `v-model` 的工作
                        input(event) {
                            vm.$emit('input', event.target.value)
                        }
                    }
                )
            }
        }
    }
</script>

<style scoped>

</style>