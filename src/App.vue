<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-md-6 mx-auto">
          <h1>Routing</h1>
          <Header></Header>
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/user/Header.vue";
export default {
  components: {
    Header
  }
};
</script>

<style>
</style>
