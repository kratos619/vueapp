import User from './components/user/User.vue'
import Home from './components/Home.vue'
import UserStart from './components/user/UserStart.vue'
import UserDetails from './components/user/UserDetails.vue'
import UserEdit from './components/user/UserEdit.vue'
import Header from './components/user/Header.vue'
export const routes = [{
    path: '/user',
    components: {
      default: User,
      'footer': Header
    },

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
        component: UserEdit,
        name: 'userEdit'
      },
    ]
  },
  {
    path: '/',
    components: {
      default: Home,
      'header': Header
    }
  },
  {
    path: '*',
    redirect: '/'
  }
]
