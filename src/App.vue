<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <app-user></app-user>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import User from "./components/User.vue";

export default {
  components: {
    appUser: User
  }
};
</script>

<style>
div.component {
  border: 1px solid black;
  padding: 30px;
}
</style>