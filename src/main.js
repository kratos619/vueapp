// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import bootstrap from 'bootstrap/dist/css/bootstrap.css'
import VueResource from 'vue-resource';
import AdminLogin from './auth/Admin-login.js';
import routes from './Router.js'

Vue.use(VueResource)
Vue.use(AdminLogin)
Vue.config.productionTip = false

routes.beforeEach((to, from, next, ) => {
  if (to.matched.some(record => record.meta.forVisitors)) {
    if (Vue.auth.isAuthenticated()) {
      next({
        path: '/admin-dashboard'
      })
    } else {
      next()
    }

  } else if (to.matched.some(record => record.meta.forAuth)) {
    if (!Vue.auth.isAuthenticated()) {
      next({
        path: '/'
      })
    } else {
      next()
    }
  } {
    next()
  }

})


/* eslint-disable no-new */
new Vue({
  el: '#app',

  components: {
    App
  },
  router: routes,
  template: '<App/>'
})
