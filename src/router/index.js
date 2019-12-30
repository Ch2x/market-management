import Vue from 'vue'
import VueRouter from 'vue-router'
import Market from '@/views/Market'
import UserManagement from '@/views/UserManagement'
import ProductManagement from '@/views/ProductManagement'
import CommentManagement from '@/views/CommentManagement'
import SortManagement from '@/views/SortManagement'
import OrderManagement from '@/views/OrderManagement'
import Login from '@/views/Login'

Vue.use(VueRouter)

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
        component: UserManagement
      },
      {
        path: '/productManagement',
        name: 'ProductManagement',
        component: ProductManagement
      },
      {
        path: '/commentManagement',
        name: 'CommentManagement',
        component: CommentManagement
      },
      {
        path: '/sortManagement',
        name: 'SortManagement',
        component: SortManagement
      },
      {
        path: '/orderManagement',
        name: 'OrderManagement',
        component: OrderManagement
      },
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router