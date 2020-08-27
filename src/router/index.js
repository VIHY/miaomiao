import { createRouter, createWebHistory } from 'vue-router'
import login from '@/views/Login'

export default createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes:[{
    name:'登录',
    path:'/login',
    component:login
  }
  ]
})
