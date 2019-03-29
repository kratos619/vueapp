// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
// require("materialize-css/dist/css/materialize.css");
// require("materialize-css/dist/js/materialize.js");

///require('bootstrap/dist/css/bootstrap-grid.css')
///require('bulma/css/bulma.min.css');
import VueResource from 'vue-resource';
import { store } from './store/store';
Vue.use(VueResource);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  components: {
    App
  },
  template: '<App/>'
});
