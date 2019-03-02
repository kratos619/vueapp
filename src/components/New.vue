<template>
  <div>
    <h1>this is New</h1>
    <button v-on:click="counter++">Click Me</button>
    <p>{{counter}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0
    };
  }
};
</script>

<style scoped>
</style>
