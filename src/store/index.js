import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import carB from './modules/carB'
import {logger} from "./logger";

import Vuex from 'vuex'
import Vue from "vue";
Vue.use(Vuex)

const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    modules: {
        b: carB
    },
    plugins: [logger]
})

export {store}