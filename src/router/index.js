import Vue from 'vue'
import Router from 'vue-router'
import Publish from '@/view/Publish'
import Task from '@/view/Task'
import User from '@/view/User'

Vue.use(Router)

export default new Router({
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
      component: User
    }
  ]
})
