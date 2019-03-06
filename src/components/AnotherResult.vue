<template>
  <div>
    <p>{{doubleCounter}}</p>
    <p>{{stringCounter}}</p>
    <p>{{hi}}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["doubleCounter", "stringCounter"]),
    hi() {
      return "hi";
    }
  }
  // counter() {
  //   return this.$store.getters.doubleCounter;
  // },
  // clicks() {
  //   return this.$store.getters.stringCounter;
  // }
};
</script>