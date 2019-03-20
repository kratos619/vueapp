<template>
  <div class="component">
    <h1>The User Component</h1>
    <p>I'm an awesome User!</p>
    <button>Change My Name</button>
    <hr>
    <div class="row">
      <div class="col-12 col-sm-6">
        <app-user-detail></app-user-detail>
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
