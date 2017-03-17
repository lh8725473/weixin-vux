import Vue from 'vue'
import Router from 'vue-router'
import Publish from '@/view/Publish'
import Task from '@/view/Task'
import User from '@/view/User'
import UserOrderList from '@/view/UserOrderList'
import UserTaskList from '@/view/UserTaskList'

Vue.use(Router)

export default new Router({
  base: __dirname,
  routes: [
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
        { path: 'order-list', name: 'UserOrderList', component: UserOrderList },
        { path: 'task-list', component: UserTaskList }
      ]
    },
    {
      path: '*',
      redirect: '/publish'
    }
  ]
})
