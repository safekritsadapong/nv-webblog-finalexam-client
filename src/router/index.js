import Vue from 'vue'
import Router from 'vue-router'
import UserIndex from '@/components/Users/Index'
import UserEdit from '@/components/Users/EditUser'
import UserShow from '@/components/Users/ShowUser'
import UserCreate from '@/components/Users/CreateUser'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/speaker/create',
      name: 'speaker-create',
      component: UserCreate
    },
    {
      path: '/speaker/edit/:speakerId',
      name: 'speaker-edit',
      component: UserEdit
    },
    {
      path: '/speaker/:speakerId',
      name: 'speaker',
      component: UserShow
    },
    {
      path: '/speakers',
      name: 'speakers',
      component: UserIndex
    },

    

  ]
})
