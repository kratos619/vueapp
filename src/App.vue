<template>
  <div id="app">
    <h1>vuex...</h1>
    <AnotherResult></AnotherResult>
    <Result v-bind:counter="counter"></Result>
    <Counter v-on:counterUpdate="counter += $event"></Counter>
    <br>
    <AnotherCounter></AnotherCounter>
  </div>
</template>

<script>
import Result from "./components/Result.vue";
import Counter from "./components/Counter.vue";
import AnotherResult from "./components/AnotherResult.vue";
import AnotherCounter from "./components/AnotherCounter.vue";

export default {
  data() {
    return {
      counter: 0
    };
  },
  components: {
    Result,
    Counter,
    AnotherResult,
    AnotherCounter
  }
};
</script>

<style>
</style>
