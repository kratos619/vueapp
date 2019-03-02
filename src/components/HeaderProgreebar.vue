<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-6 mx-auto">
          <div class="progress">
            <div
              class="progress-bar bg-primary"
              role="progressbar"
              :style="{width:progressBarWidth + '%'}"
            >{{quoteCount}} / {{maxQuotes}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["quoteCount", "maxQuotes"],

  data() {
    return {
      progressBarWidth: 0
    };
  },
  updated() {
    this.progressBarWidth =
      (this.$props.quoteCount / this.$props.maxQuotes) * 100;
    console.log(this.progressBarWidth);
  }
};
</script>
<style scope>
</style>