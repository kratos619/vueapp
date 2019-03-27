// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import { routes } from './routes';
Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history',
  linkActiveClass: 'active',
  scrollBehavior(to, from, savePosition) {
    if (to.hash) {
      return {
        selector: to.hash
      };
    }
  }
});
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
});
