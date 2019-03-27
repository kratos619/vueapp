<template>
  <div class="animated jackInTheBox">
    <h1>The User Page</h1>
    <hr>
    <button v-on:click="navigateToHome">Go to Home</button>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  methods: {
    navigateToHome() {
      this.$router.push("/");
    }
  }
};
</script>