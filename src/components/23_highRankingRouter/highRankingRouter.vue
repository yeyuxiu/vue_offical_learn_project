<template>
    <div>
        <h3b>1. 导航守卫</h3b>

        <h5b>全局前置守卫 [ router.beforeEach(to, from, next) ]</h5b>
        <ul>
            <li>to: router要进入的目标路由对象</li>
            <li>from: router当前导航正要离开的路由</li>
            <li>next: Function 一定要调用该方法来resolve这个钩子 执行效果依赖next方法的调用参数
                <ul style="margin-left: 20px">
                    <li>next(): 进行管道中的下一个钩子。 如果全部钩子执行完 导航状态就是confirmed</li>
                    <li>next(false) 中断当前的导航。如果浏览器的URL改变了(可能是用户手动或者浏览器后退按钮) 那么URL地址会重置到 from 路由对应的地址</li>
                    <li>next('/') 或者 next({path: '/'}): 跳转到一个不同的地址。当前导航被中断然后进行一个新的导航
                        可以向next传递任意位置对象 且允许设置诸如 replace: true name: 'home' 之类的选项
                    </li>
                    <li>next(error): 传入next的参数是一个Error实例 则导航会被终止且该错误会被传递给router.onError()注册过的回调</li>
                </ul>
            </li>
        </ul>
        <p>to, from 参数</p>
        <ul>
            <li>fullPath: 路由url</li>
            <li>hash: 锚点</li>
            <li>matched: 路由匹配规则 ( 如果是嵌套的 那么就是每一个路由的匹配规则 )</li>
            <li>meta: 元信息 在 route 里面</li>
            <li>name: 路由的名字</li>
            <li>params: 路由参数</li>
            <li>path: 路由路径</li>
            <li>query: ? 形式的参数</li>
            <li>__proto__: Object</li>
        </ul>
        <br>
        <el-input placeholder="输入密码" v-model="pwdDemo1" @change="buttonDemoOneDisable = false"></el-input>
        <el-button type="primary" @click="demo1(pwdDemo1)" :disabled="buttonDemoOneDisable">{{ buttonDemo1 }}
        </el-button>
        <router-view name="demoOne"/>

        <h5b>全局解析守卫 [ router.beforeResolve(to, from, next) ]</h5b>
        <p>在 2.5.0+ 你可以用 router.beforeResolve 注册一个全局守卫。这和 router.beforeEach
            类似，区别是在导航被确认之前，同时在所有组件内守卫和异步路由组件被解析之后，解析守卫就被调用。</p>

        <h5b>全局后置钩子 [ afterEach(to, from) ]</h5b>
        <p>和守卫不同的是，这些钩子不会接受 next 函数也不会改变导航本身 只有to from 两个参数</p>

        <h5b>路由上直接定义守卫 [ beforeEnter(to, from, next) ]</h5b>
        <p>直接在 routes里面 beforeEnter</p>
        <p>loginDemoOne 里面有 但是只能触发一次</p>

        <h5b>组件内的守卫</h5b>

        <p>beforeRouteEnter(to, from, next)</p>
        <ul>
            <li>在渲染该组件的对应路由被 confirm 前调用</li>
            <li>不能！获取组件实例 this</li>
            <li>因为当守卫执行前 组件实例还没创建</li>
            <li>可以通过next()的回调来访问组件</li>
        </ul>
        <p>beforeRouteUpdate(to, from, next)</p>
        <ul>
            <li>在当前路由改变，但是该组件被复用时调用</li>
            <li>举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，</li>
            <li>由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。</li>
            <li>可以访问组件实例 this</li>
        </ul>
        <p>beforeRouteLeave(to, from, next)</p>
        <ul>
            <li>导航离开该组件的对应路由时调用</li>
            <li>可以访问组件实例 this</li>
            <li>这个离开守卫通常用来禁止用户在还未保存修改前突然离开。该导航可以通过 next(false) 来取消</li>
        </ul>

        <h5b>完整的导航解析流程</h5b>
        <ol>
            <li>导航被触发</li>
            <li>在失活的组件里调用 beforeRouteLeave 守卫</li>
            <li>调用全局的 beforeEach 守卫</li>
            <li>在重用的组件里调用 beforeRouteUpdate 守卫</li>
            <li>在路由配置里调用 beforeEnter</li>
            <li>解析异步路由组件</li>
            <li>在被激活的组件里调用 beforeRouteEnter</li>
            <li>调用全局的beforeResolve守卫</li>
            <li>导航被确认</li>
            <li>调用全局的 afterEach 钩子</li>
            <li>触发DOM更新</li>
            <li>调用 beforeRouteEnter 守卫传给next的回调函数，创建好的组件实例会作为回调函数的参数传入。</li>
        </ol>

        <h3b>2. 路由元信息</h3b>
        <p>定义路由的时候配置的 meta 字段</p>

        <h3b>3. 过渡动效</h3b>
        <p>将 transition 标签 包裹着 router-view 标签 </p>
        <p>跟vue的过渡那章效果一样</p>

        <h3b>4. 数据获取</h3b>
        <el-link type="success"
                 href="https://router.vuejs.org/zh/guide/advanced/data-fetching.html#%E5%9C%A8%E5%AF%BC%E8%88%AA%E5%AE%8C%E6%88%90%E5%89%8D%E8%8E%B7%E5%8F%96%E6%95%B0%E6%8D%AE">
            官网地址
        </el-link>
        <h5b>导航完成后获取数据</h5b>
        <p>先完成导航，然后在接下来的组件生命周期钩子中获取数据。在数据获取期间显示“加载中”之类的指示。</p>

        <h5b>导航完成前获取数据</h5b>
        <p>导航完成前，在路由进入的守卫中获取数据，在数据获取成功后执行导航。</p>

        <h3b>5. 滚动行为</h3b>
        <p>使用前端路由，当切换到新路由时，想要页面滚到顶部，或者是保持原先的滚动位置，就像重新加载页面那样。 </p>
        <p>在 router 中提供 scrollBehavior (to, from, savedPosition)</p>
        <p>在router index.js 最下面</p>

        <h5b>异步滚动</h5b>

        <h3b>6. 路由懒加载</h3b>
        <p>webpack可以使用</p>
        <p>如果是 Babel 需要添加 syntax-dynamic-import插件</p>
        <p>就是现在路由用的这种情况 () => import('')</p>

        <h3b>7. 导航故障</h3b>
        <el-button @click="failePush" type="danger">失败导航</el-button>
        <p>当使用 router-link 组件时，Vue Router 会自动调用 router.push 来触发一次导航。 虽然大多数链接的预期行为是将用户导航到一个新页面，但也有少数情况下用户将留在同一页面上：</p>
        <ul>
            <li>用户已经位于他们正在尝试导航到的页面</li>
            <li>一个导航守卫通过调用 next(false) 中断了这次导航</li>
            <li>一个导航守卫抛出了一个错误，或者调用了 next(new Error())</li>
        </ul>
        <p>isNavigationFailure 函数用来检查一个错误是否来自于路由器</p>
        <h5b>NavigationFailureType</h5b>
        <p>NavigationFailureType 可以帮助开发者来区分不同类型的导航故障。有四种不同的类型：</p>
        <ul>
            <li>redirected：在导航守卫中调用了 next(newLocation) 重定向到了其他地方。</li>
            <li>aborted：在导航守卫中调用了 next(false) 中断了本次导航。</li>
            <li>cancelled：在当前导航还没有完成之前又有了一个新的导航。比如，在等待导航守卫的过程中又调用了 router.push。</li>
            <li>duplicated：导航被阻止，因为我们已经在目标位置了。</li>
        </ul>

    </div>
</template>

<script>
    import VueRouter from 'vue-router'
    const { isNavigationFailure, NavigationFailureType } = VueRouter

    export default {
        name: "highRankingRouter",
        data() {
            return {
                pwdDemo1: '',
                buttonDemo1: '登录',
                buttonDemoOneDisable: false
            }
        },
        methods: {
            demo1(userPwd) {
                this.buttonDemoOneDisable = true
                this.$router.push({name: 'loginDemoOne', params: {userPwd: userPwd}})
            },
            failePush() {
                this.$router.push({name: 'faileRouter'}).catch(failure => {
                    if (isNavigationFailure(failure, NavigationFailureType.redirected)) {
                        alert('failePush函数获取到路由报错')
                        failure.to.path
                        failure.from.path
                    }
                })
            }
        },

    }
</script>

<style scoped lang="scss">
    @import '@/static/scss/23_highRankingRouter.scss'

</style>