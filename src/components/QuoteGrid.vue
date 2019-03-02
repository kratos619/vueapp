<template>
  <div>
    <ol>
      <Quote
        class="quotes"
        v-for="(quote, index) in quots"
        :key="index"
        v-on:click.native="deleteQuote(index)"
      >{{quote}}</Quote>
    </ol>
  </div>
</template>

<script>
import Quote from "./Quote.vue";
export default {
  props: ["quots"],
  components: {
    Quote
  },
  methods: {
    deleteQuote(index) {
      console.log(index);

      this.$emit("quoteDelete", index);
    }
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
.quotes {
  color: rebeccapurple;
  cursor: pointer;
}
</style>
