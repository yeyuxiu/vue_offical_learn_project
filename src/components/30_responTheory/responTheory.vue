<template>
    <div>
        <h3b>响应式原理</h3b>
        <h3b>1. 如何追踪其变化</h3b>
        <p>当把一个普通js对象传入vue实例作为data时，vue会使用 Object.defineProperty
        将这些property全部转为 getter/setter
        </p>
        <h3b>2. js的限制 vue不能检测数组和对象的变化</h3b>
        <h5b>对于对象</h5b>
        <p>在data中注册的数据是响应式 但新添加进去的(vm.b=2) 这个就不是响应式的</p>
        <p>可以使用 Vue.set(object, propertyName, value)</p>
        <p>vm.$set(this.someObject, 'b', 2)</p>

        <h5b>对于数组</h5b>
        <p>Vue不能检测以下数组的变动</p>
        <p>1. vm.items[indexOfItem] = newValue</p>
        <p>2. vm.items.length = newLength</p>

        <p>vm.$set(vm.items, indexOfItem, newValue)</p>

        <h3b>3. 异步更新队列</h3b>
        <p>只要侦听到数据变化，Vue 将开启一个队列，并缓冲在同一事件循环中发生的所有数据变更</p>
        <p>为了在数据变化之后等待 Vue 完成更新 DOM，可以在数据变化之后立即使用 Vue.nextTick(callback)。这样回调函数将在 DOM 更新完成后被调用。</p>
        <code>
            methods: {
                updateMessage: async function () {
                    this.message = '已更新'
                    console.log(this.$el.textContent) // => '未更新'
                    await this.$nextTick()
                    console.log(this.$el.textContent) // => '已更新'
                }
            }
        </code>
    </div>
</template>

<script>
    export default {
        name: "responTheory"
    }
</script>

<style scoped lang="scss">

</style>