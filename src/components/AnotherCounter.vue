<template>
  <div>
    <button class="btn btn-primary" @click="increment">Increment</button>
    <button class="btn btn-primary" @click="decrement">Decrement</button>
    <button class="btn btn-primary" @click="changeName">changeName</button>
  </div>
</template>

<script>
export default {
  methods: {
    increment() {
      this.$store.state.counter++;
      console.log("inc");
    },
    decrement() {
      console.log("dec");

      this.$store.state.counter--;
    },
    changeName() {
      console.log("name Change");
      this.$store.state.name = "sasdas";
    }
  }
};
</script>