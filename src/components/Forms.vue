<template>
  <div>
    <input placeholder="name" v-on:input="changeData" v-model="textNew" type="text">
    <p>{{this.$store.state.newName}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      textNew: ""
    };
  },
  methods: {
    changeData() {
      this.$store.state.newName = this.textNew;
    }
  }
};
</script>