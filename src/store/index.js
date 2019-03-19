import vuex from 'vuex';
import vue from 'vue';
import todos from './modules/todos'

vue.use(vuex);

// create store

export default new vuex.Store({
  modules: {
    todos,
  }
})
