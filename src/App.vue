<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-md-6 mx-auto">
          <h1>hello</h1>
          <button v-on:click="show = !show" class="btn btn-primary">Click Me</button>
          <transition>
            <p v-if="show" class="alert alert-info">hi</p>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false
    };
  },
  methods: {}
};
</script>
<style scoped>
</style>
