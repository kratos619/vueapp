<template>
  <div class="component">
    <h3>You may view the User Details here</h3>
    <p>Many Details</p>
    <p>use Name : {{myName}}</p>
    <button v-on:click="resetName">reset Nmae</button>
    <button>rest Name</button>
  </div>
</template>

<script>
export default {
  props: ["myName", "secondData"],
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
  }
};
</script>
<style scoped>
div {
  background-color: lightcoral;
}
</style>