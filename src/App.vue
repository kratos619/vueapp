<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <form>
            <div class="form-group">
              <label for>Enter Quotes</label>
              <input
                type="text"
                class="form-control"
                placeholder="Quotes"
                aria-describedby="helpId"
              >
            </div>
            <div class="form-group">
              <input type="button" value="POST" class="btn btn-primary">
            </div>
          </form>
        </div>
        <div class="col-md-6">
          <p v-for="(item, index) in quotes" :key="index">{{quotes.content}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      quotes: []
    };
  },

  mounted() {
    axios
      .get("http://127.0.0.1:8000/api/quotes")
      .then(response => {
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }
};
</script>

<style>
</style>
