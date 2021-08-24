<template>
    <div>
        <h3b>1. 动态路由匹配</h3b>
        <p>1. 路由定义有顺序先后 先定义先找到就返回哪个组件</p>
        <p>2. 如果 提供了path params是不生效的</p>
        <div class="user-input">
            <span>用户名(push) : </span><el-input placeholder="输入用户名" v-model="userNamePush"></el-input>
        </div>
        <el-button @click="jump('userPush', userNamePush, 'push')">
            登录账号 + {{userNamePush}}
        </el-button>
        <router-view name="a"/>

        <h3b>2. 编程式导航</h3b>

        <h5b>router.push(path, params)</h5b>
        <p>&lt; 声明式: router-link :to="..." &gt; 编程式 router.push(...)</p>

        <h5b>router.replace(path, params)</h5b>
        <p>跟push是一样 只是不会被history记录</p>
        <p>&lt; 声明式: router-link :to="..." replace &gt;  编程式 router.replace(...)</p>
        <div class="user-input">
            <span>用户名(replace) : </span><el-input placeholder="输入用户名" v-model="userNameReplace"></el-input>
        </div>
        <el-button @click="jump('userReplace', userNameReplace, 'replace')">
            登录账号 + {{userNameReplace}}
        </el-button>
        <router-view name="b"/>

        <h5b>router.go(n)</h5b>
        <p>超出 ( 路由不够用的话 ) 就会没效果</p>
        <el-button type=primary @click="historyGo(1)">go(1)</el-button>
        <el-button type="primary" @click="historyGo(-1)">go(-1)</el-button>
        <el-button type="primary" @click="historyGo(100)">go(100)</el-button>
        <el-button type="primary" @click="historyGo(-100)">go(-100)</el-button>

        <h3b>3. 命名视图</h3b>
        <p>路由 index.js 那里 记得要将 component 变成 components 因为传入的是对象</p>
        <p>子路由配置了命名视图 同时 父路由可能也要配置相同的命名视图才能显示</p>

        <h3b>4. 重定向</h3b>
        <p>redirect 可以是path 对象 函数</p>

        <h5b>别名 ( alias )</h5b>
        <p>/a 别名是 /b 访问 /b时路由保持/b 但路由匹配为 /a </p>
        { path: '/a', component: A, alias: '/b' }

        <h3b>5. 路由组件传参</h3b>
        <p>使用 $route 会与对应路由形成高度耦合 使用props将组件和路由解耦</p>
        <p>对于包含命名属兔的路由 必须分别为每个命名视图添加 props </p>
        <p>视图命名是 default的话 那么 路由的 props那边也是 default </p>
        <div class="user-input">
            <span>用户名(props) : </span><el-input placeholder="输入用户名" v-model="userNameProps"></el-input>
        </div>
        <el-button @click="jump('userProps', userNameProps, 'push')">
            登录账号 + {{userNameProps}}
        </el-button>
        <router-view name="c"/>

        <h5b>布尔模式</h5b>
        <p>如果 props 被设置为 true，route.params 将会被设置为组件属性。</p>
        <h5b>对象模式</h5b>
        <p>如果 props 是一个对象，它会被按原样设置为组件属性。当 props 是静态的时候有用。</p>
        <h5b>函数模式</h5b>
        <p>你可以创建一个函数返回 props。这样你便可以将参数转换成另一种类型，将静态值与基于路由的值结合等等。</p>

        <h3b>6. html5 history模式</h3b>
        <p>要后台配合 </p>
        <el-link type="success" href="https://router.vuejs.org/zh/guide/essentials/history-mode.html#%E5%90%8E%E7%AB%AF%E9%85%8D%E7%BD%AE%E4%BE%8B%E5%AD%90">vueRouter官网history</el-link>

        <h3b>后期关注</h3b>
        <p>方法中的 push go replace 都是 this.$router.go</p>
        <p>当其他组件访问路由的属性的时候( this.$route.params )</p>

    </div>

</template>

<script>
    export default {
        name: "vueRouter",
        data() {
            return {
                userNamePush: '',
                userNameReplace: '',
                userNameProps: ''
            }
        },
        computed: {

        },
        methods: {
            jump(routerName, content, mode) {
                if (mode === 'replace') {
                    this.$router.replace({name: routerName, params: {user: content}})
                } else {
                    this.$router.push({name: routerName, params: {user: content}})
                }
            },

            historyGo(historyNum) {
                this.$router.go(historyNum)
            }
        }
    }
</script>

<style scoped lang="scss">
    @import '@/static/scss/22_vueRouter.scss'

</style>