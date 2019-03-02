<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="p-4 col-md-6 mx-auto">
          <h1>Mixin And Filters</h1>
          <p>{{text|toUppercase}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "jaskjdhakj"
    };
  },
  filters: {
    toUppercase(value) {
      return value.toUpperCase();
    }
  }
};
</script>

<style>
</style>
