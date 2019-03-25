<template>
  <div>
    <h3>Some User Details</h3>
    <p>User Loaded Has ID : {{id}}</p>
    <router-link tag="button" v-bind:to="id + '/edit'">Edit User</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id
    };
  }
};
</script>