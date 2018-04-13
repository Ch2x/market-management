import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Market from '@/views/Market'
import UserManagement from '@/views/UserManagement'
import ProductManagement from '@/views/ProductManagement'
import CommentManagement from '@/views/CommentManagement'
import SortManagement from '@/views/SortManagement'
import Login from '@/views/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
    },
    {
      path: '/market',
      name: 'Market',
      component: Market,
      children: [
        {
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
      ]
    }
  ]
})
