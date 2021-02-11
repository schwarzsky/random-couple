import Vue from 'vue'
import App from './App.vue'
import './global.css'

Vue.config.productionTip = false

import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

import vueHeadful from 'vue-headful'
Vue.component('vue-headful', vueHeadful)

import VueRouter from 'vue-router'
import Main from './components/pages/Main.vue'
const routes = [
  {path: '*', name: 'Main', component: Main, meta: {guest: true}},
  {path: '/:season/:episode', component: Main, meta: {guest: true}}
]

const router = new VueRouter({routes, mode: 'history'})
Vue.use(VueRouter)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
