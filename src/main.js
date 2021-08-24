import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/style/Global.css'

Vue.config.productionTip = false

// 引入包
import axios from "axios";
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.prototype.$axios = axios
Vue.use(Element)

// 引入全局组件

// 引入全局css


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
