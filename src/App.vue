<template>
  <div id="app">
    <div class="container">
      <form class="needs-validation" novalidate>
        <div class="row">
          <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
            <h1>File a Complaint</h1>
            <hr>
            <div class="form-group">
              <label for="email">Mail</label>
              <input
                v-model="email"
                type="text"
                id="email"
                class="form-control"
                :class="{'is-invalid' : $v.email.$error  , 'is-valid' : $v.email.$dirty}"
                v-on:blur="$v.email.$touch()"
              >
              <p v-if="!$v.email.email">
                plese provide valid email address
                <small class="text-muted">ex: example@example.com</small>
              </p>
              <p v-if="$v.email.$error">this cant be empty</p>
            </div>
            <div class="form-group">
              <label for="mobileNumer">Phone Number</label>
              <input
                v-on:blur="$v.phoneNumber.$touch()"
                type="text"
                v-model.number="phoneNumber"
                class="form-control"
                :class="{'is-invalid' : $v.phoneNumber.$error  , 'is-valid' : $v.phoneNumber.$dirty}"
              >
              <p v-if="$v.phoneNumber.$error">
                plese provide valid Phone Number
                <small class="text-muted">ex: 9090909090</small>
              </p>
              <p v-if="$v.phoneNumber.$error">this cant be empty</p>
            </div>

            <div class="form-group">
              <label for="password">Password</label>
              <input type="password" v-model.lazy="password" id="password" class="form-control">
            </div>

            <div class="form-group">
              <label for="Confirm-Password">Confirm Password</label>
              <input
                type="password"
                :class="{'is-invalid' : !$v.confirmpassword.sameAs  , 'is-valid' : !$v.confirmpassword.$invalid}"
                v-model="confirmpassword"
                id="password"
                class="form-control"
              >
            </div>

            <p v-if="!$v.confirmpassword.sameAs">Not Match</p>
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
            <div class="form-check">
              <label for="sendmail">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="sendmail"
                  v-model="sendemail"
                  value="SendMail"
                > Send Mail
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
            <button
              v-on:click.prevent="submitForm"
              :disabled="$v.$invalid"
              class="btn btn-primary"
            >Submit!</button>
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
import {
  required,
  email,
  between,
  numeric,
  minValue,
  maxValue,
  minLength,
  maxLength,
  sameAs
} from "vuelidate/lib/validators";
export default {
  data() {
    return {
      phoneNumber: "",
      email: "",
      password: "",
      number: 0,
      message: "",
      confirmpassword: "",
      sendemail: [],
      gender: "Male",
      selectedpriorities: "Low",
      priorities: ["High", "Medium", "Low", "very Low"],
      formSubmitted: false
    };
  },
  validations: {
    email: {
      required,
      email
    },
    phoneNumber: {
      required,
      numeric,
      minLength: minLength(10),
      maxLength: maxLength(10)
    },
    password: {
      required,
      minLength: minLength(8)
    },
    confirmpassword: {
      required,
      sameAs: sameAs("password")
    }
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
