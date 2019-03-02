<template>
  <div id="app">
    <ProgreeBar :quoteCount="quots.length" :maxQuotes="maxQuotes"></ProgreeBar>
    <CreateQuots @quoteAdded="newQuote"></CreateQuots>
    <OuoteGrid :quots="quots" @quoteDelete="deletequote"></OuoteGrid>
    <p class="lead">clik on quots to delete</p>
  </div>
</template>

<script>
import ProgreeBar from "./components/HeaderProgreebar.vue";
import CreateQuots from "./components/CreateQuots";
import OuoteGrid from "./components/QuoteGrid";
import Quote from "./components/Quote.vue";
import Author from "./components/Author.vue";
import New from "./components/New.vue";
export default {
  name: "App",
  data() {
    return {
      maxQuotes: 10,
      quots: ["a wondeerfull quote"]
    };
  },
  methods: {
    newQuote(quot) {
      if (this.quots.length >= this.maxQuotes) {
        alert("only 10 quots");
      } else {
        this.quots.push(quot);
      }
      console.log(this.quots);
    },
    deletequote(index) {
      this.quots.splice(index, 1);
      console.log(this.quots);
    }
  },
  components: {
    CreateQuots,
    OuoteGrid,
    ProgreeBar,
    Quote,
    Author,
    New
  }
};
</script>

<style>
</style>
