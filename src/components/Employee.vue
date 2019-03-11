<template>
  <div>
    <div class="card">
      <div class="card-header">Admin Login</div>
      <div class="card-body">
        <form v-on:submit.prevent="employeeLogin">
          <div class="form-group">
            <label for="emil">Email</label>
            <input type="email" v-model="data.email" class="form-control" placeholder="Email">
          </div>
          <div class="form-group">
            <label for="emil">password</label>
            <input
              type="password"
              v-model="data.password"
              class="form-control"
              placeholder="password"
            >
          </div>
          <div class="form-group">
            <input type="submit" value="Login" class="btn btn-primary btn-block">
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: {
        email: "",
        password: ""
      }
    };
  },

  methods: {
    employeeLogin() {
      let data = {
        username: this.data.email,
        password: this.data.password,
        grant_type: "password",
        client_id: 2,
        client_secret: "USbSzidwyBTIMz3hzq8hHAzAEzAgZspqvhI8ilIU",
        theNewProvider: "admin"
      };
      this.$http
        .post("http://127.0.0.1:8000/oauth/token", data)
        .then(response => {
          this.$auth.setToken(
            response.body.access_token,
            response.body.expires_in + Date.now()
          );
        })
        .catch(e => {
          console.log(e);
        });
    }
  }
};
</script>

<style scoped>
</style>
