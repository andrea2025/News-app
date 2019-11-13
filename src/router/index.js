import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Services from '../views/Services.vue'
import DashboardH from '../views/Dashboard/Index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/contact-us',
    name: 'contact',
    component: () => import(/* webpackChunkName: "about" */ '../views/Contact.vue')
  },
  {
    path: '/service',
    name: 'service',
    component:Services,
    children: [
      {
        path: 'website',
        name: 'website-service',
        component: () => import('../views/Home.vue')
      }
    ]
},
{
  path: '/admin',
  name: 'dashboard',
  component: DashboardH,
  children: [
    {
      path: '',
      name: 'dashboard-home',
      component: () => import('../views/Dashboard/Home.vue')
    },
    {
      path: 'user',
      name: 'dashboard-user',
      component: () => import('../views/Dashboard/User.vue'),
      children: [
        {
          path: ':id',
          name: 'dashboard-user-single',
          component: () => import ('../views/Dashboard/SingleUser.vue')
        }
      ]
    }
  ]
},
{
  path: '*',
  name: '404',
  component: () => import(/* webpackChunkName: "about" */ '../views/404.vue')
},

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
