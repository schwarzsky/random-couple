import Vue from 'vue'
import App from './App.vue'
import './global.css'

Vue.config.productionTip = false

import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

import vueHeadful from 'vue-headful'
Vue.component('vue-headful', vueHeadful)

new Vue({
  render: h => h(App),
}).$mount('#app')
