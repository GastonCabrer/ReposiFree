import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/adobe_recursos',
    name: 'Adobe Recursos',
    component: () => import(/* webpackChunkName: "about" */ '../views/Adobe_Recursos.vue')
  },
  {
    path: '/Libreria_Sonido',
    name: 'Libreria_Sonido',
    component: () => import(/* webpackChunkName: "about" */ '../views/Libreria_Sonido.vue')
  },
  {
    path: '/Referencias_Anatomia',
    name: 'Referencias_Anatomia',
    component: () => import(/* webpackChunkName: "about" */ '../views/Referencias_Anatomia.vue')
  },
  {
    path: '/Recursos_Fotografia',
    name: 'Recursos_Fotografia',
    component: () => import(/* webpackChunkName: "about" */ '../views/Recursos_Fotografia.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
