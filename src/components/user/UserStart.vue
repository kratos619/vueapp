<template>
  <div>
    <p>Please select a User</p>
    <hr>
    <ul class="list-group">
      <li class="list-group-item" style="cursor: pointer">
        <router-link to="/user/1">User 1</router-link>
      </li>
      <li class="list-group-item" style="cursor: pointer">
        <router-link to="/user/2">User 2</router-link>
      </li>
      <li class="list-group-item" style="cursor: pointer">
        <router-link to="/user/3">User 3</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {};
</script>

<style>
</style>
