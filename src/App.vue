<template>
  <div id="app">
    <div class="container">
      <form>
        <div class="row">
          <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
            <h1>File a Complaint</h1>
            <hr>
            <div class="form-group">
              <label for="email">Mail</label>
              <input v-model="userData.email" type="text" id="email" class="form-control">
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input
                type="password"
                v-model.lazy="userData.password"
                id="password"
                class="form-control"
              >
            </div>
            <div class="form-group">
              <label for="age">Age</label>
              <input type="number" v-model.lazy.number="number" id="age" class="form-control">
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
            <label for="message">Message</label>
            <br>
            <!-- Interpolation between <textarea>{{ test }}</textarea> doesn't work!-->
            <textarea id="message" v-model="message" rows="5" class="form-control"></textarea>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
            <div class="form-group">
              <label for="sendmail">
                <input type="checkbox" id="sendmail" v-model="sendemail" value="SendMail"> Send Mail
              </label>
              <label for="sendInfomail">
                <input type="checkbox" id="sendInfomail" v-model="sendemail" value="SendInfoMail"> Send Infomail
              </label>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
            <label for="male">
              <input type="radio" id="male" v-model="gender" value="Male"> Male
            </label>
            <label for="female">
              <input type="radio" id="female" v-model="gender" value="Female"> Female
            </label>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 from-group">
            <label for="priority">Priority</label>
            <select id="priority" v-model="selectedpriorities" class="form-control">
              <option v-for="(item, index) in priorities" :key="index">{{item}}</option>
            </select>
          </div>
        </div>
        <hr>
        <div class="row">
          <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
            <button v-on:click.prevent="submitForm" class="btn btn-primary">Submit!</button>
          </div>
        </div>
      </form>
      <hr>
      <div v-if="formSubmitted" class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <div class="panel panel-default">
            <div class="panel-heading">
              <h4>Your Data</h4>
            </div>
            <div class="panel-body">
              <p>Mail: {{userData.email}}</p>
              <p>Password:{{userData.password}}</p>
              <p>Age: {{number}}</p>
              <p style="white-space: pre">Message: {{message}}</p>
              <p>
                <strong>Send Mail?</strong>
              </p>
              <ul>
                <li v-for="(mail, index) in sendemail" :key="index">{{mail}}</li>
              </ul>
              <p>Gender: {{gender}}</p>
              <p>Priority: {{selectedpriorities}}</p>
              <p>Switched:</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userData: {
        email: "",
        password: ""
      },
      number: 0,
      message: "",
      sendemail: [],
      gender: "Male",
      selectedpriorities: "Low",
      priorities: ["High", "Medium", "Low", "very Low"],
      formSubmitted: false
    };
  },
  methods: {
    submitForm() {
      this.formSubmitted = true;
    }
  }
};
</script>

<style>
</style>
