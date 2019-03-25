import User from './components/user/User.vue'
import Home from './components/Home.vue'
import UserStart from './components/user/UserStart.vue'
import UserDetails from './components/user/UserDetails.vue'
import UserEdit from './components/user/UserEdit.vue'
export const routes = [{
    path: '/user',
    component: User,
    children: [{
        path: '',
        component: UserStart
      },
      {
        path: ':id',
        component: UserDetails
      },
      {
        path: ':id/edit',
        component: UserEdit
      },
    ]
  },
  {
    path: '/',
    component: Home
  }
]
