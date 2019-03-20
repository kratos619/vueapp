<template>
  <div class="component">
    <h1>The User Component</h1>
    <p>I'm an awesome User!</p>
    <button v-on:click="changeName">Change My Name</button>
    <hr>
    <div class="row">
      <div class="col-12 col-sm-6">
        <p v-for="(item, index) in readDataFromChild" :key="index">{{item.name}}</p>
        <app-user-detail
          v-on:sendDataToParent="readDataFromChild = $event"
          :myName="name"
          :childComponentMethodName="resetNameByParentComponent"
        ></app-user-detail>
      </div>
      <div class="col-12 col-sm-6">
        <app-user-edit></app-user-edit>
      </div>
    </div>
  </div>
</template>

<script>
import UserEdit from "./UserEdit.vue";
import UserDetail from "./UserDetials.vue";

export default {
  data() {
    return {
      readDataFromChild: "",
      name: "gaurav"
    };
  },
  methods: {
    changeName() {
      this.name = "asdasdass";
    },
    resetNameByParentComponent() {
      this.name = "name change by parent resetNameByParentComponent() method";
    }
  },
  components: {
    appUserDetail: UserDetail,
    appUserEdit: UserEdit
  }
};
</script>

<style scoped>
div {
  background-color: lightblue;
}
</style>
