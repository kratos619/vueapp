// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import bootstrap from 'bootstrap/dist/css/bootstrap.css'
import VueResource from 'vue-resource';
window.axios = require('axios');
Vue.use(VueResource)
Vue.use(axios)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>'
})
