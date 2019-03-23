<template>
  <div class="component">
    <h3>You may view the User Details here</h3>
    <p>Many Details</p>
    <p>use Name : {{myName}}</p>
    <p>User Age : {{userAge}}</p>
    <button v-on:click="resetName">reset Nmae</button>
    <!-- <button v-on:click="childComponentMethodName">rest Name</button> -->
  </div>
</template>

<script>
import { eventBus } from "../main";
export default {
  data() {
    return {
      myName: "",
      secondData: "",
      childComponentMethodName: Function,
      userAge: ""
    };
  },
  methods: {
    switchName() {
      return this.myName
        .split("")
        .reverse()
        .join("");
    },
    resetName() {
      this.myName = "from child gaurav";
      this.$emit("nameWasReset", this.myName);
    }
  },
  created() {
    this.secondData = [
      {
        id: 1,
        name: "gaurav"
      },
      {
        id: 2,
        name: "ssaurabh"
      },
      {
        id: 3,
        name: "rohit"
      }
    ];
    this.$emit("sendDataToParent", this.secondData);
  },
  created() {
    eventBus.$on("ageWasedited", age => {
      this.userAge = age;
    });
  }
};
</script>
<style scoped>
div {
  background-color: lightcoral;
}
</style>