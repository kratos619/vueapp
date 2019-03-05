// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import bootstrap from 'bootstrap/dist/css/bootstrap.css';
import VueResource from 'vue-resource';
import vueRouter from 'vue-router';
import {
  routes
} from './route'
Vue.use(vueRouter);
Vue.use(VueResource);

const router = new vueRouter({
  routes,
  mode: "history"
})

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
