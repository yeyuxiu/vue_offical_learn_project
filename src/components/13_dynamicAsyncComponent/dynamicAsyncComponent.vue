<template>
    <div>
        <h3b>1. 在动态组件上使用 keep-alive 元素</h3b>
        <p>当我们切换组件时 希望上一个组件被缓存的时候用到</p>
        <div id="dynamic-component-demo">
            <button
                    v-for="tab in tabs"
                    :key="tab"
                    :class="['tab-button', { active: currentTab === tab }]"
                    @click="currentTab = tab"
            >
                {{ tab }}
            </button>

            <keep-alive>
                <component v-bind:is="currentTabComponent" class="tab"></component>
            </keep-alive>
        </div>

        <h3b>2. 异步组件</h3b>
        <p>Vue 只有在这个组件需要被渲染的时候才会触发该工厂函数，且会把结果缓存起来供未来重渲染</p>

        <h5b>处理加载状态</h5b>
        <AsyncComponent/>
    </div>
</template>

<script>
    import tabArchive from './1_tabArchive'
    import tabPosts from './1_tabPosts'

    const AsyncComponent = () => ({
        // 需要加载的组件 (应该是一个 `Promise` 对象)
        component: import('./2_asyncNormal.vue'),
        // 异步组件加载时使用的组件
        loading: import('./2_asyncLoading.vue'),
        // 加载失败时使用的组件
        error: import('./2_asyncError.vue'),
        // 展示加载时组件的延时时间。默认值是 200 (毫秒)
        delay: 200,
        // 如果提供了超时时间且组件加载也超时了，
        // 则使用加载失败时使用的组件。默认值是：`Infinity`
        timeout: 3000
    })

    export default {
        name: "dynamicAsyncComponent",
        data() {
            return {
                currentTab: "Posts",
                tabs: ["Posts", "Archive"]
            }
        },
        components: {
            tabArchive,
            tabPosts,
            AsyncComponent
        },
        computed: {
            currentTabComponent: function() {
                return "tab-" + this.currentTab.toLowerCase();
            }
        }
    }
</script>

<style scoped lang="scss">
    @import '@/static/scss/13_dynamicAsyncComponent.scss'

</style>