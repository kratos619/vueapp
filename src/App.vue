<template>
  <div id="app">app users
    <nav class="nav justify-content-center">
      <router-link class="nav-link" to="/userstart">UserStart</router-link>
      <router-link class="nav-link" to="/user">User</router-link>
      <router-link class="nav-link" to="/useredit">User Edit</router-link>
      <router-link class="nav-link" to="/newHeader">new</router-link>
    </nav>
    <hr>
    <router-view></router-view>
    <router-view name="second"></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
