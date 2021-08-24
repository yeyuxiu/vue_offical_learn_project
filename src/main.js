import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './static/scss/Global.css';

// ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)

import md5 from 'js-md5'
Vue.prototype.$md5 = md5

import h3b from '@/components/h3b';
import h5b from '@/components/h5b';
// 引入全局组件

Vue.component("h3b", h3b)
Vue.component("h5b", h5b)

import axios from 'axios'
import _ from 'lodash'
Vue.prototype._ = _
Vue.prototype.$axios = axios

import gsap from 'gsap'
Vue.prototype.gsap = gsap

Vue.config.productionTip = false


import {store} from '@/store/index.js'

new Vue({
  router,
  store,
  data() {
    return {
      // 14.1 根属性的访问
      foo: 'test'
    }
  },
  render: h => h(App)
}).$mount('#app')

