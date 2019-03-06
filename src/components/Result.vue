<template>
  <p>{{counter}}</p>
</template>

<script>
export default {
  computed: {
    counter() {
      return this.$store.state.counter + " " + this.$store.state.name;
    }
  }
};
</script>