// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import bootstrap from 'bootstrap/dist/css/bootstrap.css'
import VueResource from 'vue-resource';
Vue.directive('highlight', {
  bind(el, binding, vnode) {
    //el.style.backgroundColor = 'green';
    //el.style.backgroundColor = binding.value;
    // adding Modifire
    var delay = 0;
    if (binding.modifiers['delayed']) {
      delay = 2000;

    }
    if (binding.modifiers['blink']) {
      let mainColor = binding.value.mainColor;
      let secondColor = binding.value.secondColor;
      let currentColor = mainColor;

      setTimeout(() => {

        setInterval(() => {
          currentColor == secondColor ? currentColor = mainColor : currentColor = secondColor
          if (binding.arg == 'background') {
            el.style.backgroundColor = currentColor;
          } else {
            el.style.color = currentColor
          }
        }, binding.value.delay);

      }, delay);

    } else {

      setTimeout(() => {

        if (binding.arg === 'background') {
          el.style.backgroundColor = binding.value;
        } else {
          el.style.color = binding.value;
        }
      }, delay);
    }
  }
})
Vue.use(VueResource)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>'
})
