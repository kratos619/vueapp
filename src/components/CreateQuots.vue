<template>
  <div>
    <form>
      <label for="quots">Quots</label>
      <textarea v-model="quot" cols="30" rows="3"></textarea>
      <p>{{quot}}</p>
      <br>
      <button @click.prevent="createNew">Add</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      quot: ""
    };
  },
  methods: {
    createNew() {
      if (this.quot.length <= 1) {
        alert("write something");
      } else {
        this.$emit("quoteAdded", this.quot);
        this.quot = "";
      }
    }
  }
};
</script>

<style scoped>
</style>
