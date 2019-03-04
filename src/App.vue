<template>
  <div id="app">
    <h1>HTTP</h1>
    <div class="form-group">
      <label for="userName">UserName</label>
      <input
        v-model="user.userName"
        type="text"
        class="form-control"
        placeholder="User Nme"
        aria-describedby="helpId"
      >
    </div>
    <div class="form-group">
      <label for="Mail">Mail</label>
      <input
        v-model="user.mail"
        type="text"
        class="form-control"
        placeholder="Email"
        aria-describedby="helpId"
      >
    </div>
    <button v-on:click="submit" class="btn btn-primary">Submit</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        userName: "",
        mail: ""
      }
    };
  },
  methods: {
    submit() {
      this.$http
        .post(
          "https://vueproject-1c792.firebaseio.com/data/data.json",
          this.user
        )
        .then(response => {
          console.log(response);
        })
        .catch(e => {
          console.log(e);
        });
    }
  }
};
</script>

<style>
</style>
