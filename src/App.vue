<template>
  <div id="app">
    <h1>DIRECTIVES</h1>
    <p v-text="'hello  jagdjashdgjs'"></p>
    <p v-html="'<strong>hi</strong>'"></p>
    <p>{{hello}}</p>
    <h2>Custome Directives</h2>
    <p v-highlight:color.delayed="'yellow'">color this</p>
    <p v-local-heighlight:color.delayed="'yellow'">color this</p>
    <p
      v-local-heighlight:background.delayed.blink="{mainColor: 'red', secondColor:'green',delay : 1000}"
    >color this</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hello: "Gaurav Milind Palaspagar"
    };
  },
  directives: {
    "local-heighlight": {
      bind(el, binding, vnode) {
        //el.style.backgroundColor = 'green';
        //el.style.backgroundColor = binding.value;
        // adding Modifire
        var delay = 0;
        if (binding.modifiers["delayed"]) {
          delay = 2000;
        }
        if (binding.modifiers["blink"]) {
          let mainColor = binding.value.mainColor;
          let secondColor = binding.value.secondColor;
          let currentColor = mainColor;

          setTimeout(() => {
            setInterval(() => {
              currentColor == secondColor
                ? (currentColor = mainColor)
                : (currentColor = secondColor);
              if (binding.arg == "background") {
                el.style.backgroundColor = currentColor;
              } else {
                el.style.color = currentColor;
              }
            }, binding.value.delay);
          }, delay);
        } else {
          setTimeout(() => {
            if (binding.arg === "background") {
              el.style.backgroundColor = binding.value;
            } else {
              el.style.color = binding.value;
            }
          }, delay);
        }
      }
    }
  }
};
</script>

<style>
</style>
