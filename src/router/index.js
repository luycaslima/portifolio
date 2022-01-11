import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Projects from '../views/Projects.vue'
import Games from '../views/Games.vue'
import Blog from '../views/Blog.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About,
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects,
  },
  {
    path: '/games',
    name: 'Games',
    component: Games,
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog,
  }
]

//Criar uma pág 404 pra evitar acessos indevidos
// https://next.router.vuejs.org/guide/essentials/history-mode.html#hash-mode
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
