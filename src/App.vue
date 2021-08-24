<template>
  <div id="app">
    <header>
      <nav>
        <ul>
          <li v-for="(eachNav, index) in navList"
            :key=index @click="ClickToChange(index)"
            :class="{ active: beforeCurrent === index }"
          >
            <router-link :to="eachNav.router">{{ eachNav.title }}</router-link>
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <transition name="slide-fade">
        <router-view/>
      </transition>

    </main>
    <footer>
      <el-backtop :bottom="100">
        <div
                style="{
        height: 100%;
        width: 100%;
        background-color: black;
        box-shadow: 0 0 20px 10px rgba(255, 102, 102,0.7);
        text-align: center;
        line-height: 40px;
        border-radius: 10px;
        color: white;
      }"
        >
          UP
        </div>
      </el-backtop>
    </footer>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        navList: [
          {title: '1-生命周期', router: '/LifeCycle'},
          {title: '2-模板语法', router: '/ModuleSyntax'},
          {title: '3-计算属性和侦听器', router: '/ComputedWatch'},
          {title: '4-Class 与 Style绑定', router: '/ClassAndStyle'},
          {title: '5-条件渲染', router: '/ConditionRender'},
          {title: '6-列表渲染', router: '/ListRender'},
          {title: '7-事件处理', router: '/EventManage'},
          {title: '8-表单输入绑定', router: '/FormInput'},
          {title: '9-组件基础', router: '/ComponentChapter'},
          {title: '10-Prop', router: '/PropChapter'},
          {title: '11-自定义事件', router: '/CustomEvent'},
          {title: '12-Slot', router: '/SlotComponent'},
          {title: '13-动态和异步组件', router: '/dynamicAsyncComponent'},
          {title: '14-管理边界情况', router: '/manageBorder'},
          {title: '15-进入/离开&列表过渡', router: '/ListTransition'},
          {title: '16-状态过渡', router: '/stateTransition'},
          {title: '17-mixin', router: '/mixin'},
          {title: '18-自定义指令', router: '/customInstruct'},
          {title: '19-渲染函数 & JSX', router: '/renderFunction'},
          {title: '20-插件', router: '/plug'},
          {title: '21-过滤器', router: '/filtrator'},
          {title: '22-路由', router: '/vueRouter'},
          {title: '23-高级路由', router: '/highRankingRouter'},
          {title: '24-API', router: '/API'},
          {title: '25-store', router: '/StoreComponent'},
          {title: '26-axios', router: '/AxiosComponent'},
          {title: '27-登录', router: '/LoginComponent'},
          {title: '28-上传下载', router: '/uploadDownload'},
          {title: '29-vue-loader', router: '/vueLoader'},
          {title: '30-响应式原理', router: '/responTheory'},
          {title: '预备党员', router: ''},
          {title: '预备党员', router: ''},
          {title: '预备党员', router: ''},
          {title: '预备党员', router: ''},
          {title: '*-test', router: '/testComponent'},
        ],
        beforeCurrent: 0,
      }
    },
    methods: {
      ClickToChange(index) {
        let session = window.sessionStorage;
        this.beforeCurrent = index
        session.setItem('index', index);
      }
    },
    created() {
      let session = window.sessionStorage;
      if (session.getItem('index')) {
        this.beforeCurrent = Number(session.getItem('index'));
      }

    }
  }
</script>
<style lang="scss" scoped>
  @import './static/scss/App.scss';

</style>
