import Vue from 'vue'
import Router from 'vue-router'
import Publish from '@/view/Publish'
import Task from '@/view/Task'
import User from '@/view/User'
import UserInfo from '@/view/UserInfo'
import UserOrderList from '@/view/UserOrderList'
import UserTaskList from '@/view/UserTaskList'
import Login from '@/view/Login'
import SignUp from '@/view/SignUp'

Vue.use(Router)

export default new Router({
  base: __dirname,
  routes: [
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
      redirect: '/task'
    }
  ]
})
