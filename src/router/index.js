import Vue from 'vue'
import VueRouter from 'vue-router'
import Posts from '../views/Posts.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Posts',
    component: Posts
  },
  {
    path: '/post/:id',
    name: 'PostOpen',
    props: true,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/PostOpen.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
