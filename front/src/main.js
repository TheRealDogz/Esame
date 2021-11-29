import Vue from 'vue'
import App from './App.vue'

import './style.css'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Home from '@/components/Home.vue'
import Lista from '@/components/Lista.vue'
import Creazione from '@/components/Creazione.vue'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/lista',
    name: 'lista',
    component: Lista
  },
  {
    path: '/creazione',
    name: 'creazione',
    component: Creazione
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
