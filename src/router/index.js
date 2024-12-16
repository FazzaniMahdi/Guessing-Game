import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import GuessingGameMain from '@/views/GuessingGameMain.vue'
import NotFoundView from '@/views/NotFoundView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: "/game",
    name: "guessingGame",
    component: GuessingGameMain
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notFound",
    component: NotFoundView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
