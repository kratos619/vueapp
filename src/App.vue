<template>
  <div id="app">
    <header class="p-4"></header>
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <Candidate></Candidate>
        </div>
        <div class="col-md-6">
          <Employee></Employee>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Candidate from "./components/Candidate.vue";
import Employee from "./components/Employee.vue";
export default {
  name: "App",
  components: {
    Header,
    Candidate,
    Employee
  }
};
</script>

<style>
</style>
