<template>
  <div class="component">
    <h3>You may edit the User here</h3>
    <p>Edit me!</p>
    {{userAge}}
    <button v-on:click="editAge">edit Age</button>
  </div>
</template>

<script>
import { eventBus } from "../main";
export default {
  data() {
    return {
      userAge: 22
    };
  },
  methods: {
    editAge() {
      this.userAge = 23;
      // this.$emit("ageWas", this.userAge);
      eventBus.$emit("ageWas", this.userAge);
    }
  }
};
</script>

<style scoped>
div {
  background-color: lightgreen;
}
</style>