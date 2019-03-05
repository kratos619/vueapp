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
    <ul>
      <ol v-for="(item, index) in data" :key="index">{{item.name}}</ol>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        userName: "",
        mail: ""
      },
      data: []
    };
  },
  methods: {
    submit() {
      this.$http
        .post("http://vueadmin.devs/api/user", this.user)
        .then(response => {
          console.log(response);
        })
        .catch(e => {
          console.log(e);
        });
    }
  },

  created() {
    this.$http
      .get("http://vueadmin.devs/api/user")
      .then(response => {
        return response.json();
        //console.log(data);
      })
      .then(data => {
        this.data = data.data;
      })
      .catch(e => {
        console.log(e);
      });
  }
};
</script>

<style>
</style>
