<template>
  <div>
    <button class="btn btn-primary" @click="increment">Increment</button>
    <button class="btn btn-primary" @click="decrement">Decrement</button>
    <button class="btn btn-primary" @click="changeName">changeName</button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations(["increment", "decrement"]),
    changeName() {
      console.log("name Change");
      this.$store.state.name = "sasdas";
    }
  }
};
</script>