import { createRouter, createWebHashHistory,createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(), // hash模式：createWebHashHistory，history模式：createWebHistory
  routes: [
    {
      path: '/',
      redirect: '/introduce'
    },
    {
      path: '/introduce',
      name: 'introduce',
      component: () => import('../views/Introduce.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/Index.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/add',
      name: 'add',
      component: () => import('../views/good/AddGood.vue')
    },
    {
      path: '/swiper',
      name: 'swiper',
      component: () => import('../views/Swiper.vue')
    },
    {
      path: '/hot',
      name: 'hot',
      component: () => import('../views/hot/Hot.vue')
    },
    {
      path: '/category',
      name: 'category',
      component: () => import('../views/category/Category.vue'),
      // children: [
      //   {
      //     path: '/category/level2',
      //     name: 'level2',
      //     component: () => import('../views/category/Category.vue'),
      //   },
      //   {
      //     path: '/category/level3',
      //     name: 'level3',
      //     component: () => import('../views/category/Category.vue'),
      //   }
      // ]
    },
    {
      path: '/good',
      name: 'good',
      component: () => import('../views/good/Good.vue')
    },
    {
      path: '/guest',
      name: 'guest',
      component: () => import('../views/Guest.vue')
    },
    {
      path: '/order',
      name: 'order',
      component: () => import(/* webpackChunkName: "order" */ '../views/Order.vue')
    },
    {
      path: '/order_detail',
      name: 'order_detail',
      component: () => import(/* webpackChunkName: "order_detail" */ '../views/OrderDetail.vue')
    },
    {
      path: '/account',
      name: 'account',
      component: () => import(/* webpackChunkName: "account" */ '../views/Account.vue')
    }
  ]
})

export default router