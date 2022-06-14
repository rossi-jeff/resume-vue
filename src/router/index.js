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
    path: '/contact',
    name: 'Contact',
    // route level code-splitting
    // this generates a separate chunk (contact.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue')
  },
  {
    path: '/employment',
    name: 'Employment',
    // route level code-splitting
    // this generates a separate chunk (employment.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "employment" */ '../views/Employment.vue')
  },
  {
    path: '/education',
    name: 'Education',
    // route level code-splitting
    // this generates a separate chunk (education.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "education" */ '../views/Education.vue')
  },
  {
    path: '/references',
    name: 'References',
    // route level code-splitting
    // this generates a separate chunk (references.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "references" */ '../views/References.vue')
  },
  {
    path: '/testimonials',
    name: 'Testimonials',
    // route level code-splitting
    // this generates a separate chunk (testimonials.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "testimonials" */ '../views/Testimonials.vue')
  },
  {
    path: '/links',
    name: 'Links',
    // route level code-splitting
    // this generates a separate chunk (links.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "links" */ '../views/Links.vue')
  },
  {
    path: '/download',
    name: 'Download',
    // route level code-splitting
    // this generates a separate chunk (download.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "download" */ '../views/Download.vue')
  },
  {
    path: '/references/:uuid',
    name: 'ReferenceDetail',
    // route level code-splitting
    // this generates a separate chunk (reference_detail.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "reference_detail" */ '../views/ReferenceDetail.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
