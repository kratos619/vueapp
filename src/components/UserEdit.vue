<template>
  <div>
    <h1>Users Edite</h1>
    <p>{{id}}</p>
    <p>{{name}}</p>
    <p>{{local}}</p>
    <p>{{q}}</p>
    <router-link to="/">back</router-link>
    <router-link to="/useredit/1/saurav">Link to data</router-link>
    <router-link to="/useredit/3/sdasd">Link to data 2</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // read pearameters
      id: this.$route.params.id,
      name: this.$route.params.name,
      local: this.$route.query.local,
      q: this.$route.query.q
    };
  },
  watch: {
    // dynamic route link change
    $route(to, from) {
      this.id = to.params.id;
      this.name = to.params.name;
    }
  }
};
</script>