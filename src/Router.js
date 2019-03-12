import vue from 'vue';
import VueRouter from 'vue-router';
import AdminDashboard from './components/AdminDashboard.vue'

vue.use(VueRouter);

const router = new VueRouter({
  routes: [{
    path: '/admin-dashboard',
    component: AdminDashboard,
    meta: {
      forAuth: true,
    }
  }]
})


export default router;
