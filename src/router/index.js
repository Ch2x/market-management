import Vue from 'vue'
import Router from 'vue-router'
import Market from '@/views/Market'
// import UserManagement from '@/views/UserManagement'
// import ProductManagement from '@/views/ProductManagement'
// import CommentManagement from '@/views/CommentManagement'
// import SortManagement from '@/views/SortManagement'
// import OrderManagement from '@/views/OrderManagement'
import Login from '@/views/Login'

Vue.use(Router)

const routes = [{
    path: '/',
    name: 'Login',
    component: Login,
  },
  {
    path: '/market',
    name: 'Market',
    component: Market,
    children: [{
        path: '/userManagement',
        name: 'UserManagement',
        component: () => import( /* webpackChunkName: "UserManagement" */ '@/views/UserManagement')
      },
      {
        path: '/productManagement',
        name: 'ProductManagement',
        component: () => import( /* webpackChunkName: "ProductManagement" */ '@/views/ProductManagement')
      },
      {
        path: '/commentManagement',
        name: 'CommentManagement',
        component: () => import( /* webpackChunkName: "CommentManagement" */ '@/views/CommentManagement')
      },
      {
        path: '/sortManagement',
        name: 'SortManagement',
        component: () => import( /* webpackChunkName: "SortManagement" */ '@/views/SortManagement')
      },
      {
        path: '/orderManagement',
        name: 'OrderManagement',
        component: () => import( /* webpackChunkName: "OrderManagement" */ '@/views/OrderManagement')
      },
    ]
  }
]

// const router = new VueRouter({
//   routes
// })

export function createRouter() {
  return new Router({
    mode: 'history',
    routes
  })
}