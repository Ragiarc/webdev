import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MRView from '../components/MRView.vue'
import UnrealView from '../components/UnrealView.vue'
import TestingView from '../components/TestingView.vue'
import AWSView from '../components/AWSView.vue'
import SQLView from '../components/SQLView.vue'
import WebView from '../components/WebView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children: [
      {path: '/mr', component: MRView},
      {path: '/ue4', component: UnrealView},
      {path: '/test', component: TestingView},
      {path: '/aws', component: AWSView},
      {path: '/sql', component: SQLView},
      {path: '/web', component: WebView},
    ]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
