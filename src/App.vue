<template>
  <div id="app">
    <h1>vuex...</h1>
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <div class="select is-rounded">
            <select v-model="componentsNames">
              <option value disabled selected>Choose your option</option>
              <option value="BasicTemplateOne">Basic Template One</option>
              <option value="BasicTemplateTwo">Basic Template Two</option>
              <option value="BasicTemplateThree">Basic Template Three</option>
            </select>
          </div>
          <TestOne></TestOne>
        </div>
        <div class="col-md-8">
          <keep-alive>
            <component :is="componentsNames"></component>
          </keep-alive>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TestOne from "./components/Forms.vue";
import BasicTemplateOne from "./components/BasicTemplateOne.vue";
import BasicTemplateTwo from "./components/BasicTemplateTwo.vue";
import BasicTemplateThree from "./components/BasicTemplateThree.vue";

export default {
  data() {
    return {
      componentsNames: "BasicTemplateOne"
    };
  },
  components: {
    TestOne,
    BasicTemplateOne,
    BasicTemplateTwo,
    BasicTemplateThree
  },
  mounted() {}
};
</script>

<style>
</style>
