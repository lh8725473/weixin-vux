import Vue from 'vue'
import Router from 'vue-router'
import Task from '@/view/Task'
import User from '@/view/User'
import UserInfo from '@/view/UserInfo'
import UserOrderList from '@/view/UserOrderList'
import UserTaskList from '@/view/UserTaskList'
import Login from '@/view/Login'
import SignUp from '@/view/SignUp'

const Home = () => import('@/view/Home')
const Publish = () => import('@/view/Publish')

Vue.use(Router)

export default new Router({
  base: __dirname,
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/sign-up',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/publish',
      name: 'Publish',
      component: Publish
    },
    {
      path: '/task',
      name: 'Task',
      component: Task
    },
    {
      path: '/user',
      name: 'User',
      component: User,
      children: [
        { path: 'info', name: 'UserInfo', component: UserInfo },
        { path: 'order-list', name: 'UserOrderList', component: UserOrderList },
        { path: 'task-list', name: 'UserTaskList', component: UserTaskList }
      ]
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
})
