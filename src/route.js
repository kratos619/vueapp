import user from './components/Users.vue'
import userDetails from './components/UserDetails.vue'
import userEdit from './components/UserEdit.vue'
export const routes = [{
    path: '/user',
    component: user
  },
  {
    path: '/userdetails',
    component: userDetails
  },
  {
    // passing data with url
    path: '/useredit/:id/:name',
    component: userEdit
  }, {
    // passing data with url
    path: '/useredit',
    component: userEdit
  }
]
